import React, { ChangeEventHandler } from "react";

type InputProps = {
  label: string;
  text: string;
  type?: "text" | "number";
  value: string | number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const UIInput: React.FC<InputProps> = ({
  label,
  text,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col justify-between  text-sm font-medium leading-4 text-gray-900">
      <label>{label}</label>
      <input
        type={type}
        id={text}
        value={value}
        onChange={onChange}
        placeholder={text}
        className="px-4 py-[9px] border border-gray-200 rounded-md focus:outline-none w-full text-black"
      />
    </div>
  );
};

export default UIInput;
