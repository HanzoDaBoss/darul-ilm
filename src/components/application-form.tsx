import { useState } from "react";

const fieldClass =
  "mt-1 block w-full rounded-md border border-input bg-secondary/40 px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring";
const labelClass = "block text-sm font-semibold text-primary";

export function ApplicationForm() {
  const [form, setForm] = useState({
    parent: "",
    phone: "",
    email: "",
    campus: "Chatham Hill Masjid",
    child: "",
    age: "",
    timetable: "Weekday – Option 1 (Mon–Thu, 4:30–6:00pm)",
    notes: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Class application — ${form.child || form.parent}`;
    const body = [
      `Parent / Guardian: ${form.parent}`,
      `Contact number: ${form.phone}`,
      `Email: ${form.email}`,
      `Preferred campus: ${form.campus}`,
      `Child's name: ${form.child}`,
      `Child's age: ${form.age}`,
      `Preferred timetable: ${form.timetable}`,
      "",
      form.notes,
    ].join("\n");
    window.location.href = `mailto:Info@darulilmchatham.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="panel-card mx-auto mt-10 max-w-2xl p-6 md:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="parent" className={labelClass}>
              Parent / Guardian Name
            </label>
            <input
              id="parent"
              required
              placeholder="Full name"
              value={form.parent}
              onChange={update("parent")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Contact Number
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="07..."
              value={form.phone}
              onChange={update("phone")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="you@example.com"
              value={form.email}
              onChange={update("email")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="campus" className={labelClass}>
              Preferred Campus
            </label>
            <select
              id="campus"
              value={form.campus}
              onChange={update("campus")}
              className={fieldClass}
            >
              <option>Chatham Hill Masjid</option>
              <option>KMWA, Gillingham</option>
            </select>
          </div>
          <div>
            <label htmlFor="child" className={labelClass}>
              Child's Name
            </label>
            <input
              id="child"
              required
              placeholder="Full name"
              value={form.child}
              onChange={update("child")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="age" className={labelClass}>
              Child's Age
            </label>
            <input
              id="age"
              required
              placeholder="e.g. 8"
              value={form.age}
              onChange={update("age")}
              className={fieldClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="timetable" className={labelClass}>
            Preferred Timetable
          </label>
          <select
            id="timetable"
            value={form.timetable}
            onChange={update("timetable")}
            className={fieldClass}
          >
            <option>Weekday – Option 1 (Mon–Thu, 4:30–6:00pm)</option>
            <option>Weekday – Option 2 (Mon–Thu, 6:10–7:40pm)</option>
            <option>Weekend – Option 3 (Sat & Sun, 9:45am–1:00pm)</option>
            <option>Weekend – Option 4 (Sat & Sun, 2:00–5:00pm)</option>
          </select>
        </div>

        <div>
          <label htmlFor="notes" className={labelClass}>
            Anything else we should know?
          </label>
          <textarea
            id="notes"
            rows={4}
            placeholder="Optional message"
            value={form.notes}
            onChange={update("notes")}
            className={fieldClass}
          />
        </div>

        <button type="submit" className="btn-pill">
          Submit Application
        </button>

        <p className="text-sm text-muted-foreground">
          Submitting opens your email app with the details filled in, sent to
          Info@darulilmchatham.com. You can also use our{" "}
          <a
            className="text-accent hover:underline"
            href="https://registrations.ibuk.org/DarulilmKMWA"
            target="_blank"
            rel="noreferrer"
          >
            online registration portal
          </a>
          .
        </p>
      </form>
    </div>
  );
}
