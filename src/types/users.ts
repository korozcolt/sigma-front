

export type User = {
    id?: number;
    username: string;
    fullName: string;
    email: string;
    phone: string;
    password: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    lastLogin?: Date;
    role: string;
}

export type UserResponse = {
    id?: number;
    username: string;
    fullName: string;
    email: string;
    phone: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    lastLogin?: Date;
    role: string;
}

export type Login = { 
    username: string;
    password: string;
}