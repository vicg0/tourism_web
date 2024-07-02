import { HtmlHTMLAttributes } from "react";

interface OptionProps extends HtmlHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function Option({ text, ...rest }: OptionProps) {
  return (
    <button className="bg-white font-bold text-2xl px-16 py-4 text-[#FF914D] font-medium hover:underline hover:underline-offset-4" {...rest}>{text}</button>
  )
}