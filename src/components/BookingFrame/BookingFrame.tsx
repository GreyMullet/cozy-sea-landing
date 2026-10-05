"use client"

import { useState, useEffect } from "react"

interface BookingFrameProps{
    src: string
    title?: string
    className?: string
}

export const BookingFrame=({ src, title="Модуль бронирования", className }: BookingFrameProps)=>{
    const [loaded, setLoaded]=useState(false)

    return(
        <div className={`relative overflow-hidden bg-cream ${className ?? ""}`}>
            <div
                aria-hidden={loaded}
                className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 bg-cream transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
            >
                <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink/15 border-t-teal" />
                <span className="text-xs tracking-wide text-ink-soft">Загружаем бронирование...</span>
            </div>

            <iframe
                src={src}
                title={title}
                loading="lazy"
                onLoad={()=>setLoaded(true)}
                allow="payment"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ height: "600px" }}
                className="relative block w-full border-0 bg-cream transition-[height] duration-300 ease-out"
            />
        </div>
    )
}