import type { AmenityVariant } from "@/lib"

export const amenityCardStyles: Record<AmenityVariant, string>={
    cream: "bg-cream border border-ink/10 text-ink",
    violet: "bg-violet text-white",
    teal: "bg-[color-mix(in_srgb,var(--color-teal)_22%,var(--color-paper))] border border-ink/10 text-ink",
    gold: "bg-gold text-[#2A1B02]",
    coral: "bg-coral text-[#2A130C]",
}

export const amenityMutedTextStyles: Record<AmenityVariant, string>={
    cream: "text-ink/70",
    violet: "text-white/70",
    teal: "text-ink/70",
    gold: "opacity-70",
    coral: "opacity-70",
}