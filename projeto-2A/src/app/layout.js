import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title: 'Homem Aranha',
  description: 'Meu nome é Isabely, mas eu me identifico como Homem-aranha',
  charset: 'UTF-8',
  author: 'Isabely Belchior',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
