import type { Metadata } from "next"
import { Container } from "@/shared"

export const metadata: Metadata={
    title: "Юридическая информация",
    description: "Реквизиты ИП Пономаренко Джульетта Вагановна — гостевой дом «Уютное море» в Анапе.",
}

type Row={
    dt: string
    dd: string
    mono?: boolean
    href?: string
}

type Section={
    title: string
    rows: Row[]
}

const sections: Section[]=[
    {
        title: "Организация",
        rows: [
            { dt: "Полное наименование", dd: "Индивидуальный предприниматель Пономаренко Джульетта Вагановна" },
            { dt: "Краткое наименование", dd: "ИП Пономаренко Джульетта Вагановна" },
            { dt: "ИНН", dd: "230110914178", mono: true },
            { dt: "ОГРНИП", dd: "309230114000050", mono: true },
            {
                dt: "Основание деятельности",
                dd: "Действует на основании Свидетельства о регистрации физического лица в качестве индивидуального предпринимателя, серия 23 № 007644683, выданного 20 мая 2009 г. в ИФНС по г. к. Анапа, Краснодарского края.",
            },
        ],
    },
    {
        title: "Контакты",
        rows: [
            { dt: "Адрес", dd: "г. Анапа, ул. Магнолии, д. 21/2" },
            { dt: "Телефон", dd: "+7 (918) 431-35-21", href: "tel:+79184313521" },
            { dt: "Email", dd: "4313521@mail.ru", href: "mailto:4313521@mail.ru" },
        ],
    },
    {
        title: "Проживание",
        rows: [
            { dt: "Стоимость", dd: "1000 ₽ / сутки с человека" },
        ],
    },
]

export default function LegalPage(){
    return(
        <section className="relative pb-24" aria-labelledby="legal-heading">
            <div
                className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-coral/10 via-gold/5 to-transparent"
                aria-hidden="true"
            />

            <Container className="relative">
                <div className="max-w-3xl">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                        <span className="h-px w-6 bg-ink-soft/50" aria-hidden="true" />
                        Документы
                    </span>
                    <h1 id="legal-heading" className="mt-4 text-4xl font-bold sm:text-5xl">
                        Юридическая{" "}
                        <span className="bg-gradient-to-r from-coral via-gold to-teal bg-clip-text text-transparent">
                            информация
                        </span>
                    </h1>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-ink-soft">
                        Реквизиты и контактные данные гостевого дома «Уютное море». Всё прозрачно — вы всегда знаете, с кем имеете дело.
                    </p>
                </div>

                <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {sections.map((section)=>(
                        <div
                            key={section.title}
                            className="relative overflow-hidden rounded-3xl border border-ink/10 bg-white p-7 shadow-sm"
                        >
                            <div
                                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-coral via-gold to-teal"
                                aria-hidden="true"
                            />
                            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
                                {section.title}
                            </h2>

                            <dl className="mt-5 flex flex-col gap-5">
                                {section.rows.map((row)=>(
                                    <div key={row.dt}>
                                        <dt className="text-xs font-medium text-ink-soft">{row.dt}</dt>
                                        <dd
                                            className={`mt-1 text-sm leading-6 ${
                                                row.mono ? "font-mono tracking-wide text-ink" : "text-ink"
                                            }`}
                                        >
                                            {row.href ? (
                                                <a
                                                    href={row.href}
                                                    className="transition-colors hover:text-gold"
                                                >
                                                    {row.dd}
                                                </a>
                                            ) : (
                                                row.dd
                                            )}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ))}
                </div>

                <p className="mt-12 max-w-2xl text-xs leading-6 text-ink-soft">
                    Все данные указаны в соответствии с законодательством РФ. Если у вас есть вопросы по реквизитам или документам — напишите на{" "}
                    <a href="mailto:4313521@mail.ru" className="underline decoration-coral/50 underline-offset-4 transition-colors hover:text-ink">
                        4313521@mail.ru
                    </a>.
                </p>
            </Container>
        </section>
    )
}