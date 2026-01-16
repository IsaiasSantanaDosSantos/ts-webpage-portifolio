import { glassEffect } from "../../style/mixins/glass";
import { hoverEffect } from "../../style/mixins/hoverEfects";
import { globalColor } from "../../style/theme"; 

import styled from "styled-components";

export const AboutContainer = styled.section`
*{
box-sizing: border-box;
}
  max-width: ${globalColor.maxWidth};
  width: ${globalColor.minWidth};
  min-height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  margin-bottom: 50px;

    ${glassEffect({
    position: "relative",
    blur: 5,
    radius: "15px",
    border: "all",
    withWillChange: true,
})}

.textBold{
    font-weight: 600;
}
.yellowUnderline{
    border-bottom: 2px solid ${globalColor.primaryColor};
    padding: 1px;
}
`;

export const TextBold = styled.span`
    font-weight: 600;
`;
export const AboutSubTitle = styled.h1`
  font-size: 16px;
  margin: 0 auto 2rem;
  background-color: ${globalColor.primaryColor}; 
  text-align: center;
  padding: ${globalColor.subTitlePadding};
  color: ${globalColor.secondaryColor};
  font-weight: 400;
  `;

export const AboutTitle = styled.p`
  font-size: 32px;
  margin: 0 auto 2rem; 
  text-align: center;
  padding: ${globalColor.subTitlePadding};
  font-weight: bold;
  `;

export const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  `;

export const AboutContentLeft = styled.div`
width: calc(60% - 1rem);
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;

@media (max-width: 992px) {
    width: 100%;
  }
`;

export const aboutContentLeftSubTitle = styled.p`
font-size: 20px;
margin: 0 0 15px;
display: flex;
align-items: start;
column-gap: 5px;
text-align: start;
font-weight: 500;

@media (max-width: 992px) {
    width: 100%;
    justify-content: center;
  }
`;

export const AboutText = styled.p`
    font-size: 16px;
    line-height: 1.5;
    text-align: start;
    font-weight: 400;
    margin: 0 0 15px;

    @media (max-width: 992px) {
        text-align: center;
      }
`;

export const AboutContentRight = styled.div`
width: calc(40% - 1rem);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (max-width: 992px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const YearNumberExpeience = styled.p`
    font-size: 120px;
    line-height: 1.2;
    margin: 0;
    display: flex;
    align-items: flex-start;
    column-gap: 5px;
    text-align: center;
    font-weight: 600;
    position: relative;
    padding: 5px;
    color: ${globalColor.secondaryColor};
    
  .yearNumberCicly {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${globalColor.primaryColor};
    z-index: -1;
    border-radius: 50%;
  }
`;

export const YearTextExperience = styled.p`
    font-size: 25px;
    line-height: 1.5;
    text-align: center;
    font-weight: 400;
    margin: 5px 0 20px;
`;

export const AboutImg = styled.img`
max-width: 300px;
width: 100%;
height: auto;
object-fit: cover;
border-radius: 50%;
padding: 5px;
background-color: ${globalColor.primaryColor};
transition: all 0.3s ease-in-out;

&:hover {
    transform: scale(1.01);
}
`;

export const AboutInfo = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
justify-content: space-between;
row-gap: 1rem;
column-gap: 15px;

@media (max-width: 965px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutInfoGroup = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
width: calc(30% - 5px);

.boldText{
    font-weight: 600;
    font-size: 17px;
    margin: 0;
}

@media (max-width: 965px) {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    row-gap: 1rem;
    column-gap: 15px;
  }

  @media (max-width: 576px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    row-gap: 5px;
    column-gap: 0;

    .aboutText {
    text-align: center;
    }
  }
`;

export const AboutLabel = styled.p`
font-size: 16px;
margin: 0 0 5px;
text-align: start;
font-weight: 500;

@media (max-width: 576px) {
    margin: 0;
    line-height: 0.7;
  }
`;

export const AboutLink = styled.a`
text-decoration: none;
transition: all 0.3s ease-in-out;
${hoverEffect()}

@media (max-width: 576px) {
    text-align: center;
    word-break: break-word;
  }
`;
