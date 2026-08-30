function DeveloperPreview({ formData = {} }) {
  // =====================================================
  // PERSONAL DATA
  // =====================================================

  const personal = formData.personal || {}

  const {
    fullName = "",
    jobTitle = "",
    email = "",
    phone = "",
    location = "",
    linkedin = "",
    github = "",
    summary = "",
    profileImage = "",
  } = personal

  // =====================================================
  // OTHER DATA
  // =====================================================

  const skills = Array.isArray(formData.skills)
    ? formData.skills
    : []

  const experience = Array.isArray(formData.experience)
    ? formData.experience
    : []

  const education = Array.isArray(formData.education)
    ? formData.education
    : []

  const projects = Array.isArray(formData.projects)
    ? formData.projects
    : []

  // =====================================================
  // CHECK WHETHER RESUME IS EMPTY
  // =====================================================

  const hasResumeData =
    fullName.trim() ||
    jobTitle.trim() ||
    email.trim() ||
    phone.trim() ||
    location.trim() ||
    linkedin.trim() ||
    github.trim() ||
    summary.trim() ||
    profileImage ||
    skills.length > 0 ||
    experience.length > 0 ||
    education.length > 0 ||
    projects.length > 0

  // =====================================================
  // SAMPLE PERSONAL DATA
  // =====================================================

  const displayPersonal = hasResumeData
    ? {
        fullName,
        jobTitle,
        email,
        phone,
        location,
        linkedin,
        github,
        summary,
        profileImage,
      }
    : {
        fullName: "Daniel Carter",
        jobTitle: "Frontend Developer",
        email: "daniel@email.com",
        phone: "+1 555 678 9012",
        location: "San Francisco, CA",
        linkedin: "linkedin.com/in/daniel",
        github: "github.com/daniel",
        summary:
          "Frontend developer focused on building responsive, accessible, and scalable web applications using modern JavaScript technologies.",
        profileImage: "",
      }

  // =====================================================
  // FALLBACK DATA
  // =====================================================

  const displaySkills =
    skills.length > 0
      ? skills
      : hasResumeData
        ? []
        : [
            "React",
            "JavaScript",
            "TypeScript",
            "Next.js",
            "Node.js",
            "Git",
            "Tailwind CSS",
            "REST APIs",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "developer-sample-experience-1",
              jobTitle: "Frontend Developer",
              company: "Tech Labs",
              startDate: "2022",
              endDate: "Present",
              description:
                "Built responsive React applications, reusable components, and scalable frontend architecture for modern web products.",
            },
            {
              id: "developer-sample-experience-2",
              jobTitle: "Web Developer",
              company: "Digital Works",
              startDate: "2020",
              endDate: "2022",
              description:
                "Developed interactive websites and integrated REST APIs while improving performance and user experience.",
            },
            {
              id: "developer-sample-experience-3",
              jobTitle: "Junior Web Developer",
              company: "Creative Studio",
              startDate: "2018",
              endDate: "2020",
              description:
                "Created responsive websites, reusable UI components, and interactive frontend experiences.",
            },
          ]

  const displayEducation =
    education.length > 0
      ? education
      : hasResumeData
        ? []
        : [
            {
              id: "developer-sample-education-1",
              degree: "BS Computer Science",
              institution: "University of Technology",
              field: "",
              startDate: "2016",
              endDate: "2020",
            },
          ]

  const displayProjects =
    projects.length > 0
      ? projects
      : hasResumeData
        ? []
        : [
            {
              id: "developer-sample-project-1",
              name: "BuildCV",
              technologies:
                "React • Tailwind CSS • JavaScript",
              description:
                "A professional resume builder with templates and live resume previews.",
            },
            {
              id: "developer-sample-project-2",
              name: "Developer Dashboard",
              technologies:
                "React • TypeScript • REST API",
              description:
                "A responsive dashboard for monitoring projects and application data.",
            },
          ]

  // =====================================================
  // HELPERS
  // =====================================================

  function getValue(item, keys, fallback = "") {
    for (const key of keys) {
      if (
        item &&
        item[key] !== undefined &&
        item[key] !== null &&
        String(item[key]).trim() !== ""
      ) {
        return item[key]
      }
    }

    return fallback
  }

  function getSkillName(skill) {
    if (typeof skill === "string") {
      return skill
    }

    return getValue(
      skill,
      ["name", "skill", "title"],
      ""
    )
  }

  function getTechnologies(item) {
    const technologies = getValue(
      item,
      [
        "technologies",
        "technology",
        "techStack",
        "stack",
      ],
      ""
    )

    if (Array.isArray(technologies)) {
      return technologies.join(" • ")
    }

    return technologies
  }

  return (
    <div
      className="h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#111827",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="border-b px-6 py-5"
        style={{
          borderColor: "#111827",
        }}
      >
        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0 flex-1">

            <p
              className="mb-1 text-[5.5px] font-bold uppercase tracking-[0.2em]"
              style={{
                color: "#6366F1",
              }}
            >
              Software Developer
            </p>

            {displayPersonal.fullName && (
              <h1
                className="truncate text-[17px] font-extrabold tracking-tight"
                style={{
                  color: "#111827",
                }}
              >
                {displayPersonal.fullName}
              </h1>
            )}

            {displayPersonal.jobTitle && (
              <p
                className="mt-1 text-[6.5px] font-medium"
                style={{
                  color: "#475569",
                }}
              >
                {displayPersonal.jobTitle}
              </p>
            )}

          </div>

          {/* DEVELOPER BADGE */}

          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[6px] font-bold"
            style={{
              backgroundColor: "#111827",
              color: "#FFFFFF",
            }}
          >
            {"</>"}
          </div>

        </div>

        {/* CONTACT */}

        <div
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px]"
          style={{
            color: "#718096",
          }}
        >
          {displayPersonal.email && (
            <span>{displayPersonal.email}</span>
          )}

          {displayPersonal.phone && (
            <span>{displayPersonal.phone}</span>
          )}

          {displayPersonal.location && (
            <span>{displayPersonal.location}</span>
          )}

          {displayPersonal.github && (
            <span>{displayPersonal.github}</span>
          )}

          {displayPersonal.linkedin && (
            <span>{displayPersonal.linkedin}</span>
          )}
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="grid grid-cols-[0.34fr_1fr]">

        {/* =================================================
            SIDEBAR
        ================================================== */}

        <aside
          className="border-r px-4 py-5"
          style={{
            backgroundColor: "#F8FAFC",
            borderColor: "#E2E8F0",
          }}
        >

          {/* PROFILE */}

          {displayPersonal.summary && (
            <section className="mb-5">

              <DeveloperSideTitle>
                Profile
              </DeveloperSideTitle>

              <p
                className="mt-2 text-[5.5px] leading-[1.6]"
                style={{
                  color: "#475569",
                }}
              >
                {displayPersonal.summary}
              </p>

            </section>
          )}

          {/* TECH STACK */}

          {displaySkills.length > 0 && (
            <section className="mb-5">

              <DeveloperSideTitle>
                Tech Stack
              </DeveloperSideTitle>

              <div className="mt-2 flex flex-wrap gap-1">

                {displaySkills
                  .slice(0, 10)
                  .map((skill, index) => {
                    const skillName =
                      getSkillName(skill)

                    if (!skillName) {
                      return null
                    }

                    return (
                      <span
                        key={skill?.id || index}
                        className="rounded px-1.5 py-1 text-[4.8px] font-semibold"
                        style={{
                          backgroundColor: "#EEF2FF",
                          color: "#6366F1",
                        }}
                      >
                        {skillName}
                      </span>
                    )
                  })}

              </div>

            </section>
          )}

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <DeveloperSideTitle>
                Education
              </DeveloperSideTitle>

              <div className="mt-2 space-y-2">

                {displayEducation
                  .slice(0, 2)
                  .map((item, index) => {

                    const degree = getValue(
                      item,
                      [
                        "degree",
                        "qualification",
                        "title",
                        "program",
                      ]
                    )

                    const field = getValue(
                      item,
                      [
                        "field",
                        "major",
                        "specialization",
                      ]
                    )

                    const institution = getValue(
                      item,
                      [
                        "institution",
                        "school",
                        "university",
                        "college",
                      ]
                    )

                    const startDate = getValue(
                      item,
                      [
                        "startDate",
                        "start",
                        "from",
                      ]
                    )

                    const endDate = getValue(
                      item,
                      [
                        "endDate",
                        "end",
                        "to",
                      ]
                    )

                    return (
                      <div
                        key={item.id || index}
                      >

                        {degree && (
                          <h3
                            className="text-[5.5px] font-bold leading-[1.4]"
                            style={{
                              color: "#111827",
                            }}
                          >
                            {degree}

                            {field
                              ? ` — ${field}`
                              : ""}
                          </h3>
                        )}

                        {institution && (
                          <p
                            className="mt-0.5 text-[4.8px] leading-[1.4]"
                            style={{
                              color: "#475569",
                            }}
                          >
                            {institution}
                          </p>
                        )}

                        {(startDate || endDate) && (
                          <p
                            className="mt-0.5 text-[4.5px]"
                            style={{
                              color: "#718096",
                            }}
                          >
                            {startDate}

                            {startDate && endDate
                              ? " — "
                              : ""}

                            {endDate}
                          </p>
                        )}

                      </div>
                    )
                  })}

              </div>

            </section>
          )}

        </aside>

        {/* =================================================
            MAIN CONTENT
        ================================================== */}

        <main className="px-5 py-5">

          {/* EXPERIENCE */}

          {displayExperience.length > 0 && (
            <section className="mb-5">

              <DeveloperMainTitle>
                Experience
              </DeveloperMainTitle>

              <div className="mt-3 space-y-3.5">

                {displayExperience
                  .slice(0, 3)
                  .map((item, index) => {

                    const title = getValue(
                      item,
                      [
                        "jobTitle",
                        "position",
                        "title",
                        "role",
                      ]
                    )

                    const company = getValue(
                      item,
                      [
                        "company",
                        "organization",
                        "employer",
                      ]
                    )

                    const startDate = getValue(
                      item,
                      [
                        "startDate",
                        "start",
                        "from",
                      ]
                    )

                    const endDate = getValue(
                      item,
                      [
                        "endDate",
                        "end",
                        "to",
                      ]
                    )

                    const description = getValue(
                      item,
                      [
                        "description",
                        "details",
                        "responsibilities",
                      ]
                    )

                    return (
                      <article
                        key={item.id || index}
                      >

                        <div className="flex items-start justify-between gap-2">

                          <div className="min-w-0">

                            {title && (
                              <h3
                                className="truncate text-[6.5px] font-bold"
                                style={{
                                  color: "#111827",
                                }}
                              >
                                {title}
                              </h3>
                            )}

                            {company && (
                              <p
                                className="mt-0.5 truncate text-[5.3px] font-medium"
                                style={{
                                  color: "#6366F1",
                                }}
                              >
                                {company}
                              </p>
                            )}

                          </div>

                          {(startDate || endDate) && (
                            <span
                              className="shrink-0 text-[4.7px]"
                              style={{
                                color: "#718096",
                              }}
                            >
                              {startDate}

                              {startDate && endDate
                                ? " — "
                                : ""}

                              {endDate}
                            </span>
                          )}

                        </div>

                        {description && (
                          <p
                            className="mt-1 text-[5.2px] leading-[1.55]"
                            style={{
                              color: "#475569",
                            }}
                          >
                            • {description}
                          </p>
                        )}

                      </article>
                    )
                  })}

              </div>

            </section>
          )}

          {/* PROJECTS */}

          {displayProjects.length > 0 && (
            <section>

              <DeveloperMainTitle>
                Projects
              </DeveloperMainTitle>

              <div className="mt-3 grid grid-cols-2 gap-2">

                {displayProjects
                  .slice(0, 2)
                  .map((item, index) => {

                    const name = getValue(
                      item,
                      [
                        "name",
                        "projectName",
                        "title",
                      ]
                    )

                    const technologies =
                      getTechnologies(item)

                    const description =
                      getValue(
                        item,
                        [
                          "description",
                          "details",
                        ]
                      )

                    return (
                      <article
                        key={item.id || index}
                        className="rounded border p-2.5"
                        style={{
                          borderColor: "#E2E8F0",
                          backgroundColor: "#FFFFFF",
                        }}
                      >

                        {name && (
                          <h3
                            className="text-[6px] font-bold"
                            style={{
                              color: "#111827",
                            }}
                          >
                            {name}
                          </h3>
                        )}

                        {technologies && (
                          <p
                            className="mt-0.5 text-[4.5px] font-medium"
                            style={{
                              color: "#6366F1",
                            }}
                          >
                            {technologies}
                          </p>
                        )}

                        {description && (
                          <p
                            className="mt-1 text-[4.8px] leading-[1.5]"
                            style={{
                              color: "#475569",
                            }}
                          >
                            {description}
                          </p>
                        )}

                      </article>
                    )
                  })}

              </div>

            </section>
          )}

        </main>

      </div>
    </div>
  )
}


/* =========================================================
   DEVELOPER SIDEBAR TITLE
========================================================= */

function DeveloperSideTitle({ children }) {
  return (
    <div>

      <h2
        className="text-[6px] font-bold uppercase tracking-[0.15em]"
        style={{
          color: "#6366F1",
        }}
      >
        {children}
      </h2>

      <div
        className="mt-1.5 h-[2px] w-5"
        style={{
          backgroundColor: "#6366F1",
        }}
      />

    </div>
  )
}


/* =========================================================
   DEVELOPER MAIN TITLE
========================================================= */

function DeveloperMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2
        className="shrink-0 text-[7px] font-bold uppercase tracking-[0.14em]"
        style={{
          color: "#111827",
        }}
      >
        {children}
      </h2>

      <div
        className="h-px flex-1"
        style={{
          backgroundColor: "#E2E8F0",
        }}
      />

    </div>
  )
}


export default DeveloperPreview