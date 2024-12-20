import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background/Background";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SignIn from "./components/SignIn/SignIn";
import DownloadPage from "./components/DownloadPage/DownloadPage";
import { useState, useEffect } from "react";

const App = () => {
  let heroData = [
    { text1: "Dive into", text2: "Predictive Insights" },
    { text1: "Explore", text2: "Predictive Maintenance" },
    { text1: "Learn", text2: "something new" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Navbar />
              <Hero
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setPlayStatus={setPlayStatus}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
            </div>
          }
        />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="signIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;