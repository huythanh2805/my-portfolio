import React from 'react'
import darkSaasLandingPage from '@/assets/images/dark-saas-landing-page.png'
import lightSaasLandingPage from '@/assets/images/light-saas-landing-page.png'
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png'
import ProjectCard from '@/components/ProjectCard'
import SectionHeader from '@/components/SectionHeader'

const portfolioProjects = [
  {
    company: 'Acme Corp',
    year: '2022',
    title: 'Dark Saas Landing Page',
    results: [
      { title: 'Enhanced user experience by 40%' },
      { title: 'Improved site speed by 50%' },
      { title: 'Increased mobile traffic by 35%' },
    ],
    link: 'https://youtu.be/4k7IdSLxh6w',
    image: darkSaasLandingPage,
  },
  {
    company: 'Innovative Co',
    year: '2021',
    title: 'Light Saas Landing Page',
    results: [
      { title: 'Boosted sales by 20%' },
      { title: 'Expanded customer reach by 35%' },
      { title: 'Increased brand awareness by 15%' },
    ],
    link: 'https://youtu.be/7hi5zw075yc',
    image: lightSaasLandingPage,
  },
  {
    company: 'AI Startup',
    year: '2023',
    title: 'AI Startup Landing Page',
    results: [
      { title: 'Increased conversions by 45%' },
      { title: 'Improved engagement by 50%' },
      { title: 'Boosted user retention by 30%' },
    ],
    link: 'https://youtu.be/example123',
    image: aiStartupLandingPage,
  },
]

const ProductsSection: React.FC = () => {
  return (
    <section className="page-container">
      {/* Section Header */}
      <SectionHeader
        name="Real-World Results"
        title="Featured Projects"
        subtitle="See how I transformed concepts into engaging digital experiences."
      />

      {/* Project Cards */}
      <div className="space-y-12 lg:space-y-20">
        {portfolioProjects.map((project, index) => (
          <ProjectCard key={project.title} {...project} isReversed={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

export default ProductsSection
