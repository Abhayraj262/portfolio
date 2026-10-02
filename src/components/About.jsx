import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";

const facts = [
  { label: "Based in", value: site.location },
  { label: "Currently", value: "Full Stack Developer · Sun Consultants" },
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
];

const stack = ["Next.js", "React", "Node.js", "MongoDB"];

export default function About() {
  return (
    <section id="about" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">About</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Building products that ship
          </h2>
        </FadeIn>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <FadeIn>
            <div className="space-y-4 text-base leading-7 text-muted sm:text-[17px] sm:leading-8">
              {site.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <aside className="rounded-2xl border border-border bg-card p-6">
              <dl className="space-y-4">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-xs font-medium tracking-wide text-muted uppercase">{fact.label}</dt>
                    <dd className="mt-1 text-sm text-foreground">
                      {fact.href ? (
                        <a href={fact.href} className="transition-colors hover:text-accent">
                          {fact.value}
                        </a>
                      ) : (
                        fact.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border bg-accent-soft px-2.5 py-1 text-xs text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </aside>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
