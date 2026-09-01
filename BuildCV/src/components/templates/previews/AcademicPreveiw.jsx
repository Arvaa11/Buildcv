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
BUILDCV — ACADEMIC PREMIUM PREVIEW
=========================================================

Design:
• One Column
• No Photo
• Academic / Research focused
• Strong education hierarchy
• Research/project emphasis
• Publication-friendly structure
• Clean scholarly typography
• ATS-friendly
• A4 resume
=========================================================
*/

export default function AcademicPreview({ formData }) {
  const resume = getResumeData(formData);

  return (
    <div
      className="
        min-h-[1123px]
        w-full
        bg-white
        px-[58px]
        py-[48px]
        text-buildcv-ink-900
      "
    >
      {/* =================================================
          ACADEMIC HEADER
      ================================================= */}

      <header className="border-b border-buildcv-ink-900 pb-6">
        <div className="flex items-start justify-between gap-8">
          <div className="min-w-0">
            <h1
              className="
                font-serif
                text-[29px]
                font-bold
                leading-none
                tracking-[-0.025em]
                text-buildcv-ink-900
              "
            >
              {resume.fullName || "Your Name"}
            </h1>

            <p
              className="
                mt-3
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-buildcv-violet
              "
            >
              {resume.jobTitle || "Researcher / Academic Professional"}
            </p>
          </div>

          {/* Contact information */}

          <div
            className="
              max-w-[245px]
              text-right
              text-[7.5px]
              leading-[1.9]
              text-buildcv-text-secondary
            "
          >
            {resume.email && <div>{resume.email}</div>}
            {resume.phone && <div>{resume.phone}</div>}
            {resume.location && <div>{resume.location}</div>}
            {resume.linkedin && <div>{resume.linkedin}</div>}
            {resume.github && <div>{resume.github}</div>}
          </div>
        </div>

        {/* Academic rule */}

        <div className="mt-5 flex items-center gap-2">
          <div className="h-[3px] w-[3px] rounded-full bg-buildcv-violet" />
          <div className="h-px flex-1 bg-buildcv-border" />
        </div>
      </header>

      {/* =================================================
          RESEARCH / PROFESSIONAL PROFILE
      ================================================= */}

      {resume.summary && (
        <AcademicSection title="Research Profile">
          <p
            className="
              max-w-[690px]
              text-[8.5px]
              leading-[1.8]
              text-buildcv-text-secondary
            "
          >
            {resume.summary}
          </p>
        </AcademicSection>
      )}

      {/* =================================================
          EDUCATION
      ================================================= */}

      {resume.education.length > 0 && (
        <AcademicSection title="Education">
          <div className="space-y-5">
            {resume.education.map((item, index) => (
              <article
                key={item.id || index}
                className="grid grid-cols-[1fr_auto] gap-6"
              >
                <div>
                  <h3
                    className="
                      font-serif
                      text-[11px]
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
                      font-medium
                      text-buildcv-text-secondary
                    "
                  >
                    {getInstitution(item)}
                  </p>
                </div>

                <span
                  className="
                    whitespace-nowrap
                    pt-0.5
                    text-[7.5px]
                    font-semibold
                    text-buildcv-violet
                  "
                >
                  {getDate(item)}
                </span>
              </article>
            ))}
          </div>
        </AcademicSection>
      )}

      {/* =================================================
          EXPERIENCE / RESEARCH EXPERIENCE
      ================================================= */}

      {resume.experience.length > 0 && (
        <AcademicSection title="Academic & Professional Experience">
          <div className="space-y-6">
            {resume.experience.map((item, index) => (
              <article
                key={item.id || index}
                className="grid grid-cols-[1fr_auto] gap-6"
              >
                <div>
                  <h3
                    className="
                      font-serif
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

                  {getDescription(item) && (
                    <p
                      className="
                        mt-2
                        max-w-[650px]
                        text-[8px]
                        leading-[1.75]
                        text-buildcv-text-secondary
                      "
                    >
                      {getDescription(item)}
                    </p>
                  )}
                </div>

                <span
                  className="
                    whitespace-nowrap
                    pt-0.5
                    text-[7px]
                    text-buildcv-text-muted
                  "
                >
                  {getDate(item)}
                </span>
              </article>
            ))}
          </div>
        </AcademicSection>
      )}

      {/* =================================================
          RESEARCH / PROJECTS
      ================================================= */}

      {resume.projects.length > 0 && (
        <AcademicSection title="Research & Selected Projects">
          <div className="space-y-5">
            {resume.projects.map((project, index) => (
              <article
                key={project.id || index}
                className="
                  border-l-2
                  border-buildcv-violet-200
                  pl-4
                "
              >
                <div className="flex items-start justify-between gap-5">
                  <h3
                    className="
                      font-serif
                      text-[10px]
                      font-bold
                      leading-4
                      text-buildcv-ink-900
                    "
                  >
                    {getProjectName(project)}
                  </h3>

                  <span
                    className="
                      shrink-0
                      text-[6px]
                      font-bold
                      uppercase
                      tracking-[0.12em]
                      text-buildcv-violet
                    "
                  >
                    Research {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {getDescription(project) && (
                  <p
                    className="
                      mt-1.5
                      text-[8px]
                      leading-[1.75]
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
                      font-medium
                      text-buildcv-text-muted
                    "
                  >
                    <span className="font-semibold text-buildcv-violet">
                      Methods / Tools:
                    </span>{" "}
                    {project.technologies}
                  </p>
                )}
              </article>
            ))}
          </div>
        </AcademicSection>
      )}

      {/* =================================================
          SKILLS / RESEARCH AREAS
      ================================================= */}

      {resume.skills.length > 0 && (
        <AcademicSection title="Research Areas & Skills">
          <div className="grid grid-cols-3 gap-x-6 gap-y-2">
            {resume.skills.map((skill, index) => {
              const name = getSkillName(skill);

              if (!name) return null;

              return (
                <div
                  key={index}
                  className="
                    flex
                    items-center
                    gap-2
                    text-[7.5px]
                    text-buildcv-text-secondary
                  "
                >
                  <span
                    className="
                      h-1
                      w-1
                      shrink-0
                      rounded-full
                      bg-buildcv-violet
                    "
                  />

                  <span>{name}</span>
                </div>
              );
            })}
          </div>
        </AcademicSection>
      )}

      {/* =================================================
          ACADEMIC FOOTER
      ================================================= */}

      <footer
        className="
          mt-8
          border-t
          border-buildcv-border
          pt-3
          text-[6.5px]
          text-buildcv-text-muted
        "
      >
        <div className="flex items-center justify-between gap-4">
          <span>
            {resume.fullName || "Your Name"}
          </span>

          <span>
            Academic Curriculum Vitae
          </span>
        </div>
      </footer>
    </div>
  );
}

/* =========================================================
   ACADEMIC SECTION
========================================================= */

function AcademicSection({ title, children }) {
  return (
    <section className="mb-7">
      <div className="mb-4 flex items-center gap-3">
        <h2
          className="
            font-serif
            text-[11px]
            font-bold
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