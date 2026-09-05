import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import quranClass from "@/assets/happy-kids.jpg";
import classroom from "@/assets/darul-ilm-stock-photo-1.png";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Darul-ilm Kent | Maktab & Madrasa in Kent" },
      {
        name: "description",
        content:
          "Darul-ilm Kent is an Islamic educational institute in Kent offering Qur'an and Islamic studies classes for children.",
      },
      { property: "og:title", content: "Darul-ilm Kent | Islamic School in Kent" },
      {
        property: "og:description",
        content:
          "Weekday and weekend madrasah classes for ages 5-16, taught by qualified Islamic scholars in Kent.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="flex min-h-[calc(100svh-4.5rem)] flex-col sm:min-h-[calc(100svh-5rem)]">
        <section className="relative isolate flex flex-1 overflow-hidden">
          <div className="relative flex w-full flex-1">
            <img
              src={quranClass}
              alt="Students engaged in a Darul-ilm Kent classroom"
              className="absolute inset-0 -z-30 h-full w-full object-cover object-[25%_5%]"
            />

            <div className="absolute inset-0 -z-20 bg-black/5" />

            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t from-black/45 to-transparent" />

            <div className="mx-auto flex w-full max-w-7xl items-end px-6 pb-12 pt-16 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
              <div className="max-w-3xl">
                <p
                  className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary sm:text-base"
                  style={{ textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}
                >
                  Welcome to
                </p>

                <h1 className="font-display text-5xl font-bold uppercase leading-[0.88] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                  Darul-ilm
                  <br />
                  Kent
                </h1>

                <div className="my-5 h-1 w-14 rounded-full bg-primary" />

                <h2
                  className="max-w-2xl font-display text-lg font-semibold leading-7 text-white sm:text-xl md:text-2xl lg:text-3xl lg:leading-9"
                  style={{ textShadow: "0 3px 8px rgba(0,0,0,0.9)" }}
                >
                  Raising the Next Generation by
                  <br />
                  <span className="italic text-primary">Nurturing Hearts and Minds.</span>
                </h2>

                <p
                  className="mt-4 max-w-xl text-sm leading-6 text-white sm:text-base sm:leading-7 lg:text-lg lg:leading-8"
                  style={{ textShadow: "0 2px 6px rgba(0,0,0,0.95)" }}
                >
                  A weekday and weekend madrasah serving the children of Medway — where children
                  come to know their Dīn, love Allah and His Messenger ﷺ, and carry taqwā into how
                  they live, taught with excellence by qualified scholars.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/chatham#apply"
                    rel="noreferrer"
                    className="btn-pill inline-flex min-h-[50px] items-center justify-center gap-2 px-7 text-base"
                  >
                    {/* <MapPin className="h-5 w-5" aria-hidden /> */}
                    Apply at Chatham
                  </a>

                  <a
                    href="/gillingham#apply"
                    rel="noreferrer"
                    className="btn-pill-ghost inline-flex min-h-[50px] items-center justify-center gap-2 bg-background px-7 text-base"
                  >
                    {/* <MapPin className="h-5 w-5" aria-hidden /> */}
                    Apply at Gillingham
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="band-navy">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-5 text-center text-sm text-navy-foreground/85">
            <p>
              <span className="font-semibold text-accent">Places are limited</span> in most of our
              current classes — <p className="">Apply above to join our waiting list</p>
            </p>
            {/* <span className="hidden text-navy-foreground/30 sm:inline">|</span>
            <p>
              New branch now open at{" "}
              <Link to="/gillingham" className="underline hover:text-accent">
                KMWA Gillingham
              </Link>
              .
            </p> */}
          </div>
        </section>
      </div>

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
              to: "/chatham" as const,
              cta: "CHATHAM CLASS TIMES & FEES",
            },
            {
              title: "16+ Programs",
              body: "Join our Sanatayn programme — a two-year Islamic studies course for students 16 and over.",
              to: "https://courses.darulilmchatham.com/courses/sanatayn" as const,
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
              {card.to &&
                (card.title === "Children's Classes" ? (
                  <>
                    {" "}
                    <a
                      href="/chatham"
                      className="mt-4 inline-block font-display text-base uppercase tracking-wide text-accent hover:underline"
                    >
                      CHATHAM CLASS TIMES & FEES
                    </a>{" "}
                    <a
                      href="/gillingham"
                      className="mt-2 inline-block font-display text-base uppercase tracking-wide text-accent hover:underline"
                    >
                      GILLINGHAM CLASS TIMES & FEES
                    </a>
                  </>
                ) : (
                  <a
                    href={card.to}
                    className="mt-4 inline-block font-display text-base uppercase tracking-wide text-accent hover:underline"
                    target={card.title === "16+ Programs" ? "_blank" : ""}
                  >
                    {card.cta}
                  </a>
                ))}
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
              Street, Chatham. Within two years, we had grown to 80 students, and our small
              two-bedroom house could no longer accommodate our growing numbers. In February 2019,
              we moved to a larger home in Chatham to keep pace with our growing madrasah.
            </p>
            <p className="mt-4 text-muted-foreground text-justify">
              As our numbers continued to rise, reaching 120 students by 2021, the space, classes,
              traffic, and logistics of running a growing madrasah from a family two-bedroom home
              had reached their limit. It was time for the next step.
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
