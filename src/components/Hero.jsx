import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Think Different.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="text-gray-400 text-xl mt-8 max-w-3xl mx-auto"
        >
          Beautiful software deserves beautiful design.
          Experience a premium Apple-inspired interface built with React,
          Tailwind CSS and Framer Motion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-14 flex justify-center gap-6 flex-wrap"
        >

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
            Get Started
          </button>

          <button className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition">
            Learn More
          </button>

        </motion.div>

        <motion.div
          initial={{ scale: .8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-24"
        >

          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 h-[450px] flex items-center justify-center">

            <h2 className="text-3xl text-gray-400">
              Product Preview
            </h2>

          </div>

        </motion.div>

      </div>

    </section>
  );
}
