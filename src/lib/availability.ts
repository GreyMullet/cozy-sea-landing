export interface Availability{
    free: number
    updatedAt: string|null
}
  
export const availability: {
    get(): Availability
    set(free: number): void
}=typeof global!=="undefined" && (global as any).__availability
    ? (global as any).__availability
    : {
        get: ()=>({ free: 0, updatedAt: null }),
        set: ()=>{},
    }