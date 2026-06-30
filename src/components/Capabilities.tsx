"use client";

import { capabilities } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function Capabilities() {
  return (
    <section id="capabilities" className="relative border-y border-card-border bg-card/30 py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            What Panoptix Does
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Built for <span className="gradient-text">Your Clients</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Everything your tracking company&apos;s clients need — explained in
            plain language, delivered by AI on every channel you choose.
          </p>
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {capabilities.map((item, i) => (
            <ScrollReveal key={item.label} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-card-border bg-background/60 p-4 transition-colors hover:border-red-600/30">
                <h3 className="text-sm font-semibold">{item.label}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
