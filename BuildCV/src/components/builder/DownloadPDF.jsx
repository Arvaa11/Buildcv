import { useState } from "react"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

/* =========================================================
   BUILDCV — COLOR HELPERS
========================================================= */

function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(value, min), max)
}

function oklabToRgb(L, a, b) {
  const l_ = L + 0.3963377774 * a + 0.2158037573 * b
  const m_ = L - 0.1055613458 * a - 0.0638541728 * b
  const s_ = L - 0.0894841775 * a - 1.291485548 * b

  const l = l_ * l_ * l_
  const m = m_ * m_ * m_
  const s = s_ * s_ * s_

  const r =
    4.0767416621 * l -
    3.3077115913 * m +
    0.2309699292 * s

  const g =
    -1.2684380046 * l +
    2.6097574011 * m -
    0.3413193965 * s

  const blue =
    -0.0041960863 * l -
    0.7034186147 * m +
    1.707614701 * s

  return {
    r: Math.round(clamp(r) * 255),
    g: Math.round(clamp(g) * 255),
    b: Math.round(clamp(blue) * 255),
  }
}

function oklchToRgb(L, C, h) {
  const angle = (h * Math.PI) / 180

  const a = C * Math.cos(angle)
  const b = C * Math.sin(angle)

  return oklabToRgb(L, a, b)
}

function parseNumber(value) {
  const number = Number.parseFloat(value)
  return Number.isFinite(number) ? number : 0
}

function parseAlpha(value) {
  if (value == null || value === "") {
    return 1
  }

  const trimmed = String(value).trim()

  if (trimmed.endsWith("%")) {
    return clamp(parseFloat(trimmed) / 100)
  }

  return clamp(parseFloat(trimmed))
}

function convertModernColor(value) {
  if (!value) return value

  const original = String(value).trim()

  if (
    !original ||
    original === "transparent" ||
    /^rgba?\(/i.test(original) ||
    /^hsla?\(/i.test(original)
  ) {
    return original
  }

  /* -------------------------------------------------------
     OKLAB
  ------------------------------------------------------- */

  const oklabMatch = original.match(
    /^oklab\(\s*([+-]?(?:\d*\.?\d+)(?:%|))\s+([+-]?(?:\d*\.?\d+)(?:%|))\s+([+-]?(?:\d*\.?\d+)(?:%|))(?:\s*\/\s*([+-]?(?:\d*\.?\d+)(?:%|)))?\s*\)$/i
  )

  if (oklabMatch) {
    let L = parseNumber(oklabMatch[1])
    let a = parseNumber(oklabMatch[2])
    let b = parseNumber(oklabMatch[3])

    if (oklabMatch[1].includes("%")) {
      L /= 100
    }

    if (oklabMatch[2].includes("%")) {
      a = (a / 100) * 0.4
    }

    if (oklabMatch[3].includes("%")) {
      b = (b / 100) * 0.4
    }

    const rgb = oklabToRgb(L, a, b)

    if (oklabMatch[4] !== undefined) {
      const alpha = parseAlpha(oklabMatch[4])

      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
    }

    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }

  /* -------------------------------------------------------
     OKLCH
  ------------------------------------------------------- */

  const oklchMatch = original.match(
    /^oklch\(\s*([+-]?(?:\d*\.?\d+)(?:%|))\s+([+-]?(?:\d*\.?\d+)(?:%|))\s+([+-]?(?:\d*\.?\d+)(?:deg|grad|rad|turn|))?(?:\s*\/\s*([+-]?(?:\d*\.?\d+)(?:%|)))?\s*\)$/i
  )

  if (oklchMatch) {
    let L = parseNumber(oklchMatch[1])
    let C = parseNumber(oklchMatch[2])
    let h = parseNumber(oklchMatch[3])

    if (oklchMatch[1].includes("%")) {
      L /= 100
    }

    if (oklchMatch[2].includes("%")) {
      C /= 100
    }

    const hue = oklchMatch[3] || "0"

    if (hue.includes("rad")) {
      h = (h * 180) / Math.PI
    } else if (hue.includes("turn")) {
      h *= 360
    } else if (hue.includes("grad")) {
      h *= 0.9
    }

    const rgb = oklchToRgb(L, C, h)

    if (oklchMatch[4] !== undefined) {
      const alpha = parseAlpha(oklchMatch[4])

      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
    }

    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }

  return original
}

/* =========================================================
   SAFE CSS SANITIZER
========================================================= */

function sanitizeCss(value) {
  if (!value) return value

  return String(value).replace(
    /oklab\([^)]*\)|oklch\([^)]*\)/gi,
    (match) => convertModernColor(match)
  )
}

