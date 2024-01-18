/* eslint-disable */
import { HeaderNavItem } from "../../../utils/types.js";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components"

const ListStyle = styled.ul`
	display: flex;
	gap: 32px;
	font-size: 16px;
	font-weight: 500;
	line-height: 20px;
	list-style-type: none;
	text-transform: uppercase;
`;
const ListItemStyle = styled.li`
	cursor: pointer;
`

const StyledLink = styled(NavLink)`
	text-decoration: none;
	color: #fff;

	&:hover {
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2)
	}
	&.active {
	text-underline-offset: 4px;
		text-decoration: underline;
	z-index: 10000;
}



`;

export const NavigationBar = () => (
  <nav>
	  <ListStyle>
      {Object.values(HeaderNavItem).map(item => (
        <ListItemStyle>
          <StyledLink
            to={item === 'home' ? '/' : item} onClick={(event: { preventDefault: () => any }) => item !== 'home' && event.preventDefault()}>{item}</StyledLink>
        </ListItemStyle>
      ))}
    </ListStyle>
  </nav>
);