import Image from "next/image";

export default function MyPortfolio() {
  return (
    <div>
      <div className="border border-gray-300 rounded-md">
        <div className="w-full h-[330px] overflow-hidden">
          <Image
            src={"/portfolioweb.png"}
            alt="Portfolio Web"
            width={700}
            height={330}
            className="object-fit inset-0 h-full w-full hover:scale-105 ease-in duration-300"
          ></Image>
        </div>
        <h2 className="font-bold text-xl px-2 pt-4">Portfolio Website</h2>
        <p className="text-sm px-2 py-2">
          The portfolio website is a personal project designed to showcase my
          skills and projects as a Full-Stack Web Developer. It aims to present
          my technical expertise to potential employers, clients, and the
          developer community. Built with modern web technologies like React,
          Next.js, TypeScript, and Tailwind CSS, the site features a clean,
          responsive design that highlights my work, achievements, and contact
          information.
        </p>
        <h3 className="font-semibold px-2">Situation :</h3>
        <p className="text-sm px-2 py-2">
          As a Full-Stack Web Developer, I wanted to create a personal portfolio
          website to showcase my skills, projects, and achievements. I was
          looking for a platform to demonstrate my ability to design, develop,
          and deploy real-world web applications, as well as to have a
          professional online presence for potential employers and clients.
        </p>
        <h3 className="font-semibold px-2">Task :</h3>
        <p className="text-sm px-2 py-2">
          My goal was to build a responsive, interactive, and
          professional-looking portfolio website that highlights my development
          skills, experience, and projects. I aimed to use modern web
          technologies, including React, Next.js, TypeScript, and CSS frameworks
          like Tailwind CSS, to ensure the website was both visually appealing
          and functional.
        </p>
        <h3 className="font-semibold px-2">Action :</h3>
        <p className="text-sm px-2 py-2">
          I began by designing the website layout and structure using Figma for
          wireframes. I focused on creating a clean, easy-to-navigate interface
          that would allow visitors to quickly understand who I am and what I
          can offer. I used Next.js to develop the website because of its
          built-in server-side rendering (SSR) and static site generation (SSG),
          which would improve performance and SEO. I implemented React
          components for the main sections of the site, including the homepage,
          about me, skills, projects, and contact form. To ensure type safety
          and improve code maintainability, I used TypeScript for the project. I
          styled the website with Tailwind CSS for a modern, responsive design
          that adapts well across devices. For deployment, I used Vercel to host
          the website and make it accessible to anyone with a link, ensuring
          quick load times and seamless integration with GitHub for automatic
          deployments.
        </p>
        <h3 className="font-semibold px-2">Result :</h3>
        <p className="text-sm px-2 py-2">
          The result was a fully functional portfolio website that effectively
          showcases my skills and projects. It&apos;s mobile-friendly and loads
          quickly, thanks to the use of Next.js for server-side rendering and
          static generation.As a result, I&apos;ve received positive feedback
          from mentors and peers, and I&apos;ve used the portfolio to
          successfully apply for full-stack web development positions. The
          website has also increased my visibility in the developer community,
          leading to more networking opportunities and helping me secure
          freelance work.
        </p>
        <p className="text-sm px-2 py-2">
          <span className="font-semibold">Technologies :</span> React, Next JS,
          Typescript, Tailwind CSS
        </p>
      </div>
    </div>
  );
}
