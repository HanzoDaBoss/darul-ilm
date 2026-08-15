import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Darul-ilm Chatham" },
      {
        name: "description",
        content:
          "Contact Darul-ilm Chatham by phone, WhatsApp or email for class enquiries, enrolment and volunteering opportunities in Medway.",
      },
      { property: "og:title", content: "Contact Us | Darul-ilm Chatham" },
      {
        property: "og:description",
        content:
          "Call Imam Didar on 07534 979369, our administrator on 07778 200746, or email Info@darulilmchatham.com.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        title="Contact Us"
        subtitle="We would love to hear from parents, students and volunteers."
      />

      <section className="mx-auto grid max-w-5xl gap-8 px-6 py-16 md:grid-cols-2">
        <div>
          <h2 className="heading-lg rule-accent text-primary">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>
              <span className="block font-display text-lg uppercase text-primary">
                Imam Didar (Call / WhatsApp)
              </span>
              <a className="text-accent hover:underline" href="tel:07534979369">
                07534 979369
              </a>
            </li>
            <li>
              <span className="block font-display text-lg uppercase text-primary">
                Administrator
              </span>
              <a className="text-accent hover:underline" href="tel:07778200746">
                07778 200746
              </a>
            </li>
            <li>
              <span className="block font-display text-lg uppercase text-primary">Email</span>
              <a
                className="text-accent hover:underline"
                href="mailto:Info@darulilmchatham.com"
              >
                Info@darulilmchatham.com
              </a>
            </li>
            <li>
              <span className="block font-display text-lg uppercase text-primary">
                YouTube
              </span>
              <a
                className="text-accent hover:underline"
                href="https://www.youtube.com/@darul-ilmchatham4240"
                target="_blank"
                rel="noreferrer"
              >
                @darul-ilmchatham4240
              </a>
            </li>
          </ul>
        </div>

        <div className="panel-card p-6">
          <h2 className="font-display text-2xl uppercase text-primary">Our locations</h2>
          <div className="mt-4 space-y-5 text-sm text-muted-foreground">
            <p>
              <span className="block font-display text-lg uppercase text-primary">
                Chatham
              </span>
              Chatham Hill Masjid, Chatham, Medway
            </p>
            <p>
              <span className="block font-display text-lg uppercase text-primary">
                Gillingham
              </span>
              KMWA, 114 Canterbury St, Gillingham ME7 5UH
            </p>
          </div>
          <a
            href="https://registrations.ibuk.org/DarulilmKMWA"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-md bg-primary px-6 py-3 font-display text-lg uppercase tracking-wide text-primary-foreground transition-colors hover:bg-navy-deep"
          >
            Register a student
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
