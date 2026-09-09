"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({name, onChange, value, placeholder, label, type, className, required}) => {
   const [showPassword, setShowPassword] = useState(false);
   const isPassword = type === "password";
   const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

   return (
      <div className="flex flex-col gap-1 z-40">
         <label htmlFor={name} className="text-[14px] font-[400] font-orbitron text-[#BFBFBF] pl-1">
            {label}
         </label>
         <div className="relative flex items-center">
            <input
               type={resolvedType}
               name={name}
               id={name}
               className={`bg-[#121727] h-[50px] rounded-[10px] font-spaceGrotesk pl-4 font-[300] text-[14px] text-[#BFBFBF] focus:outline-none w-full ${isPassword ? "pr-11" : ""} ${className}`}
               onChange={onChange}
               placeholder={placeholder}
               value={value}
               required={required}
            />
            {isPassword && (
               <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-3 flex items-center justify-center text-[#BFBFBF] hover:text-white"
               >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
               </button>
            )}
         </div>
      </div>
   );
};

export default Input;
