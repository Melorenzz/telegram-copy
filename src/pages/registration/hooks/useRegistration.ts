import { useMutation } from "@tanstack/react-query";
import { ProfileService, type RegisterDto, type User } from "../../../services/profile.service";

export const useRegistration = () => {
    return useMutation<User, Error, RegisterDto>({
        mutationFn: (data) => ProfileService.register(data),
    });
};
