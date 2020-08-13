import React from "react";
import styled from "styled-components";
import Router from "./Router";

const AppWrapper = styled.div`
  height: 100%;
`;

export default () => (
  <AppWrapper>
    <Router />
  </AppWrapper>
);
