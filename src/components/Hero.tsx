"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { hero, site, company } from "@/lib/content";
import { FleetMapVisual } from "./visuals/FleetMapVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10">
      <div className="grid-bg absolute inset-0" />
      <div className="glow-orb animate-pulse-glow absolute -top-32 right-0 h-[400px] w-[400px] rounded-full opacity-40" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-6 lg:grid-cols-2 lg:gap-10">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 flex flex-wrap items-center gap-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-3 py-1 text-xs backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-red-600" />
              </span>
              Partner Fleet AI · 10+ Vehicles
            </span>
            <span className="inline-flex items-center rounded-full border border-card-border bg-card/40 px-3 py-1 text-xs text-muted backdrop-blur-sm">
              By{" "}
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium text-red-600 hover:text-red-500 dark:text-red-400"
              >
                {company.name}
              </a>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {hero.headline}{" "}
            <span className="gradient-text">{hero.headlineAccent}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mt-4 text-base leading-relaxed text-muted sm:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#packages"
              className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/20 transition-all hover:shadow-red-600/35"
            >
              {hero.cta.primary}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="flex items-center gap-2 rounded-full border border-card-border bg-card/60 px-5 py-2.5 text-sm font-semibold backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              <Play className="h-3.5 w-3.5" />
              {hero.cta.secondary}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-card-border bg-card/50 px-3 py-3">
                <div className="text-xl font-bold gradient-text">{stat.value}</div>
                <div className="mt-0.5 text-[11px] text-muted">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="relative"
        >
          <FleetMapVisual />
          <div className="absolute -bottom-3 -left-3 w-[55%] sm:-bottom-4 sm:-left-4">
            <div className="glass-card rounded-xl p-3 shadow-xl">
              <div className="mb-1.5 flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-medium text-muted">Live · {site.name}</span>
              </div>
              <p className="text-xs leading-relaxed">
                &ldquo;Unit 1042 is on I-95, ETA depot 14:20. 3 units idle over 15 min in Zone B.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
