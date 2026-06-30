import { Apple } from "lucide-react";

export default function Footer() {
  return (

<footer className="border-t border-white/10 py-10">

<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

<div className="flex items-center gap-2">

<Apple size={20}/>

AppleUI

</div>

<p className="text-gray-500 mt-4 md:mt-0">

© 2026 AppleUI

</p>

</div>

</footer>

  );
}
