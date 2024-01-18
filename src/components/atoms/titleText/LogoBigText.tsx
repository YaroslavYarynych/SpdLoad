import { styled } from 'styled-components';

export const LogoBigText = () => {
    
  const LogoBigText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 80px;
    font-weight: 800;
    text-align: center;
    color: #fff;
    position: relative;
    left: -7px;
    top: 42.5px;
    right: 0;
    margin-right: auto;
    margin-left: auto;
    @media (min-width: 360px) {
      font-size: 90px;
      left: -9px;
      top: 72px;
  
    }
    @media (min-width: 438px) {
      font-size: 120px;
      left: -27px;
      top: 40px;
  
    }
    @media (min-width: 678px) {
      font-size: 150px;
      left: -22px;
      top: 20px;
    }
    @media (min-width: 830px) {
      font-size: 150px;
      left: -22px;
      top: 65px;
    }
  
    @media (min-width: 1200px) {
      font-size: 300px;
      left: 0;
      top: -40px;
    }
  `

  return (
    <LogoBigText>YOU</LogoBigText>
  )
}