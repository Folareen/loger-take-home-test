"use client"

import React, { useState } from 'react'
import Container from './Container'
import Link from 'next/link'
import { BiMenu } from 'react-icons/bi'
import { IoClose } from "react-icons/io5";

const navLinks = [
    'Products', 'Pricing', 'Docs', 'Blog'
];

const MobileMenu = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
    return (
        <div className={`fixed inset-0 z-50 bg-black bg-opacity-30 transition-opacity duration-200 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            <div className={`absolute h-4/5 top-0 left-0 w-full bg-white border-b border-b-[#E7E9EF] rounded-b-xl shadow-md transition-transform duration-200 flex flex-col  ${open ? 'translate-y-0' : '-translate-y-full'}`} style={{ minHeight: 'max-content' }}>
                <div className="flex items-center justify-between px-5 py-4">
                    <div className="flex items-center gap-2">
                        <div className='bg-[#0A415C] w-5 h-5 rounded-full'></div>
                        <p className="text-xl">navlogo</p>
                    </div>
                    <button onClick={onClose} aria-label="Close menu" className="text-[#515867] text-2xl font-bold focus:outline-none">
                        <IoClose />
                    </button>
                </div>
                <div className="flex flex-col gap-4 px-5 mt-2">
                    {navLinks.map((item) => (
                        <Link href="#" key={item} className="text-[#515867] font-medium text-base py-2">
                            {item}
                        </Link>
                    ))}
                </div>
                <div className="flex flex-col g-red-400 mt-auto px-5 mb-5">
                    <Link href="#" className="text-[#515867] font-medium text-base py-2 text-center px-3 border border-[#5050EC] rounded-lg">Sign In</Link>
                    <Link href="#" className="px-3 py-2 bg-[#5050EC] rounded-lg text-base font-bold text-white mt-2 text-center">Start Free Trial</Link>
                </div>
            </div>
        </div>
    );
};

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <Container className="py-4 items-center justify-between bg-white border-b border-b-[#E7E9EF] hidden md:flex">
                <div className={`flex items-center gap-9`}>
                    <Link href="#" className="flex items-center gap-2">
                        <div className='bg-[#0A415C] w-5 h-5 rounded-full'></div>
                        <p className={`text-xl `}>navlogo</p>
                    </Link>
                    {navLinks.map((item) => (
                        <Link href="#" key={item} className="text-[#515867] font-medium text-sm ">{item}</Link>
                    ))}
                </div>
                <div>
                    <Link href="#" className="text-[#515867] font-medium text-sm ">Sign In</Link>
                    <Link href="#" className="ml-10 px-3 py-2 bg-[#5050EC] rounded-lg text-sm font-bold text-white">Start Free Trial</Link>
                </div>
            </Container>

            <Container className="py-4 flex items-center justify-between bg-white border-b border-b-[#E7E9EF] md:hidden">
                <div className="flex items-center gap-2">
                    <div className='bg-[#0A415C] w-5 h-5 rounded-full'></div>
                    <p className="text-xl">navlogo</p>
                </div>
                <button onClick={() => setMenuOpen(true)} aria-label="Open menu" className="text-[#515867] text-2xl font-bold focus:outline-none">
                    <BiMenu />
                </button>
            </Container>
            <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
}

export default Header