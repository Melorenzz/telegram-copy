import {useQuery} from "@tanstack/react-query";
import {ProfileService} from "../../../services/profile.service.ts";

const GetUserDataQuery = (username: string) => {

    console.log('test', username);

    return useQuery({
        queryKey: ['getUserData', username],
        queryFn: async () => {
            if (!username) return null; // защита
            const res = await ProfileService.getUserData(username);
            return res ?? null;
        },
        enabled: !!username,
    })
};

export default GetUserDataQuery;