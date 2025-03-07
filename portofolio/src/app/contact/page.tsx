import { div } from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="py-20 bg-slate-200">
      <h2 className="flex justify-center text-3xl font-bold mb-10 gradient-">
        CONTACT ME
      </h2>
      <div className="w-screen max-sm:h-[50%] max-sm:flex-row md:flex max-sm:p-2 p-8 h-[100%]">
        <div className="w-full md:w-[50%]">
          <h3 className="text-4xl font-extrabold text-blue-500 p-8">
            Get In Touch
          </h3>
          <p className="text-xl font-semibold px-8 py-4">
            If you have any questions, feedback, or would like to discuss
            potential opportunities, feel free to reach out! I&apos;d love to
            connect and hear from you.
          </p>
        </div>
        <div className="w-5/12 h-auto p-6 max-sm:h-[50%] max-sm:w-[100%] max-sm:p-2 bg-white rounded-lg">
          <div className="flex-row pl-2">
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              placeholder="Input your name"
              className="w-full border my-4 h-10 rounded-lg px-2"
            />
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="Input your email"
              className="w-full border my-4 h-10 rounded-lg px-2"
            />
            <label htmlFor="name">Message :</label>
            <textarea
              rows={3}
              placeholder="Input your message"
              className="w-full border my-4 rounded-lg px-2 py-2"
            />
            <Link href={"#home"}>
              <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-blue-700 text-white hover:text-orange-300 rounded-xl mt-4 p-2 cursor-pointer">
                Send Message
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
