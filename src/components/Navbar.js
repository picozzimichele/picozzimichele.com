import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import "../styles/Navbar.css";

const Navbar = () => {
  let [toggle, setToggle] = useState(false);

  const expandMenu = () => {
    setToggle(!toggle);
  };

  const li = [
    {
      link: "/",
      text: "PHOTOS",
    },
    {
      link: "https://www.instagram.com/picozzimichele/?hl=en",
      text: "INSTAGRAM",
      target:"_blank",
      rel: "noopener"
    },
    {
      link: "/blog/",
      text: "BLOG",
    },
    {
      link: "/projects/",
      text: "PROJECTS",
    },
    {
      link: "/about/",
      text: "ABOUT",
    },
    {
      link: "/contact/",
      text: "CONTACT",
    },
  ];

  return (
    <div className="navBar">
      <button onClick={expandMenu} aria-hidden="true">
        <FaAlignRight />
      </button>
      <ul className={toggle ? "links show-nav" : "links"}>
        {li.map((objLink, i) => {
          return (
            <li key={i}>
              <a className="link" href={objLink.link} target={objLink.target} rel={objLink.rel}>
                {objLink.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { Navbar as default };
