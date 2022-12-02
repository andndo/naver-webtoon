import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home";
import Webtoon from "./routes/webtoon";
import Bestchallenge from "./routes/bestchallenge";
import Mypage from "./routes/mypage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/Webtoon" element={<Webtoon/>}/>
        <Route path="/Bestchallenge" element={<Bestchallenge/>}/>
        <Route path="/Mypage" element={<Mypage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
