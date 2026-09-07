import { useState } from "react";

import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

/* =========================================================
   COLOR HELPERS
========================================================= */

function isUnsupportedColor(value) {
  if (!value) return false;

  const color = String(value).toLowerCase();

  return (
    color.includes("oklch(") ||
    color.includes("oklab(") ||
    color.includes("color-mix(") ||
    color.includes("lab(") ||
    color.includes("lch(")
  );
}

function safeColor(value, property = "", element = null) {
  if (!value) return value;

  if (!isUnsupportedColor(value)) {
    return value;
  }

  const normalizedValue =
    String(value).toLowerCase();

  const className =
    typeof element?.className === "string"
      ? element.className
      : "";

  const propertyName =
    String(property).toLowerCase();

  if (propertyName.includes("background")) {
    if (className.includes("bg-fuchsia-50")) {
      return "#FDF4FF";
    }

    if (className.includes("bg-indigo-50")) {
      return "#EEF2FF";
    }

    if (className.includes("bg-indigo-100")) {
      return "#E0E7FF";
    }

    if (className.includes("bg-slate-50")) {
      return "#F8FAFC";
    }

    if (className.includes("bg-white")) {
      return "#FFFFFF";
    }

    if (normalizedValue.includes("fuchsia")) {
      return "#FDF4FF";
    }

    if (normalizedValue.includes("indigo")) {
      return "#EEF2FF";
    }

    if (normalizedValue.includes("slate")) {
      return "#F8FAFC";
    }

    return "#FFFFFF";
  }

  if (propertyName.includes("border")) {
    return "#E2E8F0";
  }

  if (
    propertyName === "fill" ||
    propertyName === "stroke"
  ) {
    return "#6366F1";
  }

  return "#111827";
}

/* =========================================================
   CSS SANITIZATION
========================================================= */

function sanitizeCssText(cssText) {
  if (!cssText) return "";

  return String(cssText)
    .replace(
      /color-mix\([^;{}]*\)/gi,
      "#111827"
    )
    .replace(
      /oklch\([^)]*\)/gi,
      "#111827"
    )
    .replace(
      /oklab\([^)]*\)/gi,
      "#111827"
    )
    .replace(
      /lab\([^)]*\)/gi,
      "#111827"
    )
    .replace(
      /lch\([^)]*\)/gi,
      "#111827"
    );
}

function sanitizeStyleTags(root) {
  if (!root) return;

  const styles =
    root.querySelectorAll("style");

  styles.forEach((style) => {
    try {
      if (!style.textContent) return;

      style.textContent =
        sanitizeCssText(
          style.textContent
        );
    } catch {
      // Ignore.
    }
  });
}

/* =========================================================
   SANITIZE COMPUTED COLORS
========================================================= */

function sanitizeInlineStyles(root) {
  if (!root) return;

  const elements = [
    root,
    ...Array.from(
      root.querySelectorAll("*")
    ),
  ];

  const colorProperties = [
    "color",
    "backgroundColor",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
    "outlineColor",
    "textDecorationColor",
    "fill",
    "stroke",
  ];

  elements.forEach((element) => {
    try {
      const computed =
        window.getComputedStyle(
          element
        );

      colorProperties.forEach(
        (property) => {
          const value =
            computed[property];

          if (!value) return;

          if (
            isUnsupportedColor(value)
          ) {
            element.style.setProperty(
              property,
              safeColor(
                value,
                property,
                element
              ),
              "important"
            );
          }
        }
      );
    } catch {
      // Ignore.
    }
  });
}

/* =========================================================
   COPY COMPUTED STYLES

   IMPORTANT:
   NO !important here.

   Otherwise copied fixed heights can become
   impossible to override later.
========================================================= */

function inlineComputedStyles(
  sourceRoot,
  targetRoot
) {
  if (!sourceRoot || !targetRoot) {
    return;
  }

  const sourceElements = [
    sourceRoot,
    ...Array.from(
      sourceRoot.querySelectorAll("*")
    ),
  ];

  const targetElements = [
    targetRoot,
    ...Array.from(
      targetRoot.querySelectorAll("*")
    ),
  ];

  sourceElements.forEach(
    (sourceElement, index) => {
      const targetElement =
        targetElements[index];

      if (!targetElement) return;

      try {
        const computed =
          window.getComputedStyle(
            sourceElement
          );

        for (
          let i = 0;
          i < computed.length;
          i += 1
        ) {
          const property =
            computed[i];

          let value =
            computed.getPropertyValue(
              property
            );

          if (
            isUnsupportedColor(value)
          ) {
            value = safeColor(
              value,
              property,
              sourceElement
            );
          }

          targetElement.style.setProperty(
            property,
            value
          );
        }
      } catch {
        // Ignore.
      }
    }
  );
}

