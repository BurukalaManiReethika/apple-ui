import { useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="py-36">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.01 }}
          className="rounded-[40px] bg-gradient-to-r from-blue-500 to-purple-600 p-10 md:p-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold">Ready to Build?</h2>
          <p className="mt-6 text-lg md:text-xl opacity-90">
            Create premium user experiences with modern React and Tailwind CSS.
          </p>

          {submitted ? (
            <p className="mt-12 text-lg font-medium">
              Thanks! We'll be in touch at {email}.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 rounded-full px-6 py-4 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="bg-white text-black rounded-full px-8 py-4 font-semibold hover:scale-105 active:scale-95 transition"
              >
                Start Now
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
