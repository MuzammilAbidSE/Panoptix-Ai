"use client";

import { useState } from "react";
import { Check, Sparkles, PhoneIncoming, PhoneOutgoing, MessageCircle, Gauge } from "lucide-react";
import { packages, channelLabels, usageNote, type PackageChannel } from "@/lib/content";
import { ScrollReveal } from "./ScrollReveal";

const channelIcons: Record<PackageChannel, typeof PhoneIncoming> = {
  inbound: PhoneIncoming,
  outbound: PhoneOutgoing,
  whatsapp: MessageCircle,
};

function formatPrice(price: number) {
  return price.toLocaleString("en-US");
}

export function Packages() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  return (
    <section id="packages" className="relative py-12 md:py-14">
      <div className="glow-orb absolute right-0 top-0 h-[300px] w-[300px] rounded-full opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Partner Plans
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Grow by <span className="gradient-text">Channel</span>
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-muted">
            Start with inbound calls. Upgrade to outbound follow-ups. Go
            omnichannel with WhatsApp AI. Each plan includes a monthly AI usage
            allowance — add top-up packs anytime you need more.
          </p>

          <div className="mt-5 inline-flex items-center rounded-full border border-card-border bg-card p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                billing === "monthly"
                  ? "bg-gradient-to-r from-red-600 to-red-900 text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                billing === "annual"
                  ? "bg-gradient-to-r from-red-600 to-red-900 text-white"
                  : "text-muted hover:text-foreground"
              }`}
            >
              Annual <span className="opacity-80">−10%</span>
            </button>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, i) => {
            const price =
              billing === "annual" && !pkg.custom
                ? Math.round(pkg.price * 0.9)
                : pkg.price;

            return (
              <ScrollReveal key={pkg.id} delay={i * 0.06}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-5 transition-all hover:shadow-lg hover:shadow-red-600/5 ${
                    pkg.popular
                      ? "border-red-600/50 bg-gradient-to-b from-red-600/8 to-transparent"
                      : "border-card-border bg-card/50 hover:border-red-600/30"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-red-600 to-red-900 px-2.5 py-0.5 text-[10px] font-semibold text-white">
                        <Sparkles className="h-2.5 w-2.5" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-3 flex flex-wrap gap-1">
                    {pkg.channels.map((ch) => {
                      const Icon = channelIcons[ch];
                      return (
                        <span
                          key={ch}
                          className="inline-flex items-center gap-1 rounded-full border border-card-border bg-background px-2 py-0.5 text-[10px] font-medium text-muted"
                        >
                          <Icon className="h-2.5 w-2.5" />
                          {channelLabels[ch]}
                        </span>
                      );
                    })}
                  </div>

                  <div className="mb-3">
                    <h3 className="font-bold">{pkg.name}</h3>
                    <p className="text-[11px] text-muted">{pkg.tagline}</p>
                  </div>

                  <div className="mb-3">
                    {pkg.custom ? (
                      <span className="text-2xl font-bold">Custom</span>
                    ) : (
                      <span className="text-2xl font-bold">
                        ${formatPrice(price)}
                      </span>
                    )}
                    <p className="text-[11px] text-muted">
                      {pkg.custom ? "Contact sales" : "per month"}
                    </p>
                  </div>

                  {/* Usage allowance */}
                  <div className="mb-4 flex items-start gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-3 py-2">
                    <Gauge className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400" />
                    <p className="text-[11px] leading-snug text-muted">
                      <span className="font-medium text-foreground">Included: </span>
                      {pkg.usageAllowance}
                    </p>
                  </div>

                  <ul className="mb-5 flex-1 space-y-2">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-xs">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                        <span className="text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`block rounded-xl py-2 text-center text-xs font-semibold transition-all ${
                      pkg.popular
                        ? "bg-gradient-to-r from-red-600 to-red-900 text-white shadow-md shadow-red-600/20"
                        : "border border-card-border hover:border-accent hover:text-accent"
                    }`}
                  >
                    {pkg.custom ? "Contact Sales" : "Get Started"}
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-muted">{usageNote}</p>
      </div>
    </section>
  );
}
