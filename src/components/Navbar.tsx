"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { site, navLinks } from "@/lib/content";
import { ThemeToggle } from "./ThemeToggle";
import { PanoptixLogo } from "./PanoptixLogo";

const activeLabel = (id: string) =>
  navLinks.find((l) => l.href === `#${id}`)?.label ?? site.name;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 48);
  });

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const close = () => setOpen(false);
    mq.addEventListener("change", close);
    return () => mq.removeEventListener("change", close);
  }, []);

  const compact = scrolled && !open;
  const mobileStatus = activeSection ? activeLabel(activeSection) : site.tagline;

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 z-50 flex w-full justify-center px-4 pt-4">
        <motion.div
          ref={navRef}
          layout
          transition={{ type: "spring", stiffness: 420, damping: 36 }}
          className={`island-pill w-full overflow-hidden ${
            compact ? "island-pill-compact max-w-xl lg:max-w-4xl" : "max-w-6xl"
           } ${open ? "island-pill-expanded" : ""}`}
        >
          {/* ── Desktop ── */}
          <motion.div
            layout="position"
            className={`hidden items-center gap-1 lg:flex ${
              compact ? "px-3 py-2" : "px-4 py-2.5"
            }`}
          >
            <a href="#" className="mr-3 flex shrink-0 items-center gap-2.5">
              <div className="relative shrink-0">
                <PanoptixLogo size={32} variant="icon" />
                <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-[var(--island-bg)]" />
              </div>
              <motion.span
                animate={{ opacity: compact ? 0.85 : 1, width: compact ? "auto" : "auto" }}
                className="text-sm font-semibold"
              >
                {compact ? site.name : site.fullName}
              </motion.span>
            </a>

            <nav className="relative flex flex-1 items-center justify-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative z-10 rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                      isActive
                        ? "font-medium text-red-600 dark:text-red-400"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-red-600/12"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="ml-2 flex shrink-0 items-center gap-2">
              <ThemeToggle />
              <motion.a
                layout
                href="#packages"
                className={`flex items-center gap-1.5 rounded-full bg-gradient-to-r from-red-600 to-red-900 font-semibold text-white shadow-md shadow-red-600/20 transition-all hover:shadow-red-600/35 ${
                  compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm"
                }`}
              >
                Partner Plans
                <ArrowRight className="h-3.5 w-3.5" />
              </motion.a>
            </div>
          </motion.div>

          {/* ── Mobile: Dynamic Island bar ── */}
          <motion.div
            layout="position"
            className={`flex items-center gap-2.5 lg:hidden ${
              compact ? "px-3 py-2" : "px-3.5 py-3"
            }`}
          >
            <div className="relative shrink-0">
              <PanoptixLogo size={28} variant="icon" />
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-emerald-500 ring-2 ring-[var(--island-bg)]" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={open ? "menu-open" : compact ? "compact" : "full"}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.2 }}
                className="min-w-0 flex-1"
              >
                {open ? (
                  <>
                    <p className="truncate text-sm font-semibold">Menu</p>
                    <p className="truncate text-[11px] text-muted">Navigate {site.name}</p>
                  </>
                ) : compact ? (
                  <>
                    <p className="truncate text-xs font-medium text-red-600 dark:text-red-400">
                      {mobileStatus}
                    </p>
                    <p className="truncate text-[10px] text-muted">{site.name} · Partner platform</p>
                  </>
                ) : (
                  <>
                    <p className="truncate text-sm font-semibold">{site.name}</p>
                    <p className="truncate text-[11px] text-muted">{site.tagline}</p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <ThemeToggle />

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] transition-colors hover:bg-red-600/15 hover:text-red-600 active:scale-95"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </motion.div>

          {/* ── Mobile dropdown ── */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.nav
                key="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="island-divider" />
                <div className="flex flex-col px-2.5 pb-3 pt-2">
                  {navLinks.map((link, i) => {
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.04 }}
                        onClick={() => setOpen(false)}
                        className={`rounded-xl px-3 py-2.5 text-sm transition-colors ${
                          isActive
                            ? "bg-red-600/12 font-medium text-red-600 dark:text-red-400"
                            : "text-muted hover:bg-foreground/[0.04] hover:text-foreground"
                        }`}
                      >
                        {link.label}
                      </motion.a>
                    );
                  })}
                  <a
                    href="#packages"
                    onClick={() => setOpen(false)}
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-red-900 py-2.5 text-sm font-semibold text-white"
                  >
                    Partner Plans
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      </header>
    </>
  );
}
