import React from "react";
import Home from "./Home";
import About from "./About";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linkList = links.map((link) => {
    return (
      <a href={`#${link}`} key={link}>
        {" "}
        {link}
      </a>
    );
  });

  return <nav>{linkList}</nav>;
}

export default NavBar;
