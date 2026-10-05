import { links } from "@/lib"
import { CircleSun, Container } from "@/shared"

export const Footer=()=>{
    const year=new Date().getFullYear()

    return(
        <footer className="relative bg-ink text-paper">
            <div className="h-1 bg-gradient-to-r from-coral via-gold to-teal" />

            <Container padding={false} className="py-14">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr_1fr]">

                    <div>
                        <div className="flex items-center gap-2 font-display text-xl">
                            <CircleSun size={16} />
                            Уютное море
                        </div>
                        <address className="mt-4 max-w-xs text-sm leading-6 text-paper/70 not-italic">
                            Гостевой дом «Уютное море»<br />
                            г. Анапа, ул. Магнолии, д. 21/2
                        </address>
                        <nav aria-label="Навигация по сайту" className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                            {links.map(el => (
                                <a
                                    key={el.to}
                                    href={el.to}
                                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                                >
                                    {el.name}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-paper/50">
                            Контакты
                        </div>
                        <address aria-label="Контактная информация" className="mt-4 flex flex-col gap-2 text-sm not-italic">
                            <a href="tel:+79184313521" className="font-display text-lg transition-colors hover:text-gold">
                                +7 (918) 431-35-21
                            </a>
                            <a href="mailto:4313521@mail.ru" className="text-paper/70 transition-colors hover:text-paper">
                                4313521@mail.ru
                            </a>
                            <a href="https://wa.me/79184313521" target="_blank" rel="noopener noreferrer" className="text-paper/70 transition-colors hover:text-paper">
                                WhatsApp
                            </a>
                        </address>
                    </div>

                    <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-paper/50">
                            Часы работы
                        </div>
                        <div className="mt-4 text-sm">
                            <div className="font-display text-lg">09:00 — 21:00</div>
                            <p className="mt-2 text-xs text-paper/60">
                                Режим может отличаться в праздничные дни
                            </p>
                        </div>
                    </div>

                </div>

                <div className="mt-12 flex flex-col gap-3 border-t border-paper/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center sm:justify-between">
                    <span>© {year} Гостевой дом «Уютное море»</span>
                    <a href="/legal" className="transition-colors hover:text-paper">
                        Юридическая информация
                    </a>
                </div>
            </Container>
        </footer>
    )
}