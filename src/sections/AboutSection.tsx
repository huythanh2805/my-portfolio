import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import BookImage from "@/assets/images/book-cover.png";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import Image from 'next/image';
import CardHeader from '@/components/CardHeader';
import ToolBox from '@/components/ToolBox';
import MapImage from '@/assets/images/map.png';
const toolboxItems = [
  {
    title: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CSSIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
  {
    title: "GitHub",
    icon: GithubIcon,
  },
  {
    title: "GitHub",
    icon: GithubIcon,
  },
];
const hobbies = [
  {
    title: "Painting",
    emoji: "🎨",
    left: "10%",
    top: "20%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "60%",
    top: "15%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "30%",
    top: "45%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "70%",
    top: "50%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "15%",
    top: "70%",
  },
  {
    title: "Fitness",
    emoji: "🏋️",
    left: "55%",
    top: "75%",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "35%",
    top: "80%",
  },
]

function AboutSection() {
  return (
    <div className='page-container'>
      {/* Header Section */}
      <SectionHeader
        name="About Me"
        title="My Journey in Web Development"
        subtitle="Discover the story behind my passion for creating digital experiences"
      />
      {/* Content Section */}
      {/* Content Top */}
      <div className='w-full h-fit md:h-80 flex flex-col md:flex-row gap-3 md:gap-6 '>
        <Card className='w-full md:w-60 lg:w-80 md:h-80 overflow-hidden'>
          <CardHeader title='My Reads' subtitle='Books that have shaped my perspective' />
          <Image src={BookImage} alt="Book Cover" className="w-3/4 mx-auto object-cover rounded-lg mt-2" />
        </Card>
        <Card className='w-full flex-1 h-full p-0 overflow-hidden'>
          <CardHeader className='p-4' title='My Tools' subtitle='Explore the technologies and tools I use to craft exceptional digital experiences.' />
          <div className='w-full  relative inset-0 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] '>
            <ToolBox toolboxItems={toolboxItems} />
            <ToolBox toolboxItems={toolboxItems} className='-translate-x-12' />
          </div>
        </Card>
      </div>
      {/* Content Bottom */}
      <div className='w-full h-fit md:h-80 flex flex-col md:flex-row gap-3 md:gap-6 my-3 md:my-6'>
        <Card className='w-full flex-1 h-full p-0 overflow-hidden'>
          <div className='flex flex-col h-full'>
            <CardHeader className='p-4' title='Beyond the code' subtitle='Explore my interests and hobbies beyond the digital realm.' />
            <div className='flex-1 relative inset-0'>
              {
                hobbies.map((hobby, index) => (
                  <div key={index} className='absolute' style={{ left: hobby.left, top: hobby.top }}>
                    <span className='text-gray-900 cursor-pointer bg-linear-to-r from-emerald-300 px-4 py-1 to-sky-400 rounded-full text-sm font-medium flex items-center gap-2'>
                      {hobby.title}
                      {hobby.emoji}
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
        </Card>
        <Card className='w-full md:w-85 lg:w-105 md:h-80 overflow-hidden p-0'>
          <Image src={MapImage} alt="Book Cover" className="object-contain" />
        </Card>
      </div>

    </div>
  )
}

export default AboutSection