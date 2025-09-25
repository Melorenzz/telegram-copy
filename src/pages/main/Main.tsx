import Chats from "../../components/main/Chats.tsx";
import Chat from "../../components/main/Chat.tsx";
import Profile from "../../components/main/Profile.tsx";
import {useState} from "react";

const Main = () => {

    const [isOpenProfile, setIsOpenProfile] = useState(false);

    return (
        <div className='flex'>
            <Chats />
            <Chat setIsOpenProfile={setIsOpenProfile} />
            {isOpenProfile && <Profile setIsOpenProfile={setIsOpenProfile} />}
        </div>
    );
};

export default Main;