import React from "react";
import { Link } from "react-router-dom";

class EngSignUp extends React.Component {
  // e.preventDefault();를 쓰면 action의 값은 받아오지만 페이지 이동이 안 됨
  // window.location.href = "http://localhost:3000/";

  render() {
    return (
      <div>
        <form
          id="textarea"
          action="/#/login"
          method="post"
          onSubmit={(e) => {
            const signUp = "signUp";
            const signUpList = [];
            const LS_item = JSON.parse(localStorage.getItem(signUp));
            if (LS_item !== null) {
              signUpList.push(...LS_item);
            }
            const signUpObject = {
              id: e.target.id.value,
              pw: e.target.pw.value,
            };
            console.dir(e.target);
            signUpList.push(signUpObject);
            localStorage.setItem(signUp, JSON.stringify(signUpList));
          }}
        >
          <input name="id" type="text" placeholder="ID" className="input" />
          <input
            name="pw"
            type="password"
            placeholder="Password"
            className="input"
          />
          <input type="submit" className="loginBtn" value="SignUp" />
          <div>
            <Link to="/login" className="backToHome">
              Cancel
            </Link>
          </div>
          <ul>{this.liList}</ul>
        </form>
      </div>
    );
  }
}

export default EngSignUp;
