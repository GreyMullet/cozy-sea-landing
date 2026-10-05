import { Container, SectionHeader } from "@/shared"
import { RoomsList } from "./RoomsList"

export const Rooms=()=>{
    return (
        <section id="rooms" aria-labelledby="rooms-heading">
            <Container>
                <SectionHeader
                    id="rooms-heading"
                    title="Три способа остановиться"
                    description="У каждого номера свой характер — от уютной студии на двоих до просторного варианта для компании."
                />
                <RoomsList />
            </Container>
        </section>
    )
}