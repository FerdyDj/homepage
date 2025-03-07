import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 p-4 sm:p-8">
      <h2 className="flex justify-center font-bold py-8 text-3xl">PORTFOLIO</h2>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 gap-2">
        <div className="flex-row justify-center items-center border border-gray-300 rounded-md">
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
            skills and projects as a Full-Stack Web Developer. It aims to
            present my technical expertise to potential employers, clients, and
            the developer community. Built with modern web technologies like
            React, Next.js, TypeScript, and Tailwind CSS, the site features a
            clean, responsive design that highlights my work, achievements, and
            contact information.
          </p>
          <h3 className="font-semibold px-2">Situation :</h3>
          <p className="text-sm px-2 py-2">
            As a Full-Stack Web Developer, I wanted to create a personal
            portfolio website to showcase my skills, projects, and achievements.
            I was looking for a platform to demonstrate my ability to design,
            develop, and deploy real-world web applications, as well as to have
            a professional online presence for potential employers and clients.
          </p>
          <h3 className="font-semibold px-2">Task :</h3>
          <p className="text-sm px-2 py-2">
            My goal was to build a responsive, interactive, and
            professional-looking portfolio website that highlights my
            development skills, experience, and projects. I aimed to use modern
            web technologies, including React, Next.js, TypeScript, and CSS
            frameworks like Tailwind CSS, to ensure the website was both
            visually appealing and functional.
          </p>
          <h3 className="font-semibold px-2">Action :</h3>
          <p className="text-sm px-2 py-2">
            I began by designing the website layout and structure using Figma
            for wireframes. I focused on creating a clean, easy-to-navigate
            interface that would allow visitors to quickly understand who I am
            and what I can offer. I used Next.js to develop the website because
            of its built-in server-side rendering (SSR) and static site
            generation (SSG), which would improve performance and SEO. I
            implemented React components for the main sections of the site,
            including the homepage, about me, skills, projects, and contact
            form. To ensure type safety and improve code maintainability, I used
            TypeScript for the project. I styled the website with Tailwind CSS
            for a modern, responsive design that adapts well across devices. For
            deployment, I used Vercel to host the website and make it accessible
            to anyone with a link, ensuring quick load times and seamless
            integration with GitHub for automatic deployments.
          </p>
          <h3 className="font-semibold px-2">Result :</h3>
          <p className="text-sm px-2 py-2">
            The result was a fully functional portfolio website that effectively
            showcases my skills and projects. It&apos;s mobile-friendly and
            loads quickly, thanks to the use of Next.js for server-side
            rendering and static generation.As a result, I&apos;ve received
            positive feedback from mentors and peers, and I&apos;ve used the
            portfolio to successfully apply for full-stack web development
            positions. The website has also increased my visibility in the
            developer community, leading to more networking opportunities and
            helping me secure freelance work.
          </p>
          <p className="text-sm px-2 py-2">
            <span className="font-semibold">Technologies :</span> React, Next
            JS, Typescript, Tailwind CSS
          </p>
        </div>
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
            platform for users to share their thoughts, ideas, and experiences
            in a simple and engaging way. The target audience includes casual
            bloggers, writers, and anyone interested in publishing content
            online. The app uses Backendless for the backend to handle user
            authentication (login) and story posting, providing a scalable and
            secure solution. The frontend is built to be user-friendly, allowing
            seamless interaction with the platform for both readers and writers.
          </p>
          <h3 className="font-semibold px-2">Situation :</h3>
          <p className="text-sm px-2 py-2">
            As a Full-Stack Web Developer, I wanted to create a blogging
            platform where users could easily sign up, log in, and share
            stories. I noticed that many existing platforms were either too
            complex or lacked the flexibility to let users publish content
            quickly. I decided to build a simpler, more intuitive web
            application that would focus on providing an easy-to-use experience
            for writing and sharing blog posts.
          </p>
          <h3 className="font-semibold px-2">Task :</h3>
          <p className="text-sm px-2 py-2">
            My goal was to build a user-friendly blogging web application where
            users could create accounts, log in securely, and post their
            stories. I needed to ensure the platform was easy to navigate,
            responsive, and scalable. Additionally, I wanted to handle
            authentication and data storage efficiently without managing the
            backend infrastructure myself.
          </p>
          <h3 className="font-semibold px-2">Action :</h3>
          <p className="text-sm px-2 py-2">
            I chose Backendless as the backend solution for backend management,
            including user authentication and database storage, which helped
            speed up development. I implemented user authentication ensuring
            secure access to the platform. For the frontend, I built the
            interface using React, which allowed for a dynamic, responsive user
            experience, where users could easily navigate between different
            sections such as login, registration, and the blog post creation
            page. I created a simple form for posting stories, where users could
            write and submit content. The posts are stored securely in the
            Backendless database. I ensured the application was responsive by
            using CSS for styling and making sure it looked good on both desktop
            and mobile devices.
          </p>
          <h3 className="font-semibold px-2">Result :</h3>
          <p className="text-sm px-2 py-2">
            The result was a fully functional blogging platform where users
            could easily register, log in, and post stories without any issues.
            The project was well-received by users for its simplicity, and it
            allowed me to demonstrate my ability to integrate frontend and
            backend technologies efficiently. By using Backendless, I was able
            to focus on the frontend while still delivering a secure and
            scalable backend solution without needing to manage server
            infrastructure. This project helped me further develop my skills in
            React, Backendless, and user authentication.
          </p>
          <p className="text-sm px-2 py-2">
            <span className="font-semibold">Technologies :</span> React, Next
            JS, Typescript, Tailwind CSS, Backendless, Node JS
          </p>
        </div>
        <div className="flex-row justify-center items-center border border-gray-300 rounded-md">
          <div className="w-full h-[330px] overflow-hidden">
            <Image
              src={"/comprof.png"}
              alt="Company Profile Website"
              width={700}
              height={330}
              className="object-fit inset-0 h-full w-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h2 className="font-bold text-xl px-2 pt-4">Kids Clothing Website</h2>
          <p className="text-sm px-2 py-2">
            The website I&apos;m building for Kids, a kids clothing brand, aims to
            showcase the company&apos;s products, history, and values. It serves as a
            professional platform for parents, retailers, and potential partners
            to learn more about the brand. The site will feature product
            catalogs, company information, and contact details, designed with
            modern web technologies to provide a user-friendly, visually
            appealing experience.
          </p>
          <h3 className="font-semibold px-2">Situation :</h3>
          <p className="text-sm px-2 py-2">
            As a Full-Stack Web Developer, I was tasked with building a
            professional company profile website for Kids, a kids clothing
            brand. Kids needed an online presence to showcase their product
            catalog, brand values, and company history, aimed at engaging both
            parents and potential business partners.
          </p>
          <h3 className="font-semibold px-2">Task :</h3>
          <p className="text-sm px-2 py-2">
            My goal was to create an attractive, user-friendly website that
            reflects Kids brand identity and provides visitors with easy
            access to product information, the company&apos;s history, and contact
            details. The website had to be responsive, easy to navigate, and
            visually appealing to target both consumers and business clients.
          </p>
          <h3 className="font-semibold px-2">Action :</h3>
          <p className="text-sm px-2 py-2">
            I used React for the frontend to create a dynamic and responsive
            user interface, ensuring that the website works seamlessly across
            devices. I incorporated CSS and Tailwind CSS to design a visually
            engaging layout that aligns with Kids branding and provides
            an intuitive browsing experience. I structured the website to
            include key sections like the company overview, product catalog, and
            contact information to cater to both B2C and B2B audiences. For the
            backend, I used a headless CMS to manage and update product
            information and other content easily. I ensured the website&apos;s
            performance was optimized for fast loading times, contributing to a
            smooth user experience.
          </p>
          <h3 className="font-semibold px-2">Result :</h3>
          <p className="text-sm px-2 py-2">
            The result was a fully functional, visually appealing website that
            effectively showcases Kids clothing line, company
            values, and product catalog. The site provides a seamless experience
            for both consumers and potential business partners, meeting the
            client&apos;s needs for a professional online presence. I gained
            valuable experience in building responsive websites and working with
            modern technologies like React and Tailwind CSS, all while
            contributing to Kids marketing and sales efforts.
          </p>
          <p className="text-sm px-2 py-2">
            <span className="font-semibold">Technologies :</span> React, Next
            JS, Typescript, Tailwind CSS, Headless CMS
          </p>
        </div>
        <div className="flex-row justify-center items-center border border-gray-300 rounded-md">
          <div className="w-full h-[330px] overflow-hidden">
            <Image
              src={"/ecomm.png"}
              alt="E-Commerce Website"
              width={700}
              height={330}
              className="object-fit inset-0 h-full w-full hover:scale-105 ease-in duration-300"
            ></Image>
          </div>
          <h2 className="font-bold text-xl px-2 pt-4">
            Amazon E-Commerce Website
          </h2>
          <p className="text-sm px-2 py-2">
            I&apos;m building an e-commerce website for Amazon to provide a
            seamless, user-friendly shopping experience. The site will allow
            customers to browse products, manage orders, and make purchases. The
            target audience is global consumers seeking a convenient platform
            for online shopping. The website will be built with modern
            technologies to ensure fast load times, mobile responsiveness, and
            ease of use.
          </p>
          <h3 className="font-semibold px-2">Situation :</h3>
          <p className="text-sm px-2 py-2">
            As a Full-Stack Web Developer, I was tasked with building an
            e-commerce website for Amazon to enhance the online shopping
            experience for their customers. The goal was to create a platform
            that could handle browsing, product search, and order management
            efficiently.
          </p>
          <h3 className="font-semibold px-2">Task :</h3>
          <p className="text-sm px-2 py-2">
            My goal was to build a fully functional, responsive, and
            user-friendly e-commerce website that allows users to browse
            products, view detailed product pages, add items to the shopping
            cart, and complete purchases seamlessly.
          </p>
          <h3 className="font-semibold px-2">Action :</h3>
          <p className="text-sm px-2 py-2">
            I used React to build the frontend, ensuring a dynamic, fast, and
            responsive user experience across all devices. For styling, I
            utilized CSS and Tailwind CSS to create a clean and modern design
            that aligns with Amazon&apos;s branding. I integrated features like
            product search, filtering, and detailed product pages to help
            customers easily navigate the site. I worked on implementing a
            shopping cart system and order management to allow users to add
            items to their cart and track orders efficiently. I ensured the
            website was mobile-friendly, optimizing for both desktop and mobile
            users.
          </p>
          <h3 className="font-semibold px-2">Result :</h3>
          <p className="text-sm px-2 py-2">
            The result was a fully functional e-commerce website with smooth
            navigation, responsive design, and efficient product search and
            order management features. The website successfully improved the
            shopping experience, providing customers with a seamless interface
            to browse products, add items to their cart, and complete their
            purchases. The project helped me develop my skills in React, CSS,
            Tailwind CSS, and e-commerce functionality.
          </p>
          <p className="text-sm px-2 py-2">
            <span className="font-semibold">Technologies :</span> React, Next
            JS, Typescript, Tailwind CSS, Node JS, Postgre SQL
          </p>
        </div>
      </div>
    </div>
  );
}
