import { site, navLinks, company } from "@/lib/content";
import { PanoptixLogo } from "./PanoptixLogo";

export function Footer() {
  return (
    <footer className="border-t border-card-border bg-card/50 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <PanoptixLogo size={36} variant="icon" />
              <div>
                <span className="font-semibold">{site.fullName}</span>
                <p className="text-xs text-muted">{site.tagline}</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {company.intro}
            </p>
            <p className="mt-3 text-sm">
              <span className="text-muted">A product of </span>
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-red-600 transition-colors hover:text-red-500 dark:text-red-400"
              >
                {company.name}
              </a>
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:justify-end">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                Navigate
              </p>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
                Contact
              </p>
              <a
                href={`mailto:${site.email}`}
                className="block text-sm text-muted transition-colors hover:text-accent"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-card-border pt-6 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {site.fullName} · {company.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
