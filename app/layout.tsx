
import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Download Atomic Habits PDF Edition — James Clear',
  description:
    'Discover Atomic Habits by James Clear. Learn how to build good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080C0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.className} bg-background`}>
      <head>
        {/* OGAds Content Locker */}
        <script
          type="text/javascript"
          id="ogjs"
          src="https://trkoffer.net/cl/js/o4mqod"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              function CPABuildComplete() {
                window.location.href = '/files/Atomic-Habits.pdf';
              }

              function xfComplete() {
                CPABuildComplete();
              }
            `,
          }}
        />
      </head>

      <body className="antialiased">
        {children}

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
