import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Receitas Fácil",
  description: "Receitas Fácil é a plataforma ideal para todos os amantes da culinária, oferecendo uma ampla gama de receitas, desde as mais simples até as mais sofisticadas. Desenvolvido para atender a todos os públicos, nosso projeto facilita a busca e o preparo de pratos deliciosos com instruções claras e ingredientes acessíveis. Explore, cozinhe e descubra novas receitas com Receitas Fácil!",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  );
}
