import axios from "axios";
import React, { useState, useEffect } from "react";

export default function Search() {
  const [term, setTerm] = useState("Programming");
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

    if (term && !res.length) {
      search();
    } else {
      const timeOutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);
      return () => clearTimeout(timeOutId);
    }
  }, [term]);

  const renderedRes = res.map((match) => {
    return (
      <div key={match.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${match.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{match.title}</div>
          <span dangerouslySetInnerHTML={{ __html: match.snippet }}></span>
        </div>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedRes}</div>
    </div>
  );
}
