import rocketImageTwo from '../../../img/image-2.png';
import { styled } from "styled-components";

export const FavouritesLogo = () => {
  const FavTop = styled.div`
	width: 100%;
	position: relative;
	margin-bottom: 64px;
`

const LogoImage = styled.img`
	width: 100%;
	max-width: 100%;
	height: 350px;
	object-fit: cover;
`

const LogoText = styled.h1`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	text-transform: uppercase;
	color: #fff;
	font-weight: 800;
	font-size: 30px;
	line-height: 40px;
	@media (min-width: 678px) {
		font-size: 48px;
		line-height: 58px;
	}
	`
  return (
    <FavTop>
      <LogoImage src={rocketImageTwo} alt="" />
      <LogoText>Favourites</LogoText>
		</FavTop>
  )
}