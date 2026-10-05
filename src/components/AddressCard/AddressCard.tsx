export const AddressCard=()=>{
    return(
        <div className="relative overflow-hidden rounded-[28px] p-9 text-white bg-gradient-to-br from-violet to-[color-mix(in_srgb,var(--color-teal)_60%,var(--color-violet))]">
            <div className="text-xs font-semibold text-white/75">Адрес</div>
            <div className="mt-2 font-display text-xl font-semibold leading-snug">
                г. Анапа, ул. Магнолии, д. 21/2
            </div>
            <div className="mt-8 flex flex-wrap gap-7">
                <div>
                    <div className="font-display text-2xl font-bold">12</div>
                    <div className="mt-1 text-xs text-white/80">номеров</div>
                </div>
                <div>
                    <div className="font-display text-2xl font-bold">365</div>
                    <div className="mt-1 text-xs text-white/80">дней в году открыты</div>
                </div>
            </div>
        </div>
    )
}