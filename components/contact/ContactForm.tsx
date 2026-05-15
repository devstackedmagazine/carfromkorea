"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { variants } from "@/lib/motion-presets";
import { Loader2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  vehicle: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  vehicle: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(
  field: keyof FormData,
  value: string,
): string | undefined {
  switch (field) {
    case "name":
      if (!value.trim()) return "Emri është i detyrueshëm";
      if (value.trim().length < 2) return "Emri duhet të ketë të paktën 2 karaktere";
      return;
    case "email":
      if (!value.trim()) return "Email-i është i detyrueshëm";
      if (!EMAIL_REGEX.test(value)) return "Ju lutem shkruani një email të vlefshëm";
      return;
    case "message":
      if (!value.trim()) return "Mesazhi është i detyrueshëm";
      if (value.trim().length < 10) return "Mesazhi duhet të ketë të paktën 10 karaktere";
      return;
  }
}

const inputBase =
  "w-full bg-transparent border border-[#333] rounded-lg px-3 py-[10px] text-white text-sm outline-none transition-all duration-200 placeholder:text-[#808080] focus:border-light-emerald focus:shadow-[0_0_0_2px_rgba(147,213,174,0.15)]";

const labelBase = "text-sm font-semibold text-white mb-2 block";

const errorText = "text-red-400 text-xs mt-1.5";

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<keyof FormData>>(new Set());
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (touched.has(name as keyof FormData)) {
      const error = validateField(name as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const field = e.target.name as keyof FormData;
    setTouched((prev) => new Set(prev).add(field));
    const error = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    let valid = true;

    const nameErr = validateField("name", form.name);
    if (nameErr) {
      newErrors.name = nameErr;
      valid = false;
    }

    const emailErr = validateField("email", form.email);
    if (emailErr) {
      newErrors.email = emailErr;
      valid = false;
    }

    const msgErr = validateField("message", form.message);
    if (msgErr) {
      newErrors.message = msgErr;
      valid = false;
    }

    setErrors(newErrors);
    setTouched(new Set<keyof FormData>(["name", "email", "message"]));
    return valid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setSubmitting(false);
    setSubmitted(true);
    setForm(initialFormData);
    setTouched(new Set());
    setErrors({});
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1D2021] border border-light-emerald/30 rounded-lg p-8 text-center"
      >
        <div className="w-16 h-16 rounded-full bg-light-emerald/20 flex items-center justify-center mx-auto mb-5">
          <Send size={28} className="text-light-emerald" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">
          Mesazhi u D&euml;rgua!
        </h3>
        <p className="text-off-white/60 text-sm leading-relaxed max-w-sm mx-auto">
          Faleminderit q&euml; na kontaktuat. Ekipi yn&euml; do t&euml; ju p&euml;rgjigjet
          brenda 24 or&euml;ve.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-light-emerald hover:underline"
        >
          D&euml;rgo nj&euml; mesazh tjet&euml;r
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full"
      variants={variants.fadeInUp}
      initial="hidden"
      animate="visible"
      noValidate
    >
      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="contact-name" className={labelBase}>
            Emri i Plot&euml; <span className="text-light-emerald">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="John Doe"
            className={inputBase}
          />
          {errors.name && touched.has("name") && (
            <p className={errorText}>{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className={labelBase}>
            Adresa e Email-it <span className="text-light-emerald">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="john@example.com"
            className={inputBase}
          />
          {errors.email && touched.has("email") && (
            <p className={errorText}>{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="contact-phone" className={labelBase}>
            Numri i Telefonit <span className="text-off-white/40 text-xs">(Opsional)</span>
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+383 44 000 000"
            className={inputBase}
          />
        </div>

        {/* Vehicle */}
        <div>
          <label htmlFor="contact-vehicle" className={labelBase}>
            K&euml;rkes&euml; p&euml;r Shikim Automjeti
          </label>
          <input
            id="contact-vehicle"
            name="vehicle"
            type="text"
            value={form.vehicle}
            onChange={handleChange}
            placeholder="Shkruani modelin e makinës..."
            className={inputBase}
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="contact-message" className={labelBase}>
            Mesazhi Juaj <span className="text-light-emerald">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ju lutem shkruani detajet e kërkesës suaj..."
            rows={5}
            className={`${inputBase} resize-none min-h-[120px]`}
          />
          {errors.message && touched.has("message") && (
            <p className={errorText}>{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="w-full flex items-center justify-center gap-2 bg-light-emerald text-[#111] font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(147,213,174,0.25)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none min-h-[44px]"
        >
          {submitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Duke u d&euml;rguar...
            </>
          ) : (
            <>
              D&euml;rgo Mesazhin
              <Send size={16} />
            </>
          )}
        </button>
      </div>
    </motion.form>
  );
}
