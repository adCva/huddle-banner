import { NavContainer, BannerLogo } from "./NavStyle";

const Nav = (props) => {
    return (
        <NavContainer>
            <BannerLogo src={props.logo} alt="Logo"/>
        </NavContainer>
    )
}

export default Nav;