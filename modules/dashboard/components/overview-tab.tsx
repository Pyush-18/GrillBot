import React from "react";
import { InterviewHistoryItem } from "../types";

function Overview({interviewHistory}: {interviewHistory: InterviewHistoryItem[]}) {
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
          <h3 className="text-lg font-semibold text-gray-400">Average Score</h3>
          <p className="text-5xl font-extrabold text-teal-400 mt-2">
            88<span className="text-2xl">%</span>
          </p>
        </div>
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold text-gray-400">Next Practice</h3>
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
                    <p className="text-lg font-medium">{interview.topic}</p>
                    <p className="text-sm text-gray-400">{interview.date}</p>
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
}

export default Overview;
