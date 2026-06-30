import { Cpu, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Cpu,
    title: "Powerful Performance",
    desc: "Lightning-fast user experience.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Security built into every interaction.",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    desc: "Built using the latest web technologies.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
  return (
    <section id="features" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-center mb-16"
        >
          Why You'll Love It
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10"
              >
                <Icon size={40} />
                <h3 className="text-2xl font-semibold mt-8">{feature.title}</h3>
                <p className="text-gray-400 mt-4">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
