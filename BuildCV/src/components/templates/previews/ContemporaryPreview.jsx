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
BUILDCV — CONTEMPORARY PREMIUM PREVIEW
=========================================================

Design:
• One-page A4
• Two-column editorial layout
• No profile photo
• Premium modern appearance
• Strong typography hierarchy
• Timeline experience
• Compact skills
• Project showcase
• ATS-readable text structure
=========================================================
*/

export default function ContemporaryPreview({ formData = {} }) {
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
          TOP IDENTITY AREA
      ================================================= */}

      <header className="relative px-10 pb-8 pt-9">

        {/* Accent rail */}

        <div className="absolute left-0 top-9 h-24 w-1 bg-buildcv-violet" />

        <div className="flex items-end justify-between gap-8">

          {/* NAME */}

          <div className="min-w-0">

            <p
              className="
                mb-3
                text-[7px]
                font-extrabold
                uppercase
                tracking-[0.24em]
                text-buildcv-violet
              "
            >
              PROFESSIONAL PROFILE
            </p>

            <h1
              className="
                font-display
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
                font-semibold
                text-buildcv-text-secondary
              "
            >
              {resume.jobTitle || "Professional Title"}
            </p>

          </div>

          {/* CONTACT */}

          <div
            className="
              max-w-[225px]
              border-l
              border-buildcv-border
              pl-5
              text-right
              text-[7.5px]
              leading-5
              text-buildcv-text-muted
            "
          >

            {resume.email && (
              <div className="break-all">
                {resume.email}
              </div>
            )}

            {resume.phone && (
              <div>
                {resume.phone}
              </div>
            )}

            {resume.location && (
              <div>
                {resume.location}
              </div>
            )}

            {resume.linkedin && (
              <div className="break-all text-buildcv-violet">
                {resume.linkedin}
              </div>
            )}

            {resume.github && (
              <div className="break-all text-buildcv-violet">
                {resume.github}
              </div>
            )}

          </div>

        </div>

        {/* Decorative line */}

        <div className="mt-7 h-px bg-buildcv-border" />

      </header>

      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <div className="grid grid-cols-[215px_1fr]">

        {/* =================================================
            LEFT COLUMN
        ================================================= */}

        <aside
          className="
            border-r
            border-buildcv-border
            bg-buildcv-surface-soft
            px-6
            py-7
          "
        >

          {/* =================================================
              PROFILE
          ================================================= */}

          {resume.summary && (
            <ContemporarySideSection title="PROFILE">

              <p
                className="
                  text-[8px]
                  leading-[1.75]
                  text-buildcv-text-secondary
                "
              >
                {resume.summary}
              </p>

            </ContemporarySideSection>
          )}

          {/* =================================================
              SKILLS
          ================================================= */}

          {resume.skills.length > 0 && (
            <ContemporarySideSection title="EXPERTISE">

              <div className="space-y-2.5">

                {resume.skills.map((skill, index) => {

                  const name = getSkillName(skill);

                  if (!name) return null;

                  return (
                    <div
                      key={skill?.id || index}
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
                          text-buildcv-text-secondary
                        "
                      >
                        {name}
                      </span>

                    </div>
                  );
                })}

              </div>

            </ContemporarySideSection>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {resume.education.length > 0 && (
            <ContemporarySideSection title="EDUCATION">

              <div className="space-y-5">

                {resume.education.map((item, index) => (

                  <div key={item?.id || index}>

                    <p
                      className="
                        mb-1
                        text-[7px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-buildcv-violet
                      "
                    >
                      {getDate(item)}
                    </p>

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

                  </div>

                ))}

              </div>

            </ContemporarySideSection>
          )}

          {/* =================================================
              PERSONAL DETAILS
          ================================================= */}

          <ContemporarySideSection title="DETAILS">

            <div
              className="
                space-y-2
                text-[7.5px]
                leading-4
                text-buildcv-text-muted
              "
            >

              {resume.location && (
                <div>
                  <span className="font-bold text-buildcv-ink-900">
                    Location
                  </span>
                  <br />
                  {resume.location}
                </div>
              )}

              {resume.jobTitle && (
                <div>
                  <span className="font-bold text-buildcv-ink-900">
                    Role
                  </span>
                  <br />
                  {resume.jobTitle}
                </div>
              )}

            </div>

          </ContemporarySideSection>

        </aside>

        {/* =================================================
            RIGHT COLUMN
        ================================================= */}

        <main className="px-8 py-7">

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {resume.experience.length > 0 && (
            <ContemporaryMainSection title="EXPERIENCE">

              <div className="space-y-7">

                {resume.experience.map((item, index) => (

                  <article
                    key={item?.id || index}
                    className="relative pl-7"
                  >

                    {/* Timeline */}

                    <div
                      className="
                        absolute
                        left-[2px]
                        top-2
                        h-full
                        w-px
                        bg-buildcv-border
                      "
                    />

                    <div
                      className="
                        absolute
                        left-0
                        top-2
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-buildcv-violet
                        ring-2
                        ring-buildcv-violet-50
                      "
                    />

                    {/* Date */}

                    <div
                      className="
                        mb-2
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >

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
                          rounded-full
                          bg-buildcv-violet-50
                          px-2.5
                          py-1
                          text-[6.5px]
                          font-semibold
                          text-buildcv-violet
                        "
                      >
                        {getDate(item)}
                      </span>

                    </div>

                    {getDescription(item) && (
                      <p
                        className="
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

            </ContemporaryMainSection>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {resume.projects.length > 0 && (
            <ContemporaryMainSection title="SELECTED WORK">

              <div className="space-y-4">

                {resume.projects.map((project, index) => (

                  <article
                    key={project?.id || index}
                    className="
                      group
                      rounded-xl
                      border
                      border-buildcv-border
                      bg-white
                      p-4
                      shadow-buildcv-xs
                    "
                  >

                    <div className="flex items-start gap-4">

                      {/* Number */}

                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-lg
                          bg-buildcv-violet-50
                          font-display
                          text-[8px]
                          font-extrabold
                          text-buildcv-violet
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Content */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-start justify-between gap-4">

                          <h3
                            className="
                              text-[10px]
                              font-bold
                              text-buildcv-ink-900
                            "
                          >
                            {getProjectName(project)}
                          </h3>

                          {project.link && (
                            <span
                              className="
                                max-w-[130px]
                                break-all
                                text-right
                                text-[6.5px]
                                font-semibold
                                text-buildcv-violet
                              "
                            >
                              {project.link}
                            </span>
                          )}

                        </div>

                        {getDescription(project) && (
                          <p
                            className="
                              mt-1.5
                              text-[8px]
                              leading-[1.65]
                              text-buildcv-text-secondary
                            "
                          >
                            {getDescription(project)}
                          </p>
                        )}

                        {project.technologies && (
                          <div className="mt-2.5 flex flex-wrap gap-1.5">

                            {(Array.isArray(project.technologies)
                              ? project.technologies
                              : String(project.technologies)
                                  .split(",")
                            ).map((technology, techIndex) => {

                              const value =
                                typeof technology === "string"
                                  ? technology.trim()
                                  : technology;

                              if (!value) return null;

                              return (
                                <span
                                  key={techIndex}
                                  className="
                                    rounded
                                    bg-buildcv-surface-soft
                                    px-1.5
                                    py-1
                                    text-[6px]
                                    font-semibold
                                    text-buildcv-text-secondary
                                  "
                                >
                                  {value}
                                </span>
                              );
                            })}

                          </div>
                        )}

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            </ContemporaryMainSection>
          )}

        </main>

      </div>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer
        className="
          mt-2
          flex
          items-center
          justify-between
          border-t
          border-buildcv-border
          px-10
          py-3
          text-[6.5px]
          text-buildcv-text-muted
        "
      >

        <span>
          BUILD CV
        </span>

        <span>
          {resume.fullName || "Your Name"}
        </span>

      </footer>

    </div>
  );
}

/* =========================================================
   SIDEBAR SECTION
========================================================= */

function ContemporarySideSection({ title, children }) {
  return (
    <section className="mb-7">

      <div className="mb-3 flex items-center gap-2">

        <span
          className="
            h-3
            w-0.5
            rounded-full
            bg-buildcv-violet
          "
        />

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

function ContemporaryMainSection({ title, children }) {
  return (
    <section className="mb-8">

      <div className="mb-5 flex items-center gap-3">

        <h2
          className="
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

        <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

      </div>

      {children}

    </section>
  );
}
