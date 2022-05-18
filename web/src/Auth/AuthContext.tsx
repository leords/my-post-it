import { createContext } from "react";

export type User = {
    id: string,
    name: string,
    email: string,
    password?: string
}

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<boolean>;
    signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);