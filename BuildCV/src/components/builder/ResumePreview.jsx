function SidebarTitle({ title }) {
  return (
    <div className="mb-3">
      <h3
        className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.18em]
          text-[#D4AF37]
        "
      >
        {title}
      </h3>

      <div className="mt-2 h-px bg-white/10" />
    </div>
  )
}

function SidebarItem({ children }) {
  return (
    <p
      className="
        break-words
        text-[8.5px]
        leading-[1.5]
        text-white/65
      "
    >
      {children}
    </p>
  )
}

function ResumePreview({
  formData,
  selectedTemplate = "modern",
}) {
  const {
    profileImage = "",
    fullName = "",
    jobTitle = "",
    email = "",
    phone = "",
    location = "",
    linkedin = "",
    github = "",
    summary = "",
    experience = [],
    education = [],
    skills = [],
    projects = [],
  } = formData || {}

  // =====================================================
  // SAFE DATA
  // =====================================================

  const safeExperience = Array.isArray(experience)
    ? experience
    : []

  const safeEducation = Array.isArray(education)
    ? education
    : []

  const safeSkills = Array.isArray(skills)
    ? skills
    : []

  const safeProjects = Array.isArray(projects)
    ? projects
    : []

  // =====================================================
  // FORMAT DATE
  // =====================================================

  const formatDate = (date) => {
    if (!date) return ""

    const [year, month] = date.split("-")

    if (!year || !month) {
      return date
    }

    const dateObject = new Date(
      Number(year),
      Number(month) - 1
    )

    return dateObject.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }

  // =====================================================
  // CONTACT INFORMATION
  // =====================================================

  const renderContact = () => {
    const items = [
      email,
      phone,
      location,
      linkedin,
      github,
    ].filter(Boolean)

    if (items.length === 0) {
      return null
    }

    return (
      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] text-slate-500">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-3"
          >
            {index > 0 && (
              <span className="text-slate-300">
                •
              </span>
            )}

            <span className="break-all">
              {item}
            </span>
          </span>
        ))}
      </div>
    )
  }

  // =====================================================
  // PROFILE IMAGE
  // =====================================================

  const renderProfileImage = (
    size = "h-24 w-24"
  ) => {
    if (!profileImage) {
      return null
    }

    return (
      <img
        src={profileImage}
        alt="Profile"
        className={`
          ${size}
          shrink-0
          rounded-full
          object-cover
          ring-2
          ring-[#D4AF37]/30
          ring-offset-2
        `}
      />
    )
  }

  // =====================================================
  // SECTION TITLE
  // =====================================================

  const renderSectionTitle = (title) => (
    <div className="mb-3 flex items-center gap-3">
      <h3
        className="
          shrink-0
          text-[11px]
          font-bold
          uppercase
          tracking-[0.16em]
          text-[#111827]
        "
      >
        {title}
      </h3>

      <div className="h-px flex-1 bg-slate-200" />
    </div>
  )

  // =====================================================
  // SUMMARY
  // =====================================================

  const renderSummary = () => {
    if (!summary || !summary.trim()) {
      return null
    }

    return (
      <section className="mt-6 break-inside-avoid">
        {renderSectionTitle(
          "Professional Summary"
        )}

        <p
          className="
            whitespace-pre-line
            text-[11px]
            leading-[1.7]
            text-slate-600
          "
        >
          {summary}
        </p>
      </section>
    )
  }

  // =====================================================
  // EXPERIENCE
  // =====================================================

  const renderExperience = () => {
    if (safeExperience.length === 0) {
      return null
    }

    return (
      <section className="mt-6">
        {renderSectionTitle("Experience")}

        <div className="space-y-5">
          {safeExperience.map(
            (item, index) => {
              const hasDate =
                item.startDate ||
                item.endDate ||
                item.current

              return (
                <div
                  key={
                    item.id ||
                    `experience-${index}`
                  }
                  className="break-inside-avoid"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h4 className="text-[12px] font-bold text-[#111827]">
                        {item.jobTitle ||
                          "Job Title"}
                      </h4>

                      {(item.company ||
                        item.location) && (
                        <p className="mt-1 text-[10px] font-semibold text-[#D4AF37]">
                          {item.company ||
                            "Company"}

                          {item.location && (
                            <>
                              <span className="mx-1 text-slate-300">
                                •
                              </span>

                              <span className="font-normal text-slate-500">
                                {
                                  item.location
                                }
                              </span>
                            </>
                          )}
                        </p>
                      )}
                    </div>

                    {hasDate && (
                      <p className="shrink-0 text-right text-[9px] font-medium text-slate-500">
                        {formatDate(
                          item.startDate
                        )}

                        {item.startDate &&
                          " — "}

                        {item.current
                          ? "Present"
                          : formatDate(
                              item.endDate
                            )}
                      </p>
                    )}
                  </div>

                  {item.description &&
                    item.description.trim() && (
                      <p
                        className="
                          mt-2
                          whitespace-pre-line
                          text-[10px]
                          leading-[1.7]
                          text-slate-600
                        "
                      >
                        {item.description}
                      </p>
                    )}
                </div>
              )
            }
          )}
        </div>
      </section>
    )
  }

  // =====================================================
  // EDUCATION
  // =====================================================

  const renderEducation = () => {
    if (safeEducation.length === 0) {
      return null
    }

    return (
      <section className="mt-6">
        {renderSectionTitle("Education")}

        <div className="space-y-4">
          {safeEducation.map(
            (item, index) => {
              const hasDate =
                item.startDate ||
                item.endDate ||
                item.current

              return (
                <div
                  key={
                    item.id ||
                    `education-${index}`
                  }
                  className="break-inside-avoid"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="min-w-0">
                      <h4 className="text-[12px] font-bold text-[#111827]">
                        {item.degree ||
                          "Degree"}
                      </h4>

                      {(item.institution ||
                        item.location) && (
                        <p className="mt-1 text-[10px] text-slate-500">
                          {item.institution ||
                            "Institution"}

                          {item.location && (
                            <>
                              <span className="mx-1 text-slate-300">
                                •
                              </span>

                              {
                                item.location
                              }
                            </>
                          )}
                        </p>
                      )}
                    </div>

                    {hasDate && (
                      <p className="shrink-0 text-right text-[9px] text-slate-500">
                        {formatDate(
                          item.startDate
                        )}

                        {item.startDate &&
                          " — "}

                        {item.current
                          ? "Present"
                          : formatDate(
                              item.endDate
                            )}
                      </p>
                    )}
                  </div>

                  {item.description &&
                    item.description.trim() && (
                      <p
                        className="
                          mt-2
                          whitespace-pre-line
                          text-[10px]
                          leading-[1.7]
                          text-slate-600
                        "
                      >
                        {item.description}
                      </p>
                    )}
                </div>
              )
            }
          )}
        </div>
      </section>
    )
  }

  // =====================================================
  // SKILLS
  // =====================================================

  const renderSkills = () => {
    if (safeSkills.length === 0) {
      return null
    }

    return (
      <section className="mt-6 break-inside-avoid">
        {renderSectionTitle("Skills")}

        <div className="flex flex-wrap gap-1.5">
          {safeSkills.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-2.5
                py-1
                text-[9px]
                font-medium
                text-slate-700
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    )
  }

  // =====================================================
  // PROJECTS
  // =====================================================

  const renderProjects = () => {
    if (safeProjects.length === 0) {
      return null
    }

    return (
      <section className="mt-6">
        {renderSectionTitle("Projects")}

        <div className="space-y-4">
          {safeProjects.map(
            (project, index) => {
              const technologies =
                Array.isArray(
                  project.technologies
                )
                  ? project.technologies
                  : []

              const hasLinks =
                project.liveUrl ||
                project.githubUrl

              return (
                <div
                  key={
                    project.id ||
                    `project-${index}`
                  }
                  className="break-inside-avoid"
                >
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-[12px] font-bold text-[#111827]">
                      {project.name ||
                        "Project Name"}
                    </h4>

                    {hasLinks && (
                      <div className="flex shrink-0 gap-2 text-[8px] text-slate-500">
                        {project.liveUrl && (
                          <span>
                            Live Demo
                          </span>
                        )}

                        {project.githubUrl && (
                          <span>
                            GitHub
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {technologies.length >
                    0 && (
                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-medium
                        text-[#D4AF37]
                      "
                    >
                      {technologies.join(
                        " • "
                      )}
                    </p>
                  )}

                  {project.description &&
                    project.description.trim() && (
                      <p
                        className="
                          mt-2
                          whitespace-pre-line
                          text-[10px]
                          leading-[1.7]
                          text-slate-600
                        "
                      >
                        {
                          project.description
                        }
                      </p>
                    )}

                  {hasLinks && (
                    <div
                      className="
                        mt-1.5
                        flex
                        flex-wrap
                        gap-3
                        text-[8px]
                        text-slate-500
                      "
                    >
                      {project.liveUrl && (
                        <span className="break-all">
                          {project.liveUrl}
                        </span>
                      )}

                      {project.githubUrl && (
                        <span className="break-all">
                          {
                            project.githubUrl
                          }
                        </span>
                      )}
                    </div>
                  )}
                </div>
              )
            }
          )}
        </div>
      </section>
    )
  }

  // =====================================================
  // MODERN TEMPLATE
  // =====================================================

  if (selectedTemplate === "modern-professional") {
    return (
      <div
        id="resume-preview"
        className="
          min-h-[1123px]
          overflow-visible
          bg-white
          text-[#111827]
        "
      >
        <div className="h-1.5 bg-[#D4AF37]" />

        <header className="px-8 pb-7 pt-8">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0 flex-1">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#D4AF37]
                "
              >
                Curriculum Vitae
              </p>

              <h1
                className="
                  mt-2
                  text-[30px]
                  font-extrabold
                  tracking-tight
                  text-[#111827]
                "
              >
                {fullName || "Your Name"}
              </h1>

              <p
                className="
                  mt-1.5
                  text-[13px]
                  font-medium
                  text-slate-500
                "
              >
                {jobTitle ||
                  "Professional Title"}
              </p>

              <div className="mt-4">
                {renderContact()}
              </div>
            </div>

            {renderProfileImage(
              "h-24 w-24"
            )}
          </div>
        </header>

        <div className="mx-8 h-px bg-slate-200" />

        <main className="px-8 pb-10">
          {renderSummary()}
          {renderExperience()}
          {renderEducation()}
          {renderSkills()}
          {renderProjects()}
        </main>
      </div>
    )
  }

  // =====================================================
  // PROFESSIONAL TEMPLATE
  // =====================================================

  if (selectedTemplate === "professional") {
    return (
      <div
        id="resume-preview"
        className="
          min-h-[1123px]
          overflow-visible
          bg-white
          text-[#111827]
        "
      >
        <div className="flex min-h-[1123px]">
          {/* SIDEBAR */}

          <aside
            className="
              w-[30%]
              shrink-0
              bg-[#111827]
              px-5
              py-8
              text-white
            "
          >
            {/* PROFILE */}

            <div className="flex flex-col items-center text-center">
              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="
                    h-20
                    w-20
                    rounded-full
                    border-2
                    border-[#D4AF37]
                    object-cover
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-24
                    w-24
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D4AF37]/60
                    bg-white/10
                    text-2xl
                    font-bold
                    text-[#D4AF37]
                  "
                >
                  {fullName
                    ? fullName
                        .charAt(0)
                        .toUpperCase()
                    : "Y"}
                </div>
              )}

              <h2
                className="
                  mt-4
                  break-words
                  text-[14px]
                  font-bold
                  leading-tight
                "
              >
                {fullName ||
                  "Your Name"}
              </h2>

              <p
                className="
                  mt-1
                  break-words
                  text-[9px]
                  font-medium
                  text-[#D4AF37]
                "
              >
                {jobTitle ||
                  "Professional Title"}
              </p>
            </div>

            {/* CONTACT */}

            {(email ||
              phone ||
              location ||
              linkedin ||
              github) && (
              <div className="mt-8">
                <SidebarTitle title="Contact" />

                <div className="space-y-2.5">
                  {email && (
                    <SidebarItem>
                      {email}
                    </SidebarItem>
                  )}

                  {phone && (
                    <SidebarItem>
                      {phone}
                    </SidebarItem>
                  )}

                  {location && (
                    <SidebarItem>
                      {location}
                    </SidebarItem>
                  )}

                  {linkedin && (
                    <SidebarItem>
                      {linkedin}
                    </SidebarItem>
                  )}

                  {github && (
                    <SidebarItem>
                      {github}
                    </SidebarItem>
                  )}
                </div>
              </div>
            )}

            {/* SKILLS */}

            {safeSkills.length > 0 && (
              <div className="mt-8">
                <SidebarTitle title="Skills" />

                <div className="space-y-2">
                  {safeSkills.map(
                    (skill, index) => (
                      <div
                        key={`${skill}-${index}`}
                        className="
                          break-words
                          rounded-md
                          bg-white/5
                          px-2.5
                          py-1.5
                          text-[9px]
                          text-white/80
                        "
                      >
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </aside>

          {/* MAIN */}

          <main className="min-w-0 flex-1 px-7 py-8">
            <div className="border-b border-slate-200 pb-5">
              <p
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#D4AF37]
                "
              >
                Professional Resume
              </p>

              <h1
                className="
                  mt-2
                  text-[25px]
                  font-extrabold
                  tracking-tight
                  text-[#111827]
                "
              >
                {fullName ||
                  "Your Name"}
              </h1>

              <p
                className="
                  mt-1
                  text-[11px]
                  font-medium
                  text-slate-500
                "
              >
                {jobTitle ||
                  "Professional Title"}
              </p>
            </div>

            {renderSummary()}
            {renderExperience()}
            {renderEducation()}
            {renderProjects()}
          </main>
        </div>
      </div>
    )
  }

  // =====================================================
  // MINIMAL TEMPLATE
  // =====================================================

  return (
    <div
      id="resume-preview"
      className="
        min-h-[1123px]
        overflow-visible
        bg-white
        text-[#111827]
      "
    >
      <main className="px-9 py-9">
        <header>
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <h1
                className="
                  break-words
                  text-[26px]
                  font-bold
                  tracking-tight
                  text-[#111827]
                "
              >
                {fullName ||
                  "Your Name"}
              </h1>

              <p className="mt-1 text-[11px] text-slate-500">
                {jobTitle ||
                  "Professional Title"}
              </p>

              <div className="mt-3">
                {renderContact()}
              </div>
            </div>

            {renderProfileImage(
              "h-20 w-20"
            )}
          </div>

          <div className="mt-6 h-px bg-slate-200" />
        </header>

        {renderSummary()}
        {renderExperience()}
        {renderEducation()}
        {renderSkills()}
        {renderProjects()}
      </main>
    </div>
  )
}

export default ResumePreview
