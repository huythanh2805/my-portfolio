import Star from '@/assets/icons/star.svg'
import React from 'react'

type Props = {
  sizeStar: number
  sizeOrbit: number
  rotation: number
  opacity: number
  isCircle?: boolean
  starDuraiton?: string
}

function HeroOrbit({ sizeStar, sizeOrbit, rotation, opacity, isCircle, starDuraiton }: Props) {
  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        height: `${sizeOrbit}px`,
        width: `${sizeOrbit}px`,
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <div
        style={{
          transform: `rotate(${rotation * -1}deg)`,
        }}
        className=" inline-flex"
      >
        {isCircle ? (
          <div
            style={{
              height: `${sizeStar}px`,
              width: `${sizeStar}px`,
              opacity: opacity,
            }}
            className="bg-emerald-300 rounded-full"
          />
        ) : (
          <Star
            style={{
              height: `${sizeStar}px`,
              width: `${sizeStar}px`,
              opacity: opacity,
              animationDuration: starDuraiton,
            }}
            className=" text-emerald-300 animate-spin"
          />
        )}
      </div>
    </div>
  )
}

export default HeroOrbit
