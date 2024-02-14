import { useState } from "react";
import Overview from "../Components/Ui/About/Overview";
import Education from "../Components/Ui/About/Education";
import Contact from "../Components/Ui/About/Contact";
import Place from "../Components/Ui/About/Place";
import Relationship from "../Components/Ui/About/Relationship";
import You from "../Components/Ui/About/You";

const About = () => {
  const [tab, setTab] = useState("Overview");
  const tabItems = [
    "Overview",
    "Education",
    "Contact",
    "Place",
    "Relationship",
    "You",
  ];
  
  const renderTabContent = () => {
    switch (tab) {
      case "Overview":
        return <Overview />;
      case "Education":
        return <Education />;
      case "Contact":
        return <Contact />;
      case "Place":
        return <Place />;
      case "Relationship":
        return <Relationship />;
      case "You":
        return <You />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center lg:flex-row my-4 gap-3">
      {/* sidebar */}
      <div className="flex flex-col gap-2 w-full">
        {tabItems.map((item, i) => (
          <button
            onClick={() => setTab(item)}
            key={i}
            className={`${
              tab === item
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-800"
            } font-semibold py-2 px-14 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
          >
            {item}
          </button>
        ))}
      </div>
      {/* contents */}
      <div className="w-full">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default About;
