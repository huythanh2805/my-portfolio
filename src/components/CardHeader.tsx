import React from 'react'
import Star from "@/assets/icons/star.svg";
import { twMerge } from 'tailwind-merge';

type Props = {
    title: string
    subtitle: string
    className?: string
}

function CardHeader({ title, subtitle, className }: Props) {
    return (
        <div className={twMerge(
            `max-w-110 overflow-hidden`,
            className
        )}>
            <div className='flex-row-center justify-start'>
                <Star className="size-8 text-emerald-300" />
                <h2 className='text-2xl ml-2 font-serif'>{title}</h2>
            </div>
            <p className='text-gray-500'>{subtitle}</p>
        </div>
    )
}

export default CardHeader