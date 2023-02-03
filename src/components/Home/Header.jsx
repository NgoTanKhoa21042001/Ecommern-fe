import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      {/* Header TopBar */}
      <div className="Header__topbar space__beetween">
        {/* Topbar Left */}
        <div className="logo pxy__10">
          <a href="/">
            <img
              src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/logo.svg"
              alt=""
              className="logo"
              style={{
                width: "150px",
                height: "100px",
                objectFit: "contain",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
        {/* Topbar Middle */}
        <div
          className="searchBoxHome"
          style={{
            width: "50%",
            position: "relative",
          }}
        >
          <div
            className="inputBox"
            style={{
              display: "flex",
              alignItems: "center",
              height: "30px",
              width: "100%",
              background: "tomato",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                color: "#fff",
              }}
            >
              Welcome to our shop...You can find anything in here as your
              favourites..
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
