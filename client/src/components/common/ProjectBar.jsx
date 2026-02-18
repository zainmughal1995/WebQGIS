import React, { useState, useRef, useEffect } from "react";
import { MENU_CONFIG } from "../../config/menuConfig";

const TopBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const menuTitles = Object.keys(MENU_CONFIG);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = (title) => {
    setActiveMenu((prev) => (prev === title ? null : title));
  };

  return (
    <div
      ref={menuRef}
      className="w-full h-6 bg-[#f3f3f3] border-b border-gray-300 flex items-center px-3 select-none relative"
    >
      {menuTitles.map((title) => (
        <div key={title} className="relative">
          {/* Menu Title */}
          <div
            onClick={() => toggleMenu(title)}
            className={`px-3 py-1 text-xs cursor-pointer rounded ${
              activeMenu === title ? "bg-[#e6e6e6]" : "hover:bg-[#e6e6e6]"
            }`}
          >
            {title}
          </div>

          {/* Dropdown */}
          {activeMenu === title && (
            <div className="absolute top-full left-0 bg-white border border-gray-300 shadow-md min-w-[220px] z-[9999]">
              {MENU_CONFIG[title].map((item, index) =>
                item.type === "separator" ? (
                  <div key={index} className="h-px bg-gray-300 my-1" />
                ) : (
                  <div
                    key={index}
                    className="flex justify-between px-3 py-1 text-xs hover:bg-[#e6e6e6] cursor-pointer"
                  >
                    <span>{item.label}</span>
                    {item.shortcut && (
                      <span className="text-gray-500 text-xs">
                        {item.shortcut}
                      </span>
                    )}
                  </div>
                ),
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TopBar;
