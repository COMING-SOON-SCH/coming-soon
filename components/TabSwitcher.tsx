import React, { useState } from "react";

type Tab = {
  name: string;
  content: JSX.Element;
};

const TabSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("Front-End");

  const tabs: Tab[] = [
    { name: "Web Basic", content: <div>{""}</div> },
    { name: "Git & Github", content: <div>{""}</div> },
    { name: "Front-End", content: <div>{""}</div> },
    { name: "Back-End", content: <div>{""}</div> },
  ];

  return (
    <div>
      <div className="flex justify-center space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`py-2 px-4 focus:outline-none ${
              activeTab === tab.name ? "border-b-4 border-blue-600" : ""
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>
        {tabs
          .filter((tab) => tab.name === activeTab)
          .map((tab) => (
            <div key={tab.name}>{tab.content}</div>
          ))}
      </div>
    </div>
  );
};

export default TabSwitcher;
