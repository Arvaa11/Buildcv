function CreativePreview({ formData = {} }) {
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
  // PERSONAL DISPLAY DATA
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
        fullName: "Olivia Anderson",
        jobTitle: "UI/UX Designer",
        email: "olivia@email.com",
        phone: "+1 555 234 5678",
        location: "New York, NY",
        linkedin: "linkedin.com/in/olivia",
        github: "",
        summary:
          "Creative designer with strong experience creating user-centered digital experiences, visual identities, and engaging brand systems.",
        profileImage: "",
      }

  // =====================================================
  // FALLBACK DATA
  // =====================================================

  const displaySkills =
    skills.length > 0
      ? skills
      : hasResumeData
        ? []
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
      : hasResumeData
        ? []
        : [
            {
              id: "sample-experience-1",
              jobTitle: "Senior UI/UX Designer",
              company: "Studio North",
              startDate: "2022",
              endDate: "Present",
              description:
                "Designed digital products and brand experiences for technology and lifestyle companies while leading design systems.",
            },
            {
              id: "sample-experience-2",
              jobTitle: "Product Designer",
              company: "Pixel Works",
              startDate: "2019",
              endDate: "2022",
              description:
                "Created responsive interfaces, prototypes, and user flows while working closely with developers and product managers.",
            },
            {
              id: "sample-experience-3",
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
      : hasResumeData
        ? []
        : [
            {
              id: "sample-education-1",
              degree: "B.A. Graphic Design",
              institution: "School of Visual Arts",
              startDate: "2013",
              endDate: "2017",
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
              name: "Fintech Mobile App",
              technologies:
                "Figma • UX Research • Prototyping",
              description:
                "Complete UX redesign focused on usability and conversion.",
            },
            {
              id: "sample-project-2",
              name: "Brand Identity",
              technologies:
                "Illustrator • Photoshop • Branding",
              description:
                "Created a complete visual identity and digital brand system.",
            },
          ]

  // =====================================================
  // HELPER
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
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          relative
          bg-[#111827]
          px-7
          py-6
          text-[#FFFFFF]
        "
      >
        {/* DECORATIVE SHAPE */}

        <div
          className="
            absolute
            right-0
            top-0
            h-20
            w-20
            rounded-bl-full
            bg-[#6366F1]
            opacity-80
          "
        />

        <div className="relative z-10">
          {/* LABEL */}

          <p
            className="
              mb-1.5
              text-[6px]
              font-bold
              uppercase
              tracking-[0.25em]
              text-[#C4B5FD]
            "
          >
            Creative Professional
          </p>

          {/* NAME */}

          {displayPersonal.fullName && (
            <h1
              className="
                truncate
                text-[17px]
                font-bold
                tracking-tight
                text-[#FFFFFF]
              "
            >
              {displayPersonal.fullName}
            </h1>
          )}

          {/* JOB TITLE */}

          {displayPersonal.jobTitle && (
            <p
              className="
                mt-1
                truncate
                text-[7px]
                font-medium
                text-[#CBD5E1]
              "
            >
              {displayPersonal.jobTitle}
            </p>
          )}

          {/* CONTACT */}

          <div
            className="
              mt-3
              flex
              flex-wrap
              gap-x-3
              gap-y-1
              text-[5.5px]
              text-[#CBD5E1]
            "
          >
            {displayPersonal.email && (
              <span>{displayPersonal.email}</span>
            )}

            {displayPersonal.phone && (
              <span>{displayPersonal.phone}</span>
            )}

            {displayPersonal.location && (
              <span>{displayPersonal.location}</span>
            )}

            {displayPersonal.linkedin && (
              <span>{displayPersonal.linkedin}</span>
            )}

            {displayPersonal.github && (
              <span>{displayPersonal.github}</span>
            )}
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

        <aside
          className="
            border-r
            border-[#E2E8F0]
            bg-[#F8FAFC]
            px-4
            py-5
          "
        >
          {/* =================================================
              PROFILE
          ================================================== */}

          {displayPersonal.summary && (
            <section className="mb-5">
              <CreativeSectionTitle>
                Profile
              </CreativeSectionTitle>

              <p
                className="
                  mt-2
                  text-[5.5px]
                  leading-[1.6]
                  text-[#475569]
                "
              >
                {displayPersonal.summary}
              </p>
            </section>
          )}

          {/* =================================================
              SKILLS
          ================================================== */}

          {displaySkills.length > 0 && (
            <section className="mb-5">
              <CreativeSectionTitle>
                Skills
              </CreativeSectionTitle>

              <div className="mt-2 space-y-1.5">
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
                          border-l-2
                          border-[#6366F1]
                          pl-2
                          text-[5.5px]
                          font-medium
                          leading-[1.4]
                          text-[#475569]
                        "
                      >
                        {skillName}
                      </div>
                    )
                  })}
              </div>
            </section>
          )}

          {/* =================================================
              TOOLS
          ================================================== */}

          <section className="mb-5">
            <CreativeSectionTitle>
              Tools
            </CreativeSectionTitle>

            <p
              className="
                mt-2
                text-[5.5px]
                leading-[1.7]
                text-[#475569]
              "
            >
              Figma · Photoshop · Illustrator ·
              <br />
              After Effects · Notion · Miro
            </p>
          </section>

          {/* =================================================
              EDUCATION
          ================================================== */}

          {displayEducation.length > 0 && (
            <section>
              <CreativeSectionTitle>
                Education
              </CreativeSectionTitle>

              <div className="mt-2 space-y-2">
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
                              text-[5.8px]
                              font-bold
                              leading-[1.4]
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
                              text-[5px]
                              leading-[1.4]
                              text-[#64748B]
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
        ================================================== */}

        <main className="px-5 py-5">
          {/* =================================================
              EXPERIENCE
          ================================================== */}

          {displayExperience.length > 0 && (
            <section className="mb-5">
              <CreativeMainTitle>
                Experience
              </CreativeMainTitle>

              <div className="mt-3 space-y-3.5">
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
                          item?.id || index
                        }
                      >
                        <div
                          className="
                            flex
                            items-start
                            justify-between
                            gap-2
                          "
                        >
                          <div className="min-w-0">
                            {title && (
                              <h3
                                className="
                                  truncate
                                  text-[7px]
                                  font-bold
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
                                  truncate
                                  text-[5.5px]
                                  font-medium
                                  text-[#6366F1]
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
                              text-[5.5px]
                              leading-[1.55]
                              text-[#475569]
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
          ================================================== */}

          {displayProjects.length > 0 && (
            <section>
              <CreativeMainTitle>
                Selected Projects
              </CreativeMainTitle>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {displayProjects
                  .slice(0, 2)
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
                      <div
                        key={
                          item?.id || index
                        }
                        className="
                          border
                          border-[#E2E8F0]
                          p-2.5
                        "
                      >
                        {name && (
                          <h3
                            className="
                              text-[6.5px]
                              font-bold
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
                              text-[4.8px]
                              text-[#6366F1]
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
                              text-[5px]
                              leading-[1.5]
                              text-[#64748B]
                            "
                          >
                            {description}
                          </p>
                        )}
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


// =========================================================
// SIDEBAR SECTION TITLE
// =========================================================

function CreativeSectionTitle({ children }) {
  return (
    <div>
      <h2
        className="
          text-[6px]
          font-bold
          uppercase
          tracking-[0.15em]
          text-[#6366F1]
        "
      >
        {children}
      </h2>

      <div
        className="
          mt-1.5
          h-[2px]
          w-5
          bg-[#6366F1]
        "
      />
    </div>
  )
}


// =========================================================
// MAIN SECTION TITLE
// =========================================================

function CreativeMainTitle({ children }) {
  return (
    <div className="flex items-center gap-2">
      <h2
        className="
          shrink-0
          text-[7px]
          font-bold
          uppercase
          tracking-[0.14em]
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


export default CreativePreview
