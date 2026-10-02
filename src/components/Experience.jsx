import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">Experience</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Where I&apos;ve built
          </h2>
        </FadeIn>

        <ol className="relative mt-10 border-l border-border pl-8 sm:pl-10">
          {site.experience.map((job, index) => (
            <li key={job.company} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[45px]" />
              <FadeIn delay={index * 0.08}>
                <p className="text-xs font-medium tracking-wide text-accent uppercase">{job.period}</p>
                <h3 className="mt-2 font-heading text-xl font-medium text-foreground">{job.title}</h3>
                <p className="mt-1 text-sm text-muted">
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    job.company
                  )}{" "}
                  · {job.location}
                </p>
                <ul className="mt-4 space-y-2 text-[15px] leading-7 text-muted">
                  {job.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
