import { FileText, Download } from "lucide-react";
import Link from "next/link";

export default function DownloadCoursePdf() {
  return (
    <div className="mx-auto bg-white rounded-xl space-y-4 mb-9 w-full">
 
      <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-10 bg-gray-5">
        <div className="p-2 bg-gray-200 rounded-full">
          <FileText className="w-5 h-5 text-gray-700" />
        </div>
        <div className="flex-1">
          <p className="text-zinc-750">Course_Materials_Week3.pdf</p>
          <p className="text-sm text-gray-15">2.4 MB - Updated April 7, 2025</p>
        </div>
        <Link
          href="#"
          className="text-sm text-indigo-600 hover:underline flex items-center gap-1"
        >
          <Download className="w-4 h-4" />
          Download
        </Link>
      </div>
    </div>
  );
}
