import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
        <p>Built by Joshua Ellis</p>
        <p>
          <a className="footer__link" href="mailto: joshua.ellis.r@gmail.com">
            joshua.ellis.r@gmail.com
          </a>
        </p>
        <p>
          <a className="footer__link" href="http://github.com/jellis21/whos-that-pokemon" target="blank">
            Github: jellis21
          </a>
        </p>
    </div>
  );
}

export default Footer;
