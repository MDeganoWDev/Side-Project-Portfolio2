import AboutMe from "./components/aboutMe/about-me";
import Competences from "./components/competences/competences";
import Portfolio from "./components/portfolio/portfolio";
import Welcome from "./components/welcome/welcome";

export default function Home() {
  return (
    <main className="mt-10 flex flex-col bg-primary">
      <div id="welcome">
        <Welcome />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="competences">
        <Competences />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
    </main>
  );
}
