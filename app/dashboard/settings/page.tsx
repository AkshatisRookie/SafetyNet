import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Link from "next/link"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>Manage your account details and preferences</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <p className="text-sm text-muted-foreground mb-4">
              Update your profile information, password, and notification preferences.
            </p>
            <Button variant="outline" asChild>
              <Link href="/dashboard/settings/account">
                <Icons.user className="mr-2 h-4 w-4" />
                Manage Account
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Map Configuration</CardTitle>
            <CardDescription>Set up your map API for location features</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <p className="text-sm text-muted-foreground mb-4">
              Configure your Mapbox API token to enable crime maps and location features.
            </p>
            <Button variant="outline" asChild>
              <Link href="/dashboard/settings/map-config">
                <Icons.map className="mr-2 h-4 w-4" />
                Configure Maps
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Manage alerts and notifications</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <p className="text-sm text-muted-foreground mb-4">
              Control which notifications you receive and how they are delivered.
            </p>
            <Button variant="outline" asChild>
              <Link href="/dashboard/settings/notifications">
                <Icons.bell className="mr-2 h-4 w-4" />
                Manage Notifications
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Privacy & Security</CardTitle>
            <CardDescription>Manage your privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-start">
            <p className="text-sm text-muted-foreground mb-4">
              Control your data, privacy settings, and security options.
            </p>
            <Button variant="outline" asChild>
              <Link href="/dashboard/settings/privacy">
                <Icons.shield className="mr-2 h-4 w-4" />
                Privacy Settings
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

