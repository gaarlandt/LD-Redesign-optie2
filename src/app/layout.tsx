import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const national2 = localFont({
  src: [
    {
      path: "../../public/fonts/National2-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/National2-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-national2",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Let's Dog — De #1 trainingsapp voor hondenouders",
    template: "%s | Let's Dog",
  },
  description:
    "Leer je puppy goed te begrijpen, groei en train samen. Gebouwd door gecertificeerde hondengedragstherapeuten.",
  metadataBase: new URL("https://www.letsdog.nl"),
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "Let's Dog",
    title: "Let's Dog — De #1 trainingsapp voor hondenouders",
    description:
      "Leer je puppy goed te begrijpen, groei en train samen. Gebouwd door gecertificeerde hondengedragstherapeuten.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${national2.variable} ${dmSans.variable}`}
    >
      <body className="min-h-dvh flex flex-col antialiased">
        <a href="#main-content" className="skip-to-content">
          Ga naar inhoud
        </a>
        {children}
      </body>
    </html>
  );
}
