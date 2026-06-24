import { useState, useRef } from "react";

const openDropdowns = new Set();

function closeAllExcept(exclude) {
  for (const closer of openDropdowns) {
    if (closer !== exclude) closer();
  }
}

export default function CustomDropdown({
  categories,
  activeTab,
  setActiveTab,
  className = "w-full mt-6 relative lg:!hidden",
}) {
  const [open, setOpen] = useState(false);
  const myCloserRef = useRef(() => {});

  const toggle = () => {
    const willOpen = !open;
    setOpen(willOpen);
    if (willOpen) closeAllExcept(myCloserRef.current);
  };

  const select = (i) => {
    setActiveTab(i);
    setOpen(false);
  };

  return (
    <div className={className}>
      <button
        onClick={toggle}
        className="w-full md:max-w-[80%] lg:w-full border-0 border-b border-[#CDCDCD] py-3 px-2 bg-white text-black flex justify-between items-center rounded-none"
      >
        <span>{categories[activeTab]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-chevron-down transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0"
            style={{ zIndex: 9998 }}
            onClick={() => setOpen(false)}
          />
          <div
            className="absolute top-full left-0 w-full bg-white border border-[#CDCDCD] shadow-md"
            style={{ zIndex: 9999 }}
          >
            {categories.map((cat, i) => (
              <button
                key={i}
                onClick={() => select(i)}
                className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${
                  activeTab === i ? "bg-gray-100 font-medium" : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
