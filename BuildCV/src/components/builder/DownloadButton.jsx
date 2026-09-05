
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

/* =========================================================
   BUILD CV — SAFE COLOR CONVERTER
========================================================= */

function colorToRgb(color) {
  if (!color) return color;

  const value = String(color).trim();

  if (
    !value ||
    value === "transparent" ||
    value.startsWith("rgb(") ||
    value.startsWith("rgba(") ||
    value.startsWith("#")
  ) {
    return value;
  }

  try {
    const helper = document.createElement("div");

    helper.style.position = "absolute";
    helper.style.visibility = "hidden";
    helper.style.pointerEvents = "none";
    helper.style.color = value;

    document.body.appendChild(helper);

    const computed =
      window.getComputedStyle(helper).color;

    helper.remove();

    return computed || value;
  } catch {
    return value;
  }
}

/* =========================================================
   REPLACE OKLCH COLORS
========================================================= */

function replaceOklchInCss(css) {
  if (!css || typeof css !== "string") {
    return css;
  }

  if (!css.toLowerCase().includes("oklch")) {
    return css;
  }

  return css.replace(
    /oklch\([^)]*\)/gi,
    (match) => {
      const converted = colorToRgb(match);

      if (
        converted &&
        (
          converted.startsWith("rgb(") ||
          converted.startsWith("rgba(")
        )
      ) {
        return converted;
      }

      return "#000000";
    }
  );
}

/* =========================================================
   SANITIZE STYLE TAGS
========================================================= */

function sanitizeStyleElements(root) {
  if (!root) return;

  const styleElements =
    root.querySelectorAll?.("style") || [];

  styleElements.forEach((styleElement) => {
    const css =
      styleElement.textContent || "";

    if (
      css.toLowerCase().includes("oklch")
    ) {
      styleElement.textContent =
        replaceOklchInCss(css);
    }
  });
}

/* =========================================================
   SANITIZE INLINE STYLES
========================================================= */

function sanitizeInlineStyles(root) {
  if (!root) return;

  const elements = [
    root,
    ...(root.querySelectorAll?.("*") || []),
  ];

  elements.forEach((element) => {
    const style =
      element.getAttribute("style");

    if (
      style &&
      style.toLowerCase().includes("oklch")
    ) {
      element.setAttribute(
        "style",
        replaceOklchInCss(style)
      );
    }
  });
}

/* =========================================================
   MAKE CLONED ELEMENT COLORS SAFE

   IMPORTANT:
   We only replace unsafe colors.
   We DO NOT overwrite normal template colors.
========================================================= */

function makeColorsSafe(source, target) {
  if (!source || !target) return;

  const sourceStyle =
    window.getComputedStyle(source);

  const properties = [
    "color",
    "backgroundColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
    "outlineColor",
    "textDecorationColor",
    "caretColor",
    "columnRuleColor",
  ];

  properties.forEach((property) => {
    const value =
      sourceStyle[property];

    if (!value) return;

    if (
      value.toLowerCase().includes("oklch")
    ) {
      const safeValue =
        colorToRgb(value);

      if (safeValue) {
        target.style[property] =
          safeValue;
      }
    }
  });

  /* Box shadow */

  if (
    sourceStyle.boxShadow &&
    sourceStyle.boxShadow
      .toLowerCase()
      .includes("oklch")
  ) {
    target.style.boxShadow =
      replaceOklchInCss(
        sourceStyle.boxShadow
      );
  }

  /* Text shadow */

  if (
    sourceStyle.textShadow &&
    sourceStyle.textShadow
      .toLowerCase()
      .includes("oklch")
  ) {
    target.style.textShadow =
      replaceOklchInCss(
        sourceStyle.textShadow
      );
  }
}

/* =========================================================
   WAIT FOR IMAGES
========================================================= */

async function waitForImages(container) {
  const images = Array.from(
    container.querySelectorAll("img")
  );

  await Promise.all(
    images.map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }

      return new Promise((resolve) => {
        const done = () => resolve();

        img.addEventListener(
          "load",
          done,
          { once: true }
        );

        img.addEventListener(
          "error",
          done,
          { once: true }
        );
      });
    })
  );
}

/* =========================================================
   WAIT FOR BROWSER PAINT
========================================================= */

function waitForPaint() {
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve);
    });
  });
}

/* =========================================================
   DOWNLOAD BUTTON
========================================================= */

