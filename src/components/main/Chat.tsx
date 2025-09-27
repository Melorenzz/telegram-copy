import type {OpenProfile} from "../../pages/main/types/type.ts";
import {SendIcon} from "lucide-react";

const Chat = ({setIsOpenProfile}: OpenProfile) => {
    return (
        <div className={`flex-4 h-[100vh] flex flex-col bg-bg-secondary`}>
            <div className='bg-bg-main  w-full flex items-center justify-between px-5 py-1.5 '>
                <div className='flex items-center w-full justify-left gap-5'>
                    <button
                        onClick={() => setIsOpenProfile(true)}
                            className='flex text-left items-center gap-3 w-full '>
                        <img className='w-10 h-10 object-cover rounded-full'
                             src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/396e9/MainBefore.jpg"
                             alt="avatar"/>
                        <div className='flex flex-col justify-between'>
                            <h2 className='font-[600] text-md '>Display Name</h2>
                            <p className='text-sm text-text-secondary'>last seen recently</p>
                        </div>
                    </button>
                </div>

                {/*<div className='flex items-center gap-5'>*/}
                {/*    <MagnifyingGlassIcon strokeWidth={3} className='w-7 h-7 text-white'/>*/}
                {/*    <PhoneIcon className='w-7 h-7 text-white'/>*/}
                {/*    <EllipsisVerticalIcon strokeWidth={3} className='w-7 h-7  text-white '/>*/}
                {/*</div>*/}
            </div>

            <div className='overflow-y-scroll px-3' style={{
                scrollbarWidth: "thin", // Firefox
                scrollbarColor: "rgba(75, 85, 99, 0.3) transparent",
            }}>
                <div className='h-full w-full max-w-[700px] mx-auto flex flex-col gap-y-3'>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] bg-bg-main rounded-full w-fit px-3 py-1.5'>tete2</div>
                    <div className='max-w-[300px] ml-auto  bg-violet-col rounded-full w-fit px-3 py-1.5'>tete2</div>



                </div>
            </div>

            <div className='max-w-[700px] mt-auto mx-auto w-full h-20 py-3 flex items-center gap-3'>
                <input
                    placeholder="Type a message..."
                    className='h-full w-full rounded-2xl bg-bg-main  px-5 focus:outline-none '
                    type="text"/>
                <button className='min-w-14 h-14 bg-bg-main rounded-full p-4'>
                    <SendIcon className='w-full h-full' />
                </button>
            </div>
        </div>
    );
};

export default Chat;