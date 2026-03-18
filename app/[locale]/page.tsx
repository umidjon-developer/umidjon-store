import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { TestimonialsSection } from '@/components/testimonials-section'

export default function Home() {
	return (
		<div className='min-h-screen'>
			<HeroSection />
			<AboutSection />
			<ServicesSection />
			<ProjectsSection />
			<TestimonialsSection />
			<ContactSection />
			
			{/* Footer */}
			<footer className="py-8 border-t border-border dark:border-slate-800 bg-background">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<p className="text-muted-foreground text-sm">
							© {new Date().getFullYear()} Umidjon Gafforov. All rights reserved.
						</p>
						<div className="flex items-center gap-6">
							<a 
								href="https://t.me/umidjon_developer" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-sm"
							>
								Telegram
							</a>
							<a 
								href="https://instagram.com/umidjon_developer" 
								target="_blank" 
								rel="noopener noreferrer"
								className="text-muted-foreground hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-sm"
							>
								Instagram
							</a>
							<a 
								href="mailto:contact@umidjon.dev"
								className="text-muted-foreground hover:text-purple-500 dark:hover:text-purple-400 transition-colors text-sm"
							>
								Email
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
