function ModernPreview({ formData = {} }) {
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
  // Only used when the resume has no information yet.
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
        fullName: "Alex Morgan",
        jobTitle: "Frontend Developer",
        email: "alex@email.com",
        phone: "+1 234 567",
        location: "New York",
        linkedin: "linkedin.com/alex",
        github: "github.com/alex",
        summary:
          "Frontend developer passionate about creating responsive and user-friendly web experiences.",
        profileImage: "",
      }

  const displaySkills =
    skills.length > 0
      ? skills
      : hasResumeData
        ? []
        : [
            "React",
            "JavaScript",
            "TypeScript",
            "Git",
            "CSS",
          ]

  const displayExperience =
    experience.length > 0
      ? experience
      : hasResumeData
        ? []
        : [
            {
              id: "sample-experience-1",
              position: "Frontend Developer",
              company: "Tech Company",
              startDate: "2023",
              endDate: "Present",
              description:
                "Developed responsive interfaces and reusable React components for modern web applications.",
            },
            {
              id: "sample-experience-2",
              position: "Web Developer",
              company: "Creative Studio",
              startDate: "2021",
              endDate: "2023",
              description:
                "Built interactive websites using JavaScript, CSS, and modern frontend technologies.",
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
              degree: "BS Computer Science",
              institution: "University of Technology",
              field: "",
              startDate: "2019",
              endDate: "2023",
              description: "",
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
              name: "Portfolio Website",
              technologies:
                "React • Tailwind CSS • JavaScript",
              description:
                "Designed and developed a responsive portfolio website with animations and interactive components.",
              link: "",
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
        min-h-[1123px]
        w-full
        overflow-hidden
        bg-white
        p-8
        text-slate-900
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <header>
        <div className="flex items-start justify-between gap-5">

          <div className="min-w-0 flex-1">

            {displayPersonal.fullName && (
              <h1
                className="
                  break-words
                  text-[25px]
                  font-extrabold
                  leading-tight
                  tracking-tight
                  text-slate-900
                "
              >
                {displayPersonal.fullName}
              </h1>
            )}

            {displayPersonal.jobTitle && (
              <p
                className="
                  mt-2
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-buildcv-violet
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
                h-16
                w-16
                shrink-0
                rounded-full
                object-cover
              "
            />
          ) : (
            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-buildcv-violet-50
                text-[14px]
                font-bold
                text-buildcv-violet
              "
            >
              {getInitials(
                displayPersonal.fullName
              )}
            </div>
          )}

        </div>

        {/* =================================================
            CONTACT
        ================================================= */}

        <div
          className="
            mt-4
            flex
            flex-wrap
            gap-x-4
            gap-y-1.5
            text-[7px]
            text-slate-500
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

        <div className="my-5 h-px bg-slate-200" />
      </header>

      {/* =================================================
          PROFILE
      ================================================= */}

      {displayPersonal.summary && (
        <section>
          <PreviewSectionTitle>
            Profile
          </PreviewSectionTitle>

          <p
            className="
              mt-2
              text-[8px]
              leading-[1.6]
              text-slate-600
            "
          >
            {displayPersonal.summary}
          </p>
        </section>
      )}

      {/* =================================================
          EXPERIENCE
      ================================================= */}

      {displayExperience.length > 0 && (
        <section className="mt-6">

          <PreviewSectionTitle>
            Experience
          </PreviewSectionTitle>

          <div className="mt-3 space-y-4">

            {displayExperience
              .slice(0, 4)
              .map((item, index) => {

                const title = getValue(
                  item,
                  [
                    "position",
                    "jobTitle",
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
                  <div
                    key={item.id || index}
                  >

                    <div className="flex justify-between gap-5">

                      <div className="min-w-0">

                        {title && (
                          <p
                            className="
                              break-words
                              text-[9px]
                              font-bold
                              text-slate-900
                            "
                          >
                            {title}
                          </p>
                        )}

                        {company && (
                          <p
                            className="
                              mt-0.5
                              break-words
                              text-[7px]
                              font-semibold
                              text-buildcv-violet
                            "
                          >
                            {company}
                          </p>
                        )}

                      </div>

                      {(startDate || endDate) && (
                        <p
                          className="
                            shrink-0
                            whitespace-nowrap
                            text-[6.5px]
                            text-slate-400
                          "
                        >
                          {startDate}
                          {startDate && endDate
                            ? " — "
                            : ""}
                          {endDate}
                        </p>
                      )}

                    </div>

                    {description && (
                      <p
                        className="
                          mt-1.5
                          text-[7px]
                          leading-[1.6]
                          text-slate-600
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

      {/* =================================================
          EDUCATION
      ================================================= */}

      {displayEducation.length > 0 && (
        <section className="mt-6">

          <PreviewSectionTitle>
            Education
          </PreviewSectionTitle>

          <div className="mt-3 space-y-3">

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

                const field = getValue(
                  item,
                  ["field", "major", "specialization"]
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
                    className="flex justify-between gap-5"
                  >

                    <div className="min-w-0">

                      {degree && (
                        <p
                          className="
                            break-words
                            text-[9px]
                            font-bold
                            text-slate-900
                          "
                        >
                          {degree}
                          {field
                            ? ` — ${field}`
                            : ""}
                        </p>
                      )}

                      {institution && (
                        <p
                          className="
                            mt-0.5
                            break-words
                            text-[7px]
                            text-slate-600
                          "
                        >
                          {institution}
                        </p>
                      )}

                    </div>

                    {(startDate || endDate) && (
                      <p
                        className="
                          shrink-0
                          whitespace-nowrap
                          text-[6.5px]
                          text-slate-400
                        "
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

      {/* =================================================
          PROJECTS
      ================================================= */}

      {displayProjects.length > 0 && (
        <section className="mt-6">

          <PreviewSectionTitle>
            Projects
          </PreviewSectionTitle>

          <div className="mt-3 space-y-3">

            {displayProjects
              .slice(0, 3)
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
                      <p
                        className="
                          break-words
                          text-[9px]
                          font-bold
                          text-slate-900
                        "
                      >
                        {name}
                      </p>
                    )}

                    {technologies && (
                      <p
                        className="
                          mt-0.5
                          break-words
                          text-[7px]
                          font-semibold
                          text-buildcv-violet
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
                          text-[7px]
                          leading-[1.6]
                          text-slate-600
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

      {/* =================================================
          SKILLS
      ================================================= */}

      {displaySkills.length > 0 && (
        <section className="mt-6">

          <PreviewSectionTitle>
            Skills
          </PreviewSectionTitle>

          <div className="mt-3 flex flex-wrap gap-1.5">

            {displaySkills
              .slice(0, 15)
              .map((skill, index) => {

                const skillName =
                  getSkillName(skill)

                if (!skillName) {
                  return null
                }

                return (
                  <span
                    key={
                      skill?.id || index
                    }
                    className="
                      rounded
                      bg-buildcv-violet-50
                      px-2
                      py-1
                      text-[6.5px]
                      font-semibold
                      text-buildcv-violet-600
                    "
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

// =====================================================
// INITIALS
// =====================================================

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
// SECTION TITLE
// =====================================================

function PreviewSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2
        className="
          shrink-0
          text-[8px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-slate-900
        "
      >
        {children}
      </h2>

      <div className="h-px flex-1 bg-slate-200" />

    </div>
  )
}

export default ModernPreview