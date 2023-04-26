import { Add } from "@mui/icons-material";
import React from "react";
import "../students/css/sidebaroptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="././images/language/html-5.png"
          alt=""
        />
        <p>HMTL</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/css.png"
          alt=""
        />

        <p>CSS</p>
      </div>
      <div className="sidebarOption">
        <img
          src="././images/language/javascript.png"
          alt=""
        />
        <p>JavaScript</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/mysql.png"
          alt=""
        />
        <p>MySQL</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/python.png"
          alt=""
        />
        <p>Python</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/php.png"
          alt=""
        />
        <p>PHP</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/bootstrap.png"
          alt=""
        />
        <p>Bootstrap</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/react.png"
          alt=""
        />
        <p>React</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/jquery.png"
          alt=""
        />
        <p>JQuery</p>
      </div>

      <div className="sidebarOption">
        <img
          src="././images/language/nodejs.png"
          alt=""
        />
        <p>NodeJS</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover</p>
      </div>
    </div>
  );
}

export default SidebarOptions;
