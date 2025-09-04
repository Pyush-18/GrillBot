'use client'
import { useState } from "react";

function MainContent() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [interviewHistory, setInterviewHistory] = useState([
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
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Interview Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-400">
                  Total Interviews
                </h3>
                <p className="text-5xl font-extrabold text-teal-400 mt-2">15</p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-400">
                  Average Score
                </h3>
                <p className="text-5xl font-extrabold text-teal-400 mt-2">
                  88<span className="text-2xl">%</span>
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-400">
                  Next Practice
                </h3>
                <p className="text-xl font-bold mt-2">Resume-based Questions</p>
                <button className="mt-4 px-4 py-2 bg-teal-500 text-black rounded-full text-sm font-semibold hover:bg-teal-400 transition-colors">
                  Start Now
                </button>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Recent Feedback</h2>
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
                <ul className="divide-y divide-gray-700">
                  {interviewHistory.map((interview) => (
                    <li key={interview.id} className="py-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-lg font-medium">
                            {interview.topic}
                          </p>
                          <p className="text-sm text-gray-400">
                            {interview.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-teal-400">
                            {interview.score}
                          </p>
                          <p className="text-sm text-gray-400">Score</p>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-300">
                        <span className="font-semibold">Summary:</span>{" "}
                        {interview.feedbackSummary}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      case "Practice":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">
              Choose Your Interview Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Frontend Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-colors cursor-pointer">
                <h3 className="text-xl font-bold text-gray-200">
                  Frontend Developer
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Practice questions on HTML, CSS, JavaScript, and frameworks
                  like React.
                </p>
                <button className="mt-4 w-full px-4 py-2 bg-teal-500 text-black rounded-full text-sm font-semibold hover:bg-teal-400 transition-colors">
                  Start Practice
                </button>
              </div>

              {/* Backend Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-colors cursor-pointer">
                <h3 className="text-xl font-bold text-gray-200">
                  Backend Developer
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Focus on topics like APIs, databases, server-side logic, and
                  scalability.
                </p>
                <button className="mt-4 w-full px-4 py-2 bg-teal-500 text-black rounded-full text-sm font-semibold hover:bg-teal-400 transition-colors">
                  Start Practice
                </button>
              </div>

              {/* Data Analytics Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-colors cursor-pointer">
                <h3 className="text-xl font-bold text-gray-200">
                  Data Analyst
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Refine your skills in SQL, data visualization, and statistical
                  analysis.
                </p>
                <button className="mt-4 w-full px-4 py-2 bg-teal-500 text-black rounded-full text-sm font-semibold hover:bg-teal-400 transition-colors">
                  Start Practice
                </button>
              </div>

              {/* Full Stack Card */}
              <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-colors cursor-pointer">
                <h3 className="text-xl font-bold text-gray-200">
                  Full Stack Engineer
                </h3>
                <p className="mt-2 text-gray-400 text-sm">
                  Prepare for a mix of frontend, backend, and database-related
                  questions.
                </p>
                <button className="mt-4 w-full px-4 py-2 bg-teal-500 text-black rounded-full text-sm font-semibold hover:bg-teal-400 transition-colors">
                  Start Practice
                </button>
              </div>
            </div>
          </div>
        );
      case "Performance":
        return (
          <div className="p-6 text-center text-gray-400">
            <h2 className="text-2xl font-bold mb-4">Performance Analytics</h2>
            <p>Detailed performance analytics coming soon!</p>
          </div>
        );
      case "History":
        return (
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Full Interview History</h2>
            <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
              <ul className="divide-y divide-gray-700">
                {interviewHistory.map((interview) => (
                  <li key={interview.id} className="py-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg font-medium">{interview.topic}</p>
                        <p className="text-sm text-gray-400">
                          {interview.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-teal-400">
                          {interview.score}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      case "Settings":
        return (
          <div className="p-6 text-center text-gray-400">
            <h2 className="text-2xl font-bold mb-4">Settings</h2>
            <p>Manage your account and preferences here.</p>
          </div>
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
