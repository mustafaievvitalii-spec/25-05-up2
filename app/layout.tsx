import type { Metadata } from 'next';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: 'DocExpert — Відновлення посвідчення водія дистанційно',
  description:
    'Юридичний супровід дистанційного відновлення посвідчення водія для українців за кордоном.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
