"use client";

import {
  MapPin,
  Shield,
  BarChart3,
  Bell,
  Truck,
  Zap,
} from "lucide-react";
import { features } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";
import { FleetDashboardVisual } from "./visuals/FleetDashboardVisual";

const iconMap = {
  MapPin,
  Shield,
  BarChart3,
  Bell,
  Truck,
  Zap,
};

export function Features() {
  return (
    <section id="features" className="relative py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Platform
            </span>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Fleet Command for{" "}
              <span className="gradient-text">Corporate Ops</span>
            </h2>
            <p className="mt-3 text-sm text-muted sm:text-base">
              Everything logistics directors and fleet managers need — live
              visibility, automated alerts, and AI phone ops across your entire
              operation.
            </p>
            <div className="mt-6 hidden lg:block">
              <FleetDashboardVisual />
            </div>
          </ScrollReveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature, i) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={feature.title} delay={i * 0.06}>
                  <div className="group h-full rounded-xl border border-card-border bg-card/50 p-4 transition-all hover:border-red-600/30 hover:shadow-md hover:shadow-red-600/5">
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-red-600/10 text-red-600 transition-colors group-hover:bg-red-600/20">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        <div className="mt-6 lg:hidden">
          <FleetDashboardVisual />
        </div>
      </div>
    </section>
  );
}
