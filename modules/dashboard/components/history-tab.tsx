import React from "react";
import { InterviewHistoryItem } from "../types";

function HistoryTab({interviewHistory}: {interviewHistory: InterviewHistoryItem[]}) {
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
                  <p className="text-sm text-gray-400">{interview.date}</p>
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
}

export default HistoryTab;
