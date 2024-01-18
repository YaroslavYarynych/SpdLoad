import { Link } from "react-router-dom";
import logo from '../../../img/icon-1.png';
import { styled } from "styled-components"

const LogoImage = styled.img`
  width: 220px
`

export const Logo = () => <Link to="/"><LogoImage src={logo} /></Link>;