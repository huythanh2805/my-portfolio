import React from 'react'
import { Sparkle } from 'lucide-react'

const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
]
type Props = {}
function TapeSection({ }: Props) {
    return (
            <div className="relative w-full overflow-hidden h-45 flex-col-center">
                <div className='bg-linear-to-r from-emerald-300 to-sky-400 -rotate-3 '>
                    <div className="flex animate-tape mask-[linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]
">
                        {[...words, ...words].map((word, index) => (
                            <div key={index} className='flex-row-center'>
                                <span className="px-4 py-2 text-sm texts font-bold text-gray-800 whitespace-nowrap uppercase">
                                    {word}
                                </span>
                                <Sparkle
                                    className="fill-current stroke-none text-black mx-1 size-5 -rotate-12"
                                />
                            </div>

                        ))}
                    </div>
                </div>
            </div>
    )
}

export default TapeSection