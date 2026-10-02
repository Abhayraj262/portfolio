"use client";

import { motion } from "framer-motion";
import { site } from "@/src/data/site";
import SocialLinks from "./SocialLinks";
import CodeWindow from "./CodeWindow";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid text-foreground/[0.045] dark:text-white/[0.035]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease }}
            className="mb-5 text-sm font-medium tracking-[0.18em] text-accent uppercase"
          >
            {site.role}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease }}
            className="font-heading text-4xl font-semibold leading-[1.08] text-foreground sm:text-6xl"
          >
            {site.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease }}
            className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            {site.objective}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.24, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              View work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center rounded-full border border-border px-5 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
            <a
              href={site.resumeUrl}
              className="inline-flex h-11 items-center px-2 text-sm font-medium text-muted underline-offset-4 transition-colors hover:text-foreground hover:underline"
            >
              Download resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="hidden justify-end lg:flex"
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
