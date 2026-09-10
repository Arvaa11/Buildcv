import { useState } from "react"

import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

/* =========================================================
   BUILDCV — COLOR HELPERS
   Convert OKLCH / OKLAB → RGB
========================================================= */

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function parseLightness(value) {
  const trimmed = String(value).trim()

  if (trimmed.endsWith("%")) {
    return parseFloat(trimmed) / 100
  }

  return parseFloat(trimmed)
}

function parseChroma(value) {
  const trimmed = String(value).trim()

  if (trimmed.endsWith("%")) {
    return parseFloat(trimmed) / 100
  }

  return parseFloat(trimmed)
}

function parseHue(value) {
  const trimmed = String(value)
    .trim()
    .toLowerCase()

  if (trimmed.endsWith("deg")) {
    return parseFloat(trimmed)
  }

  if (trimmed.endsWith("grad")) {
    return parseFloat(trimmed) * 0.9
  }

  if (trimmed.endsWith("rad")) {
    return (
      (parseFloat(trimmed) * 180) /
      Math.PI
    )
  }

  if (trimmed.endsWith("turn")) {
    return parseFloat(trimmed) * 360
  }

  return parseFloat(trimmed)
}

function parseAlpha(value) {
  if (!value || value === "none") {
    return 1
  }

  const trimmed = String(value).trim()

  if (trimmed.endsWith("%")) {
    return clamp(parseFloat(trimmed) / 100)
  }

  return clamp(parseFloat(trimmed))
}

function linearToSrgb(value) {
  if (value <= 0.0031308) {
    return 12.92 * value
  }

  return (
    1.055 *
      Math.pow(
        Math.max(value, 0),
        1 / 2.4
      ) -
    0.055
  )
}

/* =========================================================
   OKLAB → RGB
========================================================= */

function oklabToRgb(L, a, b) {
  const l =
    L +
    0.3963377774 * a +
    0.2158037573 * b

  const m =
    L -
    0.1055613458 * a -
    0.0638541728 * b

  const s =
    L -
    0.0894841775 * a -
    1.291485548 * b

  const l3 = l * l * l
  const m3 = m * m * m
  const s3 = s * s * s

  const red =
    4.0767416621 * l3 -
    3.3077115913 * m3 +
    0.2309699292 * s3

  const green =
    -1.2684380046 * l3 +
    2.6097574011 * m3 -
    0.3413193965 * s3

  const blue =
    -0.0041960863 * l3 -
    0.7034186147 * m3 +
    1.707614701 * s3

  return {
    r: Math.round(
      clamp(linearToSrgb(red)) * 255
    ),

    g: Math.round(
      clamp(linearToSrgb(green)) * 255
    ),

    b: Math.round(
      clamp(linearToSrgb(blue)) * 255
    ),
  }
}

/* =========================================================
   CONVERT OKLAB
========================================================= */

function convertOklabColor(
  match,
  LValue,
  aValue,
  bValue,
  alphaValue
) {
  try {
    const L = parseLightness(LValue)

    const a =
      String(aValue)
        .trim()
        .endsWith("%")
        ? (parseFloat(aValue) / 100) * 0.4
        : parseFloat(aValue)

    const b =
      String(bValue)
        .trim()
        .endsWith("%")
        ? (parseFloat(bValue) / 100) * 0.4
        : parseFloat(bValue)

    if (
      !Number.isFinite(L) ||
      !Number.isFinite(a) ||
      !Number.isFinite(b)
    ) {
      return match
    }

    const rgb = oklabToRgb(L, a, b)
    const alpha = parseAlpha(alphaValue)

    if (alpha < 1) {
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
    }

    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  } catch {
    return match
  }
}

/* =========================================================
   CONVERT OKLCH
========================================================= */

function convertOklchColor(
  match,
  LValue,
  CValue,
  HValue,
  alphaValue
) {
  try {
    const L = parseLightness(LValue)
    const C = parseChroma(CValue)
    const H = parseHue(HValue)

    if (
      !Number.isFinite(L) ||
      !Number.isFinite(C) ||
      !Number.isFinite(H)
    ) {
      return match
    }

    const radians =
      (H * Math.PI) / 180

    const a =
      C * Math.cos(radians)

    const b =
      C * Math.sin(radians)

    const rgb = oklabToRgb(L, a, b)
    const alpha = parseAlpha(alphaValue)

    if (alpha < 1) {
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
    }

    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  } catch {
    return match
  }
}

/* =========================================================
   SANITIZE CSS VALUE
========================================================= */

function sanitizeCssValue(value) {
  if (!value) {
    return value
  }

  let result = String(value)

  /* Convert OKLCH colors */

  result = result.replace(
    /oklch\(\s*([^\s/]+)\s+([^\s/]+)\s+([^\s/]+)(?:\s*\/\s*([^)]+))?\s*\)/gi,
    convertOklchColor
  )

  /* Convert OKLAB colors */

  result = result.replace(
    /oklab\(\s*([^\s/]+)\s+([^\s/]+)\s+([^\s/]+)(?:\s*\/\s*([^)]+))?\s*\)/gi,
    convertOklabColor
  )

  return result
}

