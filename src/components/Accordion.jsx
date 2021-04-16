import React from "react";

const Accordion = ({ items }) => {
  const titleClicked = (i) => console.log("Title Clicked", i);
  const renderedItems = items.map((item, i) => {
    return (
      <React.Fragment key={i}>
        <div className="title active" onClick={() => titleClicked(i)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
