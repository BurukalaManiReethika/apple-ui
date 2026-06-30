import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const stats = [
  { value: 10, suffix: "M+", title: "Users" },
  { value: 99.99, suffix: "%", title: "Uptime" },
  { value: 150, suffix: "+", title: "Countries" },
  { value: 4.9, suffix: "★", title: "Rating" },
];

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(latest),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <h2 ref={ref} className="text-5xl font-bold">
      {isDecimal ? display.toFixed(2) : Math.round(display)}
      {suffix}
    </h2>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center"
            >
              <CountUp value={item.value} suffix={item.suffix} />
              <p className="text-gray-400 mt-3">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
