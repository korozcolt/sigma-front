"use client";

import React, { useEffect, useState } from 'react';

import { User } from '@nextui-org/react';
import { UserResponse }  from '@interfaces/users';
import { getUserByName } from '@services/users';

type UserType = {
    username: string;
    access_token: string;
    isLogged: boolean;
}

export default function Page() {
    const [authUser, setAuthUser] = useState<UserType | null>(null);
    const [user, setUser] = useState<UserResponse | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            if (typeof window !== 'undefined') {
                const userItem = localStorage.getItem('user');
                const parsedUser = userItem ? JSON.parse(userItem) : null;
                setAuthUser(parsedUser);
                if (parsedUser?.username) {
                    const fetchedUser = await getUserByName(parsedUser.username);
                    setUser(fetchedUser ?? null);
                }
            }
        };
        fetchUser();
    }, []);

    return (
        <div>
            <h1>Hola mundo,</h1>
            {authUser && <User 
                name={authUser?.username} 
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                }} 
                description={user?.fullName ?? ''}
            />}
        </div>
    );
}