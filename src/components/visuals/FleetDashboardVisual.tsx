"use client";

import { motion } from "framer-motion";

const bars = [65, 82, 45, 90, 58, 74, 88, 52, 70, 95, 48, 78];

export function FleetDashboardVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-card-border bg-card p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted">
            Fleet Utilization
          </p>
          <p className="text-lg font-bold">94.2%</p>
        </div>
        <div className="flex gap-3 text-right">
          <div>
            <p className="text-[10px] text-muted">On Route</p>
            <p className="text-sm font-semibold text-emerald-500">712</p>
          </div>
          <div>
            <p className="text-[10px] text-muted">Idle</p>
            <p className="text-sm font-semibold text-amber-500">48</p>
          </div>
          <div>
            <p className="text-[10px] text-muted">Offline</p>
            <p className="text-sm font-semibold text-muted">87</p>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="flex h-24 items-end gap-1">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-sm bg-gradient-to-t from-red-600/80 to-red-400/60"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.5, ease: "easeOut" }}
          />
        ))}
      </div>

      {/* Mini fleet rows */}
      <div className="mt-3 space-y-1.5">
        {[
          { id: "Unit-1042", status: "On Route", color: "bg-emerald-500" },
          { id: "Unit-2087", status: "Idle 12m", color: "bg-amber-500" },
          { id: "Unit-3156", status: "On Route", color: "bg-emerald-500" },
        ].map((row, i) => (
          <motion.div
            key={row.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="flex items-center justify-between rounded-lg bg-foreground/[0.03] px-2.5 py-1.5"
          >
            <div className="flex items-center gap-2">
              <span className={`h-1.5 w-1.5 rounded-full ${row.color}`} />
              <span className="text-xs font-medium">{row.id}</span>
            </div>
            <span className="text-[10px] text-muted">{row.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
