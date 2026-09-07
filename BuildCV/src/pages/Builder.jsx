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

import Certifications from "../components/builder/Certifications"
import Languages from "../components/builder/Languages"
import Achievements from "../components/builder/Achievements"
import Interests from "../components/builder/Interests"
import References from "../components/builder/References"


import ResumePreview from "../components/ResumePreview"
import DownloadPDF from "../components/builder/DownloadPDF";
// =====================================================
// STORAGE
// =====================================================

const STORAGE_KEY = "buildcv-form-data"
const TEMPLATE_STORAGE_KEY = "buildcv-selected-template"

// =====================================================
// OPTIONAL SECTIONS
// =====================================================

const OPTIONAL_SECTIONS = [
  {
    id: "certifications",
    title: "Certifications",
    description: "Certificates and credentials.",
  },
  {
    id: "languages",
    title: "Languages",
    description: "Languages and proficiency.",
  },
  {
    id: "achievements",
    title: "Achievements",
    description: "Awards and accomplishments.",
  },
  {
    id: "interests",
    title: "Interests",
    description: "Hobbies and interests.",
  },
  {
    id: "references",
    title: "References",
    description: "Professional references.",
  },
]

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

    certifications: {
      enabled: false,
      items: [],
    },

    languages: {
      enabled: false,
      items: [],
    },

    achievements: {
      enabled: false,
      items: [],
    },

    interests: {
      enabled: false,
      value: "",
    },

    references: {
      enabled: false,
      items: [],
    },
  }
}

// =====================================================
// NORMALIZE FORM DATA
// =====================================================

function normalizeFormData(data) {
  const defaults = createDefaultFormData()

  if (!data || typeof data !== "object") {
    return defaults
  }

  return {
    personal: {
      ...defaults.personal,
      ...(data.personal || {}),
    },

    education: Array.isArray(data.education)
      ? data.education.map((item) => ({
        id: item.id || createId(),
        institution: item.institution || "",
        degree: item.degree || "",
        field: item.field || "",
        startDate: item.startDate || "",
        endDate: item.endDate || "",
        description: item.description || "",
      }))
      : defaults.education,

    experience: Array.isArray(data.experience)
      ? data.experience.map((item) => ({
        id: item.id || createId(),
        company: item.company || "",
        position:
          item.position ||
          item.jobTitle ||
          "",
        startDate: item.startDate || "",
        endDate: item.endDate || "",
        description: item.description || "",
      }))
      : defaults.experience,

    skills: Array.isArray(data.skills)
      ? data.skills
      : [],

    projects: Array.isArray(data.projects)
      ? data.projects.map((item) => ({
        id: item.id || createId(),
        name: item.name || "",
        description: item.description || "",
        technologies: item.technologies || "",
        link: item.link || "",
        liveUrl: item.liveUrl || "",
        githubUrl: item.githubUrl || "",
      }))
      : defaults.projects,

    certifications: {
      enabled:
        data.certifications?.enabled === true,

      items: Array.isArray(
        data.certifications?.items
      )
        ? data.certifications.items.map(
          (item) => ({
            id: item.id || createId(),
            name: item.name || "",
            organization:
              item.organization || "",
            date: item.date || "",
            link: item.link || "",
          })
        )
        : [],
    },

    languages: {
      enabled:
        data.languages?.enabled === true,

      items: Array.isArray(
        data.languages?.items
      )
        ? data.languages.items.map(
          (item) => ({
            id: item.id || createId(),
            language: item.language || "",
            level: item.level || "",
          })
        )
        : [],
    },

    achievements: {
      enabled:
        data.achievements?.enabled === true,

      items: Array.isArray(
        data.achievements?.items
      )
        ? data.achievements.items.map(
          (item) => ({
            id: item.id || createId(),
            title: item.title || "",
            description:
              item.description || "",
            date: item.date || "",
          })
        )
        : [],
    },

    interests: {
      enabled:
        data.interests?.enabled === true,

      value:
        data.interests?.value || "",
    },

    references: {
      enabled:
        data.references?.enabled === true,

      items: Array.isArray(
        data.references?.items
      )
        ? data.references.items.map(
          (item) => ({
            id: item.id || createId(),
            name: item.name || "",
            position: item.position || "",
            company: item.company || "",
            email: item.email || "",
            phone: item.phone || "",
          })
        )
        : [],
    },
  }
}

