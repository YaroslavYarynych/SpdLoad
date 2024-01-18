import { ProductSlider } from '../../molecules/productSlider/ProductSlider.js';
import SliderComponent from '../../molecules/mainSlider/SliderComponent.js';
import { styled } from 'styled-components';
import { MainText } from '../../molecules/mainTextTitile/MainText.js';

export const HomePage = () => {

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
  `;

    return (
      <HomeContainer>
        <SliderContainer>
          <SliderComponent />
          <MainText />
        </SliderContainer>
        <ProductSlider />
      </HomeContainer>
    )
}