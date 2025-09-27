import {apiRequest} from "./api/https.ts";
import {getMe, getUserData, login, register} from "../config/api.config.ts";
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
    getUserData: (username: string) =>
        apiRequest(getUserData(username), {
            method: "GET",

        }),
    getMe: () =>
        apiRequest(getMe(), {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("auth-token")}`,
            }
        }),
};