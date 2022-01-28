import styled from "styled-components";

export const HeroContainer = styled.div`
  background: transparent;

  background-size: cover;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  padding: 0;
  margin-top: -60px;
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

export const Column1 = styled.div`
  margin-right: 30px;
  /* padding: 0 15px; */
  grid-area: col1;
`;

export const Column2 = styled.div`
  grid-area: col2;
  padding-bottom: 5px;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, lfr);
  align-items: center;
  grid-template-areas: "col1 col2";

  @media screen and (max-width: 768px) {
    grid-template-areas: "col1 col1" "col2 col2";
  }
`;

export const HeroLogo = styled.image`
  // width: 30%;
  margin-bottom: 10px;
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: left;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 565px) {
    font-size: 32px;
  }
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 18px;
  text-align: justify;
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

export const VideoWrapper = styled.div`
  width: 100%;
  height: 60vh;
  margin-top: 60px;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
`;
