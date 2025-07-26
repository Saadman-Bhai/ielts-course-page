import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

// Default metadata for the site.
export const metadata: Metadata = {
  title: '10 Minute School Course',
  description: 'An assessment project to build a product page.',
};

/**
 * Root layout that wraps all pages.
 * @param {object} props - Component properties.
 * @param {React.ReactNode} props.children - Child components to be rendered.
 * @returns {JSX.Element} The root HTML structure.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  );
}