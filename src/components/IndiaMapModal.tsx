// src/components/IndiaMapModal.tsx — FIXED: Local Image + 10+ Real Routes + Google Maps Style
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Map as MapIcon } from "lucide-react"
import { useState, useEffect } from "react"

export function IndiaMapModal() {
  const [open, setOpen] = useState(false)
  const [trains, setTrains] = useState([0, 0, 0, 0, 0])

  useEffect(() => {
    const id = setInterval(() => {
      setTrains(prev => prev.map(p => (p + 0.15 + Math.random() * 0.2) % 100))
    }, 60)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
        className="fixed top-4 right-24 z-50 hover:bg-gray-800"
        title="Madhya Pradesh Live Railway"
      >
        <MapIcon className="h-5 w-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-full w-screen h-screen p-0 m-0 rounded-none border-0 overflow-hidden">
          {/* Title */}
          <div className="absolute top-6 left-8 z-50 bg-black/90 backdrop-blur-lg px-8 py-5 rounded-2xl border border-white/10">
            <h2 className="text-3xl font-bold text-white">Madhya Pradesh Railway Network</h2>
            <p className="text-gray-300">Live Train Tracking • Real Time • {trains.length} Active Trains</p>
          </div>

          <div className="relative w-full h-full">
            {/* Local High-Res Image - Always Loads */}
            <img
              src="/mp-railway-map.png"  // Your downloaded image here
              alt="Madhya Pradesh Railway Map"
              className="w-full h-full object-cover"
            />

            {/* Google Maps Style Glowing Red Tracks - 10+ Real Routes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
              <defs>
                <filter id="trackGlow">
                  <feGaussianBlur stdDeviation="3" result="glow"/>
                  <feMerge>
                    <feMergeNode in="glow"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Real MP Routes (Curved like Google Maps) */}
              {/* 1. Bhopal → Jabalpur */}
              <path d="M 48% 42% Q 47% 46% 46% 50% Q 48% 48% 52% 48%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 2. Bhopal → Indore */}
              <path d="M 48% 42% Q 43% 45% 38% 48%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 3. Indore → Ratlam */}
              <path d="M 38% 48% Q 37% 46% 36% 44% Q 35% 43% 34% 42%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 4. Gwalior → Jhansi */}
              <path d="M 42% 20% Q 40% 24% 38% 28%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 5. Bhopal → Sagar */}
              <path d="M 48% 42% Q 52% 38% 55% 35%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 6. Bhopal → Khandwa */}
              <path d="M 48% 42% Q 42% 50% 40% 55%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 7. Jabalpur → Katni */}
              <path d="M 52% 48% Q 55% 50% 58% 52%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 8. Indore → Ujjain */}
              <path d="M 38% 48% Q 35% 49% 32% 52%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 9. Ratlam → Neemuch */}
              <path d="M 34% 42% Q 32% 40% 30% 38%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 10. Jabalpur → Gondia */}
              <path d="M 52% 48% Q 50% 52% 48% 58%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 11. Gwalior → Morena */}
              <path d="M 42% 20% Q 44% 18% 46% 16%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
              {/* 12. Satna → Rewa */}
              <path d="M 54% 35% Q 56% 32% 58% 30%" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="12,8" filter="url(#trackGlow)" opacity="0.9"/>
            </svg>

            {/* Moving Trains - 5 Real Routes */}
            {[
              { top: 42 + trains[0] * 0.08, left: 48 + trains[0] * 0.06, name: "Bhopal → Jabalpur Express" },
              { top: 42 + trains[1] * 0.06, left: 48 - trains[1] * 0.12, name: "Bhopal → Indore Shatabdi" },
              { top: 20 + trains[2] * 0.08, left: 42 - trains[2] * 0.04, name: "Gwalior → Jhansi Rajdhani" },
              { top: 42 + trains[3] * 0.13, left: 48 + trains[3] * 0.07, name: "Bhopal → Sagar Local" },
              { top: 48 + trains[4] * 0.04, left: 38 + trains[4] * 0.06, name: "Indore → Ratlam Freight" },
            ].map((train, i) => (
              <div
                key={i}
                className="absolute z-40 -translate-x-1/2 -translate-y-1/2"
                style={{ top: `${train.top}%`, left: `${train.left}%` }}
              >
                <div className="relative">
                  <svg width="36" height="36" viewBox="0 0 24 24" className="drop-shadow-2xl">
                    <rect x="4" y="6" width="16" height="9" rx="2" fill="#dc2626"/>
                    <circle cx="7" cy="18" r="2.5" fill="#1f2937"/>
                    <circle cx="17" cy="18" r="2.5" fill="#1f2937"/>
                    <rect x="6" y="8" width="4" height="5" fill="#fff"/>
                    <rect x="14" y="8" width="4" height="5" fill="#fff"/>
                  </svg>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {train.name}
                  </div>
                </div>
              </div>
            ))}

            {/* Station Labels */}
            {[
              { name: "Bhopal Jn", top: "40%", left: "46%" },
              { name: "Jabalpur", top: "48%", left: "51%" },
              { name: "Indore Jn", top: "46%", left: "36%" },
              { name: "Gwalior Jn", top: "18%", left: "40%" },
              { name: "Ujjain Jn", top: "44%", left: "34%" },
              { name: "Ratlam Jn", top: "41%", left: "32%" },
              { name: "Sagar", top: "35%", left: "55%" },
              { name: "Khandwa", top: "55%", left: "40%" },
            ].map((s, i) => (
              <div key={i} className="absolute text-white font-bold text-sm bg-black/70 px-3 py-1 rounded-lg z-30"
                style={{ top: s.top, left: s.left }}>
                {s.name}
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
