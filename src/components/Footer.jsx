import React from "react";

function Footer(props) {
  return (
    <div className="footer">
      Made with{" "}
      <a className="footer-link" href="https://reactjs.org/">
        {" "}
        ReactJs{" "}
      </a>{" "}
      by
      <a className="footer-link" href="https://github.com/Eugene4277">
        {" "}
        Eugene
      </a>
    </div>
  );
}

export default Footer;
