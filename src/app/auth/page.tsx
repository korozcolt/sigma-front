"use client";

import Login from "./login";
import Register from "./register";
import { useState } from "react";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleIsLogin = () => setIsLogin(!isLogin);

  return (
    <main className="flex min-h-screen items-center justify-center p-4 md:p-24 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center w-full h-screen md:h-3/4 md:w-3/4 rounded-lg shadow-lg border border-gray-200 relative">
        <div className="md:block hidden absolute inset-0 bg-cover bg-center w-2/5 rounded-l-lg" />
        <div className="w-full md:w-2/5 h-full rounded-l-lg">
          {/* Content */}
        </div>
        <div className="w-full md:w-3/5 h-full">
          {isLogin ? (
            <Login onRegisterClick={toggleIsLogin} />
          ) : (
            <Register onLoginClick={toggleIsLogin} />
          )}
        </div>
      </div>
    </main>
  );
}
