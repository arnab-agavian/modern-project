import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: "The modern Circle | Best Interior Designer In Patna",
  description: "Best Interior designer in Patna - The Modern Circle. We blend creativity and functionality to design interiors that inspire. With a passion for modern aesthetics and exceptional craftsmanship, we bring your vision to life.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  }
};
