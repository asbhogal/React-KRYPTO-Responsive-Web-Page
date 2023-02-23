import { useState } from "react";
import brandLogo from "../assets/logos/krypto.svg";

const Header = () => {

    const   [active, setActive] = useState("HeaderNavList"),
            [toggle, setToggle] = useState("NavbarToggle");

    const   navToggle = () => {
        active === "HeaderNavList" 
        ? setActive("HeaderNavList NavActive") 
        : setActive("HeaderNavList");

        toggle === "NavbarToggle" 
        ? setToggle("NavbarToggle ToggleActive") 
        : setToggle("NavbarToggle");
    }

    return (
        <header className="Header">
            <img src={ brandLogo }></img>
            <nav className="HeaderNav">
                <ul className={ active }>
                    <li className="HeaderNavListItem">about</li>
                    <li className="HeaderNavListItem">pricing</li>
                    <li className="HeaderNavListItem">contact</li>
                </ul>

                <button className={ toggle } onClick={ navToggle }>
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                    <span className="ToggleLine"></span>
                </button>
            </nav>
            <button className="CTAButton">
                <span className="AnimatedPulseFront"></span>
                <span className="AnimatedPulseBack"></span>
                <p className="CTAName">buy nfts</p>
            </button>
        </header>
    )
};

export default Header;