const ChatWithUser = () => {
    return (
        <button className='flex w-full text-start items-center gap-2 p-3 hover:bg-hover-col rounded-xl'>
            <img className='w-13.5 h-13.5 rounded-full bg-[red]' src="" alt="avatar"/>
            <div className='flex flex-col justify-between h-full text-md'>
                <h3 className='line-clamp-1 font-semibold '>F1lprivate</h3>
                <p className='text-text-secondary'>Last message</p>
            </div>
        </button>
    );
};

export default ChatWithUser;