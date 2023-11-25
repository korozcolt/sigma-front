import React, { useState } from "react";

import { Input } from "@nextui-org/react";

interface Props {
  [key: string]: any;
}

const InputPhoneComponent = ({ ...props }: Props) => {
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (e: React.FocusEvent<Element>) => {
    const target = e.target as HTMLInputElement;
    const phone = target.value.replace(/\D/g, ''); // remove non-digit characters
    const isValidPhone = /^3\d{9}$/.test(phone); // validate phone number
    setIsValid(isValidPhone);
  };

  return (
    <Input
      {...props}
      isInvalid={!isValid}
      errorMessage={!isValid ? "El teléfono no es válido" : ""}
      onBlur={handleBlur}
    />
  );
};

export default InputPhoneComponent;