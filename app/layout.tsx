import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Add metadata here :) */}

      {/*Added global font, Tailwind's antialiased to smooth out font*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
