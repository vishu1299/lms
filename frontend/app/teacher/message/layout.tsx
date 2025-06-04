import Sidebar from "../(components)/common/sidebar";
 
export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
        <main className="p-5 w-full">
          {children}
        </main>
      </div>
  );
}
