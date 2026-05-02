import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Mihiresh Joshi — The Portfolio Chronicle',
  description: 'Software Engineer, AI/ML Enthusiast & Full Stack Developer',
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
