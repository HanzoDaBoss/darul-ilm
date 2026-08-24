import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import MapComponent from "@/components/map";

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
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Message from ${form.name} — ${form.topic}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nTopic: ${form.topic}\n\n${form.message}`;
    window.location.href = `mailto:Info@darulilmchatham.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        title="Contact Us"
        eyebrow="Get in touch"
        subtitle="We would love to hear from parents, students and volunteers."
      />

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-2xl font-bold text-primary">Reach Us</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Main Branch</h3>
                  <p className="text-muted-foreground">
                    Chatham Hill Masjid
                    <br />
                    22A Chatham Hill, Chatham
                    <br />
                    ME5 7AA
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Gillingham Branch</h3>
                  <p className="text-muted-foreground">
                    Gillingham KMWA
                    <br />
                    114 Canterbury St, Gillingham
                    <br />
                    ME7 5UH
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Phone</h3>
                  <p className="text-muted-foreground">
                    Imam Didar:{" "}
                    <a className="text-accent hover:underline" href="tel:07534979369">
                      07534 979369
                    </a>
                  </p>
                  <p className="text-muted-foreground">
                    Administrator:{" "}
                    <a className="text-accent hover:underline" href="tel:07778200746">
                      07778 200746
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Email</h3>
                  <a className="text-accent hover:underline" href="mailto:Info@darulilmchatham.com">
                    Info@darulilmchatham.com
                  </a>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-soft text-accent">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-primary">Office Hours</h3>
                  <p className="text-muted-foreground">Monday – Friday, 9:00 AM – 5:00 PM</p>
                </div>
              </div> */}
            </div>

            <div className="mt-8 aspect-video w-full overflow-hidden rounded-lg border border-border">
              <MapComponent />
            </div>
          </div>

          <div className="panel-card h-fit p-6 md:p-8">
            <h2 className="mb-6 font-display text-2xl font-bold text-primary">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <div>
                <label htmlFor="topic" className="block text-sm font-medium text-primary">
                  Topic
                </label>
                <select
                  id="topic"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                >
                  <option value="general">General enquiry</option>
                  <option value="admissions">Admissions</option>
                  <option value="volunteering">Volunteering</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border border-input bg-background px-3 py-2 text-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
                />
              </div>

              <button type="submit" className="btn-pill w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
