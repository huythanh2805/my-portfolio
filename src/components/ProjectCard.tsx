import React from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import Image from 'next/image'
import grainImage from '@/assets/images/grain.jpg'

interface ProjectResult {
  title: string
}

interface ProjectCardProps {
  company: string
  year: string
  title: string
  results: ProjectResult[]
  link: string
  image: string
  isReversed?: boolean
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  company,
  year,
  title,
  results,
  link,
  image,
  isReversed = false,
}) => {
  return (
    <div
      className="relative rounded-3xl p-8 md:p-10 lg:p-12 overflow-hidden border border-white/50 bg-white/5"
      // style={{
      //   backgroundColor: '#141a26',
      //   boxShadow: '0 0 60px -15px rgba(45, 212, 191, 0.15)',
      // }}
    >
      <div className="absolute inset-0 -z-10 opacity-5">
        <Image src={grainImage} alt="Grain texture" fill className="object-cover opacity-20" />
      </div>
      <div
        className={`flex flex-col ${
          isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } gap-8 lg:gap-16 items-center`}
      >
        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Company & Year */}
          <div className="flex items-center gap-2 text-sm font-medium tracking-wider uppercase">
            <span className="bg-linear-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">{`${company} • ${year}`}</span>
          </div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-[#f1f5f9] leading-tight">
            {title}
          </h3>

          {/* Results */}
          <ul className="space-y-3">
            {results.map((result, index) => (
              <li key={index} className="flex items-start gap-3 text-white/25">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ backgroundColor: 'rgba(45, 212, 191, 0.1)' }}
                >
                  <Check className="w-3 h-3 text-[#2dd4bf]" />
                </span>
                <span>{result.title}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="group mt-4 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 transition-colors border border-[#1e293b] bg-transparent text-[#f1f5f9] hover:bg-[#2dd4bf] hover:text-[#0a0d14]">
              Visit Live Site
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </a>
        </div>

        {/* Image */}
        <div className="flex-1 w-full lg:w-auto">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-xl opacity-50"
              style={{
                background:
                  'linear-gradient(to bottom right, rgba(45, 212, 191, 0.2), transparent)',
              }}
            />
            <Image
              src={image}
              alt={title}
              className="w-full rounded-xl shadow-2xl transform lg:rotate-3 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
