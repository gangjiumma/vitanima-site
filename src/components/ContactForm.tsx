"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";

type FormCopy = {
  name: string;
  namePh: string;
  company: string;
  companyPh: string;
  email: string;
  emailPh: string;
  type: string;
  types: readonly string[];
  message: string;
  messagePh: string;
  submit: string;
  sending: string;
  done: string;
  error: string;
  required: string;
  invalidEmail: string;
};

const field =
  "w-full rounded-lg border border-line-soft bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-4 focus:border-forest";
const label = "block text-[13px] font-medium text-ink-3";

export default function ContactForm({ copy }: { copy: FormCopy }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    type: copy.types[0] ?? "",
    message: "",
    website: "", // 허니팟
  });

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const submit = async () => {
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setState("error");
      setMsg(copy.required);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setState("error");
      setMsg(copy.invalidEmail);
      return;
    }

    setState("sending");
    setMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("send failed");
      setState("done");
      setMsg(copy.done);
    } catch {
      setState("error");
      setMsg(copy.error);
    }
  };

  if (state === "done") {
    return (
      <div className="rounded-2xl border border-forest bg-forest-soft p-8 text-center sm:p-12">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-forest">
          <Check size={22} className="text-paper" strokeWidth={2.5} />
        </span>
        <p className="t-title mt-5 text-[17px] leading-[1.7] text-ink">{msg}</p>
      </div>
    );
  }

  const busy = state === "sending";

  return (
    <div className="rounded-2xl border border-line-soft bg-paper p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={label}>
            {copy.name} <span className="text-forest">*</span>
          </label>
          <input
            id="cf-name"
            value={form.name}
            onChange={(e) => set("name")(e.target.value)}
            placeholder={copy.namePh}
            maxLength={80}
            disabled={busy}
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="cf-company" className={label}>
            {copy.company}
          </label>
          <input
            id="cf-company"
            value={form.company}
            onChange={(e) => set("company")(e.target.value)}
            placeholder={copy.companyPh}
            maxLength={120}
            disabled={busy}
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="cf-email" className={label}>
            {copy.email} <span className="text-forest">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            placeholder={copy.emailPh}
            maxLength={160}
            disabled={busy}
            className={`mt-2 ${field}`}
          />
        </div>

        <div>
          <label htmlFor="cf-type" className={label}>
            {copy.type}
          </label>
          <select
            id="cf-type"
            value={form.type}
            onChange={(e) => set("type")(e.target.value)}
            disabled={busy}
            className={`mt-2 ${field} appearance-none`}
          >
            {copy.types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={label}>
            {copy.message} <span className="text-forest">*</span>
          </label>
          <textarea
            id="cf-message"
            value={form.message}
            onChange={(e) => set("message")(e.target.value)}
            placeholder={copy.messagePh}
            rows={5}
            maxLength={5000}
            disabled={busy}
            className={`mt-2 resize-y ${field}`}
          />
        </div>
      </div>

      {/* 봇 방지 — 사람에게는 보이지 않는다 */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={form.website}
        onChange={(e) => set("website")(e.target.value)}
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={submit}
          disabled={busy}
          className="inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 text-[15px] font-medium text-paper transition-colors hover:bg-forest-2 disabled:opacity-60"
        >
          <Mail size={16} />
          {busy ? copy.sending : copy.submit}
        </button>

        {state === "error" && msg ? (
          <p className="text-[13.5px] leading-relaxed text-ink-3">{msg}</p>
        ) : null}
      </div>
    </div>
  );
}
