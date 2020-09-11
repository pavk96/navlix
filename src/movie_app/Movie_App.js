import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import KorFooter from "../components/KorFooter";
import Latest from "./Latest";
import Nav from "./Nav";
import MyList from "./MyList";

class Movie_App extends React.Component {
  render() {
    return (
      <>
        {/* API,내가찜한 콘텐츠,검색기능,추천검색어 //네비 //장르,최신,찜 */}
        <Nav />
        {/* 각 섹션마다 검색이벤트(submit); */}
        <Route path="/movie/latest" exact={true} component={Latest} />
        <Route path="/movie/home" exact={true} component={Home} />
        <Route path="/movie/mylist" exact={true} component={MyList} />
        <KorFooter />
        {/* 푸터 */}
      </>
    );
  }
}
export default Movie_App;
