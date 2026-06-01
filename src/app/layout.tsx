import type { Metadata } from 'next';
import { AppProvider } from '@/context/AppContext';
import './globals.css';

export const metadata: Metadata = {
  title: 'Terra Resume',
  description: 'AI-powered resume optimization platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
