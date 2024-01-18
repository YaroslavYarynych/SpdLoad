import { styled } from "styled-components"
import rocketImageOne from '../../../img/image-1.png'
import rocketImageTwo from '../../../img/image-2.png'
import rocketImageThree from '../../../img/image-3.png'
import { favourites } from "../../../store/atoms.js"
import heart from '../../../img/heart.svg';
import deleteIcon from '../../../img/deleteIcon-1.png';

import { useRecoilState } from "recoil";
import { FavoritesProps, Rocket } from "../../../utils/types.js"
import { useEffect } from "react"

type Props = {
	item: Rocket,
	loader: boolean
}

const rocketImages = {
  'Falcon 1': rocketImageOne,
  'Falcon 9': rocketImageTwo,
  'Falcon Heavy': rocketImageThree,
  'Starship': rocketImageOne,
};


export const ProductCard: React.FC<Props> = ({ item, loader }) => {
	const [data, setData] = useRecoilState(favourites);

	const handleAdd = (item: Rocket) => {
		setData((current) => [...current, item]);
	};

	useEffect(() => {
		localStorage.setItem('rockets', JSON.stringify(data));
	}, [data]);

	const handleDelete = (itemId: string) => setData(data.filter((dataItem) => dataItem.id !== itemId));	

	const isInFav =  (id: string) => data.find(d => d.id === id);


	const CardContainer = styled.div`
	width: 400px;
	max-width: 100%;
	`

	const Image = styled.img`
	width: 100%;
	height: 296px;
	object-fit: cover;
	margin-bottom: 22px;
	
	@media (min-width: 768px) {
  	margin-bottom: 32px;
    }
	`

	const CardTitle = styled.p`
	font-weight: 700;
	font-size: 18px;
	line-height: 19px;
	text-align: center;
	text-transform: uppercase;
	margin-bottom: 16px;
	padding: 0px 32px;

	@media (min-width: 768px) {
  font-size: 24px;
	line-height: 29px;
    }

		@media (min-width: 1000px) {
			font-size: 18px;
			line-height: 19px;
		}

		@media (min-width: 1200px) {
			font-size: 24px;
			line-height: 29px;
		}
	`

	const CardDescription = styled.p`
	font-family: 'Lato', sans-serif;
	font-weight: 300;
	font-size: 18px;
	line-height: 23px;
	height: 50px;
	text-align: center;
	color: #556B84;
	padding: 0px 32px;
	margin-bottom: 32px;
	overflow: hidden;


	@media (min-width: 768px) {
		font-size: 24px;
		height: 100px;
		line-height: 29px;
		margin-bottom: 64px;
		}
	`

	const CardBtnContainer = styled.div`
	padding: 0px 32px 24px;
	gap: 10px;
	display: flex;
	justify-content: center;
	
	@media (min-width: 768px) {
		gap: 16px;
		}
	`;

	const CardBuyBtn = styled.button`
	border: 0;
	display: block;
	font-weight: 600;
	font-size: 18px;
	line-height: 23px;
	text-align: center;
	cursor: pointer;
	background-color: #D3EAFF;
	padding: 12px 50px;
	z-index: 7000;
	flex-shrink: 0;

	@media (min-width: 768px) {
		font-size: 24px;
		line-height: 29px;
		margin-bottom: 64px;
		padding: 12px 100px;
		}

		@media (min-width: 1000px) {
			font-size: 24px;
			line-height: 29px;
			margin-bottom: 64px;
			padding: 12px 40px;
			}

		@media (min-width: 1200px) {
			padding: 12px 50px;
			}

		@media (min-width: 1400px) {
			padding: 12px 100px;
			}

	`

	const Favorites = styled.button<FavoritesProps>`
	border: 0;
	margin: 0;
	padding: 0;
	width: 53px;
	height: 53px;
	background-color: #ECECEC;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	z-index: 7000;
	${(props) =>
		props.isDelete &&
		`
		background-color:  #DD377D;
		`}
	
`

const FavoritesIcon = styled.img`
	width: 24px;
	height: 24px;
`

	return (
		<CardContainer>
			<Image 
				src={rocketImages[item.name as keyof typeof rocketImages] || rocketImageOne}
				alt=""
			/>
			<div>
				<CardTitle>{loader ? 'Loading...' : 'extraordinary tour'}</CardTitle>
				<CardDescription>{loader ? 'Loading' : item.description.slice(0, 50)}...</CardDescription>
				<CardBtnContainer>
					<CardBuyBtn>Buy</CardBuyBtn>
						{isInFav(item.id) ? (
							<Favorites onClick={() => handleDelete(item.id)} isDelete={true} >
							<FavoritesIcon src={deleteIcon} alt="" />	
							</Favorites>
						) : (
							<Favorites onClick={() => handleAdd(item)} isDelete={false}>
							<FavoritesIcon src={heart} alt="" />
							</Favorites>
						)}
					</CardBtnContainer>
			</div>
		</CardContainer>	
	)
}
