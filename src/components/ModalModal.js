import React from "react";
import { Link } from "react-router-dom";

function ModalModal({ article }) {
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-title"></div>
        <p>환영합니다 {article}님!</p>
        <div className="close-wrapper">
          <Link id="close" to="/movie/home">
            닫기
          </Link>
        </div>
      </div>
    </div>
  );
}
export default ModalModal;
