 "use client"

import { ImagePlus } from "lucide-react"

export default function MinimalImageUpload() {
  const aspectRatio = "19:6"

  const handleBrowseClick = () => {
    // You can connect this to a file input or any custom logic
    console.log("Browse clicked")
  }

  return (
    <div className="border border-dashed border-emerald-500 py-5">
    <div className="flex items-center justify-center py-3 gap-6">
      <div className="text-emerald-500">
        <ImagePlus size={20} />
      </div>
      <div>
        <h3 className="text-xs font-medium text-emerald-600">
          Upload Cover Image ({aspectRatio})
        </h3>
        <p className="text-xs text-emerald-500">
          Drop your file here or{" "}
          <button
            type="button"
            onClick={handleBrowseClick}
            className="text-emerald-500"
          >
            browse
          </button>
        </p>
      </div>
    </div>
    </div>
  )
}
