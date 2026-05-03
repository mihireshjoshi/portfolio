import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: 'Mihiresh Joshi — The Portfolio Chronicle',
  description: 'Software Engineer, AI/ML Enthusiast & Full Stack Developer',
  icons: {
  icon: [
    { url: '/icon-light.png', media: '(prefers-color-scheme: light)' },
    { url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' },
  ],
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SpeedInsights />
        <Analytics mode="production" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
