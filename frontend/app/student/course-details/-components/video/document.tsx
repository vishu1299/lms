import { FileText, Download } from "lucide-react";
export default function Document() {
  return (
    <div className="mx-auto bg-white rounded-xl space-y-4 mb-11">
      <h2 className="text-lg font-semibold text-gray-900">Document</h2>
      <div className="border border-[#F3F3F5] bg-gray-50">
      <div className="flex items-center gap-4 px-4 rounded-lg ">
        <div className="p-2 bg-gray-200 rounded-full">
          <FileText className="w-5 h-5 text-gray-700" />
        </div>
        <div className="flex-1">
          <p className="font-medium text-lg text-gray-400">Course_Materials_Week3.pdf</p>
          <p className="text-gray-400">2.4 MB - Updated April 7, 2025</p>
        </div>
      </div>
      <div className="px-4 flex items-center justify-start gap-1 py-1 text-purple-700">
      <Download className="w-4 h-4" />
      Download
      </div>
      </div>
      
    </div>
  );
}
