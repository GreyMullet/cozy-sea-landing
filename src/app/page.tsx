import { AboutUs, BookingFrame, Hero, Location, Marquee, Rooms, Services } from "@/components"

export default function Home(){
    return(
        <div>
            <Hero />
            <Marquee />
            <AboutUs />
            <Services />
            <Rooms />
            <Location />
            <BookingFrame src="https://anapar-module.roomfox.ru/" />
        </div>
    )
}
