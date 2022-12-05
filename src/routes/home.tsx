import React from "react";
import styled from "styled-components";
import "../App.css";
import Year from "react-live-clock";
import Month from "react-live-clock";

function Home() {
  const sub: string[] = ["홈", "웹툰", "베스트도전", "도전만화", "마이페이지"];
  const sequenceLi: string[] = ["인기순", "업데이트순", "조회순", "별점순"];

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
        <div className="Header2">
          {sub.map((list) => (
            <div>{list}</div>
          ))}
        </div>
        <hr />
        <div className="slideMainDiv">
          <div className="slideSub">
            <h1>
              오늘의<div>웹툰</div>
            </h1>
            <p>12월 3일 월요일</p>
            {sequenceLi.map((list) => (
              <li>{list}</li>
            ))}
          </div>
          <div className="advertisementImg">
            <img src="https://image-comic.pstatic.net/webtoon/783052/thu…l_IMAG02_9c04cf6b-2343-4e55-8cad-f1821e01d323.jpg" />
          </div>
          <div className="slideSub2">
            <h3>새로운 베스트 도전만화</h3>
            <img src="https://shared-comic.pstatic.net/thumb/nas/user_co…999a5df_885a_4462_b177_1b1e8aed2eae_00000192.JPEG" />
            <a>똘기들</a>
            <a>
              동생과 같은 방을 쓰기 싫다는 이유로 기숙사 고등학교에 온 찬미, 1인
              기숙사가 아니라는 것에 실망하지만, 룸메이트 찬양과 잘 지...
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
const Header = styled.div``;
const MainDiv = styled.div``;
const Search = styled.div`
  position: relative;
  width: 300px;
  background-color: #fff;
  input {
    width: 100%;
    border: 1px solid #bbb;
    border-radius: 8px;
    padding: 10px 12px;
    font-size: 14px;
  }

  img {
    position: absolute;
    width: 17px;
    top: 10px;
    right: 12px;
    margin: 0;
  }
`;

export default Home;
