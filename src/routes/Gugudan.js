import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 0 20px;
`;

const Column = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Formulas = styled.div``;

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

const Gugudan = () => {
  const nums = [2, 3, 4, 5, 6, 7, 8, 9];
  const [select, setSelect] = useState(3);

  useEffect(() => {
    console.log("Gugudan -> select", select);
  }, [select]);

  return (
    <Wrapper>
      <Column>
        <Formulas></Formulas>
      </Column>

      <Column>
        <p style={{ fontSize: "35px" }}>외우고자 하는 구구단을 선택하세요.</p>
        <div style={{ display: "flex" }}>
          {nums.slice(0, 4).map((num) => (
            <Button key={num} onClick={() => setSelect(num)}>
              {num} 단
            </Button>
          ))}
        </div>
        <div style={{ display: "flex" }}>
          {nums.slice(4, 9).map((num) => (
            <Button key={num} onClick={() => setSelect(num)}>
              {num} 단
            </Button>
          ))}
        </div>
      </Column>
    </Wrapper>
  );
};

export default Gugudan;
