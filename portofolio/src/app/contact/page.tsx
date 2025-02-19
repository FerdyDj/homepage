export default function Contact() {
  return (
    <div className="w-screen max-sm:h-[50%] max-sm:flex-row md:flex max-sm:p-2 p-8 justify-center items-center bg-slate-100 h-[100%]">
      <div className="w-[50%] h-[100%] max-sm:w-[100%]">
        <div className="flex justify-center items-center">
          <img
            src="manpoint.png"
            alt="Contact Me"
            className="w-[400px] h-[400px] rounded-lg bg-slate-300"
          />
        </div>  
      </div>
      <div className="w-5/12 h-96 p-6 max-sm:h-[50%] max-sm:w-[100%] max-sm:p-2">
        <div className="pl-2 pt-6">
          <h1 className="text-2xl font-bold underline animate-bounce">Contact Me</h1>
          <p className="pt-8">
            Alamat : Jl. Taman Banyak di Bandung, Indonesia
          </p>
          <p className="pt-8">No Telp : 08123456789</p>
          <p className="pt-8">Email : blabla@gmail.com</p>
          <button className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-700 text-white hover:text-orange-300 rounded-xl mt-10 p-2 cursor-pointer">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}
