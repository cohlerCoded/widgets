import React from "react";
import axios from "axios";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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

export default function App() {
  return (
    <div>
      {/* <h1>Widgets App</h1>
      <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown options={options} />
    </div>
  );
}
