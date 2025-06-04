"use client"

import type React from "react"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Lessons from "./lessons"
import Attachment from "./attachment"
import Reviews from "./reviews"
import LiveClasses from "./live-classes/live-classes"
import Recorded from "./recorded"
import Forum from "./forum"

export function CourseTabs() {
    

    return (
        <div className="w-full mx-auto bg-white rounded-md">
            <Tabs defaultValue="lessons" className="w-full">
                <TabsList className="space-x-4 justify-start border-b border-[#F3F3F3] rounded-none h-auto p-0 bg-transparent text-[#838383] ">
                    <TabsTrigger
                        value="lessons"
                        className="text-lg rounded-none data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:text-black font-medium"
                    >
                        Lessons
                    </TabsTrigger>
                    <TabsTrigger
                        value="attachment"
                        className="text-lg rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-black font-medium"
                    >
                        Attachment
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="text-lg rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-black font-medium"
                    >
                        Reviews
                    </TabsTrigger>
                    <TabsTrigger
                        value="live-session"
                        className="text-lg rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-black font-medium"
                    >
                        Live Session
                    </TabsTrigger>
                    <TabsTrigger
                        value="forum"
                        className="text-lg rounded-none data-[state=active]:border-b-2 data-[state=active]:border-b-blue-600 data-[state=active]:shadow-none data-[state=active]:bg-transparent data-[state=active]:text-black font-medium"
                    >
                        Forum
                    </TabsTrigger>
                </TabsList>
                {/* Lessons Tab Content */}
                <TabsContent value="lessons" className="mt-6">
                    <Lessons />
                </TabsContent>

                {/* Attachment Tab Content */}
                <TabsContent value="attachment" className="mt-6">
                    <Attachment />
                </TabsContent>

                {/* Reviews Tab Content */}
                <TabsContent value="reviews" className="mt-6">
                    <Reviews />
                </TabsContent>

                {/* Live Session Tab Content */}
                <TabsContent value="live-session" className="mt-6 space-y-8">
                    <LiveClasses />
                    <Recorded />
                </TabsContent>

                {/* Forum Tab Content */}
                <TabsContent value="forum" className="mt-6">
                   <Forum />
                </TabsContent>
            </Tabs>
        </div>
    )
}




 