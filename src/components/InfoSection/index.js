import React from "react";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  Img,
  ImgWrap,
  infoLogo,
  logoWrap,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  infoLogo,
  lightText,
  headLine,
  darkText,
  description,
  img,
  alt,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <logoWrap>
                <infoLogo src={infoLogo} />
              </logoWrap>
              <TextWrapper>
                <Heading lightText={lightText}> {headLine}</Heading>
                <Subtitle darkText={darkText}> {description} </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
