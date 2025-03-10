import { useEffect, useState } from "react";
import AllBooks from "../components/Books/AllBooks";
import Recommend from "../components/Books/Recommend";
import Hero from "./Hero";
import GetStartedCard from "../components/getStarted/GetStartedCard";
import OnScreenSearch from "../components/Search/OnScreenSearch";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchBar } from "../features/searchState/searchSlice";




function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const searchVisible = useSelector(state => state.search.isVisible);
  const dispatch = useDispatch();

  const renderContent = () => {
    switch (activeTab) {
      case "all":
        return <AllBooks />;
      case "most-read":
        return <Recommend />;
      default:
        return <AllBooks />;
    }
  };

  const getButtonClass = (tab) => {
    const baseClasses = "rounded-sm py-2"; 
    const activeClass = activeTab === tab ? "active-button-class" : "inactive-button-class";
    return `${baseClasses} ${activeClass}`;
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        dispatch(toggleSearchBar())
      }
    };
    document.addEventListener("keydown", handleKeyDown);
  
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  
  

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
            Books
          </button>
          <button
            onClick={() => setActiveTab("most-read")}
            className={getButtonClass("most-read")}
          >
            Recommend 
          </button>
          </div>
        </nav>
        <div>{renderContent()}</div>
        {searchVisible && <OnScreenSearch />}
      </section>
    </main>
  );
}

export default Home;
