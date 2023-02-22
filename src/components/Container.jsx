import heroImg from "../assets/images/HeroImg.png";
import analyticsImg from "../assets/images/AnalyticsImg.png";
import appImg from "../assets/images/AppImg.png";
import sellImg from "../assets/images/SellImg.png";
import techCrunchLogo from "../assets/logos/TechCrunchLogo.svg";
import fastCompanyLogo from "../assets/logos/FastCompanyLogo.svg";
import companyLogo from "../assets/logos/CompanyLogo.svg";
import forbesLogo from "../assets/logos/ForbesLogo.svg";

const Container = () => {
    return (
        <main className="MainContainer">
            <section className="HeroSection">
                <div className="TopContent">
                    <div className="LeftSideContent">
                        <h1 className="SiteHeadingOne">discover and collect <span className="AccentColor">rare</span> NFTs</h1>
                        <p className="SiteHeroParagraph">the most secure marketplace for buying and selling unique crypto assets</p>
                        <button className="CTAButton">BUY NFTS</button>
                        <button className="SellNFTsCTAButton">SELL NFTS</button>
                    </div>
                    <div className="RightSideContent">
                        <div className="RightSideImg">
                            <img src={ heroImg }></img>
                        </div>
                    </div>
                </div>
                <div className="FeaturedOnContent">
                    <p className="FeaturedOnTitle">Featured on</p>
                    <div className="FeaturedOnLogos">
                        <img src={ techCrunchLogo }></img>
                        <img src={ fastCompanyLogo }></img>
                        <img src={ companyLogo }></img>
                        <img src={ forbesLogo }></img>
                    </div>
                </div>
            </section>
            <section className="AnalyticsSection"></section>
            <section className="AppSection"></section>
            <section className="SellNFTSection"></section>
            <section className="TestimonialSection"></section>
            <section className="CTASection">
                
            </section>
        </main>
    )
};

export default Container;