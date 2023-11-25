"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from "@nextui-org/react";
import React, { useState } from "react";

import InputPasswordComponent from "@/components/InputPasswordComponent";
import { login } from "@/services/auth";
import { toast } from "sonner";

interface LoginProps {
  onRegisterClick: () => void;
}

export default function Login({ onRegisterClick }: LoginProps) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (!username || !password) {
        return;
      }
      const data = await login({ username, password });
      localStorage.setItem("user", JSON.stringify({ isLogged:true, username, "access_token": data?.data?.access_token }));
      setPassword('');
      setUsername('');
      toast.success('Inicio de sesión exitoso');
    } catch (error) {
      if (typeof error === 'string') {
        toast.error(error);
        setUsername('');
        setPassword('');
      } else {
        toast.error('Error al iniciar sesión');
        setUsername('');
        setPassword('');
      }
    }
  };
  
  return (
    <div className="w-full flex flex-col gap-4">
      <Card isBlurred shadow="lg">
        <CardHeader className="flex-col mt-0 md:mt-4">
          <h2 className="text-tiny text-white/60 uppercase font-bold">
            Inicio de Sesión
          </h2>
        </CardHeader>
        <CardBody>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
              className="m-4 w-full"
              variant="underlined"
              label="Usuario"
              type="text"
              name="username"
              value={username}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <InputPasswordComponent
              className="m-4 w-full"
              variant="underlined"
              label="Contraseña"
              name="password"
              value={password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
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
              onClick={handleLogin}
            >
              Iniciar Sesión
            </Button>
          </div>
          <a
            className="block mt-4 text-sm text-center text-blue-500 hover:underline"
            onClick={onRegisterClick}
          >
            No estás registrado? Regístrate aquí
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
