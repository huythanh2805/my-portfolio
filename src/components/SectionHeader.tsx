import React from 'react'

type Props = {
    name: string,
    title: string,
    subtitle: string,
}

function SectionHeader({ name, title, subtitle }: Props) {
    return (
        <div className="text-center mb-16 lg:mb-24">
            <p className="bg-linear-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-sm font-semibold tracking-widest uppercase mb-4">
               {name}
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-[#f1f5f9] mb-6">
                {title}
            </h2>
            <p className="text-[#94a3b8] text-lg max-w-md mx-auto">
                {subtitle}
            </p>
        </div>
    )
}

export default SectionHeader