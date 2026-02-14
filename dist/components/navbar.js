import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
export function NavBar({ className, image, title, buttons, buttonsAlignment = "right", }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    return (_jsxs(_Fragment, { children: [_jsx("div", { onClick: () => setMobileOpen(false), className: `fixed inset-0 bg-black/40 z-40 lg:hidden ${mobileOpen ? "" : "hidden"}` }), _jsxs("nav", { className: `fixed top-0 left-0 px-2 md:px-8 lg:px-32 w-full shadow z-50 ${className || ""}`, children: [_jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between relative", children: [_jsxs("div", { className: "flex gap-2 items-center", children: [image && (_jsx("img", { className: "hidden md:block h-[50px] w-auto my-2", src: image, alt: `${title}'s Logo` })), _jsx("h1", { className: "my-4 md:my-0 font-bold tracking-tight text-base md:text-lg lg:text-xl", children: title })] }), _jsx("div", { className: `hidden lg:flex ${buttonsAlignment === "center"
                                    ? "absolute left-1/2 -translate-x-1/2 z-10"
                                    : "ml-auto"}`, children: buttons.map((btn, i) => (_jsx("button", { onClick: btn.action, className: `px-4 py-2 rounded-xl transition cursor-pointer ${btn.className || ""}`, children: btn.label }, i))) }), _jsx("div", { className: "lg:hidden", children: _jsx("button", { onClick: () => setMobileOpen(!mobileOpen), className: "p-2 text-2xl font-bold rounded-lg hover:bg-white/10", children: mobileOpen ? "✖" : "☰" }) })] }), mobileOpen && (_jsx("div", { className: "lg:hidden mt-2 bg-inherit text-inherit pb-4", children: buttons.map((btn, i) => (_jsx("button", { onClick: () => {
                                setMobileOpen(false);
                                btn.action();
                            }, className: "block w-full text-center py-2", children: btn.label }, `${btn.label}-${i}`))) }))] })] }));
}