/* =========================================================
   SANITIZE CLONED DOCUMENT
========================================================= */

function sanitizeClone(clonedDocument) {
  if (!clonedDocument) return

  /*
    IMPORTANT:
    Only color values are changed.
    Layout, fonts, spacing, sizes, grid and flex are untouched.
  */

  /* -------------------------------------------------------
     1. SANITIZE ALL STYLE TAGS
  ------------------------------------------------------- */

  const styleTags = clonedDocument.querySelectorAll("style")

  styleTags.forEach((styleTag) => {
    if (styleTag.textContent) {
      styleTag.textContent = sanitizeCss(
        styleTag.textContent
      )
    }
  })

  /* -------------------------------------------------------
     2. SANITIZE LINKED CSS THAT HAS BEEN COPIED INTO
        THE CLONED DOCUMENT

     We cannot modify external CSS files directly here,
     but inline style attributes can still contain colors.
  ------------------------------------------------------- */

  const elements = clonedDocument.querySelectorAll("*")

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return
    }

    /* -----------------------------------------------------
       INLINE STYLE
    ----------------------------------------------------- */

    const inlineStyle = element.getAttribute("style")

    if (inlineStyle) {
      element.setAttribute(
        "style",
        sanitizeCss(inlineStyle)
      )
    }
  })

  /* -------------------------------------------------------
     3. IMPORTANT FALLBACK

     html2canvas reads computed styles.

     Force unsupported computed colors into ordinary RGB
     values only when the browser actually reports oklab/
     oklch.

     We DO NOT copy the complete computed style.
  ------------------------------------------------------- */

  const colorProperties = [
    "color",
    "backgroundColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
    "outlineColor",
    "textDecorationColor",
    "columnRuleColor",
    "caretColor",
    "fill",
    "stroke",
  ]

  elements.forEach((element) => {
    if (!(element instanceof HTMLElement)) {
      return
    }

    const computed =
      clonedDocument.defaultView?.getComputedStyle(element)

    if (!computed) {
      return
    }

    colorProperties.forEach((property) => {
      const value = computed[property]

      if (!value) {
        return
      }

      if (
        value.includes("oklab(") ||
        value.includes("oklch(")
      ) {
        const converted = sanitizeCss(value)

        /*
          Only set the individual color property.
          Nothing else in the layout is touched.
        */

        if (converted) {
          element.style[property] = converted
        }
      }
    })
  })
}

/* =========================================================
   WAIT FOR IMAGES
========================================================= */

async function waitForImages(document) {
  if (!document) return

  const images = Array.from(document.images || [])

  await Promise.all(
    images.map(
      (image) =>
        new Promise((resolve) => {
          if (image.complete) {
            resolve()
            return
          }

          const finish = () => resolve()

          image.addEventListener("load", finish, {
            once: true,
          })

          image.addEventListener("error", finish, {
            once: true,
          })

          setTimeout(resolve, 15000)
        })
    )
  )
}

/* =========================================================
   WAIT FOR FONTS
========================================================= */

async function waitForFonts(document) {
  try {
    if (document?.fonts?.ready) {
      await document.fonts.ready
    }
  } catch {
    // Font loading should not stop PDF generation.
  }
}

/* =========================================================
   WAIT FOR BROWSER PAINT
========================================================= */

function waitForPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve)
    })
  })
}

/* =========================================================
   DOWNLOAD PDF
========================================================= */

