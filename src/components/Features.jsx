import { Cpu, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Cpu,
    title: "Powerful Performance",
    desc: "Lightning-fast user experience."
  },
  {
    icon: Shield,
    title: "Privacy First",
    desc: "Security built into every interaction."
  },
  {
    icon: Zap,
    title: "Modern Technology",
    desc: "Built using the latest web technologies."
  }
];

export default function Features() {
  return (

<section id="features" className="py-28">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-5xl font-bold text-center mb-16">

Why You'll Love It

</h2>

<div className="grid md:grid-cols-3 gap-8">

{features.map((item,index)=>{

const Icon=item.icon;

return(

<motion.div

key={index}

whileHover={{y:-10}}

className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-10"

>

<Icon size={40}/>

<h3 className="text-2xl font-semibold mt-8">

{item.title}

</h3>

<p className="text-gray-400 mt-4">

{item.desc}

</p>

</motion.div>

)

})}

</div>

</div>

</section>

  );
}
