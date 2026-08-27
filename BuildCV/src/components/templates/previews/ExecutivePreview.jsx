function ExecutivePreview({ formData = {} }) {
  const {
    fullName = "Michael Anderson",
    jobTitle = "Senior Business Executive",
    email = "michael@email.com",
    phone = "+1 555 345 6789",
    location = "New York, NY",
    linkedin = "linkedin.com/in/michael",
    github = "",
    summary =
      "Strategic and results-driven executive with extensive experience leading teams, managing complex initiatives, and driving sustainable business growth.",
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
      : [
          {
            jobTitle: "Chief Operations Officer",
            company: "Global Enterprises",
            startDate: "2022",
            endDate: "Present",
            description:
              "Led organizational strategy, operational planning, and cross-functional teams while driving business performance and long-term growth.",
          },
          {
            jobTitle: "Senior Business Manager",
            company: "Northstar Group",
            startDate: "2018",
            endDate: "2022",
            description:
              "Managed strategic initiatives, improved operational processes, and developed partnerships that supported company expansion.",
          },
          {
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
      : [
          {
            degree: "MBA, Business Administration",
            institution: "New York University",
            startDate: "2013",
            endDate: "2015",
          },
          {
            degree: "BBA, Management",
            institution: "State University",
            startDate: "2009",
            endDate: "2013",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Business Transformation",
            technologies: "",
            description:
              "Led a company-wide transformation initiative focused on operational efficiency and sustainable growth.",
          },
          {
            name: "Market Expansion Strategy",
            technologies: "",
            description:
              "Developed and executed an expansion strategy that opened new markets and strengthened customer relationships.",
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

      <header className="border-b border-slate-300 px-7 pb-5 pt-6">

        <div className="flex items-start justify-between gap-5">

          <div className="min-w-0">

            <p className="text-[5.5px] font-bold uppercase tracking-[0.25em] text-buildcv-violet">
              Executive Resume
            </p>

            <h1 className="mt-1.5 truncate text-[17px] font-bold tracking-tight text-slate-900">
              {fullName}
            </h1>

            <p className="mt-1 truncate text-[7px] font-medium uppercase tracking-[0.14em] text-slate-500">
              {jobTitle}
            </p>

          </div>

          {/* INITIALS */}

          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-slate-300 bg-slate-50 text-[8px] font-bold text-slate-700">
            {getInitials(fullName)}
          </div>

        </div>

        {/* CONTACT */}

        <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-[5.5px] text-slate-500">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {linkedin && <span>{linkedin}</span>}

          {github && <span>{github}</span>}

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

          {/* =================================================
              EXECUTIVE PROFILE
          ================================================== */}

          {summary && (
            <section className="mb-5">

              <ExecutiveSectionTitle>
                Profile
              </ExecutiveSectionTitle>

              <p className="mt-2 text-[5.5px] leading-[1.6] text-slate-500">
                {summary}
              </p>

            </section>
          )}

          {/* =================================================
              CORE EXPERTISE
          ================================================== */}

          {displaySkills.length > 0 && (
            <section className="mb-5">

              <ExecutiveSectionTitle>
                Expertise
              </ExecutiveSectionTitle>

              <div className="mt-2 space-y-1.5">

                {displaySkills.slice(0, 8).map((skill, index) => {

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
                      className="border-l-2 border-buildcv-violet pl-2 text-[5.5px] font-medium leading-[1.4] text-slate-600"
                    >
                      {skillName}
                    </div>
                  )
                })}

              </div>

            </section>
          )}

          {/* =================================================
              EDUCATION
          ================================================== */}

          {displayEducation.length > 0 && (
            <section>

              <ExecutiveSectionTitle>
                Education
              </ExecutiveSectionTitle>

              <div className="mt-2 space-y-3">

                {displayEducation.slice(0, 2).map((item, index) => {

                  const degree = getValue(
                    item,
                    ["degree", "qualification", "title", "program"],
                    "MBA, Business Administration"
                  )

                  const institution = getValue(
                    item,
                    ["institution", "school", "university", "college"],
                    "New York University"
                  )

                  const endDate = getValue(
                    item,
                    ["endDate", "end", "to"],
                    "2015"
                  )

                  return (
                    <div key={item.id || index}>

                      <h3 className="text-[5.8px] font-bold leading-[1.4] text-slate-700">
                        {degree}
                      </h3>

                      <p className="mt-0.5 text-[5px] leading-[1.4] text-slate-500">
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

        <main className="px-6 py-5">

          {/* =================================================
              EXPERIENCE
          ================================================== */}

          {displayExperience.length > 0 && (
            <section className="mb-5">

              <ExecutiveMainTitle>
                Professional Experience
              </ExecutiveMainTitle>

              <div className="mt-3 space-y-4">

                {displayExperience.slice(0, 3).map((item, index) => {

                  const title = getValue(
                    item,
                    ["jobTitle", "position", "title", "role"],
                    "Chief Operations Officer"
                  )

                  const company = getValue(
                    item,
                    ["company", "organization", "employer"],
                    "Global Enterprises"
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
                    "Led strategic initiatives and cross-functional teams while driving business performance and organizational growth."
                  )

                  return (
                    <article key={item.id || index}>

                      <div className="flex items-start justify-between gap-3">

                        <div className="min-w-0">

                          <h3 className="truncate text-[7.5px] font-bold text-slate-900">
                            {title}
                          </h3>

                          <p className="mt-0.5 truncate text-[5.8px] font-medium text-buildcv-violet">
                            {company}
                          </p>

                        </div>

                        <span className="shrink-0 text-[5px] text-slate-400">
                          {startDate} — {endDate}
                        </span>

                      </div>

                      {description && (
                        <p className="mt-1.5 text-[5.8px] leading-[1.6] text-slate-500">
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
              SELECTED PROJECTS
          ================================================== */}

          {displayProjects.length > 0 && (
            <section>

              <ExecutiveMainTitle>
                Selected Projects
              </ExecutiveMainTitle>

              <div className="mt-3 grid grid-cols-2 gap-2">

                {displayProjects.slice(0, 2).map((item, index) => {

                  const name = getValue(
                    item,
                    ["name", "projectName", "title"],
                    "Business Transformation"
                  )

                  const technologies = getValue(
                    item,
                    ["technologies", "technology", "techStack", "stack"],
                    ""
                  )

                  const description = getValue(
                    item,
                    ["description", "details"],
                    "Led a strategic initiative focused on improving organizational performance."
                  )

                  return (
                    <div
                      key={item.id || index}
                      className="border border-slate-200 p-2.5"
                    >

                      <h3 className="text-[6.5px] font-bold text-slate-900">
                        {name}
                      </h3>

                      {technologies && (
                        <p className="mt-0.5 text-[5px] text-buildcv-violet">
                          {Array.isArray(technologies)
                            ? technologies.join(" • ")
                            : technologies}
                        </p>
                      )}

                      <p className="mt-1 text-[5px] leading-[1.5] text-slate-500">
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
   INITIALS
========================================================= */

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


/* =========================================================
   SIDEBAR SECTION TITLE
========================================================= */

function ExecutiveSectionTitle({ children }) {
  return (
    <div>

      <h2 className="text-[6px] font-bold uppercase tracking-[0.14em] text-slate-800">
        {children}
      </h2>

      <div className="mt-1.5 h-[2px] w-5 bg-buildcv-violet" />

    </div>
  )
}


/* =========================================================
   MAIN SECTION TITLE
========================================================= */

function ExecutiveMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2 className="shrink-0 text-[7px] font-bold uppercase tracking-[0.13em] text-slate-900">
        {children}
      </h2>

      <div className="h-px flex-1 bg-slate-200" />

    </div>
  )
}


export default ExecutivePreview