/* =========================================================
   COPY COMPUTED STYLES
========================================================= */

function copyComputedStyles(
  source,
  target
) {
  if (!source || !target) {
    return
  }

  const computed =
    window.getComputedStyle(source)

  /*
   * Copy browser's final computed styles.
   */

  for (
    let i = 0;
    i < computed.length;
    i += 1
  ) {
    const property = computed[i]

    let value =
      computed.getPropertyValue(
        property
      )

    if (!value) {
      continue
    }

    value =
      sanitizeCssValue(value)

    try {
      target.style.setProperty(
        property,
        value
      )
    } catch {
      /*
       * Ignore unsupported CSS
       * properties.
       */
    }
  }

  /*
   * Remove classes only from clone.
   */

  target.removeAttribute("class")
}

/* =========================================================
   COPY RENDERED DOM TREE
========================================================= */

function copyRenderedTree(
  source,
  target
) {
  copyComputedStyles(
    source,
    target
  )

  const sourceChildren =
    Array.from(
      source.children
    )

  const targetChildren =
    Array.from(
      target.children
    )

  sourceChildren.forEach(
    (sourceChild, index) => {
      const targetChild =
        targetChildren[index]

      if (!targetChild) {
        return
      }

      copyRenderedTree(
        sourceChild,
        targetChild
      )
    }
  )
}

/* =========================================================
   WAIT FOR IMAGES
========================================================= */

async function waitForImages(
  container
) {
  const images =
    Array.from(
      container.querySelectorAll("img")
    )

  await Promise.all(
    images.map(
      (image) =>
        new Promise(
          (resolve) => {
            if (image.complete) {
              resolve()
              return
            }

            let finished = false

            const finish = () => {
              if (finished) {
                return
              }

              finished = true

              image.removeEventListener(
                "load",
                finish
              )

              image.removeEventListener(
                "error",
                finish
              )

              resolve()
            }

            image.addEventListener(
              "load",
              finish
            )

            image.addEventListener(
              "error",
              finish
            )

            setTimeout(
              finish,
              10000
            )
          }
        )
    )
  )
}

/* =========================================================
   WAIT FOR FONTS
========================================================= */

async function waitForFonts() {
  try {
    if (
      document.fonts &&
      document.fonts.ready
    ) {
      await document.fonts.ready
    }
  } catch {
    /*
     * Continue even if font
     * detection fails.
     */
  }
}

/* =========================================================
   DOWNLOAD PDF
========================================================= */

