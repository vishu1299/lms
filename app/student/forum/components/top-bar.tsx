
import Search from "@/components/ui/input-search";
import DonateButton from "../../_components/donate";

const TopBar = () => {
   return (
    <div className="px-4 mx-3 sm:mx-5 md:mx-8 mt-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
        <div className="flex-1">
          <Search
            className="rounded-md border-none bg-white shadow-none"
            placeholder="Search Here..."
          />
        </div>
        <div className="flex mb-4 space-x-3">
          {/* <Button
            size="lg"
            className="bg-green-500 text-white sm:size-sm md:size-md lg:size-xl xl:size-2xl rounded-md"
            onClick={() => setOpen(true)}
          >
            Donate
          </Button>
          <DonationDialog open={open} onOpenChange={setOpen} /> */}
          <DonateButton />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
