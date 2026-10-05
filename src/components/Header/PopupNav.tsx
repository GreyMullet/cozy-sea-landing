"use client"

import { Menu, X } from "lucide-react"
import { MobileNav } from "./MobileNav"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"

export const PopupNav=()=>{
    const [isOpen, setOpen]=useState(false)
    return (
        <>
            {
                !isOpen ? 
                    <button onClick={()=>setOpen(true)} aria-label="Открыть меню" className="hidden max-lg:block cursor-pointer">
                        <Menu size={30} />
                    </button> : 
                    <button onClick={()=>setOpen(false)} aria-label="Закрыть меню" className="hidden max-lg:block cursor-pointer">
                        <X size={30} />
                    </button>
            }

            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ opacity: 0, scaleY: 0.95 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        exit={{ opacity: 0, scaleY: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="absolute top-full left-0 right-0 origin-top bg-paper border-t border-ink/10 shadow-lg"
                    >
                        <MobileNav setClose={()=>setOpen(false)} />
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}