import Sidebar from "./common/sidebar";
import Topbar from "./common/topbar";

export default function TeacherLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Topbar />
        <main className="p-5">
          {children}
        </main>
      </div>
    </div>
  );
}
