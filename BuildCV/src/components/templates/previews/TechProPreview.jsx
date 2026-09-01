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
BUILDCV — TECH PRO
=========================================================

Concept:
• Premium technology resume
• Two-column layout
• No photo
• Strong technical identity
• Skills-first sidebar
• Projects + experience emphasized
• Clean ATS-friendly structure
• A4 optimized

Visual identity:
• Indigo accent
• Technical dashboard-inspired header
• Compact information architecture
• Premium SaaS / engineering feel
=========================================================
*/

export default function TechProPreview({ formData }) {
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
          TOP HEADER
      ================================================= */}

      <header className="border-b border-buildcv-border bg-white">
        <div className="flex items-stretch">
          {/* Accent block */}

          <div className="w-2 shrink-0 bg-buildcv-violet" />

          <div className="flex-1 px-8 py-7">
            <div className="flex items-start justify-between gap-8">
              {/* Identity */}

              <div className="min-w-0">
                <div
                  className="
                    mb-2
                    font-mono
                    text-[7px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-buildcv-violet
                  "
                >
                  TECH PROFESSIONAL
                </div>

                <h1
                  className="
                    text-[28px]
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
                    mt-2
                    text-[10px]
                    font-semibold
                    text-buildcv-text-secondary
                  "
                >
                  {resume.jobTitle || "Technology Professional"}
                </p>
              </div>

              {/* Contact */}

              <div
                className="
                  max-w-[230px]
                  text-right
                  text-[7.5px]
                  leading-5
                  text-buildcv-text-muted
                "
              >
                {resume.email && <div>{resume.email}</div>}

                {resume.phone && <div>{resume.phone}</div>}

                {resume.location && <div>{resume.location}</div>}

                {resume.github && (
                  <div className="font-medium text-buildcv-violet">
                    {resume.github}
                  </div>
                )}

                {resume.linkedin && (
                  <div className="font-medium text-buildcv-violet">
                    {resume.linkedin}
                  </div>
                )}
              </div>
            </div>

            {/* Tech status bar */}

            <div
              className="
                mt-6
                flex
                items-center
                justify-between
                rounded-lg
                border
                border-buildcv-border
                bg-buildcv-surface-soft
                px-3
                py-2
              "
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

                <span
                  className="
                    font-mono
                    text-[6.5px]
                    font-semibold
                    uppercase
                    tracking-wider
                    text-buildcv-text-secondary
                  "
                >
                  Technology • Product • Engineering
                </span>
              </div>

              <span
                className="
                  font-mono
                  text-[6px]
                  text-buildcv-text-muted
                "
              >
                BuildCV / TECH
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* =================================================
          MAIN LAYOUT
      ================================================= */}

      <div className="grid grid-cols-[235px_1fr]">
        {/* =================================================
            LEFT SIDEBAR
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
              CORE SKILLS
          ================================================= */}

          {resume.skills.length > 0 && (
            <TechSideSection title="CORE SKILLS">
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
                        pb-2
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

                      <span
                        className="
                          h-1
                          w-10
                          overflow-hidden
                          rounded-full
                          bg-buildcv-border
                        "
                      >
                        <span
                          className="
                            block
                            h-full
                            w-4/5
                            rounded-full
                            bg-buildcv-violet
                          "
                        />
                      </span>
                    </div>
                  );
                })}
              </div>
            </TechSideSection>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {resume.education.length > 0 && (
            <TechSideSection title="EDUCATION">
              <div className="space-y-5">
                {resume.education.map((item, index) => (
                  <div key={item.id || index}>
                    <div
                      className="
                        mb-2
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <span
                        className="
                          flex
                          h-4
                          w-4
                          items-center
                          justify-center
                          rounded
                          bg-buildcv-violet-50
                          font-mono
                          text-[6px]
                          font-bold
                          text-buildcv-violet
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          font-mono
                          text-[6px]
                          text-buildcv-text-muted
                        "
                      >
                        EDUCATION
                      </span>
                    </div>

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
            </TechSideSection>
          )}

          {/* =================================================
              QUICK INFO
          ================================================= */}

          <TechSideSection title="QUICK INFO">
            <div
              className="
                rounded-lg
                border
                border-buildcv-border
                bg-white
                p-3
              "
            >
              <InfoRow
                label="ROLE"
                value={resume.jobTitle || "Technology"}
              />

              <InfoRow
                label="LOCATION"
                value={resume.location || "Open to opportunities"}
              />

              <InfoRow
                label="STATUS"
                value="Available"
              />
            </div>
          </TechSideSection>
        </aside>

        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <main className="px-8 py-7">
          {/* =================================================
              PROFILE
          ================================================= */}

          {resume.summary && (
            <TechSection title="PROFILE">
              <p
                className="
                  max-w-[520px]
                  text-[9px]
                  leading-[1.8]
                  text-buildcv-text-secondary
                "
              >
                {resume.summary}
              </p>
            </TechSection>
          )}

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {resume.experience.length > 0 && (
            <TechSection title="PROFESSIONAL EXPERIENCE">
              <div className="space-y-6">
                {resume.experience.map((item, index) => (
                  <article
                    key={item.id || index}
                    className="
                      relative
                      border-l-2
                      border-buildcv-violet-200
                      pl-5
                    "
                  >
                    {/* Number */}

                    <span
                      className="
                        absolute
                        -left-[11px]
                        top-0
                        flex
                        h-5
                        w-5
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-buildcv-violet-200
                        bg-white
                        font-mono
                        text-[6px]
                        font-bold
                        text-buildcv-violet
                      "
                    >
                      {index + 1}
                    </span>

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
                          rounded-full
                          bg-buildcv-surface-soft
                          px-2
                          py-1
                          font-mono
                          text-[6.5px]
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
            </TechSection>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {resume.projects.length > 0 && (
            <TechSection title="FEATURED PROJECTS">
              <div className="grid grid-cols-2 gap-3">
                {resume.projects.map((project, index) => (
                  <article
                    key={project.id || index}
                    className="
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-buildcv-border
                      bg-white
                      p-3.5
                      shadow-buildcv-xs
                    "
                  >
                    {/* Top accent */}

                    <div className="absolute left-0 right-0 top-0 h-0.5 bg-buildcv-violet" />

                    <div className="flex items-start justify-between gap-2">
                      <div
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-lg
                          bg-buildcv-violet-50
                          font-mono
                          text-[7px]
                          font-bold
                          text-buildcv-violet
                        "
                      >
                        P{String(index + 1).padStart(2, "0")}
                      </div>

                      <span
                        className="
                          font-mono
                          text-[6px]
                          text-buildcv-text-muted
                        "
                      >
                        PROJECT
                      </span>
                    </div>

                    <h3
                      className="
                        mt-3
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
                          mt-3
                          border-t
                          border-buildcv-border
                          pt-2
                        "
                      >
                        <div
                          className="
                            font-mono
                            text-[6.5px]
                            leading-4
                            text-buildcv-violet
                          "
                        >
                          {project.technologies}
                        </div>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </TechSection>
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
          bg-white
          px-9
          py-3
          font-mono
          text-[6.5px]
          text-buildcv-text-muted
        "
      >
        <span>
          <span className="text-buildcv-violet">BUILD.CV</span>
          {" / "}
          TECH PRO
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

function TechSideSection({ title, children }) {
  return (
    <section className="mb-7">
      <div className="mb-3 flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-buildcv-violet" />

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

function TechSection({ title, children }) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <h2
          className="
            text-[8px]
            font-extrabold
            uppercase
            tracking-[0.16em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>

        <div className="h-px flex-1 bg-buildcv-border" />

        <span
          className="
            font-mono
            text-[6px]
            font-semibold
            text-buildcv-violet
          "
        >
          01
        </span>
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   INFO ROW
========================================================= */

function InfoRow({ label, value }) {
  return (
    <div className="border-b border-buildcv-border py-2 last:border-b-0">
      <div
        className="
          font-mono
          text-[5.5px]
          font-bold
          tracking-wider
          text-buildcv-violet
        "
      >
        {label}
      </div>

      <div
        className="
          mt-0.5
          text-[7px]
          font-medium
          leading-4
          text-buildcv-text-secondary
        "
      >
        {value}
      </div>
    </div>
  );
}
