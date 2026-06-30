import { motion } from "framer-motion";

const stats = [
  {
    number: "10M+",
    title: "Users"
  },
  {
    number: "99.99%",
    title: "Uptime"
  },
  {
    number: "150+",
    title: "Countries"
  },
  {
    number: "4.9★",
    title: "Rating"
  }
];

export default function Stats() {
  return (
    <section className="py-32">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center"
            >

              <h2 className="text-5xl font-bold">
                {item.number}
              </h2>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
