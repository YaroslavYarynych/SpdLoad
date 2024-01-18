import { favouritesPageState } from '../../../store/selector.js';
import { ProductCard } from '../../molecules/productCard/ProductCard.js';
import { styled } from "styled-components";
import { useRecoilValue } from 'recoil';


export const FavouritesProduct = () => {
  const FavContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  width: 100%;
`
  const dataInFavourites = useRecoilValue(favouritesPageState);

  return (
    <FavContainer>
			{dataInFavourites && (
				dataInFavourites.map((data) => (
					<ProductCard item={data} loader={false} />
				))
			)}
    </FavContainer>
  )
}