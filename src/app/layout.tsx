import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { lato } from "./fonts";

// Load Fira Sans globally with weights

export const metadata = {
  title: "Gdańska Szkoła Fechtunku",
  description:
    "Fundacja Gdańska Szkoła Fechtunku – tradycja, sport i edukacja dawnej sztuki walki",
};

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"], // Bebas Neue has only one weight
  display: "swap",
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${bebas.variable} ${lato.variable}`}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zop1lmn.css" />
      </head>
      <body className="bg-[url('/bg.jpg')] bg-cover bg-center min-h-screen">
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main className="flex-grow">{children}</main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
