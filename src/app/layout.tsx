import type { Metadata, Viewport } from "next";
import { Inter, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { portfolioConfig } from "@/config/portfolio";
import { PersonJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  preload: true,
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  themeColor: "#080c14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: portfolioConfig.seo.defaultTitle,
    template: `%s | ${portfolioConfig.name}`,
  },
  description: portfolioConfig.seo.defaultDescription,
  keywords: [
    "Python developer",
    "Django developer",
    "Next.js developer",
    "full stack developer for hire",
    "hire freelance web developer",
    "remote developer",
    "DRF API developer",
    "PostgreSQL expert",
    "freelance web developer",
    "SaaS developer",
    "e-commerce developer",
    "school website developer",
    "custom web application",
    "React developer for hire",
    "FastAPI developer",
    "SEO consultant",
    "website development services",
  ],
  authors: [{ name: portfolioConfig.name }],
  creator: portfolioConfig.name,
  metadataBase: new URL(portfolioConfig.seo.url),
  alternates: {
    canonical: portfolioConfig.seo.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolioConfig.seo.url,
    title: portfolioConfig.seo.defaultTitle,
    description: portfolioConfig.seo.defaultDescription,
    siteName: portfolioConfig.name,
    images: [
      {
        url: `${portfolioConfig.seo.url}/og`,
        width: 1200,
        height: 630,
        alt: `${portfolioConfig.name} - Full Stack Developer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioConfig.seo.defaultTitle,
    description: portfolioConfig.seo.defaultDescription,
    images: [`${portfolioConfig.seo.url}/og`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* DNS prefetch & preconnect for external resources */}
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
        {/* Load devicon CSS async to avoid render-blocking */}
        <link
          rel="preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <PersonJsonLd />
        <WebSiteJsonLd />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} ${jetbrainsMono.variable} font-body antialiased noise`}
      >
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
