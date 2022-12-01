import React from "react";
import styled from "styled-components";

function Home() {
const sub:string[] = ["홈","웹툰", "베스트 도전", "도전만화", "마이페이지"]
 
  return (
    <>
    <MainDiv>      <Header>
        <h2>
          <a>NAVER</a>
          <a>웹툰</a>|<a>웹소설</a>|<a>시리즈</a>
        </h2>
        <div>
          <Search>
            <input type="text" placeholder="검색어 입력" />
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
          </Search>
          <button>로그인</button>
          <span></span>
        </div>
      </Header>
      <hr/>
        <
      <hr/>
      </MainDiv>

    </>
  );
}
const Header = styled.div`
    
`
const MainDiv = styled.div`
    
`
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