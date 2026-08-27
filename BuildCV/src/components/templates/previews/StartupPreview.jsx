function StartupPreview({ formData = {} }) {
  const {
    fullName = "Ryan Cooper",
    jobTitle = "Product Manager",
    email = "ryan@email.com",
    phone = "+1 555 234 7890",
    location = "Austin, TX",
    linkedin = "linkedin.com/in/ryan",
    github = "github.com/ryan",
    summary =
      "Product-focused professional experienced in building digital products, leading cross-functional teams, and turning ideas into scalable solutions.",
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
          "Product Strategy",
          "React",
          "JavaScript",
          "Figma",
          "Agile",
          "Leadership",
          "Analytics",
          "Git",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Product Manager",
            company: "Launch Labs",
            startDate: "2022",
            endDate: "Present",
            description:
              "Led product development from idea to launch while collaborating with engineering, design, and business teams.",
          },
          {
            jobTitle: "Product Associate",
            company: "GrowthTech",
            startDate: "2020",
            endDate: "2022",
            description:
              "Supported product strategy, user research, feature planning, and performance analysis.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "B.S. Business Administration",
            institution: "University of Texas",
            startDate: "2016",
            endDate: "2020",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Startup Platform",
            technologies: "React • Node.js • PostgreSQL",
            description:
              "Built and launched a SaaS platform that helped small businesses manage their daily operations.",
          },
          {
            name: "Growth Dashboard",
            technologies: "React • Analytics • APIs",
            description:
              "Created a real-time dashboard for tracking product growth and user engagement.",
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

            <div className="mb-2 flex items-center gap-1.5">

              <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

              <p className="text-[5px] font-bold uppercase tracking-[0.2em] text-slate-300">
                Startup Professional
              </p>

            </div>

            <h1 className="truncate text-[17px] font-extrabold tracking-tight">
              {fullName}
            </h1>

            <p className="mt-1 text-[6.5px] font-medium text-slate-300">
              {jobTitle}
            </p>

          </div>

          {/* STARTUP BADGE */}

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-buildcv-violet text-[7px] font-black text-white">
            GO
          </div>

        </div>

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px] text-slate-300">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {linkedin && <span>{linkedin}</span>}

          {github && <span>{github}</span>}

        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="px-6 py-5">

        {/* =================================================
            SUMMARY
        ================================================== */}

        {summary && (
          <section className="mb-5">

            <div className="flex items-center gap-2">

              <span className="h-2 w-2 shrink-0 rounded-full bg-buildcv-violet" />

              <h2 className="text-[7px] font-bold uppercase tracking-[0.13em]">
                About
              </h2>

              <div className="h-px flex-1 bg-slate-200" />

            </div>

            <p className="mt-2 text-[5.5px] leading-[1.6] text-slate-500">
              {summary}
            </p>

          </section>
        )}

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {displayExperience.length > 0 && (
          <section className="mb-5">

            <StartupSectionTitle>
              Experience
            </StartupSectionTitle>

            <div className="mt-3 space-y-3">

              {displayExperience.slice(0, 3).map((item, index) => {

                const title = getValue(
                  item,
                  ["jobTitle", "position", "title", "role"],
                  "Product Manager"
                )

                const company = getValue(
                  item,
                  ["company", "organization", "employer"],
                  "Launch Labs"
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
                  "Led product development and collaborated with cross-functional teams."
                )

                return (
                  <article
                    key={item.id || index}
                    className="relative pl-3"
                  >

                    {/* Timeline */}

                    <div className="absolute left-0 top-1 h-full w-px bg-slate-200" />

                    <div className="absolute left-[-2px] top-1 h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">

                        <h3 className="truncate text-[6.5px] font-bold">
                          {title}
                        </h3>

                        <p className="mt-0.5 truncate text-[5.2px] font-medium text-buildcv-violet">
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

        {/* =================================================
            PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section className="mb-5">

            <StartupSectionTitle>
              Products & Projects
            </StartupSectionTitle>

            <div className="mt-3 grid grid-cols-2 gap-2">

              {displayProjects.slice(0, 2).map((item, index) => {

                const name = getValue(
                  item,
                  ["name", "projectName", "title"],
                  "Startup Platform"
                )

                const technologies = getValue(
                  item,
                  ["technologies", "technology", "techStack", "stack"],
                  "React • Node.js"
                )

                const description = getValue(
                  item,
                  ["description", "details"],
                  "Built a scalable digital product."
                )

                return (
                  <article
                    key={item.id || index}
                    className="rounded-lg border border-slate-200 bg-slate-50 p-2.5"
                  >

                    <div className="mb-1.5 flex items-center justify-between">

                      <h3 className="text-[5.8px] font-bold">
                        {name}
                      </h3>

                      <span className="h-1 w-1 rounded-full bg-buildcv-violet" />

                    </div>

                    <p className="text-[4.5px] font-medium text-buildcv-violet">
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

        {/* =================================================
            BOTTOM GRID
        ================================================== */}

        <div className="grid grid-cols-[1fr_0.8fr] gap-5">

          {/* SKILLS */}

          {displaySkills.length > 0 && (
            <section>

              <StartupSectionTitle>
                Skills
              </StartupSectionTitle>

              <div className="mt-3 flex flex-wrap gap-1">

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
                      className="rounded-full border border-slate-200 px-2 py-1 text-[4.7px] font-medium text-slate-600"
                    >
                      {skillName}
                    </span>
                  )
                })}

              </div>

            </section>
          )}

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <StartupSectionTitle>
                Education
              </StartupSectionTitle>

              <div className="mt-3">

                {displayEducation.slice(0, 1).map((item, index) => {

                  const degree = getValue(
                    item,
                    ["degree", "qualification", "title", "program"],
                    "B.S. Business Administration"
                  )

                  const institution = getValue(
                    item,
                    ["institution", "school", "university", "college"],
                    "University of Texas"
                  )

                  const endDate = getValue(
                    item,
                    ["endDate", "end", "to"],
                    "2020"
                  )

                  return (
                    <div key={item.id || index}>

                      <h3 className="text-[5.8px] font-bold">
                        {degree}
                      </h3>

                      <p className="mt-0.5 text-[5px] text-slate-500">
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

        </div>

      </div>

    </div>
  )
}


/* =========================================================
   STARTUP SECTION TITLE
========================================================= */

function StartupSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-buildcv-violet" />

      <h2 className="shrink-0 text-[7px] font-bold uppercase tracking-[0.13em]">
        {children}
      </h2>

      <div className="h-px flex-1 bg-slate-200" />

    </div>
  )
}


export default StartupPreview