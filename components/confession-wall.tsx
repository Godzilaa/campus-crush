"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Heart, MessageCircleHeart, Lock } from "lucide-react"

type Confession = {
  id: number
  text: string
  likes: number
  timestamp: string
}

export function ConfessionWall() {
  const [confession, setConfession] = useState("")
  const [confessions, setConfessions] = useState<Confession[]>([
    {
      id: 1,
      text: "To the person in my Psych 101 class with the blue backpack - your smile makes my day every time I see you.",
      likes: 24,
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      text: "I've had a crush on my study partner for the entire semester but I'm too shy to say anything. What should I do?",
      likes: 18,
      timestamp: "5 hours ago",
    },
    {
      id: 3,
      text: "To the barista at the campus coffee shop - you make my heart race faster than the caffeine in my latte.",
      likes: 42,
      timestamp: "1 day ago",
    },
  ])

  const handleSubmit = () => {
    if (confession.trim()) {
      const newConfession: Confession = {
        id: Date.now(),
        text: confession,
        likes: 0,
        timestamp: "Just now",
      }
      setConfessions([newConfession, ...confessions])
      setConfession("")
    }
  }

  const handleLike = (id: number) => {
    setConfessions(confessions.map((conf) => (conf.id === id ? { ...conf, likes: conf.likes + 1 } : conf)))
  }

  return (
    <div className="space-y-6">
      <Card className="border-pink-200 shadow-md">
        <CardHeader className="pb-2">
          <h2 className="text-xl font-semibold text-pink-500 flex items-center gap-2">
            <Lock className="h-5 w-5" /> Anonymous Confession
          </h2>
          <p className="text-sm text-gray-500">Share your feelings without revealing your identity</p>
        </CardHeader>
        <CardContent>
          <Textarea
            placeholder="Write your confession here..."
            className="min-h-[100px] border-pink-200 focus-visible:ring-pink-500"
            value={confession}
            onChange={(e) => setConfession(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSubmit} className="bg-pink-500 hover:bg-pink-600 text-white rounded-full">
            <MessageCircleHeart className="mr-2 h-4 w-4" />
            Post Confession
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-pink-500">Recent Confessions</h2>

        {confessions.map((conf) => (
          <Card key={conf.id} className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <p className="text-gray-700">{conf.text}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center border-t border-pink-100 pt-4">
              <div className="text-sm text-gray-500">{conf.timestamp}</div>
              <div className="flex gap-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-pink-500 hover:bg-pink-50 hover:text-pink-600 flex items-center gap-1"
                  onClick={() => handleLike(conf.id)}
                >
                  <Heart className="h-4 w-4" />
                  <span>{conf.likes}</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50"
                >
                  Claim This?
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
