import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { site } from '@/site';
import './styles.css';

export const metadata: Metadata = {
  title: `${site.name} | ${site.cuisine} Restaurant, Walkinstown, Dublin 12`,
  description: `${site.name} — ${site.tagline} Order online, download the app, or call ${site.phoneDisplay}. ${site.address.oneLine}.`
};

export const viewport: Viewport = { themeColor: '#14100e' };

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IE">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
