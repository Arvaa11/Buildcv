import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import html2pdf from "html2pdf.js"
import { downloadResumePdf } from "../utils/downloadResumePdf"

import { templates } from "../data/templates"
import ResumePreview from "../components/builder/ResumePreview"

const defaultFormData = {
  profileImage: "",

  fullName: "",
  jobTitle: "",
  email: "",
  phone: "",
  location: "",
  linkedin: "",
  github: "",

  summary: "",

  experience: [],
  education: [],
  skills: [],
  projects: [],
}

function Preview() {
  const [formData, setFormData] = useState(defaultFormData)

  const [selectedTemplate, setSelectedTemplate] =
    useState("modern-professional")

  const [isDownloading, setIsDownloading] =
    useState(false)

  const currentTemplate = templates.find(
    (template) =>
      template.id === selectedTemplate
  )

  // =========================================================
  // LOAD RESUME DATA
  // =========================================================

  useEffect(() => {
    const savedData =
      localStorage.getItem("buildcv-form-data")

    const savedTemplate =
      localStorage.getItem("buildcv-template")

    // Load resume data
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)

        setFormData({
          ...defaultFormData,
          ...parsedData,
        })
      } catch (error) {
        console.error(
          "Could not load resume data:",
          error
        )
      }
    }

    // Load selected template
    if (savedTemplate) {
      setSelectedTemplate(savedTemplate)
    }
  }, [])

  // =========================================================
  // WAIT FOR IMAGES
  // =========================================================

  const waitForImages = async (element) => {
    const images = Array.from(
      element.querySelectorAll("img")
    )

    await Promise.all(
      images.map((image) => {
        if (image.complete) {
          return Promise.resolve()
        }

        return new Promise((resolve) => {
          image.onload = resolve
          image.onerror = resolve
        })
      })
    )
  }

  // =========================================================
  // DOWNLOAD PDF
  // =========================================================

  const downloadResume = async () => {
    if (!window.__BUILDCV_USE_LEGACY_PDF_EXPORT__) {
      downloadResumePdf(formData)
      return
    }

    const resume =
      document.getElementById("resume-preview")

    if (!resume) {
      alert("Resume preview not found.")
      return
    }

    const resumeName = (
      formData.fullName || "BuildCV"
    )
      .trim()
      .replace(/[<>:"/\\|?*]|\p{Cc}/gu, "-") || "BuildCV"

    setIsDownloading(true)

    let pdfContainer = null

    try {
      // =====================================================
      // CLONE RESUME
      // =====================================================

      const clone =
        resume.cloneNode(true)

      clone.removeAttribute("id")
      clone.removeAttribute("class")
      clone.classList.add("pdf-resume")

      // =====================================================
      // PDF CONTAINER
      // =====================================================

      pdfContainer =
        document.createElement("div")

      pdfContainer.style.position = "absolute"
      pdfContainer.style.left = "-9999px"
      pdfContainer.style.top = "0"
      pdfContainer.style.width = "794px"
      pdfContainer.style.minHeight = "1123px"
      pdfContainer.style.background = "#ffffff"
      pdfContainer.style.padding = "0"
      pdfContainer.style.margin = "0"
      pdfContainer.style.zIndex = "-9999"
      pdfContainer.style.color = "#111827"
      pdfContainer.style.overflow = "visible"

      // =====================================================
      // PDF FRIENDLY STYLING
      // =====================================================

      clone.style.width = "794px"
      clone.style.minHeight = "1123px"
      clone.style.background = "#ffffff"
      clone.style.backgroundColor = "#ffffff"
      clone.style.color = "#111827"
      clone.style.border = "none"
      clone.style.borderRadius = "0"
      clone.style.boxShadow = "none"
      clone.style.overflow = "visible"

      clone.style.fontFamily = "Arial, sans-serif"
      clone.style.fontSize = "12px"
      clone.style.lineHeight = "1.5"

      clone.style.setProperty(
        "background-color",
        "#ffffff",
        "important"
      )

      clone.style.setProperty(
        "color",
        "#111827",
        "important"
      )

      clone.style.setProperty(
        "border",
        "none",
        "important"
      )

      clone.style.setProperty(
        "border-radius",
        "0",
        "important"
      )

      clone.style.setProperty(
        "box-shadow",
        "none",
        "important"
      )

      // =====================================================
      // REMOVE UI SHADOWS
      // =====================================================

      clone
        .querySelectorAll("*")
        .forEach((element) => {
          element.removeAttribute("class")
          element.style.boxShadow = "none"
          element.style.textShadow = "none"
          element.style.setProperty(
            "color",
            "#111827",
            "important"
          )
          element.style.setProperty(
            "background-color",
            "transparent",
            "important"
          )
          element.style.setProperty(
            "background-image",
            "none",
            "important"
          )
          element.style.setProperty(
            "border-color",
            "#e2e8f0",
            "important"
          )
        })

      // =====================================================
      // SAFE BACKGROUND COLORS
      // =====================================================

      const backgroundSelectors = [
        ".bg-buildcv-background",
        ".bg-buildcv-surface",
        ".bg-buildcv-card",
        ".bg-buildcv-charcoal",
        ".bg-buildcv-dark",
      ]

      backgroundSelectors.forEach((selector) => {
        clone
          .querySelectorAll(selector)
          .forEach((element) => {
            element.style.setProperty(
              "background-color",
              "#ffffff",
              "important"
            )
          })
      })

      // =====================================================
      // SAFE TEXT COLORS
      // =====================================================

      const textColors = {
        ".text-buildcv-text": "#111827",
        ".text-buildcv-text-secondary":
          "#374151",
        ".text-buildcv-text-muted":
          "#6b7280",
        ".text-buildcv-charcoal":
          "#111827",
        ".text-buildcv-gold":
          "#6366f1",
      }

      Object.entries(textColors).forEach(
        ([selector, color]) => {
          clone
            .querySelectorAll(selector)
            .forEach((element) => {
              element.style.setProperty(
                "color",
                color,
                "important"
              )
            })
        }
      )

      // =====================================================
      // SAFE BORDERS
      // =====================================================

      clone
        .querySelectorAll(
          ".border-buildcv-border"
        )
        .forEach((element) => {
          element.style.setProperty(
            "border-color",
            "#e5e7eb",
            "important"
          )
        })

      // =====================================================
      // ADD TO DOCUMENT
      // =====================================================

      pdfContainer.appendChild(clone)

      document.body.appendChild(
        pdfContainer
      )

      // =====================================================
      // WAIT FOR IMAGES
      // =====================================================

      await waitForImages(clone)

      // =====================================================
      // WAIT FOR RENDER
      // =====================================================

      await new Promise((resolve) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(resolve)
        })
      })

      await new Promise((resolve) => {
        setTimeout(resolve, 300)
      })

      // =====================================================
      // PDF OPTIONS
      // =====================================================

      const options = {
        margin: 0,

        filename: `${resumeName}-Resume.pdf`,

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
          width: 794,
          windowWidth: 794,
          scrollX: 0,
          scrollY: 0,
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

      // =====================================================
      // GENERATE PDF
      // =====================================================

      await html2pdf()
        .set(options)
        .from(clone)
        .save()
    } catch (error) {
      console.error(
        "PDF ERROR:",
        error
      )

      alert(
        "Could not create the PDF. Please try again."
      )
    } finally {
      // =====================================================
      // CLEANUP
      // =====================================================

      if (
        pdfContainer &&
        document.body.contains(
          pdfContainer
        )
      ) {
        document.body.removeChild(
          pdfContainer
        )
      }

      setIsDownloading(false)
    }
  }

  // =========================================================
  // CHECK IF RESUME HAS CONTENT
  // =========================================================

  const hasResume =
    formData.fullName ||
    formData.jobTitle ||
    formData.email ||
    formData.summary ||
    formData.experience?.length ||
    formData.education?.length ||
    formData.skills?.length ||
    formData.projects?.length

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <section
      className="
        min-h-screen
        bg-buildcv-background
        text-buildcv-text
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          sticky
          top-0
          z-40
          border-b
          border-buildcv-border
          bg-buildcv-background/90
          backdrop-blur-xl
        "
      >

        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-7xl
            items-center
            justify-between
            gap-4
            px-5
            sm:px-6
            lg:px-8
          "
        >

          {/* LOGO */}

          <Link
            to="/"
            className="
              font-display
              text-xl
              font-extrabold
              tracking-tight
              text-buildcv-text
              transition-colors
              duration-200
              hover:text-buildcv-violet
            "
          >
            Build
            <span className="text-buildcv-violet">
              CV
            </span>
          </Link>


          {/* ACTIONS */}

          <div
            className="
              flex
              items-center
              gap-2
              sm:gap-3
            "
          >

            {/* BACK */}

            <Link
              to="/builder"
              className="
                inline-flex
                items-center
                gap-2
                rounded-buildcv-md
                border
                border-buildcv-border
                bg-buildcv-surface
                px-3
                py-2.5
                text-xs
                font-semibold
                text-buildcv-text
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-buildcv-border-violet
                hover:bg-buildcv-violet-50
                hover:text-buildcv-violet
                sm:px-4
                sm:text-sm
              "
            >

              <span>←</span>

              <span className="hidden sm:inline">
                Back to Builder
              </span>

              <span className="sm:hidden">
                Builder
              </span>

            </Link>


            {/* DOWNLOAD */}

            <button
              type="button"
              onClick={downloadResume}
              disabled={
                isDownloading ||
                !hasResume
              }
              className="
                inline-flex
                items-center
                gap-2
                rounded-buildcv-md
                bg-buildcv-violet
                px-3
                py-2.5
                text-xs
                font-bold
                text-buildcv-white
                shadow-buildcv-violet
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-buildcv-violet-600
                hover:shadow-buildcv-lg
                disabled:cursor-not-allowed
                disabled:opacity-50
                sm:px-4
                sm:text-sm
              "
            >

              <span>
                {isDownloading
                  ? "..."
                  : "↓"}
              </span>

              <span className="hidden sm:inline">
                {isDownloading
                  ? "Creating PDF..."
                  : "Download PDF"}
              </span>

              <span className="sm:hidden">
                PDF
              </span>

            </button>

          </div>

        </div>

      </header>


      {/* =====================================================
          PAGE CONTENT
      ===================================================== */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          overflow-hidden
          px-5
          py-12
          sm:px-6
          sm:py-16
          lg:px-8
          lg:py-20
        "
      >

        {/* ===================================================
            BACKGROUND GLOW
        =================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -left-56
            top-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-buildcv-violet/8
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-56
            bottom-20
            h-[420px]
            w-[420px]
            rounded-full
            bg-buildcv-accent/5
            blur-[130px]
          "
        />


        {/* ===================================================
            PAGE HEADER
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-3xl
            text-center
          "
        >

          {/* BADGE */}

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-buildcv-border-violet
              bg-buildcv-violet-50
              px-3.5
              py-1.5
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-buildcv-violet
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-buildcv-violet
              "
            />

            Final Preview

          </span>


          {/* TITLE */}

          <h1
            className="
              mt-5
              font-display
              text-3xl
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-buildcv-text
              sm:text-4xl
              lg:text-5xl
            "
          >

            Your resume is

            <span
              className="
                buildcv-gradient-text
              "
            >
              {" "}ready to review.
            </span>

          </h1>


          {/* DESCRIPTION */}

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-buildcv-text-secondary
              sm:text-base
              sm:leading-8
            "
          >
            Review your resume below, make any
            final changes in the builder, and
            download your professional PDF when
            you're ready.
          </p>

        </div>


        {/* ===================================================
            TEMPLATE INFO
        =================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-9
            flex
            max-w-4xl
            flex-col
            items-center
            justify-between
            gap-4
            rounded-buildcv-xl
            border
            border-buildcv-border
            bg-buildcv-surface
            p-4
            shadow-buildcv-sm
            sm:flex-row
            sm:px-5
          "
        >

          <div className="text-center sm:text-left">

            <p
              className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.14em]
                text-buildcv-text-muted
              "
            >
              Selected template
            </p>

            <p
              className="
                mt-1
                text-sm
                font-bold
                capitalize
                text-buildcv-text
              "
            >
              {currentTemplate?.name ||
                "Modern"}
            </p>

          </div>


          <Link
            to="/builder"
            className="
              rounded-full
              px-3
              py-1.5
              text-xs
              font-bold
              text-buildcv-violet
              transition-all
              duration-200
              hover:bg-buildcv-violet-50
              hover:text-buildcv-violet-600
              sm:text-sm
            "
          >
            Change template →
          </Link>

        </div>


        {/* ===================================================
            RESUME
        =================================================== */}

        <div
          className="
            mx-auto
            mt-8
            max-w-[850px]
          "
        >

          {hasResume ? (

            <div
              className="
                overflow-hidden
                rounded-buildcv-2xl
                border
                border-buildcv-border
                bg-white
                shadow-buildcv-xl
                ring-1
                ring-white/5
              "
            >

              <ResumePreview
                formData={formData}
                selectedTemplate={
                  selectedTemplate
                }
              />

            </div>

          ) : (

            /* =================================================
               EMPTY STATE
            ================================================= */

            <div
              className="
                rounded-buildcv-2xl
                border
                border-dashed
                border-buildcv-border-strong
                bg-buildcv-surface
                px-6
                py-20
                text-center
                shadow-buildcv-lg
              "
            >

              <div
                className="
                  mx-auto
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-buildcv-border-violet
                  bg-buildcv-violet-50
                  font-display
                  text-xl
                  font-extrabold
                  text-buildcv-violet
                "
              >
                CV
              </div>


              <h2
                className="
                  mt-6
                  font-display
                  text-xl
                  font-bold
                  text-buildcv-text
                "
              >
                Your resume is still empty
              </h2>


              <p
                className="
                  mx-auto
                  mt-2
                  max-w-md
                  text-sm
                  leading-6
                  text-buildcv-text-secondary
                "
              >
                Add your personal information,
                experience, education, and skills
                in the builder to see your resume
                here.
              </p>


              <Link
                to="/builder"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-buildcv-md
                  bg-buildcv-violet
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-buildcv-white
                  shadow-buildcv-violet
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-buildcv-violet-600
                  hover:shadow-buildcv-lg
                "
              >
                Start Building

                <span>→</span>
              </Link>

            </div>

          )}

        </div>


        {/* ===================================================
            BOTTOM ACTION
        =================================================== */}

        {hasResume && (
          <div
            className="
              relative
              mx-auto
              mt-8
              flex
              max-w-4xl
              flex-col
              items-center
              justify-center
              gap-3
              text-center
              sm:flex-row
            "
          >

            <p
              className="
                text-xs
                text-buildcv-text-muted
              "
            >
              Need to make changes?
            </p>

            <Link
              to="/builder"
              className="
                text-xs
                font-bold
                text-buildcv-violet
                transition-colors
                hover:text-buildcv-violet-400
                sm:text-sm
              "
            >
              Edit your resume →
            </Link>

          </div>
        )}

      </div>

    </section>
  )
}

export default Preview
