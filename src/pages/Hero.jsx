import Banner from "/banner2.png";
import { useAuth0 } from "@auth0/auth0-react";


function Hero() {

    return (
        <section
            className="flex flex-col lg:flex-row gap-4 font-roboto"
        >
            <div className="flex flex-col justify-center gap-2 p-2 max-w-2xl opacity-70">
                <h1 className="text-2xl">Book Haven</h1>
                <p className="leading-relaxed tracking-wide">
                    Your one-stop destination for discovering and enjoying the best reads. Explore our curated lists of best-selling and most-read books, add your favorites to your cart, and create your personalized "Next on Read" list. Purchase books easily and have them delivered straight to your email.
                </p>

                <p className="leading-relaxed tracking-wide">
                    Your one-stop destination for discovering and enjoying the best reads. Explore our curated lists of best-selling and most-read books, add your favorites to your cart, and create your personalized "Next on Read" list. Purchase books easily and have them delivered straight to your email.
                </p>
            </div>
                <img src={Banner} alt="Book Cover" className="max-w-md" />
        </section>
    );
}

export default Hero;
