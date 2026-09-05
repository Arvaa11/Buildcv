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
// OPTIONAL SECTIONS
//
// IMPORTANT:
// These are NOT BuilderSteps.
// They do NOT affect the 5-step progress.
// They only appear underneath the required steps.
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

    // =================================================
    // OPTIONAL SECTIONS
    // =================================================

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
  const defaults =
    createDefaultFormData()

  if (
    !data ||
    typeof data !== "object"
  ) {
    return defaults
  }

  return {
    // =================================================
    // PERSONAL
    // =================================================

    personal: {
      ...defaults.personal,
      ...(data.personal || {}),
    },

    // =================================================
    // EDUCATION
    // =================================================

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

    // =================================================
    // EXPERIENCE
    // =================================================

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

    // =================================================
    // SKILLS
    // =================================================

    skills:
      Array.isArray(data.skills)
        ? data.skills
        : [],

    // =================================================
    // PROJECTS
    // =================================================

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

            // Preserve these if older/newer
            // project data already contains them.
            liveUrl:
              item.liveUrl ||
              "",

            githubUrl:
              item.githubUrl ||
              "",
          })
        )
        : defaults.projects,

    // =================================================
    // CERTIFICATIONS
    // =================================================

    certifications: {
      enabled:
        data.certifications?.enabled === true,

      items:
        Array.isArray(
          data.certifications?.items
        )
          ? data.certifications.items.map(
            (item) => ({
              id:
                item.id ||
                createId(),

              name:
                item.name ||
                "",

              organization:
                item.organization ||
                "",

              date:
                item.date ||
                "",

              link:
                item.link ||
                "",
            })
          )
          : [],
    },

    // =================================================
    // LANGUAGES
    // =================================================

    languages: {
      enabled:
        data.languages?.enabled === true,

      items:
        Array.isArray(
          data.languages?.items
        )
          ? data.languages.items.map(
            (item) => ({
              id:
                item.id ||
                createId(),

              language:
                item.language ||
                "",

              level:
                item.level ||
                "",
            })
          )
          : [],
    },

    // =================================================
    // ACHIEVEMENTS
    // =================================================

    achievements: {
      enabled:
        data.achievements?.enabled === true,

      items:
        Array.isArray(
          data.achievements?.items
        )
          ? data.achievements.items.map(
            (item) => ({
              id:
                item.id ||
                createId(),

              title:
                item.title ||
                "",

              description:
                item.description ||
                "",

              date:
                item.date ||
                "",
            })
          )
          : [],
    },

    // =================================================
    // INTERESTS
    // =================================================

    interests: {
      enabled:
        data.interests?.enabled === true,

      value:
        data.interests?.value ||
        "",
    },

    // =================================================
    // REFERENCES
    // =================================================

    references: {
      enabled:
        data.references?.enabled === true,

      items:
        Array.isArray(
          data.references?.items
        )
          ? data.references.items.map(
            (item) => ({
              id:
                item.id ||
                createId(),

              name:
                item.name ||
                "",

              position:
                item.position ||
                "",

              company:
                item.company ||
                "",

              email:
                item.email ||
                "",

              phone:
                item.phone ||
                "",
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

  /*
    IMPORTANT:

    Priority:

    1. Template selected from Templates.jsx
       through React Router state

    2. Template saved in localStorage

    3. Modern as fallback
  */

  const selectedTemplate =
    useMemo(() => {
      const stateTemplate =
        location.state
          ?.selectedTemplate

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
    }, [
      location.state,
    ])

  // ===================================================
  // SAVE SELECTED TEMPLATE
  // ===================================================

  useEffect(() => {
    try {
      localStorage.setItem(
        TEMPLATE_STORAGE_KEY,
        selectedTemplate
      )

      /*
        Keep the old BuildCV template key
        synchronized as well.

        This makes the selected template
        available to older parts of the app.
      */

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
  }, [
    selectedTemplate,
  ])

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
  // REQUIRED STEP INFORMATION
  //
  // IMPORTANT:
  // Optional sections are NOT included here.
  // ===================================================

  const requiredStepIndex =
    BUILDER_STEPS.findIndex(
      (step) =>
        step.id === activeStep
    )

  const isOptionalSection =
    OPTIONAL_SECTIONS.some(
      (section) =>
        section.id === activeStep
    )

  /*
    If an optional section is active,
    keep the required-step progress at 100%.
  */

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
              (BUILDER_STEPS.length -
                1)) *
            100
          )
        : 0

  // ===================================================
  // NAVIGATION
  // ===================================================

  const goNext = () => {
    /*
      Optional sections are separate
      from the required step navigation.
    */

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
    /*
      When viewing an optional section,
      Back returns to Projects.
    */

    if (isOptionalSection) {
      setActiveStep("projects")
      return
    }

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

      // ===============================================
      // PERSONAL
      // ===============================================

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

      // ===============================================
      // EDUCATION
      // ===============================================

      case "education":
        return (
          <Education
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // EXPERIENCE
      // ===============================================

      case "experience":
        return (
          <Experience
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // SKILLS
      // ===============================================

      case "skills":
        return (
          <Skills
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // PROJECTS
      // ===============================================

      case "projects":
        return (
          <Projects
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // OPTIONAL:
      // CERTIFICATIONS
      // ===============================================

      case "certifications":
        return (
          <Certifications
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // OPTIONAL:
      // LANGUAGES
      // ===============================================

      case "languages":
        return (
          <Languages
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // OPTIONAL:
      // ACHIEVEMENTS
      // ===============================================

      case "achievements":
        return (
          <Achievements
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // OPTIONAL:
      // INTERESTS
      // ===============================================

      case "interests":
        return (
          <Interests
            formData={formData}
            setFormData={
              setFormData
            }
          />
        )

      // ===============================================
      // OPTIONAL:
      // REFERENCES
      // ===============================================

      case "references":
        return (
          <References
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
    <main className="min-h-screen bg-[#F8FAFC] text-[#111827] pt-20">

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
                  {isOptionalSection
                    ? "✓"
                    : currentStepIndex + 1}
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
          
          IMPORTANT:
          Only the five required steps appear here.
          Optional sections stay in the desktop
          BuilderSteps sidebar.
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
                  !isOptionalSection &&
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
                  optionalSections={
                    OPTIONAL_SECTIONS
                  }
                />

              

            </div>

          </aside>

          {/* =================================================
              CENTER
          ================================================= */}

          <section className="min-w-0">

            {/* FORM */}

            <div className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">


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
                      !isOptionalSection &&
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

                  <div className="hidden gap-1.5 sm:flex">

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
                              !isOptionalSection &&
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
                      isOptionalSection ||
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

                  <p className="mt-1 text-[11px] capitalize text-[#718096]">
                    {selectedTemplate} template
                  </p>

                </div>

                <div className="overflow-auto bg-[#F8FAFC] p-4 sm:p-6">

                  <div className="mx-auto w-full max-w-[794px] rounded-lg bg-white shadow-md">

                    <ResumePreview
                      key={`mobile-${selectedTemplate}`}
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

                {/* DOWNLOAD */}

                <div className="border-t border-[#E2E8F0] p-4">

                  <DownloadButton
                    previewId="resume-preview-mobile"
                    templateId={
                      selectedTemplate
                    }
                  />

                  <p className="mt-2 text-center text-[10px] text-[#718096]">
                    Your resume will be exported as PDF
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* =================================================
              DESKTOP PREVIEW
          ================================================= */}

          <aside className="hidden min-w-0 xl:block">

            <div className="sticky top-6 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white">

              <div className="border-b border-[#E2E8F0] px-5 py-2.5">

                <p className="text-sm font-bold text-[#111827]">
                  Live Preview
                </p>

                <p className="mt-1 text-[11px] capitalize text-[#718096]">
                  {selectedTemplate} template
                </p>

              </div>

              <div className="bg-[#F8FAFC] pl-5">

                <div
                  className="
                    max-h-(100vh-230px)
                    min-h-[620px]
                    overflow-auto
                    rounded-lg
                    bg-white
                    shadow-md
                  "
                >

                  <ResumePreview
                    key={`desktop-${selectedTemplate}`}
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

                <DownloadButton
                  previewId="resume-preview-desktop"
                  templateId={
                    selectedTemplate
                  }
                />

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