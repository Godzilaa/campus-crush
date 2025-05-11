"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sparkles, MessageCircleHeart, Zap, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

export function HomeDashboard() {
  const [isSpinning, setIsSpinning] = useState(false)

  const handleSpinRoulette = () => {
    setIsSpinning(true)
    setTimeout(() => {
      setIsSpinning(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="border-pink-200 shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            {Array.from({ length: 20 }).map((_, i) => (
              <Heart
                key={i}
                className="absolute text-white fill-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 20 + 10}px`,
                  height: `${Math.random() * 20 + 10}px`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
              <Sparkles className="h-5 w-5" /> Welcome to Campus Crush!
            </h2>
            <p className="text-pink-100 mb-4">Find your perfect match on campus today!</p>
            <Button
              onClick={handleSpinRoulette}
              className={cn(
                "bg-white text-pink-500 hover:bg-pink-100 rounded-full font-semibold",
                isSpinning && "animate-spin",
              )}
            >
              <Heart className="mr-2 h-4 w-4 fill-pink-500 text-pink-500" />
              Spin Crush Roulette
            </Button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <MessageCircleHeart className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Confession Wall</h3>
              <p className="text-sm text-gray-500 mb-4">Share your secret crush anonymously</p>
              <Button variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
                Make a Confession
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Daily Dare</h3>
              <p className="text-sm text-gray-500 mb-4">Complete dares to earn crush coins</p>
              <Button variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
                View Today's Dare
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Trophy className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Leaderboard</h3>
              <p className="text-sm text-gray-500 mb-4">See who's crushing it on campus</p>
              <Button variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
                View Rankings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
