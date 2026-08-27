function ATSFocusPreview({ formData = {} }) {
  const {
    fullName = "Sarah Thompson",
    jobTitle = "Marketing Specialist",
    email = "sarah@email.com",
    phone = "+1 555 456 7890",
    location = "New York, NY",
    linkedin = "linkedin.com/in/sarah",
    summary =
      "Results-driven professional with experience in marketing, project coordination, data analysis, and developing strategies that support business growth.",
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
          "Marketing",
          "Project Management",
          "Data Analysis",
          "SEO",
          "Content Strategy",
          "Microsoft Excel",
          "Google Analytics",
          "Communication",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Marketing Specialist",
            company: "Growth Solutions",
            startDate: "2022",
            endDate: "Present",
            description:
              "Developed marketing campaigns, analyzed performance data, and collaborated with cross-functional teams to improve customer engagement.",
          },
          {
            jobTitle: "Marketing Coordinator",
            company: "Digital Agency",
            startDate: "2020",
            endDate: "2022",
            description:
              "Coordinated marketing activities, prepared reports, and supported content and campaign development.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "Bachelor of Business Administration",
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
            name: "Marketing Analytics Dashboard",
            technologies: "Excel • Google Analytics • Data Analysis",
            description:
              "Created a dashboard for tracking campaign performance and identifying growth opportunities.",
          },
          {
            name: "Content Strategy",
            technologies: "SEO • Content Marketing • Analytics",
            description:
              "Developed a content strategy focused on increasing organic traffic and audience engagement.",
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

      <header className="px-6 py-5">

        <h1 className="text-[17px] font-bold tracking-tight">
          {fullName}
        </h1>

        <p className="mt-1 text-[6.5px] font-medium text-slate-600">
          {jobTitle}
        </p>

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px] text-slate-500">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {linkedin && <span>{linkedin}</span>}

        </div>

        <div className="mt-4 h-px bg-slate-900" />

      </header>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <main className="px-6 pb-6">

        {/* =================================================
            PROFESSIONAL SUMMARY
        ================================================== */}

        {summary && (
          <section className="mb-4">

            <ATSSectionTitle>
              Professional Summary
            </ATSSectionTitle>

            <p className="mt-2 text-[5.5px] leading-[1.6] text-slate-600">
              {summary}
            </p>

          </section>
        )}

        {/* =================================================
            SKILLS
        ================================================== */}

        {displaySkills.length > 0 && (
          <section className="mb-4">

            <ATSSectionTitle>
              Skills
            </ATSSectionTitle>

            <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1.5">

              {displaySkills.slice(0, 12).map((skill, index) => {

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
                    className="text-[5px] text-slate-600"
                  >
                    {skillName}
                  </span>
                )
              })}

            </div>

          </section>
        )}

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {displayExperience.length > 0 && (
          <section className="mb-4">

            <ATSSectionTitle>
              Professional Experience
            </ATSSectionTitle>

            <div className="mt-3 space-y-3">

              {displayExperience.slice(0, 3).map((item, index) => {

                const title = getValue(
                  item,
                  ["jobTitle", "position", "title", "role"],
                  "Marketing Specialist"
                )

                const company = getValue(
                  item,
                  ["company", "organization", "employer"],
                  "Growth Solutions"
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
                  "Developed campaigns and supported business growth initiatives."
                )

                return (
                  <article key={item.id || index}>

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">

                        <h3 className="truncate text-[6.5px] font-bold">
                          {title}
                        </h3>

                        <p className="mt-0.5 truncate text-[5.2px] font-medium text-slate-600">
                          {company}
                        </p>

                      </div>

                      <span className="shrink-0 text-[4.7px] text-slate-500">
                        {startDate} — {endDate}
                      </span>

                    </div>

                    <p className="mt-1 text-[5.2px] leading-[1.55] text-slate-600">
                      {description}
                    </p>

                  </article>
                )
              })}

            </div>

          </section>
        )}

        {/* =================================================
            EDUCATION
        ================================================== */}

        {displayEducation.length > 0 && (
          <section className="mb-4">

            <ATSSectionTitle>
              Education
            </ATSSectionTitle>

            <div className="mt-3 space-y-2">

              {displayEducation.slice(0, 2).map((item, index) => {

                const degree = getValue(
                  item,
                  ["degree", "qualification", "title", "program"],
                  "Bachelor of Business Administration"
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

                    <div>

                      <h3 className="text-[6px] font-bold">
                        {degree}
                      </h3>

                      <p className="mt-0.5 text-[5px] text-slate-600">
                        {institution}
                      </p>

                    </div>

                    <span className="text-[4.7px] text-slate-500">
                      {startDate} — {endDate}
                    </span>

                  </div>
                )
              })}

            </div>

          </section>
        )}

        {/* =================================================
            PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section>

            <ATSSectionTitle>
              Projects
            </ATSSectionTitle>

            <div className="mt-3 space-y-2.5">

              {displayProjects.slice(0, 2).map((item, index) => {

                const name = getValue(
                  item,
                  ["name", "projectName", "title"],
                  "Marketing Analytics Dashboard"
                )

                const technologies = getValue(
                  item,
                  ["technologies", "technology", "techStack", "stack"],
                  "Excel • Google Analytics"
                )

                const description = getValue(
                  item,
                  ["description", "details"],
                  "Created a dashboard for analyzing campaign performance."
                )

                return (
                  <article key={item.id || index}>

                    <h3 className="text-[6px] font-bold">
                      {name}
                    </h3>

                    <p className="mt-0.5 text-[4.7px] font-medium text-slate-600">
                      {Array.isArray(technologies)
                        ? technologies.join(" • ")
                        : technologies}
                    </p>

                    <p className="mt-1 text-[5px] leading-[1.5] text-slate-600">
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
  )
}


/* =========================================================
   ATS SECTION TITLE
========================================================= */

function ATSSectionTitle({ children }) {
  return (
    <h2 className="border-b border-slate-900 pb-1 text-[7px] font-bold uppercase tracking-[0.08em]">
      {children}
    </h2>
  )
}


export default ATSFocusPreview