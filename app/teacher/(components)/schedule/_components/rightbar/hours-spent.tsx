 "use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

// Match the data with the Figma design
const data = [
  { day: "S", hours: 1 },
  { day: "M", hours: 3 },
  { day: "T", hours: 2 },
  { day: "W", hours: 4 },
  { day: "T", hours: 5 },
  { day: "F", hours: 3 },
  { day: "S", hours: 1 },
]

const colors = "#10b981" // green-500

export default function HoursSpentChart() {
  return (
    <div className="w-full bg-white rounded-lg">
      <h2 className="text-neutral-700 text-lg font-medium mb-2">Hours Spent</h2>

      <ResponsiveContainer width="100%" height={150}>
        <BarChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
          <YAxis
            domain={[0, 8]}
            ticks={[0, 2, 4, 6, 8]}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#94a3b8' }} // Text color matching the design
            tickFormatter={(value) => `${value}h`} // Add "h" suffix
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: '#94a3b8' }} // Text color matching the design
          />
          <Tooltip 
            cursor={false}
            contentStyle={{ 
              backgroundColor: '',
              border: 'none',
              borderRadius: '4px',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}
          />
          <Bar 
            dataKey="hours" 
            radius={[10, 10, 10, 10]} 
            barSize={15}  
            background={{ fill: '#f7f7f7' }}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={colors} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}