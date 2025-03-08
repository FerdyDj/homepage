import Image from "next/image";

export default function ComProf() {
  return (
    <div>
      <div className="border border-gray-300 rounded-md">
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
          showcase the company&apos;s products, history, and values. It serves
          as a professional platform for parents, retailers, and potential
          partners to learn more about the brand. The site will feature product
          catalogs, company information, and contact details, designed with
          modern web technologies to provide a user-friendly, visually appealing
          experience.
        </p>
        <h3 className="font-semibold px-2">Situation :</h3>
        <p className="text-sm px-2 py-2">
          As a Full-Stack Web Developer, I was tasked with building a
          professional company profile website for Kids, a kids clothing brand.
          Kids needed an online presence to showcase their product catalog,
          brand values, and company history, aimed at engaging both parents and
          potential business partners.
        </p>
        <h3 className="font-semibold px-2">Task :</h3>
        <p className="text-sm px-2 py-2">
          My goal was to create an attractive, user-friendly website that
          reflects Kids brand identity and provides visitors with easy access to
          product information, the company&apos;s history, and contact details.
          The website had to be responsive, easy to navigate, and visually
          appealing to target both consumers and business clients.
        </p>
        <h3 className="font-semibold px-2">Action :</h3>
        <p className="text-sm px-2 py-2">
          I used React for the frontend to create a dynamic and responsive user
          interface, ensuring that the website works seamlessly across devices.
          I incorporated CSS and Tailwind CSS to design a visually engaging
          layout that aligns with Kids branding and provides an intuitive
          browsing experience. I structured the website to include key sections
          like the company overview, product catalog, and contact information to
          cater to both B2C and B2B audiences. For the backend, I used a
          headless CMS to manage and update product information and other
          content easily. I ensured the website&apos;s performance was optimized
          for fast loading times, contributing to a smooth user experience.
        </p>
        <h3 className="font-semibold px-2">Result :</h3>
        <p className="text-sm px-2 py-2">
          The result was a fully functional, visually appealing website that
          effectively showcases Kids clothing line, company values, and product
          catalog. The site provides a seamless experience for both consumers
          and potential business partners, meeting the client&apos;s needs for a
          professional online presence. I gained valuable experience in building
          responsive websites and working with modern technologies like React
          and Tailwind CSS, all while contributing to Kids marketing and sales
          efforts.
        </p>
        <p className="text-sm px-2 py-2">
          <span className="font-semibold">Technologies :</span> React, Next JS,
          Typescript, Tailwind CSS, Headless CMS
        </p>
      </div>
    </div>
  );
}
