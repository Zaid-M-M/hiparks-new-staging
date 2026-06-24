import clsx from "clsx";

const NestedTab = ({ name, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={clsx(
      " cursor-pointer w-full  text-left first:pt-0 pt-4 pb-4 md:pt-8 md:pb-8 transition-colors duration-300 border-b border-[#E0E0E0] last:border-b-0 text-[26px]",
      isActive ? "text-[#f47920]" : "text-[#ffffff] hover:text-[#FFFFFF]",
    )}
  >
    <div className="flex items-center justify-between pointer-events-none">
      <span className={clsx("text-lg md:text-xl", isActive ? "bw-m" : "bw-m")}>
        {name} ({count})
      </span>
    </div>
  </button>
);

export default NestedTab;
