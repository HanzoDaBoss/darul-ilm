import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import { ChathamRegistrationForm } from "@/components/chatham-registration-form";
import quranClass from "@/assets/happy-kids.jpg";

export const Route = createFileRoute("/chatham")({
  head: () => ({
    meta: [
      { title: "Chatham School | Darul-ilm Chatham" },
      {
        name: "description",
        content:
          "Weekday and weekend madrasah class times, monthly fees and the registration form for Darul-ilm Chatham children's classes.",
      },
      {
        property: "og:title",
        content: "Class Information & Application | Darul-ilm Chatham",
      },
      {
        property: "og:description",
        content:
          "Four class options across weekdays and weekends. Fees from £50 per month. Join our waiting list online.",
      },
    ],
  }),
  component: Classes,
});

const options = [
  {
    name: "Option 1 — Weekday School",
    times: ["Monday – Thursday: 4:30pm – 6:00pm"],
    note: "The student must attend all 4 days.",
  },
  {
    name: "Option 2 — Weekday School",
    times: ["Monday – Thursday: 6:10pm – 7:40pm"],
    note: "The student must attend all 4 days.",
  },
  {
    name: "Option 3 — Weekend School",
    times: ["Saturday & Sunday: 9:45am – 1:00pm"],
    note: "The student must attend both days.",
  },
  {
    name: "Option 4 — Weekend School",
    times: ["Saturday & Sunday: 2:00pm – 5:00pm"],
    note: "The student must attend both days.",
  },
];

function Classes() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* Chatham hero */}
      <section className="relative isolate h-[400px] overflow-hidden sm:h-[450px] md:h-[480px]">
        {/* Background image */}
        <img
          src={quranClass}
          alt="Children learning at Darul-ilm Kent"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Subtle overall darkening */}
        <div className="absolute inset-0 -z-20 bg-black/10" />

        {/* Stronger gradient behind text */}
        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-r
            from-black/75
            via-black/40
            to-transparent
          "
        />

        {/* Bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 -z-10 h-1/2
            bg-gradient-to-t
            from-black/55
            to-transparent
          "
        />

        {/* Hero content */}
        <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-10 sm:px-8 sm:pb-12 md:px-12 md:pb-14 lg:px-16">
          <div className="max-w-3xl">
            <p
              className="
                mb-3
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-primary
                sm:text-base
              "
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Info
            </p>

            <h1
              className="
                font-display
                text-5xl
                font-bold
                uppercase
                leading-[0.9]
                tracking-tight
                text-white
                sm:text-6xl
                md:text-7xl
              "
              style={{
                textShadow: "0 4px 10px rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.55)",
              }}
            >
              Chatham
              <br />
              <span className="text-primary">School</span>
            </h1>

            <div
              className="my-5 h-1 w-14 rounded-full bg-primary"
              style={{
                boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            />

            <p
              className="
                max-w-2xl
                text-base
                leading-7
                text-white
                sm:text-lg
                sm:leading-8
              "
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 5px 18px rgba(0,0,0,0.45)",
              }}
            >
              Children&apos;s madrasah classes at Chatham Hill Masjid.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pt-14">
        <div className="rounded-lg border-l-4 border-accent bg-secondary p-6">
          <p className="font-display text-xl uppercase leading-snug text-primary">
            Please note that we currently do not have spaces in the majority of our classes. Please
            fill in the form to join our waiting list.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Teachers needed! If you would like to get involved with helping the school through
            volunteering, teaching or any other way, please do get in touch.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="heading-lg rule-accent text-primary">Children's madrasa classes</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {options.map((option) => (
            <article key={option.name} className="panel-card p-6">
              <h3 className="font-display text-xl uppercase text-primary">{option.name}</h3>
              <ul className="mt-3 space-y-1 text-sm text-foreground">
                {option.times.map((time) => (
                  <li key={time}>{time}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">{option.note}</p>
            </article>
          ))}
        </div>

        <h2 className="heading-lg rule-accent mt-14 text-primary">
          Fees for all classes, per month
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {[
            ["One child", "£50"],
            ["Two siblings", "£90"],
            ["Three siblings", "£135"],
          ].map(([label, price]) => (
            <li key={label} className="panel-card p-6 text-center">
              <span className="block font-display text-3xl text-accent">{price}</span>
              <span className="mt-1 block text-sm text-muted-foreground">{label}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-sand mx-auto  px-6 py-14" id="apply">
        <div className=" text-center">
          <span className="eyebrow">Apply today</span>
          <h2 className="heading-lg mt-4 text-primary">Register for the Chatham waiting list</h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Fill in the form below and a member of the Darul-ilm team will be in touch. Since most
            classes are currently full, most applications will join our waiting list.
          </p>
        </div>

        <ChathamRegistrationForm />
      </section>

      <SiteFooter />
    </div>
  );
}
