
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function NotificationTab() {

    return (
        <div className=" space-y-15 sm:space-y-6">
            <div className="flex flex-col sm:flex-row gap-[3rem] sm:gap-[6rem]">
                <div>
                    <h3 className="text-lg font-semibold mb-2">Email Notifications</h3>
                    <p className="text-[#5A5A5A] mb-4">
                        When you’re busy or not online, Substance can send you email notifications for any new direct messages or mentions of your name.
                    </p>
                    <div className="space-y-4">
                        <h2 className="font-semibold text-lg">Send me email notifications:</h2>
                        <RadioGroup defaultValue="never " className="text-[#202020]">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="all" id="r1" className="border-2 border-[#898989] data-[state=checked]:border-sky-600 data-[state=checked]:text-sky-600" />
                                <Label htmlFor="r1" className="font-normal">Send me email notifications</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="hourly" id="r2" className="border-2 border-[#898989] data-[state=checked]:border-sky-600 data-[state=checked]:text-sky-600" />
                                <Label className="font-normal" htmlFor="r2">Once an hour at most</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="never" id="r3" className="border-2 border-gray-600 data-[state=checked]:border-sky-600 data-[state=checked]:text-sky-600" />
                                <Label className="font-normal" htmlFor="r3">Never</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2">Sign-in Notifications</h3>
                    <p className=" text-[#5A5A5A] mb-4">
                        These emails help keep your Substance account secure. If you haven’t already, you should also enable two-factor authentication.
                    </p>
                    <RadioGroup>
                        <div className="flex space-x-2">
                            <RadioGroupItem value="secure" id="s1" className="border-2 border-[#898989] data-[state=checked]:border-sky-600 data-[state=checked]:text-sky-600 " />
                            <div className="space-y-1">
                                <Label htmlFor="s1" className="font-medium ">Most secure</Label>
                                <p className="text-[#5A5A5A] max-w-xl">Receive an email anytime someone signs in to your Cuboid account from an unrecognized device.</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <RadioGroupItem value="standard" id="s2" className="border-2 border-[#898989] data-[state=checked]:border-sky-600 data-[state=checked]:text-sky-600" />
                            <div className="space-y-1">
                                <Label htmlFor="s2" className="font-medium">Standard</Label>
                                <p className="text-[#5A5A5A] max-w-xl">Receive an email when someone signs in from a new location, with an unrecognized device.</p>
                            </div>
                        </div>
                        <div className="flex space-x-2">
                            <RadioGroupItem value="none" id="s3" className="border-2 border-[#898989] data-[state=checked]:border-sky-600 data-[state=checked]:text-sky-600" />
                            <Label htmlFor="s3" className="font-medium">Don’t send any sign-in notifications</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-2">Email News & Updates</h3>
                <p className=" max-w-2xl mb-7 text-[#5A5A5A]">
                    From time to time, we’d like to send you emails with interesting news about Cuboid and your workspace. You can choose which of these updates you’d like to receive :
                </p>
                <div className="space-y-2 text-[#202020]">
                    <CheckboxItem label="Tips and Tricks" />
                    <CheckboxItem label="Offers and Promotions" />
                    <CheckboxItem label="Research Opportunities" />
                    <CheckboxItem label="Cuboid Developer Newsletter: Best practices for connecting your work to Substance via our platform" />
                    <CheckboxItem label="Cuboid Platform Changelog: Stay in the know when we make updates to our APIs" />
                </div>
            </div>

            <div className="max-w-2xl text-[#5A5A5A] space-y-4 pt-6 pb-3">
                <p>
                    If you opt out of the above, note that we’ll still send you important administrative emails,
                    such as password resets.
                </p>
                <p >We will use this email address: <span className="text-violet-500">hello@designspace.io</span> (change address).</p>
            </div>
            <hr className="text-[#DCDCDC]" />

            <div className="flex gap-4 items-center justify-center">
                <Button variant="outline" size="sm" className="border-[#DCDCDC] rounded-lg">Discard</Button>
                <Button size="sm" className="bg-sky-600 text-white  hover:bg-blue-600">Save Changes</Button>
            </div>
        </div>
    );
}

function CheckboxItem({ label }: { label: string }) {
    const id = label.toLowerCase().replace(/\s+/g, "-");
    return (
        <div className="flex items-center space-x-2">
            <Checkbox id={id} className="border-2 border-gray-500 data-[state=checked]:bg-sky-500 data-[state=checked]:border-sky-500 data-[state=checked]:text-white data-[state=checked]:font-semibold" defaultChecked />
            <Label htmlFor={id} className="font-normal">{label}</Label>
        </div>
    );
}
