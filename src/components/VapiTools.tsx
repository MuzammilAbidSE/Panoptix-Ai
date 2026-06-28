"use client";

import { vapiPlatform } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function VapiTools() {
  return (
    <section id="vapi-tools" className="relative border-y border-card-border bg-card/30 py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Built on Vapi AI
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            7 Live Tools — <span className="gradient-text">Not a Roadmap</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Every tool below is deployed in production via Vapi + n8n. Your callers
            get real answers, real sales, and real escalations — today.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {vapiPlatform.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-card-border bg-background px-3 py-1 text-xs font-medium text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {vapiPlatform.tools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 0.05}>
              <div className="h-full rounded-xl border border-card-border bg-background/60 p-4 transition-colors hover:border-red-600/30">
                <code className="text-[10px] font-mono text-red-600 dark:text-red-400">
                  {tool.name}
                </code>
                <h3 className="mt-1.5 text-sm font-semibold">{tool.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">
                  {tool.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
