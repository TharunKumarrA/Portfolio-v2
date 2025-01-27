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
  title: "Tharun's Portfolio",
  description: "Portfolio website of Tharun Kumarr A",
  icons: {
    icon: '/cosmos-logo.ico',
    apple: '/cosmos-logo.ico',
    shortcut: '/cosmos-logo.ico',
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
