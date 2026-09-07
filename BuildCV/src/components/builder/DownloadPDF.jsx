import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

// =====================================================
// BUILDCV — DOWNLOAD SELECTED RESUME TEMPLATE
// =====================================================

function DownloadPDF({
  previewId = "resume-preview",
  fileName = "BuildCV-Resume",
}) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;

    const resumeElement =
      document.getElementById(previewId);

    // ---------------------------------------------------
    // CHECK RESUME ELEMENT
    // ---------------------------------------------------

    if (!resumeElement) {
      console.error(
        `Resume preview #${previewId} was not found.`
      );

      return;
    }

    try {
      setIsDownloading(true);

      // -------------------------------------------------
      // WAIT FOR BROWSER TO FINISH RENDERING
      // -------------------------------------------------

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve);
        });
      });

      // -------------------------------------------------
      // WAIT FOR IMAGES
      // -------------------------------------------------

      const images =
        Array.from(
          resumeElement.querySelectorAll("img")
        );

      await Promise.all(
        images.map((image) => {
          if (image.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            image.onload = resolve;
            image.onerror = resolve;
          });
        })
      );

      // -------------------------------------------------
      // CREATE HIGH-RESOLUTION CANVAS
      // -------------------------------------------------

      const canvas = await html2canvas(
        resumeElement,
        {
          scale: 2,

          useCORS: true,

          allowTaint: false,

          backgroundColor: "#FFFFFF",

          logging: false,

          imageTimeout: 15000,

          removeContainer: true,

          scrollX: 0,

          scrollY: 0,

          windowWidth:
            resumeElement.scrollWidth,

          windowHeight:
            resumeElement.scrollHeight,
        }
      );

      // -------------------------------------------------
      // MAKE IMAGE
      // -------------------------------------------------

      const imageData =
        canvas.toDataURL(
          "image/png",
          1.0
        );

      // -------------------------------------------------
      // CREATE A4 PDF
      // -------------------------------------------------

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
        compress: true,
      });

      const pageWidth =
        pdf.internal.pageSize.getWidth();

      const pageHeight =
        pdf.internal.pageSize.getHeight();

      // -------------------------------------------------
      // KEEP ORIGINAL ASPECT RATIO
      // -------------------------------------------------

      const canvasRatio =
        canvas.width / canvas.height;

      const pdfRatio =
        pageWidth / pageHeight;

      let imageWidth;
      let imageHeight;
      let offsetX = 0;
      let offsetY = 0;

      if (canvasRatio > pdfRatio) {
        // Canvas is wider

        imageWidth = pageWidth;

        imageHeight =
          imageWidth / canvasRatio;

        offsetY =
          (pageHeight - imageHeight) / 2;
      } else {
        // Canvas is taller

        imageHeight = pageHeight;

        imageWidth =
          imageHeight * canvasRatio;

        offsetX =
          (pageWidth - imageWidth) / 2;
      }

      // -------------------------------------------------
      // ADD SELECTED TEMPLATE TO PDF
      // -------------------------------------------------

      pdf.addImage(
        imageData,
        "PNG",
        offsetX,
        offsetY,
        imageWidth,
        imageHeight,
        undefined,
        "FAST"
      );

      // -------------------------------------------------
      // DOWNLOAD
      // -------------------------------------------------

      pdf.save(
        `${fileName}.pdf`
      );

    } catch (error) {
      console.error(
        "BuildCV PDF generation failed:",
        error
      );

      alert(
        "Unable to generate the PDF. Please try again."
      );
    } finally {
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
        rounded-lg
        bg-indigo-600
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        transition
        hover:bg-indigo-700
        disabled:cursor-not-allowed
        disabled:opacity-60
      "
    >
      {isDownloading
        ? "Generating PDF..."
        : "Download PDF"}
    </button>
  );
}

export default DownloadPDF;
