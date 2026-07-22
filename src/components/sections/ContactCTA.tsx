"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Mail, MapPin, Phone } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { PROPERTIES } from "@/lib/data";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative overflow-hidden bg-cream-deep py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <img
          src="/images/contact-texture.svg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-deep via-cream-deep/90 to-cream-deep" />
      </div>

      <div className="container-fluid relative grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <div>
          <Reveal>
            <p className="text-eyebrow mb-6 text-clay">Begin the Conversation</p>
          </Reveal>
          <h2 className="font-display max-w-lg text-[clamp(2rem,4.5vw,3.25rem)] font-light leading-[1.05] text-ink">
            <TextReveal
              lines={["Fewer than twenty", "residences release", "each year."]}
            />
          </h2>
          <Reveal delay={0.15} className="mt-8 max-w-md text-base leading-relaxed text-ink/60">
            Share a few details and a private advisor will reach out within
            24 hours to arrange a confidential consultation or site visit.
          </Reveal>

          <Reveal delay={0.25} className="mt-12 space-y-5">
            <div className="flex items-center gap-4 text-ink/70">
              <Phone size={18} className="text-clay" />
              <span>+91 98 7654 3210</span>
            </div>
            <div className="flex items-center gap-4 text-ink/70">
              <Mail size={18} className="text-clay" />
              <span>concierge@trixishomes.com</span>
            </div>
            <div className="flex items-center gap-4 text-ink/70">
              <MapPin size={18} className="text-clay" />
              <span>One Horizon Avenue, Gurugram, India</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="rounded-sm border border-line-strong bg-surface/80 p-8 shadow-[0_30px_60px_-30px_rgba(34,31,27,0.25)] backdrop-blur-md md:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex min-h-[380px] flex-col items-center justify-center text-center"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-clay text-cream">
                  <Check size={26} />
                </div>
                <p className="font-display text-2xl text-ink">
                  Thank you.
                </p>
                <p className="mt-3 max-w-xs text-sm text-ink/60">
                  A private advisor from Trixis Homes will be in touch within
                  24 hours.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                </div>
                <Field label="Email Address" name="email" type="email" required />
                <div>
                  <label className="text-eyebrow mb-2 block text-ink/50">
                    Residence of Interest
                  </label>
                  <select
                    name="residence"
                    className="w-full border-b border-line-strong bg-transparent py-2 text-ink focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-cream">
                      Select a residence
                    </option>
                    {PROPERTIES.map((p) => (
                      <option key={p.id} value={p.id} className="bg-cream">
                        {p.name} &mdash; {p.location}
                      </option>
                    ))}
                    <option value="other" className="bg-cream">
                      Not sure yet
                    </option>
                  </select>
                </div>
                <div>
                  <label className="text-eyebrow mb-2 block text-ink/50">
                    Message (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    className="w-full resize-none border-b border-line-strong bg-transparent py-2 text-ink placeholder:text-ink/30 focus:outline-none"
                    placeholder="Tell us about what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  data-cursor="Send"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-clay px-8 py-4 text-sm font-medium tracking-wide text-cream transition-transform duration-300 hover:scale-[1.02]"
                >
                  Request Private Consultation
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>
                <p className="text-center text-xs text-ink/35">
                  Your information is confidential and never shared with
                  third parties.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-eyebrow mb-2 block text-ink/50" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-line-strong bg-transparent py-2 text-ink placeholder:text-ink/30 focus:outline-none"
      />
    </div>
  );
}
