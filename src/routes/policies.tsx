import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import quranClass from "@/assets/darul-ilm-stock-photo-5.jpg";
import { seoHead } from "@/lib/seo";

export const Route = createFileRoute("/policies")({
  head: () =>
    seoHead({
      title: "Policies & Documents | Darul-ilm Kent",
      description:
        "Key policies and documents for Darul-ilm Kent, including safeguarding, admissions, behaviour, attendance and GDPR.",
      path: "/policies",
    }),
  component: Policies,
});

const policies = [
  {
    title: "Parent Handbook",
    description:
      "Information for parents and guardians about Darul-ilm Kent, including our ethos, curriculum and expectations.",
    href: "/documents/Darul-ilm-Kent-Parent-Handbook.pdf",
  },
  {
    title: "Parent Code of Conduct Policy",
    description: "Our commitment to protecting every child and promoting their welfare.",
    href: "/documents/Darul-ilm_Kent_Parents_Code_of_Conduct.pdf",
  },
  {
    title: "Fees Policy",
    description: "Monthly fees, sibling discounts and payment arrangements.",
    href: "/documents/Darul-ilm_Kent_Madrasah_Fees_Policy_2026-27_2.pdf",
  },
  {
    title: "Safeguarding Policy",
    description: "Our commitment to protecting every child and promoting their welfare.",
    href: "/documents/Safeguarding Policy.pdf",
  },
  {
    title: "Behaviour Policy",
    description:
      "Expectations, rewards and the approach we take to maintaining a positive learning environment.",
    href: "/documents/Behaviour Policy.pdf",
  },
  // {
  //   title: "Attendance",
  //   description: "Guidance on punctuality, authorised absences and reporting absence.",
  //   href: "#",
  // },
  // {
  //   title: "Complaints",
  //   description: "How to raise a concern and how we will respond.",
  //   href: "#",
  // },
  // {
  //   title: "GDPR / Privacy",
  //   description: "How we collect, use and protect personal data.",
  //   href: "#",
  // },
  // {
  //   title: "Special Educational Needs",
  //   description: "Support for pupils with additional learning needs.",
  //   href: "#",
  // },
  // {
  //   title: "Health & Safety",
  //   description: "Our procedures for keeping the site, pupils and staff safe.",
  //   href: "#",
  // },
  // {
  //   title: "Curriculum",
  //   description: "An overview of the Qur’an, Islamic studies and Arabic curriculum.",
  //   href: "#",
  // },
];

function Policies() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* Contact hero */}
      <section className="relative isolate h-[400px] overflow-hidden sm:h-[450px] md:h-[480px]">
        {/* Background image */}
        <img
          src={quranClass}
          alt="Children learning at Darul-ilm Kent"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-center"
        />

        {/* Subtle overall darkening */}
        <div className="absolute inset-0 -z-20 bg-black/10" />

        {/* Left-side gradient for typography */}
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
              Documentation
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
              Policies
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
              Key information, policies and forms for parents, guardians and staff.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <p className="mx-auto max-w-3xl text-center text-muted-foreground">
          Download or view the documents that guide how Darul-ilm Kent is run.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {policies.map((policy) => (
            <article key={policy.title} className="panel-card flex flex-col p-6">
              <div className="flex items-start gap-4">
                <span className="inline-flex shrink-0 items-center justify-center rounded-lg bg-secondary p-3 text-primary">
                  <FileText className="h-6 w-6" />
                </span>
                <div>
                  <h2 className="font-display text-xl font-bold text-primary">{policy.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">{policy.description}</p>
                </div>
              </div>
              <div className="mt-auto pt-6">
                <a
                  href={policy.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  aria-label={`Download the ${policy.title} policy`}
                >
                  View document
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
