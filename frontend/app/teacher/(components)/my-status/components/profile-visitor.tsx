"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export default function ProfileVisitor() {
    const data = [
        { month: "Jan", visits: 40 },
        { month: "Feb", visits: 30 },
        { month: "Mar", visits: 60 },
        { month: "Apr", visits: 85 },
        { month: "May", visits: 50 },
        { month: "Jun", visits: 30 },
        { month: "Jul", visits: 20 },
        { month: "Aug", visits: 40 },
        { month: "Sep", visits: 60 },
        { month: "Oct", visits: 80 },
        { month: "Nov", visits: 70 },
        { month: "Dec", visits: 40 },
    ]

    return (
        <div className="rounded-xl">
            <div className="flex items-center justify-between pb-6">
                <h2 className="text-lg font-medium text-gray-910">Profile Visitor</h2>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-sm text-gray-910">Course Visit</span>
                </div>
                <Select defaultValue="last12">
                    <SelectTrigger className="h-8 border-none text-sm text-gray-910">
                        <SelectValue placeholder="Period" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="last12">Last 12 Month</SelectItem>
                        <SelectItem value="last6">Last 6 Month</SelectItem>
                        <SelectItem value="last3">Last 3 Month</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <ChartContainer
                config={{
                    visits: {
                        label: "Visits",
                        color: "hsl(143, 85%, 45%)",
                    },
                }}
                
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 5, right: 5, left: -12, bottom: 5 }}>
                    <CartesianGrid vertical={false} strokeWidth={0.3}/>
                        <XAxis
                            dataKey="month"
                            axisLine={false}
                            tickLine={false}
                            tickMargin={8}
                            fontSize={12}
                            tick={{ fill: "#9CA3AF" }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            fontSize={12}
                            tick={{ fill: "#9CA3AF" }}
                            domain={[0, 100]}
                            ticks={[0, 20, 40, 60, 80, 100]}
                        />

                        <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
                        <Bar
                            dataKey="visits"
                            fill="var(--color-visits)"
                            radius={[4, 4, 0, 0]}
                            barSize={10}
                            className="fill-emerald-500"
                        />
                    </BarChart>
                </ResponsiveContainer>
            </ChartContainer>
        </div>
    )
}
