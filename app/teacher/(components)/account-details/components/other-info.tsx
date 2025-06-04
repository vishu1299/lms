import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OtherInfo() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-medium mb-6 text-gray-910">Other Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="address" className="font-normal text-gray-910">Address</Label>
          <Input id="address" placeholder="2841 Bougainville Lane" className="bg-gray-40 w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="city" className="font-normal text-gray-910">City</Label>
          <Input id="city" placeholder="McAllen" className="bg-gray-40 w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state" className="font-normal text-gray-910">State</Label>
          <Input id="state" placeholder="New York" className="bg-gray-40 w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="zipcode" className="font-normal text-gray-910">Zipcode</Label>
          <Input id="zipcode" placeholder="77612" className="bg-gray-40 w-full" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="country" className="font-normal text-gray-910">Country</Label>
          <Select defaultValue="us">
            <SelectTrigger className="bg-gray-40 w-full border-none text-gray-400 text-sm">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="timezone" className="font-normal text-gray-910">Time Zone</Label>
          <Select defaultValue="utc-4">
            <SelectTrigger className="bg-gray-40 w-full border-none text-gray-400 text-sm">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-4">UTC-4 New York</SelectItem>
              <SelectItem value="utc-5">UTC-5 Chicago</SelectItem>
              <SelectItem value="utc-7">UTC-7 Denver</SelectItem>
              <SelectItem value="utc-8">UTC-8 Los Angeles</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2 text-sm col-span-full">
         <h1 className="text-gray-910">About Info</h1>
         <p className="bg-gray-40 p-2 text-transparent-30 rounded-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius arcu eget tincidunt lobortis. Nam placerat neque sed risus mollis, id mollis nisi sodales. Vestibulum dapibus quam id mauris tincidunt, laoreet auctor dui faucibus.</p>
        </div>
      </div>
    </div>
  )
}
