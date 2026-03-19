import type { RefObject } from "react";

interface InputProps {
  inputRef?: RefObject<HTMLInputElement>;
  placeholder?: string;
}

function Input({ inputRef, placeholder }: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className=" w-full  px-4 py-2 border rounded-lg m-2"
        ref={inputRef}
      />
    </div>
  );
}

export default Input;
