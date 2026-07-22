"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, MessageCircle } from "lucide-react";
import Logo from "@/components/Logo";

const LINKS = [
  { label: "Off - Plan", href: "/buy?status=off-plan" },
  { label: "Buy", href: "/buy" },
  { label: "Sell", href: "/sell" },
  { label: "Insights", href: "/insights" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const EXPLORE_LINKS = [
  { label: "Developers", href: "/developers" },
  { label: "Communities", href: "/#communities" },
  { label: "Insights & Market Reports", href: "/insights" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [exploreOpen, setExploreOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-paper/10 bg-midnight/90 backdrop-blur-md"
            : "border-b border-transparent bg-gradient-to-b from-midnight/70 to-transparent"
        }`}
      >
        <div className="container-fluid flex h-20 items-center justify-between md:h-24">
          <Link href="/" data-cursor="Home">
            <Logo variant="light" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-cursor="View"
                className="group relative text-sm tracking-wide text-paper/80 transition-colors hover:text-paper"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            <div
              className="relative"
              onMouseEnter={() => setExploreOpen(true)}
              onMouseLeave={() => setExploreOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-sm tracking-wide text-paper/80 transition-colors hover:text-paper">
                Explore
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${exploreOpen ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence>
                {exploreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-full pt-3"
                  >
                    <div className="w-56 rounded-sm border border-paper/10 bg-midnight-soft p-2 shadow-2xl">
                      {EXPLORE_LINKS.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block rounded-sm px-4 py-2.5 text-sm text-paper/75 transition-colors hover:bg-midnight-elevated hover:text-paper"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden items-center gap-1.5 rounded-full border border-paper/20 px-3.5 py-2 text-xs text-paper/80 md:flex">
              AED <ChevronDown size={12} />
            </button>
            <a
              href="https://wa.me/"
              data-cursor="Chat"
              className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-medium text-midnight transition-transform duration-300 hover:scale-105 md:flex"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            >
              <span
                className={`h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-6 bg-paper transition-transform duration-300 ${
                  open ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-midnight px-8"
          >
            <nav className="flex flex-col gap-5">
              {[...LINKS, { label: "Developers", href: "/developers" }].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl italic text-paper"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
