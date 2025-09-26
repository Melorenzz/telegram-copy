import {ProfileService} from "../../../services/profile.service.ts";
import {useMutation} from "@tanstack/react-query";

export const useLogin = () => {
    return useMutation({
        mutationFn: (data) => ProfileService.login(data),
    });
};
