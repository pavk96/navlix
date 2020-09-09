import React from "react";
import logo from "../logo.png";

function KorFooter() {
  return (
    <footer className="footer">
      <small>
        <img src={logo} alt="naver" />
        <address>
          Copyright &copy;{" "}
          <b>
            <span>Naver</span> Corp.
          </b>{" "}
          All Right Reserved.
        </address>
      </small>
    </footer>
  );
}

export default KorFooter;
