import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { AlertProvider } from "@/components/ui/alert-provider"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://rahmat-motor.vercel.app"), // ganti domain asli

  title: {
    default: "Rahmat Motor | Bengkel Sepeda Motor Terpercaya di Sepatan Timur",
    template: "%s | Rahmat Motor",
  },

  description:
    "Rahmat Motor adalah bengkel sepeda motor terpercaya di Sepatan Timur, Tangerang. Melayani service besar, service kecil, tune up karburator & injektor, ganti oli, rem, suspensi dengan harga terjangkau dan teknisi ramah.",

  keywords: [
    "bengkel motor sepatan timur",
    "bengkel motor tangerang",
    "service motor sepatan",
    "ganti oli motor sepatan",
    "tune up motor tangerang",
    "bengkel motor terpercaya",
    "rahmat motor",
    "bengkel sepeda motor",
    "service motor lengkap",
    "bengkel motor murah",
    "bengkel motor terbaik",
    "service motor sepatan timur",
    "service motor tangerang",
    'rahmat motor sepatan',
    'rahmat motor tangerang',
    'rahmat motor sepatan timur',
  ],

  authors: [{ name: "Rahmat Motor" }],
  creator: "Rahmat Motor",
  publisher: "Rahmat Motor",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rahmat-motor.vercel.app",
    siteName: "Rahmat Motor",
    title: "Rahmat Motor | Bengkel Motor Terpercaya di Sepatan Timur",
    description:
      "Bengkel motor profesional di Sepatan Timur. Service lengkap, teknisi ramah, harga terjangkau. Buka setiap hari pukul 10.00 – 17.00.",
    images: [
      {
        url: "/busi.jpg",
        width: 800,
        height: 800,
        alt: "Rahmat Motor - Bengkel Sepeda Motor",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rahmat Motor | Bengkel Motor Sepatan Timur",
    description:
      "Service motor lengkap di Sepatan Timur. Ganti oli, tune up, servis berkala dengan teknisi berpengalaman.",
    images: ["/busi.jpg"],
  },

  icons: {
    icon: "/busi.jpg",
    apple: "/busi.jpg",
    shortcut: "/busi.jpg",
  },

  category: "Automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`font-sans antialiased`}>
         <AlertProvider>{children}</AlertProvider>
        <Analytics />
      </body>
    </html>
  )
}
