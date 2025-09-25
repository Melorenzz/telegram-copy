import {SearchIcon} from "lucide-react";

const Chats = () => {



    return (
        <div className='bg-bg-main min-w-[490px] flex flex-col  border-r border-border h-screen py-1.5 px-4 '>
            <div className='w-full h-10 bg-[#2c2c2c] rounded-full flex items-center px-5 py-2 gap-3'>
                <SearchIcon className='text-text-secondary h-full' />
                <input className='w-full h-full' placeholder='Search...' type="text"/>
            </div>

            <div className='mt-5 overflow-y-scroll h-full'>

                <button className='flex w-full text-start items-center gap-2 p-3 hover:bg-hover-col rounded-xl'>
                    <img className='w-13.5 h-13.5 rounded-full bg-[red]' src="" alt="avatar"/>
                    <div className='flex flex-col justify-between h-full text-md'>
                        <h3 className='line-clamp-1 font-semibold '>F1lprivate</h3>
                        <p className='text-text-secondary'>Last message</p>
                    </div>
                </button>


            </div>

        </div>
    );
};

export default Chats;