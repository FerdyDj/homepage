import ExampleComponent from "@/components/text";
import About from "./about/page";
import Contact from "./contact/page";
import Motion from "@/components/motion";

export default function Home() {
  return (
    <div>
      <div className="w-screen max-sm:flex-row md:flex p-8 justify-center items-center">
        <div className="max-sm:w-[100%] max-sm:flex-row md:w-[50%] h-[50%] p-6 md:flex items-center">
          <Motion direction="left">
            <div className="max-sm:pt-0 m:pt-28">
              {/* <p className="text-2xl font-bold animate-pulse">Hello, I'm Ferdy</p> */}
              <ExampleComponent />
              <p className="text-lg pt-2 italic text-blue-500">
                Professional Fullstack Web Development
              </p>
              <p className="text-md pt-6 leading-6">
                Hi, I&apos;m from Indonesia. I&apos;m a passionate and skilled full-stack
                web developer dedicated to turning ideas into reality. With
                expertise in both front-end and back-end technologies, I create
                seamless and dynamic web experiences that not only look great
                but perform flawlessly. From designing intuitive user interfaces
                to building robust server-side applications, I strive to deliver
                high-quality solutions tailored to your needs. Explore my
                portfolio, discover my projects, and let&apos;s collaborate to bring
                your digital visions to life!
              </p>
              <div className="flex flex-wrap justify-start pt-4">
                <button className="bg-black rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex gap-2">
                  <img
                    src="git.gif"
                    alt="github"
                    className="w-4 h-4 bg-white rounded-full"
                  />
                  Github
                </button>
                <button className="bg-blue-600 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex gap-2">
                  <img
                    src="discord.gif"
                    alt="discord"
                    className="w-4 h-4 rounded-full"
                  />
                  Discord
                </button>
                <button className="bg-pink-500 rounded-lg text-white text-xs text-center self-center px-3 py-2 my-2 mx-2 flex gap-2">
                  <img
                    src="ig.gif"
                    alt="instagram"
                    className="w-4 h-4 bg-white rounded-full"
                  />
                  Instagram
                </button>
              </div>
            </div>
          </Motion>
        </div>
        <div className="max-sm:w-[100%] max-sm:flex-row md:w-[50%] h-[50%] flex justify-center">
          <Motion direction="right">
            <img
              src="mansuit.png"
              alt="man"
              className="rounded-lg w-[400px] h-[550px] brightness-100 border-2"
            />
          </Motion>
        </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
}
