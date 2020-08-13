import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../hooks/useInput";
import { useHistory } from "react-router-dom";
import "../styles/App.css";

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    opacity: 0.5;
  }
  cursor: pointer;
  padding: 10px;
  margin: 10px;
`;

const MenuBtn = ({ path, children }) => {
  const history = useHistory();
  return <Button onClick={() => history.push(path)}>{children}</Button>;
};

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
                <MenuBtn path="/gugudan">구구단 표</MenuBtn>
                <MenuBtn path="/practice">연습 하기</MenuBtn>
              </div>
              <div style={{ display: "flex" }}>
                <MenuBtn path="/testing">시험 보기</MenuBtn>
                <MenuBtn path="/grade">성적 확인</MenuBtn>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
