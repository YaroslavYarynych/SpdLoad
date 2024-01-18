import { styled } from "styled-components";
import { ClearButton } from '../../atoms/clearButton/ClearButton.js';
import { FavouritesProduct } from '../../molecules/favouritesProduct/FavouritesProduct.js';
import { FavouritesLogo } from '../../molecules/favouritesLogo/FavouritesLogo.js';

export const Favourites = () => {
	const FavBody = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 80px;
	`
  
	return (
		<div>
      <FavouritesLogo />
      <FavBody>
        <ClearButton />
				<FavouritesProduct />
      </FavBody>
    </div>
  );
}