import Image from "next/image";

export default function Ecomm() {
  return (
    <div>
      <div className="border border-gray-300 rounded-md">
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
          target audience is global consumers seeking a convenient platform for
          online shopping. The website will be built with modern technologies to
          ensure fast load times, mobile responsiveness, and ease of use.
        </p>
        <h3 className="font-semibold px-2">Situation :</h3>
        <p className="text-sm px-2 py-2">
          As a Full-Stack Web Developer, I was tasked with building an
          e-commerce website for Amazon to enhance the online shopping
          experience for their customers. The goal was to create a platform that
          could handle browsing, product search, and order management
          efficiently.
        </p>
        <h3 className="font-semibold px-2">Task :</h3>
        <p className="text-sm px-2 py-2">
          My goal was to build a fully functional, responsive, and user-friendly
          e-commerce website that allows users to browse products, view detailed
          product pages, add items to the shopping cart, and complete purchases
          seamlessly.
        </p>
        <h3 className="font-semibold px-2">Action :</h3>
        <p className="text-sm px-2 py-2">
          I used React to build the frontend, ensuring a dynamic, fast, and
          responsive user experience across all devices. For styling, I utilized
          CSS and Tailwind CSS to create a clean and modern design that aligns
          with Amazon&apos;s branding. I integrated features like product
          search, filtering, and detailed product pages to help customers easily
          navigate the site. I worked on implementing a shopping cart system and
          order management to allow users to add items to their cart and track
          orders efficiently. I ensured the website was mobile-friendly,
          optimizing for both desktop and mobile users.
        </p>
        <h3 className="font-semibold px-2">Result :</h3>
        <p className="text-sm px-2 py-2">
          The result was a fully functional e-commerce website with smooth
          navigation, responsive design, and efficient product search and order
          management features. The website successfully improved the shopping
          experience, providing customers with a seamless interface to browse
          products, add items to their cart, and complete their purchases. The
          project helped me develop my skills in React, CSS, Tailwind CSS, and
          e-commerce functionality.
        </p>
        <p className="text-sm px-2 py-2">
          <span className="font-semibold">Technologies :</span> React, Next JS,
          Typescript, Tailwind CSS, Node JS, Postgre SQL
        </p>
      </div>
    </div>
  );
}
