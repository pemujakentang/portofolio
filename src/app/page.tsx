"use client";
import { useState, useEffect } from "react";
import { Link, Element, scroller, Events } from "react-scroll";
import Hero from "./components/Hero";
import Tiles from "./components/Tiles";
import Banner from "./components/Banner";
import Navigation from "./components/ui/Navigation";
import GridComponent from "./components/GridComponent";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

const components = [
  { id: "hero", Component: Hero },
  { id: "bio", Component: Bio },
  { id: "projects", Component: Projects },
  { id: "experience", Component: Experience },
  { id: "skills", Component: Skills },
  { id: "footer", Component: Footer },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const buffer = 250; // Buffer value to account for offset scrolling

  useEffect(() => {
    const handleScroll = () => {
      const scrollPositions = components.map((component) => {
        const element = document.getElementById(component.id);
        return element ? element.offsetTop : 0;
      });

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newIndex = scrollPositions.findIndex((position, index) => {
        const nextPosition = scrollPositions[index + 1] || Infinity;
        return scrollTop >= position - buffer && scrollTop < nextPosition - buffer;
      });

      if (newIndex !== -1 && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  const handleNavigation = (direction: "up" | "down") => {
    if (direction === "up" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        scrollToComponent(newIndex);
        return newIndex;
      });
    } else if (direction === "down" && currentIndex < components.length - 1) {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        scrollToComponent(newIndex);
        return newIndex;
      });
    }
  };

  const scrollToComponent = (index: number) => {
    const componentId = components[index].id;
    scroller.scrollTo(componentId, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <main className="overflow-hidden">
      <Navigation currentIndex={currentIndex}></Navigation>

      <Element name="hero" id="hero">
        <Hero />
      </Element>
      <Element name="bio" id="bio">
        <Bio />
      </Element>
      <Element name="projects" id="projects">
        <Projects />
      </Element>
      <Element name="experience" id="experience">
        <Experience />
      </Element>
      <Element name="skills" id="skills">
        <Skills />
      </Element>
      <Element name="footer" id="footer">
        <Footer />
      </Element>

      <div className="fixed h-[90vh] bottom-0 end-0 flex justify-between align-middle items-center flex-col z-50 p-4 border-black">
        <button
          onClick={() => handleNavigation("up")}
          className="p-2 rounded-lg border-2 aspect-square border-black bg-retro-offwhite hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-200 hover:cursor-pointer disabled:border-gray-300 disabled:bg-white disabled:text-gray-300 disabled:transition-none disabled:pointer-events-none"
          disabled={currentIndex === 0}
        >
          <i className="fa-solid fa-up-long"></i>
        </button>
        <button
          onClick={() => handleNavigation("down")}
          className="p-2 rounded-lg border-2 aspect-square border-black bg-retro-offwhite hover:-translate-x-1 hover:-translate-y-1 transition-all ease-in-out duration-200 hover:cursor-pointer disabled:border-gray-300 disabled:bg-white disabled:text-gray-300 disabled:transition-none disabled:pointer-events-none"
          disabled={currentIndex === components.length - 1}
        >
          <i className="fa-solid fa-down-long"></i>
        </button>
      </div>
    </main>
  );
}
