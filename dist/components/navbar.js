import { useState } from "react";
export function NavBar({ className, image, title, buttons, buttonsAlignment = "right", }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { onClick: () => setMobileOpen(false), className: `fixed inset-0 bg-black/40 z-40 lg:hidden ${mobileOpen ? "" : "hidden"}` }),
        React.createElement("nav", { className: `fixed top-0 left-0 px-2 md:px-8 lg:px-32 w-full shadow z-50 ${className || ""}` },
            React.createElement("div", { className: "max-w-7xl mx-auto flex items-center justify-between relative" },
                React.createElement("div", { className: "flex gap-2 items-center" },
                    image && (React.createElement("img", { className: "hidden md:block h-[50px] w-auto my-2", src: image, alt: `${title}'s Logo` })),
                    React.createElement("h1", { className: "my-4 md:my-0 font-bold tracking-tight text-base md:text-lg lg:text-xl" }, title)),
                React.createElement("div", { className: `hidden lg:flex ${buttonsAlignment === "center"
                        ? "absolute left-1/2 -translate-x-1/2 z-10"
                        : "ml-auto"}` }, buttons.map((btn, i) => (React.createElement("button", { key: i, onClick: btn.action, className: `px-4 py-2 rounded-xl transition cursor-pointer ${btn.className || ""}` }, btn.label)))),
                React.createElement("div", { className: "lg:hidden" },
                    React.createElement("button", { onClick: () => setMobileOpen(!mobileOpen), className: "p-2 text-2xl font-bold rounded-lg hover:bg-white/10" }, mobileOpen ? "✖" : "☰"))),
            mobileOpen && (React.createElement("div", { className: "lg:hidden mt-2 bg-inherit text-inherit pb-4" }, buttons.map((btn, i) => (React.createElement("button", { key: `${btn.label}-${i}`, onClick: () => {
                    setMobileOpen(false);
                    btn.action();
                }, className: "block w-full text-center py-2" }, btn.label))))))));
}
