import { Link } from "react-router-dom";
import logo from '../../../img/icon-1.png';
import { styled } from "styled-components"

export const Logo = () => {
  const Logo = styled.img`
	width: 220px
`
  return (
  <Link to="/"><Logo src={logo} /></Link>
  )
}