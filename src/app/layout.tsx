import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";
import { lato } from "./fonts";
import { schema } from "./schema";

export const metadata = {
  title:
    "Gdańska Szkoła Fechtunku | Trening Szermierki dla Początkujących i Zaawansowanych Gdańsk | Dawne Europejskie Sztuki Walki Gdańsk",
  description:
    "Profesjonalna szkoła fechtunku w Gdańsku. Treningi dla dzieci i dorosłych. Dołącz do nas i rozpocznij naukę szermierki.",
};

export const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
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
        <title>Gdańska Szkoła Fechtunku im. Piotra Gdańska</title>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
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
