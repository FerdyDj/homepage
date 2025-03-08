import Marquee from "react-fast-marquee";
import { FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPostgresql, SiReact, SiTailwindcss, SiTypescript } from "react-icons/si";
import MySkill from "./_components/myskill";

export default function Skills() {
  return (
    <div className="my-20 w-full h-auto">
      <MySkill />
      <Marquee
        direction="right"
        pauseOnHover
        gradient
        gradientColor="rgb(255 255 255)"
        gradientWidth={200}
      >
        <div className="p-4 w-[100%] flex justify-center gap-[68px]">
          <FaHtml5 className="w-12 h-12 text-orange-500"/>
          <FaCss3Alt className="w-12 h-12 text-blue-500" />
          <SiTailwindcss className="w-12 h-12 text-sky-500" />
          <SiTypescript className="w-12 h-12 text-blue-500" />
          <SiJavascript className="w-12 h-12 text-yellow-400" />
          <SiReact className="w-12 h-12 text-blue-300" />
          <SiNextdotjs className="w-12 h-12 text-gray-700" />
          <SiNodedotjs className="w-12 h-12 text-green-700" />
          <SiPostgresql className="w-12 h-12 text-blue-700" />
          <SiMongodb className="w-12 h-12 text-green-700" />
          <SiMysql className="w-12 h-12 text-blue-700" />
        </div>
      </Marquee>
    </div>
  );
}
