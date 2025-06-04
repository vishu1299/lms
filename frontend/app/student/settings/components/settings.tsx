"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProfileTab from "./profile-edit/profile-edit"
import NotificationTab from "./notifications/notifications"
import { Button } from "@/components/ui/button"

export default function SettingsPage() {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 mx-4">
      <h2 className="text-2xl font-semibold mb-6">Settings</h2>
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="flex space-x-6 shadow-none border-none rounded-none">
          <TabsTrigger
            value="profile"
            className="text-lg relative pb-2 text-gray-500 data-[state=active]:text-sky-600 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-sky-600 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:origin-left  focus:ring-0 focus:ring-offset-0 focus:outline-none data-[state=active]:shadow-none"
          >
            Profile
          </TabsTrigger>
          <TabsTrigger
            value="notifications"
            className="text-lg relative pb-2 text-gray-500 data-[state=active]:text-sky-600 after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-sky-600 after:scale-x-0 data-[state=active]:after:scale-x-100 after:transition-transform after:origin-left shadow-none focus:ring-0 focus:ring-offset-0 focus:outline-none data-[state=active]:shadow-none"
          >
            Notifications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="profile" className="pt-6">
          <ProfileTab />
        </TabsContent>
        <TabsContent value="notifications" className="pt-6">
          <NotificationTab />
        </TabsContent>
      </Tabs>

      <div className="flex items-center justify-center mt-8">
      <Button size="sm" className="bg-black text-white font-normal rounded-full px-8 py-5">Back</Button>
      </div>
    </div>
  )
}
