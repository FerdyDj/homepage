import Image from "next/image";

export default function AboutMe() {
  return (
    <div>
      <div className="flex justify-center">
        <Image
          src="/laptop.jpg"
          alt="coding"
          width={450}
          height={300}
          className="rounded-lg"
        />
      </div>
      <div className="p-4 flex justify-center">
        <h2 className="text-3xl font-bold underline text-gray-800">About Me</h2>
      </div>
      <div className="flex justify-center gap-1">
        <p className="text-gray-700 w-[450px]">
          Hello! 👋 I&apos;m a Fullstack Web Developer with a passion for
          creating dynamic and responsive web applications. With a solid
          foundation in both front-end and back-end technologies, I enjoy taking
          ideas from concept to completion, ensuring that every project is
          user-friendly and efficient.
        </p>
      </div>
    </div>
  );
}
