import ExampleComponent from "@/components/text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-1vw flex p-8 justify-center items-center">
      <div className="w-[50%] h-96 p-6 flex items-center">
        <div className="pt-28">
          {/* <p className="text-2xl font-bold animate-pulse">Hello, I'm Ferdy</p> */}
          <ExampleComponent/>
          <p className="text-lg pt-2 italic">
            Professional Fullstack Web Development
          </p>
          <p className="text-md pt-6 leading-6">
            Hi, I'm from Indonesia. I'm a passionate and skilled full-stack web
            developer dedicated to turning ideas into reality. With expertise in
            both front-end and back-end technologies, I create seamless and
            dynamic web experiences that not only look great but perform
            flawlessly. From designing intuitive user interfaces to building
            robust server-side applications, I strive to deliver high-quality
            solutions tailored to your needs. Explore my portfolio, discover my
            projects, and let's collaborate to bring your digital visions to
            life!
          </p>
          <div className="flex flex-wrap justify-start pt-4">
            <button className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex gap-2">
              <img src="git.svg" alt="github" className="w-4 h-4 bg-white rounded-full" />github
            </button>
            <button className="bg-blue-600 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex gap-2">
            <img src="discord.svg" alt="discord" className="w-4 h-4 bg-white rounded-full" />discord
            </button>
            <button className="bg-pink-500 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex gap-2">
            <img src="ig.svg" alt="instagram" className="w-4 h-4 bg-white rounded-full" />instagram
            </button>
          </div>
        </div>
      </div>
      <div className="w-[50%] h-96 flex justify-center">
        <img
          src="man.svg"
          alt="man"
          className="bg-slate-200 rounded-lg w-[425px] h-[550px] ml-6 brightness-100"
        />
      </div>
    </div>
  );
}
