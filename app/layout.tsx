import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Orthodox College Of Africa – Teachers Training College (TTC)",
    template: "%s | Orthodox College Of Africa TTC",
    
  },
  icons: {
    icon: "/fav.png",
    shortcut: "/fav.png",
    apple: "/fav.png",
  },
  description:
    "Orthodox College Of Africa Teachers Training College (TTC) is dedicated to training professional, competent, and ethical teachers for schools across Kenya and Africa.",
  keywords: [
    "Teachers Training College in Kenya",
    "TTC in Kenya",
    "Teacher Training Kenya",
    "Primary Teacher Training",
    "Diploma in Education Kenya",
    "Orthodox College Of Africa TTC",
    "Best Teacher Training College in Africa",
    "Teaching Courses Kenya",
  ],
  authors: [{ name: "Orthodox College Of Africa TTC" }],
  creator: "Orthodox College Of Africa",
  publisher: "Orthodox College Of Africa",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Orthodox College Of Africa – Teachers Training College (TTC)",
    description:
      "A leading Teachers Training College preparing qualified and skilled educators for modern classrooms.",
    url: "https://orthodoxcollegeofafrica.vercel.app/",
    siteName: "Orthodox College Of Africa TTC",
    images: [
      {
        url: "/reception1.jpeg",
        width: 1200,
        height: 630,
        alt: "Orthodox College Of Africa Teachers Training College campus",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orthodox College Of Africa TTC",
    description:
      "Professional teacher training for a brighter future in education.",
    images: ["/reception1.jpeg"],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head 
      
      >
        <meta name="google-site-verification" content="xnaZIJjX-jio0n2iI1ZXSb1CHjSV802cCUpXHNzQyQw" />
        <meta name="description" content="Orthodox College of Africa – Education, Training, and Community Programs" />
<meta name="keywords" content="Orthodox College, Africa, TTC, Education, Training" />
<meta property="og:title" content="Orthodox College of Africa & TTC" />
<meta property="og:description" content="Providing quality education and teacher training programs in Africa" />
<meta property="og:type" content="website" />

        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        
        <Header />
        
        {children}
        <Footer />
        </body>
    </html>
  );
}
