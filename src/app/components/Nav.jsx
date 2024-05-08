"use client";
import { useState } from "react"
import { navLinks } from "../constants/Index"
const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="py-8 z-10 w-full">
            <nav className="flex items-center  justify-between py-2">
                <div className="flex justify-between items-center w-full md:w-auto gap-[100px]">
                    <a href="#" className="flex-1 justify-start">
                        <span className=" text-custom-blue font-semibold text-3xl tracking-tight">Website</span>
                    </a>
                    <button onClick={toggleMenu} className="lg:hidden  justify-end transition-transform">
                        {isOpen ? <img src="closeIcon.png" alt="" width={25} height={25} /> : <img src="hamburger.svg" width={25} height={25} />}
                    </button>
                </div>
                {/* Mobile Menu
                {isOpen && (
                    <ul className="fixed top-0 left-0 right-0 bottom-0 bg-white flex flex-col items-center justify-center">
                        {navLinks.map((link) => (
                            <li key={link.label} className="py-3 px-4 hover:underline">
                                <a href={link.href} className="leading-normal" onClick={() => setIsOpen(false)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                )} */}
                
                <ul className="flex-1 flex justify-center items-center px-9 gap-2 max-lg:hidden p-5 text-nav-color cursor-pointer text-[16px]">
                    {navLinks.map((link) => (
                        <li key={link.label} className="py-3 px-4 hover:underline">
                            <a href={link.href} className="leading-normal">{link.label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-4  max-lg:hidden ">
                    <ul className="flex justify-center items-center gap-4">
                        <li>
                            <a href="/" className="items-center hover:underline">Профил</a>
                        </li>
                        <li>
                            <button class="border-2 rounded-xl py-2 px-4 border-custom-blue">
                                Заявка за практа
                            </button>
                        </li>
                    </ul>

                </div>
                {/* <div className="lg:hidden px-4 cursor-pointer" onClick={toggleMenu}>
                    <img
                        src="hamburger.svg"
                        alt='hamburger'
                        width={25}
                        height={25}
                    ></img>
                </div> */}
                {/* Mobile Menu */}

                {isOpen && (
                    <ul className="fixed inset-0 bg-white flex flex-col items-center justify-center">
                        {navLinks.map((link) => (
                            <li key={link.label} className="py-3 px-4 hover:underline">
                                <a href={link.href} className="leading-normal" onClick={() => setIsOpen(false)}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </nav>
        </header>
    )
}

export default Nav
