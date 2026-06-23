import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'iFakeShop - The World\'s Largest Fictional Shopping Universe',
  description: 'Explore 1,000,000+ products across every category imaginable. A fictional shopping and collecting experience created for entertainment and inspiration.',
  keywords: 'shopping, luxury, products, marketplace, fictional, entertainment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white">
        {children}
      </body>
    </html>
  );
}
