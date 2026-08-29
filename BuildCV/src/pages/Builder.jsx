import {
  useEffect,
  useMemo,
  useState,
} from "react"

import {
  useLocation,
  useNavigate,
} from "react-router-dom"

import BuilderSteps, {
  BUILDER_STEPS,
} from "../components/BuilderSteps"

import PersonalInfo from "../components/builder/PersonalInfo"
import Education from "../components/builder/Education"
import Experience from "../components/builder/Experience"
import Skills from "../components/builder/Skills"
import Projects from "../components/builder/Projects"
import DownloadButton from "../components/builder/DownloadButton"

import ResumePreview from "../components/ResumePreview"

// =====================================================
// STORAGE
// =====================================================

const STORAGE_KEY =
  "buildcv-form-data"

const TEMPLATE_STORAGE_KEY =
  "buildcv-selected-template"

// =====================================================
// ID
// =====================================================

function createId() {
  if (
    typeof crypto !== "undefined" &&
    typeof crypto.randomUUID === "function"
  ) {
    return crypto.randomUUID()
  }

  return `${Date.now()}-${Math.random()
    .toString(36)
    .slice(2)}`
}

// =====================================================
// DEFAULT FORM DATA
// =====================================================

function createDefaultFormData() {
  return {
    personal: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      summary: "",
      profileImage: "",
    },

    education: [
      {
        id: createId(),
        institution: "",
        degree: "",
        field: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],

    experience: [
      {
        id: createId(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ],

    skills: [],

    projects: [
      {
        id: createId(),
        name: "",
        description: "",
        technologies: "",
        link: "",
      },
    ],
  }
}

// =====================================================
// NORMALIZE FORM DATA
// =====================================================

function normalizeFormData(data) {
  const defaults =
    createDefaultFormData()

  if (
    !data ||
    typeof data !== "object"
  ) {
    return defaults
  }

  return {
    personal: {
      ...defaults.personal,
      ...(data.personal || {}),
    },

    education:
      Array.isArray(data.education)
        ? data.education.map(
            (item) => ({
              id:
                item.id ||
                createId(),

              institution:
                item.institution ||
                "",

              degree:
                item.degree ||
                "",

              field:
                item.field ||
                "",

              startDate:
                item.startDate ||
                "",

              endDate:
                item.endDate ||
                "",

              description:
                item.description ||
                "",
            })
          )
        : defaults.education,

    experience:
      Array.isArray(data.experience)
        ? data.experience.map(
            (item) => ({
              id:
                item.id ||
                createId(),

              company:
                item.company ||
                "",

              position:
                item.position ||
                item.jobTitle ||
                "",

              startDate:
                item.startDate ||
                "",

              endDate:
                item.endDate ||
                "",

              description:
                item.description ||
                "",
            })
          )
        : defaults.experience,

    skills:
      Array.isArray(data.skills)
        ? data.skills
        : [],

    projects:
      Array.isArray(data.projects)
        ? data.projects.map(
            (item) => ({
              id:
                item.id ||
                createId(),

              name:
                item.name ||
                "",

              description:
                item.description ||
                "",

              technologies:
                item.technologies ||
                "",

              link:
                item.link ||
                "",
            })
          )
        : defaults.projects,
  }
}

// =====================================================
// LOAD DATA
// =====================================================

function loadFormData() {
  try {
    const savedData =
      localStorage.getItem(
        STORAGE_KEY
      )

    if (!savedData) {
      return createDefaultFormData()
    }

    return normalizeFormData(
      JSON.parse(savedData)
    )
  } catch (error) {
    console.error(
      "Failed to load BuildCV data:",
      error
    )

    return createDefaultFormData()
  }
}

// =====================================================
// TEMPLATE ID
// =====================================================

function getTemplateId(value) {
  if (!value) {
    return "modern"
  }

  if (typeof value === "string") {
    return value
  }

  if (typeof value === "object") {
    return (
      value.id ||
      value.slug ||
      value.name ||
      "modern"
    )
  }

  return "modern"
}

// =====================================================
// BUILDER
// =====================================================

function Builder() {
  const location =
    useLocation()

  const navigate =
    useNavigate()

  // ===================================================
  // FORM STATE
  // ===================================================

  const [formData, setFormData] =
    useState(loadFormData)

  // ===================================================
  // ACTIVE STEP
  // ===================================================

  const [activeStep, setActiveStep] =
    useState(
      BUILDER_STEPS[0]?.id ||
        "personal"
    )

  // ===================================================
  // SELECTED TEMPLATE
  // ===================================================

  const selectedTemplate =
    useMemo(() => {
      const stateTemplate =
        location.state
          ?.selectedTemplate

      const savedTemplate =
        localStorage.getItem(
          TEMPLATE_STORAGE_KEY
        )

      return getTemplateId(
        stateTemplate ||
          savedTemplate ||
          "modern"
      )
    }, [location.state])

  // ===================================================
  // SAVE TEMPLATE
  // ===================================================

  useEffect(() => {
    try {
      localStorage.setItem(
        TEMPLATE_STORAGE_KEY,
        selectedTemplate
      )
    } catch (error) {
      console.error(
        "Failed to save template:",
        error
      )
    }
  }, [selectedTemplate])

  // ===================================================
  // SAVE FORM DATA
  // ===================================================

  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(formData)
      )
    } catch (error) {
      console.error(
        "Failed to save form data:",
        error
      )
    }
  }, [formData])

  // ===================================================
  // CURRENT STEP
  // ===================================================

  const currentStepIndex =
    Math.max(
      0,
      BUILDER_STEPS.findIndex(
        (step) =>
          step.id === activeStep
      )
    )

  const currentStep =
    BUILDER_STEPS[
      currentStepIndex
    ]

  const progressPercentage =
    BUILDER_STEPS.length > 1
      ? Math.round(
          (currentStepIndex /
            (BUILDER_STEPS.length -
              1)) *
            100
        )
      : 0

  // ===================================================
  // NAVIGATION
  // ===================================================

  const goNext = () => {
    if (
      currentStepIndex >=
      BUILDER_STEPS.length - 1
    ) {
      return
    }

    setActiveStep(
      BUILDER_STEPS[
        currentStepIndex + 1
      ].id
    )
  }

  const goPrevious = () => {
    if (
      currentStepIndex <= 0
    ) {
      return
    }

    setActiveStep(
      BUILDER_STEPS[
        currentStepIndex - 1
      ].id
    )
  }

  // ===================================================
  // TEMPLATE
  // ===================================================

  const changeTemplate = () => {
    navigate("/templates")
  }

  // ===================================================
  // PERSONAL INFO UPDATE
  // ===================================================

  const updatePersonalInfo = (
    update
  ) => {
    setFormData((current) => {
      const updatedPersonal =
        typeof update === "function"
          ? update(
              current.personal
            )
          : update

      return {
        ...current,

        personal: {
          ...current.personal,
          ...updatedPersonal,
        },
      }
    })
  }

  // ===================================================
  // STEP CONTENT
  // ===================================================

  const renderStepContent = () => {
    switch (activeStep) {
      case "personal":
        return (
          <PersonalInfo
            formData={
              formData.personal
            }
            setFormData={
              updatePersonalInfo
            }
          />
        )

      case "education":
        return (
          <Education
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      case "experience":
        return (
          <Experience
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      case "skills":
        return (
          <Skills
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      case "projects":
        return (
          <Projects
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      default:
        return null
    }
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#111827]">

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="border-b border-[#E2E8F0] bg-white">

        <div className="mx-auto max-w-[1900px] px-4 sm:px-6 lg:px-8">

          <div className="flex min-h-[76px] items-center justify-between gap-6">

            <div className="min-w-0">

              <h1 className="text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                Build Your Resume
              </h1>

              <p className="mt-1 text-sm text-[#718096]">
                Complete each section to create your professional CV.
              </p>

            </div>

            <div className="flex shrink-0 items-center gap-3">

              <div className="hidden text-right sm:block">

                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#718096]">
                  Current template
                </p>

                <p className="mt-1 text-sm font-semibold capitalize text-[#111827]">
                  {selectedTemplate}
                </p>

              </div>

              <button
                type="button"
                onClick={
                  changeTemplate
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  border
                  border-[#E2E8F0]
                  bg-white
                  px-3.5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#475569]
                  transition-all
                  duration-200
                  hover:border-[#6366F1]
                  hover:bg-[#EEF2FF]
                  hover:text-[#4F46E5]
                "
              >
                <span>↗</span>
                <span>
                  Change Template
                </span>
              </button>

            </div>

          </div>

          {/* PROGRESS */}

          <div className="border-t border-[#F1F5F9] py-4">

            <div className="mb-2.5 flex items-center justify-between">

              <div className="flex items-center gap-2.5">

                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#EEF2FF] text-[10px] font-bold text-[#6366F1]">
                  {currentStepIndex + 1}
                </span>

                <p className="text-xs font-semibold text-[#475569]">
                  {currentStep?.title ||
                    "Resume Builder"}
                </p>

              </div>

              <span className="text-xs font-bold text-[#6366F1]">
                {progressPercentage}%
              </span>

            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">

              <div
                className="
                  h-full
                  rounded-full
                  bg-[#6366F1]
                  transition-[width]
                  duration-200
                "
                style={{
                  width: `${Math.max(
                    progressPercentage,
                    4
                  )}%`,
                }}
              />

            </div>

          </div>

        </div>

      </header>

      {/* =================================================
          MOBILE STEPS
      ================================================= */}

      <div className="border-b border-[#E2E8F0] bg-white lg:hidden">

        <div className="overflow-x-auto px-4 py-3">

          <div className="flex min-w-max gap-2">

            {BUILDER_STEPS.map(
              (step, index) => {

                const isActive =
                  step.id ===
                  activeStep

                const isCompleted =
                  index <
                  currentStepIndex

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() =>
                      setActiveStep(
                        step.id
                      )
                    }
                    className={`
                      flex
                      items-center
                      gap-2
                      rounded-lg
                      border
                      px-3.5
                      py-2.5
                      text-xs
                      font-semibold
                      whitespace-nowrap
                      ${
                        isActive
                          ? "border-[#6366F1] bg-[#EEF2FF] text-[#4F46E5]"
                          : "border-[#E2E8F0] bg-white text-[#718096]"
                      }
                    `}
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F8FAFC] text-[10px]">
                      {isCompleted
                        ? "✓"
                        : index + 1}
                    </span>

                    {step.title}
                  </button>
                )
              }
            )}

          </div>

        </div>

      </div>

      {/* =================================================
          WORKSPACE
      ================================================= */}

      <div className="mx-auto max-w-[2000px] px-4 py-5 sm:px-6 lg:px-8">

        <div
          className="
            grid
            items-start
            gap-6
            lg:grid-cols-[260px_minmax(0,1fr)]
            xl:grid-cols-[280px_minmax(0,1fr)_470px]
            2xl:grid-cols-[300px_minmax(0,1fr)_500px]
          "
        >

          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}

          <aside className="hidden lg:block">

            <div className="sticky top-6 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">

              <div className="border-b border-[#E2E8F0] px-5 py-5">

                <p className="text-sm font-bold text-[#111827]">
                  Resume sections
                </p>

                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  Complete each step to build your CV.
                </p>

              </div>

              <div className="p-3">

                <BuilderSteps
                  activeStep={
                    activeStep
                  }
                  onStepChange={
                    setActiveStep
                  }
                  steps={
                    BUILDER_STEPS
                  }
                />

              </div>

            </div>

          </aside>

          {/* =================================================
              CENTER
          ================================================= */}

          <section className="min-w-0">

            {/* FORM */}

            <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">

              <div className="border-b border-[#E2E8F0] px-5 py-6 sm:px-8">


              </div>

              <div className="min-w-0">

                {renderStepContent()}

              </div>

              {/* NAVIGATION */}

              <div className="border-t border-[#E2E8F0] bg-[#F8FAFC] px-5 py-4 sm:px-8">

                <div className="flex items-center justify-between gap-3">

                  <button
                    type="button"
                    onClick={
                      goPrevious
                    }
                    disabled={
                      currentStepIndex ===
                      0
                    }
                    className="
                      rounded-lg
                      border
                      border-[#E2E8F0]
                      bg-white
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-[#475569]
                      disabled:opacity-40
                    "
                  >
                    ← Back
                  </button>

                  <div className="hidden sm:flex gap-1.5">

                    {BUILDER_STEPS.map(
                      (
                        step,
                        index
                      ) => (
                        <span
                          key={
                            step.id
                          }
                          className={`
                            h-1.5
                            rounded-full
                            ${
                              index ===
                              currentStepIndex
                                ? "w-6 bg-[#6366F1]"
                                : index <
                                    currentStepIndex
                                  ? "w-3 bg-[#6366F1]"
                                  : "w-3 bg-[#E2E8F0]"
                            }
                          `}
                        />
                      )
                    )}

                  </div>

                  <button
                    type="button"
                    onClick={
                      goNext
                    }
                    disabled={
                      currentStepIndex ===
                      BUILDER_STEPS.length -
                        1
                    }
                    className="
                      rounded-lg
                      bg-[#6366F1]
                      px-5
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      hover:bg-[#4F46E5]
                      disabled:opacity-40
                    "
                  >
                    Continue →
                  </button>

                </div>

              </div>

            </div>

            {/* =================================================
                MOBILE PREVIEW
            ================================================= */}

            <div className="mt-5 xl:hidden">

              <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">

                <div className="border-b border-[#E2E8F0] px-5 py-4">

                  <p className="text-sm font-bold text-[#111827]">
                    Live Preview
                  </p>

                  <p className="mt-1 text-[11px] text-[#718096]">
                    {selectedTemplate} template
                  </p>

                </div>

                <div className="overflow-auto bg-[#F8FAFC] p-4 sm:p-6">

                  <div className="mx-auto w-full max-w-[794px] rounded-lg bg-white shadow-md">

                    <ResumePreview
                      previewId="resume-preview-mobile"
                      formData={
                        formData
                      }
                      selectedTemplate={
                        selectedTemplate
                      }
                    />

                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              DESKTOP PREVIEW
          ================================================= */}

          <aside className="hidden min-w-0 xl:block">

            <div className="sticky top-6 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">

              <div className="border-b border-[#E2E8F0] px-5 py-4">

                <p className="text-sm font-bold text-[#111827]">
                  Live Preview
                </p>

                <p className="mt-1 text-[11px] text-[#718096]">
                  {selectedTemplate} template
                </p>

              </div>

              <div className="bg-[#F8FAFC] p-4">

                <div
                  className="
                    max-h-[calc(100vh-230px)]
                    min-h-[620px]
                    overflow-auto
                    rounded-lg
                    bg-white
                    shadow-md
                  "
                >

                  <ResumePreview
                    previewId="resume-preview-desktop"
                    formData={
                      formData
                    }
                    selectedTemplate={
                      selectedTemplate
                    }
                  />

                </div>

              </div>

              {/* DOWNLOAD */}

              <div className="border-t border-[#E2E8F0] p-4">

                <DownloadButton />

                <p className="mt-2 text-center text-[10px] text-[#718096]">
                  Your resume will be exported as PDF
                </p>

              </div>

            </div>

          </aside>

        </div>

      </div>

    </main>
  )
}

export default Builder