import React, { Fragment, useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderItems = items.map((item, idx) => {
    // compares current index to active index
    const active = idx === activeIndex ? "active" : "";

    return (
      <Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(idx)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default Accordion;
