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
        subtitle="An established Islamic educational institute serving the Medway community."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">About us</h2>
        <p className="mt-3 text-muted-foreground">
          Darul-ilm Chatham is an established Islamic educational institute that is keen to deliver
          a high standard of Islamic education to the entire Medway community to create a community
          founded upon Islamic knowledge and values.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Our aim</h2>
        <p className="mt-3 text-muted-foreground">
          Our aim is to fulfil the religious educational needs of Medway and surrounding areas by
          establishing a professional, high quality Islamic educational institute run by qualified
          Islamic scholars.
        </p>

        <h2 className="heading-lg rule-accent mt-12 text-primary">Our roadmap</h2>
        <p className="mt-3 text-muted-foreground">
          Darul-ilm Chatham began with only five children in January 2017 in our home on Pagitt
          Street, Chatham. By February 2020 we had grown to more than a hundred children which then
          led us to moving to a slightly larger property to accommodate for our students.
        </p>
        <p className="mt-4 text-muted-foreground">
          By the grace of Almighty Allah, in May 2022 we were able to relocate our educational
          facilities to the Chatham Hill Masjid where we continue to develop our educational
          facilities and serve the Medway community.
        </p>

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
