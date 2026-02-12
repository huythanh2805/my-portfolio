import type { Metadata } from 'next'
import { Inter, Calistoga } from 'next/font/google'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Lê Thanh | Software Engineer',
  description:
    'Software Engineer building scalable web applications and backend systems using modern technologies.',
  keywords: [
    'Lê Thanh',
    'Backend Developer',
    'Node.js',
    'NestJS',
    'TypeScript',
    'Nextjs',
    'Reactjs',
    'Portfolio',
  ],
  authors: [{ name: 'Lê Thanh' }],
  creator: 'Lê Thanh',
  icons: {
    icon: '/lethanh.jpg',
  },
}
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const calistoga = Calistoga({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: '400',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${calistoga.variable} bg-gray-900 text-white font-sans max-w-screen overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  )
}
