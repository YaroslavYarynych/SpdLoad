import whiteHeart from '../../../img/whiteHeart.svg';
import heart from '../../../img/heart.svg';
import { styled } from "styled-components"
import { Link, Location } from "react-router-dom";

type Props = {
  location: Location
}

export const SideBar:React.FC<Props> = ({ location }) => {
  
const BtnContainer = styled.div`
display: flex;
gap: 12px;
`

const Favorites = styled.div<{ isActive: boolean }>`
width: 53px;
height: 53px;
background-color: #ECECEC;
display: flex;
justify-content: center;
align-items: center;
${(props) =>
  props.isActive && `
  background-color: #DD377D;
  `}
`;

const FavoritesIcon = styled.img`
width: 24px;
height: 24px;
cursor: pointer;
`;

const ButtonStyles = styled.button`
padding: 12px 32px;
border: 0;
background-color: #D3EAFF;
color: #000;
font-weight: 600;
font-size: 24px;
line-height: 29px;
cursor: pointer;
text-transform: uppercase;
`;

  return (
    <BtnContainer>
      <Link to="favourites">
        <Favorites isActive={location.pathname === "/favourites"}>
          <FavoritesIcon src={location.pathname === "/favourites" ? whiteHeart : heart} alt="" />
        </Favorites>
      </Link>
      <ButtonStyles>Sign in</ButtonStyles>
    </BtnContainer>
  )

};