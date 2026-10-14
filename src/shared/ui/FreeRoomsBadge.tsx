"use client"

import { useEffect, useState } from "react"

const plural=(n: number)=>{
  const mod10=n%10
  const mod100=n%100
  if (mod10===1 && mod100!==11) return "номер"
  if (mod10>=2 && mod10<=4 && (mod100<10 || mod100>=20)) return "номера"
  return "номеров"
}

const useAvailability=()=>{
  const [free, setFree]=useState<number|null>(null)

  useEffect(()=>{
    let disposed=false
    let ws: WebSocket|null=null
    let retry: ReturnType<typeof setTimeout>|undefined

    const connect=()=>{
      const protocol=location.protocol==="https:" ? "wss" : "ws"
      ws=new WebSocket(`${protocol}://${location.host}/ws`)

      ws.onmessage=(e)=>{
        try{
          const msg=JSON.parse(e.data)
          if (msg.type==="availability") setFree(msg.free)
        } catch{}
      }

      ws.onclose=()=>{
        if (!disposed) retry=setTimeout(connect, 5000)
      }

      ws.onerror=()=>ws?.close()
    }

    connect()

    const poll=setInterval(async ()=>{
      try {
        const res=await fetch("/api/availability", { cache: "no-store" })
        if (res.ok) setFree((await res.json()).free)
      } catch{}
    }, 60_000)

    return ()=>{
        disposed=true
        clearTimeout(retry)
        clearInterval(poll)
      
        if (!ws) return
        if (ws.readyState===WebSocket.CONNECTING){
          ws.addEventListener("open", ()=>ws!.close(), { once: true })
        } else if (ws.readyState===WebSocket.OPEN){
          ws.close()
        }
    }
  }, [])

  return free
}

export const FreeRoomsBadge=()=>{
  const free=useAvailability()

  if (free===null || free===0) return null

  return(
    <span
      className="bg-white border border-ink/15 w-fit px-4 h-8 flex items-center gap-2 justify-center rounded-full text-xs sm:text-sm"
      role="status"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
      </span>
      Свободно {free} {plural(free)} на октябрь
    </span>
  )
}