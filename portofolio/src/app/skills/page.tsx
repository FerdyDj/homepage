import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <div className="my-20 w-full h-auto">
      <div className="p-4 my-16 w-[100%] flex justify-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Technical Skills
        </h2>
      </div>
      <div className="flex w-[100%] justify-center gap-1 my-3 mb-48">
        <ul className="list-disc text-gray-700 w-[450px]">
          <li>
            <span className="font-bold">Frontend Development:</span> HTML5,
            CSS3, JavaScript, Typescript, React.js, Next.js
          </li>
          <li>
            <span className="font-bold">Backend Development:</span> Node.js,
            Express.js
          </li>
          <li>
            <span className="font-bold">Databases:</span> MongoDB, PostgreSQL,
            MySQL
          </li>
          <li>
            <span className="font-bold">Version Control:</span> Git, GitHub,
            GitLab
          </li>
          <li>
            <span className="font-bold">API Development:</span> RESTful APIs,
            Postman
          </li>
          <li>
            <span className="font-bold">DevOps & Tools:</span> VS Code, NPM,
            Bootstrap, Tailwind CSS
          </li>
        </ul>
      </div>
      <Marquee
        direction="right"
        pauseOnHover
        gradient
        gradientColor="rgb(255 255 255)"
        gradientWidth={200}
      >
        <div className="p-4 w-[100%] flex justify-center gap-16">
          <Image src="/html.svg" alt="html" width={48} height={48}></Image>
          <Image src="/css.svg" alt="css" width={48} height={48}></Image>
          <Image src="/tw.svg" alt="tailwind" width={48} height={48}></Image>
          <Image src="/ts.svg" alt="typescript" width={48} height={48}></Image>
          <Image src="/js.svg" alt="javascript" width={48} height={48}></Image>
          <Image src="/react.svg" alt="react" width={48} height={48}></Image>
          <Image src="/next.svg" alt="nextjs" width={48} height={48}></Image>
          <Image src="/node.svg" alt="nodejs" width={48} height={48}></Image>
          <Image
            src="/postgre.svg"
            alt="postgresql"
            width={48}
            height={48}
          ></Image>
          <Image src="/mongo.svg" alt="mongodb" width={48} height={48}></Image>
          <Image src="/mysql.svg" alt="mysql" width={48} height={48}></Image>
        </div>
      </Marquee>
    </div>
  );
}
