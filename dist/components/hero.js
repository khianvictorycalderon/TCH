import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Hero({ background, heading, subheading, cta_buttons = [], logo, dark_cover_opacity = 0.4, className = "", ...rest }) {
    const isImage = background.startsWith("http") ||
        background.startsWith("/") ||
        background.includes("url(");
    return (_jsxs("section", { ...rest, className: `relative flex flex-col md:flex-row items-center justify-center 
        px-4 md:px-8 lg:px-32 h-screen w-full overflow-hidden ${className}`, style: {
            background: isImage
                ? `url(${background}) center/cover no-repeat`
                : background,
        }, children: [_jsx("div", { className: "absolute inset-0 bg-black", style: { opacity: dark_cover_opacity } }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center w-full gap-10", children: [_jsxs("div", { className: "flex-1 text-white space-y-6 text-center md:text-left", children: [_jsx("h1", { className: "text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight", children: heading }), subheading && (_jsx("h2", { className: "text-lg md:text-xl lg:text-2xl text-gray-300 font-medium", children: subheading })), cta_buttons.length > 0 && (_jsx("div", { className: "flex flex-wrap justify-center md:justify-start gap-4", children: cta_buttons.map((button, i) => (_jsx("div", { className: "text-sm md:text-base font-semibold", children: button }, i))) }))] }), logo && (_jsx("div", { className: "hidden md:flex flex-1 justify-center md:justify-end", children: _jsx("img", { src: logo, alt: "Hero logo", className: "w-64 md:w-96 object-contain" }) }))] })] }));
}
export function CenteredHero({ background, heading, subheading, cta_buttons = [], dark_cover_opacity = 0.4, className = "", ...rest }) {
    const isImage = background.startsWith("http") ||
        background.startsWith("/") ||
        background.includes("url(");
    return (_jsxs("section", { ...rest, className: `relative flex items-center justify-center px-4 md:px-8 lg:px-32 
        h-screen w-full overflow-hidden text-center ${className}`, style: {
            background: isImage
                ? `url(${background}) center/cover no-repeat`
                : background,
        }, children: [_jsx("div", { className: "absolute inset-0 bg-black", style: { opacity: dark_cover_opacity } }), _jsxs("div", { className: "relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center space-y-6 text-white", children: [_jsx("h1", { className: "text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight", children: heading }), subheading && (_jsx("h2", { className: "text-lg md:text-xl lg:text-2xl text-gray-300 font-medium", children: subheading })), cta_buttons.length > 0 && (_jsx("div", { className: "flex flex-wrap justify-center gap-4 mt-4", children: cta_buttons.map((button, i) => (_jsx("div", { className: "text-sm md:text-base font-semibold", children: button }, i))) }))] })] }));
}
