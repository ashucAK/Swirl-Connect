import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineCodepenCircle } from  "react-icons/ai"; // Import AiOutlineCodepenCircle icon

const TopBar = () => {
    const { theme } = useSelector((state) => state.theme);
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    return (
        <div className='topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary'>
            <Link to='/' className='flex gap-2 items-center'>
                <div className='p-1 bg-[#000000] rounded text-white'>
                    <AiOutlineCodepenCircle />
                </div>
                <span className='text-xl md:text-2xl text-[#646362] font-semibold'>
                    Swirl Connect
                </span>
            </Link>
        </div>
    );
}

export default TopBar;
