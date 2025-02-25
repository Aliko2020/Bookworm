import { useState } from "react";
import AllBooks from "../components/Books/AllBooks";
import MostReadBooks from "../components/Books/MostRead";
import TopBooks from "../components/Books/TopBooks";
import Hero from "./Hero";
import { Link } from "react-router-dom";
import GetStartedCard from "../components/getStarted/GetStartedCard";


function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return <AllBooks />;
      case "most-read":
        return <MostReadBooks />;
      case "top-books":
        return <TopBooks />;
      default:
        return <AllBooks />;
    }
  };

  const getButtonClass = (tab) => {
    const baseClasses = "rounded-sm py-2"; 
    const activeClass = activeTab === tab ? "active-button-class" : "inactive-button-class";
    return `${baseClasses} ${activeClass}`;
  };

  return (
    <main className="flex flex-col gap-4 sm:ml-6">
      <Hero />
      <GetStartedCard />
      <section className="p-1">
        <nav className="flex justify-between text-[#3a7569] font-semibold items-center gap-4 w-auto rounded-lg mb-4">
          <div className="flex gap-4">
            <button
            onClick={() => setActiveTab("all")}
            className={getButtonClass("all")}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab("most-read")}
            className={getButtonClass("most-read")}
          >
            Most Read
          </button>
          <button
            onClick={() => setActiveTab("top-books")}
            className={getButtonClass("top-books")}
          >
            Top Books
          </button></div>
        </nav>
        <div>{renderContent()}</div>
      </section>
    </main>
  );
}

export default Home;
