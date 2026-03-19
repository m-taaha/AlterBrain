import type { ReactElement } from "react";

type Variants = "primary" | "secondary";

 interface ButtonProps {
    variant: Variants;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement;
    onClick?: () => void;
    loading?: boolean;
}

// global variable
const variantStyles = {
  "primary": "bg-purple-600 text-white",
  "secondary": "bg-purple-200 text-purple-600",
};

const sizeStyles = {
  "sm": "py-2 px-2",
  "md": "py-4 px-4",
  "lg": "py-4 px-6",
}; 


const defaultStyles = "px-4 py-2 rounded-md flex justify-center items-center font-light"


function Button(props: ButtonProps) {
  return (
    <button 
    onClick={props.onClick}
    disabled={props.loading}
     className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} ${props.loading ? "opacity-50 cursor-not-allowed" : ""}`}>
       {props.startIcon? 
       <div className="pr-2">{props.startIcon}</div> : null} 
    

       {props.loading? "Loading..." : props.text}
    </button> 
  )
}   

export default Button; 