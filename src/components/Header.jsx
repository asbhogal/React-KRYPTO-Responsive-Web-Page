import brandLogo from "../assets/logos/krypto.svg";

const Header = () => {
    return (
        <header className="Header">
            <img src={ brandLogo }></img>
            <nav className="HeaderNav">
                <ul className="HeaderNavList">
                    <li className="HeaderNavListItem">about</li>
                    <li className="HeaderNavListItem">pricing</li>
                    <li className="HeaderNavListItem">contact</li>
                </ul>
                <button className="CTAButton">
                    <span className="AnimatedPulseFront"></span>
                    <span className="AnimatedPulseBack"></span>
                    <p className="CTAName">buy nfts</p>
                </button>
            </nav>
        </header>
    )
};

export default Header;