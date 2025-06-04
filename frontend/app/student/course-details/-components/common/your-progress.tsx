'use client';

import { Progress } from "@/components/ui/progress";

export default function YourProgress() {
  return (
    <div className="rounded-xl bg-white space-y-4">
      <h2 className="text-lg font-semibold text-gray-900">Your Progress</h2>

      <div>
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Course Completion</span>
          <span>65%</span>
        </div>
        <div className="bg-gray-200 rounded shadow-sm h-2">
          <Progress className="w-[65%] h-2 bg-purple-600 shadow-sm shadow-purple-600" />
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-1 pt-2">
        <div className="flex justify-between">
          <span>Modules Corpleted</span>
          <span className="text-gray-400">13/20</span>
        </div>
        <div className="flex justify-between">
          <span>Assignments Submitled</span>
          <span className="text-gray-400">8/12</span>
        </div>
        <div className="flex justify-between">
          <span>Quiz Average</span>
          <span className="text-gray-400">87%</span>
        </div>
      </div>
    </div>
  );
}
