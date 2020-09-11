import React from "react";
import "./App.css";
import Login from "./components/Login";
import { HashRouter, Route } from "react-router-dom";
import Movie_App from "./movie_app/Movie_App";
class App extends React.Component {
  //문제점: /movie에서 공통부분이 나와요
  //무비일 때는 login exact 무비만 나옴
  //반대
  // exact = false;
  // http://localhost:3003/#/movie
  // let a = window.location.href.split("#");
  // if (a[1] === "/movie") {
  //   this.exact = true;
  //   console.log(this.exact);
  // }
  // console.log(this.exact);
  render() {
    window.location.href = "/#/login";
    return (
      <HashRouter>
        <Route path="/login" component={Login} />
        <Route path="/movie" component={Movie_App} />
      </HashRouter>
    );
  }
}

export default App;
