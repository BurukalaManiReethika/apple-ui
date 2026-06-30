import { motion } from "framer-motion";

const cards = [
  {
    title: "Lightning Fast",
    desc: "Optimized for blazing performance.",
    large: true
  },
  {
    title: "Minimal UI",
    desc: "Inspired by Apple Design.",
    large: false
  },
  {
    title: "Secure",
    desc: "Enterprise-grade privacy.",
    large: false
  },
  {
    title: "Cloud Sync",
    desc: "Access your work everywhere.",
    large: true
  }
];

export default function BentoGrid() {

return(

<section className="py-32">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold mb-16">

Explore Features

</h2>

<div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">

{cards.map((card,index)=>(

<motion.div

key={index}

whileHover={{scale:1.02}}

className={`rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10 ${
card.large ? "md:col-span-2" : ""
}`}

>

<h2 className="text-3xl font-bold">

{card.title}

</h2>

<p className="text-gray-400 mt-5">

{card.desc}

</p>

</motion.div>

))}

</div>

</div>

</section>

)

}
