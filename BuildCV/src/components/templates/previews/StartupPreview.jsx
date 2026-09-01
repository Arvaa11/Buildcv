import {
  getResumeData,
  getSkillName,
  getEducationTitle,
  getInstitution,
  getExperienceTitle,
  getCompany,
  getProjectName,
  getDescription,
  getDate,
} from "../templateUtils";

/*
=========================================================
BUILDCV — STARTUP PREMIUM PREVIEW
=========================================================

Design:
• Two Column
• No Photo
• Startup / SaaS aesthetic
• Strong personal branding
• Projects emphasized
• Compact information hierarchy
• Modern indigo accents
• A4 resume
=========================================================
*/

export default function StartupPreview({ formData }) {
  const resume = getResumeData(formData);

  return (
    <div
      className="
        min-h-[1123px]
        w-full
        bg-white
        text-buildcv-ink-900
      "
    >
      {/* =================================================
          TOP BRAND BAR
      ================================================= */}

      <div className="h-2 bg-buildcv-violet" />

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="px-9 pb-7 pt-8">
        <div className="flex items-end justify-between gap-8">
          <div className="min-w-0">
            <div
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-buildcv-violet-50
                px-2.5
                py-1
              "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

              <span
                className="
                  text-[6.5px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-buildcv-violet
                "
              >
                Professional Profile
              </span>
            </div>

            <h1
              className="
                text-[31px]
                font-extrabold
                leading-none
                tracking-[-0.045em]
                text-buildcv-ink-900
              "
            >
              {resume.fullName || "Your Name"}
            </h1>

            <p
              className="
                mt-3
                text-[11px]
                font-bold
                text-buildcv-text-secondary
              "
            >
              {resume.jobTitle || "Professional"}
            </p>
          </div>

          {/* CONTACT */}

          <div
            className="
              max-w-[235px]
              text-right
              text-[7.5px]
              leading-[1.9]
              text-buildcv-text-muted
            "
          >
            {resume.email && <div>{resume.email}</div>}
            {resume.phone && <div>{resume.phone}</div>}
            {resume.location && <div>{resume.location}</div>}

            {resume.linkedin && (
              <div className="text-buildcv-violet">
                {resume.linkedin}
              </div>
            )}

            {resume.github && (
              <div className="text-buildcv-violet">
                {resume.github}
              </div>
            )}
          </div>
        </div>

        {/* BRAND LINE */}

        <div className="mt-6 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />
          <span className="h-px flex-1 bg-buildcv-border" />
          <span className="h-1.5 w-1.5 rounded-full bg-buildcv-soft" />
        </div>
      </header>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="grid grid-cols-[235px_1fr] gap-0">
        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <aside className="border-r border-buildcv-border bg-buildcv-surface-soft px-6 py-7">
          {/* =================================================
              PROFILE
          ================================================= */}

          {resume.summary && (
            <StartupSideSection title="PROFILE">
              <p
                className="
                  text-[8px]
                  leading-[1.75]
                  text-buildcv-text-secondary
                "
              >
                {resume.summary}
              </p>
            </StartupSideSection>
          )}

          {/* =================================================
              SKILLS
          ================================================= */}

          {resume.skills.length > 0 && (
            <StartupSideSection title="CORE SKILLS">
              <div className="space-y-2">
                {resume.skills.map((skill, index) => {
                  const name = getSkillName(skill);

                  if (!name) return null;

                  return (
                    <div
                      key={index}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-2
                        border-b
                        border-buildcv-border
                        pb-1.5
                      "
                    >
                      <span
                        className="
                          text-[7.5px]
                          font-semibold
                          text-buildcv-text-secondary
                        "
                      >
                        {name}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />
                    </div>
                  );
                })}
              </div>
            </StartupSideSection>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {resume.education.length > 0 && (
            <StartupSideSection title="EDUCATION">
              <div className="space-y-5">
                {resume.education.map((item, index) => (
                  <div key={item.id || index}>
                    <h3
                      className="
                        text-[8.5px]
                        font-bold
                        leading-4
                        text-buildcv-ink-900
                      "
                    >
                      {getEducationTitle(item)}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[7.5px]
                        leading-4
                        text-buildcv-text-secondary
                      "
                    >
                      {getInstitution(item)}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[6.5px]
                        font-semibold
                        text-buildcv-violet
                      "
                    >
                      {getDate(item)}
                    </p>
                  </div>
                ))}
              </div>
            </StartupSideSection>
          )}

          {/* =================================================
              QUICK DETAILS
          ================================================= */}

          <StartupSideSection title="AT A GLANCE">
            <div className="space-y-2.5">
              <StartupMeta
                label="ROLE"
                value={resume.jobTitle || "Professional"}
              />

              <StartupMeta
                label="LOCATION"
                value={resume.location || "Open to opportunities"}
              />

              <StartupMeta
                label="FOCUS"
                value="Growth & Innovation"
              />
            </div>
          </StartupSideSection>
        </aside>

        {/* =================================================
            RIGHT COLUMN
        ================================================= */}

        <main className="px-8 py-7">
          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {resume.experience.length > 0 && (
            <StartupSection title="EXPERIENCE">
              <div className="space-y-7">
                {resume.experience.map((item, index) => (
                  <article
                    key={item.id || index}
                    className="relative"
                  >
                    {/* Number */}

                    <div
                      className="
                        absolute
                        -left-7
                        top-0
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        bg-buildcv-violet-50
                        text-[6px]
                        font-extrabold
                        text-buildcv-violet
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h3
                          className="
                            text-[11px]
                            font-bold
                            text-buildcv-ink-900
                          "
                        >
                          {getExperienceTitle(item)}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[7.5px]
                            font-bold
                            text-buildcv-violet
                          "
                        >
                          {getCompany(item)}
                        </p>
                      </div>

                      <span
                        className="
                          shrink-0
                          whitespace-nowrap
                          rounded-full
                          bg-buildcv-surface-soft
                          px-2
                          py-1
                          text-[6.5px]
                          font-semibold
                          text-buildcv-text-muted
                        "
                      >
                        {getDate(item)}
                      </span>
                    </div>

                    {getDescription(item) && (
                      <p
                        className="
                          mt-2.5
                          text-[8px]
                          leading-[1.75]
                          text-buildcv-text-secondary
                        "
                      >
                        {getDescription(item)}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </StartupSection>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {resume.projects.length > 0 && (
            <StartupSection title="SELECTED WORK">
              <div className="grid grid-cols-2 gap-3.5">
                {resume.projects.map((project, index) => (
                  <article
                    key={project.id || index}
                    className="
                      group
                      rounded-xl
                      border
                      border-buildcv-border
                      bg-white
                      p-3.5
                    "
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span
                        className="
                          text-[6px]
                          font-extrabold
                          tracking-[0.14em]
                          text-buildcv-violet
                        "
                      >
                        PROJECT {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-buildcv-soft" />
                    </div>

                    <h3
                      className="
                        mt-2
                        text-[9px]
                        font-bold
                        leading-4
                        text-buildcv-ink-900
                      "
                    >
                      {getProjectName(project)}
                    </h3>

                    {getDescription(project) && (
                      <p
                        className="
                          mt-2
                          text-[7px]
                          leading-[1.7]
                          text-buildcv-text-secondary
                        "
                      >
                        {getDescription(project)}
                      </p>
                    )}

                    {project.technologies && (
                      <div
                        className="
                          mt-3
                          border-t
                          border-buildcv-border
                          pt-2
                        "
                      >
                        <p
                          className="
                            text-[6px]
                            font-semibold
                            leading-4
                            text-buildcv-violet
                          "
                        >
                          {project.technologies}
                        </p>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </StartupSection>
          )}

          {/* =================================================
              CAREER HIGHLIGHT
          ================================================= */}

          <div
            className="
              mt-8
              rounded-xl
              bg-buildcv-violet
              px-5
              py-4
              text-white
            "
          >
            <div className="flex items-start justify-between gap-5">
              <div>
                <p
                  className="
                    text-[6px]
                    font-extrabold
                    uppercase
                    tracking-[0.18em]
                    text-buildcv-violet-100
                  "
                >
                  Career Focus
                </p>

                <h3
                  className="
                    mt-1.5
                    text-[11px]
                    font-bold
                  "
                >
                  Building meaningful digital experiences.
                </h3>
              </div>

              <div
                className="
                  flex
                  h-7
                  w-7
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white/15
                  text-[10px]
                  font-bold
                "
              >
                ↗
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer
        className="
          mt-5
          border-t
          border-buildcv-border
          px-9
          py-3
          text-center
          text-[6.5px]
          text-buildcv-text-muted
        "
      >
        {resume.fullName || "Your Name"} • BuildCV
      </footer>
    </div>
  );
}

/* =========================================================
   SIDEBAR SECTION
========================================================= */

function StartupSideSection({ title, children }) {
  return (
    <section className="mb-7">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

        <h2
          className="
            text-[7px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

function StartupSection({ title, children }) {
  return (
    <section className="mb-8">
      <div className="mb-5 flex items-center gap-3">
        <h2
          className="
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>

        <div className="h-px flex-1 bg-buildcv-border" />

        <span className="text-[6px] font-bold text-buildcv-violet">
          01
        </span>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   META ITEM
========================================================= */

function StartupMeta({ label, value }) {
  return (
    <div>
      <p
        className="
          text-[6px]
          font-extrabold
          tracking-[0.14em]
          text-buildcv-violet
        "
      >
        {label}
      </p>

      <p
        className="
          mt-0.5
          text-[7.5px]
          leading-4
          text-buildcv-text-secondary
        "
      >
        {value}
      </p>
    </div>
  );
}