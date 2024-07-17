import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../src/pages/Auth";
import SignupPage from "../src/pages/User";
import CreatePage from "../src/pages/Create";
import MainPage from "../src/pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;