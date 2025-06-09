import './globals.css'
import { Inter, Bebas_Neue } from 'next/font/google'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import ScrollToTopButton from './component/ScrollToTopButton'

// Import Google Fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
})

export const metadata = {
  title: 'JOY MA KALI AUTO ELECTRIC',
  description: 'Power Solutions taken to the next level',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebas.variable}`}>
      <body suppressHydrationWarning className="overflow-x-hidden font-sans">
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  )
}
