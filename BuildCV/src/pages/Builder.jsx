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

const STORAGE_KEY = "buildcv-form-data"
const TEMPLATE_STORAGE_KEY =
  "buildcv-selected-template"

// =====================================================
// ID GENERATOR
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
  const defaults = createDefaultFormData()

  if (!data || typeof data !== "object") {
    return defaults
  }

  return {
    personal: {
      ...defaults.personal,
      ...(data.personal || {}),
    },

    education:
      Array.isArray(data.education) &&
      data.education.length > 0
        ? data.education.map((item) => ({
            id: item.id || createId(),
            institution:
              item.institution || "",
            degree: item.degree || "",
            field: item.field || "",
            startDate:
              item.startDate || "",
            endDate: item.endDate || "",
            description:
              item.description || "",
          }))
        : defaults.education,

    experience:
      Array.isArray(data.experience) &&
      data.experience.length > 0
        ? data.experience.map((item) => ({
            id: item.id || createId(),
            company: item.company || "",
            position: item.position || "",
            startDate:
              item.startDate || "",
            endDate: item.endDate || "",
            description:
              item.description || "",
          }))
        : defaults.experience,

    skills: Array.isArray(data.skills)
      ? data.skills
      : [],

    projects:
      Array.isArray(data.projects) &&
      data.projects.length > 0
        ? data.projects.map((item) => ({
            id: item.id || createId(),
            name: item.name || "",
            description:
              item.description || "",
            technologies:
              item.technologies || "",
            link: item.link || "",
          }))
        : defaults.projects,
  }
}

