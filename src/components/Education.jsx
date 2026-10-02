import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";

export default function Education() {
  const { education } = site;

  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">Education</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="mt-8 max-w-2xl rounded-2xl border border-border bg-card p-7 sm:p-8">
            <p className="text-xs font-medium tracking-wide text-accent uppercase">{education.period}</p>
            <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground">
              {education.degree}
            </h2>
            <p className="mt-2 text-muted">{education.school}</p>
            <p className="mt-4 inline-flex rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-foreground">
              {education.gpa}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
