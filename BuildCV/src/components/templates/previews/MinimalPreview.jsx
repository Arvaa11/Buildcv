function MinimalPreview({ formData = {} }) {
  // =====================================================
  // PERSONAL DATA
  // =====================================================

  const personal = formData.personal || {}

  const {
    fullName = "Emma Carter",
    jobTitle = "Software Developer",
    email = "emma@email.com",
    phone = "+1 555 987 6543",
    location = "Austin, TX",
    linkedin = "linkedin.com/in/emma",
    github = "github.com/emma",
    summary =
      "Focused professional with a strong interest in building simple, reliable, and user-friendly digital experiences.",
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
  // CHECK WHETHER USER HAS ENTERED DATA
  // =====================================================

  const hasResumeData =
    Boolean(personal.fullName?.trim()) ||
    Boolean(personal.jobTitle?.trim()) ||
    Boolean(personal.email?.trim()) ||
    Boolean(personal.phone?.trim()) ||
    Boolean(personal.location?.trim()) ||
    Boolean(personal.linkedin?.trim()) ||
    Boolean(personal.github?.trim()) ||
    Boolean(personal.summary?.trim()) ||
    Boolean(personal.profileImage) ||
    skills.length > 0 ||
    experience.length > 0 ||
    education.length > 0 ||
    projects.length > 0

  // =====================================================
  // FALLBACK DATA
  // =====================================================

  const displayPersonal = hasResumeData
    ? {
        fullName: personal.fullName || "",
        jobTitle: personal.jobTitle || "",
        email: personal.email || "",
        phone: personal.phone || "",
        location: personal.location || "",
        linkedin: personal.linkedin || "",
        github: personal.github || "",
        summary: personal.summary || "",
        profileImage: personal.profileImage || "",
      }
    : {
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

  const displaySkills =
    skills.length > 0
      ? skills
      : hasResumeData
        ? []
        : [
            "JavaScript",
            "React",
            "TypeScript",
            "Git",
            "CSS",
            "Problem Solving",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              jobTitle: "Software Developer",
              company: "Digital Solutions",
              startDate: "2022",
              endDate: "Present",
              description:
                "Built responsive web applications and reusable components while collaborating with designers and developers.",
            },
            {
              jobTitle: "Junior Developer",
              company: "Web Studio",
              startDate: "2020",
              endDate: "2022",
              description:
                "Developed and maintained websites using modern frontend technologies and best development practices.",
            },
          ]

  const displayEducation =
    education.length > 0
      ? education
      : hasResumeData
        ? []
        : [
            {
              degree: "BS Computer Science",
              institution: "State University",
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
              name: "Personal Portfolio",
              technologies:
                "React • CSS • JavaScript",
              description:
                "Created a responsive portfolio website to showcase projects and professional experience.",
            },
          ]

  // =====================================================
  // HELPER
  // =====================================================

  function getValue(item, keys, fallback = "") {
    for (const key of keys) {
      if (
        item?.[key] !== undefined &&
        item?.[key] !== null &&
        String(item[key]).trim() !== ""
      ) {
        return item[key]
      }
    }

    return fallback
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
        bg-white
        px-6
        py-6
        text-gray-900
      "
      style={{
        backgroundColor: "#FFFFFF",
        color: "#111827",
      }}
    >

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header>

        <h1
          className="
            text-[16px]
            font-semibold
            tracking-tight
          "
          style={{
            color: "#111827",
          }}
        >
          {displayPersonal.fullName}
        </h1>

        <p
          className="
            mt-1
            text-[7px]
            font-medium
            uppercase
            tracking-[0.16em]
          "
          style={{
            color: "#475569",
          }}
        >
          {displayPersonal.jobTitle}
        </p>

        {/* CONTACT */}

        <div
          className="
            mt-3
            flex
            flex-wrap
            gap-x-3
            gap-y-1
            text-[5.5px]
          "
          style={{
            color: "#718096",
          }}
        >

          {displayPersonal.email && (
            <span>
              {displayPersonal.email}
            </span>
          )}

          {displayPersonal.phone && (
            <span>
              {displayPersonal.phone}
            </span>
          )}

          {displayPersonal.location && (
            <span>
              {displayPersonal.location}
            </span>
          )}

          {displayPersonal.linkedin && (
            <span>
              {displayPersonal.linkedin}
            </span>
          )}

          {displayPersonal.github && (
            <span>
              {displayPersonal.github}
            </span>
          )}

        </div>

      </header>

      <div
        className="my-4 h-px"
        style={{
          backgroundColor: "#E2E8F0",
        }}
      />

      {/* =====================================================
          PROFILE
      ====================================================== */}

      {displayPersonal.summary && (
        <section className="mb-5">

          <MinimalSectionTitle>
            Profile
          </MinimalSectionTitle>

          <p
            className="
              mt-2
              max-w-[95%]
              text-[6.5px]
              leading-[1.6]
            "
            style={{
              color: "#475569",
            }}
          >
            {displayPersonal.summary}
          </p>

        </section>
      )}

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      {displayExperience.length > 0 && (
        <section className="mb-5">

          <MinimalSectionTitle>
            Experience
          </MinimalSectionTitle>

          <div className="mt-2 space-y-3">

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
                  "Software Developer"
                )

                const company = getValue(
                  item,
                  [
                    "company",
                    "organization",
                    "employer",
                  ],
                  "Digital Solutions"
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
                  "Built responsive web applications using modern technologies."
                )

                return (
                  <article
                    key={item.id || index}
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

                        <h3
                          className="
                            truncate
                            text-[7px]
                            font-semibold
                          "
                          style={{
                            color: "#111827",
                          }}
                        >
                          {title}
                        </h3>

                        <p
                          className="
                            mt-0.5
                            truncate
                            text-[5.5px]
                          "
                          style={{
                            color: "#475569",
                          }}
                        >
                          {company}
                        </p>

                      </div>

                      <span
                        className="
                          shrink-0
                          text-[5px]
                        "
                        style={{
                          color: "#718096",
                        }}
                      >
                        {startDate} — {endDate}
                      </span>

                    </div>

                    {description && (
                      <p
                        className="
                          mt-1
                          text-[5.5px]
                          leading-[1.55]
                        "
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

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      {displayEducation.length > 0 && (
        <section className="mb-5">

          <MinimalSectionTitle>
            Education
          </MinimalSectionTitle>

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
                  "BS Computer Science"
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
                    "State University"
                  )

                const startDate = getValue(
                  item,
                  [
                    "startDate",
                    "start",
                    "from",
                  ],
                  "2016"
                )

                const endDate = getValue(
                  item,
                  [
                    "endDate",
                    "end",
                    "to",
                  ],
                  "2020"
                )

                return (
                  <div
                    key={item.id || index}
                    className="
                      flex
                      items-start
                      justify-between
                      gap-3
                    "
                  >

                    <div className="min-w-0">

                      <h3
                        className="
                          truncate
                          text-[7px]
                          font-semibold
                        "
                        style={{
                          color: "#111827",
                        }}
                      >
                        {degree}

                        {field
                          ? ` — ${field}`
                          : ""}
                      </h3>

                      <p
                        className="
                          mt-0.5
                          truncate
                          text-[5.5px]
                        "
                        style={{
                          color: "#475569",
                        }}
                      >
                        {institution}
                      </p>

                    </div>

                    <span
                      className="
                        shrink-0
                        text-[5px]
                      "
                      style={{
                        color: "#718096",
                      }}
                    >
                      {startDate} — {endDate}
                    </span>

                  </div>
                )
              })}

          </div>

        </section>
      )}

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      {displayProjects.length > 0 && (
        <section className="mb-5">

          <MinimalSectionTitle>
            Projects
          </MinimalSectionTitle>

          <div className="mt-2 space-y-2">

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
                  "Personal Portfolio"
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
                    ""
                  )

                const description =
                  getValue(
                    item,
                    [
                      "description",
                      "details",
                    ],
                    "Created a responsive portfolio website."
                  )

                return (
                  <div
                    key={item.id || index}
                  >

                    <h3
                      className="
                        text-[7px]
                        font-semibold
                      "
                      style={{
                        color: "#111827",
                      }}
                    >
                      {name}
                    </h3>

                    {technologies && (
                      <p
                        className="
                          mt-0.5
                          text-[5px]
                        "
                        style={{
                          color: "#718096",
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

                    <p
                      className="
                        mt-1
                        text-[5.5px]
                        leading-[1.5]
                      "
                      style={{
                        color: "#475569",
                      }}
                    >
                      {description}
                    </p>

                  </div>
                )
              })}

          </div>

        </section>
      )}

      {/* =====================================================
          SKILLS
      ====================================================== */}

      {displaySkills.length > 0 && (
        <section>

          <MinimalSectionTitle>
            Skills
          </MinimalSectionTitle>

          <div
            className="
              mt-2
              flex
              flex-wrap
              gap-x-3
              gap-y-1
            "
          >

            {displaySkills
              .slice(0, 10)
              .map((skill, index) => {

                const skillName =
                  typeof skill === "string"
                    ? skill
                    : getValue(
                        skill,
                        [
                          "name",
                          "skill",
                          "title",
                        ],
                        "Skill"
                      )

                if (!skillName) {
                  return null
                }

                return (
                  <span
                    key={
                      skill?.id || index
                    }
                    className="
                      text-[5.5px]
                      font-medium
                    "
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
  )
}


/* =========================================================
   SECTION TITLE
========================================================= */

function MinimalSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2
        className="
          shrink-0
          text-[6.5px]
          font-bold
          uppercase
          tracking-[0.16em]
        "
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


export default MinimalPreview
