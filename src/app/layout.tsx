import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/src/styles/globals.css';
import HeaderContainer from '@/src/components/header-container';
import NavBarContainer from '@/src/components/nav-bar-container';
import FooterContainer from '@/src/components/footer-container';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ecommerce App',
  description: 'Ecommerce App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderContainer />
        <NavBarContainer />
        {children}
        <FooterContainer />
      </body>
    </html>
  );
}
