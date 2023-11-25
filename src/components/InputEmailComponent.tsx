import React, { useState } from 'react';

import { FiMail } from "react-icons/fi";
import { Input } from "@nextui-org/react";

interface Props {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

const InputEmailComponent = ({ onChange: propOnChange, ...props }: Props) => {
    const [isValid, setIsValid] = useState(true);
    const [touched, setTouched] = useState(false);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (propOnChange) {
        propOnChange(e);
      }
    };
  
    const handleBlur = (e: React.FocusEvent<Element>) => {
      const target = e.target as HTMLInputElement;
      setIsValid(target.value === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(target.value));
      setTouched(true);
    };
  
    return (
        <Input
          type="email"
          label="Email"
          placeholder="you@example.com"
          endContent={<FiMail className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
          onChange={handleChange}
          onBlur={handleBlur}
          isInvalid={!isValid && touched}
          errorMessage={!isValid ? 'El email no es válido' : ''}
          {...props}
        />

    );
  };
  
  export default InputEmailComponent;