import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export function PageBanner({
  title,
  eyebrow,
  subtitle,
}: {
  title: string;
  eyebrow?: string;
  subtitle?: string;
}) {
  return (
    <section className="band-hero border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{title}</span>
        </nav>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="heading-xl mt-4 text-navy">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
