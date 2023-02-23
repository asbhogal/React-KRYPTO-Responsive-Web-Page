import kryptoLogo from '../assets/logos/krypto.svg';

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="LeftFooterColumn">
                <img className="KryptoLogo" src={ kryptoLogo } alt="The Brand logo, all in uppercase and in white bold lettering"></img>
            </div>
            <div className="MiddleFooterColumn">
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">krypto</li>
                    <li className="FooterItem-1">home</li>
                    <li className="FooterItem-2">about</li>
                    <li className="FooterItem-3">buy nfts</li>
                    <li className="FooterItem-4">sell nfts</li>
                </ul>
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">market</li>
                    <li className="FooterItem-1">browse nfts</li>
                    <li className="FooterItem-2">buy nfts</li>
                    <li className="FooterItem-3">sell nfts</li>
                </ul>
                <ul className="FooterMenu">
                    <li className="FooterMenuTitle">contact</li>
                    <li className="FooterItem-1">email</li>
                    <li className="FooterItem-2">linkedin</li>
                    <li className="FooterItem-3">instagram</li>
                    <li className="FooterItem-3">twitter</li>
                </ul>
            </div>
            <div className="RightFooterColumn NewsletterSignUp">
                <p className='NewsletterSignUpText'>join our newsletter</p>
                <div className='NewsletterSignUpForm'>
                    <input className="NewsletterSignUpInput" placeholder="email address"></input>
                    <button className="NewsletterSignUpButton">submit</button>
                </div>
            </div>
        </footer>
    )
};

export default Footer;