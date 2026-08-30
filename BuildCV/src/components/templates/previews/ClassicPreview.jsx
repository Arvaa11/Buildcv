function ClassicPreview({ formData = {} }) {
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
        fullName: "James Wilson",
        jobTitle: "Business Analyst",
        email: "james.wilson@email.com",
        phone: "+1 555 123 4567",
        location: "Chicago, IL",
        linkedin: "linkedin.com/in/jameswilson",
        summary:
          "Detail-oriented professional with strong experience in business analysis, data-driven decision making, process improvement, and stakeholder collaboration.",
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
            "Business Analysis",
            "Data Analysis",
            "Microsoft Excel",
            "SQL",
            "Process Improvement",
            "Project Management",
            "Reporting",
            "Stakeholder Management",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "classic-sample-experience-1",
              jobTitle: "Senior Business Analyst",
              company: "Sterling Consulting Group",
              startDate: "2022",
              endDate: "Present",
              description:
                "Analyzed business requirements, created reports, and identified process improvements to support business decisions.",
            },
            {
              id: "classic-sample-experience-2",
              jobTitle: "Business Analyst",
              company: "Northstar Solutions",
              startDate: "2019",
              endDate: "2022",
              description:
                "Gathered requirements, documented project specifications, and supported data analysis initiatives.",
            },
            {
              id: "classic-sample-experience-3",
              jobTitle: "Junior Business Analyst",
              company: "Global Business Services",
              startDate: "2017",
              endDate: "2019",
              description:
                "Assisted with business research, reporting, data analysis, and project documentation.",
            },
          ]

  const displayEducation =
    education.length > 0
      ? education
      : hasResumeData
        ? []
        : [
            {
              id: "classic-sample-education-1",
              degree: "Bachelor of Business Administration",
              institution: "University of Illinois",
              field: "",
              startDate: "2013",
              endDate: "2017",
            },
          ]

  const displayProjects =
    projects.length > 0
      ? projects
      : hasResumeData
        ? []
        : [
            {
              id: "classic-sample-project-1",
              name: "Business Analytics Dashboard",
              description:
                "Created a dashboard to visualize business performance and support management decision-making.",
            },
            {
              id: "classic-sample-project-2",
              name: "Process Improvement Project",
              description:
                "Analyzed existing workflows and proposed improvements to increase operational efficiency.",
            },
          ]

  // =====================================================
  // HELPER
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

            {displayPersonal.fullName && (
              <h1
                className="font-serif text-[17px] font-bold tracking-tight"
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

          {/* PROFILE IMAGE */}

          {displayPersonal.profileImage && (
            <img
              src={displayPersonal.profileImage}
              alt=""
              className="
                h-12
                w-12
                shrink-0
                rounded-sm
                border
                object-cover
              "
              style={{
                borderColor: "#E2E8F0",
              }}
            />
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

      <div className="px-6 py-5">

        {/* =================================================
            SUMMARY
        ================================================== */}

        {displayPersonal.summary && (
          <section className="mb-5">

            <ClassicTitle>
              Professional Summary
            </ClassicTitle>

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

            <ClassicTitle>
              Professional Experience
            </ClassicTitle>

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
                              className="mt-0.5 truncate text-[5.3px] italic"
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
            EDUCATION + SKILLS
        ================================================== */}

        <div className="grid grid-cols-[1fr_0.8fr] gap-5">

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <ClassicTitle>
                Education
              </ClassicTitle>

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
                            className="mt-0.5 text-[5px] italic"
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

          {/* SKILLS */}

          {displaySkills.length > 0 && (
            <section>

              <ClassicTitle>
                Skills
              </ClassicTitle>

              <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5">

                {displaySkills
                  .slice(0, 8)
                  .map((skill, index) => {

                    const skillName =
                      getSkillName(skill)

                    if (!skillName) {
                      return null
                    }

                    return (
                      <span
                        key={skill?.id || index}
                        className="text-[4.8px] leading-[1.4]"
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

        {/* =================================================
            PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section className="mt-5">

            <ClassicTitle>
              Projects
            </ClassicTitle>

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

                  const technologies =
                    getValue(
                      item,
                      [
                        "technologies",
                        "technology",
                        "techStack",
                        "stack",
                      ]
                    )

                  const description =
                    getValue(
                      item,
                      [
                        "description",
                        "details",
                      ]
                    )

                  return (
                    <div
                      key={item.id || index}
                    >

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

                      {technologies && (
                        <p
                          className="mt-0.5 text-[4.8px]"
                          style={{
                            color: "#718096",
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

                    </div>
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
   CLASSIC SECTION TITLE
========================================================= */

function ClassicTitle({ children }) {
  return (
    <h2
      className="border-b pb-1 font-serif text-[7px] font-bold"
      style={{
        color: "#111827",
        borderColor: "#111827",
      }}
    >
      {children}
    </h2>
  )
}


export default ClassicPreview
