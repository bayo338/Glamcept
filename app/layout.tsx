import './globals.css';


import type { Metadata } from 'next';
import { Inter, Playfair_Display, Lato } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CartProvider } from './context/CartContext';

const inter = Inter({ subsets: ['latin'] });

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font_playfair",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font_lato",
});

export const metadata: Metadata = {
  title: 'Glamcept — Glow Like Never Before',
  description: 'Explore Glamcept’s premium collection of cosmetics that empower beauty and confidence.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
        <CartProvider>
          <Navbar />
          <main className=''>        
          {children}        
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
