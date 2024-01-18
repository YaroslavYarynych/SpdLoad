import { favourites } from '../../../store/atoms.js';
import { useResetRecoilState } from 'recoil';
import { styled } from "styled-components"


export const ClearButton = () => {
  const resetList = useResetRecoilState(favourites);	

  
	const ClearAll = styled.button`
	border: 0;
	margin: 0;
	padding: 0;
	background: transparent;
	color: #556B84;
	font-weight: 300;
	font-size: 24px;
	line-height: 28.8px;
	align-self: flex-end;
	margin-bottom: 40px;
	cursor: pointer;
	`


  return (
    <ClearAll onClick={resetList}>Clear all</ClearAll>
  );
}