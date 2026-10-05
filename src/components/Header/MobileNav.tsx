"use client"

import { links } from "@/lib"

interface MobileNavProps{
    setClose: ()=>void
}

export const MobileNav=({ setClose }: MobileNavProps)=>{
    return (
        <>
            <ul className="flex flex-col gap-6 px-6 pt-8 pb-6">
                {
                    links.map(el=>{
                        return (
                            <li key={el.to} className="text-xl font-medium tracking-wider text-ink-soft">
                                <a href={el.to} onClick={setClose}>{el.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="px-6 pb-8">
                <button 
                    onClick={setClose}
                    className="w-full h-12 rounded-full bg-ink text-paper text-sm cursor-pointer"
                >
                    Забронировать
                </button>
            </div>
        </>
    )
}