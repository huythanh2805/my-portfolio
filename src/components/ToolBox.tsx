import React, { Fragment } from 'react'
import { TechIcon } from './TechIcon'
import { twMerge } from 'tailwind-merge'

type Props = {
  toolboxItems: {
    title: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
  className?: string
}

function ToolBox({ toolboxItems, className }: Props) {
  return (
    <div className={twMerge('flex flex-nowrap gap-6 py-3', className)}>
      {[...new Array(2)].fill(0).map((_, outerIdx) => (
        <Fragment key={outerIdx}>
          {toolboxItems.map((item, index) => (
            <div
              key={index}
              className="h-fit flex items-center justify-center gap-4 px-2 py-1 rounded-lg outline-1 outline-white/20"
            >
              <TechIcon component={item.icon} />
              <p className="text-center font-semibold text-lg">{item.title}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  )
}

export default ToolBox
