function TechProPreview({ formData = {} }) {
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
        fullName: "Michael Anderson",
        jobTitle: "Senior Software Engineer",
        email: "michael@email.com",
        phone: "+1 555 789 1234",
        location: "Seattle, WA",
        linkedin: "linkedin.com/in/michael",
        github: "github.com/michael",
        summary:
          "Experienced software engineer specializing in scalable applications, cloud technologies, system architecture, and modern development practices.",
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
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "Python",
            "AWS",
            "Docker",
            "PostgreSQL",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "sample-experience-1",
              jobTitle: "Senior Software Engineer",
              company: "Cloud Systems Inc.",
              startDate: "2022",
              endDate: "Present",
              description:
                "Designed scalable applications, improved system performance, and collaborated with engineering teams to deliver reliable software products.",
            },
            {
              id: "sample-experience-2",
              jobTitle: "Software Engineer",
              company: "Tech Solutions",
              startDate: "2019",
              endDate: "2022",
              description:
                "Developed web applications, integrated APIs, and improved development workflows using modern engineering practices.",
            },
          ]

  const displayEducation =
    education.length > 0
      ? education
      : hasResumeData
        ? []
        : [
            {
              id: "sample-education-1",
              degree: "B.S. Computer Science",
              institution: "University of Washington",
              startDate: "2015",
              endDate: "2019",
            },
          ]

  const displayProjects =
    projects.length > 0
      ? projects
      : hasResumeData
        ? []
        : [
            {
              id: "sample-project-1",
              name: "Cloud Analytics Platform",
              technologies: "React • Node.js • AWS",
              description:
                "Built a scalable analytics platform for processing and visualizing business data.",
            },
            {
              id: "sample-project-2",
              name: "Developer API",
              technologies: "TypeScript • PostgreSQL • Docker",
              description:
                "Developed a REST API with authentication, database integration, and containerized deployment.",
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

  function getInitials(name = "") {
    const words = name
      .trim()
      .split(/\s+/)
      .filter(Boolean)

    if (words.length === 0) {
      return "CV"
    }

    if (words.length === 1) {
      return words[0]
        .slice(0, 2)
        .toUpperCase()
    }

    return (
      words[0][0] +
      words[words.length - 1][0]
    ).toUpperCase()
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div
      className="h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#0F172A",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="px-6 py-5"
        style={{
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
        }}
      >
        <div className="flex items-start justify-between gap-3">

          {/* NAME + TITLE */}

          <div className="min-w-0">

            <p
              className="mb-1 text-[5px] font-semibold uppercase tracking-[0.2em]"
              style={{
                color: "#A5B4FC",
              }}
            >
              Technology Professional
            </p>

            {displayPersonal.fullName && (
              <h1
                className="truncate text-[17px] font-extrabold tracking-tight"
                style={{
                  color: "#FFFFFF",
                }}
              >
                {displayPersonal.fullName}
              </h1>
            )}

            {displayPersonal.jobTitle && (
              <p
                className="mt-1 text-[6.5px] font-medium"
                style={{
                  color: "#CBD5E1",
                }}
              >
                {displayPersonal.jobTitle}
              </p>
            )}

          </div>

          {/* TECHNOLOGY BADGE */}

          <div
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border text-[6px] font-bold"
            style={{
              borderColor: "#818CF8",
              backgroundColor: "#312E81",
              color: "#C7D2FE",
            }}
          >
            TP
          </div>

        </div>

        {/* CONTACT */}

        <div
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px]"
          style={{
            color: "#CBD5E1",
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
          MAIN CONTENT
      ====================================================== */}

      <div className="grid grid-cols-[0.35fr_1fr]">

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

              <TechSideTitle>
                Profile
              </TechSideTitle>

              <p
                className="mt-2 text-[5.3px] leading-[1.6]"
                style={{
                  color: "#64748B",
                }}
              >
                {displayPersonal.summary}
              </p>

            </section>
          )}

          {/* CORE TECHNOLOGIES */}

          {displaySkills.length > 0 && (
            <section className="mb-5">

              <TechSideTitle>
                Core Skills
              </TechSideTitle>

              <div className="mt-2 space-y-1.5">

                {displaySkills
                  .slice(0, 10)
                  .map((skill, index) => {

                    const skillName =
                      getSkillName(skill)

                    if (!skillName) {
                      return null
                    }

                    return (
                      <div
                        key={skill?.id || index}
                        className="flex items-center gap-1.5"
                      >

                        <span
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{
                            backgroundColor: "#6366F1",
                          }}
                        />

                        <span
                          className="text-[4.8px] font-medium"
                          style={{
                            color: "#475569",
                          }}
                        >
                          {skillName}
                        </span>

                      </div>
                    )
                  })}

              </div>

            </section>
          )}

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <TechSideTitle>
                Education
              </TechSideTitle>

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
                      ],
                      "B.S. Computer Science"
                    )

                    const institution = getValue(
                      item,
                      [
                        "institution",
                        "school",
                        "university",
                        "college",
                      ],
                      "University of Washington"
                    )

                    const endDate = getValue(
                      item,
                      [
                        "endDate",
                        "end",
                        "to",
                      ],
                      "2019"
                    )

                    return (
                      <div
                        key={item.id || index}
                      >

                        <h3
                          className="text-[5.5px] font-bold"
                          style={{
                            color: "#0F172A",
                          }}
                        >
                          {degree}
                        </h3>

                        <p
                          className="mt-0.5 text-[4.8px]"
                          style={{
                            color: "#64748B",
                          }}
                        >
                          {institution}
                        </p>

                        <p
                          className="mt-0.5 text-[4.5px]"
                          style={{
                            color: "#94A3B8",
                          }}
                        >
                          {endDate}
                        </p>

                      </div>
                    )
                  })}

              </div>

            </section>
          )}

        </aside>

        {/* =================================================
            MAIN COLUMN
        ================================================== */}

        <main className="px-5 py-5">

          {/* EXPERIENCE */}

          {displayExperience.length > 0 && (
            <section className="mb-5">

              <TechMainTitle>
                Experience
              </TechMainTitle>

              <div className="mt-3 space-y-3">

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
                      ],
                      "Senior Software Engineer"
                    )

                    const company = getValue(
                      item,
                      [
                        "company",
                        "organization",
                        "employer",
                      ],
                      "Cloud Systems Inc."
                    )

                    const startDate = getValue(
                      item,
                      [
                        "startDate",
                        "start",
                        "from",
                      ],
                      "2022"
                    )

                    const endDate = getValue(
                      item,
                      [
                        "endDate",
                        "end",
                        "to",
                      ],
                      "Present"
                    )

                    const description = getValue(
                      item,
                      [
                        "description",
                        "details",
                        "responsibilities",
                      ],
                      "Designed scalable applications and collaborated with engineering teams."
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
                                  color: "#0F172A",
                                }}
                              >
                                {title}
                              </h3>
                            )}

                            {company && (
                              <p
                                className="mt-0.5 truncate text-[5.2px] font-medium"
                                style={{
                                  color: "#4F46E5",
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
                                color: "#94A3B8",
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
                              color: "#64748B",
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

          {/* PROJECTS */}

          {displayProjects.length > 0 && (
            <section>

              <TechMainTitle>
                Key Projects
              </TechMainTitle>

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
                      ],
                      "Cloud Analytics Platform"
                    )

                    const technologies =
                      getValue(
                        item,
                        [
                          "technologies",
                          "technology",
                          "techStack",
                          "stack",
                        ],
                        "React • Node.js • AWS"
                      )

                    const description =
                      getValue(
                        item,
                        [
                          "description",
                          "details",
                        ],
                        "Built a scalable technology platform."
                      )

                    return (
                      <article
                        key={item.id || index}
                        className="border p-2.5"
                        style={{
                          borderColor: "#E2E8F0",
                        }}
                      >

                        {name && (
                          <h3
                            className="text-[5.8px] font-bold"
                            style={{
                              color: "#0F172A",
                            }}
                          >
                            {name}
                          </h3>
                        )}

                        {technologies && (
                          <p
                            className="mt-0.5 text-[4.5px] font-medium"
                            style={{
                              color: "#4F46E5",
                            }}
                          >
                            {Array.isArray(
                              technologies
                            )
                              ? technologies.join(
                                  " • "
                                )
                              : technologies}
                          </p>
                        )}

                        {description && (
                          <p
                            className="mt-1 text-[4.8px] leading-[1.5]"
                            style={{
                              color: "#64748B",
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
   SIDEBAR TITLE
========================================================= */

function TechSideTitle({ children }) {
  return (
    <div>
      <h2
        className="text-[6px] font-bold uppercase tracking-[0.14em]"
        style={{
          color: "#4F46E5",
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
   MAIN SECTION TITLE
========================================================= */

function TechMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2
        className="shrink-0 text-[7px] font-bold uppercase tracking-[0.12em]"
        style={{
          color: "#0F172A",
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

export default TechProPreview