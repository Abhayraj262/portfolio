"use client";

import { useState } from "react";
import { site } from "@/src/data/site";
import FadeIn from "./FadeIn";
import { MailIcon, PhoneIcon } from "./Icons";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function onChange(event) {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  async function onSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error("The contact form is not configured yet.");
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
          subject: `Portfolio inquiry from ${form.name.trim()}`,
        }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Could not send your message.");
      }

      setForm(initialForm);
      setStatus("success");
      setFeedback("Thanks — I’ll get back to you soon.");
    } catch (error) {
      setStatus("error");
      setFeedback(error.message || "Something went wrong. Please try again.");
    }
  }

  const isSending = status === "loading";

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
                disabled={isSending}
                className="mt-2 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-foreground outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--glow)] disabled:opacity-60"
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
                disabled={isSending}
                className="mt-2 w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-foreground outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--glow)] disabled:opacity-60"
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
                disabled={isSending}
                className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-3.5 py-2.5 text-foreground outline-none transition-shadow focus:shadow-[0_0_0_3px_var(--glow)] disabled:opacity-60"
              />
            </label>
            <button
              type="submit"
              disabled={isSending}
              className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-foreground text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSending ? "Sending…" : "Send message"}
            </button>
            {feedback ? (
              <p
                className={`mt-3 text-sm ${status === "success" ? "text-accent" : "text-muted"}`}
                role="status"
              >
                {feedback}
              </p>
            ) : null}
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
