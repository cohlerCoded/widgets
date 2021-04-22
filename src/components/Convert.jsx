import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Convert({ language, text }) {
  useEffect(() => {
    // const translatedText =
    axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: language.value,
          key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms - IwDlM",
        },
      }
    );
    // return () => {
    //   cleanup;
    // };
  }, [language, text]);
  return <div></div>;
}
