import {SERVER_URL} from "../../config/api.config.ts";

export async function apiRequest<T>(
    url: string,
    options: RequestInit = {}
): Promise<T> {
    const res = await fetch(
        `${SERVER_URL}${url}`,
        {
            headers: {
                "Content-Type": "application/json",
                ...options.headers,
            },
            ...options
        }
    )
    if(!res.ok){
        throw new Error(res.statusText);
    }
    return res.json()
}