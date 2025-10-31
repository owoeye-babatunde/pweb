import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const plusJarkata = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  // Basic Metadata
  metadataBase: new URL("https://panzle.com"),
  title: {
    default:
      "Panzle - AI-Driven Custom Software Development & Automation Solutions",
    template: "%s | Panzle",
  },
  description:
    "Transform your business with AI-powered software solutions. Panzle delivers custom software development, AI integration, chatbot development, and automation for startups and enterprises. 40+ successful projects globally.",

  // Keywords for SEO
  keywords: [
    "AI software development",
    "custom software development",
    "AI integration services",
    "chatbot development",
    "AI automation",
    "machine learning solutions",
    "natural language processing",
    "GPT integration",
    "virtual assistant development",
    "UI/UX design",
    "data engineering",
    "API development",
    "predictive analytics",
    "software agency",
    "AI agency",
    "startup software development",
    "enterprise AI solutions",
    "LLM integration",
    "business automation",
    "scalable software solutions",
  ],

  // Author and Creator
  authors: [{ name: "Panzle" }],
  creator: "Panzle",
  publisher: "Panzle",

  // Open Graph (for social media sharing)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://panzle.com", // Replace with your actual domain
    siteName: "Panzle",
    title: "Panzle - AI-Driven Custom Software Development & Automation",
    description:
      "Leading AI software agency helping startups and businesses automate, scale, and innovate with custom software development and artificial intelligence solutions.",
    images: [
      {
        url: "/panzle-og-img.png", // Create a 1200x630px image
        width: 1200,
        height: 630,
        alt: "Panzle - AI-Driven Software Solutions",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Panzle - AI-Driven Custom Software Development & Automation",
    description:
      "Transform your business with AI-powered software solutions. Custom development, AI integration, and automation for startups and enterprises.",
    images: ["/panzle-og-img.png"], // Create a 1200x600px image
    creator: "@panzle_official", // Replace with your Twitter handle
  },

  // Robots
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

  // Verification (add these to verify with search engines)
  verification: {
    google: "your-google-verification-code", // Get from Google Search Console
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Additional metadata
  category: "Technology",

  // Alternate languages (if you have multi-language support)
  // alternates: {
  //   canonical: "https://panzle.com",
  //   languages: {
  //     'en-US': 'https://panzle.com',
  //     'es-ES': 'https://panzle.com/es',
  //   },
  // },
};

//JOSEPH update all these information with the correct one
// Add this to your layout.tsx or a dedicated component
// This helps Google understand your business better

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Panzle",
  url: "https://panzle.com",
  logo: "https://panzle.com/Panzle.webp",
  description:
    "AI-driven software development agency specializing in custom software, AI integration, and automation solutions for startups and enterprises.",
  foundingDate: "2025", // Update with your actual founding date
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG", // Update with your country
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "tunde@panzle.com", // Update with your email
  },
  sameAs: [
    "https://x.com/panzle_official?s=21",
    "https://www.linkedin.com/company/panzle/",
    // "https://www.instagram.com/panzle",
    // "https://www.facebook.com/panzle",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "40",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI Software Development",
  provider: {
    "@type": "Organization",
    name: "Panzle",
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Software Development",
          description:
            "Tailored web platforms and mobile apps that solve real business problems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Integration & Automation",
          description:
            "Machine learning, NLP, and predictive analytics solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Chatbot & Virtual Assistant Development",
          description:
            "Intelligent bots using GPT and other LLMs for support and operations",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Design",
          description:
            "Intuitive interfaces that boost user engagement and retention",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Engineering & APIs",
          description: "Secure, scalable backends and system integrations",
        },
      },
    ],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Panzle",
  image: "https://panzle.com/Panzle.webp",
  description:
    "AI and software development agency helping businesses automate, scale, and innovate",
  email: "tunde@panzle.com",
  url: "https://panzle.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
};

// Usage in layout.tsx:
// Add this script tag to your layout.tsx <head>
/*
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      organizationSchema,
      serviceSchema,
      localBusinessSchema
    ])
  }}
/>
*/

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        // ${geistSans.variable} ${geistMono.variable}
        className={`${plusJarkata.variable} ${inter.variable} antialiased`}
      >
        <ThemeProvider
          attribute={"class"}
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
