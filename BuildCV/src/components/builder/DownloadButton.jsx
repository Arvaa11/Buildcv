import { useState } from "react"
import html2pdf from "html2pdf.js"

function DownloadButton() {
  const [isDownloading, setIsDownloading] =
    useState(false)

  const handleDownload = async () => {
    if (isDownloading) {
      return
    }

    let printContainer = null

    try {
      setIsDownloading(true)

      // =================================================
      // FIND VISIBLE RESUME
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
      // CREATE TEMPORARY PRINT CONTAINER
      // =================================================

      printContainer =
        document.createElement("div")

      printContainer.style.position =
        "fixed"

      printContainer.style.left =
        "-100000px"

      printContainer.style.top = "0"

      printContainer.style.width =
        `${preview.offsetWidth}px`

      printContainer.style.background =
        "#FFFFFF"

      printContainer.style.zIndex =
        "-999999"

      document.body.appendChild(
        printContainer
      )

      // =================================================
      // CLONE SELECTED TEMPLATE
      // =================================================

      const clone =
        preview.cloneNode(true)

      clone.removeAttribute("id")

      clone.style.width =
        `${preview.offsetWidth}px`

      clone.style.maxWidth = "none"

      clone.style.height = "auto"

      clone.style.overflow = "visible"

      clone.style.backgroundColor =
        "#FFFFFF"

      printContainer.appendChild(clone)

      // =================================================
      // COPY COMPUTED STYLES
      // =================================================
      //
      // html2canvas has trouble parsing modern CSS
      // color functions such as:
      //
      // oklch(...)
      //
      // We therefore convert the computed styles
      // into browser-resolved RGB values.
      //
      // =================================================

      const originalElements = [
        preview,
        ...preview.querySelectorAll("*"),
      ]

      const clonedElements = [
        clone,
        ...clone.querySelectorAll("*"),
      ]

      originalElements.forEach(
        (original, index) => {
          const cloned =
            clonedElements[index]

          if (!cloned) {
            return
          }

          const computed =
            window.getComputedStyle(
              original
            )

          // ---------------------------------------------
          // IMPORTANT VISUAL PROPERTIES
          // ---------------------------------------------

          const properties = [
            "boxSizing",

            "display",
            "position",
            "top",
            "right",
            "bottom",
            "left",

            "width",
            "minWidth",
            "maxWidth",
            "height",
            "minHeight",
            "maxHeight",

            "marginTop",
            "marginRight",
            "marginBottom",
            "marginLeft",

            "paddingTop",
            "paddingRight",
            "paddingBottom",
            "paddingLeft",

            "fontFamily",
            "fontSize",
            "fontWeight",
            "fontStyle",
            "lineHeight",
            "letterSpacing",
            "textAlign",
            "textTransform",
            "textDecoration",
            "whiteSpace",

            "color",
            "backgroundColor",

            "borderTopWidth",
            "borderRightWidth",
            "borderBottomWidth",
            "borderLeftWidth",

            "borderTopStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderLeftStyle",

            "borderTopColor",
            "borderRightColor",
            "borderBottomColor",
            "borderLeftColor",

            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomRightRadius",
            "borderBottomLeftRadius",

            "boxShadow",

            "opacity",

            "overflow",
            "overflowX",
            "overflowY",

            "flex",
            "flexDirection",
            "flexWrap",
            "flexGrow",
            "flexShrink",
            "flexBasis",

            "alignItems",
            "alignSelf",
            "justifyContent",
            "justifyItems",
            "gap",
            "columnGap",
            "rowGap",

            "gridTemplateColumns",
            "gridTemplateRows",
            "gridColumn",
            "gridRow",

            "verticalAlign",

            "transform",
            "transformOrigin",

            "objectFit",
            "objectPosition",

            "listStyle",
            "listStyleType",

            "visibility",
          ]

          properties.forEach(
            (property) => {
              const value =
                computed[property]

              if (
                value &&
                value !== "normal" &&
                value !== "none"
              ) {
                try {
                  cloned.style[property] =
                    value
                } catch {
                  // Ignore unsupported properties
                }
              }
            }
          )

          // ---------------------------------------------
          // REMOVE CLASSES
          // ---------------------------------------------
          //
          // This is important because Tailwind's
          // stylesheet can contain oklch().
          //
          // Once computed styles are copied above,
          // the classes are no longer required.
          //
          cloned.removeAttribute(
            "class"
          )

          // ---------------------------------------------
          // REMOVE INLINE CSS VARIABLES
          // ---------------------------------------------

          cloned.style.removeProperty(
            "--tw-ring-color"
          )

          cloned.style.removeProperty(
            "--tw-shadow"
          )

          cloned.style.removeProperty(
            "--tw-shadow-colored"
          )

          cloned.style.removeProperty(
            "--tw-ring-shadow"
          )

          cloned.style.removeProperty(
            "--tw-inset-shadow"
          )

          cloned.style.removeProperty(
            "--tw-inset-ring-shadow"
          )
        }
      )

      // =================================================
      // REMOVE STYLESHEETS FROM CLONE
      // =================================================
      //
      // The computed styles are now inline.
      //
      // Removing stylesheet references prevents
      // html2canvas from parsing Tailwind's oklch()
      // declarations.
      //
      // =================================================

      const styleTags =
        clone.querySelectorAll(
          "style, link[rel='stylesheet']"
        )

      styleTags.forEach((element) => {
        element.remove()
      })

      // =================================================
      // REMOVE PROBLEMATIC CSS VARIABLES
      // =================================================

      const allElements = [
        clone,
        ...clone.querySelectorAll("*"),
      ]

      allElements.forEach((element) => {
        const style =
          element.getAttribute("style")

        if (!style) {
          return
        }

        if (
          style.includes("oklch(") ||
          style.includes("oklab(")
        ) {
          // Re-copy safe computed colors
          // from the original element.

          const original =
            originalElements[
              allElements.indexOf(element)
            ]

          if (original) {
            const computed =
              window.getComputedStyle(
                original
              )

            element.style.color =
              computed.color

            element.style.backgroundColor =
              computed.backgroundColor

            element.style.borderTopColor =
              computed.borderTopColor

            element.style.borderRightColor =
              computed.borderRightColor

            element.style.borderBottomColor =
              computed.borderBottomColor

            element.style.borderLeftColor =
              computed.borderLeftColor
          }
        }
      })

      // =================================================
      // WAIT FOR BROWSER PAINT
      // =================================================

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve)
        })
      })

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

          backgroundColor:
            "#FFFFFF",

          logging: false,

          foreignObjectRendering:
            false,

          imageTimeout: 15000,
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
      // GENERATE PDF
      // =================================================

      await html2pdf()
        .set(options)
        .from(clone)
        .save()

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