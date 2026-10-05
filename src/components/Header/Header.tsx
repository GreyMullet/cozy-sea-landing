import { links } from "@/lib"
import { CircleSun, Container } from "@/shared"
import { PopupNav } from "./PopupNav"

export const Header=()=>{
    return(
        <header className="sticky top-0 relative bg-paper border-b-1 border-ink/10 z-50">
            <Container className="flex justify-between items-center h-20 max-sm:gap-5" padding={false}>
                <div className="flex font-semibold items-center gap-2 text-2xl text-ink">
                    <CircleSun size={15} />
                    Уютное море
                </div>
                <nav className="max-lg:hidden">
                    <ul className="flex gap-8">
                        {
                            links.map(el=>{
                                return (
                                    <li key={el.to}>
                                        <a href={el.to} className="text-sm tracking-wider font-medium text-ink-soft hover:text-ink">{el.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <button className="h-10 px-6 rounded-full bg-ink text-paper text-sm cursor-pointer max-lg:hidden">
                    Забронировать
                </button>
                <PopupNav />
            </Container>
        </header>
    )
}