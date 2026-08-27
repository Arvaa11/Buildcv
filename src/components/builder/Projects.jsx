import { useEffect, useState } from "react"

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

    updateParent([...projects, newProject])
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
    const updatedProjects = projects.map((project) =>
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
    const input = technologyInputs[projectId]?.trim()

    if (!input) return

    const project = projects.find(
      (item) => item.id === projectId
    )

    if (!project) return

    const technologies = project.technologies || []

    const alreadyExists = technologies.some(
      (technology) =>
        technology.toLowerCase() === input.toLowerCase()
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

    const technologies = project.technologies || []

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

  return (
    <div
      className="
        overflow-hidden
        rounded-buildcv-2xl
        border
        border-buildcv-border
        bg-buildcv-card
        shadow-buildcv-sm
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <div
        className="
          border-b
          border-buildcv-border
          px-6
          py-6
          sm:px-8
        "
      >
        <span
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.16em]
            text-buildcv-indigo
          "
        >
          Step 6
        </span>

        <h2
          className="
            mt-2
            font-display
            text-2xl
            font-bold
            tracking-tight
            text-buildcv-primary
            sm:text-3xl
          "
        >
          Projects
        </h2>

        <p
          className="
            mt-2
            max-w-2xl
            text-sm
            leading-6
            text-buildcv-text-secondary
          "
        >
          Showcase projects that demonstrate your skills,
          experience, and achievements.
        </p>
      </div>


      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="p-6 sm:p-8">

        {/* =================================================
            PROJECT LIST
        ================================================= */}

        <div className="space-y-6">

          {projects.map((project, index) => {

            const technologies =
              project.technologies || []

            return (
              <div
                key={project.id}
                className="
                  rounded-buildcv-xl
                  border
                  border-buildcv-border
                  bg-buildcv-background
                  hover:border-buildcv-border-strong
                  p-5
                  sm:p-6
                "
              >

                {/* =========================================
                    PROJECT HEADER
                ========================================= */}

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

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-buildcv-indigo
                      "
                    >
                      Project {index + 1}
                    </span>

                    <h3
                      className="
                        mt-1
                        truncate
                        font-display
                        text-lg
                        font-bold
                        text-buildcv-primary
                      "
                    >
                      {project.name || "New Project"}
                    </h3>

                  </div>


                  {/* Remove */}

                  <button
                    type="button"
                    onClick={() =>
                      removeProject(project.id)
                    }
                    className="
                      shrink-0
                      rounded-buildcv-md
                      border
                      border-border-red-400/10
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


                {/* =========================================
                    FIELDS
                ========================================= */}

                <div className="grid grid-cols-1 gap-5">

                  {/* Project Name */}

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
                      Project Name
                    </label>

                    <input
                      id={`project-name-${project.id}`}
                      type="text"
                      value={project.name || ""}
                      onChange={(event) =>
                        updateProject(
                          project.id,
                          "name",
                          event.target.value
                        )
                      }
                      placeholder="e.g. BuildCV Resume Builder"
                      className="
                        w-full
    rounded-buildcv-lg
    border
    border-buildcv-border
    bg-buildcv-background
    px-4
    py-3
    text-sm
    font-medium
    text-buildcv-text
    outline-none
    transition-all
    duration-200
    placeholder:text-buildcv-text-muted
    hover:border-buildcv-border-strong
    focus:border-buildcv-indigo
    focus:bg-buildcv-navy
    focus:ring-4
    focus:ring-buildcv-indigo/10
                      "
                    />

                  </div>


                  {/* Description */}

                  <div>

                    <label
                      htmlFor={`project-description-${project.id}`}
                      className="
                        mb-2
                        block
                        text-sm
                        font-semibold
                        text-buildcv-text
                      "
                    >
                      Description
                    </label>

                    <textarea
                      id={`project-description-${project.id}`}
                      rows={5}
                      value={project.description || ""}
                      onChange={(event) =>
                        updateProject(
                          project.id,
                          "description",
                          event.target.value
                        )
                      }
                      placeholder="Explain what you built, what problem it solved, and what you achieved..."
                      className="
                        w-full
    rounded-buildcv-lg
    border
    border-buildcv-border
    bg-buildcv-background
    px-4
    py-3
    text-sm
    font-medium
    text-buildcv-text
    outline-none
    transition-all
    duration-200
    placeholder:text-buildcv-text-muted
    hover:border-buildcv-border-strong
    focus:border-buildcv-indigo
    focus:bg-buildcv-navy
    focus:ring-4
    focus:ring-buildcv-indigo/10
                      "
                    />

                    <p
                      className="
                        mt-2
                        text-xs
                        text-buildcv-text-muted
                      "
                    >
                      Focus on what you built, the problem you
                      solved, and the result.
                    </p>

                  </div>


                  {/* Technologies */}

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
                          technologyInputs[project.id] || ""
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
                        className="
                          w-full
    rounded-buildcv-lg
    border
    border-buildcv-border
    bg-buildcv-background
    px-4
    py-3
    text-sm
    font-medium
    text-buildcv-text
    outline-none
    transition-all
    duration-200
    placeholder:text-buildcv-text-muted
    hover:border-buildcv-border-strong
    focus:border-buildcv-indigo
    focus:bg-buildcv-navy
    focus:ring-4
    focus:ring-buildcv-indigo/10
                        "
                      />

                      <button
                        type="button"
                        onClick={() =>
                          addTechnology(project.id)
                        }
                        className="
                          w-full
    rounded-buildcv-lg
    border
    border-buildcv-border
    bg-buildcv-background
    px-4
    py-3
    text-sm
    font-medium
    text-buildcv-text
    outline-none
    transition-all
    duration-200
    placeholder:text-buildcv-text-muted
    hover:border-buildcv-border-strong
    focus:border-buildcv-indigo
    focus:bg-buildcv-navy
    focus:ring-4
    focus:ring-buildcv-indigo/10
                        "
                      >
                        Add
                      </button>

                    </div>


                    {/* Technology Tags */}

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
                                border-buildcv-border
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
                                  transition-colors
                                  hover:bg-buildcv-indigo
                                  hover:text-buildcv-primary
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


                  {/* =======================================
                      LINKS
                  ======================================= */}

                  <div
                    className="
                      grid
                      grid-cols-1
                      gap-5
                      sm:grid-cols-2
                    "
                  >

                    {/* Live Demo */}

                    <div>

                      <label
                        htmlFor={`live-url-${project.id}`}
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-buildcv-primary
                        "
                      >
                        Live Demo URL
                      </label>

                      <input
                        id={`live-url-${project.id}`}
                        type="url"
                        value={project.liveUrl || ""}
                        onChange={(event) =>
                          updateProject(
                            project.id,
                            "liveUrl",
                            event.target.value
                          )
                        }
                        placeholder="https://example.com"
                        className="
                          w-full
                          rounded-buildcv-md
                          border
                          border-buildcv-border
                          bg-buildcv-navy
                          px-4
                          py-3
                          text-sm
                          text-buildcv-primary
                          outline-none
                          transition-all
                          placeholder:text-buildcv-text-muted
                          focus:border-buildcv-indigo/60
                          focus:ring-4
                          focus:ring-buildcv-indigo/10
                        "
                      />

                    </div>


                    {/* GitHub */}

                    <div>

                      <label
                        htmlFor={`github-url-${project.id}`}
                        className="
                          mb-2
                          block
                          text-sm
                          font-semibold
                          text-buildcv-primary
                        "
                      >
                        GitHub URL
                      </label>

                      <input
                        id={`github-url-${project.id}`}
                        type="url"
                        value={project.githubUrl || ""}
                        onChange={(event) =>
                          updateProject(
                            project.id,
                            "githubUrl",
                            event.target.value
                          )
                        }
                        placeholder="https://github.com/username/project"
                        className="
                          w-full
                          rounded-buildcv-md
                          border
                          border-buildcv-border
                          bg-buildcv-navy
                          px-4
                          py-3
                          text-sm
                          text-buildcv-primary
                          outline-none
                          transition-all
                          placeholder:text-buildcv-text-muted
                          focus:border-buildcv-indigo/60
                          focus:ring-4
                          focus:ring-buildcv-indigo/10
                        "
                      />

                    </div>

                  </div>

                </div>

              </div>
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
                border-buildcv-gold/20
                bg-buildcv-gold/10
                text-xl
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
                text-buildcv-primary
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
            ADD PROJECT
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
            rounded-buildcv-md
            border
            border-dashed
            border-buildcv-indigo/40
            bg-buildcv-indigo/5
            px-5
            py-3
            text-sm
            font-semibold
            text-buildcv-indigo
            transition-all
            duration-200
            hover:border-buildcv-indigo
            hover:bg-buildcv-indigo
            hover:text-buildcv-primary
          "
        >
          <span className="text-lg leading-none">
            +
          </span>

          Add Another Project
        </button>

      </div>

    </div>
  )
}

export default Projects