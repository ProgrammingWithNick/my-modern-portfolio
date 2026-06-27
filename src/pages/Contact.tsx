import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageTransition } from "../components/PageTransition";
import { SEO } from "../components/SEO";

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();

    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message Sent Successfully ✅");

      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  const inputStyle =
    "w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-neutral-500 outline-none transition-all duration-300 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20";

  return (
    <PageTransition>
      <SEO
        title="Contact"
        description="Let's build something amazing together."
      />

      <section className="px-6 py-20 mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-extrabold text-transparent md:text-7xl bg-gradient-to-r from-white via-cyan-300 to-blue-500 bg-clip-text">
            Let's Work Together
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-neutral-400">
            Have a project in mind or just want to say hello? I'd love to hear
            from you.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-5">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 lg:col-span-2"
          >

            <div className="p-6 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/20">
                  <Mail className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Email</h3>
                  <p className="text-neutral-400">
                    nikhilkhavdu441@gmail.com
                  </p>
                </div>
              </div>

            </div>

            <div className="p-6 border rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl">

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyan-500/20">
                  <MapPin className="text-cyan-400" />
                </div>

                <div>
                  <h3 className="font-semibold text-white">Location</h3>
                  <p className="text-neutral-400">
                    India
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Form */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-8 border lg:col-span-3 rounded-3xl border-white/10 bg-white/5 backdrop-blur-xl"
          >

            <form
              onSubmit={handleSubmission}
              className="space-y-6"
            >

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      name: e.target.value,
                    })
                  }
                  required
                  className={inputStyle}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({
                      ...formState,
                      email: e.target.value,
                    })
                  }
                  required
                  className={inputStyle}
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                value={formState.subject}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    subject: e.target.value,
                  })
                }
                required
                className={inputStyle}
              />

              <textarea
                rows={6}
                placeholder="Write your message..."
                value={formState.message}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.target.value,
                  })
                }
                required
                className={`${inputStyle} resize-none`}
              />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: .98 }}
                type="submit"
                className="flex items-center justify-center w-full gap-3 py-4 font-semibold text-white shadow-lg rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600"
              >
                <Send size={18} />

                {status || "Send Message"}
              </motion.button>

            </form>

          </motion.div>

        </div>

      </section>
    </PageTransition>
  );
};

export default Contact;