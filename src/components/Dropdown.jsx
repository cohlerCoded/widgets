import React, { useState, useEffect, useRef } from "react";

export default function Dropdown({ options, selected, onSelectedChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setIsOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
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
    <div ref={ref} className="ui form">
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
