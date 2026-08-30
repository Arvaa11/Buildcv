function StartupPreview({ formData = {} }) {
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
        fullName: "Ryan Cooper",
        jobTitle: "Product Manager",
        email: "ryan@email.com",
        phone: "+1 555 234 7890",
        location: "Austin, TX",
        linkedin: "linkedin.com/in/ryan",
        github: "github.com/ryan",
        summary:
          "Product-focused professional experienced in building digital products, leading cross-functional teams, and turning ideas into scalable solutions.",
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
            "Product Strategy",
            "React",
            "JavaScript",
            "Figma",
            "Agile",
            "Leadership",
            "Analytics",
            "Git",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "startup-sample-experience-1",
              jobTitle: "Product Manager",
              company: "Launch Labs",
              startDate: "2022",
              endDate: "Present",
              description:
                "Led product development from idea to launch while collaborating with engineering, design, and business teams.",
            },
            {
              id: "startup-sample-experience-2",
              jobTitle: "Product Associate",
              company: "GrowthTech",
              startDate: "2020",
              endDate: "2022",
              description:
                "Supported product strategy, user research, feature planning, and performance analysis.",
            },
            {
              id: "startup-sample-experience-3",
              jobTitle: "Business Analyst",
              company: "Innovate Labs",
              startDate: "2018",
              endDate: "2020",
              description:
                "Analyzed user behavior, supported product planning, and helped teams improve digital experiences.",
            },
          ]

  const displayEducation =
    education.length > 0
      ? education
      : hasResumeData
        ? []
        : [
            {
              id: "startup-sample-education-1",
              degree: "B.S. Business Administration",
              institution: "University of Texas",
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
              id: "startup-sample-project-1",
              name: "Startup Platform",
              technologies:
                "React • Node.js • PostgreSQL",
              description:
                "Built and launched a SaaS platform that helped small businesses manage their daily operations.",
            },
            {
              id: "startup-sample-project-2",
              name: "Growth Dashboard",
              technologies:
                "React • Analytics • APIs",
              description:
                "Created a real-time dashboard for tracking product growth and user engagement.",
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
        className="px-6 py-5"
        style={{
          backgroundColor: "#111827",
          color: "#FFFFFF",
        }}
      >

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0 flex-1">

            <div className="mb-2 flex items-center gap-1.5">

              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{
                  backgroundColor: "#6366F1",
                }}
              />

              <p
                className="text-[5px] font-bold uppercase tracking-[0.2em]"
                style={{
                  color: "#E2E8F0",
                }}
              >
                Startup Professional
              </p>

            </div>

            {displayPersonal.fullName && (
              <h1 className="truncate text-[17px] font-extrabold tracking-tight">
                {displayPersonal.fullName}
              </h1>
            )}

            {displayPersonal.jobTitle && (
              <p
                className="mt-1 text-[6.5px] font-medium"
                style={{
                  color: "#E2E8F0",
                }}
              >
                {displayPersonal.jobTitle}
              </p>
            )}

          </div>

          {/* STARTUP BADGE */}

          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[7px] font-black"
            style={{
              backgroundColor: "#6366F1",
              color: "#FFFFFF",
            }}
          >
            GO
          </div>

        </div>

        {/* CONTACT */}

        <div
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px]"
          style={{
            color: "#E2E8F0",
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

          {displayPersonal.linkedin && (
            <span>{displayPersonal.linkedin}</span>
          )}

          {displayPersonal.github && (
            <span>{displayPersonal.github}</span>
          )}
        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="px-6 py-5">

        {/* =================================================
            SUMMARY
        ================================================== */}

        {displayPersonal.summary && (
          <section className="mb-5">

            <StartupSectionTitle>
              About
            </StartupSectionTitle>

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

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {displayExperience.length > 0 && (
          <section className="mb-5">

            <StartupSectionTitle>
              Experience
            </StartupSectionTitle>

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
                      className="relative pl-3"
                    >

                      {/* TIMELINE */}

                      <div
                        className="absolute left-0 top-1 h-full w-px"
                        style={{
                          backgroundColor: "#E2E8F0",
                        }}
                      />

                      <div
                        className="absolute left-[-2px] top-1 h-1.5 w-1.5 rounded-full"
                        style={{
                          backgroundColor: "#6366F1",
                        }}
                      />

                      <div className="flex items-start justify-between gap-3">

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
                              className="mt-0.5 truncate text-[5.2px] font-medium"
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
                          {description}
                        </p>
                      )}

                    </article>
                  )
                })}

            </div>

          </section>
        )}

        {/* =================================================
            PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section className="mb-5">

            <StartupSectionTitle>
              Products & Projects
            </StartupSectionTitle>

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
                      className="rounded-lg border p-2.5"
                      style={{
                        backgroundColor: "#F8FAFC",
                        borderColor: "#E2E8F0",
                      }}
                    >

                      <div className="mb-1.5 flex items-center justify-between">

                        {name && (
                          <h3
                            className="text-[5.8px] font-bold"
                            style={{
                              color: "#111827",
                            }}
                          >
                            {name}
                          </h3>
                        )}

                        <span
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{
                            backgroundColor: "#6366F1",
                          }}
                        />

                      </div>

                      {technologies && (
                        <p
                          className="text-[4.5px] font-medium"
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

        {/* =================================================
            BOTTOM GRID
        ================================================== */}

        <div className="grid grid-cols-[1fr_0.8fr] gap-5">

          {/* SKILLS */}

          {displaySkills.length > 0 && (
            <section>

              <StartupSectionTitle>
                Skills
              </StartupSectionTitle>

              <div className="mt-3 flex flex-wrap gap-1">

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
                        className="rounded-full border px-2 py-1 text-[4.7px] font-medium"
                        style={{
                          borderColor: "#E2E8F0",
                          color: "#475569",
                          backgroundColor: "#FFFFFF",
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

              <StartupSectionTitle>
                Education
              </StartupSectionTitle>

              <div className="mt-3 space-y-2">

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
                            className="text-[5.8px] font-bold"
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
                            className="mt-0.5 text-[5px]"
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

        </div>

      </div>
    </div>
  )
}


/* =========================================================
   STARTUP SECTION TITLE
========================================================= */

function StartupSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <span
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{
          backgroundColor: "#6366F1",
        }}
      />

      <h2
        className="shrink-0 text-[7px] font-bold uppercase tracking-[0.13em]"
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


export default StartupPreview