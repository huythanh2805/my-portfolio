import { ArrowUpRight } from 'lucide-react'
import React from 'react'

type Props = {}
const FooterLinks = [
  {
    name: 'Youtube',
    link: '#',
  },
  {
    name: 'Twitter',
    link: '#',
  },
  {
    name: 'Instagram',
    link: '#',
  },
  {
    name: 'LinkedIn',
    link: '#',
  },
]
function Footer({}: Props) {
  return (
    <div className="page-container py-4 min-h-0 mt-4 border-t border-white/25 flex flex-col gap-4 md:flex-row items-center justify-center md:justify-between">
      {/* Layer */}
      <div
        className="
        absolute
    h-[400px]
    w-[1600px]
    bottom-0
    left-1/2
    -translate-x-1/2
    bg-emerald-300/30
    [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]
    z-[-10]"
      ></div>
      <div></div>
      <div className="flex flex-col gap-2 md:flex-row items-center justify-center md:justify-between">
        {FooterLinks.map((item, index) => (
          <button
            key={index}
            className="group mt-1 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 transition-colors border-none bg-transparent text-[#f1f5f9] "
          >
            {item.name}
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Footer
