function ATSFocusPreview({ formData = {} }) {
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
        summary,
        profileImage,
      }
    : {
        fullName: "Sarah Thompson",
        jobTitle: "Marketing Specialist",
        email: "sarah@email.com",
        phone: "+1 555 456 7890",
        location: "New York, NY",
        linkedin: "linkedin.com/in/sarah",
        summary:
          "Results-driven professional with experience in marketing, project coordination, data analysis, and developing strategies that support business growth.",
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
            "Marketing",
            "Project Management",
            "Data Analysis",
            "SEO",
            "Content Strategy",
            "Microsoft Excel",
            "Google Analytics",
            "Communication",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "ats-sample-experience-1",
              jobTitle: "Marketing Specialist",
              company: "Growth Solutions",
              startDate: "2022",
              endDate: "Present",
              description:
                "Developed marketing campaigns, analyzed performance data, and collaborated with cross-functional teams to improve customer engagement.",
            },
            {
              id: "ats-sample-experience-2",
              jobTitle: "Marketing Coordinator",
              company: "Digital Agency",
              startDate: "2020",
              endDate: "2022",
              description:
                "Coordinated marketing activities, prepared reports, and supported content and campaign development.",
            },
          ]

  const displayEducation =
    education.length > 0
      ? education
      : hasResumeData
        ? []
        : [
            {
              id: "ats-sample-education-1",
              degree: "Bachelor of Business Administration",
              institution: "State University",
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
              id: "ats-sample-project-1",
              name: "Marketing Analytics Dashboard",
              technologies:
                "Excel • Google Analytics • Data Analysis",
              description:
                "Created a dashboard for tracking campaign performance and identifying growth opportunities.",
            },
            {
              id: "ats-sample-project-2",
              name: "Content Strategy",
              technologies:
                "SEO • Content Marketing • Analytics",
              description:
                "Developed a content strategy focused on increasing organic traffic and audience engagement.",
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

    return Array.isArray(technologies)
      ? technologies.join(" • ")
      : technologies
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
        <div className="min-w-0">
          {displayPersonal.fullName && (
            <h1
              className="text-[17px] font-bold tracking-tight"
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

          {displayPersonal.linkedin && (
            <span>{displayPersonal.linkedin}</span>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main className="px-6 py-5">

        {/* =================================================
            PROFESSIONAL SUMMARY
        ================================================== */}

        {displayPersonal.summary && (
          <section className="mb-5">

            <ATSSectionTitle>
              Professional Summary
            </ATSSectionTitle>

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
            SKILLS
        ================================================== */}

        {displaySkills.length > 0 && (
          <section className="mb-5">

            <ATSSectionTitle>
              Skills
            </ATSSectionTitle>

            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">

              {displaySkills
                .slice(0, 12)
                .map((skill, index) => {

                  const skillName =
                    getSkillName(skill)

                  if (!skillName) {
                    return null
                  }

                  return (
                    <span
                      key={skill?.id || index}
                      className="text-[5px]"
                      style={{
                        color: "#475569",
                      }}
                    >
                      {skillName}
                    </span>
                  )
                })}

            </div>

          </section>
        )}

        {/* =================================================
            PROFESSIONAL EXPERIENCE
        ================================================== */}

        {displayExperience.length > 0 && (
          <section className="mb-5">

            <ATSSectionTitle>
              Professional Experience
            </ATSSectionTitle>

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
                                color: "#475569",
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

        {/* =================================================
            EDUCATION
        ================================================== */}

        {displayEducation.length > 0 && (
          <section className="mb-5">

            <ATSSectionTitle>
              Education
            </ATSSectionTitle>

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
                      className="flex items-start justify-between gap-3"
                    >

                      <div className="min-w-0">

                        {degree && (
                          <h3
                            className="text-[6px] font-bold"
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
                  )
                })}

            </div>

          </section>
        )}

        {/* =================================================
            PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section>

            <ATSSectionTitle>
              Projects
            </ATSSectionTitle>

            <div className="mt-3 space-y-2.5">

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

                  const description = getValue(
                    item,
                    [
                      "description",
                      "details",
                    ]
                  )

                  return (
                    <article
                      key={item.id || index}
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
                          className="mt-0.5 text-[4.7px] font-medium"
                          style={{
                            color: "#475569",
                          }}
                        >
                          {technologies}
                        </p>
                      )}

                      {description && (
                        <p
                          className="mt-1 text-[5px] leading-[1.5]"
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
  )
}


/* =========================================================
   ATS SECTION TITLE
========================================================= */

function ATSSectionTitle({ children }) {
  return (
    <h2
      className="border-b pb-1 text-[7px] font-bold uppercase tracking-[0.08em]"
      style={{
        color: "#111827",
        borderColor: "#111827",
      }}
    >
      {children}
    </h2>
  )
}


export default ATSFocusPreview
