import { useState, type ChangeEvent, type FormEvent } from "react";

/**
 * Darul-ilm / IBE UK student registration form.
 *
 *
 * Submission first tries a direct browser fetch to IBEUK_ENDPOINT
 * (this is what the original page's own jQuery does, cross-domain,
 * so it should already be CORS-enabled). If that call fails due to
 * CORS, switch USE_PROXY to true to route through the Netlify
 * function fallback instead (see netlify/functions/submit-application.ts).
 *
 * Styling follows the same design tokens as ApplicationForm.tsx
 * (panel-card, btn-pill, fieldClass, labelClass) so this drops into
 * the same visual system. A few extra tokens (sectionCardClass,
 * chipClass, btnSecondaryClass, captchaButtonClass, alert classes)
 * are derived from those same CSS variables — adjust if your
 * `destructive` token isn't defined in your theme.
 */

const IBEUK_ENDPOINT = "https://www.ibeuk.org/api/ibeams/v3/reg-form.php";
const PROXY_ENDPOINT = "/.netlify/functions/submit-application";
const USE_PROXY = false; // flip to true if direct fetch hits a CORS error

const CAPTCHA_ORDER = ["1", "3", "2", "5", "4"] as const; // display order shown to user
const CAPTCHA_ANSWER = "12345"; // must be clicked in this numeric order

// --- shared style tokens (matching ApplicationForm.tsx) ---
const fieldClass =
  "mt-1 block w-full rounded-md border border-input bg-secondary/40 px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring";
const labelClass = "block text-sm font-semibold text-primary";
const sectionCardClass = "relative space-y-3 rounded-lg border border-input bg-secondary/20 p-4";
const chipClass =
  "cursor-pointer rounded-full border border-input bg-secondary/40 px-3 py-1 text-xs font-medium text-foreground hover:bg-secondary/60";
const btnSecondaryClass =
  "inline-flex items-center justify-center rounded-full border border-input bg-secondary/40 px-4 py-2 text-sm font-semibold text-foreground hover:bg-secondary/60";
const captchaButtonClass =
  "flex h-10 w-10 items-center justify-center rounded-full border border-input bg-secondary/40 font-semibold text-foreground hover:bg-secondary/60 disabled:cursor-not-allowed disabled:opacity-40";
const removeButtonClass =
  "absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-input bg-secondary text-muted-foreground hover:text-foreground";
const alertInfoClass =
  "rounded-md border border-input bg-secondary/30 p-3 text-sm text-muted-foreground";
const alertErrorClass =
  "rounded-md border border-destructive/40 bg-destructive/10 p-3 text-sm text-foreground";
const alertSuccessClass =
  "rounded-md border border-input bg-secondary/40 p-3 text-sm text-foreground";

type RelationType = "parent" | "sibling" | "emergency" | "other" | "";

interface PrimaryFields {
  name: string;
  surname: string;
  contact_relation: string;
  contact_type: RelationType;
  contact_email: string;
  cemail: string;
  contact_password: string;
  cpw: string;
  tel: string;
  mob: string;
  address: string;
  postcode: string;
  consent: boolean;
}

interface Student {
  child: string;
  sn: string;
  dob: string;
  gender: string;
  student_email: string;
  application_group: string;
  med: string;
  notes: string;
}

interface Contact {
  name: string;
  cemail: string;
  ctel: string;
  cpassword: string;
  ccpw: string;
  cmob: string;
  cmob2: string;
  relation: string;
  type: RelationType;
  primary: boolean;
}

interface ApiMessage {
  type: "error" | "success" | string;
  msg: string;
}

interface DisplayMessage {
  type: "error" | "success";
  msg: string;
}

const emptyStudent = (): Student => ({
  child: "",
  sn: "",
  dob: "",
  gender: "",
  student_email: "",
  application_group: "",
  med: "",
  notes: "",
});

const emptyContact = (): Contact => ({
  name: "",
  cemail: "",
  ctel: "",
  cpassword: "",
  ccpw: "",
  cmob: "",
  cmob2: "",
  relation: "",
  type: "",
  primary: false,
});

