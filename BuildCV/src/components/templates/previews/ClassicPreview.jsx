function ClassicPreview({ formData = {} }) {
  const {
    fullName = "James Wilson",
    jobTitle = "Business Analyst",
    email = "james.wilson@email.com",
    phone = "+1 555 123 4567",
    location = "Chicago, IL",
    linkedin = "linkedin.com/in/jameswilson",
    summary =
      "Detail-oriented professional with strong experience in business analysis, data-driven decision making, process improvement, and stakeholder collaboration.",
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
          "Business Analysis",
          "Data Analysis",
          "Microsoft Excel",
          "SQL",
          "Process Improvement",
          "Project Management",
          "Reporting",
          "Stakeholder Management",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Senior Business Analyst",
            company: "Sterling Consulting Group",
            startDate: "2022",
            endDate: "Present",
            description:
              "Analyzed business requirements, created reports, and identified process improvements to support business decisions.",
          },
          {
            jobTitle: "Business Analyst",
            company: "Northstar Solutions",
            startDate: "2019",
            endDate: "2022",
            description:
              "Gathered requirements, documented project specifications, and supported data analysis initiatives.",
          },
          {
            jobTitle: "Junior Business Analyst",
            company: "Global Business Services",
            startDate: "2017",
            endDate: "2019",
            description:
              "Assisted with business research, reporting, data analysis, and project documentation.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "Bachelor of Business Administration",
            institution: "University of Illinois",
            startDate: "2013",
            endDate: "2017",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Business Analytics Dashboard",
            description:
              "Created a dashboard to visualize business performance and support management decision-making.",
          },
          {
            name: "Process Improvement Project",
            description:
              "Analyzed existing workflows and proposed improvements to increase operational efficiency.",
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
    <div className="h-full w-full overflow-hidden bg-white text-gray-900">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="border-b border-gray-900 px-6 py-5">

        <h1 className="font-serif text-[17px] font-bold tracking-tight">
          {fullName}
        </h1>

        <p className="mt-1 text-[6.5px] font-medium text-gray-600">
          {jobTitle}
        </p>

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5px] text-gray-600">

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
            SUMMARY
        ================================================== */}

        {summary && (
          <section className="mb-5">

            <ClassicTitle>
              Professional Summary
            </ClassicTitle>

            <p className="mt-2 text-[5.5px] leading-[1.6] text-gray-600">
              {summary}
            </p>

          </section>
        )}

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {displayExperience.length > 0 && (
          <section className="mb-5">

            <ClassicTitle>
              Professional Experience
            </ClassicTitle>

            <div className="mt-3 space-y-3.5">

              {displayExperience.slice(0, 3).map((item, index) => {

                const title = getValue(
                  item,
                  ["jobTitle", "position", "title", "role"],
                  "Senior Business Analyst"
                )

                const company = getValue(
                  item,
                  ["company", "organization", "employer"],
                  "Sterling Consulting Group"
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
                  "Analyzed business requirements and supported business decision-making."
                )

                return (
                  <article key={item.id || index}>

                    <div className="flex items-start justify-between gap-3">

                      <div className="min-w-0">

                        <h3 className="truncate text-[6.5px] font-bold">
                          {title}
                        </h3>

                        <p className="mt-0.5 truncate text-[5.3px] italic text-gray-600">
                          {company}
                        </p>

                      </div>

                      <span className="shrink-0 text-[4.7px] text-gray-500">
                        {startDate} — {endDate}
                      </span>

                    </div>

                    <p className="mt-1 text-[5.2px] leading-[1.55] text-gray-600">
                      • {description}
                    </p>

                  </article>
                )
              })}

            </div>

          </section>
        )}

        {/* =================================================
            EDUCATION + SKILLS
        ================================================== */}

        <div className="grid grid-cols-[1fr_0.8fr] gap-5">

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <ClassicTitle>
                Education
              </ClassicTitle>

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
                    "University of Illinois"
                  )

                  const endDate = getValue(
                    item,
                    ["endDate", "end", "to"],
                    "2017"
                  )

                  return (
                    <div key={item.id || index}>

                      <h3 className="text-[5.8px] font-bold">
                        {degree}
                      </h3>

                      <p className="mt-0.5 text-[5px] italic text-gray-600">
                        {institution}
                      </p>

                      <p className="mt-0.5 text-[4.5px] text-gray-500">
                        {endDate}
                      </p>

                    </div>
                  )
                })}

              </div>

            </section>
          )}

          {/* SKILLS */}

          {displaySkills.length > 0 && (
            <section>

              <ClassicTitle>
                Skills
              </ClassicTitle>

              <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5">

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
                    <span
                      key={skill.id || index}
                      className="text-[4.8px] leading-[1.4] text-gray-600"
                    >
                      {skillName}
                    </span>
                  )
                })}

              </div>

            </section>
          )}

        </div>

        {/* =================================================
            PROJECTS
        ================================================== */}

        {displayProjects.length > 0 && (
          <section className="mt-5">

            <ClassicTitle>
              Projects
            </ClassicTitle>

            <div className="mt-3 grid grid-cols-2 gap-3">

              {displayProjects.slice(0, 2).map((item, index) => {

                const name = getValue(
                  item,
                  ["name", "projectName", "title"],
                  "Business Analytics Dashboard"
                )

                const description = getValue(
                  item,
                  ["description", "details"],
                  "Created a dashboard to visualize business performance."
                )

                return (
                  <div key={item.id || index}>

                    <h3 className="text-[5.8px] font-bold">
                      {name}
                    </h3>

                    <p className="mt-1 text-[4.8px] leading-[1.5] text-gray-600">
                      {description}
                    </p>

                  </div>
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
   CLASSIC SECTION TITLE
========================================================= */

function ClassicTitle({ children }) {
  return (
    <h2 className="border-b border-gray-900 pb-1 font-serif text-[7px] font-bold">
      {children}
    </h2>
  )
}


export default ClassicPreview