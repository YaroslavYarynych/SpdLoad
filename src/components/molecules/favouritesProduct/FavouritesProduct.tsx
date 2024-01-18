import { ProductCard } from '../../molecules/productCard/ProductCard.js';
import { styled } from "styled-components";
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { favourites } from '../../../store/atoms.js';

const FavContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 15px;
width: 100%;
`

export const FavouritesProduct = () => {
	const [data, setData] = useRecoilState(favourites);

  useEffect(() => {
    const storedItems = localStorage.getItem('rockets');

    if (storedItems) {
      const items = JSON.parse(storedItems);
			setData(items);
    }

	}, []);

  return (
    <FavContainer>
			{data && (
				data.map((data) => (
					<ProductCard item={data} loader={false} />
				))
			)}
    </FavContainer>
  )
}