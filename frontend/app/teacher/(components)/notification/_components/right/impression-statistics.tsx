"use client"

import { Line, LineChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
    { date: "Oct 12", comments: 20, likes: 25 },
    { date: "Oct 13", comments: 28, likes: 40 },
    { date: "Oct 14", comments: 25, likes: 50 },
    { date: "Oct 15", comments: 45, likes: 35 },
    { date: "Oct 16", comments: 40, likes: 40 },
]

export default function ImpressionStatistics() {
    return (
        <div className="flex flex-col space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-910">Impression Statistic</h3>
                <div className="flex items-center text-xs space-x-2">
                    <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                        <span>Comment</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                        <span>Like</span>
                    </div>
                </div>
            </div>

            <div className="h-60">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: -29, right: 10, left: 0, bottom: 10 }}>
                        <CartesianGrid vertical={false} strokeWidth={0.3} />
                        <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fill: "#888", fontSize: 12 }} dy={12} dx={16} />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: "#888", fontSize: 12 }}
                            ticks={[10, 20, 30, 40, 50]}
                            domain={[10, 60]}
                            dx={-8}
                        />
                        <Line
                            type="monotone"
                            dataKey="likes"
                            stroke="#3b82f6"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="comments"
                            stroke="#10b981"
                            strokeWidth={3}
                            dot={false}
                            activeDot={{ r: 6 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
