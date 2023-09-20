import { useState } from "react";
import Sidebar from "./Sidebar";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <header
            className={`${
                openMenu || openSidebar
                    ? "w-full bg-black text-white py-2 md:py-4 fixed z-10 top-0 left-0 after:absolute after:bg-black/70  after:w-[100vw] after:h-[100vh] after:left-0 after:top-0"
                    : "w-full bg-black text-white py-2 md:py-4 fixed z-10 top-0 left-0"
            } duration-300`}
        >
            <div className='container flex justify-between md:justify-center'>
                {/* Left Menu Icon */}
                <button
                    onClick={(e) => setOpenMenu(!openMenu)}
                    className='flex md:hidden gap-3 cursor-pointer'
                >
                    <i className='ri-menu-line' />
                    <span>Menu</span>
                </button>

                {/* Mobile Menu */}
                <div
                    className={`z-30 absolute top-0 ${
                        openMenu
                            ? "right-0 opacity-100"
                            : "-right-full opacity-0"
                    } min-w-[70vw] h-[100vh] bg-menubar px-5 pt-4 text-right block md:hidden duration-500 `}
                >
                    <button onClick={(e) => setOpenMenu(false)}>
                        <i className='ri-close-fill text-3xl' />
                    </button>
                    <div className='flex flex-col gap-5 text-center pt-8 text-black'>
                        <a onClick={(e) => setOpenMenu(false)} href='#home'>
                            Home
                        </a>
                        <a onClick={(e) => setOpenMenu(false)} href='#about'>
                            About
                        </a>
                        <a onClick={(e) => setOpenMenu(false)} href='#blog'>
                            Blog
                        </a>
                        <a onClick={(e) => setOpenMenu(false)} href='#contact'>
                            Contact
                        </a>
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className='mobile-menu hidden md:flex justify-center gap-20 font-medium'>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#blog'>Blog</a>
                    <a href='#contact'>Contact</a>
                </div>

                {/* Right Sidebar Icon */}
                <button
                    onClick={(e) => setOpenSidebar(!openSidebar)}
                    className='flex md:hidden gap-3 cursor-pointer'
                >
                    <span>Sidebar</span>
                    <i className='ri-menu-3-line' />
                </button>

                {/* Mobile Menu */}
                <div
                    className={`z-30 absolute top-0 ${
                        openSidebar
                            ? "left-0 opacity-100"
                            : "-left-full opacity-0"
                    } min-w-[70vw] h-[100vh] bg-sidebar px-5 pt-4 text-left block md:hidden duration-500`}
                >
                    <div className='text-right'>
                        <button onClick={(e) => setOpenSidebar(false)}>
                            <i className='ri-close-fill text-3xl' />
                        </button>
                    </div>
                    <Sidebar />
                </div>

                {/*  */}
            </div>
        </header>
    );
};

export default Navbar;
