const { createServer }=require("http")
const next=require("next")
const { WebSocketServer }=require("ws")

const dev=process.env.NODE_ENV!=="production"
const app=next({ dev })
const handle=app.getRequestHandler()

let state={ free: 0, updatedAt: null }
const consumers=new Set()

function broadcast(){
  const msg=JSON.stringify({ type: "availability", ...state })
  for (const ws of consumers){
    if (ws.readyState===1) ws.send(msg)
  }
}

const setAvailability=(free)=>{
  state={ free, updatedAt: new Date().toISOString() }
  broadcast()
}

app.prepare().then(()=>{
  const server=createServer((req, res)=>handle(req, res))
  const wss=new WebSocketServer({ noServer: true })

  const upgradeHandler=app.getUpgradeHandler()

  server.on("upgrade", (req, socket, head)=>{
    if (req.url?.startsWith("/ws")){
      wss.handleUpgrade(req, socket, head, (ws)=>{
        wss.emit("connection", ws, req)
      })
    } else{
      upgradeHandler(req, socket, head)
    }
  })

  wss.on("connection", (ws, req)=>{
    const url=new URL(req.url, "http://localhost")
    const token=url.searchParams.get("token")

    if (token){
      if (token!==process.env.AVAILABILITY_API_TOKEN){
        ws.close(4401, "unauthorized")
        return
      }
      ws.send(JSON.stringify({ type: "hello", role: "producer" }))

      ws.on("message", (raw)=>{
        try {
          const msg=JSON.parse(raw.toString())
          if (msg.type==="set" && Number.isInteger(msg.free) && msg.free>=0){
            setAvailability(msg.free)
            ws.send(JSON.stringify({ type: "ack", free: msg.free }))
          } else{
            ws.send(JSON.stringify({ type: "error", error: "invalid message" }))
          }
        } catch{
          ws.send(JSON.stringify({ type: "error", error: "invalid JSON" }))
        }
      })
    } else{
      consumers.add(ws)
      ws.send(JSON.stringify({ type: "availability", ...state }))
      ws.on("close", ()=>consumers.delete(ws))
    }
  })

  global.__availability={
    get: ()=>state,
    set: setAvailability,
  }

  server.listen(3005, "0.0.0.0", ()=>{
    console.log("> ready on http://0.0.0.0:3005 (WS on /ws)")
  })
})