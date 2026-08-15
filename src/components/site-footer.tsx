import { Link } from "@tanstack/react-router";


export function SiteFooter() {
  return (
    <footer className="relative band-navy">
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <h2 className="heading-lg text-accent">Darul-ilm Chatham</h2>
          <p className="mt-3 max-w-sm text-sm text-navy-foreground/80">
            An established Islamic educational institute serving the Medway community with a
            high standard of Islamic education.
          </p>
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
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl uppercase tracking-wide">Quick links</h3>
          <ul className="mt-3 space-y-2 text-sm text-navy-foreground/85">
            <li>
              <Link className="hover:text-accent" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="hover:text-accent" to="/classes">
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
                Gillingham (KMWA) branch
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-navy-foreground/15 py-5 text-center text-xs text-navy-foreground/70">
        Darul-ilm Chatham, based at Chatham Hill Masjid, Medway.
      </div>
    </footer>
  );
}
