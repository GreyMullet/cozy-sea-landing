import { amenities } from "@/lib"
import { amenityCardStyles, amenityMutedTextStyles } from "@/shared"

export const ServicesList=()=>{
    return(
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10" role="list">
            {
                amenities.map(el=>{
                    return(
                        <li key={el.title} className={`rounded-3xl p-7 ${amenityCardStyles[el.variant]}`}>
                            <div className={`text-xs font-semibold tracking-widest ${amenityMutedTextStyles[el.variant]}`}>
                                {el.category}
                            </div>
                            <h3 className="mt-2 font-display text-xl">{el.title}</h3>
                            <p className={`mt-2 text-sm ${amenityMutedTextStyles[el.variant]}`}>
                                {el.description}
                            </p>
                        </li>
                    )
                })
            }
        </ul>
    )
}