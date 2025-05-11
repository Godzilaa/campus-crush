"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame, Heart, RefreshCw } from "lucide-react"

type Profile = {
  id: number
  name: string
  age: number
  major: string
  bio: string
  interests: string[]
}

export function RoastOrToast() {
  const [profiles] = useState<Profile[]>([
    {
      id: 1,
      name: "Alex",
      age: 21,
      major: "Computer Science",
      bio: "Coffee addict who codes at 3am and sleeps through morning classes. Looking for someone who appreciates my debugging skills.",
      interests: ["Coding", "Gaming", "Coffee"],
    },
    {
      id: 2,
      name: "Jordan",
      age: 20,
      major: "Psychology",
      bio: "Psychology major who can read your mind but still can't read social cues. Let's overthink things together!",
      interests: ["Reading", "Art", "Psychology"],
    },
    {
      id: 3,
      name: "Taylor",
      age: 22,
      major: "Business",
      bio: "Future CEO who can't decide what to eat for dinner. Looking for someone to make decisions for me except on business matters.",
      interests: ["Entrepreneurship", "Travel", "Food"],
    },
  ])

  const [currentProfile, setCurrentProfile] = useState(0)
  const [action, setAction] = useState<"roast" | "toast" | null>(null)

  const handleAction = (type: "roast" | "toast") => {
    setAction(type)
    setTimeout(() => {
      setAction(null)
      setCurrentProfile((currentProfile + 1) % profiles.length)
    }, 1500)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-pink-500">Roast or Toast</h2>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50"
          onClick={() => setCurrentProfile((currentProfile + 1) % profiles.length)}
        >
          <RefreshCw className="h-4 w-4 mr-2" />
          Skip
        </Button>
      </div>

      <Card
        className={`border-pink-200 shadow-md overflow-hidden transition-all duration-300 ${
          action === "roast" ? "bg-orange-50 border-orange-200" : action === "toast" ? "bg-pink-50 border-pink-200" : ""
        }`}
      >
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/3 aspect-square bg-gradient-to-br from-pink-200 to-pink-300 rounded-lg flex items-center justify-center">
              <span className="text-6xl">{profiles[currentProfile].name.charAt(0)}</span>
            </div>
            <div className="w-full md:w-2/3">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {profiles[currentProfile].name}, {profiles[currentProfile].age}
                  </h3>
                  <p className="text-gray-500">{profiles[currentProfile].major}</p>
                </div>
                <div className={`transition-opacity duration-300 ${action ? "opacity-100" : "opacity-0"}`}>
                  {action === "roast" && <Badge className="bg-orange-500">Roasted! 🔥</Badge>}
                  {action === "toast" && <Badge className="bg-pink-500">Toasted! 💖</Badge>}
                </div>
              </div>

              <p className="text-gray-700 mb-4">{profiles[currentProfile].bio}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {profiles[currentProfile].interests.map((interest, index) => (
                  <Badge key={index} variant="outline" className="bg-white border-pink-200 text-pink-500">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-4 bg-white border-t border-pink-100 flex justify-center gap-4">
          <Button
            onClick={() => handleAction("roast")}
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold"
            disabled={action !== null}
          >
            <Flame className="mr-2 h-4 w-4" />
            Roast
          </Button>
          <Button
            onClick={() => handleAction("toast")}
            className="bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold"
            disabled={action !== null}
          >
            <Heart className="mr-2 h-4 w-4" />
            Toast
          </Button>
        </CardFooter>
      </Card>

      <div className="bg-white rounded-lg border border-pink-200 p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-pink-500 mb-4">How It Works</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <Flame className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Roast</h4>
              <p className="text-sm text-gray-600">Give a funny, lighthearted tease</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
              <Heart className="h-5 w-5 text-pink-500" />
            </div>
            <div>
              <h4 className="font-medium text-gray-800">Toast</h4>
              <p className="text-sm text-gray-600">Give a sweet, genuine compliment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
