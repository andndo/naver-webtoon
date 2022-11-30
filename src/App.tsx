import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, home } from "react-router-dom";
import home from "./routes/home";
import webtoon from "./routes/webtoon";
import bestchallenge from "./routes/bestchallenge";
import mypage from "./routes/mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
