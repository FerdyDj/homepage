import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex-row md:flex w-screen h-20 bg-sky-100 justify-between items-center">
      <div className="pl-4 py-2 md:pl-8">
        &copy; Copyright <span className="font-bold">Ferdy</span> All Right
        Reserved
      </div>
      <div className="flex pl-4 py-2 md:pr-12 items-center gap-5">
        <span>Connect to me :</span>
        <Link href={"https:www.facebook.com"}>
          <FaFacebookF className="text-blue-500 hover:text-blue-400 w-6 h-6 cursor-pointer" />
        </Link>
        <Link href={"https:www.instagram.com"}>
          <FaInstagram className="text-pink-500 hover:text-pink-400 w-6 h-6 cursor-pointer" />
        </Link>
        <Link href={"https:www.github.com"}>
          <FaGithub className="text-black hover:text-gray-500 w-6 h-6 cursor-pointer" />
        </Link>
        <Link href={"https:www.discord.com"}>
          <FaDiscord className="text-indigo-500 hover:text-indigo-400 w-6 h-6 cursor-pointer" />
        </Link>
        <Link href={"https:www.linkedin.com"}>
          <FaLinkedin className="text-blue-500 hover:text-blue-400 w-6 h-6 cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
