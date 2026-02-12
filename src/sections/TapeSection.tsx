import React, { Fragment } from 'react'
import Star from '@/assets/icons/star.svg'

const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Maintainable',
  'Search Optimized',
  'Usable',
  'Reliable',
]

type Props = {}

function TapeSection({}: Props) {
  return (
    <div className="relative w-full h-64 lg:h-84 flex-col-center">
      <div className="bg-linear-to-r from-emerald-300 to-sky-400 -rotate-3">
        <div className="mask-[linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
          <div className="flex animate-marquee max-w-screen">
            {[...new Array(2)].fill(0).map((_, outerIdx) => (
              <Fragment key={outerIdx}>
                {words.map((word, innerIdx) => (
                  <div key={`${outerIdx}-${innerIdx}`} className="flex items-center">
                    <span className="px-8 py-2 text-sm font-bold text-gray-800 whitespace-nowrap uppercase">
                      {word}
                    </span>

                    <Star className="text-black mx-1 size-5 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TapeSection
