import React from "react";
import ArticleList from "./ArticleList";
function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;