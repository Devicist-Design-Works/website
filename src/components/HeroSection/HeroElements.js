import styled from "styled-components";

export const HeroContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

export const HeroBg = styled.img`
  position: absolute;
  top: 80px;
  bottom: 0;
  right: 0;
  left: -50px;
  width: 100%;
  height: auto;
  overflow: hidden;
`;
export const HeroText1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 20px;
  flex: 1;
`;

export const HeroText2 = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;
export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
`;
