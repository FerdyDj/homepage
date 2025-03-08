import About from "./about/page";
import Contact from "./contact/page";
import Skills from "./skills/page";
import Portfolio from "./portfolio/page";
import Exp from "./exp/page";
import Testi from "./testi/page";
import Footer from "@/components/footer";
import Home from "./home/home";

export default function Page() {
  return (
    <div>
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="experience">
        <Exp />
      </div>
      <div id="testimonials">
        <Testi />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
