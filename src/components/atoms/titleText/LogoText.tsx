import { styled } from 'styled-components';

const LogoTextTitle = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
  margin-top: 230px;
  padding: 0;
  color: #fff;
  @media (min-width: 440px) {
    font-size: 36px;
  }
  @media (min-width: 1200px) {
    font-size: 48px;
  }
`

export const LogoText = () => <LogoTextTitle>The space is waiting for</LogoTextTitle>;