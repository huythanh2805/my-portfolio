import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <div className='flex-row-center fixed top-3 left-1/2 -translate-x-1/2 z-50 '>
            <nav className='flex gap-1 border rounded-full p-0.5 border-white/15 bg-white/10 backdrop-blur'>
                <a href="" className='py-1.5 px-4 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 transition-all duration-150 ease-in'>Home</a>
                <a href="" className='py-1.5 px-4 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 transition-all duration-150 ease-in'>About</a>
                <a href="" className='py-1.5 px-4 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 transition-all duration-150 ease-in'>Projects</a>
                <a href="" className='py-1.5 px-4 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 transition-all duration-150 ease-in'>Contact</a>
            </nav>
        </div>
    )
}

export default Header