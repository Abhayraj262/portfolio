"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";
import { ArrowUpRight } from "./Icons";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">Projects</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Selected work
          </h2>
        </FadeIn>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {site.projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-[border-color,box-shadow,background-color] hover:border-accent hover:bg-card-hover hover:shadow-lg"
              >
                <div
                  className={`relative aspect-16/10 overflow-hidden ${
                    project.image ? "bg-border" : `bg-linear-to-br ${project.accent}`
                  }`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-end px-6 py-5">
                      <span className="font-heading text-5xl font-semibold text-white/90">
                        {project.initials}
                      </span>
                    </div>
                  )}
                  <span className="absolute right-4 top-4 rounded-full bg-black/50 px-2.5 py-1 text-[11px] font-medium tracking-wide text-white uppercase backdrop-blur-sm">
                    {project.tag}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-xl font-medium tracking-tight text-foreground">
                    {project.name}
                  </h3>
                  <ul className="mt-3 flex-1 space-y-2 text-sm leading-6 text-muted">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-accent-soft px-2.5 py-1 text-xs text-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-accent-soft px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white"
                    >
                      {project.ctaLabel || "Live demo"}
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  ) : (
                    <p className="mt-6 text-sm text-muted">Live demo coming soon</p>
                  )}
                </div>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
