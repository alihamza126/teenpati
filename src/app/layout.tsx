import type React from "react"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import Footer from "@/components/footer"
import PromotionalBanner from "@/components/PromotionalBanner"
import { Header } from "@/components/header"
import { AnimatedDownloadButtons } from "@/components/AnimatedDownloadButtons"
import siteMetadata from "@/lib/siteMetaData"

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  keyword: [],
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    // cryptomus: "6c638042",
  },
  socialMedia: {
    youtube: siteMetadata.youtube,
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Suspense fallback={null}>
          <AnimatedDownloadButtons />
          <Analytics />
          <PromotionalBanner />
        </Suspense>
      </body>
    </html>
  )
}
