
function ExecutivePreview({ formData = {} }) {
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
        fullName: "Michael Anderson",
        jobTitle: "Senior Business Executive",
        email: "michael@email.com",
        phone: "+1 555 345 6789",
        location: "New York, NY",
        linkedin: "linkedin.com/in/michael",
        github: "",
        summary:
          "Strategic and results-driven executive with extensive experience leading teams, managing complex initiatives, and driving sustainable business growth.",
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
            "Strategic Leadership",
            "Business Development",
            "Team Leadership",
            "Project Management",
            "Operations",
            "Stakeholder Management",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "sample-experience-1",
              jobTitle: "Chief Operations Officer",
              company: "Global Enterprises",
              startDate: "2022",
              endDate: "Present",
              description:
                "Led organizational strategy, operational planning, and cross-functional teams while driving business performance and long-term growth.",
            },
            {
              id: "sample-experience-2",
              jobTitle: "Senior Business Manager",
              company: "Northstar Group",
              startDate: "2018",
              endDate: "2022",
              description:
                "Managed strategic initiatives, improved operational processes, and developed partnerships that supported company expansion.",
            },
            {
              id: "sample-experience-3",
              jobTitle: "Business Manager",
              company: "Summit Solutions",
              startDate: "2015",
              endDate: "2018",
              description:
                "Oversaw business operations, client relationships, and project delivery across multiple departments.",
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
              degree: "MBA, Business Administration",
              institution: "New York University",
              startDate: "2013",
              endDate: "2015",
            },
            {
              id: "sample-education-2",
              degree: "BBA, Management",
              institution: "State University",
              startDate: "2009",
              endDate: "2013",
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
              name: "Business Transformation",
              technologies: "",
              description:
                "Led a company-wide transformation initiative focused on operational efficiency and sustainable growth.",
            },
            {
              id: "sample-project-2",
              name: "Market Expansion Strategy",
              technologies: "",
              description:
                "Developed and executed an expansion strategy that opened new markets and strengthened customer relationships.",
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
      className="
        h-full
        w-full
        overflow-hidden
        bg-[#FFFFFF]
        text-[#111827]
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          border-b
          border-[#CBD5E1]
          px-7
          pb-5
          pt-6
        "
      >

        <div className="flex items-start justify-between gap-5">

          <div className="min-w-0">

            <p
              className="
                text-[5.5px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-[#6366F1]
              "
            >
              Executive Resume
            </p>

            {displayPersonal.fullName && (
              <h1
                className="
                  mt-1.5
                  truncate
                  text-[17px]
                  font-bold
                  tracking-tight
                  text-[#111827]
                "
              >
                {displayPersonal.fullName}
              </h1>
            )}

            {displayPersonal.jobTitle && (
              <p
                className="
                  mt-1
                  truncate
                  text-[7px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#64748B]
                "
              >
                {displayPersonal.jobTitle}
              </p>
            )}

          </div>

          {/* PROFILE IMAGE / INITIALS */}

          {displayPersonal.profileImage ? (
            <img
              src={displayPersonal.profileImage}
              alt=""
              className="
                h-10
                w-10
                shrink-0
                rounded-full
                object-cover
                border
                border-[#CBD5E1]
              "
            />
          ) : (
            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                border
                border-[#CBD5E1]
                bg-[#F8FAFC]
                text-[8px]
                font-bold
                text-[#475569]
              "
            >
              {getInitials(displayPersonal.fullName)}
            </div>
          )}

        </div>

        {/* CONTACT */}

        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-x-3
            gap-y-1
            text-[5.5px]
            text-[#64748B]
          "
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
          CONTENT
      ===================================================== */}

      <div className="grid grid-cols-[0.34fr_1fr]">

        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside
          className="
            border-r
            border-[#E2E8F0]
            bg-[#F8FAFC]
            px-4
            py-5
          "
        >

          {/* PROFILE */}

          {displayPersonal.summary && (
            <section className="mb-5">

              <ExecutiveSectionTitle>
                Profile
              </ExecutiveSectionTitle>

              <p
                className="
                  mt-2
                  text-[5.5px]
                  leading-[1.6]
                  text-[#64748B]
                "
              >
                {displayPersonal.summary}
              </p>

            </section>
          )}

          {/* EXPERTISE */}

          {displaySkills.length > 0 && (
            <section className="mb-5">

              <ExecutiveSectionTitle>
                Expertise
              </ExecutiveSectionTitle>

              <div className="mt-2 space-y-1.5">

                {displaySkills
                  .slice(0, 8)
                  .map((skill, index) => {

                    const skillName =
                      getSkillName(skill)

                    if (!skillName) {
                      return null
                    }

                    return (
                      <div
                        key={
                          skill?.id || index
                        }
                        className="
                          border-l-2
                          border-[#6366F1]
                          pl-2
                          text-[5.5px]
                          font-medium
                          leading-[1.4]
                          text-[#475569]
                        "
                      >
                        {skillName}
                      </div>
                    )
                  })}

              </div>

            </section>
          )}

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <ExecutiveSectionTitle>
                Education
              </ExecutiveSectionTitle>

              <div className="mt-2 space-y-3">

                {displayEducation
                  .slice(0, 2)
                  .map((item, index) => {

                    const degree =
                      getValue(
                        item,
                        [
                          "degree",
                          "qualification",
                          "title",
                          "program",
                        ]
                      )

                    const field =
                      getValue(
                        item,
                        [
                          "field",
                          "major",
                          "specialization",
                        ]
                      )

                    const institution =
                      getValue(
                        item,
                        [
                          "institution",
                          "school",
                          "university",
                          "college",
                        ]
                      )

                    const startDate =
                      getValue(
                        item,
                        [
                          "startDate",
                          "start",
                          "from",
                        ]
                      )

                    const endDate =
                      getValue(
                        item,
                        [
                          "endDate",
                          "end",
                          "to",
                        ]
                      )

                    return (
                      <div
                        key={
                          item?.id || index
                        }
                      >

                        {degree && (
                          <h3
                            className="
                              text-[5.8px]
                              font-bold
                              leading-[1.4]
                              text-[#475569]
                            "
                          >
                            {degree}

                            {field
                              ? ` — ${field}`
                              : ""}
                          </h3>
                        )}

                        {institution && (
                          <p
                            className="
                              mt-0.5
                              text-[5px]
                              leading-[1.4]
                              text-[#64748B]
                            "
                          >
                            {institution}
                          </p>
                        )}

                        {(startDate ||
                          endDate) && (
                          <p
                            className="
                              mt-0.5
                              text-[4.5px]
                              text-[#94A3B8]
                            "
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

        </aside>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main
          className="
            bg-[#FFFFFF]
            px-6
            py-5
          "
        >

          {/* EXPERIENCE */}

          {displayExperience.length > 0 && (
            <section className="mb-5">

              <ExecutiveMainTitle>
                Professional Experience
              </ExecutiveMainTitle>

              <div className="mt-3 space-y-4">

                {displayExperience
                  .slice(0, 3)
                  .map((item, index) => {

                    const title =
                      getValue(
                        item,
                        [
                          "jobTitle",
                          "position",
                          "title",
                          "role",
                        ]
                      )

                    const company =
                      getValue(
                        item,
                        [
                          "company",
                          "organization",
                          "employer",
                        ]
                      )

                    const startDate =
                      getValue(
                        item,
                        [
                          "startDate",
                          "start",
                          "from",
                        ]
                      )

                    const endDate =
                      getValue(
                        item,
                        [
                          "endDate",
                          "end",
                          "to",
                        ]
                      )

                    const description =
                      getValue(
                        item,
                        [
                          "description",
                          "details",
                          "responsibilities",
                        ]
                      )

                    return (
                      <article
                        key={
                          item?.id || index
                        }
                      >

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-3
                          "
                        >

                          <div className="min-w-0">

                            {title && (
                              <h3
                                className="
                                  truncate
                                  text-[7.5px]
                                  font-bold
                                  text-[#111827]
                                "
                              >
                                {title}
                              </h3>
                            )}

                            {company && (
                              <p
                                className="
                                  mt-0.5
                                  truncate
                                  text-[5.8px]
                                  font-medium
                                  text-[#6366F1]
                                "
                              >
                                {company}
                              </p>
                            )}

                          </div>

                          {(startDate ||
                            endDate) && (
                            <span
                              className="
                                shrink-0
                                text-[5px]
                                text-[#94A3B8]
                              "
                            >
                              {startDate}

                              {startDate &&
                              endDate
                                ? " — "
                                : ""}

                              {endDate}
                            </span>
                          )}

                        </div>

                        {description && (
                          <p
                            className="
                              mt-1.5
                              text-[5.8px]
                              leading-[1.6]
                              text-[#64748B]
                            "
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

              <ExecutiveMainTitle>
                Selected Projects
              </ExecutiveMainTitle>

              <div className="mt-3 grid grid-cols-2 gap-2">

                {displayProjects
                  .slice(0, 2)
                  .map((item, index) => {

                    const name =
                      getValue(
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
                        key={
                          item?.id || index
                        }
                        className="
                          border
                          border-[#E2E8F0]
                          p-2.5
                        "
                      >

                        {name && (
                          <h3
                            className="
                              text-[6.5px]
                              font-bold
                              text-[#111827]
                            "
                          >
                            {name}
                          </h3>
                        )}

                        {technologies && (
                          <p
                            className="
                              mt-0.5
                              text-[5px]
                              text-[#6366F1]
                            "
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
                            className="
                              mt-1
                              text-[5px]
                              leading-[1.5]
                              text-[#64748B]
                            "
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

      </div>

    </div>
  )
}


// =====================================================
// INITIALS
// =====================================================

function getInitials(name = "") {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (words.length === 0) {
    return "MA"
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
// SIDEBAR SECTION TITLE
// =====================================================

function ExecutiveSectionTitle({ children }) {
  return (
    <div>

      <h2
        className="
          text-[6px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-[#475569]
        "
      >
        {children}
      </h2>

      <div
        className="
          mt-1.5
          h-[2px]
          w-5
          bg-[#6366F1]
        "
      />

    </div>
  )
}


// =====================================================
// MAIN SECTION TITLE
// =====================================================

function ExecutiveMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2
        className="
          shrink-0
          text-[7px]
          font-bold
          uppercase
          tracking-[0.13em]
          text-[#111827]
        "
      >
        {children}
      </h2>

      <div
        className="
          h-px
          flex-1
          bg-[#E2E8F0]
        "
      />

    </div>
  )
}


export default ExecutivePreview
