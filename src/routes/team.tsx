import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageBanner } from "@/components/page-banner";
import quranClass from "@/assets/darul-ilm-stock-photo-1.png";

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
    name: "Mufti Didar Hasan (Co-Founder)",
    role: "Head of Education",
    bio: "Graduated in 2015 from the 6-year 'Alimiyyah course at Jamiatul Ilm wal Huda, Blackburn, in the Islamic sciences, and then completed the two-year iftaa (mufti) course in 2019 at WhiteThread Institute, London. He went on to complete his MA in Islamic Studies at SOAS University, London. Since 2017 he has been focusing on further studies and establishing a high standard of Islamic education in Medway. He is currently the Imam and Khateeb of Chatham Hill Mosque and Head of Education at Darul-ilm Chatham.",
  },
  {
    name: "Alimah Zulfa Tanzim (Co-Founder)",
    role: "Senior Teacher & Manager",
    bio: "Graduated in 2013 from the 6-year 'Alimiyyah course at Hidayatul Banat, Blackburn. Currently she is focused on studying the Arabic language and the Islamic sciences whilst also imparting education to the community and running Darul-ilm Chatham. She is also one of the co-founders of our mother and child education group, Nurturing Roots.",
  },
  {
    name: "Mufti Mehdi Hasan",
    role: "Assistant Head Teacher",
    bio: "Graduated in 2017 from the 6-year 'Alimiyyah course at Jamiatul Ilm wal Huda, Blackburn, and then studied for one year in South Africa, focusing on specialisation in hadith studies. He completed the two-year iftaa (mufti) course in 2021 at WhiteThread Institute. Since 2019 he has been focusing on further studies and imparting Islamic education in Medway.",
  },
  {
    name: "Mawlana Nasir Ahmed",
    role: "Senior Teacher",
    bio: "Graduated in 2018 from the 6-year 'Alimiyyah course at Jamiatul Ilm wal Huda, Blackburn. He then went to Turkey for one year to further his pursuit of Islamic knowledge. Since his return he has been focused on the children's education at Darul-ilm Chatham.",
  },
];

function Team() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      {/* Team hero */}
      <section className="relative isolate h-[420px] overflow-hidden sm:h-[480px] md:h-[500px]">
        {/* Background image */}
        <img
          src={quranClass}
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
              Teachers
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
              The Darul-ilm Team
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
              Our classes are taught by experienced, qualified teachers dedicated to nurturing
              hearts and minds.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="heading-lg rule-accent text-primary">Meet Our Senior Teachers</h2>

        <div className="mt-8 space-y-6">
          {teachers.map((teacher) => (
            <article key={teacher.name} className="panel-card p-6 md:p-8">
              <h3 className="font-display text-2xl uppercase text-primary">{teacher.name}</h3>
              <p className="mt-1 font-display text-base uppercase tracking-[0.2em] text-accent">
                {teacher.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-justify">
                {teacher.bio}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-base text-muted-foreground text-justify">
          Alongside our senior teachers, Darul-Ilm Kent is supported by a dedicated team of male and
          female teachers across both our Chatham and Gillingham sites — each committed to the same
          standard of excellence and care in guiding our students. We’re proud of every one of them.
        </p>
      </section>

      <SiteFooter />
    </div>
  );
}