/* =========================================================
   IMPORTANT FIX
   EXPAND CLIPPED CONTENT

   This searches the COMPLETE cloned resume.

   Example:

   height: 1123px
   overflow: hidden

   while:

   scrollHeight: 1780px

   means the template is clipping content.

   We change that element to:

   height: auto
   max-height: none
   overflow: visible
========================================================= */

function expandClippedElements(
  root,
  targetDocument = document
) {
  if (!root) return;

  const elements = [
    root,
    ...Array.from(
      root.querySelectorAll("*")
    ),
  ];

  const getStyle =
    targetDocument.defaultView?.getComputedStyle ||
    window.getComputedStyle;

  let expandedCount = 0;

  elements.forEach((element) => {
    try {
      const computed =
        getStyle(element);

      const clientHeight =
        element.clientHeight || 0;

      const scrollHeight =
        element.scrollHeight || 0;

      /*
       * Only modify an element when its
       * content is actually taller than
       * the element itself.
       */
      const isActuallyClipping =
        scrollHeight >
        clientHeight + 2;

      if (!isActuallyClipping) {
        return;
      }

      const overflow =
        `${computed.overflow} ${computed.overflowY}`
          .toLowerCase();

      const hasFixedHeight =
        computed.height !== "auto" ||
        computed.maxHeight !== "none";

      const isClipped =
        overflow.includes("hidden") ||
        overflow.includes("clip");

      if (
        isClipped ||
        hasFixedHeight
      ) {
        element.style.setProperty(
          "height",
          "auto",
          "important"
        );

        element.style.setProperty(
          "max-height",
          "none",
          "important"
        );

        element.style.setProperty(
          "overflow",
          "visible",
          "important"
        );

        element.style.setProperty(
          "overflow-y",
          "visible",
          "important"
        );

        expandedCount += 1;
      }
    } catch {
      // Ignore individual elements.
    }
  });

  console.log(
    "BUILD CV: EXPANDED CLIPPED ELEMENTS:",
    expandedCount
  );
}

/* =========================================================
   SVG
========================================================= */

function sanitizeSvg(root) {
  if (!root) return;

  const svgElements =
    root.querySelectorAll(
      "svg *"
    );

  svgElements.forEach((element) => {
    try {
      const fill =
        element.getAttribute("fill");

      const stroke =
        element.getAttribute("stroke");

      if (
        fill &&
        isUnsupportedColor(fill)
      ) {
        element.setAttribute(
          "fill",
          "#6366F1"
        );
      }

      if (
        stroke &&
        isUnsupportedColor(stroke)
      ) {
        element.setAttribute(
          "stroke",
          "#6366F1"
        );
      }
    } catch {
      // Ignore.
    }
  });
}

/* =========================================================
   STYLE ATTRIBUTE SANITIZATION
========================================================= */

function sanitizeAttributes(root) {
  if (!root) return;

  const elements = [
    root,
    ...Array.from(
      root.querySelectorAll("*")
    ),
  ];

  elements.forEach((element) => {
    try {
      const style =
        element.getAttribute(
          "style"
        );

      if (style) {
        element.setAttribute(
          "style",
          sanitizeCssText(style)
        );
      }
    } catch {
      // Ignore.
    }
  });
}

/* =========================================================
   IMAGES
========================================================= */

async function waitForImages(root) {
  if (!root) return;

  const images = Array.from(
    root.querySelectorAll("img")
  );

  await Promise.all(
    images.map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        img.onload = resolve;
        img.onerror = resolve;
      });
    })
  );
}

/* =========================================================
   FONTS
========================================================= */

async function waitForFonts() {
  try {
    if (document.fonts?.ready) {
      await document.fonts.ready;
    }
  } catch {
    // Ignore.
  }
}

/* =========================================================
   PAINT
========================================================= */

function waitForPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        resolve();
      });
    });
  });
}

/* =========================================================
   DOWNLOAD BUTTON
========================================================= */

