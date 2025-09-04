'use client'
import { useState } from "react";
import Overview from "./overview-tab";
import { InterviewHistoryItem } from "../types";
import PerformanceTab from "./performance-tab";
import HistoryTab from "./history-tab";
import SettingsTab from "./setting-tab";
import PracticeTab from "./practice-tab";

function MainContent() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [interviewHistory, setInterviewHistory] = useState<InterviewHistoryItem[]>([
    {
      id: 1,
      date: "Sep 3, 2024",
      topic: "Technical Interview",
      score: "85%",
      feedbackSummary:
        "Strong technical knowledge, but work on concise answers.",
    },
    {
      id: 2,
      date: "Sep 1, 2024",
      topic: "Behavioral Questions",
      score: "92%",
      feedbackSummary: "Excellent communication and storytelling. Keep it up!",
    },
    {
      id: 3,
      date: "Aug 29, 2024",
      topic: "Product Manager Role",
      score: "78%",
      feedbackSummary:
        "Need to structure your answers using frameworks like STAR.",
    },
  ]);

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <Overview interviewHistory={interviewHistory}/>
        );
      case "Practice":
        return (
          <PracticeTab />
        );
      case "Performance":
        return (
          <PerformanceTab />
        );
      case "History":
        return (
          <HistoryTab interviewHistory={interviewHistory} />
        );
      case "Settings":
        return (
          <SettingsTab />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {/* Dashboard Main Content */}

      <aside className="w-full md:w-64 mb-6 md:mb-0 md:mr-6 p-4 md:p-6 bg-[#1a1a1a] rounded-xl shadow-lg">
        <h2 className="text-lg font-bold mb-4">Menu</h2>
        <ul>
          <li
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              activeTab === "Overview"
                ? "bg-teal-500 text-black font-semibold"
                : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Overview")}
          >
            Overview
          </li>
          <li
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              activeTab === "Practice"
                ? "bg-teal-500 text-black font-semibold"
                : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Practice")}
          >
            Start Interview
          </li>
          <li
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              activeTab === "Performance"
                ? "bg-teal-500 text-black font-semibold"
                : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Performance")}
          >
            Performance
          </li>
          <li
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              activeTab === "History"
                ? "bg-teal-500 text-black font-semibold"
                : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("History")}
          >
            Interview History
          </li>
          <li
            className={`py-2 px-4 rounded-lg cursor-pointer ${
              activeTab === "Settings"
                ? "bg-teal-500 text-black font-semibold"
                : "hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("Settings")}
          >
            Settings
          </li>
        </ul>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 bg-[#1a1a1a] rounded-xl shadow-lg p-4 md:p-6">
        {renderContent()}
      </div>
    </>
  );
}

export default MainContent;
