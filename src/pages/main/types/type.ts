export type OpenProfile = {
    setIsOpenProfile: (isOpenProfile: boolean) => void
}

export interface IUser {
    id: number,
    email: string,
    displayName: string,
    username: string,
    description: string,
}