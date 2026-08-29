import { useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"

import { templates } from "../data/templates"
import ResumePreview from "../components/ResumePreview"
import { downloadResumePdf } from "../utils/downloadResumePdf"

// =====================================================
// STORAGE KEYS
// =====================================================

const FORM_DATA_KEY = "buildcv-form-data"
const TEMPLATE_STORAGE_KEY = "buildcv-selected-template"

// =====================================================
// DEFAULT FORM DATA
// =====================================================

const defaultFormData = {
  personal: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
  },

  profileImage: "",

  education: [],
  experience: [],
  skills: [],
  projects: [],
}

// =====================================================
// NORMALIZE FORM DATA
// =====================================================

function normalizeFormData(data) {
  if (!data || typeof data !== "object") {
    return defaultFormData
  }

  /*
   * Your Builder stores personal information
   * inside formData.personal.
   *
   * We preserve that structure here.
   */

  return {
    ...defaultFormData,
    ...data,

    personal: {
      ...defaultFormData.personal,
      ...(data.personal || {}),
    },

    education: Array.isArray(data.education)
      ? data.education
      : [],

    experience: Array.isArray(data.experience)
      ? data.experience
      : [],

    skills: Array.isArray(data.skills)
      ? data.skills
      : [],

    projects: Array.isArray(data.projects)
      ? data.projects
      : [],
  }
}

// =====================================================
// LOAD FORM DATA
// =====================================================

function loadFormData() {
  try {
    const savedData =
      localStorage.getItem(FORM_DATA_KEY)

    if (!savedData) {
      return defaultFormData
    }

    return normalizeFormData(
      JSON.parse(savedData)
    )
  } catch (error) {
    console.error(
      "Failed to load BuildCV resume data:",
      error
    )

    return defaultFormData
  }
}

// =====================================================
// LOAD TEMPLATE
// =====================================================

function loadTemplate() {
  try {
    return (
      localStorage.getItem(
        TEMPLATE_STORAGE_KEY
      ) || "modern"
    )
  } catch (error) {
    console.error(
      "Failed to load selected template:",
      error
    )

    return "modern"
  }
}

// =====================================================
// CHECK RESUME CONTENT
// =====================================================

function hasResumeContent(formData) {
  const personal = formData?.personal || {}

  return Boolean(
    personal.fullName?.trim() ||
      personal.jobTitle?.trim() ||
      personal.email?.trim() ||
      personal.phone?.trim() ||
      personal.location?.trim() ||
      personal.linkedin?.trim() ||
      personal.github?.trim() ||
      personal.summary?.trim() ||
      formData?.profileImage ||
      formData?.experience?.length ||
      formData?.education?.length ||
      formData?.skills?.length ||
      formData?.projects?.length
  )
}

// =====================================================
// COMPONENT
// =====================================================

