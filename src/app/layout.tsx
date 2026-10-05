import type { Metadata } from "next"
import { Unbounded, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Footer, Header } from "@/components"

const unbounded=Unbounded({
    variable: "--font-unbounded",
    subsets: ["latin", "cyrillic", "cyrillic-ext"],
    weight: ["400", "500", "600", "700", "800"],
})

const plusJakarta=Plus_Jakarta_Sans({
    variable: "--font-plus-jakarta",
    subsets: ["latin", "cyrillic-ext"],
    weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata={
    title: 'Гостевой дом "Уютное море"',
    description: "Гостевой дом на берегу моря",
}

export default function RootLayout({ children }: LayoutProps<"/">){
    return(
        <html
            lang="ru"
            className={`${unbounded.variable} ${plusJakarta.variable} h-full antialiased`}
        >
            <body className="min-h-full flex flex-col">
                <div className="bg-mesh" aria-hidden="true" />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