// =====================================================
// LOAD FORM DATA
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
  // FORM DATA
  // ===================================================

  const [formData, setFormData] =
    useState(loadFormData)

  // ===================================================
  // ACTIVE STEP
  // ===================================================

  const [activeStep, setActiveStep] =
    useState("personal")

  // ===================================================
  // SELECTED TEMPLATE
  // ===================================================

  const selectedTemplate = useMemo(() => {
    const stateTemplate =
      location.state?.selectedTemplate

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
        "Failed to save BuildCV data:",
        error
      )
    }
  }, [formData])

  // ===================================================
  // PERSONAL INFORMATION
  // ===================================================

  const updatePersonal = (
    field,
    value
  ) => {
    setFormData((current) => ({
      ...current,

      personal: {
        ...current.personal,
        [field]: value,
      },
    }))
  }

  // ===================================================
  // STEP INDEX
  // ===================================================

  const currentStepIndex = Math.max(
    0,
    BUILDER_STEPS.findIndex(
      (step) => step.id === activeStep
    )
  )

  // ===================================================
  // NEXT STEP
  // ===================================================

  const goNext = () => {
    const nextIndex = Math.min(
      currentStepIndex + 1,
      BUILDER_STEPS.length - 1
    )

    setActiveStep(
      BUILDER_STEPS[nextIndex].id
    )
  }

  // ===================================================
  // PREVIOUS STEP
  // ===================================================

  const goPrevious = () => {
    const previousIndex = Math.max(
      currentStepIndex - 1,
      0
    )

    setActiveStep(
      BUILDER_STEPS[previousIndex].id
    )
  }

  // ===================================================
  // CHANGE TEMPLATE
  // ===================================================

  const changeTemplate = () => {
    navigate("/templates")
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <main className="min-h-screen bg-[#080D1A] text-[#F8FAFC]">

      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-[#1E293B]
          bg-[#080D1A]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[72px]
            max-w-[1800px]
            items-center
            justify-between
            px-5
            lg:px-8
          "
        >

          {/* BRAND */}

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-xl
                bg-[#6366F1]
                text-sm
                font-black
                text-white
                shadow-lg
                shadow-[#6366F1]/20
              "
            >
              B
            </div>

            <div>
              <p className="text-sm font-black tracking-tight">
                BuildCV
              </p>

              <p className="text-[11px] text-[#64748B]">
                Resume Builder
              </p>
            </div>

          </div>

          {/* TEMPLATE */}

          <div className="flex items-center gap-4">

            <div className="hidden text-right sm:block">

              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.12em]
                  text-[#64748B]
                "
              >
                Current template
              </p>

              <p className="mt-0.5 text-sm font-bold capitalize text-[#F8FAFC]">
                {selectedTemplate}
              </p>

            </div>

            <button
              type="button"
              onClick={changeTemplate}
              className="
                rounded-xl
                border
                border-[#1E293B]
                bg-[#111827]
                px-4
                py-2.5
                text-sm
                font-bold
                text-[#CBD5E1]
                transition
                hover:border-[#6366F1]
                hover:bg-[#6366F1]
                hover:text-white
              "
            >
              Change Template
            </button>

          </div>

        </div>
      </header>


      {/* =================================================
          WORKSPACE
      ================================================= */}

      <div
        className="
          mx-auto
          max-w-[1800px]
          px-4
          py-5
          sm:px-6
          lg:px-8
        "
      >

        <div
          className="
            grid
            gap-5
            lg:grid-cols-[220px_minmax(420px,1fr)_minmax(400px,520px)]
          "
        >

          {/* =================================================
              LEFT — STEPS
          ================================================= */}

          <aside className="hidden lg:block">

            <div
              className="
                sticky
                top-[92px]
                rounded-2xl
                border
                border-[#1E293B]
                bg-[#0D1424]
                p-4
              "
            >

              <p
                className="
                  mb-4
                  px-2
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[0.16em]
                  text-[#64748B]
                "
              >
                Build your resume
              </p>

              <BuilderSteps
                activeStep={activeStep}
                onStepChange={setActiveStep}
                steps={BUILDER_STEPS}
              />

            </div>

          </aside>


          {/* =================================================
              CENTER — FORM
          ================================================= */}

          <section className="min-w-0">

            <div
              className="
                overflow-hidden
                rounded-2xl
                border
                border-[#1E293B]
                bg-[#111827]
              "
            >

              {/* FORM HEADER */}

              <div
                className="
                  border-b
                  border-[#1E293B]
                  px-6
                  py-6
                "
              >

                <p
                  className="
                    text-[11px]
                    font-black
                    uppercase
                    tracking-[0.15em]
                    text-[#818CF8]
                  "
                >
                  Step{" "}
                  {String(
                    currentStepIndex + 1
                  ).padStart(2, "0")}
                </p>

                <h1
                  className="
                    mt-1
                    text-2xl
                    font-black
                    tracking-tight
                    text-[#F8FAFC]
                  "
                >
                  {
                    BUILDER_STEPS[
                      currentStepIndex
                    ]?.title
                  }
                </h1>

                <p className="mt-2 text-sm text-[#94A3B8]">
                  Add the information you want
                  to show on your resume.
                </p>

              </div>


              {/* =================================================
                  PERSONAL FORM
              ================================================= */}

              {activeStep === "personal" && (
                <div className="space-y-8 p-6">

                  {/* BASIC INFORMATION */}

                  <div>

                    <div className="mb-5">

                      <h2 className="text-base font-bold text-[#F8FAFC]">
                        Basic Information
                      </h2>

                      <p className="mt-1 text-xs text-[#64748B]">
                        Start with your name and
                        professional title.
                      </p>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">

                      <BuilderInput
                        label="Full Name"
                        value={
                          formData.personal
                            .fullName
                        }
                        placeholder="Alex Morgan"
                        onChange={(value) =>
                          updatePersonal(
                            "fullName",
                            value
                          )
                        }
                      />

                      <BuilderInput
                        label="Job Title"
                        value={
                          formData.personal
                            .jobTitle
                        }
                        placeholder="Frontend Developer"
                        onChange={(value) =>
                          updatePersonal(
                            "jobTitle",
                            value
                          )
                        }
                      />

                    </div>

                  </div>


                  {/* CONTACT */}

                  <div className="border-t border-[#1E293B] pt-7">

                    <div className="mb-5">

                      <h2 className="text-base font-bold text-[#F8FAFC]">
                        Contact Information
                      </h2>

                      <p className="mt-1 text-xs text-[#64748B]">
                        Add the details employers
                        can use to reach you.
                      </p>

                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">

                      <BuilderInput
                        label="Email"
                        type="email"
                        value={
                          formData.personal
                            .email
                        }
                        placeholder="alex@email.com"
                        onChange={(value) =>
                          updatePersonal(
                            "email",
                            value
                          )
                        }
                      />

                      <BuilderInput
                        label="Phone"
                        value={
                          formData.personal
                            .phone
                        }
                        placeholder="+92 300 1234567"
                        onChange={(value) =>
                          updatePersonal(
                            "phone",
                            value
                          )
                        }
                      />

                      <BuilderInput
                        label="Location"
                        value={
                          formData.personal
                            .location
                        }
                        placeholder="Lahore, Pakistan"
                        onChange={(value) =>
                          updatePersonal(
                            "location",
                            value
                          )
                        }
                      />

                      <BuilderInput
                        label="LinkedIn"
                        value={
                          formData.personal
                            .linkedin
                        }
                        placeholder="linkedin.com/in/username"
                        onChange={(value) =>
                          updatePersonal(
                            "linkedin",
                            value
                          )
                        }
                      />

                      <BuilderInput
                        label="GitHub"
                        value={
                          formData.personal
                            .github
                        }
                        placeholder="github.com/username"
                        onChange={(value) =>
                          updatePersonal(
                            "github",
                            value
                          )
                        }
                      />

                    </div>

                  </div>


                  {/* SUMMARY */}

                  <div className="border-t border-[#1E293B] pt-7">

                    <div className="mb-5">

                      <h2 className="text-base font-bold text-[#F8FAFC]">
                        Professional Summary
                      </h2>

                      <p className="mt-1 text-xs text-[#64748B]">
                        Write a short introduction
                        that highlights your
                        professional strengths.
                      </p>

                    </div>

                    <textarea
                      value={
                        formData.personal
                          .summary
                      }
                      onChange={(event) =>
                        updatePersonal(
                          "summary",
                          event.target.value
                        )
                      }
                      rows={6}
                      placeholder="Frontend developer passionate about creating responsive and user-friendly web experiences."
                      className="
                        w-full
                        resize-none
                        rounded-xl
                        border
                        border-[#1E293B]
                        bg-[#0D1424]
                        px-4
                        py-3.5
                        text-sm
                        leading-6
                        text-[#F8FAFC]
                        outline-none
                        transition
                        placeholder:text-[#475569]
                        hover:border-[#334155]
                        focus:border-[#6366F1]
                        focus:ring-4
                        focus:ring-[#6366F1]/10
                      "
                    />

                    <div className="mt-2 flex justify-end">

                      <span className="text-[11px] text-[#475569]">
                        {
                          formData.personal
                            .summary.length
                        }{" "}
                        characters
                      </span>

                    </div>

                  </div>

                </div>
              )}


              {/* =================================================
                  OTHER STEPS — TEMPORARY
              ================================================= */}

              {activeStep !== "personal" && (
                <div className="p-6">

                  <div
                    className="
                      rounded-xl
                      border
                      border-dashed
                      border-[#334155]
                      bg-[#0D1424]
                      p-10
                      text-center
                    "
                  >

                    <p className="text-sm font-bold text-[#F8FAFC]">
                      {
                        BUILDER_STEPS[
                          currentStepIndex
                        ]?.title
                      }
                    </p>

                    <p className="mt-2 text-xs text-[#64748B]">
                      This section will be
                      added next.
                    </p>

                  </div>

                </div>
              )}


              {/* =================================================
                  NAVIGATION
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-[#1E293B]
                  px-6
                  py-4
                "
              >

                <button
                  type="button"
                  onClick={goPrevious}
                  disabled={
                    currentStepIndex === 0
                  }
                  className="
                    rounded-xl
                    border
                    border-[#1E293B]
                    bg-[#0D1424]
                    px-4
                    py-2.5
                    text-sm
                    font-bold
                    text-[#CBD5E1]
                    transition
                    hover:border-[#334155]
                    hover:text-white
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  ← Back
                </button>

                <button
                  type="button"
                  onClick={goNext}
                  disabled={
                    currentStepIndex ===
                    BUILDER_STEPS.length - 1
                  }
                  className="
                    rounded-xl
                    bg-[#6366F1]
                    px-5
                    py-2.5
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    shadow-[#6366F1]/20
                    transition
                    hover:bg-[#4F46E5]
                    hover:-translate-y-0.5
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >
                  Continue →
                </button>

              </div>

            </div>

          </section>


          {/* =================================================
              RIGHT — LIVE PREVIEW
          ================================================= */}

          <aside className="min-w-0">

            <div className="sticky top-[92px]">

              {/* PREVIEW HEADER */}

              <div className="mb-3 flex items-center justify-between">

                <div>

                  <p
                    className="
                      text-[11px]
                      font-black
                      uppercase
                      tracking-[0.15em]
                      text-[#818CF8]
                    "
                  >
                    Live Preview
                  </p>

                  <p className="mt-1 text-xs text-[#64748B]">
                    {selectedTemplate} template
                  </p>

                </div>

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-[#6366F1]" />

                  <span className="text-[11px] font-bold text-[#94A3B8]">
                    Live
                  </span>

                </div>

              </div>


              {/* RESUME CANVAS */}

              <div
                className="
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#1E293B]
                  bg-[#0D1424]
                  p-4
                  shadow-2xl
                "
              >

                <div
                  className="
                    aspect-[210/297]
                    w-full
                    overflow-hidden
                    rounded-sm
                    bg-white
                    shadow-xl
                  "
                >

                  {/*

                    STEP 3:

                    The actual selected template
                    will be rendered here.

                  */}

                  <div className="flex h-full items-center justify-center text-center">

                    <div>

                      <p className="text-sm font-bold text-[#111827]">
                        {selectedTemplate}
                      </p>

                      <p className="mt-1 text-xs text-[#6B7280]">
                        Live preview
                      </p>

                    </div>

                  </div>

                </div>

              </div>


              {/* DOWNLOAD */}

              <button
                type="button"
                className="
                  mt-4
                  flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-[#6366F1]
                  px-5
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-lg
                  shadow-[#6366F1]/20
                  transition
                  hover:bg-[#4F46E5]
                  hover:-translate-y-0.5
                "
              >
                Download Resume
              </button>

            </div>

          </aside>

        </div>

      </div>

    </main>
  )
}

// =====================================================
// BUILDER INPUT
// =====================================================

function BuilderInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>

      <label
        className="
          mb-2
          block
          text-xs
          font-bold
          text-[#CBD5E1]
        "
      >
        {label}
      </label>

      <input
        type={type}
        value={value ?? ""}
        placeholder={placeholder}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="
          w-full
          rounded-xl
          border
          border-[#1E293B]
          bg-[#0D1424]
          px-4
          py-3.5
          text-sm
          text-[#F8FAFC]
          outline-none
          transition
          placeholder:text-[#475569]
          hover:border-[#334155]
          focus:border-[#6366F1]
          focus:ring-4
          focus:ring-[#6366F1]/10
        "
      />

    </div>
  )
}

export default Builder