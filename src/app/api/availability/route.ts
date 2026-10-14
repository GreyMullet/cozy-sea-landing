import { availability } from "@/lib"
import { NextRequest, NextResponse } from "next/server"

export async function GET(){
    return NextResponse.json(availability.get(), {
        headers: { "Cache-Control": "no-store" },
    })
}

export async function POST(req: NextRequest){
    const token=req.headers.get("x-api-token")

    if (token!==process.env.AVAILABILITY_API_TOKEN){
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    let body: { free?: unknown }

    try{
        body=await req.json()
    } catch{
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const free=Number(body?.free)

    if (!Number.isInteger(free) || free<0){
        return NextResponse.json(
            { error: "Field 'free' must be a non-negative integer" },
            { status: 400 }
        )
    }

    availability.set(free)

    return NextResponse.json({ ok: true, free })
}