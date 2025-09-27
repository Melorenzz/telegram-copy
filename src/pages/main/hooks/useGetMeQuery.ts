import {useQuery} from "@tanstack/react-query";
import {ProfileService} from "../../../services/profile.service.ts";

const useGetMeQuery = () => {


    return useQuery({
        queryKey: ['getMe'],
        queryFn: async () => {
            const res = await ProfileService.getMe();
            return res ?? null;
        },
    })
};

export default useGetMeQuery;