const GROUP_OPTIONS = [
  "Weekend Madrasa (Saturday & Sunday, 2pm - 5pm)",
  "Weekday Session 1 (Monday to Thursday, 4.30pm - 6pm)",
  "Weekday Session 2 (Monday to Thursday, 6.10pm - 7.40pm)",
  "Weekend Madrasa (Saturday & Sunday, 9:45am - 1pm)",
];

const RELATION_TYPES: { value: RelationType; label: string }[] = [
  { value: "parent", label: "Parent" },
  { value: "sibling", label: "Sibling" },
  { value: "emergency", label: "Emergency" },
  { value: "other", label: "Other" },
];

export function ChathamRegistrationForm() {
  const [primary, setPrimary] = useState<PrimaryFields>({
    name: "",
    surname: "",
    contact_relation: "",
    contact_type: "parent",
    contact_email: "",
    cemail: "",
    contact_password: "",
    cpw: "",
    tel: "",
    mob: "",
    address: "",
    postcode: "",
    consent: false,
  });

  const [students, setStudents] = useState<Student[]>([emptyStudent()]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [referrer, setReferrer] = useState("");
  void setReferrer; // wire this up to a query-param/prop if you track referrals

  const [captchaClicks, setCaptchaClicks] = useState<string[]>([]);
  const [captchaDisabled, setCaptchaDisabled] = useState<number[]>([]);
  const [captchaError, setCaptchaError] = useState("");
  const [captchaPassed, setCaptchaPassed] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([]);

  function updatePrimary<K extends keyof PrimaryFields>(field: K, value: PrimaryFields[K]) {
    setPrimary((p) => ({ ...p, [field]: value }));
  }

  function updateStudent<K extends keyof Student>(index: number, field: K, value: Student[K]) {
    setStudents((list) => list.map((s, i) => (i === index ? { ...s, [field]: value } : s)));
  }

  function addStudent() {
    setStudents((list) => [...list, emptyStudent()]);
  }

  function removeStudent(index: number) {
    if (students.length <= 1) return;
    if (!window.confirm("Remove this student? Please confirm.")) return;
    setStudents((list) => list.filter((_, i) => i !== index));
  }

  function updateContact<K extends keyof Contact>(index: number, field: K, value: Contact[K]) {
    setContacts((list) => list.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  }

  function addContact() {
    setContacts((list) => [...list, emptyContact()]);
  }

  function removeContact(index: number) {
    if (!window.confirm("Remove this contact? Please confirm.")) return;
    setContacts((list) => list.filter((_, i) => i !== index));
  }

  function handleAutoRelation(label: string, type: RelationType) {
    updatePrimary("contact_relation", label);
    updatePrimary("contact_type", type);
  }

  function handleCaptchaClick(digit: string, btnIndex: number) {
    if (captchaDisabled.includes(btnIndex)) return;
    const nextClicks = [...captchaClicks, digit];
    setCaptchaClicks(nextClicks);
    setCaptchaDisabled((d) => [...d, btnIndex]);

    if (nextClicks.length === 5) {
      const joined = nextClicks.join("");
      if (joined === CAPTCHA_ANSWER) {
        setCaptchaPassed(true);
        setCaptchaError("");
      } else {
        setCaptchaError(
          "Sorry the bot check failed. Please ensure you are clicking the buttons in order 1,2,3,4,5",
        );
        resetCaptcha();
      }
    }
  }

  function resetCaptcha() {
    setCaptchaClicks([]);
    setCaptchaDisabled([]);
    setCaptchaPassed(false);
  }

  function buildBody(): URLSearchParams {
    const params = new URLSearchParams();

    // honeypot fields - always left blank by real users
    params.append("website", "");
    params.append("url", "");
    params.append("bakwaas", "");

    params.append("name", primary.name);
    params.append("surname", primary.surname);
    params.append("contact_relation", primary.contact_relation);
    params.append("contact_type", primary.contact_type);
    params.append("contact_email", primary.contact_email);
    params.append("cemail", primary.cemail);
    params.append("contact_password", primary.contact_password);
    params.append("cpw", primary.cpw);
    params.append("tel", primary.tel);
    params.append("mob", primary.mob);
    params.append("address", primary.address);
    params.append("postcode", primary.postcode);

    students.forEach((s, i) => {
      params.append("child[]", s.child);
      params.append("sn[]", s.sn);
      params.append("dob[]", s.dob);
      params.append("gender[]", s.gender);
      params.append("student_email[]", s.student_email);
      params.append(`application_group[${i}][]`, s.application_group);
      params.append("med[]", s.med);
      params.append("notes[]", s.notes);
    });

    contacts.forEach((c) => {
      params.append("contacts[]", c.name);
      params.append("cemails[]", c.cemail);
      params.append("ctels[]", c.ctel);
      params.append("cpassword[]", c.cpassword);
      params.append("ccpw[]", c.ccpw);
      params.append("cmobs[]", c.cmob);
      params.append("cmob2s[]", c.cmob2);
      params.append("relations[]", c.relation);
      params.append("types[]", c.type);
      params.append("primary[]", c.primary ? "1" : "0");
    });

    params.append("consent", primary.consent ? "1" : "");
    params.append("referrer", referrer);
    params.append("h", "rMx_ZGFydWxpbG0uaWJlLWFtcy5vcmcudWs=");
    params.append("t", "darulilm");
    params.append("sid", "bypass");
    params.append("capCheck", "passed");

    return params;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessages([]);

    if (!primary.consent) {
      setMessages([{ type: "error", msg: "You must consent for us to process this form." }]);
      return;
    }
    if (!captchaPassed) {
      setMessages([{ type: "error", msg: "Please complete the bot check before submitting." }]);
      return;
    }

    setSubmitting(true);
    const body = buildBody();
    const url = USE_PROXY ? PROXY_ENDPOINT : IBEUK_ENDPOINT;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      const text = await res.text();
      const data: ApiMessage[] = JSON.parse(text);

      const hasError = data.some((d) => d.type === "error");
      setMessages(
        data.map((d) => ({
          type: d.type === "error" ? "error" : "success",
          msg: d.msg,
        })),
      );

      if (!hasError) {
        setPrimary({
          name: "",
          surname: "",
          contact_relation: "",
          contact_type: "parent",
          contact_email: "",
          cemail: "",
          contact_password: "",
          cpw: "",
          tel: "",
          mob: "",
          address: "",
          postcode: "",
          consent: false,
        });
        setStudents([emptyStudent()]);
        setContacts([]);
        resetCaptcha();
      }
    } catch (err) {
      setMessages([
        {
          type: "error",
          msg: "Sorry, something went wrong submitting the form. If this keeps happening, it may be a CORS issue — try enabling the proxy fallback.",
        },
      ]);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="panel-card mx-auto mt-10 max-w-3xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className={alertInfoClass}>
          Please fill the details of student(s) to our waiting list. For more information, please
          contact us about this form.
        </div>

        {messages.length > 0 && (
          <div className="space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.type === "error" ? alertErrorClass : alertSuccessClass}>
                {m.msg}
              </div>
            ))}
          </div>
        )}

        {/* honeypot fields - hidden from real users */}
        <input
          type="text"
          name="website"
          value=""
          onChange={() => {}}
          tabIndex={-1}
          autoComplete="off"
          style={{ opacity: 0, position: "absolute", height: 0, width: 0 }}
        />
        <input
          type="text"
          name="url"
          value=""
          onChange={() => {}}
          tabIndex={-1}
          autoComplete="off"
          style={{ opacity: 0, position: "absolute", height: 0, width: 0 }}
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className={labelClass}>
              Your Name (Parent/Guardian)
            </label>
            <input
              id="name"
              required
              placeholder="Full name"
              className={fieldClass}
              value={primary.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatePrimary("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="surname" className={labelClass}>
              Surname
            </label>
            <input
              id="surname"
              required
              placeholder="Surname"
              className={fieldClass}
              value={primary.surname}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePrimary("surname", e.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="contact_relation" className={labelClass}>
              Relation to Student
            </label>
            <input
              id="contact_relation"
              required
              placeholder="e.g. Mother"
              className={fieldClass}
              value={primary.contact_relation}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePrimary("contact_relation", e.target.value)
              }
            />
            <div className="mt-2 flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Autofill:</span>
              <span className={chipClass} onClick={() => handleAutoRelation("Father", "parent")}>
                Father
              </span>
              <span className={chipClass} onClick={() => handleAutoRelation("Mother", "parent")}>
                Mother
              </span>
              <span className={chipClass} onClick={() => handleAutoRelation("Brother", "sibling")}>
                Brother
              </span>
              <span className={chipClass} onClick={() => handleAutoRelation("Sister", "sibling")}>
                Sister
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="contact_type" className={labelClass}>
              Type
            </label>
            <select
              id="contact_type"
              required
              className={fieldClass}
              value={primary.contact_type}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                updatePrimary("contact_type", e.target.value as RelationType)
              }
            >
              {RELATION_TYPES.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="contact_email" className={labelClass}>
              Your Email
            </label>
            <input
              id="contact_email"
              type="email"
              required
              placeholder="you@example.com"
              className={fieldClass}
              value={primary.contact_email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePrimary("contact_email", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="cemail" className={labelClass}>
              Confirm Email
            </label>
            <input
              id="cemail"
              type="email"
              required
              placeholder="you@example.com"
              className={fieldClass}
              value={primary.cemail}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePrimary("cemail", e.target.value)
              }
            />
          </div>

          <div>
            <label htmlFor="contact_password" className={labelClass}>
              Parent Portal Password
            </label>
            <input
              id="contact_password"
              type="password"
              className={fieldClass}
              value={primary.contact_password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updatePrimary("contact_password", e.target.value)
              }
            />
          </div>
          <div>
            <label htmlFor="cpw" className={labelClass}>
              Confirm Password
            </label>
            <input
              id="cpw"
              type="password"
              className={fieldClass}
              value={primary.cpw}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatePrimary("cpw", e.target.value)}
            />
          </div>
        </div>

        <div className={alertInfoClass}>
          If you already have an account and a password, you can skip this and leave it blank.
          Otherwise set your password now to log in to the parent portal.
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="tel" className={labelClass}>
              Telephone
            </label>
            <input
              id="tel"
              maxLength={15}
              className={fieldClass}
              value={primary.tel}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatePrimary("tel", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="mob" className={labelClass}>
              Mobile
            </label>
            <input
              id="mob"
              maxLength={15}
              required
              className={fieldClass}
              value={primary.mob}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatePrimary("mob", e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="address" className={labelClass}>
            Address
          </label>
          <textarea
            id="address"
            required
            rows={4}
            placeholder="Residential address"
            className={fieldClass}
            value={primary.address}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              updatePrimary("address", e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="postcode" className={labelClass}>
            Postcode
          </label>
          <input
            id="postcode"
            maxLength={8}
            required
            className={fieldClass}
            value={primary.postcode}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updatePrimary("postcode", e.target.value)
            }
          />
        </div>

        <h2 className="pt-2 text-lg font-semibold text-primary">Students</h2>
        {students.map((s, i) => (
          <div key={i} className={sectionCardClass}>
            {students.length > 1 && (
              <button
                type="button"
                onClick={() => removeStudent(i)}
                className={removeButtonClass}
                aria-label="Remove student"
              >
                ✕
              </button>
            )}
            <div className="text-sm font-semibold text-primary">Student #{i + 1}</div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="First Name"
                required
                className={fieldClass}
                value={s.child}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateStudent(i, "child", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Surname"
                required
                className={fieldClass}
                value={s.sn}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateStudent(i, "sn", e.target.value)
                }
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="date"
                required
                className={fieldClass}
                value={s.dob}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateStudent(i, "dob", e.target.value)
                }
              />
              <select
                className={fieldClass}
                value={s.gender}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  updateStudent(i, "gender", e.target.value)
                }
              >
                <option value="">SELECT</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="Student Portal Login Email"
              className={fieldClass}
              value={s.student_email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateStudent(i, "student_email", e.target.value)
              }
            />
            <select
              required
              className={fieldClass}
              value={s.application_group}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                updateStudent(i, "application_group", e.target.value)
              }
            >
              <option value="">--SELECT GROUP--</option>
              {GROUP_OPTIONS.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
            <details>
              <summary className="cursor-pointer text-sm font-medium text-accent">
                Add medical info/notes
              </summary>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <textarea
                  placeholder="Medical Conditions. Please leave blank if none."
                  className={fieldClass}
                  rows={3}
                  value={s.med}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    updateStudent(i, "med", e.target.value)
                  }
                />
                <textarea
                  placeholder="E.g. class request or other specifics"
                  className={fieldClass}
                  rows={3}
                  maxLength={500}
                  value={s.notes}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    updateStudent(i, "notes", e.target.value)
                  }
                />
              </div>
            </details>
          </div>
        ))}
        <div className="text-right">
          <button type="button" onClick={addStudent} className={btnSecondaryClass}>
            Add Another Student
          </button>
        </div>

        <h2 className="pt-2 text-lg font-semibold text-primary">Contacts</h2>
        <div className={alertInfoClass}>
          You are the primary contact. You can add more contacts below.
        </div>

        {contacts.map((c, i) => (
          <div key={i} className={sectionCardClass}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-primary">
                Additional Contact #{i + 1}
              </span>
              <button
                type="button"
                onClick={() => removeContact(i)}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Remove
              </button>
            </div>
            <input
              type="text"
              placeholder="Contact's Full Name"
              required
              className={fieldClass}
              value={c.name}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                updateContact(i, "name", e.target.value)
              }
            />
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Email (must be unique)"
                className={fieldClass}
                value={c.cemail}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "cemail", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Telephone"
                className={fieldClass}
                value={c.ctel}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "ctel", e.target.value)
                }
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="password"
                placeholder="Parent Portal Password"
                className={fieldClass}
                value={c.cpassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "cpassword", e.target.value)
                }
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className={fieldClass}
                value={c.ccpw}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "ccpw", e.target.value)
                }
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Mobile"
                className={fieldClass}
                value={c.cmob}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "cmob", e.target.value)
                }
              />
              <input
                type="text"
                placeholder="Alt. Mobile"
                className={fieldClass}
                value={c.cmob2}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "cmob2", e.target.value)
                }
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Relation"
                required
                className={fieldClass}
                value={c.relation}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "relation", e.target.value)
                }
              />
              <select
                required
                className={fieldClass}
                value={c.type}
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  updateContact(i, "type", e.target.value as RelationType)
                }
              >
                <option value="">SELECT</option>
                {RELATION_TYPES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <label className="flex items-start gap-2 rounded-md border border-input bg-secondary/30 p-2 text-sm text-foreground">
              <input
                type="checkbox"
                className="mt-0.5"
                checked={c.primary}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateContact(i, "primary", e.target.checked)
                }
              />
              <span>
                <strong>Primary Contact?</strong> This means the contact will receive emails related
                to the student and see the student on the parent portal.
              </span>
            </label>
          </div>
        ))}
        <div className="text-right">
          <button type="button" onClick={addContact} className={btnSecondaryClass}>
            Add Another Contact
          </button>
        </div>

        <hr className="border-input" />

        <label className="flex items-start gap-2 text-sm text-foreground">
          <input
            type="checkbox"
            required
            className="mt-0.5"
            checked={primary.consent}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updatePrimary("consent", e.target.checked)
            }
          />
          <span>
            I consent that IBEUK can process this form and submit directly to Darul-ilm Chatham.
            Your data will not be stored nor used by us.
          </span>
        </label>

        <div className="rounded-lg border border-input bg-secondary/20 p-4">
          <div className="mb-3 text-sm text-muted-foreground">
            Please press the following buttons in order to confirm you're not a bot:
          </div>
          {captchaError && <div className={`${alertErrorClass} mb-3`}>{captchaError}</div>}
          {!captchaPassed ? (
            <div className="flex flex-wrap items-center gap-2">
              {CAPTCHA_ORDER.map((digit, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={captchaDisabled.includes(idx)}
                  onClick={() => handleCaptchaClick(digit, idx)}
                  className={captchaButtonClass}
                >
                  {digit}
                </button>
              ))}
              <button type="button" onClick={resetCaptcha} className={btnSecondaryClass}>
                Restart
              </button>
            </div>
          ) : (
            <button
              type="submit"
              disabled={submitting}
              className="btn-pill disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? "Submitting..." : "Submit Application"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
