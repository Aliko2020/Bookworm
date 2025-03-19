import { Link, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import track from "../../assets/images/track.png";
import read from "../../assets/images/read.png";
import feedback from "../../assets/images/feedback.png";

const cardData = [
  {
    image: read,
    title: "Recommendations",
    description:
      "Explore a list of book recommendations from users of bookworm.",
    link: "dashboard",
  },
  {
    image: track,
    title: "Track Your Reading",
    description:
      "Keep a log of your reading activities and stay motivated with personalized stats.",
    link: "/dashboard/favorites",
  },
  {
    image: feedback,
    title: "Set Reading Goals",
    description:
      "Set and achieve your reading goals with our customizable goal-setting features.",
    link: "dashboard",
  },
];

const GetStartedCard = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  return (
    <section className="flex flex-wrap justify-between gap-4  mt-4 mb-4">
      {cardData.map((card, index) => (
        <div
          onClick={() =>
            isAuthenticated ? navigate(card.link) : loginWithRedirect()
          }
          key={index}
          className="flex items-center w-full lg:max-w-md bg-custom-gray rounded-md p-4 shadow-sm gap-4"
        >
          <img src={card.image} alt={card.title} className="max-w-24 opacity-50" />
          <li className="flex gap-4  cursor-pointer hover:shadow-lg transition-shadow duration-300 opacity-90">
            <div className="flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-custom-yellow">
                {card.title}
              </h2>
              <p className="text-sm leading-relaxed tracking-wide opacity-70">
                {card.description}
              </p>
            </div>
          </li>
        </div>
      ))}
    </section>
  );
};

export default GetStartedCard;
