function AcademicPreview({ formData = {} }) {
  const {
    fullName = "Emily Johnson",
    jobTitle = "Research Assistant",
    email = "emily.johnson@email.com",
    phone = "+1 555 345 6789",
    location = "Boston, MA",
    linkedin = "linkedin.com/in/emilyjohnson",
    summary =
      "Dedicated academic professional with experience in research, data analysis, academic writing, and collaborative projects.",
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
          "Research",
          "Data Analysis",
          "Academic Writing",
          "Literature Review",
          "SPSS",
          "Python",
          "Microsoft Office",
          "Presentation",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Research Assistant",
            company: "University Research Center",
            startDate: "2023",
            endDate: "Present",
            description:
              "Supported research projects through literature reviews, data collection, analysis, documentation, and academic reporting.",
          },
          {
            jobTitle: "Teaching Assistant",
            company: "University Department",
            startDate: "2021",
            endDate: "2023",
            description:
              "Assisted faculty members with course preparation, student support, grading, and academic activities.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "M.S. Computer Science",
            institution: "Boston University",
            startDate: "2021",
            endDate: "2023",
          },
          {
            degree: "B.S. Computer Science",
            institution: "University of Massachusetts",
            startDate: "2017",
            endDate: "2021",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Machine Learning Research",
            technologies: "Python • Scikit-learn • Pandas",
            description:
              "Investigated machine learning methods for improving predictive performance on real-world datasets.",
          },
          {
            name: "Academic Research Project",
            technologies: "Research • Data Analysis • Statistics",
            description:
              "Conducted research, analyzed findings, and prepared a structured academic report.",
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

      <header className="border-b border-slate-300 px-6 py-5">

        <h1 className="font-serif text-[17px] font-bold tracking-tight">
          {fullName}
        </h1>

        <p className="mt-1 text-[6.5px] font-medium text-slate-600">
          {jobTitle}
        </p>

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px] text-slate-500">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {linkedin && <span>{linkedin}</span>}

        </div>

      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="px-6 py-5">

        {/* =================================================
            RESEARCH PROFILE
        ================================================== */}

        {summary && (
          <section className="mb-5">

            <AcademicTitle>
              Research Profile
            </AcademicTitle>

            <p className="mt-2 text-[5.5px] leading-[1.6] text-slate-600">
              {summary}
            </p>

          </section>
        )}

        {/* =================================================
            EDUCATION
        ================================================== */}

        {displayEducation.length > 0 && (
          <section className="mb-5">

            <AcademicTitle>
              Education
            </AcademicTitle>

            <div className="mt-3 space-y-2.5">

              {displayEducation.slice(0, 3).map((item, index) => {

                const degree = getValue(
                  item,
                  ["degree", "qualification", "title", "program"],
                  "M.S. Computer Science"
                )

                const institution = getValue(
                  item,
                  ["institution", "school", "university", "college"],
                  "Boston University"
                )

                const startDate = getValue(
                  item,
                  ["startDate", "start", "from"],
                  "2021"
                )

                const endDate = getValue(
                  item,
                  ["endDate", "end", "to"],
                  "2023"
                )

                return (
                  <article
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

                    <span className="shrink-0 text-[4.7px] text-slate-400">
                      {startDate} — {endDate}
                    </span>

                  </article>
                )
              })}

            </div>

          </section>
        )}

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {displayExperience.length > 0 && (
          <section className="mb-5">

            <AcademicTitle>
              Academic Experience
            </AcademicTitle>

            <div className="mt-3 space-y-3">

              {displayExperience.slice(0, 3).map((item, index) => {

                const title = getValue(
                  item,
                  ["jobTitle", "position", "title", "role"],
                  "Research Assistant"
                )

                const company = getValue(
                  item,
                  ["company", "organization", "employer"],
                  "University Research Center"
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
                  "Supported research activities, data analysis, and academic documentation."
                )

                return (
                  <article key={item.id || index}>

                    <div className="flex items-start justify-between gap-3">

                      <div>

                        <h3 className="text-[6.2px] font-bold">
                          {title}
                        </h3>

                        <p className="mt-0.5 text-[5.2px] italic text-slate-600">
                          {company}
                        </p>

                      </div>

                      <span className="shrink-0 text-[4.7px] text-slate-400">
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
            RESEARCH PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section className="mb-5">

            <AcademicTitle>
              Research Projects
            </AcademicTitle>

            <div className="mt-3 grid grid-cols-2 gap-3">

              {displayProjects.slice(0, 2).map((item, index) => {

                const name = getValue(
                  item,
                  ["name", "projectName", "title"],
                  "Machine Learning Research"
                )

                const technologies = getValue(
                  item,
                  ["technologies", "technology", "techStack", "stack"],
                  "Research • Data Analysis"
                )

                const description = getValue(
                  item,
                  ["description", "details"],
                  "Conducted research and analyzed findings."
                )

                return (
                  <article
                    key={item.id || index}
                    className="border border-slate-200 p-2.5"
                  >

                    <h3 className="text-[5.8px] font-bold">
                      {name}
                    </h3>

                    <p className="mt-0.5 text-[4.5px] italic text-slate-500">
                      {Array.isArray(technologies)
                        ? technologies.join(" • ")
                        : technologies}
                    </p>

                    <p className="mt-1 text-[4.8px] leading-[1.5] text-slate-600">
                      {description}
                    </p>

                  </article>
                )
              })}

            </div>

          </section>
        )}

        {/* =================================================
            SKILLS
        ================================================== */}

        {displaySkills.length > 0 && (
          <section>

            <AcademicTitle>
              Research & Technical Skills
            </AcademicTitle>

            <div className="mt-3 grid grid-cols-4 gap-x-3 gap-y-1.5">

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
                    className="text-[4.8px] text-slate-600"
                  >
                    {skillName}
                  </span>
                )
              })}

            </div>

          </section>
        )}

      </div>

    </div>
  )
}


/* =========================================================
   ACADEMIC SECTION TITLE
========================================================= */

function AcademicTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2 className="shrink-0 font-serif text-[7px] font-bold uppercase tracking-[0.08em]">
        {children}
      </h2>

      <div className="h-px flex-1 bg-slate-300" />

    </div>
  )
}


export default AcademicPreview