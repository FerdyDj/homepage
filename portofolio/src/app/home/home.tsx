import Motion from "@/components/motion";
import ExampleComponent from "@/components/text";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <div className="w-screen max-sm:flex-row md:flex p-8 md:mt-5 justify-center items-center">
        <div className="max-sm:w-[100%] max-sm:flex-row md:w-[50%] h-[50%] p-6 md:flex items-center">
          <Motion direction="left">
            <div className="max-sm:pt-0 m:pt-28">
              <ExampleComponent />
              <h1 className="text-2xl pt-2 italic text-blue-500">
                Professional Fullstack Web Development
              </h1>
              <p className="text-md pt-6 leading-6">
                Hi, I&apos;m from Indonesia. I&apos;m a passionate and skilled
                full-stack web developer dedicated to turning ideas into
                reality. With expertise in both front-end and back-end
                technologies, I create seamless and dynamic web experiences that
                not only look great but perform flawlessly. From designing
                intuitive user interfaces to building robust server-side
                applications, also building scalable and high-performance web
                solutions for your business needs, I strive to deliver
                high-quality solutions tailored to your needs. Explore my
                portfolio, discover my projects, and let&apos;s collaborate to
                bring your digital visions to life!
              </p>
              <Link href={"#portfolio"}>
                <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 my-4">
                  View Portfolio
                </button>
              </Link>
              <div className="flex flex-wrap justify-start pt-4">
                <Link href={"https://www.github.com"}>
                  <button className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 flex gap-2">
                    <FaGithub className="w-4 h-4" />
                    Github
                  </button>
                </Link>
                <Link href={"https://www.discord.com"}>
                  <button className="bg-blue-600 rounded-lg text-white text-xs text-center self-center px-3 py-2 mx-2 flex gap-2">
                    <FaDiscord className="w-4 h-4" />
                    Discord
                  </button>
                </Link>
                <Link href={"https://www.instagram.com"}>
                  <button className="bg-pink-500 rounded-lg text-white text-xs text-center self-center px-3 py-2 mx-2 flex gap-2">
                    <FaInstagram className="w-4 h-4" />
                    Instagram
                  </button>
                </Link>
              </div>
            </div>
          </Motion>
        </div>
        <div className="max-sm:w-[100%] max-sm:flex-row md:w-[50%] h-[50%] flex justify-center">
          <Motion direction="right">
            <Image
              src="/mansuit.png"
              alt="man"
              width={400}
              height={550}
              className="rounded-lg brightness-100 border-2"
            />
          </Motion>
        </div>
      </div>
    </div>
  );
}
