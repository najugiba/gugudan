import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

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

export default ({ path = "/", children }) => {
  const history = useHistory();
  return <Button onClick={() => history.push(path)}>{children}</Button>;
};
