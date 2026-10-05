import { items } from "@/lib"

export const Marquee=()=>{
    return(
        <div className="w-full bg-coral overflow-hidden whitespace-nowrap p-5 mt-24 max-md:mt-15">
            <div className="inline-flex marquee-animate">
                <MarqueeGroup />
                <MarqueeGroup aria-hidden={true} />
            </div>
        </div>
    )
}

const MarqueeGroup=({ "aria-hidden": ariaHidden }: { "aria-hidden"?: boolean })=>{
    return(
        <ul
            className="inline-flex shrink-0 min-w-[100vw] justify-around m-0 p-0 list-none"
            aria-hidden={ariaHidden}
        >
            {items.map((el, i)=>(
                <li key={i} className="inline-flex font-bold items-center gap-4 pr-4">
                    {el}
                    <span className="text-xs" aria-hidden="true">✳</span>
                </li>
            ))}
        </ul>
    )
}