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
BUILDCV — ATS FOCUS PREMIUM PREVIEW
=========================================================

Layout:
• One Column
• No Photo
• ATS-first structure
• Strong typography hierarchy
• Clean section dividers
• Excellent scanability
• Minimal decoration
• A4 resume optimized
=========================================================
*/

export default function ATSFocusPreview({ formData }) {
  const resume = getResumeData(formData);

  const hasContact =
    resume.email ||
    resume.phone ||
    resume.location ||
    resume.linkedin ||
    resume.github;

  return (
    <div
      className="
        min-h-[1123px]
        w-full
        bg-white
        px-[54px]
        py-[48px]
        text-buildcv-ink-900
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="border-b-2 border-buildcv-ink-900 pb-6">
        <div className="flex items-start justify-between gap-8">
          <div className="min-w-0">
            <h1
              className="
                text-[30px]
                font-extrabold
                leading-none
                tracking-[-0.035em]
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
                tracking-[0.12em]
                text-buildcv-violet
              "
            >
              {resume.jobTitle || "Professional"}
            </p>
          </div>

          {/* ATS-friendly contact block */}

          {hasContact && (
            <div
              className="
                max-w-[255px]
                text-right
                text-[7.5px]
                leading-[1.8]
                text-buildcv-text-secondary
              "
            >
              {resume.email && <div>{resume.email}</div>}
              {resume.phone && <div>{resume.phone}</div>}
              {resume.location && <div>{resume.location}</div>}
              {resume.linkedin && <div>{resume.linkedin}</div>}
              {resume.github && <div>{resume.github}</div>}
            </div>
          )}
        </div>
      </header>

      {/* =================================================
          PROFESSIONAL SUMMARY
      ================================================= */}

      {resume.summary && (
        <ATSSection title="Professional Summary">
          <p
            className="
              max-w-[680px]
              text-[9px]
              leading-[1.75]
              text-buildcv-text-secondary
            "
          >
            {resume.summary}
          </p>
        </ATSSection>
      )}

      {/* =================================================
          EXPERIENCE
      ================================================= */}

      {resume.experience.length > 0 && (
        <ATSSection title="Professional Experience">
          <div className="space-y-6">
            {resume.experience.map((item, index) => (
              <article key={item.id || index}>
                <div className="flex items-start justify-between gap-6">
                  <div className="min-w-0">
                    <h3
                      className="
                        text-[11px]
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
                        text-[8px]
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
                      whitespace-nowrap
                      text-[7.5px]
                      font-medium
                      text-buildcv-text-muted
                    "
                  >
                    {getDate(item)}
                  </span>
                </div>

                {getDescription(item) && (
                  <p
                    className="
                      mt-2
                      text-[8.5px]
                      leading-[1.7]
                      text-buildcv-text-secondary
                    "
                  >
                    {getDescription(item)}
                  </p>
                )}
              </article>
            ))}
          </div>
        </ATSSection>
      )}

      {/* =================================================
          EDUCATION
      ================================================= */}

      {resume.education.length > 0 && (
        <ATSSection title="Education">
          <div className="space-y-5">
            {resume.education.map((item, index) => (
              <article
                key={item.id || index}
                className="flex items-start justify-between gap-6"
              >
                <div>
                  <h3
                    className="
                      text-[10px]
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
                      text-buildcv-text-secondary
                    "
                  >
                    {getInstitution(item)}
                  </p>
                </div>

                <span
                  className="
                    shrink-0
                    whitespace-nowrap
                    text-[7.5px]
                    text-buildcv-text-muted
                  "
                >
                  {getDate(item)}
                </span>
              </article>
            ))}
          </div>
        </ATSSection>
      )}

      {/* =================================================
          SKILLS
      ================================================= */}

      {resume.skills.length > 0 && (
        <ATSSection title="Skills">
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {resume.skills.map((skill, index) => {
              const name = getSkillName(skill);

              if (!name) return null;

              return (
                <span
                  key={index}
                  className="
                    rounded
                    border
                    border-buildcv-border
                    bg-buildcv-surface-soft
                    px-2.5
                    py-1.5
                    text-[7.5px]
                    font-semibold
                    text-buildcv-text-secondary
                  "
                >
                  {name}
                </span>
              );
            })}
          </div>
        </ATSSection>
      )}

      {/* =================================================
          PROJECTS
      ================================================= */}

      {resume.projects.length > 0 && (
        <ATSSection title="Projects">
          <div className="space-y-5">
            {resume.projects.map((project, index) => (
              <article key={project.id || index}>
                <div className="flex items-start justify-between gap-5">
                  <h3
                    className="
                      text-[10px]
                      font-bold
                      text-buildcv-ink-900
                    "
                  >
                    {getProjectName(project)}
                  </h3>

                  <span
                    className="
                      text-[6.5px]
                      font-semibold
                      text-buildcv-violet
                    "
                  >
                    PROJECT {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

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
                      text-buildcv-violet
                    "
                  >
                    Technologies: {project.technologies}
                  </p>
                )}
              </article>
            ))}
          </div>
        </ATSSection>
      )}

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer
        className="
          mt-8
          border-t
          border-buildcv-border
          pt-3
          text-center
          text-[6.5px]
          text-buildcv-text-muted
        "
      >
        {resume.fullName || "Your Name"} • Professional Resume
      </footer>
    </div>
  );
}

/* =========================================================
   ATS SECTION
========================================================= */

function ATSSection({ title, children }) {
  return (
    <section className="mb-7">
      <div
        className="
          mb-3
          flex
          items-center
          gap-3
          border-b
          border-buildcv-border
          pb-2
        "
      >
        <h2
          className="
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.14em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>

        <div className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />
      </div>

      {children}
    </section>
  );
}