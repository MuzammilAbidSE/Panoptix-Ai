"use client";

import { Phone, Mail, ArrowRight } from "lucide-react";
import { site } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section id="contact" className="relative py-12 md:py-14">
      <div className="relative mx-auto max-w-3xl px-6">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-2xl border border-card-border bg-gradient-to-br from-red-600/10 via-card to-neutral-900/10 p-8 text-center sm:p-10">
            <div className="grid-bg absolute inset-0 opacity-30" />
            <div className="relative">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Ready to <span className="gradient-text">Scale Your Fleet?</span>
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted">
                Talk to our team about onboarding 10 to 10,000+ vehicles. Reach us at{" "}
                <a href={`mailto:${site.email}`} className="text-red-600 hover:underline dark:text-red-400">
                  {site.email}
                </a>
                .
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`tel:${site.phone.replace(/[\s()-]/g, "")}`}
                  className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-900 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/20"
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
