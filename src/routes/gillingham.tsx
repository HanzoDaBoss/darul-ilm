import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import { GillinghamRegistrationForm } from "@/components/gillingham-registration-form";
import bannerImage from "@/assets/darul-ilm-stock-photo-3.jpg";

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
      <section className="relative isolate h-[400px] overflow-hidden sm:h-[450px] md:h-[480px]">
        {/* Background image */}
        <img
          src={bannerImage}
          alt="Children learning at Darul-ilm Kent"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Subtle overall darkening */}
        <div className="absolute inset-0 -z-20 bg-black/10" />

        {/* Gradient behind text */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-black/55 to-transparent" />

        {/* Title */}
        <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-10 sm:px-8 sm:pb-12 md:px-12 md:pb-14 lg:px-16">
          <div className="max-w-3xl">
            <p
              className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary sm:text-base"
              style={{
                textShadow: "0 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Our
            </p>

            <h1
              className="font-display text-5xl font-bold uppercase leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl"
              style={{
                textShadow: "0 4px 10px rgba(0,0,0,0.9), 0 8px 30px rgba(0,0,0,0.55)",
              }}
            >
              Gillingham School
            </h1>

            <div
              className="my-5 h-1 w-14 rounded-full bg-primary"
              style={{
                boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
              }}
            />

            <p
              className="max-w-2xl text-base leading-7 text-white sm:text-lg sm:leading-8"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.9), 0 5px 18px rgba(0,0,0,0.45)",
              }}
            >
              Children&apos;s madrasah classes at Gillingham Masjid.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* <p className="font-semibold text-primary">
          Alhamdulillah! We're excited to announce the opening of our new Darul-ilm branch at KMWA,
          Canterbury Street, Gillingham.
        </p> */}

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
