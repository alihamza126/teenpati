interface HeroSectionProps {
    title: string
    subtitle?: string
    className?: string
    titleColor?: string
    subtitleColor?: string
}

export function HeroSection({ title, subtitle, className = "", titleColor = "text-blue-900", subtitleColor = "text-blue-900" }: HeroSectionProps) {
    return (
        <section className={`py-8 md:py-12 md:mx-auto mx-1 px-4 md:px-6 text-center ${className}`}>
            <div className="max-w-4xl mx-auto">
                <h1 className={`text-2xl md:text-4xl font-bold mb-4 text-balance ${titleColor}`}>{title}</h1>
                {subtitle && <p className={`text-lg text-balance ${subtitleColor}`}>{subtitle}</p>}
            </div>
        </section>
    )
}
