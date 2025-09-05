import "./globals.css";


import { ReactNode } from "react";
import Navbar from "../components/Header";
import Footer from "../pages/contact";
export const metadata = {
  title: "PR Integrated Services",
  description: "Cleaning Services Company",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className="bg-pink-50">
       <Navbar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
