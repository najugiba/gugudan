import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useHistory } from "react-router-dom";
import "../styles/App.css";

const Menu = styled.div`
  padding: 10px 25px;
  margin: 10px 17px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
`;

export default () => {
  const [action, setAction] = useState("gugudan");
  const username = useInput("");
  function onSubmit(e) {
    e.preventDefault();
    setAction("gugudan");
  }
  const history = useHistory();
  // useEffect(() => console.log(username));
  return (
    <div className="App">
      <header className="App-header">
        <span>구구단 게임</span>
      </header>
      <div className="content">
        {action === "Login" && (
          <div className="login">
            <img src={require("../assets/images/mongkey.png")} alt="" />
            <form onSubmit={onSubmit}>
              <input {...username} />
              <input type="submit" />
            </form>
          </div>
        )}
        {action === "gugudan" && (
          <div className="gogodan">
            <img src={require("../assets/images/mongkey.png")} alt="" />
            <form onSubmit={onSubmit}>
              <div style={{ display: "flex" }}>
                <Menu onClick={() => history.push("/gugudan")}>구구단 표</Menu>
                <Menu onClick={() => history.push("/practice")}>연습 하기</Menu>
              </div>
              <div style={{ display: "flex" }}>
                <Menu onClick={() => history.push("/testing")}>시험 보기</Menu>
                <Menu onClick={() => history.push("/grade")}>성적 확인</Menu>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
