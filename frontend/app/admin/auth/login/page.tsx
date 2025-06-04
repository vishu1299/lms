import { Mail } from "lucide-react"
import Image from "next/image"
import FloatingInput from "@/components/ui/floating-input-label"

export default function LoginForm() {
    return (
        <div className="flex">
            <div className="relative w-1/2 h-full">
                <Image src="/admin/login.png" alt="login" fill className="object-cover" />
            </div>
            <div className="mx-auto space-y-6 p-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Login</h1>
                    <p className="mt-2 text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintvelit officia consequat duis enim
                        velit mollit.
                    </p>
                </div>

                <form className="space-y-4">
                    <div>
                         <FloatingInput  label="Email" type="email" icon={<Mail className="h-5 w-5 text-gray-400" />} />
                    </div>

                    <div>
                         <FloatingInput label="Password" type="password" />
                    </div>

                    <button
                        type="submit"
                        className="mt-4 w-full rounded-md bg-blue-600 py-3 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Log in to continue
                    </button>
                </form>
            </div>
        </div>
    )
}
