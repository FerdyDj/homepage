import Link from "next/link";

export default function Navbar() {
  return (
    <div className="md:flex flex-row items-center justify-start sm:justify-between sm:px-12 px-4 h-[60px] bg-blue-500 max-w-screen sticky top-0 z-50">
      <div className="text-white font-bold">
        <p className="animate-pulse">PORTFOLIO</p>
      </div>
      <div className="flex gap-3 text-white">
        <Link href={"#home"} className="hover:text-orange-300 hover:underline hover:decoration-orange-300 hover:underline-offset-4 hover:decoration-2">
          Home
        </Link>
        <Link href={"#about"} className="hover:text-orange-300 hover:underline hover:decoration-orange-300 hover:underline-offset-4 hover:decoration-2">
          About
        </Link>
        <Link href={"#skills"} className="hover:text-orange-300 hover:underline hover:decoration-orange-300 hover:underline-offset-4 hover:decoration-2">
          Skills
        </Link>
        <Link href={"#portfolio"} className="hover:text-orange-300 hover:underline hover:decoration-orange-300 hover:underline-offset-4 hover:decoration-2">
          Portfolio
        </Link>
        <Link href={"#experience"} className="hover:text-orange-300 hover:underline hover:decoration-orange-300 hover:underline-offset-4 hover:decoration-2">
          Experience
        </Link>
        <Link href={"#testimonials"} className="hover:text-orange-300 hover:underline hover:decoration-orange-300 hover:underline-offset-4 hover:decoration-2">
          Testimonials
        </Link>
        <Link href={"#contact"} className="hover:text-orange-300 hover:underline hover:decoration-orange-300 hover:underline-offset-4 hover:decoration-2">
          Contact
        </Link>
      </div>
    </div>
  );
}
