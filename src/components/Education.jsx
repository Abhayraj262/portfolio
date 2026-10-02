import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";

export default function Education() {
  const { education } = site;
  const facts = [
    { label: "Duration", value: education.period },
    { label: "Result", value: education.gpa },
    { label: "University", value: education.school },
  ];

  return (
    <section id="education" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">Education</p>
        </FadeIn>
        <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
          <FadeIn>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 sm:p-8">
              <p className="text-xs font-medium tracking-wide text-accent uppercase">{education.period}</p>
              <h2 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                {education.degree}
              </h2>
              <p className="mt-2 text-muted">{education.school}</p>
              <p className="mt-4 inline-flex w-fit rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-foreground">
                {education.gpa}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.08}>
            <aside className="flex h-full flex-col justify-center rounded-2xl border border-border bg-card p-7 sm:p-8">
              <dl className="space-y-5">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-medium tracking-wide text-muted uppercase">{fact.label}</dt>
                    <dd className="mt-1 text-sm text-foreground">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
