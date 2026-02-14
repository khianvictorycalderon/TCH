const Content = () => {
    return (React.createElement("section", { className: "w-full bg-gray-100 py-16 flex flex-col items-center" },
        React.createElement("div", { className: "max-w-3xl text-center space-y-6" },
            React.createElement("h2", { className: "text-3xl font-semibold text-gray-800" }, "Features"),
            React.createElement("ul", { className: "list-disc list-inside text-gray-700 text-lg space-y-2" },
                React.createElement("li", null, "Dynamic React component loading"),
                React.createElement("li", null, "Tailwind styling and modern design"),
                React.createElement("li", null, "SEO-friendly skeleton + indefinite loader")),
            React.createElement("button", { className: "mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition", onClick: () => alert("You clicked the premium button!") }, "Try Feature"))));
};
export default Content;
