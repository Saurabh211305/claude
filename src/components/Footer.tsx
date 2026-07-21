"use client";

import Reveal from "@/components/motion/Reveal";
import { Instagram, Linkedin, Youtube } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-line bg-ink pt-24">
      <div className="container-fluid">
        <Reveal className="grid grid-cols-1 gap-14 border-b border-line pb-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1.2fr]">
          <div>
            <p className="font-display text-3xl italic text-paper">
              Trixis <span className="text-gold">Homes</span>
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/60">
              A curator of rare addresses — where architecture, land, and
              craftsmanship converge into residences built for generations.
            </p>
          </div>

          <div>
            <p className="text-eyebrow mb-5 text-gold">Explore</p>
            <ul className="space-y-3 text-sm text-paper/70">
              <li><a href="#properties" className="hover:text-paper">Residences</a></li>
              <li><a href="#story" className="hover:text-paper">Philosophy</a></li>
              <li><a href="#journey" className="hover:text-paper">Acquisition Journey</a></li>
              <li><a href="#testimonials" className="hover:text-paper">Client Stories</a></li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-5 text-gold">Studio</p>
            <ul className="space-y-3 text-sm text-paper/70">
              <li className="hover:text-paper">One Horizon Avenue, Gurugram</li>
              <li className="hover:text-paper">+91 98 7654 3210</li>
              <li className="hover:text-paper">concierge@trixishomes.com</li>
            </ul>
          </div>

          <div>
            <p className="text-eyebrow mb-5 text-gold">
              Join the Private List
            </p>
            <p className="mb-4 text-sm text-paper/60">
              Early access to unlisted residences and market insight —
              curated, never crowded.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-3 border-b border-line-strong pb-3"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none"
              />
              <button
                type="submit"
                data-cursor="Join"
                className="shrink-0 text-sm tracking-wide text-gold transition-colors hover:text-gold-soft"
              >
                Submit
              </button>
            </form>
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-between gap-6 py-10 text-xs text-paper/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Trixis Homes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold"><Linkedin size={16} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gold"><Youtube size={16} /></a>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper">Privacy</a>
            <a href="#" className="hover:text-paper">Terms</a>
            <a href="#" className="hover:text-paper">RERA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
