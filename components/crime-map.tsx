"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"

// Mock crime data for demonstration
const crimeData = [
  { id: 1, type: "theft", date: "2023-06-15", location: "Central Park" },
  { id: 2, type: "assault", date: "2023-06-18", location: "Downtown" },
  { id: 3, type: "vandalism", date: "2023-06-20", location: "West Side" },
  { id: 4, type: "theft", date: "2023-06-22", location: "East Side" },
  { id: 5, type: "fraud", date: "2023-06-25", location: "North Side" },
]

interface CrimeMapProps {
  type: "heatmap" | "markers" | "clusters"
  crimeType: string
  timeRange: string
}

export function CrimeMap({ type, crimeType, timeRange }: CrimeMapProps) {
  // Filter crime data based on props
  const filteredData = crimeData.filter((crime) => {
    const matchesType = crimeType === "all" || crime.type === crimeType
    return matchesType
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crime Reports</CardTitle>
        <CardDescription>
          Showing {crimeType === "all" ? "all crimes" : crimeType} from the last {timeRange} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full rounded-md overflow-hidden bg-muted/30 flex flex-col items-center justify-center mb-4">
          <Icons.map className="h-10 w-10 text-muted-foreground mb-2" />
          <p className="text-sm text-muted-foreground">Map view is currently disabled</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Recent Reports</h3>
          {filteredData.map((crime) => (
            <div key={crime.id} className="p-3 border rounded-md">
              <div className="font-medium capitalize">{crime.type}</div>
              <div className="text-sm text-muted-foreground">Location: {crime.location}</div>
              <div className="text-xs text-muted-foreground">Reported: {crime.date}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

