import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import quranClass from "@/assets/happy-kids.jpg";
import classroom from "@/assets/darul-ilm-stock-photo-1.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Darul-ilm Chatham | Islamic School in Medway" },
      {
        name: "description",
        content:
          "Darul-ilm Chatham is an Islamic educational institute at Chatham Hill Masjid offering Qur'an and Islamic studies classes for children across Medway.",
      },
      { property: "og:title", content: "Darul-ilm Chatham | Islamic School in Medway" },
      {
        property: "og:description",
        content:
          "Weekday and weekend madrasah classes for ages 5-16, taught by qualified Islamic scholars in Chatham and Gillingham.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <a
        className="fixed right-5 bottom-5 max-w-40 md:max-w-50 z-50"
        aria-label="Chat on WhatsApp"
        href="https://wa.me/447778020745"
        target="_blank"
      >
        {" "}
        <img
          alt="Chat on WhatsApp"
          src="src/assets/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.png"
        />
      </a>

      <section className="band-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-5 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <div className="flex flex-row justify-between">
              <p className="eyebrow">Home</p>
              <a
                href="https://www.zeffy.com/en-GB/ticketing/darul-ilm-kent-2026-pillars"
                target="_blank"
                className="btn-pill text-xs p-3"
              >
                Donate
              </a>
            </div>
            <h1 className="heading-xl mt-5 text-navy welcome-up">
              Welcome to
              <br />
              <span className="text-primary">Darul-ilm Kent</span>
            </h1>
            <h2 className="text-lg mt-5 text-navy welcome-up leading-6">
              Raising the Next Generation by
              <br className="md:hidden my-0" />
              <span className="italic text-primary"> Nurturing Hearts and Minds.</span>
            </h2>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground text-justify">
              A weekday and weekend madrasah serving the children of Medway — where children come to
              know their Dīn, love Allah and His Messenger ﷺ, and carry taqwā into how they live,
              taught with excellence by qualified scholars.
            </p>
            <div className="mt-8 flex flex-col gap-3 justify-center">
              <a
                href=" https://registrations.ibeuk.org/darulilm"
                target="_blank"
                className="btn-pill text-md"
              >
                Apply at Chatham
              </a>
              <a
                href="https://registrations.ibeuk.org/DarulilmKMWA"
                target="_blank"
                className="btn-pill-ghost text-md"
              >
                Apply at Gillingham
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { k: "2017", v: "Founded with 5 students" },
                { k: "2", v: "Branches across Medway" },
                { k: "5–16", v: "Children's classes" },
              ].map((stat) => (
                <div key={stat.k}>
                  <dt className="font-display text-3xl font-bold text-navy text-center">
                    {stat.k}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground text-center">{stat.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <img
            src={quranClass}
            alt="An open Qur'an on a wooden stand in a bright classroom"
            width={1024}
            height={1280}
            className="w-full rounded-3xl object-cover panel-card"
          />
        </div>
      </section>

      <section className="band-navy">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-5 text-center text-sm text-navy-foreground/85">
          <p>
            <span className="font-semibold text-accent">Places are limited</span> in most of our
            current classes — <p className="">Apply above to join our waiting list</p>.
          </p>
          <span className="hidden text-navy-foreground/30 sm:inline">|</span>
          {/* <p>
            New branch now open at{" "}
            <Link to="/gillingham" className="underline hover:text-accent">
              KMWA Gillingham
            </Link>
            .
          </p> */}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-16">
        <h2 className="heading-lg rule-accent text-navy">Who we are</h2>
        <p className="mt-4 max-w-6xl text-lg text-muted-foreground text-justify">
          Darul-Ilm Kent exists to raise children who don't just know their Dīn, but love it. Since
          opening in 2017 with five students, we've grown into a two-site madrasah serving the
          children of Medway — teaching Qur'an and Islamic studies with excellence, and nurturing a
          genuine love for Allah and His Messenger ﷺ that we believe matters just as much as what a
          child can recite. Today, well over 300 students learn with us, guided by qualified
          teachers, toward a life shaped by taqwā.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">What we offer</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Children's Classes",
              body: "Weekday and weekend madrasah classes for 5–16 year olds — Monday to Thursday, and Saturday & Sunday.",
              to: "/classes" as const,
              cta: "CLASS TIMES & FEES",
            },
            {
              title: "16+ Programs",
              body: "Join our Sanatayn programme — a two-year Islamic studies course for students 16 and over.",
              to: "/sanatayn" as const,
              cta: "PROGRAMME DETAILS",
            },
            {
              title: "Weekly Sessions",
              body: "Spiritual halaqas every Wednesday at 7:40pm, and brothers' tajweed sessions every Thursday at 7:40pm, at the Chatham Hill Mosque.",
              to: "/halaqas" as const,
              cta: "SESSION DETAILS",
            },
          ].map((card) => (
            <article key={card.title} className="panel-card p-6">
              <h3 className="font-display text-2xl uppercase text-primary">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
              {card.to && (
                <a
                  href={card.to}
                  className="mt-4 inline-block font-display text-base uppercase tracking-wide text-accent hover:underline"
                >
                  {card.cta}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
          <img
            src={classroom}
            alt="Madrasah classroom with low wooden desks and bookshelves"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full rounded-lg object-cover panel-card"
          />
          <div>
            <h2 className="heading-lg rule-accent text-primary">Our roadmap</h2>
            <p className="mt-3 text-muted-foreground text-justify">
              Darul-ilm Kent began with only five children in February 2017, in our home on Pagitt
              Street, Chatham. Within two years, our small two-bedroom house could no longer
              accommodate our growing numbers, and in February 2019 we moved to a larger home in
              Chatham. By February 2020, we had grown to more than 80 children.
            </p>
            <p className="mt-4 text-muted-foreground text-justify">
              As numbers continued to rise, reaching 220 students, the space, classes, traffic, and
              logistics of running a growing madrasah from a family home had reached their limit. It
              was time for the next step.
            </p>
            <p className="mt-4 text-muted-foreground text-justify">
              In May 2022, we relocated our educational facilities to the Chatham Hill Masjid, where
              we continued to develop our facilities and serve the Medway community.
            </p>
            <p className="mt-4 text-muted-foreground text-justify">
              Then, in May 2025, we opened a second site at Gillingham Mosque — bringing us to two
              sites operating across Medway. Today we teach well over 300 students across both
              branches, continuing the same foundation we started with: children who don't just
              memorise their Dīn, but come to love it.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="heading-lg text-primary">Become a Pillar of the Madrasa</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground text-justify">
          Not every one of us can stand in front of a classroom and teach — but every one of us can
          be part of raising a generation grounded in their Islamic identity, who love Allah and His
          Messenger ﷺ, and who are ready to become the leaders of tomorrow. When you donate, you
          become part of that movement — reviving Islam in our community, one child at a time. Your
          donation goes directly toward teachers’ wages, learning resources, and running two sites
          across Medway.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <a
            href="https://www.zeffy.com/en-GB/ticketing/darul-ilm-kent-2026-pillars"
            target="_blank"
            className="btn-pill"
          >
            Donate now
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
