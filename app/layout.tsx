import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hoveri.dev"),
  title: {
    default: "hoveri - Iconos que se mueven con intención",
    template: "%s · hoveri",
  },
  description:
    "Librería de iconos animados para React y Next.js, construida con Motion y Lucide. 329 iconos con movimiento propio.",
  keywords: [
    "iconos animados",
    "animated icons",
    "react icons",
    "motion",
    "lucide",
    "hoveri",
  ],
  openGraph: {
    type: "website",
    title: "hoveri - Iconos que se mueven con intención",
    description:
      "Librería de iconos animados para React y Next.js, construida con Motion y Lucide.",
    siteName: "hoveri",
    url: "https://hoveri.dev",
  },
  twitter: {
    card: "summary_large_image",
    title: "hoveri - Iconos que se mueven con intención",
    description:
      "Librería de iconos animados para React y Next.js, construida con Motion y Lucide.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t)t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";if(t==="dark")document.documentElement.classList.add("dark")}catch(e){}})();`,
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-white dark:bg-zinc-950">
        <ThemeProvider>
          <Navbar />
          <div className="flex flex-1 flex-col">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}