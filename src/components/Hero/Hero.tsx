import { heroCards } from "@/lib"
import { Container } from "@/shared"

export const Hero=()=>{
    return(
        <section aria-labelledby="hero-heading">
            <Container className="grid grid-cols-1 gap-y-6 md:gap-y-8">
                <span className="bg-white border border-ink/15 w-fit px-4 h-8 flex items-center gap-2 justify-center rounded-full text-xs sm:text-sm" role="status">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
                    </span>
                    Свободно 3 номера на октябрь
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-5xl leading-tight" id="hero-heading">
                    Море близко.{" "}
                    <span className="bg-gradient-to-r from-coral via-gold to-teal bg-clip-text text-transparent">
                        Суета — нет.
                    </span>
                </h1>

                <p className="text-ink-soft leading-7 max-w-md text-sm sm:text-base">
                    Двенадцать номеров в доме у кромки воды. Открыты круглый год, кормим домашним, помним каждого гостя по имени.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 text-sm">
                    <a
                        href="#contact"
                        className="text-ink font-semibold inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-coral to-gold px-6 transition-opacity hover:opacity-90 w-full sm:w-auto"
                    >
                        Проверить даты
                    </a>
                    <a
                        href="#rooms"
                        className="inline-flex h-12 items-center justify-center rounded-full border border-ink/15 px-6 transition-colors hover:bg-ink/5 w-full sm:w-auto"
                    >
                        Смотреть номера
                    </a>
                </div>

                <dl className="grid grid-cols-3 gap-3 sm:gap-5">
                    {
                        heroCards.map(el=>{
                            return (
                                <div
                                    key={el.label}
                                    className="space-y-1 sm:space-y-2 border bg-white border-ink/10 rounded-xl sm:rounded-2xl p-3 sm:p-5"
                                >
                                    <dd className="text-xl sm:text-2xl md:text-3xl font-black">{el.label}</dd>
                                    <dt className="text-[10px] sm:text-xs text-ink-soft leading-tight">{el.desc}</dt>
                                </div>
                            )
                        })
                    }
                </dl>
            </Container>
        </section>
    )
}