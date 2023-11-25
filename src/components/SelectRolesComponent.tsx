import { Select, SelectItem } from '@nextui-org/react';
import { useEffect, useState } from 'react';

import { Role } from '@interfaces/roles';
import { getRoles } from '../services/roles';

export default function SelectRolesComponent({ ...selectProps }) {

  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles();
        if (Array.isArray(response)) {
          setRoles(response);
        } else {
          console.error('getRoles did not return an array');
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (typeof window !== 'undefined') {
        fetchRoles();
      }
  }, []);

  return (
    <Select label="Selecciona un rol" {...selectProps}>
      {roles.map((role) => (
        <SelectItem key={role.id} value={role.id}>
          {role.description}
        </SelectItem>
      ))}
    </Select>
  );
}