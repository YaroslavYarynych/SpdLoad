import { ProductSlider } from '../../molecules/productSlider/ProductSlider.js';
import SliderComponent from '../../molecules/mainSlider/SliderComponent.js';
import { styled } from 'styled-components';
import { MainText } from '../../molecules/mainTextTitile/MainText.js';

const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
`

const SliderContainer = styled.div`
  width: 100%;
`

export const HomePage = () => (
  <HomeContainer>
    <SliderContainer>
      <SliderComponent />
      <MainText />
    </SliderContainer>
    <ProductSlider />
  </HomeContainer>
);
