import React from "react";

function PracticeTab() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Choose Your Interview Type</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Frontend Card */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-colors cursor-pointer">
          <h3 className="text-xl font-bold text-gray-200">
            Frontend Developer
          </h3>
          <p className="mt-2 text-gray-400 text-sm">
            Practice questions on HTML, CSS, JavaScript, and frameworks like
            React.
          </p>
          <button className="mt-4 w-full px-4 py-2 bg-teal-500 text-black rounded-full text-sm font-semibold hover:bg-teal-400 transition-colors">
            Start Practice
          </button>
        </div>

        {/* Backend Card */}
        <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-lg border border-gray-700 hover:border-teal-500 transition-colors cursor-pointer">
          <h3 className="text-xl font-bold text-gray-200">Backend Developer</h3>
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
          <h3 className="text-xl font-bold text-gray-200">Data Analyst</h3>
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
}

export default PracticeTab;