// =====================================================
// LOAD DATA
// =====================================================

function loadFormData() {
  try {
    const savedData =
      localStorage.getItem(STORAGE_KEY)

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
  const location = useLocation()
  const navigate = useNavigate()

  // ===================================================
  // FORM STATE
  // ===================================================

  const [formData, setFormData] =
    useState(loadFormData)

  const [
    isPreviewExpanded,
    setIsPreviewExpanded,
  ] = useState(false)

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

  const selectedTemplate = useMemo(() => {
    const stateTemplate =
      location.state?.selectedTemplate

    let savedTemplate = null

    try {
      savedTemplate =
        localStorage.getItem(
          TEMPLATE_STORAGE_KEY
        )
    } catch (error) {
      console.error(
        "Failed to read selected template:",
        error
      )
    }

    return getTemplateId(
      stateTemplate ||
      savedTemplate ||
      "modern"
    )
  }, [location.state])

  // ===================================================
  // SAVE SELECTED TEMPLATE
  // ===================================================

  useEffect(() => {
    try {
      localStorage.setItem(
        TEMPLATE_STORAGE_KEY,
        selectedTemplate
      )

      localStorage.setItem(
        "buildcv-template",
        selectedTemplate
      )
    } catch (error) {
      console.error(
        "Failed to save selected template:",
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
  // ESCAPE PREVIEW
  // ===================================================

  useEffect(() => {
    if (!isPreviewExpanded) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsPreviewExpanded(false)
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      )
    }
  }, [isPreviewExpanded])

  // ===================================================
  // STEP INFORMATION
  // ===================================================

  const requiredStepIndex =
    BUILDER_STEPS.findIndex(
      (step) => step.id === activeStep
    )

  const isOptionalSection =
    OPTIONAL_SECTIONS.some(
      (section) =>
        section.id === activeStep
    )

  const currentStepIndex =
    requiredStepIndex >= 0
      ? requiredStepIndex
      : BUILDER_STEPS.length - 1

  const currentStep =
    requiredStepIndex >= 0
      ? BUILDER_STEPS[
      requiredStepIndex
      ]
      : OPTIONAL_SECTIONS.find(
        (section) =>
          section.id === activeStep
      )

  const progressPercentage =
    isOptionalSection
      ? 100
      : BUILDER_STEPS.length > 1
        ? Math.round(
          (currentStepIndex /
            (BUILDER_STEPS.length - 1)) *
          100
        )
        : 0

  // ===================================================
  // NAVIGATION
  // ===================================================

  const goNext = () => {
    if (isOptionalSection) {
      return
    }

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
    if (isOptionalSection) {
      setActiveStep("projects")
      return
    }

    if (currentStepIndex <= 0) {
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
          ? update(current.personal)
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
            formData={formData.personal}
            setFormData={
              updatePersonalInfo
            }
          />
        )

      case "education":
        return (
          <Education
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "experience":
        return (
          <Experience
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "skills":
        return (
          <Skills
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "projects":
        return (
          <Projects
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "certifications":
        return (
          <Certifications
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "languages":
        return (
          <Languages
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "achievements":
        return (
          <Achievements
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "interests":
        return (
          <Interests
            formData={formData}
            setFormData={setFormData}
          />
        )

      case "references":
        return (
          <References
            formData={formData}
            setFormData={setFormData}
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
    <main className="min-h-screen bg-[#F8FAFC] pt-20 text-[#111827]">

      {/* =================================================
          TOP HEADER
      ================================================= */}

      <header className="sticky top-20 z-30 border-b border-[#E2E8F0] bg-white/95 backdrop-blur">

        <div className="mx-auto max-w-[2000px] px-4 sm:px-6 lg:px-8">

          {/* MAIN HEADER */}

          <div className="flex min-h-[82px] items-center justify-between gap-6">

            <div className="min-w-0">

              <div className="flex items-center gap-3">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] text-[#6366F1]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5"
                  >
                    <path
                      d="M6 3.75h9.5L19 7.25v13H6a1.5 1.5 0 0 1-1.5-1.5v-13A2.5 2.5 0 0 1 7 3.75h-.5Z"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M15 3.75v4h4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinejoin="round"
                    />

                    <path
                      d="M8 12h8M8 15.5h5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h1 className="truncate text-xl font-bold tracking-tight text-[#111827] sm:text-2xl">
                    Build Your Resume
                  </h1>

                  <p className="mt-0.5 hidden text-sm text-[#718096] sm:block">
                    Complete each section to create your professional CV.
                  </p>
                </div>

              </div>

            </div>

            <div className="flex shrink-0 items-center gap-3">

              <div className="hidden rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2.5 lg:block">
                <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#718096]">
                  Current template
                </p>

                <div className="mt-0.5 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />

                  <p className="text-sm font-semibold capitalize text-[#111827]">
                    {selectedTemplate}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={changeTemplate}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  px-3.5
                  py-2.5
                  text-sm
                  font-semibold
                  text-[#475569]
                  shadow-sm
                  transition-all
                  duration-200
                  hover:border-[#6366F1]
                  hover:bg-[#EEF2FF]
                  hover:text-[#4F46E5]
                "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                >
                  <path
                    d="M7 7h10M17 7l-3-3M17 7l-3 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M17 17H7M7 17l3-3M7 17l3 3"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="hidden sm:inline">
                  Change Template
                </span>

                <span className="sm:hidden">
                  Template
                </span>
              </button>

            </div>

          </div>

          {/* PROGRESS */}

          <div className="border-t border-[#E2E8F0] py-4">

            <div className="mb-2.5 flex items-center justify-between gap-4">

              <div className="flex min-w-0 items-center gap-2.5">

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[10px] font-bold text-[#6366F1]">
                  {isOptionalSection
                    ? "✓"
                    : currentStepIndex + 1}
                </div>

                <div className="min-w-0">

                  <p className="truncate text-xs font-bold text-[#111827]">
                    {currentStep?.title ||
                      "Resume Builder"}
                  </p>

                  <p className="hidden text-[10px] text-[#718096] sm:block">
                    {isOptionalSection
                      ? "Optional section"
                      : `Step ${currentStepIndex + 1
                      } of ${BUILDER_STEPS.length
                      }`}
                  </p>

                </div>

              </div>

              <span className="shrink-0 text-xs font-bold text-[#6366F1]">
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
                  duration-300
                  ease-out
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
                  step.id === activeStep

                const isCompleted =
                  !isOptionalSection &&
                  index < currentStepIndex

                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() =>
                      setActiveStep(step.id)
                    }
                    className={`
                      flex
                      items-center
                      gap-2
                      whitespace-nowrap
                      rounded-xl
                      border
                      px-3.5
                      py-2.5
                      text-xs
                      font-semibold
                      transition-all
                      duration-200

                      ${isActive
                        ? "border-[#6366F1] bg-[#EEF2FF] text-[#4F46E5] shadow-sm"
                        : "border-[#E2E8F0] bg-white text-[#718096] hover:border-[#6366F1] hover:bg-[#EEF2FF]"
                      }
                    `}
                  >

                    <span
                      className={`
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        text-[10px]
                        font-bold

                        ${isActive
                          ? "bg-[#6366F1] text-white"
                          : isCompleted
                            ? "bg-[#EEF2FF] text-[#6366F1]"
                            : "bg-[#F8FAFC] text-[#718096]"
                        }
                      `}
                    >
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

      <div className="mx-auto max-w-[2000px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">


        <div
          className="
    grid
    items-stretch
    gap-6
    lg:grid-cols-[250px_minmax(0,1fr)]
    xl:grid-cols-[260px_minmax(0,1fr)_520px]
    2xl:grid-cols-[280px_minmax(0,1fr)_560px]
  "
        >

          {/* =================================================
              LEFT — BUILDER STEPS
          ================================================= */}

          <aside className="hidden min-w-0 lg:block">

            <div
              className="
                sticky
                top-[190px]
                overflow-hidden
                rounded-2xl
                border
                border-[#E2E8F0]
                bg-white
                shadow-[0_4px_20px_rgba(15,23,42,0.04)]
              "
            >

              <div className="border-b border-[#E2E8F0] px-5 py-4">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-sm font-bold text-[#111827]">
                      Resume Sections
                    </p>

                    <p className="mt-1 text-[10px] text-[#718096]">
                      Build your resume step by step
                    </p>

                  </div>

                  <span className="rounded-full bg-[#EEF2FF] px-2 py-1 text-[9px] font-bold text-[#6366F1]">
                    {BUILDER_STEPS.length}
                  </span>

                </div>

              </div>

              <BuilderSteps
                activeStep={activeStep}
                onStepChange={setActiveStep}
                steps={BUILDER_STEPS}
                optionalSections={
                  OPTIONAL_SECTIONS
                }
              />

            </div>

          </aside>

          {/* =================================================
              CENTER — FORM BUILDER
          ================================================= */}

          <section className="min-w-0 h-full">

            <div
              className="
                flex
                h-full
                min-h-[620px]
                flex-col
                overflow-hidden
                rounded-2xl
                border
                border-[#E2E8F0]
                bg-white
                shadow-[0_4px_24px_rgba(15,23,42,0.045)]
              "
            >

              {/* FORM TOP BAR */}

              <div className="flex shrink-0 items-center justify-between border-b border-[#E2E8F0] bg-white px-5 py-5 sm:px-8">

                <div className="min-w-0">

                  <p className="text-sm font-bold text-[#111827]">
                    {currentStep?.title ||
                      "Resume Builder"}
                  </p>

                  <p className="mt-1 truncate text-[11px] text-[#718096]">
                    {currentStep?.description ||
                      "Add your information below."}
                  </p>

                </div>

                <div className="hidden shrink-0 rounded-lg bg-[#EEF2FF] px-2.5 py-1.5 text-[9px] font-bold text-[#6366F1] sm:block">
                  {isOptionalSection
                    ? "OPTIONAL"
                    : `STEP ${currentStepIndex + 1
                    }`}
                </div>

              </div>

              {/* FORM CONTENT */}

              <div className="min-w-0 min-h-[680px] flex-1">

                {renderStepContent()}

              </div>

              {/* NAVIGATION */}

              <div className="shrink-0 border-t border-[#E2E8F0] bg-[#F8FAFC] px-4 py-4 sm:px-8 sm:py-5">

                <div className="flex items-center justify-between gap-2 sm:gap-3">

                  {/* BACK */}

                  <button
                    type="button"
                    onClick={goPrevious}
                    disabled={
                      !isOptionalSection &&
                      currentStepIndex === 0
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-white
                      min-h-11
                      px-3
                      py-2.5
                      text-sm
                      font-semibold
                      text-[#475569]
                      shadow-sm
                      transition-all
                      duration-200
                      hover:border-[#6366F1]
                      hover:bg-[#EEF2FF]
                      hover:text-[#4F46E5]
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                    "
                  >
                    <span>←</span>
                    <span>Back</span>
                  </button>

                  {/* STEP INDICATORS */}

                  <div className="hidden items-center gap-1.5 sm:flex">

                    {BUILDER_STEPS.map(
                      (step, index) => (
                        <span
                          key={step.id}
                          className={`
                            h-1.5
                            rounded-full
                            transition-all
                            duration-300

                            ${!isOptionalSection &&
                              index ===
                              currentStepIndex
                              ? "w-7 bg-[#6366F1]"
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

                  {/* CONTINUE */}

                  <button
                    type="button"
                    onClick={goNext}
                    disabled={
                      isOptionalSection ||
                      currentStepIndex ===
                      BUILDER_STEPS.length - 1
                    }
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-xl
                      bg-[#6366F1]
                      min-h-11
                      px-4
                      py-2.5
                      text-sm
                      font-semibold
                      text-white
                      shadow-sm
                      shadow-[#6366F1]/20
                      transition-all
                      duration-200
                      hover:bg-[#4F46E5]
                      hover:shadow-md
                      disabled:cursor-not-allowed
                      disabled:opacity-40
                      disabled:shadow-none
                    "
                  >
                    <span>Continue</span>
                    <span>→</span>
                  </button>

                </div>

              </div>

            </div>

            {/* =================================================
                MOBILE PREVIEW
            ================================================= */}

            <div className="mt-6 xl:hidden">

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  shadow-[0_4px_24px_rgba(15,23,42,0.04)]
                "
              >

                <div className="flex items-center justify-between border-b border-[#E2E8F0] px-5 py-4">

                  <div>

                    <p className="text-sm font-bold text-[#111827]">
                      Live Preview
                    </p>

                    <p className="mt-1 text-[10px] capitalize text-[#718096]">
                      {selectedTemplate} template
                    </p>

                  </div>

                  <span className="flex items-center gap-1.5 rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[9px] font-semibold text-[#6366F1]">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />

                    Live

                  </span>

                </div>

                <div className="bg-[#F8FAFC] p-4 sm:p-6">

                  <div
                    className="
                      resume-preview-frame
                      mx-auto
                      w-full
                      max-w-[794px]
                      overflow-hidden
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-white
                      shadow-[0_8px_30px_rgba(15,23,42,0.08)]
                    "
                  >

                    <ResumePreview
                      key={`mobile-${selectedTemplate}`}
                      previewId="resume-preview-mobile"
                      formData={formData}
                      selectedTemplate={
                        selectedTemplate
                      }
                      fitToContainer={true}
                    />

                  </div>

                </div>

                <div className="border-t border-[#E2E8F0] bg-white p-4">

                  <DownloadPDF
                    previewId="resume-preview-mobile"
                  />

                  <p className="mt-2 text-center text-[10px] text-[#718096]">
                    Your resume will be exported as PDF
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              RIGHT — DESKTOP LIVE PREVIEW
          ================================================= */}

          <aside className="hidden min-w-0 xl:block">

            <div
              className="
                sticky
                top-[190px]
                overflow-hidden
                rounded-2xl
                border
                border-[#E2E8F0]
                bg-white
                shadow-[0_4px_24px_rgba(15,23,42,0.045)]
              "
            >

              {/* PREVIEW HEADER */}

              <div className="flex items-center justify-between border-b border-[#E2E8F0] px-4 py-3.5">

                <div className="flex min-w-0 items-center gap-3">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#6366F1]">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-4 w-4"
                    >
                      <rect
                        x="4"
                        y="3"
                        width="16"
                        height="18"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.7"
                      />

                      <path
                        d="M8 8h8M8 12h8M8 16h5"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>

                  </div>

                  <div className="min-w-0">

                    <p className="text-xs font-bold text-[#111827]">
                      Live Preview
                    </p>

                    <p className="mt-0.5 truncate text-[9px] capitalize text-[#718096]">
                      {selectedTemplate} template
                    </p>

                  </div>

                </div>

                <div className="flex shrink-0 items-center gap-2">

                  <div className="hidden items-center gap-1.5 rounded-full bg-[#EEF2FF] px-2 py-1 sm:flex">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />

                    <span className="text-[8px] font-bold text-[#6366F1]">
                      LIVE
                    </span>

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setIsPreviewExpanded(true)
                    }
                    className="
                      flex
                      h-8
                      items-center
                      justify-center
                      gap-1.5
                      rounded-lg
                      border
                      border-[#E2E8F0]
                      bg-white
                      px-2.5
                      text-[9px]
                      font-semibold
                      text-[#475569]
                      transition-all
                      duration-200
                      hover:border-[#6366F1]
                      hover:bg-[#EEF2FF]
                      hover:text-[#4F46E5]
                    "
                    aria-label="Expand live preview"
                    title="Expand live preview"
                  >

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <span>Expand</span>

                  </button>

                </div>

              </div>

              {/* PREVIEW AREA */}

              <div className="bg-[#F8FAFC] p-3 sm:p-4">

                <div className="mb-3 flex items-center justify-between px-1">

                  <p className="text-[9px] font-medium text-[#718096]">
                    Resume preview
                  </p>

                  <p className="text-[9px] font-semibold text-[#475569]">
                    A4
                  </p>

                </div>

                <div
                  className="
                    resume-preview-frame
                    mx-auto
                    w-full
                    overflow-hidden
                    rounded-lg
                    border
                    border-[#E2E8F0]
                    bg-white
                    shadow-[0_8px_28px_rgba(15,23,42,0.08)]
                  "
                >

                  <ResumePreview
                    key={`desktop-${selectedTemplate}`}
                    previewId="resume-preview-desktop"
                    formData={formData}
                    selectedTemplate={
                      selectedTemplate
                    }
                    fitToContainer={true}
                  />

                </div>

              </div>

              {/* DOWNLOAD */}

              <div className="flex items-center justify-between gap-3 border-t border-[#E2E8F0] bg-white px-4 py-3.5">

                <div className="min-w-0">

                  <p className="text-[10px] font-semibold text-[#475569]">
                    Ready to export?
                  </p>

                  <p className="mt-0.5 text-[9px] text-[#718096]">
                    Download your finished CV
                  </p>

                </div>

                <div className="shrink-0">

                  <DownloadPDF
                    previewId="resume-preview-desktop"
                  />

                </div>

              </div>

            </div>

          </aside>

        </div>

      </div>

      {/* =================================================
          EXPANDED PREVIEW MODAL
      ================================================= */}

      {isPreviewExpanded && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-[#111827]/70
            p-3
            backdrop-blur-sm
            sm:p-6
            lg:p-8
          "
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              setIsPreviewExpanded(false)
            }
          }}
        >

          <div
            className="
              flex
              max-h-[95vh]
              w-full
              max-w-[1080px]
              flex-col
              overflow-hidden
              rounded-2xl
              border
              border-[#E2E8F0]
              bg-white
              shadow-2xl
            "
          >

            {/* MODAL HEADER */}

            <div className="flex shrink-0 items-center justify-between border-b border-[#E2E8F0] bg-white px-5 py-4 sm:px-6">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#6366F1]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                  >
                    <rect
                      x="4"
                      y="3"
                      width="16"
                      height="18"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />

                    <path
                      d="M8 8h8M8 12h8M8 16h5"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                    />
                  </svg>

                </div>

                <div>

                  <p className="text-sm font-bold text-[#111827]">
                    Live Preview
                  </p>

                  <p className="mt-0.5 text-[10px] capitalize text-[#718096]">
                    {selectedTemplate} template
                  </p>

                </div>

              </div>

              <button
                type="button"
                onClick={() =>
                  setIsPreviewExpanded(false)
                }
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-[#E2E8F0]
                  bg-white
                  text-lg
                  font-medium
                  text-[#475569]
                  transition-all
                  duration-200
                  hover:border-[#6366F1]
                  hover:bg-[#EEF2FF]
                  hover:text-[#4F46E5]
                "
                aria-label="Close expanded preview"
              >
                ×
              </button>

            </div>

            {/* MODAL PREVIEW */}

            <div
              className="
                min-h-0
                flex-1
                overflow-auto
                bg-[#F8FAFC]
                p-4
                sm:p-6
                lg:p-8
              "
            >

              <div className="mx-auto mb-4 flex max-w-[794px] items-center justify-between">

                <p className="text-[10px] font-medium text-[#718096]">
                  Full resume preview
                </p>

                <span className="rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[9px] font-bold text-[#6366F1]">
                  A4
                </span>

              </div>

              <div
                className="
                  resume-preview-frame
                  mx-auto
                  max-w-[794px]
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#E2E8F0]
                  bg-white
                  shadow-[0_12px_40px_rgba(15,23,42,0.10)]
                "
              >

                <ResumePreview
                  previewId="resume-preview-expanded"
                  formData={formData}
                  selectedTemplate={
                    selectedTemplate
                  }
                  fitToContainer={true}
                />

              </div>

            </div>

            {/* MODAL FOOTER */}

            <div className="flex shrink-0 items-center justify-between gap-3 border-t border-[#E2E8F0] bg-white px-5 py-3.5 sm:px-6">

              <p className="hidden text-[10px] text-[#718096] sm:block">
                Your resume updates automatically as you edit.
              </p>

              <div className="ml-auto flex items-center gap-2.5">

                <button
                  type="button"
                  onClick={() =>
                    setIsPreviewExpanded(false)
                  }
                  className="
                    rounded-xl
                    border
                    border-[#E2E8F0]
                    bg-white
                    px-4
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
                  Close
                </button>

                <DownloadPDF
                  previewId="resume-preview-expanded"
                />

              </div>

            </div>

          </div>

        </div>
      )}

    </main>
  )
}

export default Builder