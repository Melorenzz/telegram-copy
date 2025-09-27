import {MenuIcon, SearchIcon} from "lucide-react";
import ChatsModal from "./ChatsModal.tsx";
import {useState} from "react";

type Props = {
    setSearch: (search: string) => void;
}

const ChatsHeader = ({setSearch}: Props) => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div className='flex items-center gap-3'>
            <div className='relative'>
                <button onClick={() => setIsOpenModal(!isOpenModal)} className='w-10 h-10 hover:bg-hover-col p-2 rounded-full'>
                    <MenuIcon className='w-ful h-full text-text-secondary' />
                </button>
                {isOpenModal && (
                    <ChatsModal />
                )}
            </div>
            <div className='w-full h-10 bg-[#2c2c2c] rounded-full flex items-center px-5 py-2 gap-3'>
                <SearchIcon className='text-text-secondary h-full' />
                <input onChange={(e) => setSearch(e.target.value)} className='w-full h-full' placeholder='Search...' type="text"/>
            </div>
        </div>
    );
};

export default ChatsHeader;