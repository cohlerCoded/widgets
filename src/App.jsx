import React, { useState } from "react";
import axios from "axios";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

// const showPath = () => {
//   if (window.location.pathname === "/") return <Accordion items={items} />;
//   if (window.location.pathname === "/search") return <Search />;
//   if (window.location.pathname === "/dropdown") return <Dropdown />;
//   if (window.location.pathname === "/translate") return <Translate />;
// };

export default function App() {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
}
