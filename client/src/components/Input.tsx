import type { ChangeEvent} from "react";

interface InputProps {
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
}


function Input({onChange, placeholder}: InputProps) {
  return (
    <div>
      <input
        placeholder={placeholder}
        type="text"
        className=" w-full  px-4 py-2 border rounded-lg m-2"
        onChange={onChange}
      />
    </div>
  );
}

export default Input