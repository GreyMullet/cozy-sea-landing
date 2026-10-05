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
            <BookingFrame src="http://147.45.249.16:3021/" />
        </div>
    )
}
