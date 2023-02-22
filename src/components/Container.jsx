import backgroundBlurObject2 from "../assets/images/BackgroundEllipse.png";
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
        <div className="BackgroundBlurObject1"></div>
        <img className="BackgroundBlurObject2" src={ backgroundBlurObject2 }></img>
            <section className="HeroSection">
                <div className="TopContent">
                    <div className="LeftSideContent">
                        <h1 className="SiteHeadingOne">discover and collect <span className="AccentColor">rare</span> NFTs</h1>
                        <p className="SiteHeroParagraph">the most secure marketplace for buying and selling unique crypto assets</p>
                        <div className="Buttons">
                            <button className="CTAButton">BUY NFTS</button>
                            <button className="SellNFTsCTAButton">SELL NFTS</button>
                        </div>
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
            <section className="AnalyticsSection">
                <div className="LeftSideContent">
                    <img className="AnalyticsImg" src={ analyticsImg }></img>
                </div>
                <div className="RightSideContent">
                    <p className="SubtitleContent">analytics</p>
                    <h2 className="AnalyticsHeading">built-in analytics to track your NFTs</h2>
                    <p className="AnalyticsContent">Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time</p>
                    <button className="PricingButton">VIEW OUR PRICING</button>
                </div>
            </section>
            <section className="AppSection">
                <div className="LeftSideContent">
                    <p className="SubtitleContent">get our app</p>
                    <h2 className="AppHeading">browse NFTs from your smartphone</h2>
                    <p className="AppContent">Our Krypto app is the easiest way to keep track of your assets when you’re on the go</p>
                    <button className="AppButton">DOWNLOAD ON iOS</button>
                </div>
                <div className="RightSideContent">
                    <img className="AppImg" src={ appImg }></img>
                </div>
            </section>
            <section className="SellSection">
                <div className="LeftSideContent">
                    <img className="SellImg" src={ sellImg }></img>
                </div>
                <div className="RightSideContent">
                    <p className="SubtitleContent">24&#47;7 access</p>
                    <h2 className="SellHeading">sell your NFTs from anywhere at any time</h2>
                    <p className="SellContent">With our easy-to-use platform, you can buy or sell assets from anywhere in the world, at any time</p>
                    <button className="SellButton">GET STARTED</button>
                </div>
            </section>
            <section className="TestimonialSection"></section>
            <section className="CTASection">
                
            </section>
        </main>
    )
};

export default Container;