"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  LoaderCircle,
  Mail,
  OctagonAlert,
} from "lucide-react";

type SubmitState = {
  kind: "idle" | "success" | "error";
  message: string;
};

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    kind: "idle",
    message: "",
  });

  useEffect(() => {
    if (submitState.kind === "idle") {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setSubmitState({ kind: "idle", message: "" });
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [submitState]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setSubmitState({
        kind: "error",
        message:
          "Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to your environment before sending messages.",
      });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      ...Object.fromEntries(formData.entries()),
      access_key: ACCESS_KEY,
      subject: "New portfolio inquiry for Nikhil Nama",
      from_name: "Nikhil Nama Portfolio",
    };

    try {
      setIsSubmitting(true);
      setSubmitState({ kind: "idle", message: "" });

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as {
        message?: string;
        success?: boolean;
      };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong while sending your message.");
      }

      setSubmitState({
        kind: "success",
        message: "Message sent successfully. I’ll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      setSubmitState({
        kind: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const showToast = submitState.kind !== "idle";
  const isSuccessToast = submitState.kind === "success";
  const ToastIcon = isSuccessToast ? Check : OctagonAlert;

  return (
    <section id="contact" className="relative min-h-[72vh] scroll-mt-24 py-6">
      <AnimatePresence>
        {showToast && (
          <motion.div
            key={submitState.kind + submitState.message}
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="pointer-events-none fixed inset-x-0 bottom-28 z-50 flex justify-center px-4 sm:bottom-32"
            aria-live="polite"
          >
            <div
              className={
                isSuccessToast
                  ? "relative overflow-hidden rounded-[1.75rem] border border-gold-500/30 bg-[#141414]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(212,175,55,0.08)] backdrop-blur-2xl"
                  : "relative overflow-hidden rounded-[1.75rem] border border-rose-400/25 bg-[#141414]/80 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45),0_0_0_1px_rgba(244,63,94,0.08)] backdrop-blur-2xl"
              }
            >
              <div
                className={
                  isSuccessToast
                    ? "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.26),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%)]"
                    : "absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(244,63,94,0.22),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.12),transparent_45%)]"
                }
              />

              <motion.div
                aria-hidden="true"
                className="absolute inset-y-0 left-[-30%] w-24 skew-x-[-20deg] bg-white/10 blur-xl"
                animate={{ x: ["0%", "340%"] }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.18 }}
              />

              <div className="relative flex items-center gap-3">
                <div
                  className={
                    isSuccessToast
                      ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-gold-500/25 bg-gold-500/12 text-gold-400"
                      : "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-rose-400/25 bg-rose-400/10 text-rose-300"
                  }
                >
                  <ToastIcon className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm leading-6 text-white/82 sm:text-base">
                    {submitState.message}
                  </p>
                </div>
              </div>

              <div className="relative mt-4 h-[3px] overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className={isSuccessToast ? "h-full bg-gold-500" : "h-full bg-rose-400"}
                  initial={{ scaleX: 1, transformOrigin: "left" }}
                  animate={{ scaleX: 0 }}
                  transition={{ duration: 4.5, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-10 max-w-3xl">
        <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold text-white">
          <Mail className="h-6 w-6 text-gold-500" />
          Contact
        </h2>

        <p className="text-xl font-bold text-white sm:text-4xl lg:text-5xl">
          Open to opportunities and conversations
        </p>

        <p className="mt-4 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
          If you're hiring, collaborating, or working on an interesting engineering problem, feel free to reach out.
        </p>
      </div>

      <div className="mx-auto flex w-full justify-center">
        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl sm:p-8"
        >
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_top,rgba(212,175,55,0.13),transparent_36%)]" />

          <div className="relative grid gap-5">
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <label className="grid gap-2">
              <span className="text-sm font-medium text-white/[0.72]">Your name</span>
              <input
                type="text"
                name="name"
                placeholder="Nikhil Nama"
                required
                className="h-14 rounded-2xl border border-white/10 bg-[#121214]/90 px-4 text-white outline-none transition focus:border-gold-500/60 focus:bg-[#151518] focus:ring-4 focus:ring-gold-500/10"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-white/[0.72]">Email address</span>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="h-14 rounded-2xl border border-white/10 bg-[#121214]/90 px-4 text-white outline-none transition focus:border-gold-500/60 focus:bg-[#151518] focus:ring-4 focus:ring-gold-500/10"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-white/[0.72]">Message</span>
              <textarea
                name="message"
                placeholder="Tell me about the role, project, or technical idea you’d like to discuss."
                required
                rows={6}
                className="min-h-40 rounded-[1.5rem] border border-white/10 bg-[#121214]/90 px-4 py-4 text-white outline-none transition focus:border-gold-500/60 focus:bg-[#151518] focus:ring-4 focus:ring-gold-500/10"
              />
            </label>

            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-end">
              <div className="relative w-full sm:w-auto">
                <motion.button
                  type="submit"
                  whileHover={{ y: -1 }}
                  whileTap={{
                    y: 1,
                    boxShadow:
                      "inset 10px 10px 24px rgba(120,84,7,0.48), inset -10px -10px 24px rgba(248,226,154,0.18)",
                  }}
                  disabled={isSubmitting}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="relative inline-flex h-16 w-full items-center justify-center rounded-full border border-[#f6dea1]/40 bg-[linear-gradient(180deg,#f4d97a_0%,#dfba4c_46%,#c9991a_100%)] px-8 text-xl font-medium tracking-[-0.02em] text-[#2a1d05] shadow-[10px_10px_24px_rgba(107,78,11,0.34),-10px_-10px_24px_rgba(255,240,189,0.18)] transition disabled:cursor-not-allowed disabled:opacity-75 sm:min-w-64"
                >
                  <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0.06)_28%,transparent_40%)]" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <LoaderCircle className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send message"
                    )}
                  </span>
                </motion.button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
