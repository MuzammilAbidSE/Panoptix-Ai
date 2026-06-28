"use client";

import { Truck, Wrench, Building2, Shield } from "lucide-react";
import { useCases, valueProps, site } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

const iconMap = { Truck, Wrench, Building2, Shield };

export function UseCases() {
  return (
    <section id="use-cases" className="relative py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Industries
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Trusted by <span className="gradient-text">Corporate Fleets</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            From 50-unit delivery fleets to 2,000+ vehicle logistics networks —
            {site.name} scales with your operation.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {useCases.map((useCase, i) => {
            const Icon = iconMap[useCase.icon as keyof typeof iconMap];
            return (
              <ScrollReveal key={useCase.title} delay={i * 0.08}>
                <div className="group flex gap-4 rounded-xl border border-card-border bg-card/50 p-5 transition-all hover:border-red-600/30">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-600/10 text-red-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{useCase.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-8 rounded-2xl border border-card-border bg-gradient-to-r from-red-600/5 to-neutral-900/5 p-6">
            <h3 className="text-center text-base font-bold">
              Why Tracking Companies Choose {site.name}
            </h3>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {valueProps.map((prop) => (
                <span
                  key={prop}
                  className="rounded-full border border-card-border bg-card px-3 py-1.5 text-xs text-muted"
                >
                  {prop}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
