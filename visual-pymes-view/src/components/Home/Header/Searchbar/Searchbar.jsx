import React from "react";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const Searchbar = (props) => {
  const { onChange } = props;
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="nav__search"
        type="text"
        placeholder="buscar"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <BsSearch fill="#FFDA1A" strokeWidth="0.2" height="2em" width="2em" />
      {/* <input type="submit"></input> */}
    </form>
  );
};

export default Searchbar;
