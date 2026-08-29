
function ProfessionalPreview({ formData = {} }) {
  // =====================================================
  // PERSONAL DATA
  // =====================================================

  const personal = formData.personal || {}

  const {
    fullName = "",
    jobTitle = "",
    email = "",
    phone = "",
    location = "",
    linkedin = "",
    github = "",
    summary = "",
    profileImage = "",
  } = personal

  // =====================================================
  // OTHER DATA
  // =====================================================

  const skills = Array.isArray(formData.skills)
    ? formData.skills
    : []

  const experience = Array.isArray(formData.experience)
    ? formData.experience
    : []

  const education = Array.isArray(formData.education)
    ? formData.education
    : []

  const projects = Array.isArray(formData.projects)
    ? formData.projects
    : []

  // =====================================================
  // CHECK WHETHER RESUME IS EMPTY
  // =====================================================

  const hasResumeData =
    fullName.trim() ||
    jobTitle.trim() ||
    email.trim() ||
    phone.trim() ||
    location.trim() ||
    linkedin.trim() ||
    github.trim() ||
    summary.trim() ||
    profileImage ||
    skills.length > 0 ||
    experience.length > 0 ||
    education.length > 0 ||
    projects.length > 0

  // =====================================================
  // SAMPLE DATA
  // =====================================================

  const displayPersonal = hasResumeData
    ? {
        fullName,
        jobTitle,
        email,
        phone,
        location,
        linkedin,
        github,
        summary,
        profileImage,
      }
    : {
        fullName: "Sarah Johnson",
        jobTitle: "Product Manager",
        email: "sarah@email.com",
        phone: "+1 555 234 5678",
        location: "Chicago, IL",
        linkedin: "linkedin.com/in/sarah",
        github: "",
        summary:
          "Results-driven professional with experience leading projects, improving business processes, and delivering measurable results.",
        profileImage: "",
      }

  const displaySkills =
    skills.length > 0
      ? skills
      : hasResumeData
        ? []
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
      : hasResumeData
        ? []
        : [
            {
              id: "sample-experience-1",
              jobTitle: "Product Manager",
              company: "Global Technologies",
              startDate: "2023",
              endDate: "Present",
              description:
                "Led cross-functional teams and delivered product initiatives that improved customer experience and business performance.",
            },
            {
              id: "sample-experience-2",
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
      : hasResumeData
        ? []
        : [
            {
              id: "sample-education-1",
              degree: "BBA Business Administration",
              institution: "University of Chicago",
              startDate: "2017",
              endDate: "2021",
            },
          ]

  const displayProjects =
    projects.length > 0
      ? projects
      : hasResumeData
        ? []
        : [
            {
              id: "sample-project-1",
              name: "Business Growth Strategy",
              technologies: "",
              description:
                "Developed a strategic initiative focused on improving customer acquisition and operational efficiency.",
            },
            {
              id: "sample-project-2",
              name: "Digital Transformation",
              technologies: "",
              description:
                "Supported the implementation of digital tools and improved internal business workflows.",
            },
          ]

  // =====================================================
  // HELPERS
  // =====================================================

  function getValue(item, keys, fallback = "") {
    for (const key of keys) {
      if (
        item &&
        item[key] !== undefined &&
        item[key] !== null &&
        String(item[key]).trim() !== ""
      ) {
        return item[key]
      }
    }

    return fallback
  }

  function getSkillName(skill) {
    if (typeof skill === "string") {
      return skill
    }

    return getValue(
      skill,
      ["name", "skill", "title"],
      ""
    )
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <div
      className="
        min-h-[1123px]
        w-full
        overflow-hidden
        bg-white
        text-slate-900
      "
    >
      <div className="grid min-h-[1123px] grid-cols-[30%_70%]">

        {/* =================================================
            LEFT SIDEBAR
        ================================================= */}

        <aside
          className="
            min-h-[1123px]
            bg-slate-900
            px-5
            py-6
            text-white
          "
        >
          {/* PROFILE IMAGE */}

          <div className="flex justify-center">

            {displayPersonal.profileImage ? (
              <img
                src={displayPersonal.profileImage}
                alt=""
                className="
                  h-20
                  w-20
                  rounded-full
                  object-cover
                  ring-2
                  ring-white/20
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-full
                  bg-white/10
                  text-[16px]
                  font-bold
                  tracking-wide
                  text-white
                  ring-2
                  ring-white/20
                "
              >
                {getInitials(
                  displayPersonal.fullName
                )}
              </div>
            )}

          </div>

          {/* NAME */}

          <div className="mt-4 text-center">

            <h1
              className="
                break-words
                text-[14px]
                font-bold
                leading-tight
                tracking-tight
                text-white
              "
            >
              {displayPersonal.fullName}
            </h1>

            <p
              className="
                mt-1.5
                break-words
                text-[6px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-slate-300
              "
            >
              {displayPersonal.jobTitle}
            </p>

          </div>

          {/* SIDEBAR DIVIDER */}

          <div className="my-5 h-px bg-white/10" />

          {/* =================================================
              CONTACT
          ================================================= */}

          <SidebarTitle>
            Contact
          </SidebarTitle>

          <div className="mt-2.5 space-y-2">

            {displayPersonal.email && (
              <SidebarContact>
                {displayPersonal.email}
              </SidebarContact>
            )}

            {displayPersonal.phone && (
              <SidebarContact>
                {displayPersonal.phone}
              </SidebarContact>
            )}

            {displayPersonal.location && (
              <SidebarContact>
                {displayPersonal.location}
              </SidebarContact>
            )}

            {displayPersonal.linkedin && (
              <SidebarContact>
                {displayPersonal.linkedin}
              </SidebarContact>
            )}

            {displayPersonal.github && (
              <SidebarContact>
                {displayPersonal.github}
              </SidebarContact>
            )}

          </div>

          {/* =================================================
              SKILLS
          ================================================= */}

          {displaySkills.length > 0 && (
            <section className="mt-6">

              <SidebarTitle>
                Skills
              </SidebarTitle>

              <div className="mt-3 space-y-2">

                {displaySkills
                  .slice(0, 8)
                  .map((skill, index) => {

                    const skillName =
                      getSkillName(skill)

                    if (!skillName) {
                      return null
                    }

                    return (
                      <div
                        key={
                          skill?.id || index
                        }
                        className="
                          text-[6px]
                          leading-[1.4]
                          text-slate-300
                        "
                      >
                        <span
                          className="
                            mr-1.5
                            inline-block
                            h-1
                            w-1
                            rounded-full
                            bg-white/60
                          "
                        />

                        {skillName}
                      </div>
                    )
                  })}

              </div>

            </section>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {displayEducation.length > 0 && (
            <section className="mt-6">

              <SidebarTitle>
                Education
              </SidebarTitle>

              <div className="mt-3 space-y-3">

                {displayEducation
                  .slice(0, 2)
                  .map((item, index) => {

                    const degree =
                      getValue(
                        item,
                        [
                          "degree",
                          "qualification",
                          "title",
                          "program",
                        ]
                      )

                    const field =
                      getValue(
                        item,
                        [
                          "field",
                          "major",
                          "specialization",
                        ]
                      )

                    const institution =
                      getValue(
                        item,
                        [
                          "institution",
                          "school",
                          "university",
                          "college",
                        ]
                      )

                    const startDate =
                      getValue(
                        item,
                        [
                          "startDate",
                          "start",
                          "from",
                        ]
                      )

                    const endDate =
                      getValue(
                        item,
                        [
                          "endDate",
                          "end",
                          "to",
                        ]
                      )

                    return (
                      <div
                        key={
                          item.id || index
                        }
                      >

                        {degree && (
                          <h3
                            className="
                              break-words
                              text-[6.5px]
                              font-semibold
                              leading-[1.4]
                              text-white
                            "
                          >
                            {degree}

                            {field
                              ? ` — ${field}`
                              : ""}
                          </h3>
                        )}

                        {institution && (
                          <p
                            className="
                              mt-0.5
                              break-words
                              text-[5.5px]
                              leading-[1.4]
                              text-slate-400
                            "
                          >
                            {institution}
                          </p>
                        )}

                        {(startDate ||
                          endDate) && (
                          <p
                            className="
                              mt-0.5
                              text-[5px]
                              text-slate-500
                            "
                          >
                            {startDate}

                            {startDate &&
                            endDate
                              ? " — "
                              : ""}

                            {endDate}
                          </p>
                        )}

                      </div>
                    )
                  })}

              </div>

            </section>
          )}

        </aside>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main
          className="
            min-h-[1123px]
            bg-white
            px-6
            py-6
          "
        >

          {/* =================================================
              PROFILE
          ================================================= */}

          {displayPersonal.summary && (
            <section className="mb-5">

              <MainSectionTitle>
                Professional Profile
              </MainSectionTitle>

              <p
                className="
                  mt-2
                  max-w-[97%]
                  text-[6.5px]
                  leading-[1.6]
                  text-slate-500
                "
              >
                {displayPersonal.summary}
              </p>

            </section>
          )}

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {displayExperience.length > 0 && (
            <section className="mb-5">

              <MainSectionTitle>
                Experience
              </MainSectionTitle>

              <div className="mt-3 space-y-4">

                {displayExperience
                  .slice(0, 3)
                  .map((item, index) => {

                    const title =
                      getValue(
                        item,
                        [
                          "jobTitle",
                          "position",
                          "title",
                          "role",
                        ]
                      )

                    const company =
                      getValue(
                        item,
                        [
                          "company",
                          "organization",
                          "employer",
                        ]
                      )

                    const startDate =
                      getValue(
                        item,
                        [
                          "startDate",
                          "start",
                          "from",
                        ]
                      )

                    const endDate =
                      getValue(
                        item,
                        [
                          "endDate",
                          "end",
                          "to",
                        ]
                      )

                    const description =
                      getValue(
                        item,
                        [
                          "description",
                          "details",
                          "responsibilities",
                        ]
                      )

                    return (
                      <article
                        key={
                          item.id || index
                        }
                      >

                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-3
                          "
                        >

                          <div className="min-w-0">

                            {title && (
                              <h3
                                className="
                                  break-words
                                  text-[7px]
                                  font-semibold
                                  leading-tight
                                  text-slate-900
                                "
                              >
                                {title}
                              </h3>
                            )}

                            {company && (
                              <p
                                className="
                                  mt-0.5
                                  break-words
                                  text-[5.5px]
                                  font-medium
                                  text-slate-500
                                "
                              >
                                {company}
                              </p>
                            )}

                          </div>

                          {(startDate ||
                            endDate) && (
                            <span
                              className="
                                shrink-0
                                whitespace-nowrap
                                text-[5px]
                                text-slate-400
                              "
                            >
                              {startDate}

                              {startDate &&
                              endDate
                                ? " — "
                                : ""}

                              {endDate}
                            </span>
                          )}

                        </div>

                        {description && (
                          <p
                            className="
                              mt-1.5
                              text-[5.5px]
                              leading-[1.6]
                              text-slate-500
                            "
                          >
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
              PROJECTS
          ================================================= */}

          {displayProjects.length > 0 && (
            <section>

              <MainSectionTitle>
                Selected Projects
              </MainSectionTitle>

              <div className="mt-3 space-y-3">

                {displayProjects
                  .slice(0, 3)
                  .map((item, index) => {

                    const name =
                      getValue(
                        item,
                        [
                          "name",
                          "projectName",
                          "title",
                        ]
                      )

                    const technologies =
                      getValue(
                        item,
                        [
                          "technologies",
                          "technology",
                          "techStack",
                          "stack",
                        ]
                      )

                    const description =
                      getValue(
                        item,
                        [
                          "description",
                          "details",
                        ]
                      )

                    return (
                      <article
                        key={
                          item.id || index
                        }
                        className="
                          border-l-2
                          border-slate-200
                          pl-3
                        "
                      >

                        {name && (
                          <h3
                            className="
                              break-words
                              text-[7px]
                              font-semibold
                              text-slate-900
                            "
                          >
                            {name}
                          </h3>
                        )}

                        {technologies && (
                          <p
                            className="
                              mt-0.5
                              break-words
                              text-[5px]
                              font-medium
                              text-slate-500
                            "
                          >
                            {Array.isArray(
                              technologies
                            )
                              ? technologies.join(
                                  " • "
                                )
                              : technologies}
                          </p>
                        )}

                        {description && (
                          <p
                            className="
                              mt-1
                              text-[5.5px]
                              leading-[1.55]
                              text-slate-500
                            "
                          >
                            {description}
                          </p>
                        )}

                      </article>
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

// =====================================================
// INITIALS
// =====================================================

function getInitials(name = "") {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)

  if (words.length === 0) {
    return "CV"
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

// =====================================================
// SIDEBAR TITLE
// =====================================================

function SidebarTitle({ children }) {
  return (
    <div>
      <h2
        className="
          text-[6.5px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-white
        "
      >
        {children}
      </h2>

      <div
        className="
          mt-1.5
          h-px
          w-5
          bg-white/40
        "
      />
    </div>
  )
}

// =====================================================
// SIDEBAR CONTACT
// =====================================================

function SidebarContact({ children }) {
  return (
    <p
      className="
        break-words
        text-[5.5px]
        leading-[1.5]
        text-slate-300
      "
    >
      {children}
    </p>
  )
}

// =====================================================
// MAIN SECTION TITLE
// =====================================================

function MainSectionTitle({ children }) {
  return (
    <div className="flex items-center gap-2">

      <h2
        className="
          shrink-0
          text-[6.5px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-slate-900
        "
      >
        {children}
      </h2>

      <div
        className="
          h-px
          flex-1
          bg-slate-200
        "
      />

    </div>
  )
}

export default ProfessionalPreview
