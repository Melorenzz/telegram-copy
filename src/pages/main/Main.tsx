import Chats from "../../components/main/chats/Chats.tsx";
import Chat from "../../components/main/Chat.tsx";
import Profile from "../../components/main/Profile.tsx";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router";

const Main = () => {

    const [isOpenProfile, setIsOpenProfile] = useState(false);
    const navigate = useNavigate();
    const token = localStorage.getItem("auth-token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        }
    }, [token])

    return (
        <div className='flex'>
            <Chats/>
            <Chat setIsOpenProfile={setIsOpenProfile}/>
            {isOpenProfile && <Profile setIsOpenProfile={setIsOpenProfile}/>}
        </div>
    );
};

export default Main;