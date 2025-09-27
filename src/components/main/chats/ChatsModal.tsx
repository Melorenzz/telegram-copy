import useGetMeQuery from "../../../pages/main/hooks/useGetMeQuery.ts";
import {useEffect} from "react";

type Props = {

}

const ChatsModal = () => {

    const {data} = useGetMeQuery()

    useEffect(() => {
        console.log(data)
    }, [data]);

    return (
        <div className='absolute p-2 left-0 bg-[rgb(33,33,33,0.867)] backdrop-blur-[10px] rounded-xl min-w-[250px] border border-border top-[calc(100%+5px)]'>
            <div className='flex items-center gap-3 px-2'>
                <div className='w-6 h-6 bg-[red] rounded-full'></div>
                <div className='flex flex-col'>
                    <h3 className='font-semibold text-md'>{data?.username}</h3>
                    <h3 className='text-text-secondary -mt-1 text-sm'>{data?.displayName}</h3>
                </div>
            </div>
            <div className='w-full h-[1px] bg-text-secondary  my-2'></div>
            <div className=' flex gap-3'>
                <button className='flex-1 rounded-lg py-1 px-2'>Info</button>
                <button className='flex-1 rounded-lg py-1 px-2'>Log out</button>
            </div>
        </div>
    );
};

export default ChatsModal;