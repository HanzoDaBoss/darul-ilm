import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import quranClass from "@/assets/quran-class.jpg";
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

      <section className="band-hero">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
          <div>
            <p className="eyebrow">Home</p>
            <h1 className="heading-xl mt-5 text-navy welcome-up">
              Welcome to
              <br />
              <span className="italic text-primary">Darul-ilm Chatham</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              A weekday and weekend madrasah serving the children of Medway — teaching Qur'an,
              Islamic studies and Arabic with warmth, discipline and care, taught by qualified
              scholars.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/classes#apply" className="btn-pill">
                Apply for a Place
              </a>
              <Link to="/about" className="btn-pill-ghost">
                Our Story
              </Link>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { k: "2017", v: "Founded with 5 students" },
                { k: "2", v: "Campuses across Medway" },
                { k: "5–16", v: "Ages welcomed" },
              ].map((stat) => (
                <div key={stat.k}>
                  <dt className="font-display text-3xl font-bold text-navy">{stat.k}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{stat.v}</dd>
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
            current classes —{" "}
            <Link to="/classes" className="underline hover:text-accent">
              join our waiting list
            </Link>
            .
          </p>
          <span className="hidden text-navy-foreground/30 sm:inline">|</span>
          <p>
            New branch now open at{" "}
            <Link to="/gillingham" className="underline hover:text-accent">
              KMWA Gillingham
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pt-16">
        <h2 className="heading-lg rule-accent text-navy">Who we are</h2>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          An established Islamic educational institute keen to deliver a high standard of Islamic
          education to the entire Medway community, creating a community founded upon Islamic
          knowledge and values. We began with only five children in January 2017 and, by the grace
          of Almighty Allah, now serve well over a hundred students.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">What we offer</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Children's Classes",
              body: "Weekday and weekend madrasah classes with an age-appropriate curriculum for 5–16 year olds.",
              to: "/classes" as const,
              cta: "Class times & fees",
            },
            {
              title: "Adult Programs",
              body: "Courses for adults will be starting very soon, Insha'Allah.",
            },
            {
              title: "Youth Programs",
              body: "Youth programs are coming soon, Insha'Allah.",
            },
          ].map((card) => (
            <article key={card.title} className="panel-card p-6">
              <h3 className="font-display text-2xl uppercase text-primary">{card.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{card.body}</p>
              {card.to && (
                <Link
                  to={card.to}
                  className="mt-4 inline-block font-display text-base uppercase tracking-wide text-accent hover:underline"
                >
                  {card.cta}
                </Link>
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
            <p className="mt-3 text-muted-foreground">
              Darul-ilm Chatham began with only five children in January 2017 in our home on Pagitt
              Street, Chatham. By February 2020 we had grown to more than a hundred children, which
              led us to move to a larger property to accommodate our students.
            </p>
            <p className="mt-4 text-muted-foreground">
              In May 2022 we relocated our educational facilities to the Chatham Hill Masjid, where
              we continue to develop our facilities and serve the Medway community.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="heading-lg text-primary">Ready to join us?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Apply for a place for your child or join our waiting list for the next available term.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/classes" className="btn-pill">
            Apply for a Place
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
