"use client";

import { useState } from "react";
import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";
import { MailIcon, PhoneIcon } from "./Icons";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function onChange(event) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  function onSubmit(event) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2">
        <FadeIn>
          <p className="text-sm font-medium tracking-[0.18em] text-accent uppercase">Contact</p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Let&apos;s build something useful
          </h2>
          <p className="mt-4 max-w-md text-muted leading-7">
            Open to full-stack roles, product work, and thoughtful collaborations. Send a note — I typically reply within a day.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted">
                <MailIcon />
              </span>
              {site.email}
            </a>
            <a
              href={`tel:${site.phoneHref}`}
              className="flex items-center gap-3 text-sm text-foreground transition-colors hover:text-accent"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted">
                <PhoneIcon />
              </span>
              {site.phone}
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <label className="block text-sm text-muted">
              Name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-foreground outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--glow)]"
              />
            </label>
            <label className="mt-4 block text-sm text-muted">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-2 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-foreground outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--glow)]"
              />
            </label>
            <label className="mt-4 block text-sm text-muted">
              Message
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={onChange}
                required
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-foreground outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--glow)]"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Send message
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
