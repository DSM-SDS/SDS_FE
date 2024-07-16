import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="header">
        <header>
          <ul>
            <li>로그인</li>
            <li>회원가입</li>
          </ul>
        </header>
      </div>
      <div className="main">
        <h2>Login</h2>
        <div class="inputs">
          <input className="id" type="text" placeholder="아이디"></input>
          <input className="pw" type="password" placeholder="비밀번호"></input>
        </div>
        <button>Login</button>
      </div>
    </div>
  );
};
export default Login;
