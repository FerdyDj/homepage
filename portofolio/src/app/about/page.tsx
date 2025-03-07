import Image from "next/image";

export default function About() {
  return (
    <div className="w-screen p-6 bg-blue-100">
      <div className="w-[100%] flex justify-center">
        <Image
          src="/laptop.jpg"
          alt="coding"
          width={450}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="p-4 w-[100%] flex justify-center">
        <h2 className="text-3xl font-bold underline text-gray-800">About Me</h2>
      </div>
      <div className="flex w-[100%] justify-center gap-1">
        <p className="text-gray-700 w-[450px]">
          Hello! 👋 I&apos;m a Fullstack Web Developer with a passion for
          creating dynamic and responsive web applications. With a solid
          foundation in both front-end and back-end technologies, I enjoy taking
          ideas from concept to completion, ensuring that every project is
          user-friendly and efficient.
        </p>
      </div>
      <div className="p-4 w-[100%] flex justify-center">
        <h2 className="text-2xl font-bold underline text-gray-800">
          Core Skills
        </h2>
      </div>
      <div className="flex w-[100%] justify-center gap-1">
        <ul className="list-disc text-gray-700 w-[450px]">
          <li>
            <span className="font-bold">JavaScript:</span> Proficient in
            JavaScript, with experience using ES6+ features and asynchronous
            programming (Promises, async/await).
          </li>
          <li>
            <span className="font-bold">TypeScript:</span> Strong knowledge of
            TypeScript for building scalable and maintainable applications with
            improved code safety and clarity.
          </li>
          <li>
            <span className="font-bold">React:</span> Building responsive and
            interactive user interfaces with React, including state management
            with hooks and Context API.
          </li>
          <li>
            <span className="font-bold">Next.js:</span> Developing server-side
            rendered and static websites using Next.js, with a focus on
            performance and SEO optimization.
          </li>
          <li>
            <span className="font-bold">Node.js:</span> Developing scalable
            server-side applications with Node.js and Express.js.
          </li>
          <li>
            <span className="font-bold">HTML & CSS:</span> Strong foundation in
            HTML5, CSS3, and responsive design techniques, including Flexbox and
            CSS Grid.
          </li>
          <li>
            <span className="font-bold">Databases:</span> Experience with
            relational (PostgreSQL, MySQL) and NoSQL (MongoDB) databases.
          </li>
          <li>
            <span className="font-bold">Version Control:</span> Proficient with
            Git and platforms like GitHub and GitLab for code collaboration and
            version management.
          </li>
          <li>
            <span className="font-bold">APIs:</span> Familiar with building and
            consuming RESTful APIs
          </li>
          <li>
            <span className="font-bold">Tools & Frameworks:</span> Comfortable
            with VS Code, NPM, Bootstrap, and Tailwind CSS.
          </li>
        </ul>
      </div>
      <div className="p-4 w-[100%] flex justify-center">
        <h2 className="text-2xl font-bold underline text-gray-800">
          Key Values
        </h2>
      </div>
      <div className="flex w-[100%] justify-center gap-1 my-3">
        <p className="text-gray-700 w-[450px]">
          <span className="font-bold">Timeliness:</span> I believe in delivering
          work on schedule without compromising quality. Meeting deadlines is
          essential to my workflow and client satisfaction.
        </p>
      </div>
      <div className="flex w-[100%] justify-center gap-1 my-3">
        <p className="text-gray-700 w-[450px]">
          <span className="font-bold">Attention to Detail:</span> Whether it’s
          the code or the UI, I ensure that every aspect of my work is refined
          and polished. I pay careful attention to ensure every detail is just
          right.
        </p>
      </div>
      <div className="flex w-[100%] justify-center gap-1 my-3">
        <p className="text-gray-700 w-[450px]">
          <span className="font-bold">Clear Communication:</span> I prioritize
          open communication with clients and team members to ensure we are all
          aligned on project goals and expectations. I’m always open to feedback
          and strive to explain complex technical concepts in simple terms.
        </p>
      </div>
    </div>
  );
}
