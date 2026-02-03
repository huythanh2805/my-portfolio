import React from 'react'

type Props = {}

function Header({ }: Props) {
    return (
        <nav className='flex-center'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </nav>
    )
}

export default Header