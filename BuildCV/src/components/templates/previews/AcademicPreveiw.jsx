function AcademicPreview({ formData = {} }) {
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
  // SAMPLE DATA
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
        fullName: "Emily Johnson",
        jobTitle: "Research Assistant",
        email: "emily.johnson@email.com",
        phone: "+1 555 345 6789",
        location: "Boston, MA",
        linkedin: "linkedin.com/in/emilyjohnson",
        github: "",
        summary:
          "Dedicated academic professional with experience in research, data analysis, academic writing, and collaborative projects.",
        profileImage: "",
      }

  const displaySkills =
    skills.length > 0
      ? skills
      : hasResumeData
        ? []
        : [
            "Research",
            "Data Analysis",
            "Academic Writing",
            "Literature Review",
            "SPSS",
            "Python",
            "Microsoft Office",
            "Presentation",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "sample-experience-1",
              jobTitle: "Research Assistant",
              company: "University Research Center",
              startDate: "2023",
              endDate: "Present",
              description:
                "Supported research projects through literature reviews, data collection, analysis, documentation, and academic reporting.",
            },
            {
              id: "sample-experience-2",
              jobTitle: "Teaching Assistant",
              company: "University Department",
              startDate: "2021",
              endDate: "2023",
              description:
                "Assisted faculty members with course preparation, student support, grading, and academic activities.",
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
              degree: "M.S. Computer Science",
              institution: "Boston University",
              startDate: "2021",
              endDate: "2023",
            },
            {
              id: "sample-education-2",
              degree: "B.S. Computer Science",
              institution: "University of Massachusetts",
              startDate: "2017",
              endDate: "2021",
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
              name: "Machine Learning Research",
              technologies:
                "Python • Scikit-learn • Pandas",
              description:
                "Investigated machine learning methods for improving predictive performance on real-world datasets.",
            },
            {
              id: "sample-project-2",
              name: "Academic Research Project",
              technologies:
                "Research • Data Analysis • Statistics",
              description:
                "Conducted research, analyzed findings, and prepared a structured academic report.",
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

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div
      className="h-full w-full overflow-hidden text-slate-900"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#0F172A",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="border-b px-6 py-5"
        style={{
          borderColor: "#CBD5E1",
        }}
      >
        {displayPersonal.fullName && (
          <h1
            className="font-serif text-[17px] font-bold tracking-tight"
            style={{
              color: "#0F172A",
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

        {/* CONTACT */}

        <div
          className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px]"
          style={{
            color: "#64748B",
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
      ====================================================== */}

      <div className="px-6 py-5">

        {/* =================================================
            RESEARCH PROFILE
        ================================================== */}

        {displayPersonal.summary && (
          <section className="mb-5">
            <AcademicTitle>
              Research Profile
            </AcademicTitle>

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
            EDUCATION
        ================================================== */}

        {displayEducation.length > 0 && (
          <section className="mb-5">
            <AcademicTitle>
              Education
            </AcademicTitle>

            <div className="mt-3 space-y-2.5">
              {displayEducation
                .slice(0, 3)
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
                    <article
                      key={item.id || index}
                      className="flex items-start justify-between gap-3"
                    >
                      <div className="min-w-0">

                        {degree && (
                          <h3
                            className="break-words text-[6px] font-bold"
                            style={{
                              color: "#0F172A",
                            }}
                          >
                            {degree}
                          </h3>
                        )}

                        {institution && (
                          <p
                            className="mt-0.5 break-words text-[5px]"
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
                    </article>
                  )
                })}
            </div>
          </section>
        )}

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {displayExperience.length > 0 && (
          <section className="mb-5">
            <AcademicTitle>
              Academic Experience
            </AcademicTitle>

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
                              className="break-words text-[6.2px] font-bold"
                              style={{
                                color: "#0F172A",
                              }}
                            >
                              {title}
                            </h3>
                          )}

                          {company && (
                            <p
                              className="mt-0.5 break-words text-[5.2px] italic"
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
            RESEARCH PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section className="mb-5">
            <AcademicTitle>
              Research Projects
            </AcademicTitle>

            <div className="mt-3 grid grid-cols-2 gap-3">
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

                  const technologies = getValue(
                    item,
                    [
                      "technologies",
                      "technology",
                      "techStack",
                      "stack",
                    ]
                  )

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
                      className="border p-2.5"
                      style={{
                        borderColor: "#E2E8F0",
                      }}
                    >
                      {name && (
                        <h3
                          className="break-words text-[5.8px] font-bold"
                          style={{
                            color: "#0F172A",
                          }}
                        >
                          {name}
                        </h3>
                      )}

                      {technologies && (
                        <p
                          className="mt-0.5 break-words text-[4.5px] italic"
                          style={{
                            color: "#64748B",
                          }}
                        >
                          {Array.isArray(technologies)
                            ? technologies.join(" • ")
                            : technologies}
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
            SKILLS
        ================================================== */}

        {displaySkills.length > 0 && (
          <section>
            <AcademicTitle>
              Research & Technical Skills
            </AcademicTitle>

            <div className="mt-3 grid grid-cols-4 gap-x-3 gap-y-1.5">
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
                      className="text-[4.8px]"
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

      </div>
    </div>
  )
}

/* =========================================================
   ACADEMIC SECTION TITLE
========================================================= */

function AcademicTitle({ children }) {
  return (
    <div className="flex items-center gap-2">
      <h2
        className="shrink-0 font-serif text-[7px] font-bold uppercase tracking-[0.08em]"
        style={{
          color: "#0F172A",
        }}
      >
        {children}
      </h2>

      <div
        className="h-px flex-1"
        style={{
          backgroundColor: "#CBD5E1",
        }}
      />
    </div>
  )
}

export default AcademicPreview
