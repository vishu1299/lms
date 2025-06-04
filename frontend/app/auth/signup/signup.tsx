 "use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"

const formSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the terms and rules",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export default function RegisterForm({
   onSwitch,
}: {
   onSwitch?: () => void
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
    // Handle form submission here
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg">
      <div className="mb-6 text-center">
        <h2 className="text-3xl text-[#183B56]">Register</h2>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#5A7184] font-normal mb-1">Email address</FormLabel>
                <FormControl>
                  <Input placeholder="gilroybworn@gmail.com |" {...field} className="placeholder:text-[#183B56] border-[#C3CAD9] text-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#5A7184] font-normal mb-1">Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter password" {...field} className="border-[#C3CAD9] text-sm"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#5A7184] font-normal mb-1">Retype Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter password" {...field} className="border-[#C3CAD9] text-sm" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center space-x-1 space-y-0">
                <FormControl>
                  <Checkbox checked={field.value} onCheckedChange={field.onChange} className="border-[#C3CAD9]" />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="font-normal text-[#5A7184] text-sm">
                    I agree with
                    <Link href="#" className="text-blue-600 underline text-sm">
                      terms & rules
                    </Link>
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full bg-blue-600 text-white font-semibold py-5" onClick={ onSwitch}>
            Sign up
          </Button>
        </form>
      </Form>

      <div className="flex mt-2">
        <p className="text-sm text-[#5A7184]">
          Already have an account?{" "}
          <Button type="button" variant="link" className="text-blue-600 font-medium p-0" onClick={ onSwitch}>
            Sign In
          </Button>
        </p>
      </div>
    </div>
  )
}
