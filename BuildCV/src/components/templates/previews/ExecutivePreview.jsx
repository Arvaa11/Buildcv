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
BUILDCV — EXECUTIVE PREMIUM PREVIEW
=========================================================

Design:
• Two Column
• No Photo
• Executive / Leadership focused
• Premium corporate appearance
• Strong hierarchy
• Clean ATS-friendly content structure
• A4 compatible
=========================================================
*/

export default function ExecutivePreview({ formData }) {
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
          EXECUTIVE HEADER
      ================================================= */}

      <header className="px-10 pt-10">

        <div className="flex items-start justify-between gap-10">

          {/* NAME */}

          <div className="min-w-0">

            <div className="mb-3 flex items-center gap-3">
              <div className="h-px w-8 bg-buildcv-violet" />

              <span
                className="
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-buildcv-violet
                "
              >
                Executive Profile
              </span>
            </div>

            <h1
              className="
                text-[32px]
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
                uppercase
                tracking-[0.16em]
                text-buildcv-text-secondary
              "
            >
              {resume.jobTitle || "Executive Professional"}
            </p>

          </div>

          {/* CONTACT */}

          <div className="max-w-[220px] pt-1 text-right">

            <div
              className="
                space-y-1
                text-[7.5px]
                leading-4
                text-buildcv-text-muted
              "
            >
              {resume.email && (
                <p>{resume.email}</p>
              )}

              {resume.phone && (
                <p>{resume.phone}</p>
              )}

              {resume.location && (
                <p>{resume.location}</p>
              )}

              {resume.linkedin && (
                <p className="text-buildcv-violet">
                  {resume.linkedin}
                </p>
              )}

              {resume.github && (
                <p className="text-buildcv-violet">
                  {resume.github}
                </p>
              )}
            </div>

          </div>

        </div>

        {/* HEADER DIVIDER */}

        <div className="mt-8 h-[3px] w-full bg-buildcv-ink-900" />

        <div className="mt-1 h-px w-full bg-buildcv-violet" />

      </header>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="mt-8 grid grid-cols-[235px_1fr]">

        {/* =================================================
            LEFT SIDEBAR
        ================================================= */}

        <aside className="border-r border-buildcv-border px-7 py-1">

          {/* =================================================
              EXPERTISE
          ================================================= */}

          {resume.skills.length > 0 && (
            <ExecutiveSideSection title="AREAS OF EXPERTISE">

              <div className="space-y-2.5">

                {resume.skills.map((skill, index) => {
                  const name = getSkillName(skill);

                  if (!name) return null;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2"
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-buildcv-violet
                        "
                      />

                      <span
                        className="
                          text-[8px]
                          font-semibold
                          leading-4
                          text-buildcv-text-secondary
                        "
                      >
                        {name}
                      </span>
                    </div>
                  );
                })}

              </div>

            </ExecutiveSideSection>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {resume.education.length > 0 && (
            <ExecutiveSideSection title="EDUCATION">

              <div className="space-y-6">

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
                        text-[7px]
                        font-semibold
                        text-buildcv-violet
                      "
                    >
                      {getDate(item)}
                    </p>

                  </div>
                ))}

              </div>

            </ExecutiveSideSection>
          )}

          {/* =================================================
              EXECUTIVE DETAILS
          ================================================= */}

          <ExecutiveSideSection title="PROFESSIONAL">

            <div className="space-y-3">

              <ExecutiveDetail
                label="LOCATION"
                value={resume.location}
              />

              <ExecutiveDetail
                label="EMAIL"
                value={resume.email}
              />

              <ExecutiveDetail
                label="PHONE"
                value={resume.phone}
              />

            </div>

          </ExecutiveSideSection>

        </aside>

        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <main className="px-9 py-1">

          {/* =================================================
              LEADERSHIP PROFILE
          ================================================= */}

          {resume.summary && (
            <ExecutiveSection title="LEADERSHIP PROFILE">

              <div
                className="
                  border-l-[3px]
                  border-buildcv-violet
                  pl-5
                "
              >
                <p
                  className="
                    text-[9.5px]
                    leading-[1.8]
                    text-buildcv-text-secondary
                  "
                >
                  {resume.summary}
                </p>
              </div>

            </ExecutiveSection>
          )}

          {/* =================================================
              CAREER HISTORY
          ================================================= */}

          {resume.experience.length > 0 && (
            <ExecutiveSection title="CAREER HISTORY">

              <div className="space-y-7">

                {resume.experience.map((item, index) => (
                  <article
                    key={item.id || index}
                    className="relative"
                  >

                    {/* TOP LINE */}

                    <div className="flex items-start justify-between gap-6">

                      <div className="min-w-0">

                        <h3
                          className="
                            text-[12px]
                            font-bold
                            leading-5
                            text-buildcv-ink-900
                          "
                        >
                          {getExperienceTitle(item)}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[8px]
                            font-bold
                            uppercase
                            tracking-[0.08em]
                            text-buildcv-violet
                          "
                        >
                          {getCompany(item)}
                        </p>

                      </div>

                      <span
                        className="
                          shrink-0
                          pt-1
                          text-[7.5px]
                          font-semibold
                          text-buildcv-text-muted
                        "
                      >
                        {getDate(item)}
                      </span>

                    </div>

                    {/* DESCRIPTION */}

                    {getDescription(item) && (
                      <div className="mt-3">

                        <p
                          className="
                            text-[8.5px]
                            leading-[1.75]
                            text-buildcv-text-secondary
                          "
                        >
                          {getDescription(item)}
                        </p>

                      </div>
                    )}

                    {/* SEPARATOR */}

                    {index <
                      resume.experience.length - 1 && (
                      <div className="mt-6 h-px bg-buildcv-border" />
                    )}

                  </article>
                ))}

              </div>

            </ExecutiveSection>
          )}

          {/* =================================================
              SELECTED INITIATIVES / PROJECTS
          ================================================= */}

          {resume.projects.length > 0 && (
            <ExecutiveSection title="SELECTED INITIATIVES">

              <div className="space-y-5">

                {resume.projects.map((project, index) => (
                  <article
                    key={project.id || index}
                    className="
                      grid
                      grid-cols-[28px_1fr]
                      gap-3
                    "
                  >

                    {/* NUMBER */}

                    <div
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-buildcv-violet-50
                        text-[7px]
                        font-bold
                        text-buildcv-violet
                      "
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* PROJECT */}

                    <div>

                      <h3
                        className="
                          text-[10px]
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
                            text-[8px]
                            leading-[1.7]
                            text-buildcv-text-secondary
                          "
                        >
                          {getDescription(project)}
                        </p>
                      )}

                      {project.technologies && (
                        <p
                          className="
                            mt-2
                            text-[7px]
                            font-semibold
                            uppercase
                            tracking-[0.06em]
                            text-buildcv-violet
                          "
                        >
                          {project.technologies}
                        </p>
                      )}

                    </div>

                  </article>
                ))}

              </div>

            </ExecutiveSection>
          )}

        </main>

      </div>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="mt-7 border-t border-buildcv-border px-10 py-3">

        <div className="flex items-center justify-between">

          <span
            className="
              text-[6.5px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-buildcv-text-muted
            "
          >
            BuildCV
          </span>

          <span
            className="
              text-[6.5px]
              text-buildcv-text-muted
            "
          >
            Professional Resume
          </span>

        </div>

      </footer>

    </div>
  );
}

/* =========================================================
   SIDEBAR SECTION
========================================================= */

function ExecutiveSideSection({ title, children }) {
  return (
    <section className="mb-8">

      <div className="mb-4">

        <h2
          className="
            text-[7px]
            font-extrabold
            uppercase
            tracking-[0.2em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>

        <div className="mt-2 h-[2px] w-7 bg-buildcv-violet" />

      </div>

      {children}

    </section>
  );
}

/* =========================================================
   SIDEBAR DETAIL
========================================================= */

function ExecutiveDetail({ label, value }) {
  if (!value) return null;

  return (
    <div>

      <p
        className="
          text-[6px]
          font-extrabold
          uppercase
          tracking-[0.16em]
          text-buildcv-text-muted
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          break-words
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

/* =========================================================
   MAIN SECTION
========================================================= */

function ExecutiveSection({ title, children }) {
  return (
    <section className="mb-9">

      <div className="mb-5 flex items-center gap-3">

        <h2
          className="
            shrink-0
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.2em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>

        <div className="h-px flex-1 bg-buildcv-border" />

      </div>

      {children}

    </section>
  );
}
