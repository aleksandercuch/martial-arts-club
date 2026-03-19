// app/[locale]/layout.tsx
"use client"; // potrzebne jeśli korzystasz z useState/useEffect w NextIntlClientProvider

import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const locales = ["pl", "en"];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).then(
      (m) => m.default,
    );
  } catch {
    notFound();
  }

  return (
    <>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </NextIntlClientProvider>
    </>
  );
}
