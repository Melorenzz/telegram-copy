import {MenuIcon, SearchIcon} from "lucide-react";
import GetUserDataQuery from "../../../pages/main/hooks/getUserDataQuery.ts";
import {useEffect, useState} from "react";
import ChatsHeader from "./ChatsHeader.tsx";
import ChatWithUser from "./ChatWithUser.tsx";

const Chats = () => {
    const [search, setSearch] = useState("");
    const [username, setUsername] = useState("");
    const {data, isPending} = GetUserDataQuery(username)
    useEffect(() => {
        console.log(data)
    }, [data])
    useEffect(() => {
        const timeout = setTimeout(() => {
            setUsername(search);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [search]);
    return (
        <div className='bg-bg-main min-w-[490px] flex flex-col  border-r border-border h-screen py-1.5 px-4 '>
            <ChatsHeader setSearch={setSearch} />

            <div className='mt-5 overflow-y-scroll h-full' style={{
                scrollbarWidth: "thin", // Firefox
                scrollbarColor: "rgba(75, 85, 99, 0.3) transparent",
            }}>
                <ChatWithUser />
            </div>

        </div>
    );
};

export default Chats;