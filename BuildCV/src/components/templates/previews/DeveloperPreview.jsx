function DeveloperPreview({ formData = {} }) {
  const {
    fullName = "Daniel Carter",
    jobTitle = "Frontend Developer",
    email = "daniel@email.com",
    phone = "+1 555 678 9012",
    location = "San Francisco, CA",
    linkedin = "linkedin.com/in/daniel",
    github = "github.com/daniel",
    summary =
      "Frontend developer focused on building responsive, accessible, and scalable web applications using modern JavaScript technologies.",
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
          "React",
          "JavaScript",
          "TypeScript",
          "Next.js",
          "Node.js",
          "Git",
          "Tailwind CSS",
          "REST APIs",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Frontend Developer",
            company: "Tech Labs",
            startDate: "2022",
            endDate: "Present",
            description:
              "Built responsive React applications, reusable components, and scalable frontend architecture for modern web products.",
          },
          {
            jobTitle: "Web Developer",
            company: "Digital Works",
            startDate: "2020",
            endDate: "2022",
            description:
              "Developed interactive websites and integrated REST APIs while improving performance and user experience.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "BS Computer Science",
            institution: "University of Technology",
            startDate: "2016",
            endDate: "2020",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "BuildCV",
            technologies: "React • Tailwind CSS • JavaScript",
            description:
              "A professional resume builder with templates and live resume previews.",
          },
          {
            name: "Developer Dashboard",
            technologies: "React • TypeScript • REST API",
            description:
              "A responsive dashboard for monitoring projects and application data.",
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

      <header className="border-b border-slate-200 px-6 py-5">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <p className="mb-1 text-[5.5px] font-bold uppercase tracking-[0.2em] text-buildcv-violet">
              Software Developer
            </p>

            <h1 className="truncate text-[17px] font-extrabold tracking-tight">
              {fullName}
            </h1>

            <p className="mt-1 text-[6.5px] font-medium text-slate-500">
              {jobTitle}
            </p>

          </div>

          {/* Developer Badge */}

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-[6px] font-bold text-white">
            {"</>"}
          </div>

        </div>

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px] text-slate-500">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {github && <span>{github}</span>}

          {linkedin && <span>{linkedin}</span>}

        </div>

      </header>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="grid grid-cols-[0.34fr_1fr]">

        {/* =================================================
            SIDEBAR
        ================================================== */}

        <aside className="border-r border-slate-200 bg-slate-50 px-4 py-5">

          {/* PROFILE */}

          {summary && (
            <section className="mb-5">

              <DeveloperSideTitle>
                Profile
              </DeveloperSideTitle>

              <p className="mt-2 text-[5.5px] leading-[1.6] text-slate-500">
                {summary}
              </p>

            </section>
          )}

          {/* TECH STACK */}

          <section className="mb-5">

            <DeveloperSideTitle>
              Tech Stack
            </DeveloperSideTitle>

            <div className="mt-2 flex flex-wrap gap-1">

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
                    className="rounded bg-buildcv-violet-50 px-1.5 py-1 text-[4.8px] font-semibold text-buildcv-violet"
                  >
                    {skillName}
                  </span>
                )
              })}

            </div>

          </section>

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <DeveloperSideTitle>
                Education
              </DeveloperSideTitle>

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
                    "University of Technology"
                  )

                  const endDate = getValue(
                    item,
                    ["endDate", "end", "to"],
                    "2020"
                  )

                  return (
                    <div key={item.id || index}>

                      <h3 className="text-[5.5px] font-bold leading-[1.4]">
                        {degree}
                      </h3>

                      <p className="mt-0.5 text-[4.8px] leading-[1.4] text-slate-500">
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
            MAIN CONTENT
        ================================================== */}

        <main className="px-5 py-5">

          {/* EXPERIENCE */}

          {displayExperience.length > 0 && (
            <section className="mb-5">

              <DeveloperMainTitle>
                Experience
              </DeveloperMainTitle>

              <div className="mt-3 space-y-3">

                {displayExperience.slice(0, 3).map((item, index) => {

                  const title = getValue(
                    item,
                    ["jobTitle", "position", "title", "role"],
                    "Frontend Developer"
                  )

                  const company = getValue(
                    item,
                    ["company", "organization", "employer"],
                    "Tech Labs"
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
                    "Built responsive React applications and reusable frontend components."
                  )

                  return (
                    <article key={item.id || index}>

                      <div className="flex items-start justify-between gap-2">

                        <div className="min-w-0">

                          <h3 className="truncate text-[6.5px] font-bold">
                            {title}
                          </h3>

                          <p className="mt-0.5 truncate text-[5.3px] font-medium text-buildcv-violet">
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

              <DeveloperMainTitle>
                Projects
              </DeveloperMainTitle>

              <div className="mt-3 grid grid-cols-2 gap-2">

                {displayProjects.slice(0, 2).map((item, index) => {

                  const name = getValue(
                    item,
                    ["name", "projectName", "title"],
                    "BuildCV"
                  )

                  const technologies = getValue(
                    item,
                    ["technologies", "technology", "techStack", "stack"],
                    "React • JavaScript"
                  )

                  const description = getValue(
                    item,
                    ["description", "details"],
                    "A modern web application built with React."
                  )

                  return (
                    <div
                      key={item.id || index}
                      className="rounded border border-slate-200 p-2.5"
                    >

                      <h3 className="text-[6px] font-bold">
                        {name}
                      </h3>

                      <p className="mt-0.5 text-[4.5px] font-medium text-buildcv-violet">
                        {Array.isArray(technologies)
                          ? technologies.join(" • ")
                          : technologies}
                      </p>

                      <p className="mt-1 text-[4.8px] leading-[1.5] text-slate-500">
                        {description}
                      </p>

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


/* =========================================================
   SIDEBAR TITLE
========================================================= */

function DeveloperSideTitle({ children }) {
  return (
    <div>

      <h2 className="text-[6px] font-bold uppercase tracking-[0.15em] text-buildcv-violet">
        {children}
      </h2>

      <div className="mt-1.5 h-[2px] w-5 bg-buildcv-violet" />

    </div>
  )
}


/* =========================================================
   MAIN TITLE
========================================================= */

function DeveloperMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2 className="shrink-0 text-[7px] font-bold uppercase tracking-[0.14em] text-slate-900">
        {children}
      </h2>

      <div className="h-px flex-1 bg-slate-200" />

    </div>
  )
}


export default DeveloperPreview