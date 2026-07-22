import Link from "next/link";
import Logo from "@/components/Logo";
import { Instagram, Linkedin, Youtube } from "@/components/icons/SocialIcons";
import { FOOTER_LINKS } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-ink/8 bg-paper-dim pt-20 text-ink">
      <div className="container-fluid">
        <div className="grid grid-cols-1 gap-10 border-b border-ink/8 pb-14 sm:grid-cols-2 lg:grid-cols-7">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink/55">
              A RERA-certified real estate consultancy helping international
              investors buy, sell, and grow wealth through Dubai and Abu Dhabi
              property.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-eyebrow mb-4 text-gold">{heading}</p>
              <ul className="space-y-2.5 text-sm text-ink/65">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="/buy" className="transition-colors hover:text-ink">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-6 py-8 text-xs text-ink/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Trixis Homes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" aria-label="Instagram" className="hover:text-gold"><Instagram size={16} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gold"><Linkedin size={16} /></a>
            <a href="#" aria-label="YouTube" className="hover:text-gold"><Youtube size={16} /></a>
          </div>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-ink">Privacy</Link>
            <Link href="/contact" className="hover:text-ink">Terms</Link>
            <Link href="/contact" className="hover:text-ink">RERA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
