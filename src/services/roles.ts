import { Role } from "@interfaces/roles";
import axios from "axios";
import config from "@constants/endpoints";

enum RoleCast {
  SuperAdmin = "Super Administrador",
  Admin = "Administrador",
  User = "Usuario",
}

export const getRoles = async (): Promise<(Role & { description: string })[]> => {
  try {
    const response = await axios.get(`${config.base_url}/roles`);
    const roles: Role[] = response.data.data;

    return roles.map(role => ({
      ...role,
      description: role.name in RoleCast ? RoleCast[role.name as keyof typeof RoleCast] : '',
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}