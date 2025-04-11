"use client"

import { MapSetup } from "@/components/map-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MapConfigPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Map Configuration</h2>
      </div>

      <div className="grid gap-4 grid-cols-1">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Map API Settings</CardTitle>
            <CardDescription>Configure your Mapbox API token for map features</CardDescription>
          </CardHeader>
          <CardContent>
            <MapSetup />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Map Features</CardTitle>
            <CardDescription>The following features require map configuration</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Crime heatmaps and visualization</li>
              <li>Location selection when reporting crimes</li>
              <li>Real-time crime alerts on map</li>
              <li>Geographic analysis of crime patterns</li>
              <li>Location-based notifications</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

