import Image from "next/image"
import { Button } from "@/components/ui/button"
import CategorySection from "../../home/components/category-section"

const TermsRules = () => {
    return (
        <div className="px-4 mx-3 sm:mx-5 md:mx-8">
            <CategorySection />
            <div className="flex justify-center items-center">
            <Button size="sm" className="bg-[#2563EB] text-white sm:px-9 sm:py-7 rounded-full my-9">Terms & Rules</Button>
            </div>
            <h1 className="text-center text-4xl my-7">Terms and Rules</h1>
            <div className="text-[#666666] text-lg space-y-6 ">
             <p>It’s easy to simply gather your group, state your problem, and ask for ideas. But is this the most efficient way to generate fresh, productive ideas?                 There are specialised methods for brainstorming that take idea generation seriously, and you may want to give some a try. They include:
             </p>
             <div className="mx-4">
             <p> 1. Brainwriting: Everyone writes down three ideas and passes their ideas to the person on their left (or right), who builds off those ideas before passing them on again. This way, ideas can cross-pollinate, morph and build on top of each other from different perspectives. After all, two heads are better than one.</p>
                <p>2. Rapid ideation: Everyone writes down as many ideas as they can in a set amount of time before anything is discussed or critiqued. This is a fun way to get all the good (and bad) ideas out fast and bring a sense of fun urgency to the session.</p>
                <p>3. Figure storming: The group picks a well-known figure who is not in the room and asks how they would approach the problem. For example, “How would Barack Obama (or Harry Potter, or anyone else) approach this problem?” - prepare for some funny answers here, this method is a good ice-breaker for everyone involved.</p>
                <p>4. Change of scenery: Sometimes the conference room is not the best place for brainstorming. Try moving outside, heading for lunch, or playing a game to get the creative juices flowing. One tried and tested method we enjoy is walking in nature, find a park and sit under a tree - the change of context will inspire fresh perspectives from your team.</p>
            
             </div>
                 
            </div>
            
            <Image src="/termsRules.png" alt="terms&rules" width={4000} height={30} className="my-8" />
        </div>
    )
}

export default TermsRules