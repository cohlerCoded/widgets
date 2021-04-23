import React, { useState } from "react";
import axios from "axios";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React",
    content: "React is a lightweight front-end framework.",
  },
  {
    title: "Why use React",
    content: "React is a favorite library among engineers.",
  },
  {
    title: "How do you use React",
    content: "You use React by creating components.",
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];

const showPath = () => {
  if (window.location.pathname === "/") return <Accordion items={items} />;
  if (window.location.pathname === "/search") return <Search />;
  if (window.location.pathname === "/dropdown") return <Dropdown />;
  if (window.location.pathname === "/translate") return <Translate />;
};

export default function App() {
  return (
    <div>
      {showPath()}
      {/* {showDropdown ? (
        <Dropdown
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      ) : null} */}
    </div>
  );
}
