function CreativePreview({ formData = {} }) {
  const {
    fullName = "Olivia Anderson",
    jobTitle = "UI/UX Designer",
    email = "olivia@email.com",
    phone = "+1 555 234 5678",
    location = "New York, NY",
    linkedin = "linkedin.com/in/olivia",
    github = "",
    summary =
      "Creative designer with strong experience creating user-centered digital experiences, visual identities, and engaging brand systems.",
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
          "UI/UX Design",
          "Branding",
          "Figma",
          "Adobe XD",
          "Photoshop",
          "Illustrator",
        ]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Senior UI/UX Designer",
            company: "Studio North",
            startDate: "2022",
            endDate: "Present",
            description:
              "Designed digital products and brand experiences for technology and lifestyle companies while leading design systems.",
          },
          {
            jobTitle: "Product Designer",
            company: "Pixel Works",
            startDate: "2019",
            endDate: "2022",
            description:
              "Created responsive interfaces, prototypes, and user flows while working closely with developers and product managers.",
          },
          {
            jobTitle: "Visual Designer",
            company: "Creative Lab",
            startDate: "2017",
            endDate: "2019",
            description:
              "Developed marketing graphics, social media assets, and visual concepts for growing brands.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "B.A. Graphic Design",
            institution: "School of Visual Arts",
            startDate: "2013",
            endDate: "2017",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Fintech Mobile App",
            technologies: "Figma • UX Research • Prototyping",
            description:
              "Complete UX redesign focused on usability and conversion.",
          },
          {
            name: "Brand Identity",
            technologies: "Illustrator • Photoshop • Branding",
            description:
              "Created a complete visual identity and digital brand system.",
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

      <header className="relative bg-gray-900 px-7 py-6 text-white">

        {/* Decorative Shape */}

        <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-buildcv-violet opacity-80" />

        <div className="relative z-10">

          <p className="mb-1.5 text-[6px] font-bold uppercase tracking-[0.25em] text-purple-300">
            Creative Professional
          </p>

          <h1 className="truncate text-[17px] font-bold tracking-tight">
            {fullName}
          </h1>

          <p className="mt-1 text-[7px] font-medium text-gray-300">
            {jobTitle}
          </p>

          {/* CONTACT */}

          <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5.5px] text-gray-300">

            {email && <span>{email}</span>}

            {phone && <span>{phone}</span>}

            {location && <span>{location}</span>}

            {linkedin && <span>{linkedin}</span>}

            {github && <span>{github}</span>}

          </div>

        </div>

      </header>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="grid grid-cols-[0.35fr_1fr]">

        {/* =================================================
            SIDEBAR
        ================================================== */}

        <aside className="border-r border-gray-200 bg-gray-50 px-4 py-5">

          {/* PROFILE */}

          {summary && (
            <section className="mb-5">

              <CreativeSectionTitle>
                Profile
              </CreativeSectionTitle>

              <p className="mt-2 text-[5.5px] leading-[1.6] text-gray-600">
                {summary}
              </p>

            </section>
          )}

          {/* SKILLS */}

          {displaySkills.length > 0 && (
            <section className="mb-5">

              <CreativeSectionTitle>
                Skills
              </CreativeSectionTitle>

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
                      className="border-l-2 border-buildcv-violet pl-2 text-[5.5px] font-medium leading-[1.4] text-gray-600"
                    >
                      {skillName}
                    </div>
                  )
                })}

              </div>

            </section>
          )}

          {/* TOOLS */}

          <section className="mb-5">

            <CreativeSectionTitle>
              Tools
            </CreativeSectionTitle>

            <p className="mt-2 text-[5.5px] leading-[1.7] text-gray-600">
              Figma · Photoshop · Illustrator ·
              <br />
              After Effects · Notion · Miro
            </p>

          </section>

          {/* EDUCATION */}

          {displayEducation.length > 0 && (
            <section>

              <CreativeSectionTitle>
                Education
              </CreativeSectionTitle>

              <div className="mt-2 space-y-2">

                {displayEducation.slice(0, 2).map((item, index) => {

                  const degree = getValue(
                    item,
                    ["degree", "qualification", "title", "program"],
                    "B.A. Graphic Design"
                  )

                  const institution = getValue(
                    item,
                    ["institution", "school", "university", "college"],
                    "School of Visual Arts"
                  )

                  const endDate = getValue(
                    item,
                    ["endDate", "end", "to"],
                    "2017"
                  )

                  return (
                    <div key={item.id || index}>

                      <h3 className="text-[5.8px] font-bold leading-[1.4]">
                        {degree}
                      </h3>

                      <p className="mt-0.5 text-[5px] leading-[1.4] text-gray-500">
                        {institution}
                      </p>

                      <p className="mt-0.5 text-[4.5px] text-gray-400">
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

              <CreativeMainTitle>
                Experience
              </CreativeMainTitle>

              <div className="mt-3 space-y-3.5">

                {displayExperience.slice(0, 3).map((item, index) => {

                  const title = getValue(
                    item,
                    ["jobTitle", "position", "title", "role"],
                    "Senior UI/UX Designer"
                  )

                  const company = getValue(
                    item,
                    ["company", "organization", "employer"],
                    "Studio North"
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
                    "Designed digital products and brand experiences for modern companies."
                  )

                  return (
                    <article key={item.id || index}>

                      <div className="flex items-start justify-between gap-2">

                        <div className="min-w-0">

                          <h3 className="truncate text-[7px] font-bold">
                            {title}
                          </h3>

                          <p className="mt-0.5 truncate text-[5.5px] font-medium text-buildcv-violet">
                            {company}
                          </p>

                        </div>

                        <span className="shrink-0 text-[5px] text-gray-400">
                          {startDate} — {endDate}
                        </span>

                      </div>

                      <p className="mt-1 text-[5.5px] leading-[1.55] text-gray-600">
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

              <CreativeMainTitle>
                Selected Projects
              </CreativeMainTitle>

              <div className="mt-3 grid grid-cols-2 gap-2">

                {displayProjects.slice(0, 2).map((item, index) => {

                  const name = getValue(
                    item,
                    ["name", "projectName", "title"],
                    "Fintech Mobile App"
                  )

                  const technologies = getValue(
                    item,
                    ["technologies", "technology", "techStack", "stack"],
                    ""
                  )

                  const description = getValue(
                    item,
                    ["description", "details"],
                    "Complete UX redesign focused on usability and conversion."
                  )

                  return (
                    <div
                      key={item.id || index}
                      className="border border-gray-200 p-2.5"
                    >

                      <h3 className="text-[6.5px] font-bold">
                        {name}
                      </h3>

                      {technologies && (
                        <p className="mt-0.5 text-[4.8px] text-buildcv-violet">
                          {Array.isArray(technologies)
                            ? technologies.join(" • ")
                            : technologies}
                        </p>
                      )}

                      <p className="mt-1 text-[5px] leading-[1.5] text-gray-500">
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
   SIDEBAR SECTION TITLE
========================================================= */

function CreativeSectionTitle({ children }) {
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
   MAIN SECTION TITLE
========================================================= */

function CreativeMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2 className="shrink-0 text-[7px] font-bold uppercase tracking-[0.14em] text-gray-900">
        {children}
      </h2>

      <div className="h-px flex-1 bg-gray-200" />

    </div>
  )
}


export default CreativePreview