import { useLocation } from "react-router-dom";
import { styled } from "styled-components"
import { SideBar } from "../../atoms/headerSideBar/SideBar.js";
import { NavigationBar } from "../../atoms/navigation/NavigationBar.js";
import { Logo } from "../../atoms/logo/Logo.js";
import './Header.scss';


export const Header = () => {
	const location = useLocation();

	const HeaderStyle = styled.header`
	position: fixed;
	margin: 0;
	padding: 0;
	width: 100%;
	max-width: 100%;
	font-weight: 400;
	font-family: 'Lato', sans-serif;
	background-color: #1E1E1E7A;
	color: white;
	z-index: 10000;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-around;
	padding: 13px 0;
	`;

    return (
    <HeaderStyle>
			<Logo />
			<NavigationBar />
			<SideBar location={location} />
    </HeaderStyle>
    )
}