"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";

import InputEmailComponent from "@/components/InputEmailComponent";
import InputPasswordComponent from "@/components/InputPasswordComponent";
import InputPhoneComponent from "@/components/InputPhoneComponent";
import React from "react";
import SelectRolesComponent from "@components/SelectRolesComponent";

interface RegisterProps {
  onLoginClick: () => void;
}

export default function Register({ onLoginClick }: RegisterProps) {
  return (
    <div className="w-full flex flex-col gap-4">
      <Card isBlurred shadow="lg">
        <CardHeader className="flex-col">
          <h2 className="text-tiny text-white/60 uppercase font-bold">
            Sistema de Registro
          </h2>
        </CardHeader>
        <CardBody>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              className="m-4 w-full"
              variant="underlined"
              label="Nombre Completo"
              type="text"
              name="fullName"
            />
            <Input
              className="m-4 w-full"
              variant="underlined"
              label="Usuario"
              type="text"
              name="fullName"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <InputEmailComponent
              className="m-4 w-full"
              name="email"
              variant="underlined"
            />
            <InputPhoneComponent
              className="m-4 w-full"
              variant="underlined"
              label="Teléfono"
              type="number"
              name="phone"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <InputPasswordComponent
              className="m-4 w-full"
              variant="underlined"
              label="Contraseña"
              name="password"
            />
            <InputPasswordComponent
              className="m-4 w-full"
              variant="underlined"
              label="Confirmar Contraseña"
              name="confirmPassword"
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <SelectRolesComponent variant="underlined" className="m-4 w-full" />
          </div>
        </CardBody>
        <CardFooter>
          <div className="w-full m-4 text-center ">
            <Button
              className="w-full"
              size="lg"
              radius="full"
              color="default"
              variant="shadow"
            >
              Registarte
            </Button>
          </div>
          <a
            className="block mt-4 text-sm text-center text-blue-500 hover:underline"
            onClick={onLoginClick}
          >
            Ya tienes una cuenta? Inicia sesión aquí
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
