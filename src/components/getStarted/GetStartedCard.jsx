import { Link, useNavigate } from "react-router-dom";
import feedback from "../../assets/images/feedback.png";
import read from "../../assets/images/read.png";
import readgoal from "../../assets/images/reading_goal.svg";
import { useAuth0 } from "@auth0/auth0-react";


const cardData = [
  {
    imgSrc: feedback,
    title: "Book Recommendations",
    description:
      "Explore a curated list of book recommendations from users of bookworm.",
    link: "dashboard"
  },
  {
    imgSrc: read,
    title: "Track Your Reading",
    description:
      "Keep a log of your reading activities and stay motivated with personalized stats.",
    link: "/dashboard/favorites"
  },
  {
    imgSrc: readgoal,
    title: "Set Reading Goals",
    description:
      "Set and achieve your reading goals with our customizable goal-setting features.",
    link: "dashboard"
  },
];

const GetStartedCard = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const navigate = useNavigate()
  
  return (
    <section className="flex justify-between flex-wrap gap-4 mt-4 mb-4">
      {cardData.map((card, index) => (
        <div onClick={()=> (isAuthenticated? navigate(card.link): loginWithRedirect())} to={isAuthenticated? card.link : loginWithRedirect} key={index} className="w-full max-w-sm">
          <li
            className="flex gap-4 bg-custom-gray rounded-md p-4 shadow-sm hover:shadow-lg transition-shadow duration-300 opacity-90"
          >
            <img
              className="w-24 h-24 rounded-md"
              src={card.imgSrc}
              alt=""
            />
            <div className="flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-custom-yellow">{card.title}</h2>
              <p className="text-sm leading-relaxed tracking-wide opacity-70">{card.description}</p>
            </div>
          </li>
        </div>
      ))}
    </section>
  );
};

export default GetStartedCard;
