'use client'
import memojiImage from '@/assets/images/memoji-computer.png'
import Image from 'next/image'
import grainImage from '@/assets/images/grain.jpg'
import { ArrowDown } from 'lucide-react'
import HeroOrbit from '@/components/HeroOrbit'

function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex-col-center overflow-clip">
      <div
        className="absolute inset-0
            [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]
            "
      >
        {/* star on left */}
        <HeroOrbit sizeStar={80} sizeOrbit={750} rotation={-80} opacity={0.9} />
        <HeroOrbit sizeStar={20} sizeOrbit={400} rotation={-20} opacity={0.4} />
        <HeroOrbit sizeStar={30} sizeOrbit={520} rotation={20} opacity={1} />
        {/* star on right */}
        <HeroOrbit sizeStar={15} sizeOrbit={440} rotation={85} opacity={0.3} />
        <HeroOrbit sizeStar={25} sizeOrbit={570} rotation={105} opacity={0.9} />
        <HeroOrbit sizeStar={40} sizeOrbit={680} rotation={140} opacity={0.3} />
        <HeroOrbit sizeStar={20} sizeOrbit={400} rotation={180} opacity={0.3} />
        {/* texture */}
        <HeroOrbit sizeStar={5} sizeOrbit={520} rotation={-40} opacity={0.4} isCircle />
        <HeroOrbit sizeStar={5} sizeOrbit={650} rotation={-10} opacity={0.4} isCircle />
        <HeroOrbit sizeStar={10} sizeOrbit={650} rotation={85} opacity={0.4} isCircle />
        <div className="absolute inset-0 -z-10 opacity-5">
          <Image src={grainImage} alt="Grain texture" fill className="object-cover opacity-20" />
        </div>
        {/* orbit texture */}
        <div className="absolute h-[620px] w-[620px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/5 inset-0 shadow-[0_0_80px_inset] shadow-emerald-300/5 -z-10"></div>
        <div className="absolute h-[820px] w-[820px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/5 inset-0 shadow-[0_0_80px_inset] shadow-emerald-300/5 -z-10"></div>
        <div className="absolute h-[1020px] w-[1020px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/5 inset-0 shadow-[0_0_80px_inset] shadow-emerald-300/5 -z-10"></div>
        <div className="absolute h-[1220px] w-[1220px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-300/5 inset-0 shadow-[0_0_80px_inset] shadow-emerald-300/5 -z-10"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-120">
          <div className="flex-row-center flex-col mb-6">
            <Image src={memojiImage} alt="Memoji of the developer" width={80} height={80} />
            <div className="flex-row-center bg-gray-950 px-3 py-0.5 border border-gray-600 rounded-md">
              <div className="size-2.5 mr-3 bg-green-500 rounded-full"></div>
              <div className="text-sm">Available for new projects</div>
            </div>
          </div>

          <div className="flex-col-center ">
            <div className="text-3xl md:text-4xl font-serif text-center">
              Building Exceptional User Experiences
            </div>
            <div className="text-white/25 text-center w-full md:w-5/6 mt-2 mb-4">
              I specialize in transforming designs into functional, high-performing web
              applications. Let's discuss your next project.
            </div>

            <div className="flex-col-center md:flex-row gap-2 md:gap-4">
              <button className="bg-gray-900 border border-white/15 px-4 py-2 rounded-lg flex-row-center hover:bg-gray-800 transition cursor-pointer">
                Explore My Work
                <ArrowDown className="ml-2 size-4" />
              </button>
              <button className="bg-white border text-black font-semibold border-white/15 px-4 py-2 rounded-lg flex-row-center hover:bg-white/75 transition cursor-pointer">
                👋 Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
