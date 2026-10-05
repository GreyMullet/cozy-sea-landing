export const YandexMap=()=>{
    return(
        <div className="relative h-80 overflow-hidden rounded-3xl border border-ink/10 lg:h-[420px]">
            <a
                href="https://yandex.ru/maps/1107/anapa/?utm_medium=mapframe&utm_source=maps"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-0 z-10 text-xs text-white/80 px-2"
            >
                Анапа
            </a>
            <a
                href="https://yandex.ru/maps/1107/anapa/house/ulitsa_magnolii_21s2/Z04YdQVlSUUOQFpufXR3eH1gYw==/?ll=37.324670%2C44.869108&utm_medium=mapframe&utm_source=maps&z=18.15"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3.5 z-10 text-xs text-white/80 px-2"
            >
                Улица Магнолии, 21с2 — Яндекс Карты
            </a>
            <iframe
                src={process.env.NEXT_PUBLIC_YANDEX_MAP_SRC}
                width="100%"
                height="100%"
                loading="lazy"
                title="Гостевой дом «Уютное море» на карте"
            />
        </div>
    )
}