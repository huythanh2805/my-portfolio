import React from 'react';
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import ProjectCard from '@/components/ProjectCard';

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
];

const ProductsSection: React.FC = () => {
  return (
    <section className="min-h-screen py-0 lg:py-12 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="bg-linear-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent text-sm font-semibold tracking-widest uppercase mb-4">
            Real-World Results
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium text-[#f1f5f9] mb-6">
            Featured Projects
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-md mx-auto">
            See how I transformed concepts into engaging digital experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-12 lg:space-y-20">
          {portfolioProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;