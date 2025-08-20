import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "600", "700", "900"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Kunal Kanse Portfolio | UI/UX • Graphics • Video",
  description:
    "Multidisciplinary designer specializing in UI/UX design, graphic design, and video editing. I design visuals, interfaces, and stories.",
  generator: "Kunal Kanse",
  openGraph: {
    title: "Kunal Kanse Portfolio",
    description:
      "Multidisciplinary designer specializing in UI/UX design, graphic design, and video editing.",
    url: "https://yourdomain.com",   // 🔹 Replace with your website URL
    siteName: "Kunal Kanse Portfolio",
    images: [
      {
        url: "public/Cover Image.jpg", // 🔹 Your photo (place in /public/ folder)
        width: 1200,
        height: 630,
        alt: "Kunal Kanse",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kunal Kanse Portfolio",
    description:
      "Multidisciplinary designer specializing in UI/UX design, graphic design, and video editing.",
    images: ["https://yourdomain.com/kunal.jpg"], // 🔹 Same image for Twitter
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
