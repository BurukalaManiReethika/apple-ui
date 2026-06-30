import { motion } from "framer-motion";

const cards = [
  {
    title: "Lightning Fast",
    desc: "Optimized for blazing performance.",
    large: true,
  },
  {
    title: "Minimal UI",
    desc: "Inspired by Apple Design.",
    large: false,
  },
  {
    title: "Secure",
    desc: "Enterprise-grade privacy.",
    large: false,
  },
  {
    title: "Cloud Sync",
    desc: "Access your work everywhere.",
    large: true,
  },
];

export default function BentoGrid() {
  return (
    <section id="explore" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-16"
        >
          Explore Features
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 ${
                card.large ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-3xl font-bold">{card.title}</h3>
              <p className="text-gray-400 mt-5">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
