function MinimalPreview({ formData = {} }) {
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
    skills = [],
    experience = [],
    education = [],
    projects = [],
  } = formData

  // =====================================================
  // FALLBACK DATA
  // =====================================================

  const displaySkills =
    skills.length > 0
      ? skills
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
      : [
          {
            name: "Personal Portfolio",
            technologies: "React • CSS • JavaScript",
            description:
              "Created a responsive portfolio website to showcase projects and professional experience.",
          },
        ]

  // =====================================================
  // HELPER
  // =====================================================

  function getValue(item, keys, fallback = "") {
    for (const key of keys) {
      if (item?.[key]) {
        return item[key]
      }
    }

    return fallback
  }

  return (
    <div className="h-full w-full overflow-hidden bg-white px-6 py-6 text-gray-900">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header>

        <h1 className="text-[16px] font-semibold tracking-tight">
          {fullName}
        </h1>

        <p className="mt-1 text-[7px] font-medium uppercase tracking-[0.16em] text-gray-500">
          {jobTitle}
        </p>

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5.5px] text-gray-400">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {linkedin && <span>{linkedin}</span>}

          {github && <span>{github}</span>}

        </div>

      </header>

      <div className="my-4 h-px bg-gray-200" />

      {/* =====================================================
          PROFILE
      ====================================================== */}

      {summary && (
        <section className="mb-5">

          <MinimalSectionTitle>
            Profile
          </MinimalSectionTitle>

          <p className="mt-2 max-w-[95%] text-[6.5px] leading-[1.6] text-gray-500">
            {summary}
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

            {displayExperience.slice(0, 3).map((item, index) => {

              const title = getValue(
                item,
                ["jobTitle", "position", "title", "role"],
                "Software Developer"
              )

              const company = getValue(
                item,
                ["company", "organization", "employer"],
                "Digital Solutions"
              )

              const startDate = getValue(
                item,
                ["startDate", "start", "from"],
                "2022"
              )

              const endDate = getValue(
                item,
                ["endDate", "end", "to"],
                "Present"
              )

              const description = getValue(
                item,
                ["description", "details", "responsibilities"],
                "Built responsive web applications using modern technologies."
              )

              return (
                <article key={item.id || index}>

                  <div className="flex items-start justify-between gap-3">

                    <div className="min-w-0">

                      <h3 className="truncate text-[7px] font-semibold">
                        {title}
                      </h3>

                      <p className="mt-0.5 truncate text-[5.5px] text-gray-500">
                        {company}
                      </p>

                    </div>

                    <span className="shrink-0 text-[5px] text-gray-400">
                      {startDate} — {endDate}
                    </span>

                  </div>

                  {description && (
                    <p className="mt-1 text-[5.5px] leading-[1.55] text-gray-500">
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

            {displayEducation.slice(0, 2).map((item, index) => {

              const degree = getValue(
                item,
                ["degree", "qualification", "title", "program"],
                "BS Computer Science"
              )

              const institution = getValue(
                item,
                ["institution", "school", "university", "college"],
                "State University"
              )

              const startDate = getValue(
                item,
                ["startDate", "start", "from"],
                "2016"
              )

              const endDate = getValue(
                item,
                ["endDate", "end", "to"],
                "2020"
              )

              return (
                <div
                  key={item.id || index}
                  className="flex items-start justify-between gap-3"
                >

                  <div className="min-w-0">

                    <h3 className="truncate text-[7px] font-semibold">
                      {degree}
                    </h3>

                    <p className="mt-0.5 truncate text-[5.5px] text-gray-500">
                      {institution}
                    </p>

                  </div>

                  <span className="shrink-0 text-[5px] text-gray-400">
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

            {displayProjects.slice(0, 2).map((item, index) => {

              const name = getValue(
                item,
                ["name", "projectName", "title"],
                "Personal Portfolio"
              )

              const technologies = getValue(
                item,
                ["technologies", "technology", "techStack", "stack"],
                ""
              )

              const description = getValue(
                item,
                ["description", "details"],
                "Created a responsive portfolio website."
              )

              return (
                <div key={item.id || index}>

                  <h3 className="text-[7px] font-semibold">
                    {name}
                  </h3>

                  {technologies && (
                    <p className="mt-0.5 text-[5px] text-gray-400">
                      {Array.isArray(technologies)
                        ? technologies.join(" • ")
                        : technologies}
                    </p>
                  )}

                  <p className="mt-1 text-[5.5px] leading-[1.5] text-gray-500">
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

          <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">

            {displaySkills.slice(0, 10).map((skill, index) => {

              const skillName =
                typeof skill === "string"
                  ? skill
                  : getValue(
                      skill,
                      ["name", "skill", "title"],
                      "Skill"
                    )

              return (
                <span
                  key={skill.id || index}
                  className="text-[5.5px] font-medium text-gray-500"
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

      <h2 className="shrink-0 text-[6.5px] font-bold uppercase tracking-[0.16em] text-gray-900">
        {children}
      </h2>

      <div className="h-px flex-1 bg-gray-200" />

    </div>
  )
}


export default MinimalPreview