import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import classroom from "@/assets/darul-ilm-stock-photo-1.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Darul-ilm Chatham" },
      {
        name: "description",
        content:
          "Learn about Darul-ilm Chatham: our aim, our history from five children in 2017 to our home at Chatham Hill Masjid, and our values.",
      },
      { property: "og:title", content: "About Us | Darul-ilm Chatham" },
      {
        property: "og:description",
        content:
          "Our aim is to fulfil the religious educational needs of Medway through a professional Islamic institute run by qualified scholars.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* <PageBanner
        title="About Us"
        eyebrow="Our story"
        subtitle="Raising the Next Generation. Nurturing Hearts and Minds."
      /> */}
      {/* Team hero */}
      <section className="relative isolate h-[420px] overflow-hidden sm:h-[480px] md:h-[500px]">
        {/* Background image */}
        <img
          src={classroom}
          alt="Darul-ilm Kent teachers and students"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Very subtle overall darkening */}
        <div className="absolute inset-0 -z-20 bg-black/10" />

        {/* Darker left side for typography */}
        <div
          className="
            absolute inset-0 -z-10
            bg-gradient-to-r
            from-black/75
            via-black/40
            to-transparent
          "
        />

        {/* Subtle bottom fade */}
        <div
          className="
            absolute inset-x-0 bottom-0 -z-10 h-1/2
            bg-gradient-to-t
            from-black/55
            to-transparent
          "
        />

        {/* Hero text */}
        <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-12 sm:px-8 sm:pb-14 md:px-12 md:pb-16 lg:px-16">
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
              Our Story
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
              About Us
            </h1>

            {/* Accent line */}
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
              Raising the Next Generation. Nurturing Hearts and Minds.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">Our Vision</h2>
        <p className="mt-3 text-muted-foreground">
          A generation of children who know their Dīn with clarity, love Allah and His Messenger ﷺ
          with sincerity, and live their lives by taqwā.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Our Mission</h2>
        <p className="mt-3 text-muted-foreground">
          Darul-Ilm exists to build children on a complete foundation of knowledge and love for
          Allah and His Messenger ﷺ, so that the two become one and the same. We measure success not
          only by what a child has memorised, but also by what they come to know, love, and give -
          guiding as many as possible toward ḥifẓ, service of the Dīn, and a life shaped by taqwā.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Our Philosophy</h2>
        <p className="mt-3 text-muted-foreground">
          Every child who walks through our doors deserves more than information — they deserve a
          foundation. That means Qurʾān recited with excellence, essential duʿās held in the heart,
          and clear understanding of ʿAqīdah, Fiqh, Tārīkh, Ḥadīth, Sīrah, Akhlāq and Adab. We give
          children the confidence to stand, speak, and recite in front of others, and the taqwā to
          carry what they learn into how they live.
        </p>
        <p className="mt-4 text-muted-foreground">
          As our most capable students grow, we bring them into serving the Dīn — volunteering,
          assisting in classes, and teaching those younger than them — so that it becomes the
          natural next step after learning it. Beyond the classroom, we build a genuine community
          among our young people — through activities, events, and sport — so that faith is lived
          together, not just studied alone. From this foundation, we aim to guide as many as
          possible toward ḥifẓ of the full Qurʾān, onward into the Sanatayn programme, and — for
          those Allah wills it for — into becoming scholars who will carry this Ummah after us.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Our core values</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "1. Knowledge Taught with Excellence",
              body: "Every subject — ʿAqīdah, Fiqh, Tārīkh, Ḥadīth, Sīrah, Akhlāq, Adab — is taught properly and thoroughly, not rushed or watered down.",
            },
            {
              title: "2. Heart Before Ḥifẓ",
              body: "We do not measure success by what a child has memorised, but by what they have come to love. A student who completes ḥifẓ without loving what they’ve memorised hasn’t finished the job.",
            },
            {
              title: "3. Taqwā as a Way of Life",
              body: "Consciousness of Allah is not a lesson on the timetable — it’s how a child is expected to carry themselves in and out of the classroom.",
            },
            {
              title: "4. Service is Earned, Then Expected",
              body: "Our most capable students are brought into khidmah — volunteering, assisting in classes, and teaching those younger than them — because service is a natural next step after learning, not an afterthought.",
            },
            {
              title: "5. No Child is Left Behind",
              body: "Whether a child is destined for ḥifẓ and scholarship or simply needs the foundations of their Dīn secured, every child’s progress is watched and nurtured individually.",
            },
            {
              title: "6. The Home Grows With the Child",
              body: "A child’s Dīn is built jointly between the madrasa and the home — we work with parents, not around them.",
            },
          ].map((value) => (
            <article key={value.title} className="panel-card p-6">
              <h3 className="font-display text-2xl uppercase text-primary">{value.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{value.body}</p>
            </article>
          ))}
        </div>

        {/* <img
          src={classroom}
          alt="Madrasah classroom at Darul-ilm Chatham"
          width={1600}
          height={900}
          loading="lazy"
          className="mt-10 w-full rounded-lg object-cover panel-card"
        /> */}
      </section>

      <SiteFooter />
    </div>
  );
}
