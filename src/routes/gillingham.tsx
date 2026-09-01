import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import { GillinghamRegistrationForm } from "@/components/gillingham-registration-form";

export const Route = createFileRoute("/gillingham")({
  head: () => ({
    meta: [
      { title: "New Gillingham (KMWA) Branch | Darul-ilm Chatham" },
      {
        name: "description",
        content:
          "Our new Darul-ilm branch at KMWA, 114 Canterbury St, Gillingham ME7 5UH. Class times, fees from £50 per month and enrolment details.",
      },
      {
        property: "og:title",
        content: "New Gillingham (KMWA) Branch | Darul-ilm Chatham",
      },
      {
        property: "og:description",
        content:
          "Qur'an recitation, memorisation and Islamic studies for 5–16 year olds at our new Gillingham branch. Limited spaces available.",
      },
    ],
  }),
  component: Gillingham,
});

function Gillingham() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        title="Gillingham KMWA School"
        eyebrow="New branch"
        subtitle="A place where young hearts connect with the Qur'an and Deen."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="font-semibold text-primary">
          Alhamdulillah! We're excited to announce the opening of our new Darul-ilm branch at KMWA,
          Canterbury Street, Gillingham.
        </p>

        <h2 className="heading-lg rule-accent mt-10 text-primary">What we offer</h2>
        <ul className="mt-4 space-y-2 text-muted-foreground">
          {[
            "Islamic Studies (Aqidah, Fiqh, Akhlaaq, Sirah…)",
            "Qur'an Recitation & Memorisation",
            "Age-appropriate curriculum for 5–16 year olds",
            "Taught by experienced, qualified teachers",
            "Focus on spirituality, discipline and character building",
          ].map((item) => (
            <li key={item} className="border-l-2 border-accent pl-4">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <article className="panel-card p-6 w-full">
            <h3 className="font-display text-xl uppercase text-primary">Weekend classes</h3>
            <p className="mt-2 text-sm">Saturday & Sunday: 9:45am – 1:00pm</p>
          </article>
          {/* <article className="panel-card p-6">
            <h3 className="font-display text-xl uppercase text-primary">Weekday classes</h3>
            <p className="mt-2 text-sm">Monday – Thursday: 6:30pm – 7:30pm</p>
          </article> */}
        </div>

        <h2 className="heading-lg rule-accent mt-14 text-primary">Fees</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-4">
          {[
            ["1 child", "£50"],
            ["2 children", "£90"],
            ["3 children", "£135"],
            ["4 children", "£180"],
          ].map(([label, price]) => (
            <li key={label} className="panel-card p-5 text-center">
              <span className="block font-display text-2xl text-accent">{price}</span>
              <span className="mt-1 block text-xs text-muted-foreground">{label} / month</span>
            </li>
          ))}
        </ul>

        <h2 className="heading-lg rule-accent mt-14 text-primary">Location</h2>
        <p className="mt-3 text-muted-foreground">KMWA, 114 Canterbury St, Gillingham ME7 5UH</p>

        {/* <h2 className="heading-lg rule-accent mt-14 text-primary">Enquiries & enrolment</h2>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          <li>
            Message / Call / WhatsApp: Imam Didar{" "}
            <a className="text-accent hover:underline" href="tel:07534979369">
              07534 979369
            </a>
          </li>
          <li>
            Administrator:{" "}
            <a className="text-accent hover:underline" href="tel:07778200746">
              07778 200746
            </a>
          </li>
          <li>
            Email:{" "}
            <a className="text-accent hover:underline" href="mailto:Info@darulilmchatham.com">
              Info@darulilmchatham.com
            </a>
          </li>
        </ul>
        <p className="mt-6 font-semibold text-primary">
          Limited spaces available — register now to secure your child's place.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/classes#apply"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-6 py-3 font-display text-lg uppercase tracking-wide text-primary-foreground transition-colors hover:bg-navy-deep"
          >
            Apply
          </a>
          <a
            href="https://forms.gle/bn3QW22ws5RraHCL6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md border-2 border-primary px-6 py-3 font-display text-lg uppercase tracking-wide text-primary transition-colors hover:bg-secondary"
          >
            Teacher vacancies
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Male and female teachers needed! If you are interested in applying, please register your
          interest using the link above.
        </p> */}
      </section>

      <section className="bg-sand mx-auto  px-6 py-14" id="apply">
        <div className=" text-center">
          <span className="eyebrow">Apply today</span>
          <h2 className="heading-lg mt-4 text-primary">Register for the Gillingham waiting list</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Fill in the form below and a member of the Darul-ilm team will be in touch. Since most
            classes are currently full, most applications will join our waiting list.
          </p>
        </div>

        <GillinghamRegistrationForm />
      </section>

      <SiteFooter />
    </div>
  );
}
