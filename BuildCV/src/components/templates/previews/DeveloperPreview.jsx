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
BUILDCV — DEVELOPER / CODECRAFT TEMPLATE
=========================================================

Style:
• Premium developer resume
• Two-column layout
• No photo
• Projects emphasized
• GitHub + LinkedIn supported
• ATS-friendly content structure
• A4 optimized
=========================================================
*/

export default function DeveloperPreview({ formData }) {
  const resume = getResumeData(formData);

  return (
    <div
      className="
        min-h-[1123px]
        w-full
        overflow-hidden
        bg-white
        text-buildcv-ink-900
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="relative bg-buildcv-ink-900 px-9 py-8 text-white">
        {/* Decorative grid */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            opacity-[0.05]
          "
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "18px 18px",
          }}
        />

        <div className="relative flex items-start justify-between gap-8">
          {/* NAME */}

          <div className="min-w-0">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-buildcv-violet" />

              <span
                className="
                  font-mono
                  text-[7px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-buildcv-violet-300
                "
              >
                Developer Resume
              </span>
            </div>

            <h1
              className="
                text-[30px]
                font-extrabold
                leading-none
                tracking-[-0.045em]
              "
            >
              {resume.fullName || "Your Name"}
            </h1>

            <p
              className="
                mt-3
                font-mono
                text-[10px]
                font-semibold
                text-buildcv-violet-300
              "
            >
              {`<${resume.jobTitle || "Developer"} />`}
            </p>
          </div>

          {/* CONTACT */}

          <div
            className="
              max-w-[225px]
              text-right
              font-mono
              text-[7.5px]
              leading-5
              text-buildcv-soft
            "
          >
            {resume.email && <div>{resume.email}</div>}

            {resume.phone && <div>{resume.phone}</div>}

            {resume.location && <div>{resume.location}</div>}

            {resume.github && (
              <div className="text-buildcv-violet-300">
                GitHub · {resume.github}
              </div>
            )}

            {resume.linkedin && (
              <div className="text-buildcv-violet-300">
                LinkedIn · {resume.linkedin}
              </div>
            )}
          </div>
        </div>

        {/* CODE STATEMENT */}

        <div
          className="
            relative
            mt-7
            flex
            items-center
            gap-2
            border-t
            border-white/10
            pt-4
            font-mono
            text-[7px]
            text-buildcv-text-muted
          "
        >
          <span className="text-buildcv-violet-300">const</span>

          <span className="text-white">developer</span>

          <span>=</span>

          <span className="text-buildcv-violet-300">
            {"{"}
          </span>

          <span>problemSolver: true,</span>

          <span>creative: true</span>

          <span className="text-buildcv-violet-300">
            {"}"}
          </span>

          <span>;</span>
        </div>
      </header>

      {/* =================================================
          MAIN AREA
      ================================================= */}

      <div className="grid grid-cols-[225px_1fr]">
        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside
          className="
            min-h-[1010px]
            border-r
            border-buildcv-border
            bg-buildcv-surface-soft
            px-6
            py-7
          "
        >
          {/* =================================================
              TECH STACK
          ================================================= */}

          {resume.skills.length > 0 && (
            <DeveloperSideSection title="TECH STACK">
              <div className="flex flex-wrap gap-1.5">
                {resume.skills.map((skill, index) => {
                  const name = getSkillName(skill);

                  if (!name) return null;

                  return (
                    <span
                      key={index}
                      className="
                        rounded-md
                        border
                        border-buildcv-border
                        bg-white
                        px-2
                        py-1.5
                        font-mono
                        text-[7px]
                        font-semibold
                        text-buildcv-text-secondary
                      "
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </DeveloperSideSection>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {resume.education.length > 0 && (
            <DeveloperSideSection title="EDUCATION">
              <div className="space-y-5">
                {resume.education.map((item, index) => (
                  <div key={item.id || index}>
                    <h3
                      className="
                        text-[9px]
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
                        text-[8px]
                        leading-4
                        text-buildcv-text-secondary
                      "
                    >
                      {getInstitution(item)}
                    </p>

                    <p
                      className="
                        mt-1
                        font-mono
                        text-[7px]
                        text-buildcv-violet
                      "
                    >
                      {getDate(item)}
                    </p>
                  </div>
                ))}
              </div>
            </DeveloperSideSection>
          )}

          {/* =================================================
              CONTACT
          ================================================= */}

          <DeveloperSideSection title="CONNECT">
            <div
              className="
                space-y-2
                font-mono
                text-[7px]
                leading-4
                text-buildcv-text-muted
              "
            >
              {resume.email && (
                <div>
                  <span className="text-buildcv-violet">email:</span>{" "}
                  {resume.email}
                </div>
              )}

              {resume.github && (
                <div>
                  <span className="text-buildcv-violet">github:</span>{" "}
                  {resume.github}
                </div>
              )}

              {resume.linkedin && (
                <div>
                  <span className="text-buildcv-violet">linkedin:</span>{" "}
                  {resume.linkedin}
                </div>
              )}
            </div>
          </DeveloperSideSection>

          {/* =================================================
              PROFILE
          ================================================= */}

          <DeveloperSideSection title="PROFILE">
            <div
              className="
                rounded-lg
                border
                border-buildcv-border
                bg-white
                p-3
              "
            >
              <div
                className="
                  font-mono
                  text-[7px]
                  leading-5
                  text-buildcv-text-muted
                "
              >
                <div>
                  <span className="text-buildcv-violet">role</span>
                  <span className="mx-1">:</span>
                  {resume.jobTitle || "Developer"}
                </div>

                <div>
                  <span className="text-buildcv-violet">location</span>
                  <span className="mx-1">:</span>
                  {resume.location || "Open to opportunities"}
                </div>
              </div>
            </div>
          </DeveloperSideSection>
        </aside>

        {/* =================================================
            MAIN CONTENT
        ================================================= */}

        <main className="px-8 py-8">
          {/* =================================================
              ABOUT
          ================================================= */}

          {resume.summary && (
            <DeveloperSection title="ABOUT">
              <p
                className="
                  text-[9px]
                  leading-[1.8]
                  text-buildcv-text-secondary
                "
              >
                {resume.summary}
              </p>
            </DeveloperSection>
          )}

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {resume.experience.length > 0 && (
            <DeveloperSection title="EXPERIENCE">
              <div className="space-y-7">
                {resume.experience.map((item, index) => (
                  <article
                    key={item.id || index}
                    className="relative pl-5"
                  >
                    {/* Timeline */}

                    <div
                      className="
                        absolute
                        left-0
                        top-1
                        h-full
                        w-px
                        bg-buildcv-border
                      "
                    />

                    <div
                      className="
                        absolute
                        -left-[3px]
                        top-1
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-buildcv-violet
                      "
                    />

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
                            font-mono
                            text-[7.5px]
                            font-semibold
                            text-buildcv-violet
                          "
                        >
                          {getCompany(item)}
                        </p>
                      </div>

                      <span
                        className="
                          shrink-0
                          font-mono
                          text-[7px]
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
                          text-[8.5px]
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
            </DeveloperSection>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {resume.projects.length > 0 && (
            <DeveloperSection title="SELECTED PROJECTS">
              <div className="space-y-3">
                {resume.projects.map((project, index) => (
                  <article
                    key={project.id || index}
                    className="
                      group
                      rounded-lg
                      border
                      border-buildcv-border
                      bg-buildcv-surface-soft
                      p-3.5
                    "
                  >
                    <div className="flex items-start gap-3">
                      {/* Number */}

                      <div
                        className="
                          flex
                          h-6
                          w-6
                          shrink-0
                          items-center
                          justify-center
                          rounded-md
                          bg-buildcv-violet-50
                          font-mono
                          text-[7px]
                          font-bold
                          text-buildcv-violet
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <div className="min-w-0 flex-1">
                        <h3
                          className="
                            text-[9px]
                            font-bold
                            text-buildcv-ink-900
                          "
                        >
                          {getProjectName(project)}
                        </h3>

                        {getDescription(project) && (
                          <p
                            className="
                              mt-1.5
                              text-[7.5px]
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
                              mt-2.5
                              flex
                              items-center
                              gap-2
                              border-t
                              border-buildcv-border
                              pt-2
                            "
                          >
                            <span
                              className="
                                font-mono
                                text-[6px]
                                font-bold
                                uppercase
                                tracking-wider
                                text-buildcv-violet
                              "
                            >
                              stack
                            </span>

                            <span
                              className="
                                font-mono
                                text-[6.5px]
                                text-buildcv-text-muted
                              "
                            >
                              {project.technologies}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </DeveloperSection>
          )}
        </main>
      </div>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer
        className="
          flex
          items-center
          justify-between
          border-t
          border-buildcv-border
          px-9
          py-3
          font-mono
          text-[6.5px]
          text-buildcv-text-muted
        "
      >
        <span>
          <span className="text-buildcv-violet">//</span>{" "}
          BuildCV
        </span>

        <span>
          {resume.fullName || "Your Name"} · Resume
        </span>
      </footer>
    </div>
  );
}

/* =========================================================
   SIDEBAR SECTION
========================================================= */

function DeveloperSideSection({ title, children }) {
  return (
    <section className="mb-7">
      <div className="mb-3 flex items-center gap-2">
        <span
          className="
            font-mono
            text-[7px]
            font-bold
            text-buildcv-violet
          "
        >
          //
        </span>

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

function DeveloperSection({ title, children }) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <h2
          className="
            font-mono
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

        <span className="font-mono text-[6px] text-buildcv-violet">
          {"</>"}
        </span>
      </div>

      {children}
    </section>
  );
}
