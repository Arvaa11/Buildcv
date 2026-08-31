import { useState } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"

function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (isDownloading) return

    let printContainer = null

    try {
      setIsDownloading(true)

      // =================================================
      // FIND VISIBLE RESUME
      // =================================================

      const previews = Array.from(
        document.querySelectorAll(".resume-preview")
      )

      const preview = previews.find((element) => {
        const rect = element.getBoundingClientRect()

        return rect.width > 0 && rect.height > 0
      })

      if (!preview) {
        throw new Error("Resume preview could not be found.")
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
      // CLONE RESUME
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
      })

      printContainer.appendChild(clone)

      // =================================================
      // FIND INNER RESUME PAGE
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

          overflow: "visible",

          boxSizing: "border-box",

          margin: "0",

          transform: "none",
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
      // IMPORTANT:
      // PRESERVE ORIGINAL FONT SIZES
      // AND FORCE TEXT WRAPPING
      // =================================================

      clone
        .querySelectorAll("*")
        .forEach((element) => {
          element.style.boxSizing = "border-box"
          element.style.maxWidth = "100%"
          element.style.overflowWrap = "anywhere"
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
      // GET ACTUAL RESUME HEIGHT
      // =================================================

      const resumeWidth = clone.scrollWidth
      const resumeHeight = clone.scrollHeight

      console.log("PDF resume width:", resumeWidth)
      console.log("PDF resume height:", resumeHeight)

      // =================================================
      // A4 CSS DIMENSIONS
      // 794 × 1123 px
      // =================================================

      const A4_WIDTH = 794
      const A4_HEIGHT = 1123

      // =================================================
      // SCALE ONLY IF NECESSARY
      // =================================================

      let scale = 1

      if (resumeHeight > A4_HEIGHT) {
        scale = A4_HEIGHT / resumeHeight
      }

      // =================================================
      // APPLY SCALE
      // =================================================

      if (scale < 1) {
        clone.style.transformOrigin = "top left"
        clone.style.transform = `scale(${scale})`

        clone.style.width = `${A4_WIDTH / scale}px`

        if (page) {
          page.style.width = `${A4_WIDTH / scale}px`
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
      // CAPTURE RESUME
      // =================================================

      const canvas = await html2canvas(clone, {
        scale: 2,

        useCORS: true,
        allowTaint: false,

        backgroundColor: "#FFFFFF",

        logging: false,

        imageTimeout: 20000,

        scrollX: 0,
        scrollY: 0,

        width: A4_WIDTH,

        windowWidth: A4_WIDTH,

        height: Math.min(
          clone.scrollHeight,
          A4_HEIGHT
        ),

        windowHeight: A4_HEIGHT,
      })

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
      // A4 SIZE
      // =================================================

      const pageWidth = 210
      const pageHeight = 297

      // =================================================
      // IMAGE SIZE
      // =================================================

      const imageWidth = pageWidth
      const imageHeight =
        (canvas.height / canvas.width) *
        imageWidth

      // =================================================
      // ADD IMAGE
      // =================================================

      pdf.addImage(
        canvas.toDataURL("image/jpeg", 1),
        "JPEG",
        0,
        0,
        imageWidth,
        Math.min(imageHeight, pageHeight),
        undefined,
        "FAST"
      )

      // =================================================
      // SAVE
      // =================================================

      pdf.save("BuildCV-Resume.pdf")

    } catch (error) {
      console.error(
        "Resume download failed:",
        error
      )

      alert(
        `Unable to download the resume.\n\n${error.message}`
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