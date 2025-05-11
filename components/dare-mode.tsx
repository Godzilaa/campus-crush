"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Sparkles, Zap, Coins } from "lucide-react"

export function DareMode() {
  const [completed, setCompleted] = useState(false)
  const [coins, setCoins] = useState(120)
  const [progress, setProgress] = useState(65)

  const handleCompleteDare = () => {
    if (!completed) {
      setCompleted(true)
      setCoins(coins + 50)
      setProgress(100)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-pink-500">Daily Dare Challenge</h2>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-pink-200">
          <Coins className="h-5 w-5 text-yellow-500" />
          <span className="font-semibold">{coins}</span>
        </div>
      </div>

      <Card className="border-pink-200 shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-pink-400 to-pink-500 p-1">
          <div className="bg-white rounded-t-lg p-4">
            <CardHeader className="p-0 pb-2">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-pink-500 flex items-center gap-2">
                  <Zap className="h-5 w-5" /> Today's Dare
                </h3>
                <div className="text-sm text-gray-500">Reward: 50 coins</div>
              </div>
            </CardHeader>
            <CardContent className="p-0 py-4">
              <div className="bg-pink-50 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-pink-600 mb-4">Send an emoji-only pickup line</h4>
                <p className="text-gray-600 mb-6">
                  Challenge: Message your crush using ONLY emojis to create a pickup line. Screenshot the conversation
                  and upload it to complete the dare!
                </p>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Progress</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2 bg-pink-100" indicatorClassName="bg-pink-500" />
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0 pt-4 flex justify-center">
              <Button
                onClick={handleCompleteDare}
                disabled={completed}
                className={`rounded-full font-semibold ${
                  completed ? "bg-green-500 hover:bg-green-600 text-white" : "bg-pink-500 hover:bg-pink-600 text-white"
                }`}
              >
                {completed ? (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Dare Completed!
                  </>
                ) : (
                  <>
                    <Zap className="mr-2 h-4 w-4" />
                    Complete Dare
                  </>
                )}
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Past Dares</h3>
              <p className="text-sm text-gray-500 mb-4">View your dare history</p>
              <Button variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
                View History
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Coin Shop</h3>
              <p className="text-sm text-gray-500 mb-4">Spend your coins on rewards</p>
              <Button variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
                Visit Shop
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-sm hover:shadow-md transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center">
              <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                <Sparkles className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Suggest a Dare</h3>
              <p className="text-sm text-gray-500 mb-4">Submit your dare ideas</p>
              <Button variant="outline" className="rounded-full border-pink-200 text-pink-500 hover:bg-pink-50">
                Submit Idea
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
