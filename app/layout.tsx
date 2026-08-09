import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sunil Saini | Senior Mobile Engineer – Flutter & React Native",
  description:
    "Senior mobile engineer with 4+ years of experience building high-performance cross-platform apps with Flutter and React Native. Specializing in fintech, real-time systems, and SaaS products.",
  keywords: [
    "Flutter Developer",
    "React Native Developer",
    "Mobile App Developer",
    "Cross-Platform",
    "Firebase",
    "WebRTC",
    "Stripe Integration",
  ],
  authors: [{ name: "Sunil Saini" }],
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Sunil Saini | Senior Mobile Engineer",
    description:
      "Senior Flutter & React Native developer with 4+ years building high-performance mobile apps.",
    url: "https://sunilsaini.dev",
    siteName: "Sunil Saini Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunil Saini | Senior Mobile Engineer",
    description:
      "Senior Flutter & React Native developer with 4+ years building high-performance mobile apps.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sunil Saini",
  jobTitle: "Senior Mobile Engineer",
  url: "https://sunilsaini.dev",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kota",
    addressRegion: "Rajasthan",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Flutter",
    "React Native",
    "Firebase",
    "WebRTC",
    "Stripe",
    "PostgreSQL",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">
        <div className="aurora" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
