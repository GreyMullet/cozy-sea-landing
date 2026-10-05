import { Container } from "@/shared"
import { YandexMap } from "./YandexMap"

export const Location=()=>{
    return(
        <section className="pb-24 max-md:pb-15" id="location" aria-labelledby="location-heading">
            <Container>
                <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-y-9">
                    <h2 className="text-4xl font-bold" id="location-heading">Как нас найти</h2>
                    <p className="w-2/5 text-sm leading-7 text-ink-soft max-md:w-2/3 max-md:text-center max-sm:w-4/5">
                        Первая береговая линия, пять минут до пляжа. Встретим, если нужно — просто предупредите заранее.
                    </p>
                </div>
                <div className="mt-10">
                    <YandexMap />
                </div>
            </Container>
        </section>
    )
}