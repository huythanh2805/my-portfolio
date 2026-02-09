import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png'
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png'
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png'
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png'
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png'
import Card from '@/components/Card'
import SectionHeader from '@/components/SectionHeader'
import Image from 'next/image'

export const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: 'Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and creative solutions exceeded our expectations.',
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our design vision to life beautifully.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: 'Alex’s ability to create seamless user experiences is unmatched. Our website has seen a significant increase in engagement since launch.',
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ BrightApps',
    text: 'Professional, reliable, and highly skilled. Alex delivered beyond expectations and ahead of schedule.',
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Founder @ StartupHub',
    text: 'Alex understands both business goals and technical execution. A rare and valuable combination.',
    avatar: memojiAvatar5,
  },
]

type Props = {}

function ClientTestimonial({}: Props) {
  return (
    <div className="page-container overflow-hidden min-h-0 ">
      {/* Section Header */}
      <SectionHeader
        name="Happy Clients"
        title="What People Say About Me"
        subtitle="Don't just take my word for it. See what my clients have to say about my work"
      />
      {/* Fade layer */}
      <div className="relative inset-0 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] ">
        <div className="flex-row-center justify-start">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="min-w-[375px] h-55 mx-6">
              {/* Client Information */}
              <div className="w-full ">
                <div className="flex-row-center gap-4 justify-start">
                  <div className="w-14 h-14 rounded-full bg-white/25 flex-col-center">
                    <Image src={testimonial.avatar} alt="Customer Avatar" width={50} height={50} />
                  </div>
                  <div>
                    <p className="font-medium text-sm font-serif">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                {/* Testimonial Text */}
                <div className="mt-4 ">
                  <p className="text-white/80">{testimonial.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClientTestimonial
