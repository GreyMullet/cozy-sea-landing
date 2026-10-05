import { useId } from 'react'

export function CircleSun({ size=30, className }: { size?: number; className?: string }){
    const id=useId()
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
            <defs>
                <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" />
                    <stop offset="100%" stopColor="#facc15" />
                </linearGradient>
            </defs>
            <circle cx="12" cy="12" r="10" fill={`url(#${id})`} />
        </svg>
    )
}