import type { Metadata } from "next";
import { getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/Navigation'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ParticleBackground } from '@/components/ParticleBackground'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Umidjon Gafforov | Full Stack & Mobile Developer',
  description: 'Premium web and mobile development services. React, Next.js, React Native expert based in Tashkent, Uzbekistan. 3+ years experience, 50+ projects delivered.',
  keywords: ['Full Stack Developer', 'Mobile Developer', 'React', 'Next.js', 'React Native', 'Web Development', 'Tashkent', 'Uzbekistan'],
  authors: [{ name: 'Umidjon Gafforov' }],
  creator: 'Umidjon Gafforov',
  metadataBase: new URL('https://umidjon.dev'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://umidjon.dev',
    siteName: 'Umidjon Gafforov Portfolio',
    title: 'Umidjon Gafforov | Full Stack & Mobile Developer',
    description: 'Premium web and mobile development services. React, Next.js, React Native expert.',
    images: [
      {
        url: '/umidjon.jpeg',
        width: 1200,
        height: 630,
        alt: 'Umidjon Gafforov - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umidjon Gafforov | Full Stack & Mobile Developer',
    description: 'Premium web and mobile development services. React, Next.js, React Native expert.',
    images: ['/umidjon.jpeg'],
    creator: '@umidjon_developer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	let messages = {}
	try {
		messages = await getMessages({ locale: params.locale })
	} catch (error) {
		console.error('❌ Failed to load messages:', error)
	}

	return (
		<html lang={params.locale} className="dark">
			<body className={`${inter.className} bg-[#0f172a] text-white`}>
				<NextIntlClientProvider messages={messages} locale={params.locale}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem={false}
						disableTransitionOnChange
					>
						<LoadingScreen />
						<ParticleBackground />
						<Navigation />
						<main className="relative z-10">
							{children}
						</main>
						<Toaster position="bottom-right" />
					</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
