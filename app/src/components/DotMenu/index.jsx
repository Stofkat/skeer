/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useEffect } from "react";

import "./style.scss";


let hideTimeout = null;

const DotMenu = ({
  menuItems,
  dark
}) => {

  const [show, setShown] = useState(null);
  const [dontRender, setDontRender] = useState(true);

  useEffect(() => {
    hideTimeout && clearTimeout(hideTimeout);
    if (show) {
      setDontRender(false);
    } else {
      hideTimeout = setTimeout(() => {
        setDontRender(true);
      }, 500);
    }
  }, [show]);


  const menuClasses = classNames(
    "dot-menu",
    show !== null ? show ? "show" : "hide" : "",
    dontRender && "dont-render"
  );


  const dotMenuClasses = classNames("dot-menu-button", dark && "dark");

  return (
    <>
      <a
        className={dotMenuClasses}
        tabIndex="-1"
        onBlur={() => setShown(false)}
        onClick={(e) => {
          e.stopPropagation();
          setShown(true);
        }}
      >
        <img alt="dot menu" src={require("assets/icons/dot-menu.svg").default} />
      </a>
      <div className={menuClasses}>
        {menuItems.map((item, index) =>
          <span
            index={index}
            key={index}
            onMouseDown={(e)=> {
              e.stopPropagation();
              item.action();
            }}
          >
            {item.label}
          </span>
        )}
      </div>
    </>
  );

};

DotMenu.propTypes = {
  menuItems: PropTypes.array.isRequired,
  icon: PropTypes.string,
  dark: PropTypes.bool
};

export default DotMenu;