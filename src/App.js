import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./display/style/style.scss";

// components
// layout
import Header from "./components/layout/Header";
import ModeToggle from "./components/layout/ModeToggle";
// routes
// public
import Home from "./components/routes/public/Home";
import Work from "./components/routes/public/Work";
import About from "./components/routes/public/About";
import Blog from "./components/routes/public/Blog";
// auth
import SignUp from "./components/routes/auth/SignUp";
import SignIn from "./components/routes/auth/SignIn";
// private
import Dashboard from "./components/routes/private/Dashboard";

const App = () => {
  const [darkmodeOn, setDarkmodeOn] = useState(false);

  return (
    <div className={`app ${darkmodeOn ? "app-darkmode" : "app-lightmode"}`}>
      <Header darkmode={darkmodeOn} />
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        {/* auth routes */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        {/* private routes */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <ModeToggle
        onClick={() => setDarkmodeOn(!darkmodeOn)}
        darkmode={darkmodeOn}
      />
    </div>
  );
};

export default App;
