"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const BUDGET_OPTIONS = [
  "< ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
  "Prefer to discuss",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12 },
  }),
};

const inputBase =
  "w-full px-4 py-3 rounded-xl text-foreground text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary/50";
const inputStyle = {
  background: "var(--card)",
  border: "1px solid var(--border)",
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Project Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBudget: ${form.budget}\n\n${form.message}`
    );
    window.location.href = `mailto:vishnu.vijayakumar204@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      style={{ backgroundColor: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, color-mix(in srgb, var(--primary) 40%, transparent), transparent)" }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 18 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ transformPerspective: 800 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Get In{" "}
            <span
              className="text-primary"
            >
              Touch
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Have a project? Let&apos;s talk about what you&apos;re building.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div>
              <h3
                className="text-xl font-bold text-foreground mb-3"
              >
                Contact Information
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m open to freelance projects, contract work, and
                consulting. Fill in the form and I&apos;ll respond within 24
                hours.
              </p>
            </div>

            {[
              {
                icon: Mail,
                label: "Email",
                value: "vishnu.vijayakumar204@gmail.com",
                href: "mailto:vishnu.vijayakumar204@gmail.com",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Bengaluru, India",
                href: undefined,
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-xl p-4"
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <div
                  className="p-2.5 rounded-lg shrink-0"
                  style={{ background: "color-mix(in srgb, var(--primary) 12%, transparent)" }}
                >
                  <Icon size={18} style={{ color: "var(--primary)" }} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  {href ? (
                    <a
                      href={href}
                      className="text-foreground/80 text-sm hover:text-primary transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-foreground/80 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div
              className="rounded-xl p-4 flex items-center gap-3"
              style={{
                background: "color-mix(in srgb, var(--primary) 7%, transparent)",
                border: "1px solid color-mix(in srgb, var(--primary) 20%, transparent)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full shrink-0 animate-pulse" style={{ backgroundColor: "var(--primary)" }} />
              <p className="text-sm" style={{ color: "var(--primary)" }}>
                Currently available for freelance projects.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className={inputBase}
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className={inputBase}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className={inputBase}
                  style={inputStyle}
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className={inputBase}
                  style={{ ...inputStyle, color: form.budget ? "var(--foreground)" : "var(--muted-foreground)" }}
                >
                  <option value="" disabled style={{ color: "var(--muted-foreground)", background: "color-mix(in srgb, var(--muted) 50%, var(--background))" }}>
                    Select budget range
                  </option>
                  {BUDGET_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} style={{ background: "color-mix(in srgb, var(--muted) 50%, var(--background))", color: "var(--foreground)" }}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`${inputBase} resize-none`}
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl font-semibold text-primary-foreground flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: "var(--primary)",
                  boxShadow: "var(--shadow-lg)",
                }}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
