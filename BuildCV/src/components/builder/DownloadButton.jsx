import { useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

// =====================================================
// BUILDCV — DOWNLOAD BUTTON
// =====================================================

function DownloadButton({
  previewId = "resume-preview-desktop",
}) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (isDownloading) return

    let printContainer = null

    try {
      setIsDownloading(true)

      // =================================================
      // FIND THE EXACT SELECTED PREVIEW
      // =================================================

      const preview = document.getElementById(previewId)

      if (!preview) {
        throw new Error(
          "The selected resume preview could not be found."
        )
      }

      // =================================================
      // MAKE SURE PREVIEW IS VISIBLE
      // =================================================

      const rect = preview.getBoundingClientRect()

      if (rect.width <= 0 || rect.height <= 0) {
        throw new Error(
          "The resume preview is not currently visible."
        )
      }

      // =================================================
      // WAIT FOR FONTS
      // =================================================

      if (document.fonts?.ready) {
        await document.fonts.ready
      }

      // =================================================
      // WAIT FOR IMAGES
      // =================================================

      const images = Array.from(
        preview.querySelectorAll("img")
      )

      await Promise.all(
        images.map((img) => {
          if (img.complete) {
            return Promise.resolve()
          }

          return new Promise((resolve) => {
            img.onload = resolve
            img.onerror = resolve
          })
        })
      )

      // =================================================
      // CREATE OFF-SCREEN PRINT CONTAINER
      // =================================================

      printContainer = document.createElement("div")

      Object.assign(printContainer.style, {
        position: "fixed",
        left: "-100000px",
        top: "0",

        width: "794px",

        margin: "0",
        padding: "0",

        backgroundColor: "#FFFFFF",

        overflow: "visible",

        visibility: "visible",
        pointerEvents: "none",
      })

      document.body.appendChild(printContainer)

      // =================================================
      // CLONE THE EXACT SELECTED TEMPLATE
      // =================================================

      const clone = preview.cloneNode(true)

      clone.removeAttribute("id")

      Object.assign(clone.style, {
        width: "794px",
        minWidth: "794px",
        maxWidth: "794px",

        height: "auto",
        minHeight: "0",
        maxHeight: "none",

        margin: "0",
        padding: "0",

        backgroundColor: "#FFFFFF",

        overflow: "visible",

        boxSizing: "border-box",

        transform: "none",
        transformOrigin: "top left",
      })

      printContainer.appendChild(clone)

      // =================================================
      // FIND INNER TEMPLATE
      // =================================================

      const page = clone.querySelector(":scope > div")

      if (page) {
        Object.assign(page.style, {
          width: "794px",
          minWidth: "794px",
          maxWidth: "794px",

          height: "auto",
          minHeight: "0",
          maxHeight: "none",

          margin: "0",
          padding: page.style.padding,

          overflow: "visible",

          boxSizing: "border-box",

          transform: "none",
          transformOrigin: "top left",
        })
      }

      // =================================================
      // REMOVE INTERACTIVE ELEMENTS
      // =================================================

      clone
        .querySelectorAll(
          "button, input, textarea, select"
        )
        .forEach((element) => {
          element.remove()
        })

      // =================================================
      // PRESERVE TEMPLATE STYLING
      // =================================================

      clone
        .querySelectorAll("*")
        .forEach((element) => {
          element.style.boxSizing = "border-box"

          // Do NOT force template-specific colors,
          // fonts, spacing, sizes, etc.
          //
          // Only make long text safe for PDF rendering.
          element.style.overflowWrap = "anywhere"
          element.style.wordBreak = "break-word"
        })

      // =================================================
      // WAIT FOR LAYOUT
      // =================================================

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve)
        })
      })

      // =================================================
      // A4 CSS DIMENSIONS
      // =================================================

      const A4_WIDTH = 794
      const A4_HEIGHT = 1123

      // =================================================
      // GET ACTUAL RESUME SIZE
      // =================================================

      const resumeWidth = Math.max(
        clone.scrollWidth,
        A4_WIDTH
      )

      const resumeHeight = Math.max(
        clone.scrollHeight,
        1
      )

      console.log(
        "BuildCV PDF:",
        {
          previewId,
          width: resumeWidth,
          height: resumeHeight,
        }
      )

      // =================================================
      // SCALE IF RESUME IS LONGER THAN A4
      // =================================================

      let scale = 1

      if (resumeHeight > A4_HEIGHT) {
        scale = A4_HEIGHT / resumeHeight
      }

      // =================================================
      // APPLY SCALE
      // =================================================

      if (scale < 1) {
        clone.style.transformOrigin =
          "top left"

        clone.style.transform =
          `scale(${scale})`

        clone.style.width =
          `${A4_WIDTH / scale}px`

        if (page) {
          page.style.width =
            `${A4_WIDTH / scale}px`
        }
      }

      // =================================================
      // WAIT AFTER SCALING
      // =================================================

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve)
        })
      })

      // =================================================
      // CAPTURE EXACT SELECTED TEMPLATE
      // =================================================

      const captureWidth =
        Math.min(
          Math.max(
            clone.scrollWidth,
            A4_WIDTH
          ),
          A4_WIDTH / Math.max(scale, 0.01)
        )

      const captureHeight =
        Math.min(
          Math.max(
            clone.scrollHeight,
            A4_HEIGHT
          ),
          A4_HEIGHT / Math.max(scale, 0.01)
        )

      const canvas =
        await html2canvas(clone, {
          scale: 2,

          useCORS: true,
          allowTaint: false,

          backgroundColor: "#FFFFFF",

          logging: false,

          imageTimeout: 20000,

          scrollX: 0,
          scrollY: 0,

          width: captureWidth,

          height: captureHeight,

          windowWidth:
            Math.ceil(captureWidth),

          windowHeight:
            Math.ceil(captureHeight),
        })

      // =================================================
      // VALIDATE CANVAS
      // =================================================

      if (
        !canvas ||
        canvas.width <= 0 ||
        canvas.height <= 0
      ) {
        throw new Error(
          "The resume could not be rendered for PDF export."
        )
      }

      // =================================================
      // CREATE A4 PDF
      // =================================================

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      })

      // =================================================
      // A4 DIMENSIONS
      // =================================================

      const pageWidth = 210
      const pageHeight = 297

      // =================================================
      // IMAGE DIMENSIONS
      // =================================================

      const imageWidth = pageWidth

      const imageHeight =
        (canvas.height / canvas.width) *
        imageWidth

      // =================================================
      // ADD EXACT TEMPLATE TO PDF
      // =================================================

      pdf.addImage(
        canvas.toDataURL(
          "image/jpeg",
          0.98
        ),
        "JPEG",
        0,
        0,
        imageWidth,
        Math.min(
          imageHeight,
          pageHeight
        ),
        undefined,
        "FAST"
      )

      // =================================================
      // SAVE PDF
      // =================================================

      pdf.save(
        "BuildCV-Resume.pdf"
      )

    } catch (error) {
      console.error(
        "BuildCV resume download failed:",
        error
      )

      alert(
        `Unable to download the resume.\n\n${
          error?.message ||
          "Something went wrong."
        }`
      )
    } finally {
      // =================================================
      // CLEANUP
      // =================================================

      if (
        printContainer &&
        printContainer.parentNode
      ) {
        printContainer.parentNode.removeChild(
          printContainer
        )
      }

      setIsDownloading(false)
    }
  }

  // =====================================================
  // BUTTON
  // =====================================================

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
        {isDownloading
          ? "..."
          : "↓"}
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