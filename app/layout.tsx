import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/ai/Chatbot";
import { ThemeProvider } from "@/components/theme-provider";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { LanguageProvider } from "@/lib/language-context";
import { SkipToContent } from "@/components/skip-to-content";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Brijmohan Agrawal - BJP MP Raipur",
    template: "%s | Brijmohan Agrawal"
  },
  description: "Official website of Brijmohan Agrawal, BJP Member of Parliament from Raipur, Chhattisgarh.",
  keywords: ["Brijmohan Agrawal", "BJP", "Raipur", "MP", "Chhattisgarh"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Header />
            <Breadcrumbs />
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            <Chatbot />
            <Footer />
          </LanguageProvider>
        </ThemeProvider>

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://brijmohanagrawal.com/#person",
                  "name": "Brijmohan Agrawal",
                  "jobTitle": "Member of Parliament",
                  "affiliation": {
                    "@type": "Organization",
                    "name": "Bharatiya Janata Party",
                    "url": "https://www.bjp.org"
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Raipur",
                    "addressRegion": "Chhattisgarh",
                    "addressCountry": "IN"
                  },
                  "url": "https://brijmohanagrawal.com",
                  "sameAs": [
                    "https://twitter.com/brijmohanagrawal",
                    "https://facebook.com/brijmohanagrawal"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://brijmohanagrawal.com/#website",
                  "url": "https://brijmohanagrawal.com",
                  "name": "Brijmohan Agrawal - BJP MP Raipur",
                  "description": "Official website of Brijmohan Agrawal, BJP Member of Parliament from Raipur, Chhattisgarh",
                  "publisher": {
                    "@id": "https://brijmohanagrawal.com/#person"
                  },
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://brijmohanagrawal.com/?s={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Organization",
                  "@id": "https://brijmohanagrawal.com/#organization",
                  "name": "Office of Brijmohan Agrawal",
                  "url": "https://brijmohanagrawal.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://brijmohanagrawal.com/logo.png"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-0771-2425555",
                    "contactType": "Public Office",
                    "areaServed": "IN-CT",
                    "availableLanguage": ["en", "hi"]
                  },
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "B-12, Civil Lines, Near Governor House",
                    "addressLocality": "Raipur",
                    "addressRegion": "Chhattisgarh",
                    "postalCode": "492001",
                    "addressCountry": "IN"
                  }
                }
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
