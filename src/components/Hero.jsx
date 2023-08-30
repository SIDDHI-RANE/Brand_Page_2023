import amazon from '../assets/images/amazon.png';

import flipcart from '../assets/images/flipkart-thumbnail.png';
import shoes from '../assets/images/shoes.png';

const HeroSection = () => {
    return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p> YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH 
                OUR 
                SHOES.
            </p>

            <div className="hero-btn">
                <button className="secondary-btn">Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
            </div>

            <div className="brand-icons">
                <img src={amazon}   alt="amazon-logo"/>
                <img src={flipcart} alt="flipcart-logo"/>
            </div>

        </div>
        <div className="hero-image">
            <img src={shoes} alt="shoes-image"/>

            
        </div>
    </main> )
};

export default HeroSection;