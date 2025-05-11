"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HomeDashboard } from "@/components/home-dashboard"
import { ConfessionWall } from "@/components/confession-wall"
import { DareMode } from "@/components/dare-mode"
import { RoastOrToast } from "@/components/roast-or-toast"
import { Leaderboard } from "@/components/leaderboard"
import { Heart } from "lucide-react"

export function MainApp() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-pink-50">
      <header className="bg-white border-b border-pink-200 p-4 shadow-sm">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-pink-500 flex items-center gap-2">
            Campus Crush <Heart className="h-5 w-5 fill-pink-500 text-pink-500" />
          </h1>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
              <span className="text-pink-500 text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <Tabs defaultValue="home" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-5 h-14 bg-white rounded-full p-1 shadow-md mb-6">
            <TabsTrigger
              value="home"
              className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            >
              Home
            </TabsTrigger>
            <TabsTrigger
              value="confessions"
              className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            >
              Confessions
            </TabsTrigger>
            <TabsTrigger
              value="dares"
              className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            >
              Dares
            </TabsTrigger>
            <TabsTrigger
              value="roastortoast"
              className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            >
              Roast/Toast
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="rounded-full data-[state=active]:bg-pink-500 data-[state=active]:text-white"
            >
              Leaderboard
            </TabsTrigger>
          </TabsList>

          <TabsContent value="home">
            <HomeDashboard />
          </TabsContent>

          <TabsContent value="confessions">
            <ConfessionWall />
          </TabsContent>

          <TabsContent value="dares">
            <DareMode />
          </TabsContent>

          <TabsContent value="roastortoast">
            <RoastOrToast />
          </TabsContent>

          <TabsContent value="leaderboard">
            <Leaderboard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
