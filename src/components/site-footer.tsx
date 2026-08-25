import { Link } from "@tanstack/react-router";

import logo from "@/assets/darul-ilm-logo.png";

export function SiteFooter() {
  return (
    <footer className="relative band-navy">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center rounded-md bg-background p-1.5">
              <img
                src={logo}
                alt="Darul-ilm Chatham logo"
                width={800}
                height={533}
                className="h-9 w-auto"
              />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-md font-bold text-navy-foreground">
                Darul-ilm Kent
              </span>
              <span className="block font-display text-sm italic text-accent">
                House of Knowledge
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-foreground/80 text-justify">
            An established Islamic educational institute that is keen to deliver a high standard of
            Islamic education to the entire Medway community and create a society founded upon
            Islamic knowledge and values.
          </p>
        </div>
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
            <li>
              <Link className="hover:text-accent" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/chatham">
                Class information & application
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/team">
                The Darul-ilm team
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/gillingham">
                Gillingham — KMWA Mosque
              </Link>
            </li>
            <li>
              <a className="hover:text-accent" href="/policies">
                Our Policies
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Our Sites</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
            <li>
              Chatham Hill Mosque
              <br />
              22A Chatham Hill, Chatham
              <br />
              ME5 7AA
            </li>
            <li className="mt-6">
              Gillingham — KMWA Mosque
              <br />
              114 Canterbury St, Gillingham
              <br />
              ME7 5UH
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
            <li>
              Imam Didar:{" "}
              <a className="hover:text-accent" href="tel:07534979369">
                07534 979369
              </a>
            </li>
            <li>
              Administrator:{" "}
              <a className="hover:text-accent" href="tel:07778200746">
                07778 200746
              </a>
            </li>
            <li>
              <a className="hover:text-accent" href="mailto:Info@darulilmchatham.com">
                Info@darulilmchatham.com
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href="https://www.youtube.com/@darul-ilmchatham4240"
                target="_blank"
                rel="noreferrer"
              >
                YouTube channel
              </a>
            </li>
            <li>
              <a
                className="hover:text-accent"
                href="https://www.instagram.com/darulilmchatham?igsh=YmprMzRvZm1yM3pn"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-navy-foreground/15 py-5 text-center text-xs text-navy-foreground/70">
        © 2026 Darul-ilm Chatham. All rights reserved.
      </div>
    </footer>
  );
}
