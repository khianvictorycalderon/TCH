import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-6 flex flex-col items-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Z-Test. All rights reserved.</p>
      <p className="text-sm">Powered by React + Tailwind</p>
    </footer>
  );
};

export default Footer;
