function TechProPreview({ formData = {} }) {
  const {
    fullName = "Michael Anderson",
    jobTitle = "Senior Software Engineer",
    email = "michael@email.com",
    phone = "+1 555 789 1234",
    location = "Seattle, WA",
    linkedin = "linkedin.com/in/michael",
    github = "github.com/michael",
    summary =
      "Experienced software engineer specializing in scalable applications, cloud technologies, system architecture, and modern development practices.",
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
      : [
          {
            jobTitle: "Senior Software Engineer",
            company: "Cloud Systems Inc.",
            startDate: "2022",
            endDate: "Present",
            description:
              "Designed scalable applications, improved system performance, and collaborated with engineering teams to deliver reliable software products.",
          },
          {
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
      : [
          {
            degree: "B.S. Computer Science",
            institution: "University of Washington",
            startDate: "2015",
            endDate: "2019",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Cloud Analytics Platform",
            technologies: "React • Node.js • AWS",
            description:
              "Built a scalable analytics platform for processing and visualizing business data.",
          },
          {
            name: "Developer API",
            technologies: "TypeScript • PostgreSQL • Docker",
            description:
              "Developed a REST API with authentication, database integration, and containerized deployment.",
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
    <div className="h-full w-full overflow-hidden bg-white text-slate-900">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="bg-slate-900 px-6 py-5 text-white">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <p className="mb-1 text-[5px] font-semibold uppercase tracking-[0.2em] text-indigo-300">
              Technology Professional
            </p>

            <h1 className="truncate text-[17px] font-extrabold tracking-tight">
              {fullName}
            </h1>

            <p className="mt-1 text-[6.5px] font-medium text-slate-300">
              {jobTitle}
            </p>

          </div>

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-indigo-400 bg-indigo-500/20 text-[6px] font-bold text-indigo-200">
            TP
          </div>

        </div>

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px] text-slate-300">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {github && <span>{github}</span>}

          {linkedin && <span>{linkedin}</span>}

        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="grid grid-cols-[0.35fr_1fr]">

        {/* =================================================
            SIDEBAR
        ================================================== */}

        <aside className="border-r border-slate-200 bg-slate-50 px-4 py-5">

          {/* PROFILE */}

          {summary && (
            <section className="mb-5">

              <TechSideTitle>
                Profile
              </TechSideTitle>

              <p className="mt-2 text-[5.3px] leading-[1.6] text-slate-500">
                {summary}
              </p>

            </section>
          )}

          {/* CORE TECHNOLOGIES */}

          <section className="mb-5">

            <TechSideTitle>
              Core Skills
            </TechSideTitle>

            <div className="mt-2 space-y-1.5">

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
                  <div
                    key={skill.id || index}
                    className="flex items-center gap-1.5"
                  >

                    <span className="h-1 w-1 shrink-0 rounded-full bg-indigo-500" />

                    <span className="text-[4.8px] font-medium text-slate-600">
                      {skillName}
                    </span>

                  </div>
                )
              })}

            </div>

          </section>

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <TechSideTitle>
                Education
              </TechSideTitle>

              <div className="mt-2 space-y-2">

                {displayEducation.slice(0, 2).map((item, index) => {

                  const degree = getValue(
                    item,
                    ["degree", "qualification", "title", "program"],
                    "B.S. Computer Science"
                  )

                  const institution = getValue(
                    item,
                    ["institution", "school", "university", "college"],
                    "University of Washington"
                  )

                  const endDate = getValue(
                    item,
                    ["endDate", "end", "to"],
                    "2019"
                  )

                  return (
                    <div key={item.id || index}>

                      <h3 className="text-[5.5px] font-bold">
                        {degree}
                      </h3>

                      <p className="mt-0.5 text-[4.8px] text-slate-500">
                        {institution}
                      </p>

                      <p className="mt-0.5 text-[4.5px] text-slate-400">
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

                {displayExperience.slice(0, 3).map((item, index) => {

                  const title = getValue(
                    item,
                    ["jobTitle", "position", "title", "role"],
                    "Senior Software Engineer"
                  )

                  const company = getValue(
                    item,
                    ["company", "organization", "employer"],
                    "Cloud Systems Inc."
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
                    "Designed scalable applications and collaborated with engineering teams."
                  )

                  return (
                    <article key={item.id || index}>

                      <div className="flex items-start justify-between gap-2">

                        <div className="min-w-0">

                          <h3 className="truncate text-[6.5px] font-bold">
                            {title}
                          </h3>

                          <p className="mt-0.5 truncate text-[5.2px] font-medium text-indigo-600">
                            {company}
                          </p>

                        </div>

                        <span className="shrink-0 text-[4.7px] text-slate-400">
                          {startDate} — {endDate}
                        </span>

                      </div>

                      <p className="mt-1 text-[5.2px] leading-[1.55] text-slate-500">
                        {description}
                      </p>

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

                {displayProjects.slice(0, 2).map((item, index) => {

                  const name = getValue(
                    item,
                    ["name", "projectName", "title"],
                    "Cloud Analytics Platform"
                  )

                  const technologies = getValue(
                    item,
                    ["technologies", "technology", "techStack", "stack"],
                    "React • Node.js • AWS"
                  )

                  const description = getValue(
                    item,
                    ["description", "details"],
                    "Built a scalable technology platform."
                  )

                  return (
                    <article
                      key={item.id || index}
                      className="border border-slate-200 p-2.5"
                    >

                      <h3 className="text-[5.8px] font-bold">
                        {name}
                      </h3>

                      <p className="mt-0.5 text-[4.5px] font-medium text-indigo-600">
                        {Array.isArray(technologies)
                          ? technologies.join(" • ")
                          : technologies}
                      </p>

                      <p className="mt-1 text-[4.8px] leading-[1.5] text-slate-500">
                        {description}
                      </p>

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

      <h2 className="text-[6px] font-bold uppercase tracking-[0.14em] text-indigo-600">
        {children}
      </h2>

      <div className="mt-1.5 h-[2px] w-5 bg-indigo-500" />

    </div>
  )
}


/* =========================================================
   MAIN SECTION TITLE
========================================================= */

function TechMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2 className="shrink-0 text-[7px] font-bold uppercase tracking-[0.12em]">
        {children}
      </h2>

      <div className="h-px flex-1 bg-slate-200" />

    </div>
  )
}


export default TechProPreview