export const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const register = () => `/register`
export const login = () => `/login`
export const getUserData = (username: string) => `/users/${username}`
export const getMe = () => `/me`
