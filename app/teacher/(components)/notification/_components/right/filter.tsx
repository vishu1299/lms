import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

type CheckboxOption = {
    id: string
    label: string
}

const checkboxes: CheckboxOption[] = [
    { id: "share", label: "Share" },
    { id: "likes", label: "Likes" },
    { id: "comments", label: "Comments" },
    { id: "reviews", label: "Reviews" },
]

export default function FilterSection() {
    return (
        <div className="rounded-lg p-4 bg-gray-5 ">
            <h2 className="text-lg text-gray-910 font-semibold mb-4">Filter</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
                {checkboxes.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2">
                        <Checkbox
                            id={item.id}
                            defaultChecked
                            className="bg-emerald-500 border-none text-white "
                        />
                        <Label htmlFor={item.id} className="text-gray-910">{item.label}</Label>
                    </div>
                ))}
            </div>

            <div>
                <h3 className="text-lg font-semibold text-gray-910 mb-3">From</h3>
                <RadioGroup defaultValue="everyone" className="flex space-x-12">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="everyone"
                            id="everyone"
                            className="text-emerald-500 border-2 border-emerald-500 data-[state=checked]:after:bg-emerald-500"
                        />
                        <Label htmlFor="everyone">Everyone</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="followers" id="followers" className="border-2 border-gray-400" />
                        <Label htmlFor="followers">Followers</Label>
                    </div>
                </RadioGroup>


            </div>
        </div>
    )
}
