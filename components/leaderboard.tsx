"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, BugIcon as QuestionMark } from "lucide-react"

type LeaderboardEntry = {
  id: number
  name: string
  points: number
  badges: number
  rank: number
}

export function Leaderboard() {
  const [topFlirts] = useState<LeaderboardEntry[]>([
    { id: 1, name: "Emma S.", points: 2450, badges: 5, rank: 1 },
    { id: 2, name: "Jake T.", points: 2120, badges: 4, rank: 2 },
    { id: 3, name: "Olivia M.", points: 1890, badges: 3, rank: 3 },
    { id: 4, name: "Liam P.", points: 1740, badges: 3, rank: 4 },
    { id: 5, name: "Sophia R.", points: 1620, badges: 2, rank: 5 },
  ])

  const [mostDMs] = useState<LeaderboardEntry[]>([
    { id: 1, name: "Noah K.", points: 342, badges: 4, rank: 1 },
    { id: 2, name: "Ava J.", points: 315, badges: 3, rank: 2 },
    { id: 3, name: "Ethan L.", points: 287, badges: 3, rank: 3 },
    { id: 4, name: "Mia C.", points: 256, badges: 2, rank: 4 },
    { id: 5, name: "Lucas B.", points: 234, badges: 2, rank: 5 },
  ])

  const [mysteryUsers] = useState<LeaderboardEntry[]>([
    { id: 1, name: "Anonymous", points: 1890, badges: 5, rank: 1 },
    { id: 2, name: "Secret Admirer", points: 1720, badges: 4, rank: 2 },
    { id: 3, name: "Mystery Crush", points: 1650, badges: 4, rank: 3 },
    { id: 4, name: "Hidden Heart", points: 1540, badges: 3, rank: 4 },
    { id: 5, name: "Enigma E.", points: 1480, badges: 3, rank: 5 },
  ])

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-pink-500">Campus Crush Leaderboard</h2>

      <Tabs defaultValue="flirts" className="w-full">
        <TabsList className="grid grid-cols-3 h-12 bg-white rounded-full p-1 shadow-md mb-6">
          <TabsTrigger
            value="flirts"
            className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
          >
            <Heart className="h-4 w-4 mr-2" />
            Top Flirts
          </TabsTrigger>
          <TabsTrigger
            value="dms"
            className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Most DMs
          </TabsTrigger>
          <TabsTrigger
            value="mystery"
            className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
          >
            <QuestionMark className="h-4 w-4 mr-2" />
            Mystery Crush
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flirts">
          <LeaderboardTable
            entries={topFlirts}
            pointsLabel="Flirt Points"
            icon={<Heart className="h-4 w-4 text-pink-500" />}
          />
        </TabsContent>

        <TabsContent value="dms">
          <LeaderboardTable
            entries={mostDMs}
            pointsLabel="Total DMs"
            icon={<MessageCircle className="h-4 w-4 text-pink-500" />}
          />
        </TabsContent>

        <TabsContent value="mystery">
          <LeaderboardTable
            entries={mysteryUsers}
            pointsLabel="Mystery Points"
            icon={<QuestionMark className="h-4 w-4 text-pink-500" />}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function LeaderboardTable({
  entries,
  pointsLabel,
  icon,
}: {
  entries: LeaderboardEntry[]
  pointsLabel: string
  icon: React.ReactNode
}) {
  return (
    <Card className="border-pink-200 shadow-md overflow-hidden">
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-pink-50 border-b border-pink-200">
                <th className="py-3 px-4 text-left text-sm font-semibold text-pink-500">Rank</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-pink-500">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-pink-500">{pointsLabel}</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-pink-500">Badges</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry.id} className="border-b border-pink-100 hover:bg-pink-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-500 font-semibold">
                      {entry.rank}
                    </div>
                  </td>
                  <td className="py-4 px-4 font-medium">{entry.name}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-1">
                      {icon}
                      <span>{entry.points.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex gap-1">
                      {Array.from({ length: entry.badges }).map((_, i) => (
                        <Badge key={i} className="bg-pink-100 text-pink-500 border-0">
                          <Heart className="h-3 w-3 fill-pink-500 text-pink-500" />
                        </Badge>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  )
}
