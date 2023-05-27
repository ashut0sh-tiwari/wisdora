import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  learningSolutionsItems,
  learningStrategyItems,
} from "../../data/stickyNavItems";

const LearningStrategyHeader = ({ handleSectionChange }) => {
  const location = useLocation();
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight =
        document.querySelector(".hero-section").offsetHeight;

      if (window.pageYOffset > heroSectionHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.pageYOffset;

        if (
          scrollPosition >= sectionTop - 100 &&
          scrollPosition < sectionTop + sectionHeight - 100
        ) {
          setActiveSection(section.id);
        }
      });
      handleSectionChange(activeSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    const sectionTop = section.offsetTop;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    setActiveSection(sectionId);
  };

  const NavListItems = (itemsArray) => {
    return itemsArray.map((items, index) => (
      <li
        className={activeSection === items.anchor ? "sticky-active" : ""}
        key={index}
      >
        <Link
          to={`#${items.anchor}`}
          onClick={() => handleNavItemClick(items.anchor)}
        >
          {items.title}
        </Link>
      </li>
    ));
  };

  return (
    <>
      <section className="hero-section">
        <div className="hero-heading">
          More Than Training…An{" "}
          <span style={{ color: "#0076ff" }}>Experience</span>
        </div>
        <div className="hero-sub-heading">Corporate Learning Strategies</div>
      </section>
      <nav className={`sticky-navbar ${isSticky ? "sticky" : ""}`}>
        <ul className="sticky-navbar-list">
          {location.pathname.split("/")[2] === "learning-strategy" &&
            NavListItems(learningStrategyItems)}
          {location.pathname.split("/")[2] === "learning-solutions" &&
            NavListItems(learningSolutionsItems)}
        </ul>
      </nav>
    </>
  );
};

export default LearningStrategyHeader;
