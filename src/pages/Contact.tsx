import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Log configuration on mount
  useEffect(() => {
    console.log("🔍 ===== EMAILJS CONFIGURATION =====");
    console.log("Service ID:", EMAILJS_SERVICE_ID);
    console.log("Template ID:", EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", EMAILJS_PUBLIC_KEY);
    console.log("====================================");
  }, []);

  const inputClass =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white " +
    "placeholder-neutral-500 outline-none transition-all duration-300 " +
    "focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // Get all form data
    const formData = new FormData(formRef.current);
    
    // Log ALL form fields
    console.log("📋 ===== FORM DATA =====");
    const fieldValues: Record<string, string> = {};
    for (let [key, value] of formData.entries()) {
      fieldValues[key] = value.toString();
      console.log(`  ${key}: "${value}"`);
    }
    console.log("========================");

    // Check for empty fields
    const emptyFields = Object.entries(fieldValues)
      .filter(([_, value]) => !value || value.trim() === '')
      .map(([key]) => key);
    
    if (emptyFields.length > 0) {
      console.warn("⚠️ Empty fields found:", emptyFields);
      setErrorMessage(`Please fill in: ${emptyFields.join(', ')}`);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
      return;
    }

    // Check environment variables
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("❌ Missing environment variables!");
      setErrorMessage("Email service is not configured. Check console for details.");
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      // Method 1: Try sending with sendForm
      console.log("📤 Sending with sendForm...");
      
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      console.log("✅ Success!", result);
      setStatus("success");
      formRef.current.reset();

      setTimeout(() => setStatus("idle"), 5000);
      
    } catch (error: any) {
      console.error("❌ ===== ERROR DETAILS =====");
      console.error("Error object:", error);
      console.error("Error status:", error?.status);
      console.error("Error text:", error?.text);
      console.error("Error message:", error?.message);
      
      // Try to parse the error text if it's JSON
      let errorDetails = error?.text || error?.message || "Unknown error";
      try {
        const parsed = JSON.parse(errorDetails);
        console.error("Parsed error:", parsed);
        if (parsed.message) errorDetails = parsed.message;
      } catch {
        // Not JSON, use as is
      }
      
      console.error("==========================");
      
      // Try Method 2: Send with send (alternative approach)
      console.log("🔄 Trying alternative send method...");
      try {
        const templateParams = {
          name: fieldValues.name || '',
          email: fieldValues.email || '',
          title: fieldValues.title || '',
          message: fieldValues.message || '',
        };
        
        console.log("Template params:", templateParams);
        
        const result2 = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
        
        console.log("✅ Alternative method succeeded!", result2);
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 5000);
        return;
        
      } catch (error2: any) {
        console.error("❌ Alternative method also failed:", error2);
      }
      
      // Both methods failed
      let userMessage = "Invalid request. Please check your template variables.";
      
      if (errorDetails.includes("required")) {
        userMessage = "Missing required fields. Please fill in all fields.";
      } else if (errorDetails.includes("template")) {
        userMessage = "Template variable mismatch. Check the console for details.";
      } else if (errorDetails.includes("service")) {
        userMessage = "Service not found. Check your Service ID.";
      } else if (errorDetails.includes("authentication") || errorDetails.includes("auth")) {
        userMessage = "Authentication failed. Check your Public Key.";
      }
      
      setErrorMessage(userMessage + " Check the console (F12) for more details.");
      setStatus("error");
      
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 8000);
    }
  };

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Let's build something amazing together."
      />

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="px-6 py-20 mx-auto max-w-7xl md:px-10"
      >
        <motion.div variants={fadeUp} className="mb-20 text-center">
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl font-extrabold text-transparent md:text-7xl bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text">
            Let's Work
            <br />
            Together
          </h1>
          <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-neutral-400">
            Have a project in mind or just want to say hello? I'd love to
            hear from you — I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div variants={fadeUp} className="flex flex-col gap-6 lg:col-span-2">
            {/* Contact cards - unchanged */}
            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 border shadow-xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border rounded-2xl bg-cyan-500/15 border-cyan-500/20 text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[3px] text-neutral-500 mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:nikhilkhavdu441@gmail.com"
                    className="font-medium text-white transition hover:text-cyan-300"
                  >
                    nikhilkhavdu441@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4 }}
              className="p-6 border shadow-xl rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 border rounded-2xl bg-cyan-500/15 border-cyan-500/20 text-cyan-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[3px] text-neutral-500 mb-1">
                    Location
                  </p>
                  <p className="font-medium text-white">Gujarat, India</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 border shadow-xl rounded-3xl border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="relative flex w-3 h-3">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-ping bg-cyan-400" />
                  <span className="relative inline-flex w-3 h-3 rounded-full bg-cyan-400" />
                </span>
                <p className="text-sm font-semibold text-cyan-300">
                  Open to Opportunities
                </p>
              </div>
              <p className="text-sm leading-6 text-neutral-400">
                Currently open to freelance projects, internships, and full-time
                roles. Let's connect!
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={fadeUp}
            className="p-8 border shadow-2xl rounded-3xl lg:col-span-3 border-white/10 bg-white/5 backdrop-blur-xl md:p-10"
          >
            <h2 className="mb-8 text-2xl font-bold text-white">
              Send a Message
            </h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className={inputClass}
                />
              </div>

              <input
                type="text"
                name="title"
                placeholder="Subject"
                required
                className={inputClass}
              />

              <textarea
                name="message"
                rows={6}
                placeholder="Write your message..."
                required
                className={`${inputClass} resize-none`}
              />

              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-center gap-3 px-5 py-4 text-sm font-medium border rounded-2xl text-emerald-300 border-emerald-500/20 bg-emerald-500/10"
                  >
                    <CheckCircle size={18} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="flex items-start gap-3 px-5 py-4 text-sm font-medium text-red-300 border rounded-2xl border-red-500/20 bg-red-500/10"
                  >
                    <AlertCircle size={18} className="mt-0.5 flex-shrink-0" />
                    <div className="whitespace-pre-wrap">
                      {errorMessage}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
                className="flex items-center justify-center w-full gap-3 py-4 text-base font-semibold text-white transition-all duration-300 shadow-lg rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>
    </PageTransition>
  );
};

export default Contact;