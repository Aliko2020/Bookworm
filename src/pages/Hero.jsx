import Banner from "../assets/images/banner2.png";
import momo from "../assets/images/momo.png"


function Hero() {

    return (
        <section
            className="flex flex-col lg:flex-row gap-4 font-roboto"
        >
            <div className="flex flex-col justify-center gap-2 p-2 max-w-2xl">
                <h1 className="text-2xl font-simibold text-[#3a7569]">Book Haven</h1>
                <p className="leading-relaxed tracking-wide opacity-70">
                    Your one-stop destination for discovering and enjoying the best reads. Explore our curated lists of best-selling and most-read books, add your favorites to your cart, and create your personalized "Next on Read" list. Purchase books easily and have them delivered straight to your email.
                </p>

                <p className="leading-relaxed tracking-wide opacity-70">
                    Your one-stop destination for discovering and enjoying the best reads. Explore our curated lists of best-selling and most-read books, add your favorites to your cart, and create your personalized "Next on Read" list. Purchase books easily and have them delivered straight to your email.
                </p>
            </div>
                <img src={momo} alt="Book Cover" className="max-w-md" />
        </section>
    );
}

export default Hero;
