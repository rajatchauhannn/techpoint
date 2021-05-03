import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  margin-bottom: 14em;
`;
export const NoMatch = () => (
  <Wrapper>
    <h1>ERROR 404</h1>
    <h2>Sorry, This Page does not exist......</h2>
    <a href="/">Back to home</a>
  </Wrapper>
)