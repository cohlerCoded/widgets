import React, { useState } from "react";

export default function Search() {
  const [term, setTerm] = useState("");
  console.log(term);
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
