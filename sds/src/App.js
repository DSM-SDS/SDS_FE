import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import LoginPage from "../src/pages/Auth";
import SignupPage from "../src/pages/User";
import CreatePage from "../src/pages/Create";

import Layout from "../src/navigation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/create" element={<CreatePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;