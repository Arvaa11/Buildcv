import { useEffect, useMemo, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import BuilderSteps, {
  BUILDER_STEPS,
} from "../components/BuilderSteps"

const STORAGE_KEY = "buildcv-form-data"
const TEMPLATE_STORAGE_KEY = "buildcv-selected-template"

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
// DEFAULT DATA
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
// NORMALIZE SAVED DATA
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
            institution: item.institution || "",
            degree: item.degree || "",
            field: item.field || "",
            startDate: item.startDate || "",
            endDate: item.endDate || "",
            description: item.description || "",
          }))
        : defaults.education,

    experience:
      Array.isArray(data.experience) &&
      data.experience.length > 0
        ? data.experience.map((item) => ({
            id: item.id || createId(),
            company: item.company || "",
            position: item.position || "",
            startDate: item.startDate || "",
            endDate: item.endDate || "",
            description: item.description || "",
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
            description: item.description || "",
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
// GET TEMPLATE ID
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
  // TEMPLATE
  // ===================================================

  const selectedTemplate = useMemo(() => {
    const stateTemplate =
      location.state?.selectedTemplate

    const savedTemplate =
      localStorage.getItem(
        TEMPLATE_STORAGE_KEY
      )

    return getTemplateId(
      stateTemplate || savedTemplate || "modern"
    )
  }, [location.state])

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
  // SAVE FORM
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
  // PERSONAL
  // ===================================================

  const updatePersonal = (field, value) => {
    setFormData((current) => ({
      ...current,

      personal: {
        ...current.personal,
        [field]: value,
      },
    }))
  }

  // ===================================================
  // EDUCATION
  // ===================================================

  const updateEducation = (
    id,
    field,
    value
  ) => {
    setFormData((current) => ({
      ...current,

      education: current.education.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                [field]: value,
              }
            : item
      ),
    }))
  }

  const addEducation = () => {
    setFormData((current) => ({
      ...current,

      education: [
        ...current.education,

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
    }))
  }

  const removeEducation = (id) => {
    setFormData((current) => ({
      ...current,

      education:
        current.education.length > 1
          ? current.education.filter(
              (item) => item.id !== id
            )
          : current.education,
    }))
  }

  // ===================================================
  // EXPERIENCE
  // ===================================================

  const updateExperience = (
    id,
    field,
    value
  ) => {
    setFormData((current) => ({
      ...current,

      experience:
        current.experience.map((item) =>
          item.id === id
            ? {
                ...item,
                [field]: value,
              }
            : item
        ),
    }))
  }

  const addExperience = () => {
    setFormData((current) => ({
      ...current,

      experience: [
        ...current.experience,

        {
          id: createId(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          description: "",
        },
      ],
    }))
  }

  const removeExperience = (id) => {
    setFormData((current) => ({
      ...current,

      experience:
        current.experience.length > 1
          ? current.experience.filter(
              (item) => item.id !== id
            )
          : current.experience,
    }))
  }

  // ===================================================
  // PROJECTS
  // ===================================================

  const updateProject = (
    id,
    field,
    value
  ) => {
    setFormData((current) => ({
      ...current,

      projects: current.projects.map(
        (item) =>
          item.id === id
            ? {
                ...item,
                [field]: value,
              }
            : item
      ),
    }))
  }

  const addProject = () => {
    setFormData((current) => ({
      ...current,

      projects: [
        ...current.projects,

        {
          id: createId(),
          name: "",
          description: "",
          technologies: "",
          link: "",
        },
      ],
    }))
  }

  const removeProject = (id) => {
    setFormData((current) => ({
      ...current,

      projects:
        current.projects.length > 1
          ? current.projects.filter(
              (item) => item.id !== id
            )
          : current.projects,
    }))
  }

  // ===================================================
  // SKILLS
  // ===================================================

  const updateSkills = (value) => {
    const skills = value
      .split(",")
      .map((skill) => skill.trim())
      .filter(Boolean)

    setFormData((current) => ({
      ...current,
      skills,
    }))
  }

  // ===================================================
  // RESET
  // ===================================================

  const resetBuilder = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear your resume?"
    )

    if (!confirmed) return

    localStorage.removeItem(STORAGE_KEY)

    setFormData(createDefaultFormData())

    setActiveStep("personal")
  }

  // ===================================================
  // TEMPLATE
  // ===================================================

  const changeTemplate = () => {
    navigate("/templates")
  }

  // ===================================================
  // STEP NAVIGATION
  // ===================================================

  const currentStepIndex =
    BUILDER_STEPS.findIndex(
      (step) => step.id === activeStep
    )

  const safeStepIndex =
    currentStepIndex >= 0
      ? currentStepIndex
      : 0

  const goToNextStep = () => {
    const nextIndex = Math.min(
      BUILDER_STEPS.length - 1,
      safeStepIndex + 1
    )

    setActiveStep(
      BUILDER_STEPS[nextIndex].id
    )
  }

  const goToPreviousStep = () => {
    const previousIndex = Math.max(
      0,
      safeStepIndex - 1
    )

    setActiveStep(
      BUILDER_STEPS[previousIndex].id
    )
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <main className="min-h-screen bg-buildcv-background text-buildcv-text">

      {/* =================================================
          HEADER
      ================================================= */}

      <header
        className="
          sticky
          top-0
          z-40
          border-b
          border-buildcv-border
          bg-buildcv-background/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            max-w-[1600px]
            items-center
            justify-between
            gap-4
            px-4
            py-4
            sm:px-6
            lg:px-8
          "
        >
          <div className="min-w-0">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.15em]
                text-buildcv-indigo-400
              "
            >
              BuildCV
            </p>

            <h1
              className="
                truncate
                font-display
                text-xl
                font-extrabold
                tracking-tight
                sm:text-2xl
              "
            >
              Resume Builder
            </h1>
          </div>

          <div className="hidden items-center gap-3 sm:flex">
            <div className="text-right">
              <p
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-wider
                  text-buildcv-text-muted
                "
              >
                Current template
              </p>

              <p
                className="
                  text-sm
                  font-bold
                  capitalize
                  text-buildcv-text
                "
              >
                {selectedTemplate}
              </p>
            </div>

            <button
              type="button"
              onClick={changeTemplate}
              className="
                rounded-xl
                border
                border-buildcv-border
                bg-buildcv-navy
                px-4
                py-2.5
                text-sm
                font-bold
                text-buildcv-text
                transition
                hover:border-buildcv-indigo
                hover:bg-buildcv-indigo
                hover:text-white
              "
            >
              Change Template
            </button>
          </div>
        </div>
      </header>

      {/* =================================================
          BUILDER
      ================================================= */}

      <div
        className="
          mx-auto
          max-w-[1600px]
          px-4
          py-6
          sm:px-6
          lg:px-8
        "
      >
        <div
          className="
            grid
            gap-6
            lg:grid-cols-[300px_minmax(0,1fr)]
          "
        >
          {/* =================================================
              LEFT — BUILDER STEPS
          ================================================= */}

          <BuilderSteps
            activeStep={activeStep}
            onStepChange={setActiveStep}
            steps={BUILDER_STEPS}
          />

          {/* =================================================
              RIGHT — CONTENT
          ================================================= */}

          <div className="min-w-0">

            {/* =================================================
                PERSONAL
            ================================================= */}

            {activeStep === "personal" && (
              <section className="rounded-3xl border border-buildcv-border bg-buildcv-background p-5 shadow-buildcv-sm sm:p-7">

                <SectionHeader
                  title="Personal Information"
                  description="Add the information employers need to contact you."
                />

                <div className="mt-6 grid gap-5 sm:grid-cols-2">

                  <Input
                    label="Full Name"
                    value={
                      formData.personal.fullName
                    }
                    onChange={(value) =>
                      updatePersonal(
                        "fullName",
                        value
                      )
                    }
                    placeholder="John Doe"
                  />

                  <Input
                    label="Job Title"
                    value={
                      formData.personal.jobTitle
                    }
                    onChange={(value) =>
                      updatePersonal(
                        "jobTitle",
                        value
                      )
                    }
                    placeholder="Frontend Developer"
                  />

                  <Input
                    label="Email"
                    type="email"
                    value={
                      formData.personal.email
                    }
                    onChange={(value) =>
                      updatePersonal(
                        "email",
                        value
                      )
                    }
                    placeholder="john@example.com"
                  />

                  <Input
                    label="Phone"
                    value={
                      formData.personal.phone
                    }
                    onChange={(value) =>
                      updatePersonal(
                        "phone",
                        value
                      )
                    }
                    placeholder="+92 300 1234567"
                  />

                  <Input
                    label="Location"
                    value={
                      formData.personal.location
                    }
                    onChange={(value) =>
                      updatePersonal(
                        "location",
                        value
                      )
                    }
                    placeholder="Lahore, Pakistan"
                  />

                  <Input
                    label="LinkedIn"
                    value={
                      formData.personal.linkedin
                    }
                    onChange={(value) =>
                      updatePersonal(
                        "linkedin",
                        value
                      )
                    }
                    placeholder="linkedin.com/in/username"
                  />

                  <Input
                    label="GitHub"
                    value={
                      formData.personal.github
                    }
                    onChange={(value) =>
                      updatePersonal(
                        "github",
                        value
                      )
                    }
                    placeholder="github.com/username"
                  />

                </div>

                <div className="mt-5">
                  <label className="text-sm font-bold text-buildcv-text">
                    Professional Summary
                  </label>

                  <textarea
                    value={
                      formData.personal.summary
                    }
                    onChange={(event) =>
                      updatePersonal(
                        "summary",
                        event.target.value
                      )
                    }
                    rows={6}
                    placeholder="Write a short professional summary..."
                    className="
                      mt-2
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-buildcv-border
                      bg-buildcv-indigo-50
                      px-4
                      py-3
                      text-sm
                      text-buildcv-text
                      outline-none
                      transition
                      placeholder:text-buildcv-text-muted
                      focus:border-buildcv-indigo
                      focus:ring-2
                      focus:ring-buildcv-indigo/20
                    "
                  />
                </div>
              </section>
            )}

            {/* =================================================
                EDUCATION
            ================================================= */}

            {activeStep === "education" && (
              <section className="rounded-3xl border border-buildcv-border bg-buildcv-background p-5 shadow-buildcv-sm sm:p-7">

                <SectionHeader
                  title="Education"
                  description="Add your academic background."
                />

                <div className="mt-6 space-y-5">
                  {formData.education.map(
                    (education, index) => (
                      <div
                        key={education.id}
                        className="
                          rounded-2xl
                          border
                          border-buildcv-border
                          bg-buildcv-indigo-50
                          p-5
                        "
                      >
                        <div className="mb-5 flex items-center justify-between">
                          <h3 className="font-bold">
                            Education {index + 1}
                          </h3>

                          {formData.education
                            .length > 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                removeEducation(
                                  education.id
                                )
                              }
                              className="
                                text-xs
                                font-bold
                                text-red-400
                                hover:text-red-300
                              "
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <Input
                            label="Institution"
                            value={
                              education.institution
                            }
                            onChange={(value) =>
                              updateEducation(
                                education.id,
                                "institution",
                                value
                              )
                            }
                            placeholder="University Name"
                          />

                          <Input
                            label="Degree"
                            value={
                              education.degree
                            }
                            onChange={(value) =>
                              updateEducation(
                                education.id,
                                "degree",
                                value
                              )
                            }
                            placeholder="BS Computer Science"
                          />

                          <Input
                            label="Field"
                            value={
                              education.field
                            }
                            onChange={(value) =>
                              updateEducation(
                                education.id,
                                "field",
                                value
                              )
                            }
                            placeholder="Computer Science"
                          />

                          <Input
                            label="Start Date"
                            value={
                              education.startDate
                            }
                            onChange={(value) =>
                              updateEducation(
                                education.id,
                                "startDate",
                                value
                              )
                            }
                            placeholder="2023"
                          />

                          <Input
                            label="End Date"
                            value={
                              education.endDate
                            }
                            onChange={(value) =>
                              updateEducation(
                                education.id,
                                "endDate",
                                value
                              )
                            }
                            placeholder="2027"
                          />
                        </div>

                        <textarea
                          value={
                            education.description
                          }
                          onChange={(event) =>
                            updateEducation(
                              education.id,
                              "description",
                              event.target.value
                            )
                          }
                          rows={4}
                          placeholder="Description..."
                          className="
                            mt-5
                            w-full
                            resize-none
                            rounded-xl
                            border
                            border-buildcv-border
                            bg-buildcv-background
                            px-4
                            py-3
                            text-sm
                            text-buildcv-text
                            outline-none
                            focus:border-buildcv-indigo
                          "
                        />
                      </div>
                    )
                  )}
                </div>

                <AddButton
                  label="+ Add Education"
                  onClick={addEducation}
                />
              </section>
            )}

            {/* =================================================
                EXPERIENCE
            ================================================= */}

            {activeStep === "experience" && (
              <section className="rounded-3xl border border-buildcv-border bg-buildcv-background p-5 shadow-buildcv-sm sm:p-7">

                <SectionHeader
                  title="Experience"
                  description="Show employers what you have accomplished."
                />

                <div className="mt-6 space-y-5">
                  {formData.experience.map(
                    (experience, index) => (
                      <div
                        key={experience.id}
                        className="
                          rounded-2xl
                          border
                          border-buildcv-border
                          bg-buildcv-navy
                          p-5
                        "
                      >
                        <div className="mb-5 flex items-center justify-between">
                          <h3 className="font-bold">
                            Experience {index + 1}
                          </h3>

                          {formData.experience
                            .length > 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                removeExperience(
                                  experience.id
                                )
                              }
                              className="
                                text-xs
                                font-bold
                                text-red-400
                                hover:text-red-300
                              "
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <Input
                            label="Company"
                            value={
                              experience.company
                            }
                            onChange={(value) =>
                              updateExperience(
                                experience.id,
                                "company",
                                value
                              )
                            }
                            placeholder="Company Name"
                          />

                          <Input
                            label="Position"
                            value={
                              experience.position
                            }
                            onChange={(value) =>
                              updateExperience(
                                experience.id,
                                "position",
                                value
                              )
                            }
                            placeholder="Frontend Developer"
                          />

                          <Input
                            label="Start Date"
                            value={
                              experience.startDate
                            }
                            onChange={(value) =>
                              updateExperience(
                                experience.id,
                                "startDate",
                                value
                              )
                            }
                            placeholder="2024"
                          />

                          <Input
                            label="End Date"
                            value={
                              experience.endDate
                            }
                            onChange={(value) =>
                              updateExperience(
                                experience.id,
                                "endDate",
                                value
                              )
                            }
                            placeholder="Present"
                          />
                        </div>

                        <textarea
                          value={
                            experience.description
                          }
                          onChange={(event) =>
                            updateExperience(
                              experience.id,
                              "description",
                              event.target.value
                            )
                          }
                          rows={5}
                          placeholder="Describe your responsibilities and achievements..."
                          className="
                            mt-5
                            w-full
                            resize-none
                            rounded-xl
                            border
                            border-buildcv-border
                            bg-buildcv-background
                            px-4
                            py-3
                            text-sm
                            text-buildcv-text
                            outline-none
                            focus:border-buildcv-indigo
                          "
                        />
                      </div>
                    )
                  )}
                </div>

                <AddButton
                  label="+ Add Experience"
                  onClick={addExperience}
                />
              </section>
            )}

            {/* =================================================
                SKILLS
            ================================================= */}

            {activeStep === "skills" && (
              <section className="rounded-3xl border border-buildcv-border bg-buildcv-background p-5 shadow-buildcv-sm sm:p-7">

                <SectionHeader
                  title="Skills"
                  description="Add your most relevant technical and professional skills."
                />

                <div className="mt-6">
                  <label className="text-sm font-bold">
                    Skills
                  </label>

                  <textarea
                    value={formData.skills.join(
                      ", "
                    )}
                    onChange={(event) =>
                      updateSkills(
                        event.target.value
                      )
                    }
                    rows={5}
                    placeholder="React, JavaScript, TypeScript, Tailwind CSS, Git"
                    className="
                      mt-2
                      w-full
                      resize-none
                      rounded-xl
                      border
                      border-buildcv-border
                      bg-buildcv-navy
                      px-4
                      py-3
                      text-sm
                      text-buildcv-text
                      outline-none
                      focus:border-buildcv-indigo
                    "
                  />

                  <p className="mt-2 text-xs text-buildcv-text-muted">
                    Separate each skill with a comma.
                  </p>

                  {formData.skills.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {formData.skills.map(
                        (skill, index) => (
                          <span
                            key={`${skill}-${index}`}
                            className="
                              rounded-full
                              border
                              border-buildcv-indigo/30
                              bg-buildcv-indigo/10
                              px-3
                              py-1.5
                              text-xs
                              font-bold
                              text-buildcv-indigo-400
                            "
                          >
                            {skill}
                          </span>
                        )
                      )}
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* =================================================
                PROJECTS
            ================================================= */}

            {activeStep === "projects" && (
              <section className="rounded-3xl border border-buildcv-border bg-buildcv-background p-5 shadow-buildcv-sm sm:p-7">

                <SectionHeader
                  title="Projects"
                  description="Showcase projects that demonstrate your skills."
                />

                <div className="mt-6 space-y-5">
                  {formData.projects.map(
                    (project, index) => (
                      <div
                        key={project.id}
                        className="
                          rounded-2xl
                          border
                          border-buildcv-border
                          bg-buildcv-navy
                          p-5
                        "
                      >
                        <div className="mb-5 flex items-center justify-between">
                          <h3 className="font-bold">
                            Project {index + 1}
                          </h3>

                          {formData.projects
                            .length > 1 && (
                            <button
                              type="button"
                              onClick={() =>
                                removeProject(
                                  project.id
                                )
                              }
                              className="
                                text-xs
                                font-bold
                                text-red-400
                                hover:text-red-300
                              "
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                          <Input
                            label="Project Name"
                            value={project.name}
                            onChange={(value) =>
                              updateProject(
                                project.id,
                                "name",
                                value
                              )
                            }
                            placeholder="BuildCV"
                          />

                          <Input
                            label="Project Link"
                            value={project.link}
                            onChange={(value) =>
                              updateProject(
                                project.id,
                                "link",
                                value
                              )
                            }
                            placeholder="https://..."
                          />

                          <div className="sm:col-span-2">
                            <Input
                              label="Technologies"
                              value={
                                project.technologies
                              }
                              onChange={(value) =>
                                updateProject(
                                  project.id,
                                  "technologies",
                                  value
                                )
                              }
                              placeholder="React, Tailwind CSS, GSAP"
                            />
                          </div>
                        </div>

                        <textarea
                          value={
                            project.description
                          }
                          onChange={(event) =>
                            updateProject(
                              project.id,
                              "description",
                              event.target.value
                            )
                          }
                          rows={5}
                          placeholder="Describe your project..."
                          className="
                            mt-5
                            w-full
                            resize-none
                            rounded-xl
                            border
                            border-buildcv-border
                            bg-buildcv-background
                            px-4
                            py-3
                            text-sm
                            text-buildcv-text
                            outline-none
                            focus:border-buildcv-indigo
                          "
                        />
                      </div>
                    )
                  )}
                </div>

                <AddButton
                  label="+ Add Project"
                  onClick={addProject}
                />
              </section>
            )}

            {/* =================================================
                NAVIGATION
            ================================================= */}

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                disabled={safeStepIndex === 0}
                onClick={goToPreviousStep}
                className="
                  rounded-xl
                  border
                  border-buildcv-border
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-buildcv-text
                  transition
                  hover:border-buildcv-indigo
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                ← Previous
              </button>

              <button
                type="button"
                disabled={
                  safeStepIndex ===
                  BUILDER_STEPS.length - 1
                }
                onClick={goToNextStep}
                className="
                  rounded-xl
                  bg-buildcv-indigo
                  px-5
                  py-3
                  text-sm
                  font-bold
                  text-white
                  shadow-md
                  transition
                  hover:-translate-y-0.5
                  hover:bg-buildcv-indigo-600
                  disabled:cursor-not-allowed
                  disabled:opacity-40
                "
              >
                Next →
              </button>
            </div>

            {/* Reset */}

            <button
              type="button"
              onClick={resetBuilder}
              className="
                mt-5
                text-xs
                font-semibold
                text-buildcv-text-muted
                hover:text-red-400
              "
            >
              Clear all resume data
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

// =====================================================
// INPUT
// =====================================================

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="text-sm font-bold text-buildcv-text">
        {label}
      </label>

      <input
        type={type}
        value={value ?? ""}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder={placeholder}
        className="
          mt-2
          w-full
          rounded-xl
          border
          border-buildcv-border
          bg-buildcv-navy
          px-4
          py-3
          text-sm
          text-buildcv-text
          outline-none
          transition
          placeholder:text-buildcv-text-muted
          focus:border-buildcv-indigo
          focus:ring-2
          focus:ring-buildcv-indigo/20
        "
      />
    </div>
  )
}

// =====================================================
// SECTION HEADER
// =====================================================

function SectionHeader({
  title,
  description,
}) {
  return (
    <div>
      <h2
        className="
          font-display
          text-2xl
          font-extrabold
          tracking-tight
        "
      >
        {title}
      </h2>

      <p className="mt-2 text-sm leading-6 text-buildcv-text-secondary">
        {description}
      </p>
    </div>
  )
}

// =====================================================
// ADD BUTTON
// =====================================================

function AddButton({
  label,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        mt-5
        rounded-xl
        border
        border-buildcv-indigo/30
        bg-buildcv-indigo/10
        px-5
        py-3
        text-sm
        font-bold
        text-buildcv-indigo-400
        transition
        hover:border-buildcv-indigo
        hover:bg-buildcv-indigo
        hover:text-white
      "
    >
      {label}
    </button>
  )
}

export default Builder