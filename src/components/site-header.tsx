import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/darul-ilm-logo.png";

const navPrimary = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/classes", label: "Classes & Fees" },
] as const;

const navSecondary = [
  { to: "/team", label: "Our Teachers" },
  { to: "/gillingham", label: "Gillingham" },
  // { to: "/testimonials", label: "Testimonials" },
  // { to: "/impact", label: "Impact" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className=" top-0 z-40 border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-6 px-6 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Darul-ilm Chatham logo"
              width={800}
              height={533}
              className="h-40 w-auto sm:h-40 welcome-animation"
            />
            {/* <span className="leading-tight">
              <span className="block font-display text-base font-bold text-navy sm:text-xl">
                Darul-ilm Chatham
              </span>
              <span className="block font-display text-xs italic text-muted-foreground sm:text-sm">
                House of Knowledge
              </span>
            </span> */}
          </Link>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
            className="fixed right-5 inline-flex shrink-0 items-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold uppercase tracking-wide text-navy sm:px-4"
          >
            <Menu className="h-5 w-5" />
            <span className="hidden sm:inline">Menu</span>
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-navy/50"
          />
          <nav className="absolute inset-y-0 right-0 flex h-full w-full max-w-md flex-col overflow-y-auto bg-accent px-6 py-6 text-navy shadow-2xl sm:px-8">
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex h-11 w-11 items-center justify-center self-start rounded-full border border-navy/20 text-navy"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              {[navPrimary, navSecondary].map((group, i) => (
                <ul key={i} className="space-y-4">
                  {group.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className="block font-display text-lg font-bold uppercase tracking-wide text-navy hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>

            <a
              href="/classes#apply"
              onClick={() => setOpen(false)}
              className="btn-pill mt-10 w-full text-center sm:mt-auto"
            >
              Apply for a Place
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
