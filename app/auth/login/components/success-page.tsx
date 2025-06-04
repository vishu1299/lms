"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type SuccessPageProps = {
  backToLogin: () => void
}

export default function SuccessPage({ backToLogin }: SuccessPageProps) {
  return (
    <div className="flex items-center justify-center">
    <div className="w-full max-w-md rounded-md bg-white p-6 relative">
      <div className="flex flex-col items-center justify-center py-8">
         <Image src="/successpas.png" alt="successfull" width={110} height={20} />

        <h1 className="text-2xl font-semibold my-1">All set well done!</h1>
        <p className="text-sm text-gray-600 mb-8">Try to login for next step.</p>

        <Button onClick={backToLogin} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Back to login
        </Button>
      </div>
    </div>
    </div>
  )
}
