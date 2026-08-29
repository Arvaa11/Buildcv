import { useState } from "react"
import html2pdf from "html2pdf.js"

function DownloadButton() {
  const [isDownloading, setIsDownloading] =
    useState(false)

  const handleDownload = async () => {
    if (isDownloading) {
      return
    }

    try {
      setIsDownloading(true)

      // =================================================
      // FIND VISIBLE RESUME PREVIEW
      // =================================================

      const previews = Array.from(
        document.querySelectorAll(
          ".resume-preview"
        )
      )

      const preview = previews.find((element) => {
        const rect =
          element.getBoundingClientRect()

        return (
          rect.width > 0 &&
          rect.height > 0
        )
      })

      if (!preview) {
        throw new Error(
          "Resume preview could not be found."
        )
      }

      // =================================================
      // PDF OPTIONS
      // =================================================

      const options = {
        margin: 0,

        filename:
          "BuildCV-Resume.pdf",

        image: {
          type: "jpeg",
          quality: 0.98,
        },

        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: false,
          backgroundColor: "#ffffff",
          logging: false,
        },

        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },

        pagebreak: {
          mode: [
            "css",
            "legacy",
          ],
        },
      }

      // =================================================
      // DOWNLOAD
      // =================================================

      await html2pdf()
        .set(options)
        .from(preview)
        .save()

    } catch (error) {
      console.error(
        "Resume download failed:",
        error
      )

      alert(
        "Unable to download the resume. Please try again."
      )
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isDownloading}
      className="
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-lg
        bg-[#6366F1]
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        transition-all
        duration-200
        hover:bg-[#4F46E5]
        focus:outline-none
        focus:ring-2
        focus:ring-[#6366F1]/25
        disabled:cursor-not-allowed
        disabled:opacity-60
      
      "
    >
      <span className="text-base">
        {isDownloading ? "..." : "↓"}
      </span>

      <span>
        {isDownloading
          ? "Generating PDF..."
          : "Download Resume"}
      </span>
    </button>
  )
}

export default DownloadButton