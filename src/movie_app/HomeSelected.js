import React from "react";

class HomeSelected extends React.Component {
  state = {
    mouseOver: "",
  };
  MYLIST = "mylist";
  //dish의 title값을 가져와서 mylist랑 조건문으로 대조를 한 후
  //맞으면 클래스네임이 칠핥 아니면 빈핥;
  //애로우함수는 상위스코프로 this를 받아온다
  localSet = (dish) => {
    const mylist = [];
    const ML_item = JSON.parse(localStorage.getItem(this.MYLIST)); //원래 있던 거
    if (ML_item !== null) {
      mylist.push(...ML_item);
    }
    mylist.push(dish);
    localStorage.setItem(this.MYLIST, JSON.stringify(mylist));
    return mylist;
  };
  localRemove = (dish) => {
    let mylist = [];
    const ML_item = JSON.parse(localStorage.getItem(this.MYLIST)); //원래 있던 거
    if (ML_item) {
      mylist.push(...ML_item);
    }
    mylist = mylist.filter(
      (zzim) => zzim.original_title !== dish.original_title
    );
    localStorage.setItem(this.MYLIST, JSON.stringify(mylist));
    return mylist;
  };
  localGet = (content) => {
    const ML_item = JSON.parse(localStorage.getItem(this.MYLIST));
    if (ML_item) {
      for (let i = 0; i < ML_item.length; i++) {
        if (ML_item[i].original_title === content.original_title) {
          return "fas fa-heart";
        }
      }
    }
    return "far fa-heart";
  };
  render() {
    //찜
    //마우스오버 클릭할 버튼이 생김
    //버튼클릭시 로컬스토리지 저장 && 찜한 버튼 모양 변화
    //로컬스토리지 데이터 찜컴포넌트에 송출
    //찜 페이지에서 마우스 오버->클릭 버튼 생성
    //버튼 클릭시 로컬스토리지에서 빼기 및 rerender(setState);
    //이벤트 공부  over,

    //버튼이 다 생긴다
    const { objlist } = this.props;
    console.log(objlist);
    return (
      <div>
        <h1>{objlist.genre}</h1>
        <div className="forBtn">
          <button
            className="left btn"
            onClick={
              ("click",
              (e) => {
                e.preventDefault();
                e.target.nextSibling.scrollLeft -= 300;
              })
            }
          >
            &lt;
          </button>
          <div className="genre">
            {objlist.movie.map((
              content //content 영화 하나
            ) =>
              content.poster_path ? (
                <div name={content.original_title} className="genre_contents">
                  <img
                    src={`http://i2.wp.com/image.tmdb.org/t/p/w780/${content.poster_path}`}
                    name={content.original_title}
                    alt={content.original_title}
                    className="imgsrc"
                  />
                  {content.original_title}
                  {/* 하트 유지 , 로컬로 배열 보내기, 다시 클릭 시 빈하트, 로컬에서 빠지기  */}
                  {/* 로컬 넣는거랑 가져오는거랑 따로 함수 */}
                  <i
                    class={this.localGet(content)} //far 빈하트 fas 찬하트
                    name={content.original_title}
                    onClick={(e) => {
                      if (e.target.className === "far fa-heart") {
                        e.target.className = "fas fa-heart";
                        this.localSet(content);
                      } else {
                        this.localRemove(content);
                        e.target.className = "far fa-heart";
                      }
                    }}
                  ></i>
                </div> //content
              ) : null
            )}
          </div>
          <button
            className="right btn"
            onClick={
              ("click",
              (e) => {
                e.preventDefault();
                e.target.previousSibling.scrollLeft += 300;
              })
            }
          >
            &gt;
          </button>
        </div>
      </div>
    );
  }
}

export default HomeSelected;
