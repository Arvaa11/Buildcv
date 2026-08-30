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

  const hasResumeData = Boolean(
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
  )

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
        h-full
        w-full
        overflow-hidden
        bg-[#FFFFFF]
        text-[#111827]
      "
    >
      <div
        className="
          grid
          min-h-[1123px]
          grid-cols-[30%_70%]
        "
      >

        {/* =================================================
            LEFT SIDEBAR
        ================================================= */}

        <aside
          className="
            flex
            min-h-[1123px]
            flex-col
            bg-[#111827]
            px-5
            py-5
            text-white
          "
        >

          {/* =================================================
              PROFILE IMAGE
          ================================================= */}

          <div className="flex justify-center">

            {displayPersonal.profileImage ? (
              <img
                src={displayPersonal.profileImage}
                alt=""
                className="
                  h-16
                  w-16
                  shrink-0
                  rounded-full
                  object-cover
                  ring-2
                  ring-[#FFFFFF33]
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-16
                  w-16
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1F2937]
                  text-[13px]
                  font-bold
                  tracking-wide
                  text-[#FFFFFF]
                  ring-2
                  ring-[#FFFFFF33]
                "
              >
                {getInitials(
                  displayPersonal.fullName
                )}
              </div>
            )}

          </div>

          {/* =================================================
              NAME + JOB TITLE
          ================================================= */}

          <div className="mt-3 text-center">

            {displayPersonal.fullName && (
              <h1
                className="
                  break-words
                  text-[12px]
                  font-bold
                  leading-tight
                  tracking-tight
                  text-[#FFFFFF]
                "
              >
                {displayPersonal.fullName}
              </h1>
            )}

            {displayPersonal.jobTitle && (
              <p
                className="
                  mt-1
                  break-words
                  text-[5.5px]
                  font-medium
                  uppercase
                  tracking-[0.14em]
                  text-[#CBD5E1]
                "
              >
                {displayPersonal.jobTitle}
              </p>
            )}

          </div>

          {/* =================================================
              DIVIDER
          ================================================= */}

          <div className="my-4 h-px bg-[#334155]" />

          {/* =================================================
              CONTACT
          ================================================= */}

          {(displayPersonal.email ||
            displayPersonal.phone ||
            displayPersonal.location ||
            displayPersonal.linkedin ||
            displayPersonal.github) && (

            <section>

              <SidebarTitle>
                Contact
              </SidebarTitle>

              <div className="mt-2 space-y-1.5">

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

            </section>
          )}

          {/* =================================================
              SKILLS
          ================================================= */}

          {displaySkills.length > 0 && (

            <section className="mt-5">

              <SidebarTitle>
                Skills
              </SidebarTitle>

              <div className="mt-2.5 space-y-1.5">

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
                          break-words
                          text-[5.5px]
                          leading-[1.4]
                          text-[#CBD5E1]
                        "
                      >

                        <span
                          className="
                            mr-1.5
                            inline-block
                            h-1
                            w-1
                            rounded-full
                            bg-[#94A3B8]
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

            <section className="mt-5">

              <SidebarTitle>
                Education
              </SidebarTitle>

              <div className="mt-2.5 space-y-2.5">

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
                          item?.id || index
                        }
                      >

                        {degree && (
                          <h3
                            className="
                              break-words
                              text-[5.8px]
                              font-semibold
                              leading-[1.4]
                              text-[#FFFFFF]
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
                              text-[5px]
                              leading-[1.4]
                              text-[#CBD5E1]
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
                              text-[4.5px]
                              text-[#94A3B8]
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
            bg-[#FFFFFF]
            px-6
            py-5
          "
        >

          {/* =================================================
              PROFESSIONAL PROFILE
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
                  text-[5.5px]
                  leading-[1.6]
                  text-[#64748B]
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

              <div className="mt-3 space-y-3.5">

                {displayExperience
                  .slice(0, 3)
                  .map((item, index) => {

                    const title =
                      getValue(
                        item,
                        [
                          "position",
                          "jobTitle",
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
                          item?.id || index
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
                                  text-[6.5px]
                                  font-semibold
                                  leading-tight
                                  text-[#111827]
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
                                  text-[5.2px]
                                  font-medium
                                  text-[#64748B]
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
                                text-[4.7px]
                                text-[#94A3B8]
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
                              mt-1
                              text-[5.2px]
                              leading-[1.55]
                              text-[#64748B]
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
              EDUCATION
          ================================================= */}

          {displayEducation.length > 0 && (

            <section className="mb-5">

              <MainSectionTitle>
                Education
              </MainSectionTitle>

              <div className="mt-3 space-y-2.5">

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
                      <article
                        key={
                          item?.id || index
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

                            {degree && (
                              <h3
                                className="
                                  break-words
                                  text-[6.5px]
                                  font-semibold
                                  leading-tight
                                  text-[#111827]
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
                                  text-[5.2px]
                                  text-[#64748B]
                                "
                              >
                                {institution}
                              </p>
                            )}

                          </div>

                          {(startDate ||
                            endDate) && (

                            <span
                              className="
                                shrink-0
                                whitespace-nowrap
                                text-[4.7px]
                                text-[#94A3B8]
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

              <div className="mt-3 space-y-2.5">

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
                          item?.id || index
                        }
                        className="
                          border-l-2
                          border-[#E2E8F0]
                          pl-3
                        "
                      >

                        {name && (
                          <h3
                            className="
                              break-words
                              text-[6.5px]
                              font-semibold
                              text-[#111827]
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
                              text-[4.7px]
                              font-medium
                              text-[#64748B]
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
                              text-[5.2px]
                              leading-[1.5]
                              text-[#64748B]
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
          text-[6px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#FFFFFF]
        "
      >
        {children}
      </h2>

      <div
        className="
          mt-1
          h-px
          w-5
          bg-[#64748B]
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
        text-[5px]
        leading-[1.5]
        text-[#CBD5E1]
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
          text-[6px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#111827]
        "
      >
        {children}
      </h2>

      <div
        className="
          h-px
          flex-1
          bg-[#E2E8F0]
        "
      />

    </div>
  )
}

export default ProfessionalPreview