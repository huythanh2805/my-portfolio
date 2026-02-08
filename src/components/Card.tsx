import Image from 'next/image'
import React from 'react'
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import grainImage from '@/assets/images/grain.jpg'

type Props = {
  children?: React.ReactNode,
}

function Card({ children }: Props) {
  return (
    <div className='relative bg-white/10 h-fit w-fit rounded-2xl py-6 px-4 mx-4 border border-white/25 ring-1 ring-white/10'>
      {/* Grain textture */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <Image src={grainImage} alt="Grain texture" fill className="object-cover opacity-20" />
      </div>
      {children}
    </div>
  )
}

export default Card