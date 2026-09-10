import html2pdf from "html2pdf.js"

// =====================================================
// DOWNLOAD RESUME PDF
// =====================================================

export async function downloadResumePdf(formData = {}) {
  const resume = document.getElementById("resume-preview")

  // ---------------------------------------------------
  // CHECK PREVIEW
  // ---------------------------------------------------

  if (!resume) {
    throw new Error(
      "Resume preview element (#resume-preview) was not found."
    )
  }

  // ---------------------------------------------------
  // GET NAME FROM COMMON DATA STRUCTURE
  // ---------------------------------------------------

  const fullName =
    formData?.personal?.fullName ||
    "BuildCV"

  const safeName = String(fullName)
    .trim()
    .replace(/[<>:"/\\|?*]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")

  // ---------------------------------------------------
  // CLONE EXACT RENDERED RESUME
  // ---------------------------------------------------

  const clone = resume.cloneNode(true)

  clone.removeAttribute("id")

  // ---------------------------------------------------
  // PDF CONTAINER
  // ---------------------------------------------------

  const container = document.createElement("div")

  container.style.position = "fixed"
  container.style.left = "-100000px"
  container.style.top = "0"
  container.style.width = "794px"
  container.style.minWidth = "794px"
  container.style.backgroundColor = "#ffffff"
  container.style.padding = "0"
  container.style.margin = "0"
  container.style.zIndex = "-9999"
  container.style.overflow = "visible"

  // ---------------------------------------------------
  // CLONE STYLING
  // ---------------------------------------------------

  clone.style.width = "794px"
  clone.style.minWidth = "794px"
  clone.style.maxWidth = "794px"
  clone.style.height = "auto"
  clone.style.minHeight = "1123px"
  clone.style.margin = "0"
  clone.style.padding = "0"
  clone.style.backgroundColor = "#ffffff"
  clone.style.borderRadius = "0"
  clone.style.boxShadow = "none"
  clone.style.overflow = "visible"

  container.appendChild(clone)
  document.body.appendChild(container)

  // ---------------------------------------------------
  // REMOVE UI-ONLY ELEMENTS
  // ---------------------------------------------------

  clone
    .querySelectorAll(
      "[data-pdf-ignore='true']"
    )
    .forEach((element) => {
      element.remove()
    })

  // ---------------------------------------------------
  // WAIT FOR IMAGES
  // ---------------------------------------------------

  const images = Array.from(
    clone.querySelectorAll("img")
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

  // ---------------------------------------------------
  // WAIT FOR FONTS
  // ---------------------------------------------------

  if (document.fonts?.ready) {
    try {
      await document.fonts.ready
    } catch {
      // Ignore font loading errors
    }
  }

  // ---------------------------------------------------
  // WAIT FOR BROWSER PAINT
  // ---------------------------------------------------

  await new Promise((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(resolve)
    })
  })

  // ---------------------------------------------------
  // PDF OPTIONS
  // ---------------------------------------------------

  const options = {
    margin: 0,

    filename: `${safeName}-Resume.pdf`,

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

      scrollX: 0,

      scrollY: 0,

      windowWidth: 794,

      windowHeight: clone.scrollHeight,

      width: 794,

      height: clone.scrollHeight,
    },

    jsPDF: {
      unit: "mm",

      format: "a4",

      orientation: "portrait",

      compress: true,
    },

    pagebreak: {
      mode: [
        "css",
        "legacy",
      ],
    },
  }

  // ---------------------------------------------------
  // GENERATE PDF
  // ---------------------------------------------------

  try {
    await html2pdf()
      .set(options)
      .from(clone)
      .save()
  } catch (error) {
    console.error(
      "BuildCV PDF generation failed:",
      error
    )

    throw new Error(
      "Unable to generate the resume PDF. Please try again."
    )
  } finally {
    // -------------------------------------------------
    // CLEANUP
    // -------------------------------------------------

    if (
      container &&
      document.body.contains(container)
    ) {
      document.body.removeChild(container)
    }
  }
}
