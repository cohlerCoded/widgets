import React from "react";

export default function Link({ className, href, children }) {
  const onClick = (event) => {
    event.preventDefault();
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
}
