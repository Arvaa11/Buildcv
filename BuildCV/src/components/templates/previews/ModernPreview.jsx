function ModernPreview({ formData = {} }) {
  const {
    fullName = "Alex Morgan",
    jobTitle = "Frontend Developer",
    email = "alex@email.com",
    phone = "+1 234 567",
    location = "New York",
    linkedin = "linkedin.com/alex",
    github = "github.com/alex",
    summary =
      "Frontend developer passionate about creating responsive and user-friendly web experiences.",
    skills = [],
    experience = [],
    education = [],
    projects = [],
  } = formData

  // -------------------------------------------------------
  // FALLBACK DATA FOR TEMPLATE PREVIEW
  // -------------------------------------------------------

  const displaySkills =
    skills.length > 0
      ? skills
      : ["React", "JavaScript", "TypeScript", "Git", "CSS"]

  const displayExperience =
    experience.length > 0
      ? experience
      : [
          {
            jobTitle: "Frontend Developer",
            company: "Tech Company",
            startDate: "2023",
            endDate: "Present",
            description:
              "Developed responsive interfaces and reusable React components for modern web applications.",
          },
          {
            jobTitle: "Web Developer",
            company: "Creative Studio",
            startDate: "2021",
            endDate: "2023",
            description:
              "Built interactive websites using JavaScript, CSS, and modern frontend technologies.",
          },
        ]

  const displayEducation =
    education.length > 0
      ? education
      : [
          {
            degree: "BS Computer Science",
            institution: "University of Technology",
            startDate: "2019",
            endDate: "2023",
          },
        ]

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            name: "Portfolio Website",
            technologies: "React • Tailwind CSS • JavaScript",
            description:
              "Designed and developed a responsive portfolio website with animations and interactive components.",
          },
        ]

  // -------------------------------------------------------
  // HELPER
  // -------------------------------------------------------

  function getValue(item, keys, fallback = "") {
    for (const key of keys) {
      if (item?.[key]) {
        return item[key]
      }
    }

    return fallback
  }

  return (
    <div className="h-full w-full overflow-hidden bg-white p-5 text-slate-900">

      {/* =====================================================
          HEADER
      ====================================================== */}

      <div className="flex items-start justify-between gap-3">

        <div className="min-w-0">

          <h2 className="truncate text-[15px] font-extrabold tracking-tight">
            {fullName}
          </h2>

          <p className="mt-1 truncate text-[7px] font-bold uppercase tracking-[0.12em] text-buildcv-violet">
            {jobTitle}
          </p>

        </div>

        {/* INITIALS */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-buildcv-violet-50 text-[8px] font-bold text-buildcv-violet">
          {getInitials(fullName)}
        </div>

      </div>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5.5px] text-slate-500">

        {email && <span>{email}</span>}

        {phone && <span>{phone}</span>}

        {location && <span>{location}</span>}

        {linkedin && <span>{linkedin}</span>}

        {github && <span>{github}</span>}

      </div>

      <div className="my-3 h-px bg-slate-200" />

      {/* =====================================================
          PROFILE
      ====================================================== */}

      {summary && (
        <section>

          <PreviewSectionTitle>
            Profile
          </PreviewSectionTitle>

          <p className="mt-1.5 text-[6.5px] leading-[1.5] text-slate-500">
            {summary}
          </p>

        </section>
      )}

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      {displayExperience.length > 0 && (
        <section className="mt-4">

          <PreviewSectionTitle>
            Experience
          </PreviewSectionTitle>

          <div className="mt-2 space-y-3">

            {displayExperience.slice(0, 3).map((item, index) => {

              const title = getValue(
                item,
                ["jobTitle", "position", "title", "role"],
                "Frontend Developer"
              )

              const company = getValue(
                item,
                ["company", "organization", "employer"],
                "Tech Company"
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
                "Developed responsive interfaces and reusable components for modern web applications."
              )

              return (
                <div key={item.id || index}>

                  <div className="flex justify-between gap-2">

                    <div className="min-w-0">

                      <p className="truncate text-[7px] font-bold">
                        {title}
                      </p>

                      <p className="truncate text-[5.5px] text-buildcv-violet">
                        {company}
                      </p>

                    </div>

                    <p className="shrink-0 text-[5px] text-slate-400">
                      {startDate} — {endDate}
                    </p>

                  </div>

                  {description && (
                    <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
                      {description}
                    </p>
                  )}

                </div>
              )
            })}

          </div>

        </section>
      )}

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      {displayEducation.length > 0 && (
        <section className="mt-4">

          <PreviewSectionTitle>
            Education
          </PreviewSectionTitle>

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

              const startDate = getValue(
                item,
                ["startDate", "start", "from"],
                "2019"
              )

              const endDate = getValue(
                item,
                ["endDate", "end", "to"],
                "2023"
              )

              return (
                <div
                  key={item.id || index}
                  className="flex justify-between gap-2"
                >

                  <div className="min-w-0">

                    <p className="truncate text-[7px] font-bold">
                      {degree}
                    </p>

                    <p className="mt-0.5 truncate text-[5.5px] text-slate-500">
                      {institution}
                    </p>

                  </div>

                  <p className="shrink-0 text-[5px] text-slate-400">
                    {startDate} — {endDate}
                  </p>

                </div>
              )
            })}

          </div>

        </section>
      )}

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      {displayProjects.length > 0 && (
        <section className="mt-4">

          <PreviewSectionTitle>
            Projects
          </PreviewSectionTitle>

          <div className="mt-2 space-y-2">

            {displayProjects.slice(0, 2).map((item, index) => {

              const name = getValue(
                item,
                ["name", "projectName", "title"],
                "Portfolio Website"
              )

              const technologies = getValue(
                item,
                ["technologies", "technology", "techStack", "stack"],
                "React • Tailwind CSS • JavaScript"
              )

              const description = getValue(
                item,
                ["description", "details"],
                "Designed and developed a responsive portfolio website."
              )

              return (
                <div key={item.id || index}>

                  <p className="text-[7px] font-bold">
                    {name}
                  </p>

                  {technologies && (
                    <p className="mt-0.5 text-[5.5px] text-buildcv-violet">
                      {Array.isArray(technologies)
                        ? technologies.join(" • ")
                        : technologies}
                    </p>
                  )}

                  {description && (
                    <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-500">
                      {description}
                    </p>
                  )}

                </div>
              )
            })}

          </div>

        </section>
      )}

      {/* =====================================================
          SKILLS
      ====================================================== */}

      {displaySkills.length > 0 && (
        <section className="mt-4">

          <PreviewSectionTitle>
            Skills
          </PreviewSectionTitle>

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
                  className="
                    rounded
                    bg-buildcv-violet-50
                    px-1.5
                    py-1
                    text-[5.5px]
                    font-semibold
                    text-buildcv-violet-600
                  "
                >
                  {skillName}
                </span>
              )
            })}

          </div>

        </section>
      )}

    </div>
  )
}


/* =========================================================
   INITIALS
========================================================= */

function getInitials(name = "") {
  const words = name.trim().split(/\s+/).filter(Boolean)

  if (words.length === 0) {
    return "AM"
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase()
  }

  return (
    words[0][0] + words[words.length - 1][0]
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


export default ModernPreview