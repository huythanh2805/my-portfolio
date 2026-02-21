import { ArrowUpRight } from 'lucide-react'
function ContactSection() {
  return (
    <div className="page-container my-12 md:my-24 px-4 min-h-0 p-0">
      <div className="relative flex flex-col items-center md:flex-row lg:justify-between  gap-4 md:gap-18 py-6 px-4 bg-linear-to-r from-emerald-300 to-sky-400 rounded-xl">
        {/* Layer blur */}
        <div>
          <h2 className="font-medium font-serif text-xl md:text-2xl text-gray-950 text-center md:text-start">
            Let&apos;s create something amazing together
          </h2>
          <p className="text-sm text-gray-950 font-medium text-center md:text-start">
            Ready to bring your next project to life? Let&apos;s connect and discuss how I can help
            you achieve your goals.
          </p>
        </div>
        <div>
          <button className="group mt-1 inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2 transition-colors border border-[#1e293b] bg-black text-[#f1f5f9] ">
            Contact Me
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
