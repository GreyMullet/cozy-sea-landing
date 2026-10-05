interface ContainerProps{
    children: React.ReactNode
    className?: string
    padding?: boolean
}

export const Container=({ children, className, padding=true }: ContainerProps)=>(
    <div className={`px-5 md:px-8 max-w-6xl mx-auto ${padding ? "pt-24 max-md:pt-15" : ""} ${className ?? ""}`}>
        {children}
    </div>
)