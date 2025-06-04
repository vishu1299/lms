"use client"

import React from "react"
import { cn } from "@/lib/utils"

interface ProgressSegment {
  value: number
  color: string
 }

interface MultiSegmentProgressProps {
  segments: ProgressSegment[]
  size?: number
  strokeWidth?: number
  showLabels?: boolean
  showPercentage?: boolean
  className?: string
  centerContent?: React.ReactNode
}

export function MultiSegmentProgress({
  segments,
  size = 200,
  strokeWidth = 20,
  showLabels = true,
  showPercentage = true,
  className,
  centerContent,
}: MultiSegmentProgressProps) {
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const center = size / 2
  
  // Calculate total value for percentage calculations
  const totalValue = 100

  // Calculate start and end positions for each segment
  let currentAngle = 0
  const segmentsWithAngles = segments.map(segment => {
    const percentage = segment.value / totalValue
    const angle = percentage * 360
    const startAngle = currentAngle
    currentAngle += angle
    
    return {
      ...segment,
      percentage,
      startAngle,
      endAngle: currentAngle,
    }
  })

  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke="#f1f1f1"
          strokeWidth={strokeWidth}
        />
        
        {/* Progress segments */}
        {segmentsWithAngles.map((segment, index) => {
          const startAngleRad = (segment.startAngle * Math.PI) / 180
          const endAngleRad = (segment.endAngle * Math.PI) / 180
          
          // Calculate the SVG arc path
          const x1 = center + radius * Math.cos(startAngleRad)
          const y1 = center + radius * Math.sin(startAngleRad)
          const x2 = center + radius * Math.cos(endAngleRad)
          const y2 = center + radius * Math.sin(endAngleRad)
          
          // Determine if the arc should be drawn the long way around
          const largeArcFlag = segment.percentage > 0.5 ? 1 : 0
          
          // Create the arc path
          const pathData = `
            M ${x1} ${y1}
            A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
          `
          
          return (
            <path
              key={index}
              d={pathData}
              fill="none"
              stroke={segment.color}
              strokeWidth={strokeWidth}
              strokeLinecap="butt"
            />
          )
        })}
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex items-center justify-center">
        {centerContent || (
          <div className="text-center">
            <div className="text-3xl font-bold">
              {Math.round(totalValue)}%
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
