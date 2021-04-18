import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Search() {
  const [term, setTerm] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: term,
        },
      });
      setRes(data.query.search);
    };
    if (term) {
      search();
    }
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
