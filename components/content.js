import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Content = () => {
    return (_jsx("section", { className: "w-full bg-gray-100 py-16 flex flex-col items-center", children: _jsxs("div", { className: "max-w-3xl text-center space-y-6", children: [_jsx("h2", { className: "text-3xl font-semibold text-gray-800", children: "Features" }), _jsxs("ul", { className: "list-disc list-inside text-gray-700 text-lg space-y-2", children: [_jsx("li", { children: "Dynamic React component loading" }), _jsx("li", { children: "Tailwind styling and modern design" }), _jsx("li", { children: "SEO-friendly skeleton + indefinite loader" })] }), _jsx("button", { className: "mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition", onClick: () => alert("You clicked the premium button!"), children: "Try Feature" })] }) }));
};
export default Content;
