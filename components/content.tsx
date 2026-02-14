import React from "react";

const Content: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-16 flex flex-col items-center">
      <div className="max-w-3xl text-center space-y-6">
        <h2 className="text-3xl font-semibold text-gray-800">
          Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>Dynamic React component loading</li>
          <li>Tailwind styling and modern design</li>
          <li>SEO-friendly skeleton + indefinite loader</li>
        </ul>
        <button
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => alert("You clicked the premium button!")}
        >
          Try Feature
        </button>
      </div>
    </section>
  );
};

export default Content;
