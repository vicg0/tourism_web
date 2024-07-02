import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string;
  second?: boolean
}

export function Button({placeholder, second = false, ...rest}: ButtonProps) {
  return(
    <button {...rest} data-second={second} className="data-[second=true]:bg-[#3F51B5] bg-[#FF914D] text-white px-12 py-2 rounded-md ">
      {placeholder}
    </button>
  )
}