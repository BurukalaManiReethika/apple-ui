import { motion } from "framer-motion";

export default function CTA(){

return(

<section className="py-36">

<div className="max-w-5xl mx-auto">

<motion.div

whileHover={{scale:1.02}}

className="rounded-[40px] bg-gradient-to-r from-blue-500 to-purple-600 p-20 text-center"

>

<h2 className="text-6xl font-bold">

Ready to Build?

</h2>

<p className="mt-6 text-xl opacity-90">

Create premium user experiences with modern React and Tailwind CSS.

</p>

<button className="mt-12 bg-white text-black rounded-full px-8 py-4 font-semibold hover:scale-105 transition">

Start Now

</button>

</motion.div>

</div>

</section>

)

}
