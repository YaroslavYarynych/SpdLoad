import { styled } from 'styled-components';
import { LogoText } from '../../atoms/titleText/LogoText.js';
import { ArrowScrollDown } from '../../atoms/arrow-scroll-down/ArrowScrollDown.js';
import { LogoBigText } from '../../atoms/titleText/LogoBigText.js';

const LogoTextContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 0;
  height: 100%;
  z-index: 20;
  pointer-events: none;
`

export const MainText = () => (
  <LogoTextContainer>
    <LogoText />
    <LogoBigText />
    <ArrowScrollDown />
  </LogoTextContainer>
);