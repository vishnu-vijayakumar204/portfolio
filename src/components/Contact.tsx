"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission (e.g., EmailJS, Netlify Forms, etc.)
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Have a project in mind or want to collaborate? Let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your visions. Feel free to reach
                out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 glass rounded-2xl p-4 hover-glow">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Mail className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:vishnu.vijayakumar204@gmail.com"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    vishnu.vijayakumar204@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 glass rounded-2xl p-4 hover-glow">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a
                    href="tel:+917598110694"
                    className="text-slate-400 hover:text-purple-400 transition-colors"
                  >
                    +91 - 7598110694
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 glass rounded-2xl p-4 hover-glow">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-slate-400">Bengaluru, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all hover-glow font-semibold flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
