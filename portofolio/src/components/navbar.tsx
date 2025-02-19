import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-screen">
      <div className="h-[60px] w-[50%] bg-blue-500 flex justify-start items-center pl-14 text-white font-bold">
        <p className="animate-pulse">PORTOFOLIO</p>
      </div>
      <div className="h-[60px] w-[50%] bg-blue-500 flex justify-end items-center gap-3 text-white max-sm:justify-end px-6">
        <Link href={"/"} className="hover:text-orange-300">
          Home
        </Link>
        <Link href={"/about"} className="hover:text-orange-300">
          About
        </Link>
        <Link href={"/contact"} className="hover:text-orange-300">
          Contact
        </Link>
      </div>
    </div>
  );
}
