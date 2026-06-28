"use client";

import { industries } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function TrustedBy() {
  return (
    <section className="border-y border-card-border bg-card/30 py-6">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="mb-4 text-center text-xs font-medium uppercase tracking-widest text-muted">
            Built for enterprise fleet operations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {industries.map((name) => (
              <span
                key={name}
                className="text-sm font-medium text-muted/70 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
