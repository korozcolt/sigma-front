import { User } from "@/types/users";
import axios from "axios";
import config from "@/constants/endpoints";

export async function register(user: User): Promise<User | undefined> {
    try {
        const response = await axios.post(`${config.base_url}/users`, user);
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getAllUsers(): Promise<User[] | undefined> {
    try {
        const response = await axios.get(`${config.base_url}/users`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUserById(id: number): Promise<User | undefined> {
    try {
        const response = await axios.get(`${config.base_url}/users/${id}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function getUserByName(username: string): Promise<User | undefined> {
    try {
        const response = await axios.get(`${config.base_url}/users/username/${username}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function updateUser(user: User): Promise<User | undefined> {
    try {
        const response = await axios.put(`${config.base_url}/users/${user.id}`, user);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}

export async function deleteUser(id: number): Promise<User | undefined> {
    try {
        const response = await axios.delete(`${config.base_url}/users/${id}`);
        return response.data.data;
    } catch (error) {
        console.log(error);
    }
}