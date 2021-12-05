import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      // console.log(e.target);
      // The contains() method returns a Boolean value indicating whether a node is a descendant of a specified node.
      if (ref.current.contains(e.target)) {
          return  // if it's contained inside this element we return early 
      }
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick,
    { capture: true });

    //* ==== CleanUp function
    return () => {
      document.removeEventListener('click', onBodyClick)
    }
  }, []);

  // Menu Options
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });


  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdowm ${open ? "visible active" : ""}`}
        >
          <i className="dropdowm icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
