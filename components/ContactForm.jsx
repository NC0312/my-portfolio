"use client";

import { useRef, useState } from "react";
import { profile, services } from "@/lib/data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[0-9\s-]{7,15}$/;
const EMPTY = { name: "", email: "", phone: "", service: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Enter your name.";
  if (!v.email.trim()) e.email = "Enter your email address.";
  else if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Enter an email like name@example.com.";
  if (v.phone.trim() && !PHONE_RE.test(v.phone.trim()))
    e.phone = "Enter 7 to 15 digits. A leading + is fine.";
  if (!v.message.trim()) e.message = "Write a short message.";
  return e;
}

async function post(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`Request failed with ${res.status}`);
}

export default function ContactForm() {
  const formRef = useRef(null);
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(next)[name] }));
    }
  };

  const check = (e) => {
    const { name } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validate(values)[name] }));
  };

  const submit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstBad = Object.keys(found)[0];
    if (firstBad) {
      formRef.current?.elements[firstBad]?.focus();
      return;
    }

    setStatus("sending");
    const [firstname, ...rest] = values.name.trim().split(/\s+/);
    const payload = {
      firstname,
      lastname: rest.join(" "),
      email: values.email.trim(),
      phone: values.phone.trim(),
      service: values.service || "Not specified",
      message: values.message.trim(),
    };

    try {
      // The notification to me is what matters. The confirmation to the
      // sender is best effort and must not turn a delivered message into an error.
      await post("/api/send-notification", payload);
      post("/api/send-confirmation", payload).catch(() => {});
      setStatus("sent");
      setValues(EMPTY);
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="rounded-lg border bg-surface p-8" role="status">
        <h2 className="t-h3">Message sent</h2>
        <p className="t-body mt-3 text-muted">
          Thanks. I'll reply by email, and a confirmation copy is on its way to you.
        </p>
        <button
          type="button"
          className="btn btn-ghost mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </button>
      </div>
    );
  }

  const sending = status === "sending";

  return (
    <form ref={formRef} onSubmit={submit} noValidate className="flex flex-col gap-6">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="input"
          value={values.name}
          onChange={update}
          onBlur={check}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && (
          <p id="name-error" className="error-text">
            {errors.name}
          </p>
        )}
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="input"
          value={values.email}
          onChange={update}
          onBlur={check}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          required
        />
        {errors.email && (
          <p id="email-error" className="error-text">
            {errors.email}
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="phone">
            Phone <span className="hint">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            className="input"
            value={values.phone}
            onChange={update}
            onBlur={check}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="error-text">
              {errors.phone}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="service">
            Service <span className="hint">(optional)</span>
          </label>
          <select
            id="service"
            name="service"
            className="input"
            value={values.service}
            onChange={update}
          >
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.title} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          className="input"
          value={values.message}
          onChange={update}
          onBlur={check}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />
        {errors.message && (
          <p id="message-error" className="error-text">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="error-text">
          Your message was not sent. Check your connection and try again, or email{" "}
          <a className="link" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <button type="submit" className="btn btn-primary" disabled={sending}>
          {sending ? "Sending" : "Send message"}
        </button>
        <p className="t-small text-muted">Your details are used only to reply.</p>
      </div>
    </form>
  );
}
