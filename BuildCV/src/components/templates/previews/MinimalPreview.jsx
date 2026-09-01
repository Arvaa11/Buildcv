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
BUILDCV — MINIMAL PREMIUM PREVIEW
=========================================================

Layout:
• One Column
• No Photo
• ATS Friendly
• Clean editorial typography
• Strong whitespace
• Premium minimal hierarchy
=========================================================
*/

export default function MinimalPreview({ formData = {} }) {

  // IMPORTANT:
  // Normalize all resume data through templateUtils
  const resume = getResumeData(formData);

  return (
    <div
      className="
        min-h-[1123px]
        w-full
        bg-white
        px-[58px]
        py-[52px]
        text-buildcv-ink-900
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <header className="border-b border-buildcv-border pb-7">

        <div className="flex items-end justify-between gap-8">

          {/* NAME + TITLE */}

          <div className="min-w-0">

            <h1
              className="
                text-[32px]
                font-extrabold
                leading-[1]
                tracking-[-0.04em]
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
                tracking-[0.18em]
                text-buildcv-violet
              "
            >
              {resume.jobTitle || "Professional Title"}
            </p>

          </div>

          {/* CONTACT */}

          <div
            className="
              max-w-[230px]
              text-right
              text-[8px]
              leading-4
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
              <div className="break-all">
                {resume.linkedin}
              </div>
            )}

            {resume.github && (
              <div className="break-all">
                {resume.github}
              </div>
            )}

          </div>

        </div>

      </header>


      {/* =================================================
          MAIN CONTENT
      ================================================= */}

      <main className="pt-8">

        {/* =================================================
            SUMMARY
        ================================================= */}

        {resume.summary && (
          <MinimalSection title="PROFILE">

            <p
              className="
                max-w-[650px]
                text-[10px]
                leading-[1.8]
                text-buildcv-text-secondary
              "
            >
              {resume.summary}
            </p>

          </MinimalSection>
        )}


        {/* =================================================
            EXPERIENCE
        ================================================= */}

        {resume.experience.length > 0 && (
          <MinimalSection title="EXPERIENCE">

            <div className="space-y-7">

              {resume.experience.map((item, index) => (

                <article
                  key={item?.id || index}
                  className="
                    grid
                    grid-cols-[125px_1fr]
                    gap-7
                  "
                >

                  {/* DATE */}

                  <div className="pt-0.5">

                    <p
                      className="
                        text-[8px]
                        font-semibold
                        leading-4
                        text-buildcv-text-muted
                      "
                    >
                      {getDate(item)}
                    </p>

                  </div>


                  {/* EXPERIENCE */}

                  <div className="relative">

                    {/* Timeline dot */}

                    <div
                      className="
                        absolute
                        -left-4
                        top-[3px]
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-buildcv-violet
                      "
                    />

                    <h3
                      className="
                        text-[12px]
                        font-bold
                        leading-4
                        text-buildcv-ink-900
                      "
                    >
                      {getExperienceTitle(item)}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-semibold
                        text-buildcv-violet
                      "
                    >
                      {getCompany(item)}
                    </p>

                    {getDescription(item) && (
                      <p
                        className="
                          mt-2.5
                          text-[9px]
                          leading-[1.7]
                          text-buildcv-text-secondary
                        "
                      >
                        {getDescription(item)}
                      </p>
                    )}

                  </div>

                </article>

              ))}

            </div>

          </MinimalSection>
        )}


        {/* =================================================
            EDUCATION
        ================================================= */}

        {resume.education.length > 0 && (
          <MinimalSection title="EDUCATION">

            <div className="space-y-6">

              {resume.education.map((item, index) => (

                <article
                  key={item?.id || index}
                  className="
                    grid
                    grid-cols-[125px_1fr]
                    gap-7
                  "
                >

                  {/* DATE */}

                  <div className="pt-0.5">

                    <p
                      className="
                        text-[8px]
                        font-semibold
                        leading-4
                        text-buildcv-text-muted
                      "
                    >
                      {getDate(item)}
                    </p>

                  </div>


                  {/* EDUCATION */}

                  <div>

                    <h3
                      className="
                        text-[11px]
                        font-bold
                        text-buildcv-ink-900
                      "
                    >
                      {getEducationTitle(item)}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-[9px]
                        font-medium
                        text-buildcv-text-secondary
                      "
                    >
                      {getInstitution(item)}
                    </p>

                    {getDescription(item) && (
                      <p
                        className="
                          mt-2
                          text-[9px]
                          leading-[1.7]
                          text-buildcv-text-secondary
                        "
                      >
                        {getDescription(item)}
                      </p>
                    )}

                  </div>

                </article>

              ))}

            </div>

          </MinimalSection>
        )}


        {/* =================================================
            SKILLS
        ================================================= */}

        {resume.skills.length > 0 && (
          <MinimalSection title="CORE SKILLS">

            <div className="flex flex-wrap gap-x-2 gap-y-2">

              {resume.skills.map((skill, index) => {

                const name = getSkillName(skill);

                if (!name) return null;

                return (
                  <span
                    key={skill?.id || index}
                    className="
                      border
                      border-buildcv-border
                      bg-buildcv-surface-soft
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-semibold
                      text-buildcv-text-secondary
                    "
                  >
                    {name}
                  </span>
                );

              })}

            </div>

          </MinimalSection>
        )}


        {/* =================================================
            PROJECTS
        ================================================= */}

        {resume.projects.length > 0 && (
          <MinimalSection title="SELECTED PROJECTS">

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">

              {resume.projects.map((project, index) => (

                <article
                  key={project?.id || index}
                >

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
                        text-[8.5px]
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
                        text-[7.5px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-buildcv-violet
                      "
                    >
                      {Array.isArray(project.technologies)
                        ? project.technologies.join(" • ")
                        : project.technologies}
                    </p>
                  )}

                </article>

              ))}

            </div>

          </MinimalSection>
        )}

      </main>

    </div>
  );
}


/* =========================================================
   SECTION COMPONENT
========================================================= */

function MinimalSection({ title, children }) {

  return (
    <section className="mb-8">

      <div className="mb-4 flex items-center gap-3">

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
