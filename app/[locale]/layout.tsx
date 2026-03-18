import type React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/Navigation'
import { LoadingScreen } from '@/components/LoadingScreen'
import { ParticleBackground } from '@/components/ParticleBackground'
import { Toaster } from '@/components/ui/sonner'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export function generateStaticParams() {
	return [{ locale: 'en' }, { locale: 'uz' }, { locale: 'ru' }]
}

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
	const titles = {
		en: 'Umidjon - Freelance Developer | Telegram Bot, Admin Panel, Mobile App',
		uz: 'Umidjon - Freelance Dasturchi | Telegram Bot, Admin Panel, Mobil Ilova',
		ru: 'Умиджон - Фриланс Разработчик | Telegram Бот, Админ Панель, Мобильное Приложение',
	}
	const descriptions = {
		en: 'Professional freelance developer. I create Telegram bots, web admin panels, mobile applications. 3+ years experience, 50+ successful projects.',
		uz: 'Professional freelance dasturchi. Telegram botlar, veb admin panellar, mobil ilovalar yarataman. 3+ yillik tajriba, 50+ muvaffaqiyatli loyiha.',
		ru: 'Профессиональный фриланс разработчик. Создаю Telegram ботов, веб админ панели, мобильные приложения. 3+ года опыта, 50+ успешных проектов.',
	}
	
	return {
		title: titles[params.locale as keyof typeof titles] || titles.en,
		description: descriptions[params.locale as keyof typeof descriptions] || descriptions.en,
		keywords:
			'freelancer, developer, telegram bot, admin panel, mobile app, react, next.js, node.js',
		icons: {
			icon: '/logo.svg',
		},
		openGraph: {
			title: titles[params.locale as keyof typeof titles] || titles.en,
			description: descriptions[params.locale as keyof typeof descriptions] || descriptions.en,
			images: [
				{
					url: '/umidjon-work.png',
					width: 800,
					height: 600,
					alt: titles[params.locale as keyof typeof titles] || titles.en,
				},
			],
		},
		metadataBase: new URL('https://umidjon.store'),
	}
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode
	params: { locale: string }
}) {
	const locale = params.locale

	let messages
	try {
		messages = await getMessages({ locale: locale })
	} catch (error) {
		console.error('Failed to load messages:', error)
		messages = {}
	}

	return (
		<html lang={locale}>
			<body className={`${inter.className} bg-background text-foreground`}>
				<NextIntlClientProvider messages={messages} locale={locale}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem={true}
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
