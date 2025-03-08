import Image from "next/image";

export default function BlogApp() {
  return (
    <div>
      <div className="flex-row justify-center items-center border border-gray-300 rounded-md">
        <div className="w-full h-[330px] overflow-hidden">
          <Image
            src={"/blogapp.png"}
            alt="Blog Website"
            width={700}
            height={330}
            className="object-fit inset-0 h-full w-full hover:scale-105 ease-in duration-300"
          ></Image>
        </div>
        <h2 className="font-bold text-xl px-2 pt-4">Blogging Website</h2>
        <p className="text-sm px-2 py-2">
          The blogging web application is designed to allow users to create
          accounts, log in, and post stories. Its purpose is to provide a
          platform for users to share their thoughts, ideas, and experiences in
          a simple and engaging way. The target audience includes casual
          bloggers, writers, and anyone interested in publishing content online.
          The app uses Backendless for the backend to handle user authentication
          (login) and story posting, providing a scalable and secure solution.
          The frontend is built to be user-friendly, allowing seamless
          interaction with the platform for both readers and writers.
        </p>
        <h3 className="font-semibold px-2">Situation :</h3>
        <p className="text-sm px-2 py-2">
          As a Full-Stack Web Developer, I wanted to create a blogging platform
          where users could easily sign up, log in, and share stories. I noticed
          that many existing platforms were either too complex or lacked the
          flexibility to let users publish content quickly. I decided to build a
          simpler, more intuitive web application that would focus on providing
          an easy-to-use experience for writing and sharing blog posts.
        </p>
        <h3 className="font-semibold px-2">Task :</h3>
        <p className="text-sm px-2 py-2">
          My goal was to build a user-friendly blogging web application where
          users could create accounts, log in securely, and post their stories.
          I needed to ensure the platform was easy to navigate, responsive, and
          scalable. Additionally, I wanted to handle authentication and data
          storage efficiently without managing the backend infrastructure
          myself.
        </p>
        <h3 className="font-semibold px-2">Action :</h3>
        <p className="text-sm px-2 py-2">
          I chose Backendless as the backend solution for backend management,
          including user authentication and database storage, which helped speed
          up development. I implemented user authentication ensuring secure
          access to the platform. For the frontend, I built the interface using
          React, which allowed for a dynamic, responsive user experience, where
          users could easily navigate between different sections such as login,
          registration, and the blog post creation page. I created a simple form
          for posting stories, where users could write and submit content. The
          posts are stored securely in the Backendless database. I ensured the
          application was responsive by using CSS for styling and making sure it
          looked good on both desktop and mobile devices.
        </p>
        <h3 className="font-semibold px-2">Result :</h3>
        <p className="text-sm px-2 py-2">
          The result was a fully functional blogging platform where users could
          easily register, log in, and post stories without any issues. The
          project was well-received by users for its simplicity, and it allowed
          me to demonstrate my ability to integrate frontend and backend
          technologies efficiently. By using Backendless, I was able to focus on
          the frontend while still delivering a secure and scalable backend
          solution without needing to manage server infrastructure. This project
          helped me further develop my skills in React, Backendless, and user
          authentication.
        </p>
        <p className="text-sm px-2 py-2">
          <span className="font-semibold">Technologies :</span> React, Next JS,
          Typescript, Tailwind CSS, Backendless, Node JS
        </p>
      </div>
    </div>
  );
}
