import { useEffect, useState } from "react"

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

function Projects({ formData, setFormData }) {
  const [projects, setProjects] = useState(
    formData.projects || []
  )

  const [technologyInputs, setTechnologyInputs] = useState({})

  // =====================================================
  // SYNC WITH BUILDER
  // =====================================================

  useEffect(() => {
    setProjects(formData.projects || [])
  }, [formData.projects])

  // =====================================================
  // UPDATE BUILDER
  // =====================================================

  const updateParent = (updatedProjects) => {
    setProjects(updatedProjects)

    setFormData((previous) => ({
      ...previous,
      projects: updatedProjects,
    }))
  }

  // =====================================================
  // ADD PROJECT
  // =====================================================

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      name: "",
      description: "",
      technologies: [],
      liveUrl: "",
      githubUrl: "",
    }

    updateParent([
      ...projects,
      newProject,
    ])
  }

  // =====================================================
  // REMOVE PROJECT
  // =====================================================

  const removeProject = (id) => {
    const updatedProjects = projects.filter(
      (project) => project.id !== id
    )

    updateParent(updatedProjects)

    setTechnologyInputs((previous) => {
      const updated = { ...previous }
      delete updated[id]
      return updated
    })
  }

  // =====================================================
  // UPDATE PROJECT
  // =====================================================

  const updateProject = (id, field, value) => {
    const updatedProjects = projects.map(
      (project) =>
        project.id === id
          ? {
            ...project,
            [field]: value,
          }
          : project
    )

    updateParent(updatedProjects)
  }

  // =====================================================
  // ADD TECHNOLOGY
  // =====================================================

  const addTechnology = (projectId) => {
    const input =
      technologyInputs[projectId]?.trim()

    if (!input) return

    const project = projects.find(
      (item) => item.id === projectId
    )

    if (!project) return

    const technologies =
      project.technologies || []

    const alreadyExists =
      technologies.some(
        (technology) =>
          technology.toLowerCase() ===
          input.toLowerCase()
      )

    if (alreadyExists) {
      setTechnologyInputs((previous) => ({
        ...previous,
        [projectId]: "",
      }))

      return
    }

    updateProject(
      projectId,
      "technologies",
      [...technologies, input]
    )

    setTechnologyInputs((previous) => ({
      ...previous,
      [projectId]: "",
    }))
  }

  // =====================================================
  // REMOVE TECHNOLOGY
  // =====================================================

  const removeTechnology = (
    projectId,
    technologyToRemove
  ) => {
    const project = projects.find(
      (item) => item.id === projectId
    )

    if (!project) return

    const technologies =
      project.technologies || []

    updateProject(
      projectId,
      "technologies",
      technologies.filter(
        (technology) =>
          technology !== technologyToRemove
      )
    )
  }

  // =====================================================
  // TECHNOLOGY KEYBOARD
  // =====================================================

  const handleTechnologyKeyDown = (
    event,
    projectId
  ) => {
    if (event.key === "Enter") {
      event.preventDefault()
      addTechnology(projectId)
    }
  }

  // =====================================================
  // INPUT STYLE
  // =====================================================

  const inputClass = `
    w-full
    rounded-lg
    border
    border-[#E2E8F0]
    bg-white
    px-4
    py-3
    text-sm
    font-medium
    text-[#111827]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#718096]
    hover:border-[#CBD5E1]
    focus:border-[#6366F1]
    focus:ring-4
    focus:ring-[#6366F1]/10
  `

  // =====================================================
  // OPTIONAL SECTION HELPERS
  // =====================================================

  const optionalSections = [
    {
      key: "certifications",
      label: "Certifications",
    },
    {
      key: "languages",
      label: "Languages",
    },
    {
      key: "achievements",
      label: "Achievements",
    },
    {
      key: "interests",
      label: "Interests",
    },
    {
      key: "references",
      label: "References",
    },
  ]

  const isOptionalEnabled = (key) =>
    Boolean(formData?.[key]?.enabled)

  const toggleOptionalSection = (key) => {
    setFormData((previous) => {
      const currentlyEnabled =
        Boolean(previous?.[key]?.enabled)

      if (key === "certifications") {
        return {
          ...previous,
          certifications: {
            enabled: !currentlyEnabled,
            items:
              previous?.certifications?.items ||
              [],
          },
        }
      }

      if (key === "languages") {
        return {
          ...previous,
          languages: {
            enabled: !currentlyEnabled,
            items:
              previous?.languages?.items ||
              [],
          },
        }
      }

      if (key === "achievements") {
        return {
          ...previous,
          achievements: {
            enabled: !currentlyEnabled,
            items:
              previous?.achievements?.items ||
              [],
          },
        }
      }

      if (key === "interests") {
        return {
          ...previous,
          interests: {
            enabled: !currentlyEnabled,
            value:
              previous?.interests?.value ||
              "",
          },
        }
      }

      if (key === "references") {
        return {
          ...previous,
          references: {
            enabled: !currentlyEnabled,
            items:
              previous?.references?.items ||
              [],
          },
        }
      }

      return previous
    })
  }

  // =====================================================
  // OPTIONAL SECTION UPDATE
  // =====================================================

  const updateOptionalSection = (
    section,
    value
  ) => {
    setFormData((previous) => ({
      ...previous,
      [section]: value,
    }))
  }

  // =====================================================
  // ADD OPTIONAL ITEM
  // =====================================================

  const addOptionalItem = (
    section,
    item
  ) => {
    setFormData((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        items: [
          ...(previous?.[section]?.items || []),
          {
            id: createId(),
            ...item,
          },
        ],
      },
    }))
  }

  // =====================================================
  // REMOVE OPTIONAL ITEM
  // =====================================================

  const removeOptionalItem = (
    section,
    id
  ) => {
    setFormData((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        items: (
          previous?.[section]?.items || []
        ).filter(
          (item) => item.id !== id
        ),
      },
    }))
  }

  // =====================================================
  // UPDATE OPTIONAL ITEM
  // =====================================================

  const updateOptionalItem = (
    section,
    id,
    field,
    value
  ) => {
    setFormData((previous) => ({
      ...previous,
      [section]: {
        ...previous[section],
        items: (
          previous?.[section]?.items || []
        ).map((item) =>
          item.id === id
            ? {
              ...item,
              [field]: value,
            }
            : item
        ),
      },
    }))
  }

  return (
    <section
      className="
        flex
        h-[calc(100vh-190px)]
        min-h-[740px]
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-[#E2E8F0]
        bg-white
      "
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className="
          border-b
          border-buildcv-border
          bg-white
          px-5
          py-6
          sm:px-7
          sm:py-7
        "
      >

        <div className="flex items-start gap-4">

          {/* Icon */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-buildcv-md
              border
              border-[#E0E7FF]
              bg-[#EEF2FF]
              text-buildcv-indigo
            "
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
              />

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h6M9 16h4"
              />
            </svg>
          </div>

          {/* Text */}

          <div>

            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.14em]
                text-buildcv-indigo
              "
            >
              Step 05
            </p>

            <h2
              className="
                mt-1.5
                font-display
                text-2xl
                font-bold
                tracking-tight
                text-buildcv-text
                sm:text-3xl
              "
            >
              Projects
            </h2>

            <p
              className="
                mt-2
                max-w-xl
                text-sm
                leading-6
                text-buildcv-text-secondary
              "
            >
              Showcase projects that demonstrate your skills,
              experience, and achievements.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          p-5
          sm:p-7
        "
      >

        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <div className="space-y-6">

          {projects.map((project, index) => {

            const technologies =
              project.technologies || []

            return (

              <article
                key={project.id}
                className="
                  rounded-buildcv-xl
                  border
                  border-buildcv-border
                  bg-buildcv-background
                  p-5
                  transition-colors
                  duration-200
                  hover:border-buildcv-border-strong
                  sm:p-6
                "
              >

                {/* PROJECT HEADER */}

                <div
                  className="
                    mb-6
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >

                  <div className="min-w-0">

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-buildcv-indigo
                      "
                    >
                      Project {index + 1}
                    </p>

                    <h3
                      className="
                        mt-1
                        truncate
                        font-display
                        text-lg
                        font-bold
                        text-buildcv-text
                      "
                    >
                      {project.name ||
                        "New project"}
                    </h3>

                    {project.technologies?.length > 0 && (
                      <p
                        className="
                          mt-1
                          text-xs
                          text-buildcv-text-secondary
                        "
                      >
                        {project.technologies.length}{" "}
                        {project.technologies.length === 1
                          ? "technology"
                          : "technologies"}
                      </p>
                    )}

                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeProject(project.id)
                    }
                    className="
                      shrink-0
                      rounded-buildcv-md
                      border
                      border-red-400/10
                      px-3
                      py-2
                      text-xs
                      font-semibold
                      text-red-400
                      transition-all
                      duration-200
                      hover:border-red-400/20
                      hover:bg-red-400/10
                    "
                  >
                    Remove
                  </button>

                </div>


                {/* FIELDS */}

                <div className="grid grid-cols-1 gap-5">

                  {/* PROJECT NAME */}

                  <div>

                    <label
                      htmlFor={`project-name-${project.id}`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-buildcv-text
                      "
                    >
                      Project name
                    </label>

                    <input
                      id={`project-name-${project.id}`}
                      type="text"
                      value={
                        project.name || ""
                      }
                      onChange={(event) =>
                        updateProject(
                          project.id,
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="e.g. BuildCV Resume Builder"
                      className={inputClass}
                    />

                  </div>


                  {/* DESCRIPTION */}

                  <div>

                    <div className="mb-2 flex items-center justify-between">

                      <label
                        htmlFor={`project-description-${project.id}`}
                        className="
                          text-sm
                          font-semibold
                          text-buildcv-text
                        "
                      >
                        Description
                      </label>

                      <span
                        className="
                          text-[10px]
                          text-buildcv-text-muted
                        "
                      >
                        Optional
                      </span>

                    </div>

                    <textarea
                      id={`project-description-${project.id}`}
                      rows={5}
                      value={
                        project.description ||
                        ""
                      }
                      maxLength={1000}
                      onChange={(event) =>
                        updateProject(
                          project.id,
                          "description",
                          event.target.value
                        )
                      }
                      placeholder="Explain what you built, what problem it solved, and what you achieved..."
                      className={`
                        ${inputClass}
                        resize-none
                        leading-6
                      `}
                    />

                    <div
                      className="
                        mt-2
                        flex
                        items-center
                        justify-between
                      "
                    >

                      <p
                        className="
                          text-xs
                          text-buildcv-text-muted
                        "
                      >
                        Focus on the problem, your solution,
                        and the result.
                      </p>

                      <span
                        className="
                          shrink-0
                          text-[10px]
                          text-buildcv-text-muted
                        "
                      >
                        {project.description?.length ||
                          0}/1000
                      </span>

                    </div>

                  </div>


                  {/* TECHNOLOGIES */}

                  <div>

                    <label
                      htmlFor={`technology-${project.id}`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-buildcv-text
                      "
                    >
                      Technologies
                    </label>

                    <div
                      className="
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                      "
                    >

                      <input
                        id={`technology-${project.id}`}
                        type="text"
                        value={
                          technologyInputs[
                            project.id
                          ] || ""
                        }
                        onChange={(event) =>
                          setTechnologyInputs(
                            (previous) => ({
                              ...previous,
                              [project.id]:
                                event.target.value,
                            })
                          )
                        }
                        onKeyDown={(event) =>
                          handleTechnologyKeyDown(
                            event,
                            project.id
                          )
                        }
                        placeholder="e.g. React"
                        className={`
                          ${inputClass}
                          sm:flex-1
                        `}
                      />

                      <button
                        type="button"
                        onClick={() =>
                          addTechnology(
                            project.id
                          )
                        }
                        className="
                          rounded-buildcv-lg
                          border
                          border-buildcv-indigo/30
                          bg-buildcv-indigo/10
                          px-6
                          py-3
                          text-sm
                          font-semibold
                          text-buildcv-indigo
                          transition-all
                          duration-200
                          hover:border-buildcv-indigo/50
                          hover:bg-buildcv-indigo/20
                          focus:outline-none
                          focus:ring-4
                          focus:ring-buildcv-indigo
                        "
                      >
                        Add
                      </button>

                    </div>


                    {/* TECHNOLOGY TAGS */}

                    {technologies.length > 0 && (

                      <div
                        className="
                          mt-4
                          flex
                          flex-wrap
                          gap-2
                        "
                      >

                        {technologies.map(
                          (technology) => (

                            <div
                              key={technology}
                              className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-buildcv-indigo/20
                                bg-buildcv-indigo/10
                                px-3
                                py-1.5
                                text-xs
                                font-semibold
                                text-buildcv-indigo
                              "
                            >

                              <span>
                                {technology}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  removeTechnology(
                                    project.id,
                                    technology
                                  )
                                }
                                aria-label={`Remove ${technology}`}
                                className="
                                  flex
                                  h-4
                                  w-4
                                  items-center
                                  justify-center
                                  rounded-full
                                  text-buildcv-indigo
                                  transition-all
                                  duration-150
                                  hover:bg-buildcv-indigo
                                  hover:text-white
                                "
                              >
                                ×
                              </button>

                            </div>

                          )
                        )}

                      </div>

                    )}

                    <p
                      className="
                        mt-2
                        text-xs
                        text-buildcv-text-muted
                      "
                    >
                      Press Enter or click Add to add a
                      technology.
                    </p>

                  </div>


                  {/* PROJECT LINKS */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-5
                      sm:grid-cols-2
                    "
                  >

                    {/* LIVE DEMO */}

                    <div>

                      <label
                        htmlFor={`live-url-${project.id}`}
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-buildcv-text
                        "
                      >
                        Live demo URL
                      </label>

                      <input
                        id={`live-url-${project.id}`}
                        type="url"
                        value={
                          project.liveUrl || ""
                        }
                        onChange={(event) =>
                          updateProject(
                            project.id,
                            "liveUrl",
                            event.target.value
                          )
                        }
                        placeholder="https://example.com"
                        autoComplete="url"
                        className={inputClass}
                      />

                    </div>


                    {/* GITHUB */}

                    <div>

                      <label
                        htmlFor={`github-url-${project.id}`}
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-buildcv-text
                        "
                      >
                        GitHub URL
                      </label>

                      <input
                        id={`github-url-${project.id}`}
                        type="url"
                        value={
                          project.githubUrl || ""
                        }
                        onChange={(event) =>
                          updateProject(
                            project.id,
                            "githubUrl",
                            event.target.value
                          )
                        }
                        placeholder="https://github.com/username/project"
                        autoComplete="url"
                        className={inputClass}
                      />

                    </div>

                  </div>

                </div>

              </article>

            )
          })}

        </div>


        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {projects.length === 0 && (

          <div
            className="
              rounded-buildcv-xl
              border
              border-dashed
              border-buildcv-border
              bg-buildcv-background
              px-6
              py-12
              text-center
            "
          >

            <div
              className="
                mx-auto
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-buildcv-indigo/20
                bg-buildcv-indigo/10
                text-xl
                font-bold
                text-buildcv-indigo
              "
            >
              +
            </div>

            <h3
              className="
                mt-4
                font-display
                text-lg
                font-bold
                text-buildcv-text
              "
            >
              Add your projects
            </h3>

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
              Showcase personal, academic, freelance, or
              professional projects.
            </p>

          </div>

        )}


        {/* =================================================
            ADD PROJECT BUTTON
        ================================================= */}

        <button
          type="button"
          onClick={addProject}
          className="
            mt-6
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-buildcv-lg
            border
            border-dashed
            border-buildcv-indigo/30
            bg-buildcv-indigo/5
            px-5
            py-3.5
            text-sm
            font-semibold
            text-buildcv-indigo
            transition-all
            duration-200
            hover:border-buildcv-indigo/50
            hover:bg-buildcv-indigo/10
            focus:outline-none
            focus:ring-4
            focus:ring-buildcv-indigo/10
          "
        >

          <span className="text-lg leading-none">
            +
          </span>

          Add another project

        </button>

      </div>

    </section>
  )
}

export default Projects