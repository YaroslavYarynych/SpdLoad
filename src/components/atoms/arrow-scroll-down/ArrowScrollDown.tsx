import { styled } from 'styled-components';
import arrow from '../../../img/arrow.svg';

const Container = styled.div`
	width: fit-content;
  margin: 0 auto;
	display: flex;
	pointer-events: auto;
  justify-content: center;
  align-items: center;
	gap: 8px;
	position: relative;
	cursor: pointer;
	top: 200px;

	@media (min-width: 678px) {
		top: 162px;
	}
	@media (min-width: 830px) {
		top: 205px;
	}

	@media (min-width: 1200px) {
		top: 10px;
	}

`;

const Paragraph = styled.p`
  font-size: 32px;
  font-weight: 400;
  font-family: 'Lato', sans-serif;
  color: #fff;
	line-height: 38px;
	-webkit-text-stroke-width: 1px; 
	-webkit-text-stroke-color: black; 
	z-index: 7000;
`;

const LinkToBottom = styled.a`
	display: block;
	margin: 0;
	padding: 0;
`;

export const ArrowScrollDown = () => (
  <Container onClick={() => {window.scrollTo({top: 1200, behavior: "smooth"})}}>
    <Paragraph>Explore tours</Paragraph>
      <LinkToBottom>
				<img src={arrow} alt=""  />
			</LinkToBottom>	
  </Container>
);