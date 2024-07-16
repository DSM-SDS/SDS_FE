import React from "react";
import "./Signup.css";

const Signup = () => {
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
        <h2>SignUp</h2>
        <div class="inputs">
          <input className="name" type="text" placeholder="이름"></input>
          <input className="id" type="text" placeholder="아이디"></input>
          <input className="pw" type="password" placeholder="비밀번호"></input>
          <input
            className="pwcheck"
            type="pasword"
            placeholder="비밀번호 확인"
          ></input>
          <input
            className="apartname"
            type="text"
            placeholder="아파트 이름"
          ></input>
        </div>
        <button>Signup</button>
      </div>
    </div>
  );
};
