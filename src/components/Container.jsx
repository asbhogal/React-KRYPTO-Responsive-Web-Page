import leftHeroImg from "../assets/images/HeroImg";

const Container = () => {
    return (
        <main className="MainContainer">
            <section className="HeroSection">
                <div className="TopContent">
                    <div className="LeftSideContent">
                        <h1 className="SiteHeadingOne">discover and collect rate NFTs</h1>
                        <p className="SiteHeroParagraph">the most secure marketplace for buying and selling unique crypto assets</p>
                        <button className="CTAButton">BUY NFTS</button>
                        <button className="SellNFTsCTAButton">SELL NFTS</button>
                    </div>
                    <div className="RightSideContent"></div>
                </div>
                <div className="FeaturedOnContent">
                    <p className="FeaturedOnTitle">Featured on</p>
                    <div className="FeaturedOnLogos">

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