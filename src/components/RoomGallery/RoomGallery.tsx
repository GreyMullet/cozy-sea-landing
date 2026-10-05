"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import Image from "next/image"
import { Expand, X, ChevronLeft, ChevronRight, Play } from "lucide-react"

type MediaItem={ type: "image"; src: string }|{ type: "video"; src: string; poster?: string }

interface RoomGalleryProps{
    images: string[]
    video?: string
    title: string
}

export const RoomGallery=({ images, video, title }: RoomGalleryProps)=>{
    const items: MediaItem[]=[
        ...(video ? [{ type: "video" as const, src: video, poster: images[0] }] : []),
        ...images.map(src=>({ type: "image" as const, src })),
    ]

    const [activeIndex, setActiveIndex]=useState(0)
    const [lightboxOpen, setLightboxOpen]=useState(false)
    const lightboxRef=useRef<HTMLDivElement>(null)

    const openLightbox=(index: number)=>{
        setActiveIndex(index)
        setLightboxOpen(true)
    }

    const closeLightbox=useCallback(()=>{
        setLightboxOpen(false)
        if (document.fullscreenElement) document.exitFullscreen()
    }, [])

    const goNext=useCallback(()=>setActiveIndex(i=>(i+1)%items.length), [items.length])
    const goPrev=useCallback(()=>setActiveIndex(i=>(i-1+items.length)%items.length), [items.length])

    useEffect(()=>{
        if (!lightboxOpen) return
        const onKey=(e: KeyboardEvent)=>{
            if (e.key==="Escape") closeLightbox()
            if (e.key==="ArrowRight") goNext()
            if (e.key==="ArrowLeft") goPrev()
        }
        window.addEventListener("keydown", onKey)
        return ()=>window.removeEventListener("keydown", onKey)
    }, [lightboxOpen, closeLightbox, goNext, goPrev])

    const toggleFullscreen=()=>{
        if (!lightboxRef.current) return
        if (!document.fullscreenElement){
            lightboxRef.current.requestFullscreen?.()
        } else{
            document.exitFullscreen()
        }
    }

    const active=items[activeIndex]
    const extraCount=items.length-5

    return(
        <div>
            <div className="grid grid-cols-4 gap-3">
                <button
                    onClick={()=>openLightbox(0)}
                    aria-label="Открыть галерею"
                    className="group relative col-span-4 h-80 overflow-hidden rounded-3xl sm:col-span-3 sm:row-span-2 sm:h-auto sm:min-h-64"
                >
                    {items[0].type==="video" ? (
                        <video
                            src={items[0].src}
                            poster={items[0].poster}
                            muted
                            playsInline
                            preload="metadata"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    ) : (
                        <Image
                            src={items[0].src}
                            alt={title}
                            fill
                            sizes="(min-width: 640px) 66vw, 100vw"
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    )}
                    <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />

                    {items[0].type==="video" && (
                        <span className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-ink/50 px-3 py-1.5 text-paper backdrop-blur-sm transition-colors group-hover:bg-ink/70">
                            <Play size={14} className="fill-paper" />
                            <span className="text-xs tracking-wide">Видео-тур</span>
                        </span>
                    )}
                </button>

                {items.slice(1, 5).map((item, i)=>{
                    const isLastVisible=i===3 && extraCount>0
                    return(
                        <button
                            key={item.src}
                            onClick={()=>openLightbox(i+1)}
                            aria-label={`Фото ${i+2}`}
                            className="group relative col-span-2 h-32 overflow-hidden rounded-2xl sm:col-span-1"
                        >
                            {item.type==="video" ? (
                                <video
                                    src={item.src}
                                    poster={item.poster}
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />
                            ) : (
                                <Image
                                    src={item.src}
                                    alt={`${title}, фото ${i+2}`}
                                    fill
                                    sizes="25vw"
                                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            )}
                            <span className="absolute inset-0 bg-ink/0 transition-colors group-hover:bg-ink/10" />

                            {item.type==="video" && (
                                <span className="pointer-events-none absolute bottom-2 left-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink/50 text-paper backdrop-blur-sm transition-colors group-hover:bg-ink/70">
                                    <Play size={11} className="fill-paper" />
                                </span>
                            )}

                            {isLastVisible && (
                                <span className="absolute inset-0 flex items-center justify-center bg-ink/60 font-display text-lg text-paper">
                                    +{extraCount}
                                </span>
                            )}
                        </button>
                    )
                })}
            </div>

            {lightboxOpen && (
                <div
                    ref={lightboxRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4"
                    onClick={(e)=>{ if (e.target===e.currentTarget) closeLightbox() }}
                >
                    <button onClick={closeLightbox} aria-label="Закрыть" className="absolute right-4 top-4 z-10 text-paper/80 hover:text-paper">
                        <X size={28} />
                    </button>
                    <button onClick={toggleFullscreen} aria-label="Развернуть на полный экран" className="absolute right-16 top-4 z-10 text-paper/80 hover:text-paper">
                        <Expand size={24} />
                    </button>

                    {items.length>1 && (
                        <>
                            <button onClick={goPrev} aria-label="Предыдущее" className="absolute left-4 z-10 text-paper/80 hover:text-paper">
                                <ChevronLeft size={32} />
                            </button>
                            <button onClick={goNext} aria-label="Следующее" className="absolute right-4 z-10 text-paper/80 hover:text-paper">
                                <ChevronRight size={32} />
                            </button>
                        </>
                    )}

                    <div className="relative h-full max-h-[85vh] w-full max-w-5xl">
                        {active.type==="video" ? (
                            <video
                                src={active.src}
                                poster={active.poster}
                                controls
                                autoPlay
                                playsInline
                                className="h-full w-full object-contain"
                            />
                        ) : (
                            <Image
                                src={active.src}
                                alt={`${title}, изображение ${activeIndex + 1}`}
                                fill
                                sizes="100vw"
                                className="object-contain"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}