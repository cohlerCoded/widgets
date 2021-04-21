import React, { useState, useEffect } from "react";

export default function Convert({ language, text }) {
  useEffect(() => {
    console.log("new lang or text");
    // return () => {
    //   cleanup;
    // };
  }, [language, text]);
  return <div></div>;
}
