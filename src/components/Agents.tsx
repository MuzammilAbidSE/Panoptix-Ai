"use client";

import { Mic, CheckCircle2, Eye } from "lucide-react";
import { agents } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function Agents() {
  return (
    <section id="agents" className="relative py-12 md:py-14">
      <div className="glow-orb absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full opacity-30" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            AI Agents
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Your <span className="gradient-text">24/7 Ops Team</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted">
            Partner fleet support without call queues. {agents.map((a) => a.name).join(" and ")} handle
            live lookups, escalations, and fleet intelligence by phone.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {agents.map((agent, i) => (
            <ScrollReveal key={agent.name} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-card-border bg-card/50 p-6 transition-all hover:shadow-lg hover:shadow-red-600/5">
                <div
                  className={`absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br ${agent.accent} opacity-10 blur-2xl`}
                />

                <div className="relative flex items-start gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${agent.accent} text-white shadow-md`}
                  >
                    <Eye className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-bold">{agent.name}</h3>
                    <p className="text-xs italic text-muted">{agent.epithet}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded-full border border-card-border bg-background px-2 py-0.5 text-[10px] font-medium">
                        {agent.language}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-card-border bg-background/50 p-3">
                  <div className="mb-1 flex items-center gap-1.5">
                    <Mic className="h-3 w-3 text-accent" />
                    <span className="text-[10px] font-medium text-muted">Live</span>
                  </div>
                  <p className="text-xs italic leading-relaxed text-muted">
                    &ldquo;{agent.greeting}&rdquo;
                  </p>
                </div>

                <ul className="mt-4 space-y-1.5">
                  {agent.capabilities.map((cap) => (
                    <li key={cap} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-accent" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
