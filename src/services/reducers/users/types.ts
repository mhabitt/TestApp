export enum UserActionTypes{
    SET,
    CLEAR
}

export interface LoggedUserApi{
    name?: string;
    email?: string;
    role?: "ADMIN" | "USER"
}