function DownloadPDF({
  previewId = "resume-preview-desktop",
}) {
  const [
    isDownloading,
    setIsDownloading,
  ] = useState(false)

  const handleDownload =
    async () => {
      if (isDownloading) {
        return
      }

      setIsDownloading(true)

      let captureWrapper = null

      try {
        /* =================================================
           FIND ORIGINAL RESUME
        ================================================= */

        const original =
          document.getElementById(
            previewId
          )

        if (!original) {
          throw new Error(
            `Resume preview "${previewId}" was not found.`
          )
        }

        /* =================================================
           WAIT FOR ASSETS
        ================================================= */

        await waitForFonts()

        await waitForImages(
          original
        )

        /* =================================================
           CREATE TEMPORARY CAPTURE AREA
        ================================================= */

        captureWrapper =
          document.createElement(
            "div"
          )

        captureWrapper.setAttribute(
          "data-buildcv-pdf-capture",
          "true"
        )

        /*
         * Keep the capture area outside
         * the visible viewport.
         */

        captureWrapper.style.position =
          "absolute"

        captureWrapper.style.left =
          "-100000px"

        captureWrapper.style.top =
          "0"

        captureWrapper.style.width =
          "794px"

        /*
         * IMPORTANT:
         *
         * Do NOT force the wrapper
         * to 1123px height.
         *
         * The resume is allowed to
         * grow according to its
         * actual content.
         */

        captureWrapper.style.height =
          "auto"

        captureWrapper.style.minHeight =
          "0"

        captureWrapper.style.maxHeight =
          "none"

        captureWrapper.style.overflow =
          "visible"

        captureWrapper.style.margin =
          "0"

        captureWrapper.style.padding =
          "0"

        captureWrapper.style.transform =
          "none"

        captureWrapper.style.background =
          "#FFFFFF"

        captureWrapper.style.zIndex =
          "999999"

        /* =================================================
           CLONE ORIGINAL RESUME
        ================================================= */

        const clone =
          original.cloneNode(true)

        captureWrapper.appendChild(
          clone
        )

        document.body.appendChild(
          captureWrapper
        )

        /* =================================================
           COPY EXACT RENDERED STYLES
        ================================================= */

        copyRenderedTree(
          original,
          clone
        )

        /* =================================================
           FORCE WIDTH ONLY
        ================================================= */

        clone.style.width =
          "794px"

        clone.style.minWidth =
          "794px"

        clone.style.maxWidth =
          "794px"

        /*
         * IMPORTANT:
         *
         * Height must remain AUTO.
         */

        clone.style.height =
          "auto"

        clone.style.minHeight =
          "0"

        clone.style.maxHeight =
          "none"

        clone.style.overflow =
          "visible"

        clone.style.transform =
          "none"

        clone.style.transformOrigin =
          "top left"

        clone.style.margin =
          "0"

        /* =================================================
           WAIT FOR CLONE ASSETS
        ================================================= */

        await waitForImages(
          clone
        )

        await waitForFonts()

        /*
         * Allow browser to finish layout.
         */

        await new Promise(
          (resolve) => {
            requestAnimationFrame(
              () => {
                requestAnimationFrame(
                  resolve
                )
              }
            )
          }
        )

        /* =================================================
           DETERMINE ACTUAL RESUME HEIGHT
        ================================================= */

        const resumeWidth =
          794

        const resumeHeight =
          Math.max(
            clone.scrollHeight,
            clone.offsetHeight,
            clone.getBoundingClientRect()
              .height
          )

        if (
          !Number.isFinite(
            resumeHeight
          ) ||
          resumeHeight <= 0
        ) {
          throw new Error(
            "Unable to determine the resume height."
          )
        }

        /*
         * Make sure the wrapper has
         * exactly the required content
         * height.
         */

        captureWrapper.style.height =
          `${resumeHeight}px`

        clone.style.height =
          `${resumeHeight}px`

        /* =================================================
           CAPTURE FULL RESUME
        ================================================= */

        const canvas =
          await html2canvas(
            clone,
            {
              scale: 2,

              useCORS: true,

              allowTaint: false,

              backgroundColor:
                "#FFFFFF",

              /*
               * Width is fixed.
               *
               * Height is the ACTUAL
               * resume height.
               */

              width:
                resumeWidth,

              height:
                resumeHeight,

              windowWidth:
                resumeWidth,

              windowHeight:
                resumeHeight,

              imageTimeout:
                15000,

              logging: false,

              foreignObjectRendering:
                false,

              removeContainer: true,
            }
          )

        /* =================================================
           CREATE A4 PDF
        ================================================= */

        const pdf =
          new jsPDF({
            orientation:
              "portrait",

            unit: "mm",

            format: "a4",

            compress: true,
          })

        /* =================================================
           A4 DIMENSIONS
        ================================================= */

        const A4_WIDTH =
          210

        const A4_HEIGHT =
          297

        /*
         * Small safe margin.
         *
         * This prevents the resume
         * from touching the physical
         * edge of the PDF.
         */

        const margin =
          4

        const availableWidth =
          A4_WIDTH -
          margin * 2

        const availableHeight =
          A4_HEIGHT -
          margin * 2

        /* =================================================
           PRESERVE ASPECT RATIO
        ================================================= */

        const imageRatio =
          canvas.height /
          canvas.width

        let imageWidth =
          availableWidth

        let imageHeight =
          imageWidth *
          imageRatio

        /*
         * If the resume is taller
         * than the available A4 area,
         * scale it down proportionally.
         */

        if (
          imageHeight >
          availableHeight
        ) {
          imageHeight =
            availableHeight

          imageWidth =
            imageHeight /
            imageRatio
        }

        /*
         * Center horizontally.
         */

        const x =
          (A4_WIDTH -
            imageWidth) /
          2

        /*
         * Center vertically only when
         * there is extra space.
         */

        const y =
          Math.max(
            margin,
            (A4_HEIGHT -
              imageHeight) /
              2
          )

        /* =================================================
           ADD COMPLETE RESUME
        ================================================= */

        const imageData =
          canvas.toDataURL(
            "image/png"
          )

        pdf.addImage(
          imageData,
          "PNG",
          x,
          y,
          imageWidth,
          imageHeight,
          undefined,
          "FAST"
        )

        /* =================================================
           SAVE
        ================================================= */

        pdf.save(
          "BuildCV-Resume.pdf"
        )
      } catch (error) {
        console.error(
          "BuildCV PDF generation failed:",
          error
        )

        alert(
          `Unable to generate PDF.\n\n${
            error?.message ||
            "Unknown error"
          }`
        )
      } finally {
        /* =================================================
           CLEAN TEMPORARY CLONE
        ================================================= */

        if (
          captureWrapper &&
          captureWrapper.parentNode
        ) {
          captureWrapper.parentNode.removeChild(
            captureWrapper
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
        inline-flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-buildcv-indigo
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-sm
        transition
        hover:bg-buildcv-indigo-600
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
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />

            <polyline points="7 10 12 15 17 10" />

            <line
              x1="12"
              y1="15"
              x2="12"
              y2="3"
            />
          </svg>

          Download PDF
        </>
      )}
    </button>
  )
}

export default DownloadPDF
