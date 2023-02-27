import React from "react";

function Header(props) {
  return (
    <header className="flex-row space-between px-1">
      <h1>James VonLienen</h1>
      <img src={coverImage} alt="autumn leaves"></img>
      {props.children}
    </header>
  );
}

export default Header;
