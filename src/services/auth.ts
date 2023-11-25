import { Login } from "@interfaces/users";
import axios from "axios";
import config from "@constants/endpoints";

export async function login(login: Login) {
    try {
      const response = await axios.post(`${config.base_url}/auth/login`, login);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error.response?.data.message;
      }
      throw 'An error occurred';
    }
  }

//logout
export function logout() {
    localStorage.removeItem("user");
}

//getAuthUser from localStorage with this structure  localStorage.setItem("user", JSON.stringify({username, "access_token": data.access_token }));
export function getAuthUser() {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
}

//isAuth check if user is authenticated
export function isAuth() {
    return !!getAuthUser() && !!getAuthUser().isLogged;
}