function DownloadButton({
  previewId = "resume-preview",
}) {
  const [downloading, setDownloading] =
    useState(false);

  const handleDownload = async () => {
    if (downloading) return;

    setDownloading(true);

    let printContainer = null;

    try {
      /* =====================================================
         1. FIND SELECTED TEMPLATE
      ===================================================== */

      const preview =
        document.getElementById(previewId);

      if (!preview) {
        throw new Error(
          `Resume preview "${previewId}" was not found.`
        );
      }

      const previewRect =
        preview.getBoundingClientRect();

      if (
        previewRect.width <= 0 ||
        previewRect.height <= 0
      ) {
        throw new Error(
          "The selected resume template is not visible."
        );
      }

      /* =====================================================
         2. WAIT FOR FONTS
      ===================================================== */

      if (document.fonts?.ready) {
        await document.fonts.ready;
      }

      /* =====================================================
         3. WAIT FOR IMAGES
      ===================================================== */

      await waitForImages(preview);

      /* =====================================================
         4. WAIT FOR RENDER
      ===================================================== */

      await waitForPaint();

      /* =====================================================
         5. CREATE PRINT CONTAINER
      ===================================================== */

      printContainer =
        document.createElement("div");

      printContainer.id =
        "buildcv-pdf-container";

      printContainer.style.position =
        "fixed";

      printContainer.style.left =
        "-100000px";

      printContainer.style.top =
        "0";

      printContainer.style.width =
        "794px";

      printContainer.style.margin =
        "0";

      printContainer.style.padding =
        "0";

      printContainer.style.backgroundColor =
        "#FFFFFF";

      printContainer.style.visibility =
        "visible";

      printContainer.style.pointerEvents =
        "none";

      printContainer.style.zIndex =
        "-999999";

      document.body.appendChild(
        printContainer
      );

      /* =====================================================
         6. CLONE SELECTED TEMPLATE
      ===================================================== */

      const clone =
        preview.cloneNode(true);

      clone.id =
        `${previewId}-pdf-clone`;

      clone.style.width =
        "794px";

      clone.style.maxWidth =
        "794px";

      clone.style.minWidth =
        "794px";

      clone.style.height =
        "auto";

      clone.style.minHeight =
        "0";

      clone.style.margin =
        "0";

      clone.style.boxSizing =
        "border-box";

      clone.style.transform =
        "none";

      clone.style.backgroundColor =
        "#FFFFFF";

      printContainer.appendChild(
        clone
      );

      /* =====================================================
         7. REMOVE BUILDER UI

         We only remove controls.
         Resume content remains untouched.
      ===================================================== */

      clone
        .querySelectorAll(
          "button, input, textarea, select"
        )
        .forEach((element) => {
          element.remove();
        });

      /* =====================================================
         8. FIX CLONED ELEMENT SIZING
      ===================================================== */

      const cloneElements = [
        clone,
        ...clone.querySelectorAll("*"),
      ];

      cloneElements.forEach((element) => {
        element.style.boxSizing =
          "border-box";

        element.style.overflowWrap =
          "break-word";

        element.style.wordBreak =
          "break-word";
      });

      /* =====================================================
         9. COPY ONLY SAFE COLORS

         Normal colors remain unchanged.
      ===================================================== */

      const originalElements = [
        preview,
        ...preview.querySelectorAll("*"),
      ];

      const copiedElements = [
        clone,
        ...clone.querySelectorAll("*"),
      ];

      copiedElements.forEach(
        (element, index) => {
          const original =
            originalElements[index];

          if (!original) return;

          makeColorsSafe(
            original,
            element
          );
        }
      );

      /* =====================================================
         10. SANITIZE CLONE

         IMPORTANT:
         We sanitize the CLONE,
         not the real application document.
      ===================================================== */

      sanitizeStyleElements(
        printContainer
      );

      sanitizeInlineStyles(
        printContainer
      );

      /* =====================================================
         11. FIND ACTUAL RESUME PAGE

         Some templates have:

         preview
           └── resume-page

         Others use preview directly.
      ===================================================== */

      let resumePage = clone;

      const children =
        Array.from(clone.children);

      if (children.length === 1) {
        const possiblePage =
          children[0];

        const possibleRect =
          possiblePage.getBoundingClientRect();

        if (
          possibleRect.width >= 700
        ) {
          resumePage =
            possiblePage;
        }
      }

      /* =====================================================
         12. FORCE A4 WIDTH
      ===================================================== */

      const A4_WIDTH_PX = 794;
      const A4_HEIGHT_PX = 1123;

      resumePage.style.width =
        `${A4_WIDTH_PX}px`;

      resumePage.style.maxWidth =
        `${A4_WIDTH_PX}px`;

      resumePage.style.minWidth =
        `${A4_WIDTH_PX}px`;

      resumePage.style.margin =
        "0";

      resumePage.style.boxSizing =
        "border-box";

      resumePage.style.transform =
        "none";

      resumePage.style.transformOrigin =
        "top left";

      /* =====================================================
         13. MEASURE CONTENT
      ===================================================== */

      await waitForPaint();

      let contentHeight =
        Math.max(
          resumePage.scrollHeight,
          resumePage.getBoundingClientRect()
            .height
        );

      if (
        !contentHeight ||
        contentHeight < 100
      ) {
        throw new Error(
          "The selected resume template contains no printable content."
        );
      }

      /* =====================================================
         14. SCALE TEMPLATE TO FIT ONE A4 PAGE

         We scale only when necessary.

         This keeps smaller templates at their
         original size.
      ===================================================== */

      if (
        contentHeight >
        A4_HEIGHT_PX
      ) {
        const scale =
          A4_HEIGHT_PX /
          contentHeight;

        resumePage.style.transform =
          `scale(${scale})`;

        resumePage.style.transformOrigin =
          "top left";

        /*
          Increase layout width so the
          transformed page still renders
          correctly.
        */

        resumePage.style.width =
          `${A4_WIDTH_PX / scale}px`;
      }

      /* =====================================================
         15. FINAL CLONE SANITIZATION
      ===================================================== */

      sanitizeStyleElements(
        printContainer
      );

      sanitizeInlineStyles(
        printContainer
      );

      await waitForPaint();

      /* =====================================================
         16. RENDER SELECTED TEMPLATE
      ===================================================== */

      const finalHeight =
        Math.min(
          A4_HEIGHT_PX,
          Math.max(
            A4_HEIGHT_PX,
            resumePage.getBoundingClientRect()
              .height
          )
        );

      const canvas =
        await html2canvas(
          resumePage,
          {
            scale: 2,

            useCORS: true,

            allowTaint: false,

            backgroundColor:
              "#FFFFFF",

            logging: false,

            imageTimeout: 20000,

            width:
              A4_WIDTH_PX,

            height:
              A4_HEIGHT_PX,

            windowWidth:
              A4_WIDTH_PX,

            windowHeight:
              A4_HEIGHT_PX,

            scrollX: 0,

            scrollY: 0,

            onclone: (
              clonedDocument
            ) => {
              /* ---------------------------------------------
                 SANITIZE ONLY HTML2CANVAS CLONE
              --------------------------------------------- */

              sanitizeStyleElements(
                clonedDocument
              );

              sanitizeInlineStyles(
                clonedDocument
              );

              /* ---------------------------------------------
                 FIND OUR SELECTED TEMPLATE
              --------------------------------------------- */

              const clonedPreview =
                clonedDocument.getElementById(
                  `${previewId}-pdf-clone`
                );

              if (!clonedPreview) {
                return;
              }

              /* ---------------------------------------------
                 REMOVE UI
              --------------------------------------------- */

              clonedPreview
                .querySelectorAll(
                  "button, input, textarea, select"
                )
                .forEach(
                  (element) => {
                    element.remove();
                  }
                );

              /* ---------------------------------------------
                 FINAL COLOR SAFETY
              --------------------------------------------- */

              const elements = [
                clonedPreview,
                ...clonedPreview.querySelectorAll("*"),
              ];

              elements.forEach(
                (element) => {
                  const style =
                    element.getAttribute(
                      "style"
                    );

                  if (
                    style &&
                    style
                      .toLowerCase()
                      .includes("oklch")
                  ) {
                    element.setAttribute(
                      "style",
                      replaceOklchInCss(
                        style
                      )
                    );
                  }
                }
              );
            },
          }
        );

      /* =====================================================
         17. VALIDATE CANVAS
      ===================================================== */

      if (
        !canvas ||
        canvas.width <= 0 ||
        canvas.height <= 0
      ) {
        throw new Error(
          "Could not create the PDF canvas."
        );
      }

      /* =====================================================
         18. CREATE A4 PDF
      ===================================================== */

      const pdf =
        new jsPDF({
          orientation: "portrait",
          unit: "mm",
          format: "a4",
          compress: true,
        });

      const pageWidth =
        210;

      const pageHeight =
        297;

      /*
        Keep the complete canvas inside A4.
      */

      const imageRatio =
        canvas.height /
        canvas.width;

      let imageWidth =
        pageWidth;

      let imageHeight =
        imageWidth *
        imageRatio;

      /*
        Never allow the image to exceed
        the A4 page.
      */

      if (
        imageHeight >
        pageHeight
      ) {
        imageHeight =
          pageHeight;

        imageWidth =
          imageHeight /
          imageRatio;
      }

      /*
        Center horizontally.
      */

      const x =
        (pageWidth -
          imageWidth) /
        2;

      const y = 0;

      /* =====================================================
         19. ADD RESUME TO PDF
      ===================================================== */

      pdf.addImage(
        canvas,
        "PNG",
        x,
        y,
        imageWidth,
        imageHeight,
        undefined,
        "FAST"
      );

      /* =====================================================
         20. SAVE PDF
      ===================================================== */

      pdf.save(
        "BuildCV-Resume.pdf"
      );

    } catch (error) {
      console.error(
        "BUILD CV PDF DOWNLOAD ERROR:",
        error
      );

      alert(
        `Unable to download the resume.\n\n${
          error?.message ||
          "Something went wrong while generating the PDF."
        }`
      );

    } finally {
      /* =====================================================
         CLEANUP
      ===================================================== */

      if (printContainer) {
        printContainer.remove();
      }

      setDownloading(false);
    }
  };

  return (
    <div className="w-full">
      <button
        type="button"
        onClick={handleDownload}
        disabled={downloading}
        className="
          w-full
          rounded-xl
          bg-indigo-600
          px-6
          py-4
          text-base
          font-semibold
          text-white
          transition
          hover:bg-indigo-700
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {downloading
          ? "... Generating PDF..."
          : "↓ Download Resume"}
      </button>

      <p className="mt-2 text-center text-sm text-slate-500">
        Your resume will be exported as PDF
      </p>
    </div>
  );
}

export default DownloadButton;
 
