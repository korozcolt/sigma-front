import React, { useState } from "react";

import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Input } from "@nextui-org/react";

interface Props {
  [key: string]: any;
}

const InputPasswordComponent = ({ ...props }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const toggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(!isVisible);
  };

  const handleBlur = (e: React.FocusEvent<Element>) => {
    const target = e.target as HTMLInputElement;
    const password = target.value;
    const isValidPassword = password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /[\W]/.test(password);

    setIsValid(isValidPassword);
  };

  return (
    <Input
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <FiEyeOff className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <FiEye className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      onBlur={handleBlur}
      isInvalid={!isValid}
      errorMessage={!isValid ? "La contraseña no es válida" : ""} 
      description="La contraseña debe tener al menos 8 caracteres, incluyendo minúsculas, mayúsculas y un carácter especial."
      {...props}
    />
  );
};

export default InputPasswordComponent;