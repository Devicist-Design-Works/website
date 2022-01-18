import styled from "styled-components";

export const HeroContainer = styled.div`
  background: whitesmoke;
  display: flex;
  height: 600px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0 24px;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroContent = styled.div`
  z-index: 3;
  width: 100%;
  max-width: 1100px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const HeroLogo = styled.image`
  // width: 30%;
  margin-bottom: 10px;
`;

export const HeroH1 = styled.h1`
  color: black;
  font-size: 48px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: black;
  font-size: 18px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: left;
`;
