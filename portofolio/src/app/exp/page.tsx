import Exp1 from "./_components/exp1"
import Exp2 from "./_components/exp2";

export default function Exp() {
  return (
    <div className="w-full h-auto mt-20">
      <h2 className="flex justify-center mt-4 md:mt-10 text-3xl font-bold">
        EXPERIENCE
      </h2>
      <Exp1 />
      <Exp2 />
    </div>
  );
}
