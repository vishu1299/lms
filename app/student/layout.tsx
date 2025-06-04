
import HeroSection from "@/components/student/common/hero-section";
import Navbar from "./common/navbar";
import CategorySection from "./home/components/category-section";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main className="">
        <Navbar />
        <div className="px-16 mx-3 sm:mx-5 md:mx-8">
          <HeroSection />
          <CategorySection />
        </div>
        {children}
      </main>
    </div>
  );
}
