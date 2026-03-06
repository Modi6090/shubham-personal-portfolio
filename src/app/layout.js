import { Outfit, Inter } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit'
})

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter'
})

export const metadata = {
    title: 'Shubham Modi | Portfolio',
    description: 'Personal portfolio of Shubham Modi, Full Stack Developer',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
        </html>
    )
}
