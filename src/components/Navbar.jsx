import React from "react";

const Navbar = () => {
    return (
        <header className='w-full bg-black text-white py-4'>
            <div className='container flex justify-between md:justify-center'>
                {/* Left Menu Icon */}
                <div className='flex md:hidden gap-3 cursor-pointer'>
                    <i className='ri-menu-line' />
                    <span>Menu</span>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex justify-center gap-20'>
                    <a href='#home'>Home</a>
                    <a href='#home'>About</a>
                    <a href='#home'>Blog</a>
                    <a href='#home'>Contact</a>
                </div>

                {/* Right Menu Icon */}
                <div className='flex md:hidden gap-3 cursor-pointer'>
                    <span>Sidebar</span>
                    <i className='ri-menu-3-line' />
                </div>
            </div>
        </header>
    );
};

export default Navbar;
