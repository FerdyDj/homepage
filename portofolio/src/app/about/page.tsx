export default function About() {
  return (
    <div className="w-screen p-6 bg-blue-100">
      <div className="w-[100%] flex justify-center">
        <img
          src="laptop.jpg"
          alt="coding"
          className="w-[450px] h-[300px] rounded-lg"
        />
      </div>
      <div className="p-4 w-[100%] flex justify-center">
        <h1 className="text-2xl font-bold underline text-gray-800">About Me</h1>
      </div>
      <div className="flex w-[100%] justify-center gap-1">
        <p className="text-gray-700 w-[450px]">
          Hello! 👋 I'm a Junior Fullstack Web Developer with a passion for
          creating dynamic and responsive web applications. With a solid
          foundation in both front-end and back-end technologies, I enjoy taking
          ideas from concept to completion, ensuring that every project is
          user-friendly and efficient.
        </p>
      </div>
      <div className="p-4 w-[100%] flex justify-center">
        <h1 className="text-2xl font-bold underline text-gray-800">Details</h1>
      </div>
      <div className="flex w-[100%] justify-center gap-1">
        <p className="text-gray-700">Name : Ferdy</p>
      </div>
      <div className="flex w-[100%] justify-center gap-1">
        <p className="text-gray-700">Age : 21</p>
      </div>
      <div className="p-4 w-[100%] flex justify-center">
        <h1 className="text-2xl font-bold underline text-gray-800">My Tech Skills</h1>
      </div>
      <div className="p-4 w-[100%] flex justify-center gap-2">
        <img src="html.svg" alt="html" className="w-12 h-12" />
        <img src="css.svg" alt="html" className="w-12 h-12" />
        <img src="tw.svg" alt="html" className="w-12 h-12" />
        <img src="ts.svg" alt="html" className="w-12 h-12" />
        <img src="js.svg" alt="html" className="w-12 h-12" />
        <img src="node.svg" alt="html" className="w-12 h-12" />
        <img src="postgre.svg" alt="html" className="w-12 h-12" />
      </div>
    </div>
  );
}
