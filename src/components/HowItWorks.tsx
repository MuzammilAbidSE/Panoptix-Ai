"use client";

import { howItWorks } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";
import { FleetMapVisual } from "./visuals/FleetMapVisual";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-12 md:py-14">
      <div className="grid-bg absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              How It Works
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Enterprise Rollout in{" "}
              <span className="gradient-text">Four Steps</span>
            </h2>
            <p className="mt-2 text-sm text-muted">
              From onboarding 10 vehicles to scaling across regions — built for
              corporate fleet operations.
            </p>

            <div className="mt-6 space-y-4">
              {howItWorks.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.08}>
                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-red-900 text-xs font-bold text-white">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">{step.title}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <FleetMapVisual />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
