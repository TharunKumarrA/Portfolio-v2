import { Space_Mono, Rubik } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "./components/NavigationBar";
import { RouteImage } from "./components/RouteImage";
import { Footer } from "./components/footer";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Tharun Kumarr A",
  description:
    "Official portfolio of Tharun Kumarr A - Frontend Developer and Tech Enthusiast.",
  keywords:
    "Tharun Kumarr, Portfolio, Frontend Developer, Web Developer, Tech Enthusiast",
  author: "Tharun Kumarr A",
  icons: {
    icon: "/cosmos-logo.ico",
    apple: "/cosmos-logo.ico",
    shortcut: "/cosmos-logo.ico",
  },
  themeColor: "#D8392B",
  openGraph: {
    type: "website",
    title: "Tharun Kumarr A",
    description:
      "Explore Tharun Kumarr's journey in frontend development and technology.",
    url: "https://tharunkumarra.vercel.app",
    images: [
      {
        url: "/banner.png", // LinkedIn preview image
        width: 1200,
        height: 630,
        alt: "Tharun Kumarr Portfolio Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@astro_tharun",
    creator: "@astro_tharun",
    title: "Tharun Kumarr A",
    description:
      "Explore Tharun Kumarr's journey in frontend development and technology.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${rubik.variable} antialiased text-text bg-background relative`}
      >
        <RouteImage />
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