function DownloadPDF({
  previewId = "resume-preview-desktop",
}) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    if (isDownloading) return

    setIsDownloading(true)

    try {
      /* =====================================================
         1. FIND RESUME
      ===================================================== */

      const original = document.getElementById(previewId)

      if (!original) {
        throw new Error(
          `Resume preview element "${previewId}" was not found.`
        )
      }

      /* =====================================================
         2. WAIT FOR ORIGINAL DOCUMENT
      ===================================================== */

      await waitForFonts(document)
      await waitForImages(document)
      await waitForPaint()

      /* =====================================================
         3. READ ACTUAL RESUME DIMENSIONS

         ClassicPreview uses:

           width: 794px
           height: 1123px

         We read the actual rendered size instead of
         changing the resume's layout.
      ===================================================== */

      const rect = original.getBoundingClientRect()

      const resumeWidth = Math.round(rect.width)
      const resumeHeight = Math.round(rect.height)

      if (resumeWidth <= 0 || resumeHeight <= 0) {
        throw new Error(
          "The resume preview has an invalid size."
        )
      }

      /* =====================================================
         4. CREATE CANVAS

         IMPORTANT:
         foreignObjectRendering is intentionally NOT used.

         The normal html2canvas renderer is used because
         foreignObjectRendering was producing a blank PDF
         in this project.
      ===================================================== */

     const canvas = await html2canvas(original, {
  scale: 2,

  useCORS: true,

  allowTaint: false,

  backgroundColor: "#FFFFFF",

  imageTimeout: 15000,

  logging: false,

  onclone: async (clonedDocument) => {
    const clonedResume =
      clonedDocument.getElementById(previewId)

    if (!clonedResume) {
      return
    }

    /*
      Preserve the existing template dimensions.
      Do not change the internal layout.
    */

    clonedResume.style.width = "794px"
    clonedResume.style.height = "1123px"

    /*
      Remove unsupported modern CSS colors.
    */

    sanitizeClone(clonedDocument)

    /*
      Wait until fonts/images are ready.
    */

    await waitForFonts(clonedDocument)
    await waitForImages(clonedDocument)
  },
})
      /* =====================================================
         5. VALIDATE CANVAS
      ===================================================== */

      if (
        !canvas ||
        canvas.width <= 0 ||
        canvas.height <= 0
      ) {
        throw new Error(
          "html2canvas returned an empty canvas."
        )
      }

      /* =====================================================
         6. CREATE A4 PDF
      ===================================================== */

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      })

      const pageWidth = 210
      const pageHeight = 297

      /*
        Because the resume itself is an A4-sized layout,
        calculate exactly how much of the canvas corresponds
        to one A4 page.
      */

      const pageCanvasHeight = Math.floor(
        (canvas.width * pageHeight) / pageWidth
      )

      /* =====================================================
         7. SPLIT CANVAS INTO PDF PAGES
      ===================================================== */

      let offsetY = 0
      let pageNumber = 0

      while (offsetY < canvas.height) {
        const remainingHeight =
          canvas.height - offsetY

        const currentHeight = Math.min(
          pageCanvasHeight,
          remainingHeight
        )

        const pageCanvas =
          document.createElement("canvas")

        pageCanvas.width = canvas.width
        pageCanvas.height = currentHeight

        const context = pageCanvas.getContext("2d")

        if (!context) {
          throw new Error(
            "Could not create PDF canvas context."
          )
        }

        /*
          White page background.
        */

        context.fillStyle = "#FFFFFF"

        context.fillRect(
          0,
          0,
          pageCanvas.width,
          pageCanvas.height
        )

        /*
          Copy the exact rendered resume pixels.

          No text is rendered again here.
          This is only an image crop.
        */

        context.drawImage(
          canvas,
          0,
          offsetY,
          canvas.width,
          currentHeight,
          0,
          0,
          canvas.width,
          currentHeight
        )

        const imageData =
          pageCanvas.toDataURL(
            "image/jpeg",
            0.98
          )

        const pdfPageHeight =
          (currentHeight * pageWidth) /
          canvas.width

        if (pageNumber > 0) {
          pdf.addPage()
        }

        pdf.addImage(
          imageData,
          "JPEG",
          0,
          0,
          pageWidth,
          pdfPageHeight,
          undefined,
          "FAST"
        )

        offsetY += currentHeight
        pageNumber += 1
      }

      /* =====================================================
         8. SAVE
      ===================================================== */

      pdf.save("BuildCV-Resume.pdf")
    } catch (error) {
      console.error(
        "BuildCV PDF ERROR:",
        error
      )

      window.alert(
        "Unable to generate the PDF. Please try again."
      )
    } finally {
      setIsDownloading(false)
    }
  }

  /* =======================================================
     BUTTON
  ======================================================= */

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isDownloading}
      className="
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-[#6366F1]
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition
        hover:bg-[#4F46E5]
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {isDownloading ? (
        <>
          <span
            className="
              h-4
              w-4
              animate-spin
              rounded-full
              border-2
              border-white
              border-t-transparent
            "
          />

          Generating PDF...
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0 0 4-4m-4 4-4-4"
            />

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 21h14"
            />
          </svg>

          Download PDF
        </>
      )}
    </button>
  )
}

export default DownloadPDF