import { rooms } from "@/lib"
import { RoomCard } from "./RoomCard"

export const RoomsList=()=>{
    return(
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map(room=>(
                <RoomCard key={room.slug} room={room} />
            ))}
        </div>
    )
}