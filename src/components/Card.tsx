import Image from 'next/image'
import React from 'react'
import grainImage from '@/assets/images/grain.jpg'
import { twMerge } from 'tailwind-merge'

type Props = {
  children?: React.ReactNode
  className?: string
}

function Card({ children, className }: Props) {
  return (
    <div
      className={twMerge(
        'relative bg-white/10 h-fit w-fit rounded-2xl p-4 border border-white/25 ring-1 ring-white/10',
        className
      )}
    >
      {/* Grain textture */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <Image src={grainImage} alt="Grain texture" fill className="object-cover opacity-20" />
      </div>
      {children}
    </div>
  )
}

export default Card
