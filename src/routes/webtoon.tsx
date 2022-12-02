import React from "react";
import "../App.css";
function Webtoon() {
  return (
    <>
      <div className="MainDiv">
        <div className="Header">
          <h2>
            <a>NAVER </a>
            <a> 웹툰 </a>|<a> 웹소설 </a>|<a> 시리즈 </a>
          </h2>
          <div className="RightHeader">
            <div className="vacuum"></div>
            <div className="Search">
              <input type="text" placeholder="검색어 입력" />
              <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
            </div>
            <button>로그인</button>
            <img src="https://cdn-icons-png.flaticon.com/512/5135/5135168.png" />
          </div>
        </div>
        <hr />

        <hr />
      </div>
    </>
  );
}

export default Webtoon;
