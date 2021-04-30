import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 200px;
  background: #000;
  position: relative;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const FooterText = styled.div`
  a{
    color: #212529;
    &:hover { color: #7F7F7D; }
  }
  text-align: center;
`;


export const FooterHeading = styled.div`
    font-size: 1em;
    font-weight: bolder;
    color: #91A937;
    text-align: center;
    margin-top: -50px;

`;

