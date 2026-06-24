import React from "react";

const PEInput = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  inputClassName,
  wrapperClassName = "relative",
}) => {
  return (
    <div className={wrapperClassName}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClassName}
      />
      {error && <p className="eqstky_error_msg">{error}</p>}
    </div>
  );
};

export default PEInput;
