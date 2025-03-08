import Image from "next/image";
import MyPortfolio from "./_components/myportfolio";
import BlogApp from "./_components/blogapp";
import ComProf from "./_components/comprof";
import Ecomm from "./_components/ecomm";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 p-4 sm:p-8">
      <h2 className="flex justify-center font-bold py-8 text-3xl">PORTFOLIO</h2>
      <div className="grid md:grid-cols-2 md:grid-rows-2 grid-rows-4 grid-cols-1 gap-2">
        <MyPortfolio />
        <BlogApp />
        <ComProf />
        <Ecomm />
      </div>
    </div>
  );
}
