function ElegantPreview({ formData = {} }) {
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
  // CHECK WHETHER RESUME HAS REAL DATA
  // =====================================================

  const hasResumeData = Boolean(
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
  )

  // =====================================================
  // PERSONAL DISPLAY DATA
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
        fullName: "Sophia Williams",
        jobTitle: "Marketing Strategist",
        email: "sophia@email.com",
        phone: "+1 555 456 7890",
        location: "Boston, MA",
        linkedin: "linkedin.com/in/sophia",
        github: "",
        summary:
          "Strategic marketing professional with experience developing brand strategies, managing campaigns, and helping organizations achieve sustainable growth.",
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
            "Brand Strategy",
            "Digital Marketing",
            "Business Strategy",
            "Market Research",
            "Content Strategy",
            "Analytics",
            "Campaign Management",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "sample-experience-1",
              jobTitle: "Senior Marketing Strategist",
              company: "Sterling & Co.",
              startDate: "2022",
              endDate: "Present",
              description:
                "Developed integrated marketing strategies across digital channels and led campaigns that increased brand awareness and customer engagement.",
            },
            {
              id: "sample-experience-2",
              jobTitle: "Marketing Manager",
              company: "Horizon Group",
              startDate: "2019",
              endDate: "2022",
              description:
                "Managed multi-channel campaigns, collaborated with creative teams, and used analytics to optimize marketing performance.",
            },
            {
              id: "sample-experience-3",
              jobTitle: "Marketing Associate",
              company: "Bright Media",
              startDate: "2017",
              endDate: "2019",
              description:
                "Supported marketing campaigns, market research, content planning, and customer engagement initiatives.",
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
              degree: "MBA, Marketing",
              institution: "Boston University",
              startDate: "2015",
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
              id: "sample-project-1",
              name: "Brand Growth Strategy",
              description:
                "Developed a complete growth strategy that improved customer acquisition and digital engagement.",
            },
            {
              id: "sample-project-2",
              name: "Digital Campaign",
              description:
                "Planned and executed a cross-platform campaign focused on increasing qualified leads.",
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

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div
      className="h-full w-full overflow-hidden"
      style={{
        backgroundColor: "#FFFDF9",
        color: "#292524",
      }}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="px-6 pb-5 pt-6 text-center"
        style={{
          backgroundColor: "#FFFDF9",
        }}
      >
        <p
          className="text-[5.5px] font-medium uppercase tracking-[0.3em]"
          style={{
            color: "#A16207",
          }}
        >
          Professional Resume
        </p>

        {displayPersonal.fullName && (
          <h1
            className="mt-2 text-[17px] font-semibold tracking-wide"
            style={{
              color: "#292524",
            }}
          >
            {displayPersonal.fullName}
          </h1>
        )}

        {displayPersonal.jobTitle && (
          <p
            className="mt-1 text-[6.5px] font-medium tracking-wide"
            style={{
              color: "#78716C",
            }}
          >
            {displayPersonal.jobTitle}
          </p>
        )}

        <div
          className="mx-auto mt-3 h-px w-12"
          style={{
            backgroundColor: "#A16207",
          }}
        />

        {/* CONTACT */}

        <div
          className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[5px]"
          style={{
            color: "#78716C",
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
          MAIN
      ====================================================== */}

      <div
        className="px-6 pb-6"
        style={{
          backgroundColor: "#FFFDF9",
        }}
      >
        {/* =================================================
            PROFILE
        ================================================== */}

        {displayPersonal.summary && (
          <section className="mb-5">
            <ElegantTitle>
              Profile
            </ElegantTitle>

            <p
              className="mx-auto mt-2 max-w-[90%] text-center text-[5.5px] leading-[1.6]"
              style={{
                color: "#78716C",
              }}
            >
              {displayPersonal.summary}
            </p>
          </section>
        )}

        {/* =================================================
            TWO COLUMN CONTENT
        ================================================== */}

        <div className="grid grid-cols-[1fr_0.38fr] gap-5">
          {/* =================================================
              LEFT COLUMN
          ================================================== */}

          <main>
            {/* EXPERIENCE */}

            {displayExperience.length > 0 && (
              <section className="mb-5">
                <ElegantMainTitle>
                  Professional Experience
                </ElegantMainTitle>

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
                        ""
                      )

                      const company = getValue(
                        item,
                        [
                          "company",
                          "organization",
                          "employer",
                        ],
                        ""
                      )

                      const startDate = getValue(
                        item,
                        [
                          "startDate",
                          "start",
                          "from",
                        ],
                        ""
                      )

                      const endDate = getValue(
                        item,
                        [
                          "endDate",
                          "end",
                          "to",
                        ],
                        ""
                      )

                      const description = getValue(
                        item,
                        [
                          "description",
                          "details",
                          "responsibilities",
                        ],
                        ""
                      )

                      return (
                        <article
                          key={item?.id || index}
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0">
                              {title && (
                                <h3
                                  className="truncate text-[6.5px] font-semibold"
                                  style={{
                                    color: "#292524",
                                  }}
                                >
                                  {title}
                                </h3>
                              )}

                              {company && (
                                <p
                                  className="mt-0.5 truncate text-[5.5px]"
                                  style={{
                                    color: "#A16207",
                                  }}
                                >
                                  {company}
                                </p>
                              )}
                            </div>

                            {(startDate || endDate) && (
                              <span
                                className="shrink-0 text-[4.8px]"
                                style={{
                                  color: "#A8A29E",
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
                                color: "#78716C",
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
                <ElegantMainTitle>
                  Selected Projects
                </ElegantMainTitle>

                <div className="mt-3 space-y-2.5">
                  {displayProjects
                    .slice(0, 3)
                    .map((item, index) => {
                      const name = getValue(
                        item,
                        [
                          "name",
                          "projectName",
                          "title",
                        ],
                        ""
                      )

                      const description = getValue(
                        item,
                        [
                          "description",
                          "details",
                        ],
                        ""
                      )

                      return (
                        <div
                          key={item?.id || index}
                        >
                          {name && (
                            <h3
                              className="text-[6.2px] font-semibold"
                              style={{
                                color: "#292524",
                              }}
                            >
                              {name}
                            </h3>
                          )}

                          {description && (
                            <p
                              className="mt-0.5 text-[5px] leading-[1.5]"
                              style={{
                                color: "#78716C",
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
          </main>

          {/* =================================================
              RIGHT COLUMN
          ================================================== */}

          <aside
            className="border-l pl-4"
            style={{
              borderColor: "#E7E5E4",
            }}
          >
            {/* SKILLS */}

            {displaySkills.length > 0 && (
              <section className="mb-5">
                <ElegantSideTitle>
                  Expertise
                </ElegantSideTitle>

                <ul
                  className="mt-2 space-y-1.5 text-[5px] leading-[1.4]"
                  style={{
                    color: "#78716C",
                  }}
                >
                  {displaySkills
                    .slice(0, 8)
                    .map((skill, index) => {
                      const skillName =
                        getSkillName(skill)

                      if (!skillName) {
                        return null
                      }

                      return (
                        <li
                          key={
                            skill?.id || index
                          }
                        >
                          {skillName}
                        </li>
                      )
                    })}
                </ul>
              </section>
            )}

            {/* EDUCATION */}

            {displayEducation.length > 0 && (
              <section className="mb-5">
                <ElegantSideTitle>
                  Education
                </ElegantSideTitle>

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
                        ""
                      )

                      const field = getValue(
                        item,
                        [
                          "field",
                          "major",
                          "specialization",
                        ],
                        ""
                      )

                      const institution =
                        getValue(
                          item,
                          [
                            "institution",
                            "school",
                            "university",
                            "college",
                          ],
                          ""
                        )

                      const startDate =
                        getValue(
                          item,
                          [
                            "startDate",
                            "start",
                            "from",
                          ],
                          ""
                        )

                      const endDate =
                        getValue(
                          item,
                          [
                            "endDate",
                            "end",
                            "to",
                          ],
                          ""
                        )

                      return (
                        <div
                          key={
                            item?.id || index
                          }
                        >
                          {degree && (
                            <h3
                              className="text-[5.5px] font-semibold leading-[1.4]"
                              style={{
                                color: "#292524",
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
                                color: "#78716C",
                              }}
                            >
                              {institution}
                            </p>
                          )}

                          {(startDate ||
                            endDate) && (
                            <p
                              className="mt-0.5 text-[4.8px]"
                              style={{
                                color: "#A8A29E",
                              }}
                            >
                              {startDate}

                              {startDate &&
                              endDate
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

            {/* CERTIFICATIONS */}

            <section className="mb-5">
              <ElegantSideTitle>
                Certifications
              </ElegantSideTitle>

              <ul
                className="mt-2 space-y-1.5 text-[5px] leading-[1.4]"
                style={{
                  color: "#78716C",
                }}
              >
                <li>Google Analytics</li>
                <li>HubSpot Marketing</li>
                <li>Meta Blueprint</li>
              </ul>
            </section>

            {/* LANGUAGES */}

            <section>
              <ElegantSideTitle>
                Languages
              </ElegantSideTitle>

              <div
                className="mt-2 space-y-1.5 text-[5px]"
                style={{
                  color: "#78716C",
                }}
              >
                <div className="flex justify-between gap-1">
                  <span>English</span>
                  <span>Native</span>
                </div>

                <div className="flex justify-between gap-1">
                  <span>French</span>
                  <span>Fluent</span>
                </div>
              </div>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}


// =====================================================
// CENTER SECTION TITLE
// =====================================================

function ElegantTitle({ children }) {
  return (
    <>
      <h2
        className="text-center text-[7px] font-semibold tracking-wide"
        style={{
          color: "#292524",
        }}
      >
        {children}
      </h2>

      <div
        className="mx-auto mt-1.5 h-px w-5"
        style={{
          backgroundColor: "#A16207",
        }}
      />
    </>
  )
}


// =====================================================
// MAIN SECTION TITLE
// =====================================================

function ElegantMainTitle({ children }) {
  return (
    <div>
      <h2
        className="text-[7px] font-semibold"
        style={{
          color: "#292524",
        }}
      >
        {children}
      </h2>

      <div
        className="mb-2 mt-1 h-px"
        style={{
          backgroundColor: "#E7E5E4",
        }}
      />
    </div>
  )
}


// =====================================================
// SIDEBAR SECTION TITLE
// =====================================================

function ElegantSideTitle({ children }) {
  return (
    <div>
      <h2
        className="text-[6.5px] font-semibold"
        style={{
          color: "#292524",
        }}
      >
        {children}
      </h2>

      <div
        className="mt-1.5 h-px w-5"
        style={{
          backgroundColor: "#A16207",
        }}
      />
    </div>
  )
}


export default ElegantPreview
