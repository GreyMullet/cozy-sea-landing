import Link from "next/link"
import Image from "next/image"
import type { Route } from "next"
import type { Room } from "@/lib"

export const RoomCard=({ room }: { room: Room })=>{
    return(
        <Link
            href={`/rooms/${room.slug}` as Route}
            className="group block overflow-hidden rounded-3xl border border-ink/10 bg-cream transition-transform hover:-translate-y-1"
        >
            <div className="relative h-44 overflow-hidden">
                <Image
                    src={room.images[0] ?? "/placeholder.avif"}
                    alt={`«${room.title}, ${room.area}, в гостевом доме «Уютное море», Анапа»`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl">{room.title}</h3>
                    <span className="whitespace-nowrap text-sm font-semibold text-teal">
                        {room.price.toLocaleString("ru-RU")} ₽/сутки
                    </span>
                </div>
                <div className="mt-1 text-xs text-ink-soft">{room.area} · {room.capacity}</div>
                <p className="mt-3 text-sm text-ink-soft">{room.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink transition-all group-hover:gap-2">
                    Подробнее <span aria-hidden="true">→</span>
                </span>
            </div>
        </Link>
    )
}