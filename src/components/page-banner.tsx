export function PageBanner({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="band-hero border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="eyebrow">Darul-ilm Chatham</p>
        <h1 className="heading-xl mt-4 text-navy">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
