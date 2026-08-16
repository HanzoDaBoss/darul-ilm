import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "The Darul-ilm Team | Darul-ilm Chatham" },
      {
        name: "description",
        content:
          "Meet the qualified scholars and teachers of Darul-ilm Chatham, including Mufti Didar Hasan, Mufti Mehdi Hasan and Alimah Zulfa Tanzim.",
      },
      { property: "og:title", content: "The Darul-ilm Team | Darul-ilm Chatham" },
      {
        property: "og:description",
        content:
          "Our teachers are graduates of the six-year 'Alimiyyah course with further specialisation in the Islamic sciences.",
      },
    ],
  }),
  component: Team,
});

const teachers = [
  {
    name: "Mufti Didar Hasan",
    role: "Imam & Head of Education",
    bio: "Graduated in 2015 from the 6-year 'Alimiyyah course at Jamiatul Ilm wal Huda, Blackburn, in the Islamic sciences, and then completed the two-year iftaa (mufti) course in 2019 at WhiteThread Institute, London. He went on to complete his MA in Islamic Studies at SOAS University, London. Since 2017 he has been focusing on further studies and establishing a high standard of Islamic education in Medway. He is currently the Imam and Khateeb of Chatham Hill Mosque and Head of Education at Darul-ilm Chatham.",
  },
  {
    name: "Mufti Mehdi Hasan",
    role: "Teacher",
    bio: "Graduated in 2017 from the 6-year 'Alimiyyah course at Jamiatul Ilm wal Huda, Blackburn, and then studied for one year in South Africa, focusing on specialisation in hadith studies. He completed the two-year iftaa (mufti) course in 2021 at WhiteThread Institute. Since 2019 he has been focusing on further studies and imparting Islamic education in Medway.",
  },
  {
    name: "Alimah Zulfa Tanzim",
    role: "Teacher & Administration",
    bio: "Graduated in 2013 from the 6-year 'Alimiyyah course at Hidayatul Banat, Blackburn. Currently she is focused on studying the Arabic language and the Islamic sciences whilst also imparting education to the community and running Darul-ilm Chatham. She is also one of the co-founders of our mother and child education group, Nurturing Roots.",
  },
  {
    name: "Mawlana Nasir Ahmed",
    role: "Teacher",
    bio: "Graduated in 2018 from the 6-year 'Alimiyyah course at Jamiatul Ilm wal Huda, Blackburn. He then went to Turkey for one year to further his pursuit of Islamic knowledge. Since his return he has been focused on the children's education at Darul-ilm Chatham.",
  },
  {
    name: "Alimah Nadia Akhtar",
    role: "Teacher",
    bio: "A qualified 'Alimah teaching on our children's programme at Darul-ilm Chatham.",
  },
];

function Team() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <PageBanner
        title="The Darul-ilm Team"
        eyebrow="Our team"
        subtitle="Our classes are taught by experienced, qualified teachers."
      />

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">Meet our teachers</h2>
        <div className="mt-8 space-y-6">
          {teachers.map((teacher) => (
            <article key={teacher.name} className="panel-card p-6 md:p-8">
              <h3 className="font-display text-2xl uppercase text-primary">{teacher.name}</h3>
              <p className="mt-1 font-display text-base uppercase tracking-[0.2em] text-accent">
                {teacher.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{teacher.bio}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