function DownloadButton({
  previewId = "resume-preview",
}) {
  const [
    isDownloading,
    setIsDownloading,
  ] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);

    let captureHost = null;

    try {
      /* =====================================================
         1. FIND PREVIEW
      ===================================================== */

      const originalPreview =
        document.getElementById(
          previewId
        );

      if (!originalPreview) {
        throw new Error(
          `Resume preview not found: #${previewId}`
        );
      }

      /* =====================================================
         2. ORIGINAL SIZE
      ===================================================== */

      const originalRect =
        originalPreview.getBoundingClientRect();

      console.log(
        "BUILD CV: ORIGINAL SIZE:",
        originalRect.width,
        "x",
        originalRect.height
      );

      console.log(
        "BUILD CV: ORIGINAL SCROLL SIZE:",
        originalPreview.scrollWidth,
        "x",
        originalPreview.scrollHeight
      );

      /* =====================================================
         3. CAPTURE HOST
      ===================================================== */

      captureHost =
        document.createElement(
          "div"
        );

      captureHost.setAttribute(
        "data-buildcv-pdf-host",
        "true"
      );

      Object.assign(
        captureHost.style,
        {
          position: "fixed",
          left: "0",
          top: "0",
          width: "794px",
          minWidth: "794px",
          maxWidth: "794px",
          height: "auto",
          minHeight: "0",
          margin: "0",
          padding: "0",
          display: "block",
          visibility: "visible",
          opacity: "1",
          overflow: "visible",
          transform: "none",
          pointerEvents: "none",
          zIndex: "2147483647",
          background: "#FFFFFF",
        }
      );

      document.body.appendChild(
        captureHost
      );

      /* =====================================================
         4. CLONE
      ===================================================== */

      const resumeClone =
        originalPreview.cloneNode(
          true
        );

      resumeClone.removeAttribute(
        "id"
      );

      resumeClone.setAttribute(
        "data-buildcv-pdf-clone",
        "true"
      );

      captureHost.appendChild(
        resumeClone
      );

      /* =====================================================
         5. COPY LIVE STYLES
      ===================================================== */

      inlineComputedStyles(
        originalPreview,
        resumeClone
      );

      /* =====================================================
         6. ROOT PDF OVERRIDES
      ===================================================== */

      resumeClone.style.setProperty(
        "display",
        "block",
        "important"
      );

      resumeClone.style.setProperty(
        "visibility",
        "visible",
        "important"
      );

      resumeClone.style.setProperty(
        "opacity",
        "1",
        "important"
      );

      resumeClone.style.setProperty(
        "position",
        "relative",
        "important"
      );

      resumeClone.style.setProperty(
        "width",
        "794px",
        "important"
      );

      resumeClone.style.setProperty(
        "min-width",
        "794px",
        "important"
      );

      resumeClone.style.setProperty(
        "max-width",
        "794px",
        "important"
      );

      resumeClone.style.setProperty(
        "height",
        "auto",
        "important"
      );

      resumeClone.style.setProperty(
        "min-height",
        "0",
        "important"
      );

      resumeClone.style.setProperty(
        "max-height",
        "none",
        "important"
      );

      resumeClone.style.setProperty(
        "overflow",
        "visible",
        "important"
      );

      resumeClone.style.setProperty(
        "overflow-y",
        "visible",
        "important"
      );

      resumeClone.style.setProperty(
        "transform",
        "none",
        "important"
      );

      resumeClone.style.setProperty(
        "margin",
        "0",
        "important"
      );

      resumeClone.style.setProperty(
        "background",
        "#FFFFFF",
        "important"
      );

      /* =====================================================
         7. HIDE CONTROLS
      ===================================================== */

      const controls =
        resumeClone.querySelectorAll(
          "button, .pdf-hide, .no-print, [data-pdf-hide]"
        );

      controls.forEach((element) => {
        element.style.setProperty(
          "display",
          "none",
          "important"
        );
      });

      /* =====================================================
         8. EXPAND EVERY ACTUALLY CLIPPED ELEMENT

         THIS IS THE MAIN FIX.
      ===================================================== */

      expandClippedElements(
        resumeClone,
        document
      );

      /* =====================================================
         9. SANITIZE
      ===================================================== */

      sanitizeStyleTags(
        resumeClone
      );

      sanitizeInlineStyles(
        resumeClone
      );

      sanitizeSvg(
        resumeClone
      );

      sanitizeAttributes(
        resumeClone
      );

      /* =====================================================
         10. WAIT
      ===================================================== */

      await waitForImages(
        resumeClone
      );

      await waitForFonts();

      await waitForPaint();

      /*
       * Run expansion a second time.

       * Why?

       * Fonts/images can change the content height.
       */

      expandClippedElements(
        resumeClone,
        document
      );

      await waitForPaint();

      /* =====================================================
         11. MEASURE
      ===================================================== */

      const cloneRect =
        resumeClone.getBoundingClientRect();

      const cloneWidth =
        Math.ceil(
          Math.max(
            cloneRect.width || 0,
            resumeClone.scrollWidth || 0,
            resumeClone.offsetWidth || 0,
            794
          )
        );

      const cloneHeight =
        Math.ceil(
          Math.max(
            cloneRect.height || 0,
            resumeClone.scrollHeight || 0,
            resumeClone.offsetHeight || 0
          )
        );

      console.log(
        "BUILD CV: FINAL CLONE RECT:",
        cloneRect.width,
        "x",
        cloneRect.height
      );

      console.log(
        "BUILD CV: FINAL CLONE SCROLL:",
        resumeClone.scrollWidth,
        "x",
        resumeClone.scrollHeight
      );

      console.log(
        "BUILD CV: FINAL CLONE SIZE:",
        cloneWidth,
        "x",
        cloneHeight
      );

      if (
        cloneWidth <= 0 ||
        cloneHeight <= 0
      ) {
        throw new Error(
          `Invalid PDF clone dimensions: ${cloneWidth} x ${cloneHeight}`
        );
      }

      /* =====================================================
         12. HTML2CANVAS
      ===================================================== */

      const canvas =
        await html2canvas(
          resumeClone,
          {
            scale: 2,

            backgroundColor:
              "#FFFFFF",

            useCORS: true,

            allowTaint: false,

            logging: false,

            imageTimeout: 15000,

            width: cloneWidth,

            height: cloneHeight,

            x: 0,

            y: 0,

            scrollX: 0,

            scrollY: 0,

            windowWidth: Math.max(
              window.innerWidth,
              cloneWidth
            ),

            windowHeight: Math.max(
              window.innerHeight,
              cloneHeight
            ),

            onclone: (
              clonedDocument
            ) => {
              try {
                /* -----------------------------------------
                   FIND CLONED RESUME
                ----------------------------------------- */

                const clonedResume =
                  clonedDocument.querySelector(
                    "[data-buildcv-pdf-clone='true']"
                  );

                if (!clonedResume) {
                  return;
                }

                /* -----------------------------------------
                   ROOT
                ----------------------------------------- */

                clonedResume.style.setProperty(
                  "display",
                  "block",
                  "important"
                );

                clonedResume.style.setProperty(
                  "visibility",
                  "visible",
                  "important"
                );

                clonedResume.style.setProperty(
                  "opacity",
                  "1",
                  "important"
                );

                clonedResume.style.setProperty(
                  "width",
                  `${cloneWidth}px`,
                  "important"
                );

                clonedResume.style.setProperty(
                  "min-width",
                  `${cloneWidth}px`,
                  "important"
                );

                clonedResume.style.setProperty(
                  "max-width",
                  `${cloneWidth}px`,
                  "important"
                );

                clonedResume.style.setProperty(
                  "height",
                  "auto",
                  "important"
                );

                clonedResume.style.setProperty(
                  "min-height",
                  "0",
                  "important"
                );

                clonedResume.style.setProperty(
                  "max-height",
                  "none",
                  "important"
                );

                clonedResume.style.setProperty(
                  "overflow",
                  "visible",
                  "important"
                );

                clonedResume.style.setProperty(
                  "overflow-y",
                  "visible",
                  "important"
                );

                clonedResume.style.setProperty(
                  "transform",
                  "none",
                  "important"
                );

                clonedResume.style.setProperty(
                  "background",
                  "#FFFFFF",
                  "important"
                );

                /* -----------------------------------------
                   HIDE CONTROLS
                ----------------------------------------- */

                const clonedControls =
                  clonedResume.querySelectorAll(
                    "button, .pdf-hide, .no-print, [data-pdf-hide]"
                  );

                clonedControls.forEach(
                  (element) => {
                    element.style.setProperty(
                      "display",
                      "none",
                      "important"
                    );
                  }
                );

                /* -----------------------------------------
                   EXPAND CLIPPED CONTENT AGAIN
                ----------------------------------------- */

                expandClippedElements(
                  clonedResume,
                  clonedDocument
                );

                /* -----------------------------------------
                   COLORS
                ----------------------------------------- */

                sanitizeStyleTags(
                  clonedDocument
                );

                sanitizeInlineStyles(
                  clonedResume
                );

                sanitizeSvg(
                  clonedResume
                );

                sanitizeAttributes(
                  clonedResume
                );
              } catch (error) {
                console.warn(
                  "BUILD CV: ONCLONE WARNING:",
                  error
                );
              }
            },
          }
        );

      /* =====================================================
         13. CANVAS CHECK
      ===================================================== */

      console.log(
        "BUILD CV: CANVAS:",
        canvas.width,
        "x",
        canvas.height
      );

      if (
        canvas.width <= 0 ||
        canvas.height <= 0
      ) {
        throw new Error(
          `html2canvas returned invalid canvas: ${canvas.width} x ${canvas.height}`
        );
      }

      /* =====================================================
         14. PNG
      ===================================================== */

      const imageData =
        canvas.toDataURL(
          "image/png"
        );

      if (
        !imageData ||
        !imageData.startsWith(
          "data:image/png"
        )
      ) {
        throw new Error(
          "Unable to convert resume canvas into PNG."
        );
      }

      console.log(
        "BUILD CV: IMAGE DATA LENGTH:",
        imageData.length
      );

      /* =====================================================
         15. PDF
      ===================================================== */

      const pdf =
        new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
          compress: true,
        });

      const pageWidth =
        pdf.internal.pageSize.getWidth();

      const pageHeight =
        pdf.internal.pageSize.getHeight();

      /*
       * Canvas pixels corresponding to
       * one A4 page.
       */

      const pagePixelHeight =
        Math.floor(
          canvas.width *
            (pageHeight /
              pageWidth)
        );

      const totalPages =
        Math.ceil(
          canvas.height /
            pagePixelHeight
        );

      console.log(
        "BUILD CV: TOTAL PDF PAGES:",
        totalPages
      );

      /* =====================================================
         16. ADD PAGES
      ===================================================== */

      for (
        let pageIndex = 0;
        pageIndex < totalPages;
        pageIndex += 1
      ) {
        if (pageIndex > 0) {
          pdf.addPage();
        }

        const sourceY =
          pageIndex *
          pagePixelHeight;

        const remaining =
          canvas.height -
          sourceY;

        const currentHeight =
          Math.min(
            pagePixelHeight,
            remaining
          );

        const pageCanvas =
          document.createElement(
            "canvas"
          );

        pageCanvas.width =
          canvas.width;

        pageCanvas.height =
          currentHeight;

        const context =
          pageCanvas.getContext(
            "2d"
          );

        if (!context) {
          throw new Error(
            "Unable to create PDF page canvas."
          );
        }

        context.drawImage(
          canvas,

          0,
          sourceY,
          canvas.width,
          currentHeight,

          0,
          0,
          canvas.width,
          currentHeight
        );

        const pageImage =
          pageCanvas.toDataURL(
            "image/png"
          );

        const pdfWidth =
          pageWidth;

        const pdfHeight =
          (currentHeight /
            canvas.width) *
          pdfWidth;

        pdf.addImage(
          pageImage,
          "PNG",
          0,
          0,
          pdfWidth,
          pdfHeight,
          undefined,
          "FAST"
        );
      }

      /* =====================================================
         17. SAVE
      ===================================================== */

      const pdfBlob =
        pdf.output("blob");

      const downloadUrl =
        URL.createObjectURL(
          pdfBlob
        );

      const downloadLink =
        document.createElement(
          "a"
        );

      downloadLink.href =
        downloadUrl;

      downloadLink.download =
        "BuildCV-Resume.pdf";

      downloadLink.style.display =
        "none";

      document.body.appendChild(
        downloadLink
      );

      downloadLink.click();

      downloadLink.remove();

      window.setTimeout(() => {
        URL.revokeObjectURL(
          downloadUrl
        );
      }, 1000);

      console.log(
        "BUILD CV: PDF SAVED SUCCESSFULLY"
      );
    } catch (error) {
      console.error(
        "BUILD CV PDF DOWNLOAD ERROR:",
        error
      );

      const message =
        error instanceof Error
          ? error.message
          : "Unknown PDF generation error";

      alert(
        `Unable to generate PDF: ${message}`
      );
    } finally {
      if (captureHost) {
        try {
          captureHost.remove();
        } catch {
          // Ignore.
        }
      }

      setIsDownloading(false);
    }
  };

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
        rounded-lg
        bg-[#6366F1]
        px-5
        py-3
        text-sm
        font-semibold
        text-white
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
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>

          Download PDF
        </>
      )}
    </button>
  );
}

export default DownloadButton;
