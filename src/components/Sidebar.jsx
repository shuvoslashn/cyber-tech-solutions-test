import { useState } from "react";

const Sidebar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    return (
        <div>
            <h3 className='font-[500] mb-2 text-[18px]'>Sidebar</h3>
            {/* dropdown */}
            <div className='mb-2'>
                <div
                    className='flex justify-between items-center cursor-pointer px-4 py-2 bg-white'
                    onClick={() => setToggleDropdown(!toggleDropdown)}
                >
                    <span className='font-[500]'>Item 1</span>
                    {toggleDropdown ? (
                        <i className='ri-arrow-down-s-line -rotate-90 duration-200' />
                    ) : (
                        <i className='ri-arrow-down-s-line duration-200' />
                    )}
                </div>
                {/* dropdown items */}
                {toggleDropdown && (
                    <div className='ml-6 duration-200'>
                        <div className='text-center bg-gray-300 px-4 py-1 my-2 font-medium'>
                            Item A
                        </div>
                        <div className='text-center bg-gray-300 px-4 py-1 my-2 font-medium'>
                            Item B
                        </div>
                    </div>
                )}
            </div>
            <div className='flex justify-between items-center cursor-pointer px-4 py-2 bg-white mb-2'>
                <span className='font-[500]'>Item 1</span>
                <i className='ri-arrow-down-s-line opacity-30' />
            </div>
            <div className='flex justify-between items-center cursor-pointer px-4 py-2 bg-white'>
                <span className='font-[500]'>Item 1</span>
                <i className='ri-arrow-down-s-line opacity-30' />
            </div>
        </div>
    );
};

export default Sidebar;
