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
      <PageBanner
        title="About Us"
        eyebrow="Our story"
        subtitle="Raising the Next Generation. Nurturing Hearts and Minds."
      />

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">Vision</h2>
        <p className="mt-3 text-muted-foreground">
          A generation of children who know their Dīn with clarity, love Allah and His Messenger ﷺ
          with sincerity, and live their lives by taqwā.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Mission</h2>
        <p className="mt-3 text-muted-foreground">
          Darul-Ilm exists to build children on a complete foundation of knowledge and love for
          Allah and His Messenger ﷺ, so that the two become one and the same. We measure success not
          by what a child has memorised, but by what they come to know, love, and give — guiding as
          many as possible toward ḥifẓ, khidmah, and a life shaped by taqwā.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Philosophy</h2>
        <p className="mt-3 text-muted-foreground">
          Darul-Ilm exists to build children on a complete foundation of knowledge — Qurʾān recited
          with excellence, essential duʿās held in the heart, and clear understanding of ʿAqīdah,
          Fiqh, Tārīkh, Ḥadīth, Sīrah, Akhlāq and Adab — and to nurture within them a genuine love
          for Allah and His Messenger ﷺ, so that what they know and what they love become one and
          the same. We give them the confidence to stand, speak, and recite in front of others, and
          the taqwā to carry it into how they live.
        </p>
        <p className="mt-4 text-muted-foreground">
          We do not measure success by what a child has memorised, but by what they have come to
          know, to love, and to give. As our most capable students grow, we bring them into khidmah
          — volunteering, assisting in classes, and teaching those younger than them — so that
          serving the Dīn becomes the natural next step after learning it. Beyond the classroom, we
          build a genuine community among our young people — through activities, events, and sport —
          so that faith is lived together, not just studied alone. From this foundation, we aim to
          guide as many as possible toward ḥifẓ of the full Qurʾān, onward into the Sanatayn
          programme, and — for those Allah wills it for — into becoming scholars who will carry this
          Ummah after us.
        </p>
        <p className="mt-4 text-muted-foreground">
          Darul-Ilm exists to build children on a complete foundation of knowledge — Qurʾān recited
          with excellence, essential duʿās held in the heart, and clear understanding of ʿAqīdah,
          Fiqh, Tārīkh, Ḥadīth, Sīrah, Akhlāq and Adab — and to nurture within them a genuine love
          for Allah and His Messenger ﷺ, so that what they know and what they love become one and
          the same. We give them the confidence to stand, speak, and recite in front of others, and
          the taqwā to carry it into how they live.
        </p>
        <p className="mt-4 text-muted-foreground">
          We do not measure success by what a child has memorised, but by what they have come to
          know, to love, and to give. As our most capable students grow, we bring them into khidmah
          — volunteering, assisting in classes, and teaching those younger than them — so that
          serving the Dīn becomes the natural next step after learning it. Beyond the classroom, we
          build a genuine community among our young people — through activities, events, and sport —
          so that faith is lived together, not just studied alone. From this foundation, we aim to
          guide as many as possible toward ḥifẓ of the full Qurʾān, onward into the Sanatayn
          programme, and — for those Allah wills it for — into becoming scholars who will carry this
          Ummah after us.
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

        <img
          src={classroom}
          alt="Madrasah classroom at Darul-ilm Chatham"
          width={1600}
          height={900}
          loading="lazy"
          className="mt-10 w-full rounded-lg object-cover panel-card"
        />
      </section>

      <SiteFooter />
    </div>
  );
}
