import {apiRequest} from "./api/https.ts";
import {login, register} from "../config/api.config.ts";
export interface RegisterDto {
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    name: string;
}
export const ProfileService = {
    register: (data: RegisterDto) =>
        apiRequest<User>(register(), {
            method: "POST",
            body: JSON.stringify(data),
        }),
    login: (data) =>
        apiRequest(login(), {
            method: "POST",
            body: JSON.stringify(data),
        }),
};