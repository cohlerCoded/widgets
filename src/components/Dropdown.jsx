import React, { useState, useEffect } from "react";

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setIsOpen(false);
      },
      { capture: true }
    );
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) return null;
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={`ui selection dropdown ${isOpen ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${isOpen ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
}
