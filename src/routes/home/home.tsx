import React from "react";
import "../../App.css";
import Year from "react-live-clock";
import Month from "react-live-clock";
import * as S from "./styles";

function Home() {
  const sub: string[] = ["홈", "웹툰", "베스트도전", "도전만화", "마이페이지"];
  const sequenceLi: string[] = ["인기순", "업데이트순", "조회순", "별점순"];
  const genre: string[] = [
    "일상",
    "개그",
    "판타지",
    "액션",
    "드라마",
    "순정",
    "감성",
    "스릴러",
    "무협/사극",
    "스포츠",
  ];
  const sequenceLiList = sequenceLi.map((list) => (
    <li>{list}</li>
  ))
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
            {/* <div className="Year-Month">
              <p>
                <span className="Year">
                  <Year
                    id="Year"
                    format={"YYYY"}
                    ticking={false}
                    timezone={"KR/Pacific"}
                  />
                </span>
                &nbsp;&nbsp;
                <span className="Month">
                  <Month
                    format={"MMM"}
                    ticking={false}
                    timezone={"KR/Pacific"}
                  />
                </span>
              </p>
            </div> */}
            {sequenceLiList}
          </div>
          <div className="advertisementImg">
            {/* <img src="https://image-comic.pstatic.net/webtoon/783052/thu…l_IMAG02_9c04cf6b-2343-4e55-8cad-f1821e01d323.jpg" /> */}
          </div>
          <div className="arrow-left"></div>
          <div className="slideDiv1">
            <img />
            <h3>김부장</h3>
            <p>아저씨는 건들지 말..</p>
          </div>
          <div className="slideDiv2">
            <img />
            <h3>김부장</h3>
            <p>아저씨는 건들지 말..</p>
          </div>
          <div className="slideDiv3">
            <img />
            <h3>김부장</h3>
            <p>아저씨는 건들지 말..</p>
          </div>
          <div className="slideDiv4">
            <img />
            <h3>김부장</h3>
            <p>아저씨는 건들지 말..</p>
          </div>
          <div className="arrow-right"></div>
          <div className="slideSub5">
            <h3>새로운 베스트 도전만화</h3>
            {/* <img src="https://shared-comic.pstatic.net/thumb/nas/user_co…999a5df_885a_4462_b177_1b1e8aed2eae_00000192.JPEG" /> */}
            <a>똘기들</a>
            <a>
              동생과 같은 방을 쓰기 싫다는 이유로 기숙사 고등학교에 온 찬미, 1인
              기숙사가 아니라는 것에 실망하지만, 룸메이트 찬양과 잘 지...
            </a>
          </div>
        </div>
        <div className="webtoonMain">
          <div className="recommendWebtoon">
            <div className="recommendGenre">
              <div className="titleMain">
                <a>장르별 추천웹툰</a>
              </div>
              <div className="genre">
                <ul>
                  {genre.map((list) => (
                    <li>{list}</li>
                  ))}
                </ul>
              </div>
              <div>{sequenceLiList}</div>
              <div className="recommendWebtoon">
                <img/>
                <h3>에웅식당</h3>
                <p>afewef</p>
              </div>
            </div>
            <div className="recommendBestChallenge"></div>
            <div className="recommendComic"></div>
          </div>
          <S.webtoonSub>
            <button>
              웹툰 올리기
              <img />
            </button>
            <img />
            <div className="popularityRise"></div>
            <div className="popularityReal-time"></div>
            <img />
            <img />
            <img />
            <img />
            <button>웹툰 고객센터</button>
          </S.webtoonSub>
        </div>
      </div>
      <div className="bottomDiv">
        <hr/>
        <h3>
          <a> 웹툰 </a>|<a> 웹소설 </a>|<a> 시리즈<div>웹소설, 만화</div></a>|<a> 시리즈온 <div>영화,방송</div></a>
          </h3>
        <hr/>
      </div>

    </>
  );
}

/*const Search = styled.div`
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
`;*/

export default Home;
