function ProfessionalPreview({ formData = {} }) {
  const {
    fullName = "Sarah Johnson",
    jobTitle = "Product Manager",
    email = "sarah@email.com",
    phone = "+1 555 234 5678",
    location = "Chicago, IL",
    linkedin = "linkedin.com/in/sarah",
    github = "",
    summary =
      "Results-driven professional with experience leading projects, improving business processes, and delivering measurable results.",
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
          "Project Management",
          "Leadership",
          "Communication",
          "Problem Solving",
          "Agile",
          "Data Analysis",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Product Manager",
            company: "Global Technologies",
            startDate: "2023",
            endDate: "Present",
            description:
              "Led cross-functional teams and delivered product initiatives that improved customer experience and business performance.",
          },
          {
            jobTitle: "Project Coordinator",
            company: "Business Solutions",
            startDate: "2021",
            endDate: "2023",
            description:
              "Coordinated projects, managed timelines, and collaborated with stakeholders to ensure successful delivery.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "BBA Business Administration",
            institution: "University of Chicago",
            startDate: "2017",
            endDate: "2021",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Business Growth Strategy",
            technologies: "",
            description:
              "Developed a strategic initiative focused on improving customer acquisition and operational efficiency.",
          },
          {
            name: "Digital Transformation",
            technologies: "",
            description:
              "Supported the implementation of digital tools and improved internal business workflows.",
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

      <header className="border-b-2 border-buildcv-navy px-7 py-5">

        <div className="flex items-start justify-between gap-4">

          <div className="min-w-0">

            <h1 className="truncate text-[16px] font-bold tracking-tight">
              {fullName}
            </h1>

            <p className="mt-1 truncate text-[7px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              {jobTitle}
            </p>

          </div>

          {/* INITIALS */}

          <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-buildcv-navy text-[7px] font-bold text-white">
            {getInitials(fullName)}
          </div>

        </div>

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5.5px] text-slate-500">

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

      <div className="px-7 py-5">

        {/* ===================================================
            PROFILE
        ==================================================== */}

        {summary && (
          <section className="mb-4">

            <PreviewSectionTitle>
              Professional Profile
            </PreviewSectionTitle>

            <p className="mt-1.5 text-[6.5px] leading-[1.5] text-slate-500">
              {summary}
            </p>

          </section>
        )}

        {/* ===================================================
            TWO COLUMN AREA
        ==================================================== */}

        <div className="grid grid-cols-[1fr_0.34fr] gap-5">

          {/* =================================================
              LEFT COLUMN
          ================================================== */}

          <main>

            {/* EXPERIENCE */}

            {displayExperience.length > 0 && (
              <section className="mb-4">

                <PreviewSectionTitle>
                  Experience
                </PreviewSectionTitle>

                <div className="mt-2 space-y-3">

                  {displayExperience.slice(0, 3).map((item, index) => {

                    const title = getValue(
                      item,
                      ["jobTitle", "position", "title", "role"],
                      "Product Manager"
                    )

                    const company = getValue(
                      item,
                      ["company", "organization", "employer"],
                      "Global Technologies"
                    )

                    const startDate = getValue(
                      item,
                      ["startDate", "start", "from"],
                      "2023"
                    )

                    const endDate = getValue(
                      item,
                      ["endDate", "end", "to"],
                      "Present"
                    )

                    const description = getValue(
                      item,
                      ["description", "details", "responsibilities"],
                      "Led projects and collaborated with cross-functional teams to deliver measurable business results."
                    )

                    return (
                      <article
                        key={item.id || index}
                      >

                        <div className="flex items-start justify-between gap-2">

                          <div className="min-w-0">

                            <h3 className="truncate text-[7px] font-bold">
                              {title}
                            </h3>

                            <p className="mt-0.5 truncate text-[5.5px] font-medium text-buildcv-violet">
                              {company}
                            </p>

                          </div>

                          <span className="shrink-0 text-[5px] text-slate-400">
                            {startDate} — {endDate}
                          </span>

                        </div>

                        {description && (
                          <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
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

                <PreviewSectionTitle>
                  Selected Projects
                </PreviewSectionTitle>

                <div className="mt-2 space-y-2">

                  {displayProjects.slice(0, 2).map((item, index) => {

                    const name = getValue(
                      item,
                      ["name", "projectName", "title"],
                      "Business Growth Strategy"
                    )

                    const technologies = getValue(
                      item,
                      ["technologies", "technology", "techStack", "stack"],
                      ""
                    )

                    const description = getValue(
                      item,
                      ["description", "details"],
                      "Developed a strategic project focused on improving business performance."
                    )

                    return (
                      <div
                        key={item.id || index}
                        className="border-l-2 border-slate-200 pl-2"
                      >

                        <h3 className="text-[7px] font-bold">
                          {name}
                        </h3>

                        {technologies && (
                          <p className="mt-0.5 text-[5px] text-buildcv-violet">
                            {Array.isArray(technologies)
                              ? technologies.join(" • ")
                              : technologies}
                          </p>
                        )}

                        <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
                          {description}
                        </p>

                      </div>
                    )
                  })}

                </div>

              </section>
            )}

          </main>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================== */}

          <aside className="border-l border-slate-200 pl-4">

            {/* SKILLS */}

            {displaySkills.length > 0 && (
              <section className="mb-5">

                <h2 className="text-[6.5px] font-bold uppercase tracking-[0.12em]">
                  Skills
                </h2>

                <div className="mb-2 mt-1.5 h-px w-5 bg-buildcv-violet" />

                <div className="space-y-1.5">

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
                        className="text-[5.5px] leading-[1.4] text-slate-500"
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

                <h2 className="text-[6.5px] font-bold uppercase tracking-[0.12em]">
                  Education
                </h2>

                <div className="mb-2 mt-1.5 h-px w-5 bg-buildcv-violet" />

                <div className="space-y-2">

                  {displayEducation.slice(0, 2).map((item, index) => {

                    const degree = getValue(
                      item,
                      ["degree", "qualification", "title", "program"],
                      "BBA Business Administration"
                    )

                    const institution = getValue(
                      item,
                      ["institution", "school", "university", "college"],
                      "University"
                    )

                    const endDate = getValue(
                      item,
                      ["endDate", "end", "to"],
                      "2021"
                    )

                    return (
                      <div key={item.id || index}>

                        <h3 className="text-[6px] font-bold leading-[1.4]">
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

        </div>

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
    return "SJ"
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
   SECTION TITLE
========================================================= */

function PreviewSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h3 className="shrink-0 text-[6.5px] font-bold uppercase tracking-[0.12em] text-slate-900">
        {children}
      </h3>

      <div className="h-px flex-1 bg-slate-200" />

    </div>
  )
}


export default ProfessionalPreview