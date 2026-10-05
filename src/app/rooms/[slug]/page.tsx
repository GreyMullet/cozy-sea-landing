import { notFound } from "next/navigation"
import { rooms } from "@/lib"
import { Container } from "@/shared"
import { RoomGallery } from "@/components"

export default async function RoomPage({ params }: PageProps<"/rooms/[slug]">){
    const { slug }=await params
    const room=rooms.find(r=>r.slug===slug)

    if (!room) notFound()

    return(
        <main>
            <Container className="py-16">
                <h1 className="font-display text-4xl">{room.title}</h1>
                <div className="mt-2 text-ink-soft">{room.area} · {room.capacity} · {room.price.toLocaleString("ru-RU")} ₽/сутки</div>

                <div className="mt-8">
                    <RoomGallery images={room.images} video={room.video} title={room.title} />
                </div>

                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div>
                        <h2 className="font-display text-xl">Расположение</h2>
                        <p className="mt-2 text-sm text-ink-soft">{room.location}</p>
                        <p className="mt-1 text-sm text-ink-soft">{room.beachDistance}</p>
                    </div>
                    <div>
                        <h2 className="font-display text-xl">Спальные места</h2>
                        <p className="mt-2 text-sm text-ink-soft">{room.beds}</p>
                        {room.kitchen && <p className="mt-1 text-sm text-ink-soft">Кухня: {room.kitchen}</p>}
                    </div>
                    <div>
                        <h2 className="font-display text-xl">Удобства</h2>
                        <ul className="mt-2 space-y-1 text-sm text-ink-soft">
                            {room.amenities.map(a=><li key={a}>{a}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-display text-xl">Заезд и выезд</h2>
                        <p className="mt-2 text-sm text-ink-soft">Заезд {room.checkin} · выезд {room.checkout}</p>
                        <p className="mt-1 text-sm text-ink-soft">{room.earlyLatePolicy}</p>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export function generateStaticParams(){
    return rooms.map(room=>({ slug: room.slug }))
}