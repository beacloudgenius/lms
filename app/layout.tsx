import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
const inter = Inter({ subsets: ['latin'] })
import Nav from '@/components/nav'
import { MainNav } from '@/components/main-nav'
import { siteConfig } from '@/components/config/site'
import { ModeToggle } from '@/components/mode-toggle'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

const defaultUrl = process.env.NEXT_PUBLIC_URL
  ? `${process.env.NEXT_PUBLIC_URL}`
  : 'http://cosmos.cg.home.arpa:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    template: '%s | Cloud Genius®',
    default: 'Cloud Genius®' // a default is required when creating a template
  },
  description: 'Realize your dream',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png'
    }
  },
  category: 'technology',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  verification: {
    google: 'google',
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link']
    }
  },
  itunes: {
    appId: 'myAppStoreID',
    appArgument: 'myAppArgument'
  },
  appleWebApp: {
    title: 'Apple Web App',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/assets/startup/apple-touch-startup-image-768x1004.png',
      {
        url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
        media: '(device-width: 768px) and (device-height: 1024px)'
      }
    ]
  },
  appLinks: {
    ios: {
      url: 'https://cloudgenius.app/ios',
      app_store_id: 'app_store_id'
    },
    android: {
      package: 'com.example.android/package',
      app_name: 'cloudgenius.app'
    },
    web: {
      url: 'https://cloudgenius.app',
      should_fallback: true
    }
  },
  openGraph: {
    title: 'Cloud Genius®',
    description: 'Realize your dream',
    url: 'https://cloudgenius.app',
    siteName: 'Cloud Genius',
    images: [
      {
        url: 'https://i.thecloudseminar.com/logo.png', // Must be an absolute URL
        width: 800,
        height: 600
      },
      {
        url: 'https://i.thecloudseminar.com/logo.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Cloud Genius'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'app',
    title: 'Cloud Genius®',
    description: 'Realize your dream',
    siteId: '1467726470533754880',
    creator: '@LVNnilesh',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://i.thecloudseminar.com/logo.png',
      alt: 'Cloud Genius Logo'
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay'
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url'
      }
    }
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <header className='bg-background sticky top-0 z-40 w-full  border-b'>
            <MainNav items={siteConfig.mainNav} />
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
