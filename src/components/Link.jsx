import React from "react";

export default function Link({ className, href, children }) {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}
