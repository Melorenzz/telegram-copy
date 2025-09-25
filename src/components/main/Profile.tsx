import {AtSignIcon, BellIcon, InfoIcon, XIcon} from "lucide-react";
import type {OpenProfile} from "../../pages/main/types/type.ts";

const profileInfo = [
    {icon: <AtSignIcon className='text-text-secondary min-w-5'/>, title: "@Melorenz", subtitle: 'Username', isClickable: true, onClick: (item) => copyUsername(item.title)},
    {icon: <InfoIcon className='text-text-secondary min-w-5'/>, title: "Your time is limited, don't waste it living someone else's life.", subtitle: 'Bio'},
    {icon: <BellIcon className='text-text-secondary min-w-5'/>, title: "Notifications", notifications: true, isClickable: true},
]

async function copyUsername(username: string) {
    try {
        await navigator.clipboard.writeText(username);
        console.log("Скопировано:", username);
    } catch (err) {
        console.error("Ошибка:", err);
    }
}
const Profile = ({setIsOpenProfile}: OpenProfile) => {
    return (
        <div className='bg-bg-main border-l border-border h-screen flex-2'>
            <div className='px-5 py-2 flex gap-5 items-center'>
                <button onClick={() => setIsOpenProfile(false)}
                        className='w-10 h-10 hover:bg-hover-col transition rounded-full flex items-center justify-center p-2'>
                    <XIcon className='w-full h-full text-text-secondary'/>
                </button>
                <h3 className='text-xl font-semibold'>User Info</h3>
            </div>
            <img src="" alt="avatar" className='w-full aspect-square bg-[red]'/>
            <div className='p-3'>
                {profileInfo.map(i => {
                    const Component = i.isClickable ? "button" : "div";
                    return (
                        <Component
                            onClick={i.isClickable && i.onClick ? () => i.onClick(i) : undefined}
                         className={`rounded-xl py-2 w-full text-left px-5 flex items-center justify-between ${i.isClickable ? 'hover:bg-hover-col' : null}`}>
                        <div className='flex items-center gap-7'>
                            {i.icon}
                            <div className='flex flex-col'>
                                <span className='leading-6'>{i.title}</span>
                                <span className='text-text-secondary text-sm line-clamp-2'>{i.subtitle}</span>
                            </div>
                        </div>
                        {i.notifications ? ('true') : null}
                    </Component>
                    )})}
            </div>
        </div>
    );
};

export default Profile;