function Preview() {
  const [formData, setFormData] = useState(
    loadFormData
  )

  const [selectedTemplate, setSelectedTemplate] =
    useState(loadTemplate)

  const [isDownloading, setIsDownloading] =
    useState(false)

  // ===================================================
  // CURRENT TEMPLATE
  // ===================================================

  const currentTemplate = useMemo(() => {
    return (
      templates.find(
        (template) =>
          template.id === selectedTemplate
      ) || templates[0]
    )
  }, [selectedTemplate])

  // ===================================================
  // LOAD DATA WHEN PAGE OPENS
  // ===================================================

  useEffect(() => {
    const savedData =
      loadFormData()

    const savedTemplate =
      loadTemplate()

    setFormData(savedData)
    setSelectedTemplate(savedTemplate)
  }, [])

  // ===================================================
  // KEEP PREVIEW UPDATED
  // ===================================================

  useEffect(() => {
    const handleStorageChange = () => {
      setFormData(loadFormData())
      setSelectedTemplate(loadTemplate())
    }

    window.addEventListener(
      "storage",
      handleStorageChange
    )

    return () => {
      window.removeEventListener(
        "storage",
        handleStorageChange
      )
    }
  }, [])

  // ===================================================
  // DOWNLOAD PDF
  // ===================================================

  const handleDownload = async () => {
    if (isDownloading) return

    if (!hasResumeContent(formData)) {
      alert(
        "Please add some resume information before downloading."
      )

      return
    }

    setIsDownloading(true)

    try {
      /*
       * IMPORTANT:
       *
       * downloadResumePdf should export
       * the same #resume-preview element
       * that the user sees on this page.
       *
       * Therefore we don't create another
       * fake resume layout here.
       */

      await downloadResumePdf(formData)
    } catch (error) {
      console.error(
        "Failed to download resume:",
        error
      )

      alert(
        "Could not create the PDF. Please try again."
      )
    } finally {
      setIsDownloading(false)
    }
  }

  // ===================================================
  // RESUME STATUS
  // ===================================================

  const hasResume =
    hasResumeContent(formData)

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-white/10
          bg-slate-950/90
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
              text-xl
              font-extrabold
              tracking-tight
              transition
              hover:opacity-80
            "
          >
            Build
            <span className="text-indigo-400">
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

            <Link
              to="/builder"
              className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-3
                py-2.5
                text-xs
                font-bold
                text-slate-200
                transition
                hover:border-indigo-400/40
                hover:bg-indigo-500/10
                hover:text-indigo-300
                sm:px-4
                sm:text-sm
              "
            >
              <span className="sm:hidden">
                Builder
              </span>

              <span className="hidden sm:inline">
                ← Back to Builder
              </span>
            </Link>

            <button
              type="button"
              onClick={handleDownload}
              disabled={
                isDownloading || !hasResume
              }
              className="
                rounded-xl
                bg-indigo-500
                px-3
                py-2.5
                text-xs
                font-bold
                text-white
                transition
                hover:bg-indigo-600
                disabled:cursor-not-allowed
                disabled:opacity-40
                sm:px-5
                sm:text-sm
              "
            >
              {isDownloading
                ? "Creating PDF..."
                : "↓ Download PDF"}
            </button>

          </div>
        </div>
      </header>

      {/* =================================================
          PAGE CONTENT
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          py-10
          sm:px-6
          sm:py-14
          lg:px-8
          lg:py-16
        "
      >

        {/* BACKGROUND GLOW */}

        <div
          className="
            pointer-events-none
            absolute
            left-[-180px]
            top-[100px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-indigo-500/10
            blur-[130px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            bottom-[100px]
            right-[-180px]
            h-[400px]
            w-[400px]
            rounded-full
            bg-violet-500/10
            blur-[130px]
          "
        />

        {/* =================================================
            PAGE INTRO
        ================================================= */}

        <section
          className="
            relative
            mx-auto
            max-w-3xl
            text-center
          "
        >

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-indigo-400/20
              bg-indigo-500/10
              px-4
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.14em]
              text-indigo-300
            "
          >
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-indigo-400
              "
            />

            Final Preview
          </span>

          <h1
            className="
              mt-5
              text-3xl
              font-extrabold
              tracking-tight
              sm:text-4xl
              lg:text-5xl
            "
          >
            Your resume is{" "}
            <span
              className="
                bg-gradient-to-r
                from-indigo-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              ready to review.
            </span>
          </h1>

          <p
            className="
              mx-auto
              mt-4
              max-w-2xl
              text-sm
              leading-7
              text-slate-400
              sm:text-base
            "
          >
            Review your resume exactly as it
            will appear in the selected template.
            You can return to the builder anytime
            to make changes.
          </p>

        </section>

        {/* =================================================
            TEMPLATE BAR
        ================================================= */}

        <section
          className="
            relative
            mx-auto
            mt-8
            flex
            max-w-4xl
            flex-col
            items-center
            justify-between
            gap-4
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-4
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
                text-slate-500
              "
            >
              Selected template
            </p>

            <div
              className="
                mt-1
                flex
                items-center
                justify-center
                gap-2
                sm:justify-start
              "
            >

              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor:
                    currentTemplate?.accent ||
                    "#6366f1",
                }}
              />

              <p
                className="
                  text-sm
                  font-bold
                  text-white
                "
              >
                {currentTemplate?.name ||
                  "Modern"}
              </p>

            </div>

          </div>

          <Link
            to="/templates"
            className="
              rounded-xl
              border
              border-white/10
              px-4
              py-2
              text-xs
              font-bold
              text-indigo-300
              transition
              hover:border-indigo-400/30
              hover:bg-indigo-500/10
              sm:text-sm
            "
          >
            Change Template →
          </Link>

        </section>

        {/* =================================================
            RESUME PREVIEW
        ================================================= */}

        <section
          className="
            relative
            mx-auto
            mt-8
            max-w-[850px]
          "
        >

          {hasResume ? (

            <div
              className="
                overflow-hidden
                rounded-2xl
                bg-white
                shadow-[0_30px_80px_rgba(0,0,0,0.35)]
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
                rounded-2xl
                border
                border-dashed
                border-white/10
                bg-white/[0.03]
                px-6
                py-20
                text-center
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
                  bg-indigo-500/10
                  text-xl
                  font-extrabold
                  text-indigo-400
                "
              >
                CV
              </div>

              <h2
                className="
                  mt-6
                  text-xl
                  font-bold
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
                  text-slate-400
                "
              >
                Add your personal information,
                education, experience, skills,
                and projects in the builder.
              </p>

              <Link
                to="/builder"
                className="
                  mt-7
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-indigo-500
                  px-6
                  py-3
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-indigo-600
                "
              >
                Start Building
                <span>→</span>
              </Link>

            </div>

          )}

        </section>

        {/* =================================================
            BOTTOM ACTION
        ================================================= */}

        {hasResume && (
          <div
            className="
              relative
              mx-auto
              mt-8
              flex
              flex-col
              items-center
              justify-center
              gap-2
              text-center
              sm:flex-row
              sm:gap-3
            "
          >

            <p
              className="
                text-xs
                text-slate-500
              "
            >
              Need to make changes?
            </p>

            <Link
              to="/builder"
              className="
                text-xs
                font-bold
                text-indigo-400
                transition
                hover:text-indigo-300
                sm:text-sm
              "
            >
              Edit your resume →
            </Link>

          </div>
        )}

      </div>
    </main>
  )
}

export default Preview