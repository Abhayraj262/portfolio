"use client";

import { motion } from "framer-motion";
import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";
import { SkillIcon } from "./SkillIcons";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">Skills</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Tools I use
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {site.skills.map((group, index) => (
            <FadeIn key={group.group} delay={index * 0.05}>
              <div>
                <h3 className="mb-4 font-heading text-sm font-medium tracking-wide text-accent uppercase">
                  {group.group}
                </h3>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <motion.span
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent"
                      >
                        <SkillIcon
                          name={item.icon}
                          className="h-4 w-4 text-muted transition-colors group-hover:text-accent"
                        />
                        {item.name}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
