import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif } from "next/font/google";
import { content } from "@/data/content";
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

export const metadata: Metadata = {
  title: content.name,
  description: content.summary,
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
