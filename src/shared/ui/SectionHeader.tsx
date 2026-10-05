interface SectionHeaderProps{
    id: string
    title: string
    description: string
}

export const SectionHeader=({ id, title, description }: SectionHeaderProps)=>{
    return(
        <div className="flex justify-between max-md:flex-col max-md:items-center max-md:gap-y-9">
            <h2 className="text-4xl font-bold" id={id}>{title}</h2>
            <p className="w-2/5 text-sm leading-7 text-ink-soft max-md:w-2/3 max-md:text-center max-sm:w-4/5">
                {description}
            </p>
        </div>
    )
}