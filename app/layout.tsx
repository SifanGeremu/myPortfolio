import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import { content } from "@/data/content";
import { allowIndexing, siteOrigin } from "@/lib/site";
import "./globals.css";

const serif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const title = `${content.name} | ${content.role}`;
const description = `${content.summary} ${content.status}.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title,
  description,
  applicationName: content.name,
  authors: [{ name: content.name, url: "https://www.linkedin.com/in/sifan-geremu" }],
  creator: content.name,
  alternates: { canonical: "/" },
  robots: allowIndexing()
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
    : { index: false, follow: false },
  openGraph: {
    type: "profile",
    firstName: "Sifan",
    lastName: "Geremu",
    username: "SifanGeremu",
    title,
    description,
    url: "/",
    siteName: content.name,
    locale: "en_US",
    images: [{ url: content.banner.src, width: 739, height: 300, alt: content.banner.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [content.banner.src],
  },
};

const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.removeAttribute("data-theme")}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning className={`${serif.variable} ${mono.variable} h-full antialiased`}>
      <body className="min-h-full bg-bg text-fg">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
