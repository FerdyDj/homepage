import AboutMe from "./_components/aboutme";
import CoreSkill from "./_components/coreskill";
import Key from "./_components/key";

export default function About() {
  return (
    <div className="w-screen p-6 bg-blue-100">
      <AboutMe />
      <CoreSkill />
      <Key />
    </div>
  );
}
