import { Link } from "react-router-dom";
import Banner from "/public/banner.png";


function Hero() {
    return (
        <section
            style={{ height: '50vh' }}
            className="flex flex-col justify-between lg:flex-row gap-4 items-center font-roboto mt-10"
        >
            <div className="flex flex-wrap gap-2 justify-between p-4 max-w-2xl">
                <h1 className="text-3xl opacity-70">Welcome to Book Haven</h1>
                <p className="opacity-60 leading-relaxed tracking-wide">
                    Your one-stop destination for discovering and enjoying the best reads. Explore our curated lists of best-selling and most-read books, add your favorites to your cart, and create your personalized "Next on Read" list. Purchase books easily and have them delivered straight to your email.
                </p>
                <Link to="login" className="px-6 p-2 bg-custom-yellow text-gray-500 rounded-sm">Get Started</Link>
            </div>
            <img src={Banner} alt="Book Cover" className="object-cover" />
        </section>
    );
}

export default Hero;
