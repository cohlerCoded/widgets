import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const apiKey = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

export default function Translate() {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="text">Enter Text</label>
          <input
            type="text"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Translated Text</h3>
      <Convert language={language} text={text} />
    </div>
  );
}
