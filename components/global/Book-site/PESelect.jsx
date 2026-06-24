import React from "react";

const PESelect = ({
  name,
  value,
  onChange,
  placeholder,
  options = [],
  error,
  disabled = false,
  selectClassName,
  wrapperClassName = "relative",
}) => {
  return (
    <div className={wrapperClassName}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={selectClassName}
      >
        <option value="" disabled className="text-black">
          {placeholder}
        </option>
        {options.map((option) => {
          const item =
            typeof option === "string"
              ? { value: option, label: option }
              : option;
          return (
            <option key={item.value} className="text-black" value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
      <svg
        className="absolute right-2 bottom-3 w-4 h-4 pointer-events-none text-black"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
      {error && <p className="eqstky_error_msg">{error}</p>}
    </div>
  );
};

export default PESelect;
