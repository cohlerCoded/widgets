import React, { useState, useEffect } from "react";

export default function Search() {
  const [term, setTerm] = useState("");
  console.log("I run with every render");
  useEffect(() => {
    console.log("I run when term changes");
  }, [term]);
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="search">Enter Search Term</label>
          <input
            type="search"
            name="search"
            id="search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
