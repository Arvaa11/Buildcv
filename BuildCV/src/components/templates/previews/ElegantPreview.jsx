function ElegantPreview({ formData = {} }) {
  const {
    fullName = "Sophia Williams",
    jobTitle = "Marketing Strategist",
    email = "sophia@email.com",
    phone = "+1 555 456 7890",
    location = "Boston, MA",
    linkedin = "linkedin.com/in/sophia",
    summary =
      "Strategic marketing professional with experience developing brand strategies, managing campaigns, and helping organizations achieve sustainable growth.",
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
          "Brand Strategy",
          "Digital Marketing",
          "Business Strategy",
          "Market Research",
          "Content Strategy",
          "Analytics",
          "Campaign Management",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Senior Marketing Strategist",
            company: "Sterling & Co.",
            startDate: "2022",
            endDate: "Present",
            description:
              "Developed integrated marketing strategies across digital channels and led campaigns that increased brand awareness and customer engagement.",
          },
          {
            jobTitle: "Marketing Manager",
            company: "Horizon Group",
            startDate: "2019",
            endDate: "2022",
            description:
              "Managed multi-channel campaigns, collaborated with creative teams, and used analytics to optimize marketing performance.",
          },
          {
            jobTitle: "Marketing Associate",
            company: "Bright Media",
            startDate: "2017",
            endDate: "2019",
            description:
              "Supported marketing campaigns, market research, content planning, and customer engagement initiatives.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "MBA, Marketing",
            institution: "Boston University",
            startDate: "2015",
            endDate: "2017",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Brand Growth Strategy",
            description:
              "Developed a complete growth strategy that improved customer acquisition and digital engagement.",
          },
          {
            name: "Digital Campaign",
            description:
              "Planned and executed a cross-platform campaign focused on increasing qualified leads.",
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
    <div className="h-full w-full overflow-hidden bg-[#fffdf9] text-gray-800">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="px-6 pb-5 pt-6 text-center">

        <p className="text-[5.5px] font-medium uppercase tracking-[0.3em] text-yellow-700">
          Professional Resume
        </p>

        <h1 className="mt-2 text-[17px] font-semibold tracking-wide">
          {fullName}
        </h1>

        <p className="mt-1 text-[6.5px] font-medium tracking-wide text-gray-500">
          {jobTitle}
        </p>

        <div className="mx-auto mt-3 h-px w-12 bg-yellow-700" />

        {/* CONTACT */}

        <div className="mt-3 flex flex-wrap justify-center gap-x-3 gap-y-1 text-[5px] text-gray-500">

          {email && <span>{email}</span>}

          {phone && <span>{phone}</span>}

          {location && <span>{location}</span>}

          {linkedin && <span>{linkedin}</span>}

        </div>

      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <div className="px-6 pb-6">

        {/* =================================================
            PROFILE
        ================================================== */}

        {summary && (
          <section className="mb-5">

            <ElegantTitle>
              Profile
            </ElegantTitle>

            <p className="mx-auto mt-2 max-w-[90%] text-center text-[5.5px] leading-[1.6] text-gray-500">
              {summary}
            </p>

          </section>
        )}

        {/* =================================================
            TWO COLUMN CONTENT
        ================================================== */}

        <div className="grid grid-cols-[1fr_0.38fr] gap-5">

          {/* =================================================
              LEFT COLUMN
          ================================================== */}

          <main>

            {/* EXPERIENCE */}

            {displayExperience.length > 0 && (
              <section className="mb-5">

                <ElegantMainTitle>
                  Professional Experience
                </ElegantMainTitle>

                <div className="mt-3 space-y-3">

                  {displayExperience.slice(0, 3).map((item, index) => {

                    const title = getValue(
                      item,
                      ["jobTitle", "position", "title", "role"],
                      "Senior Marketing Strategist"
                    )

                    const company = getValue(
                      item,
                      ["company", "organization", "employer"],
                      "Sterling & Co."
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
                      "Developed integrated marketing strategies across digital channels."
                    )

                    return (
                      <article key={item.id || index}>

                        <div className="flex items-start justify-between gap-2">

                          <div className="min-w-0">

                            <h3 className="truncate text-[6.5px] font-semibold">
                              {title}
                            </h3>

                            <p className="mt-0.5 truncate text-[5.5px] text-yellow-700">
                              {company}
                            </p>

                          </div>

                          <span className="shrink-0 text-[4.8px] text-gray-400">
                            {startDate} — {endDate}
                          </span>

                        </div>

                        <p className="mt-1 text-[5.2px] leading-[1.55] text-gray-500">
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

                <ElegantMainTitle>
                  Selected Projects
                </ElegantMainTitle>

                <div className="mt-3 space-y-2.5">

                  {displayProjects.slice(0, 3).map((item, index) => {

                    const name = getValue(
                      item,
                      ["name", "projectName", "title"],
                      "Brand Growth Strategy"
                    )

                    const description = getValue(
                      item,
                      ["description", "details"],
                      "Developed a complete growth strategy that improved customer acquisition."
                    )

                    return (
                      <div key={item.id || index}>

                        <h3 className="text-[6.2px] font-semibold">
                          {name}
                        </h3>

                        <p className="mt-0.5 text-[5px] leading-[1.5] text-gray-500">
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
              RIGHT COLUMN
          ================================================== */}

          <aside className="border-l border-gray-200 pl-4">

            {/* SKILLS */}

            {displaySkills.length > 0 && (
              <section className="mb-5">

                <ElegantSideTitle>
                  Expertise
                </ElegantSideTitle>

                <ul className="mt-2 space-y-1.5 text-[5px] leading-[1.4] text-gray-500">

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
                      <li key={skill.id || index}>
                        {skillName}
                      </li>
                    )
                  })}

                </ul>

              </section>
            )}

            {/* EDUCATION */}

            {displayEducation.length > 0 && (
              <section className="mb-5">

                <ElegantSideTitle>
                  Education
                </ElegantSideTitle>

                <div className="mt-2 space-y-2">

                  {displayEducation.slice(0, 2).map((item, index) => {

                    const degree = getValue(
                      item,
                      ["degree", "qualification", "title", "program"],
                      "MBA, Marketing"
                    )

                    const institution = getValue(
                      item,
                      ["institution", "school", "university", "college"],
                      "Boston University"
                    )

                    const endDate = getValue(
                      item,
                      ["endDate", "end", "to"],
                      "2017"
                    )

                    return (
                      <div key={item.id || index}>

                        <h3 className="text-[5.5px] font-semibold leading-[1.4]">
                          {degree}
                        </h3>

                        <p className="mt-0.5 text-[4.8px] leading-[1.4] text-gray-500">
                          {institution}
                        </p>

                        <p className="mt-0.5 text-[4.8px] text-gray-400">
                          {endDate}
                        </p>

                      </div>
                    )
                  })}

                </div>

              </section>
            )}

            {/* CERTIFICATIONS */}

            <section className="mb-5">

              <ElegantSideTitle>
                Certifications
              </ElegantSideTitle>

              <ul className="mt-2 space-y-1.5 text-[5px] leading-[1.4] text-gray-500">

                <li>Google Analytics</li>
                <li>HubSpot Marketing</li>
                <li>Meta Blueprint</li>

              </ul>

            </section>

            {/* LANGUAGES */}

            <section>

              <ElegantSideTitle>
                Languages
              </ElegantSideTitle>

              <div className="mt-2 space-y-1.5 text-[5px] text-gray-500">

                <div className="flex justify-between gap-1">
                  <span>English</span>
                  <span>Native</span>
                </div>

                <div className="flex justify-between gap-1">
                  <span>French</span>
                  <span>Fluent</span>
                </div>

              </div>

            </section>

          </aside>

        </div>

      </div>

    </div>
  )
}


/* =========================================================
   CENTER SECTION TITLE
========================================================= */

function ElegantTitle({ children }) {
  return (
    <>
      <h2 className="text-center text-[7px] font-semibold tracking-wide text-gray-800">
        {children}
      </h2>

      <div className="mx-auto mt-1.5 h-px w-5 bg-yellow-700" />
    </>
  )
}


/* =========================================================
   MAIN SECTION TITLE
========================================================= */

function ElegantMainTitle({ children }) {
  return (
    <div>

      <h2 className="text-[7px] font-semibold">
        {children}
      </h2>

      <div className="mb-2 mt-1 h-px bg-gray-200" />

    </div>
  )
}


/* =========================================================
   SIDEBAR SECTION TITLE
========================================================= */

function ElegantSideTitle({ children }) {
  return (
    <div>

      <h2 className="text-[6.5px] font-semibold">
        {children}
      </h2>

      <div className="mt-1.5 h-px w-5 bg-yellow-700" />

    </div>
  )
}


export default ElegantPreview