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

export default function ModernPreview({ formData, data }) {
  const resume = getResumeData(formData || data);

  return (
    <div
      className="
        mx-auto
        min-h-[1123px]
        w-full
        max-w-[794px]
        overflow-hidden
        bg-white
        text-buildcv-ink-900
      "
    >
      {/* =====================================================
          TOP IDENTITY BAR
      ===================================================== */}

      <header className="relative overflow-hidden border-b border-buildcv-border bg-white px-9 py-8">
        {/* Decorative background shape */}
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-20
            h-48
            w-48
            rounded-full
            bg-buildcv-violet-50
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-10
            top-10
            h-20
            w-20
            rounded-full
            border-[10px]
            border-buildcv-violet-100
          "
        />

        <div className="relative flex items-center gap-6">
          {/* Profile photo */}
          {resume.profileImage ? (
            <img
              src={resume.profileImage}
              alt={resume.fullName || "Profile"}
              className="
                h-[78px]
                w-[78px]
                shrink-0
                rounded-2xl
                object-cover
                ring-4
                ring-buildcv-violet-50
              "
            />
          ) : (
            <div
              className="
                flex
                h-[78px]
                w-[78px]
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-buildcv-violet-50
                text-2xl
                font-extrabold
                text-buildcv-violet
              "
            >
              {getInitials(resume.fullName)}
            </div>
          )}

          {/* Identity */}
          <div className="min-w-0 flex-1">
            <p
              className="
                mb-1
                text-[8px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-buildcv-violet
              "
            >
              {resume.jobTitle || "Professional"}
            </p>

            <h1
              className="
                text-[27px]
                font-extrabold
                leading-none
                tracking-[-0.03em]
                text-buildcv-ink-900
              "
            >
              {resume.fullName || "Your Name"}
            </h1>

            {/* Contact row */}
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
              {resume.email && (
                <ContactItem value={resume.email} />
              )}

              {resume.phone && (
                <ContactItem value={resume.phone} />
              )}

              {resume.location && (
                <ContactItem value={resume.location} />
              )}

              {resume.linkedin && (
                <ContactItem value={resume.linkedin} />
              )}

              {resume.github && (
                <ContactItem value={resume.github} />
              )}
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="grid grid-cols-[225px_minmax(0,1fr)]">
        {/* =================================================
            LEFT SIDEBAR
        ================================================= */}

        <aside className="border-r border-buildcv-border bg-buildcv-surface-soft px-6 py-7">
          {/* ABOUT LABEL */}
          <SidebarLabel>PROFILE</SidebarLabel>

          {resume.summary ? (
            <p
              className="
                text-[9px]
                leading-[1.65]
                text-buildcv-text-secondary
              "
            >
              {resume.summary}
            </p>
          ) : (
            <p className="text-[9px] leading-[1.65] text-buildcv-text-muted">
              Add a professional summary to introduce yourself.
            </p>
          )}

          {/* =================================================
              SKILLS
          ================================================= */}

          <div className="mt-7">
            <SidebarLabel>CORE SKILLS</SidebarLabel>

            {resume.skills.length > 0 ? (
              <div className="flex flex-wrap gap-1.5">
                {resume.skills.map((skill, index) => {
                  const name = getSkillName(skill);

                  if (!name) return null;

                  return (
                    <span
                      key={`${name}-${index}`}
                      className="
                        rounded-md
                        bg-white
                        px-2
                        py-1.5
                        text-[8px]
                        font-semibold
                        text-buildcv-violet
                        shadow-buildcv-xs
                        ring-1
                        ring-buildcv-border
                      "
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="text-[9px] text-buildcv-text-muted">
                Add your skills.
              </p>
            )}
          </div>

          {/* =================================================
              EDUCATION
          ================================================= */}

          <div className="mt-7">
            <SidebarLabel>EDUCATION</SidebarLabel>

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
          </div>

          {/* =================================================
              QUICK INFO
          ================================================= */}

          <div className="mt-7">
            <SidebarLabel>DETAILS</SidebarLabel>

            <div className="space-y-2">
              {resume.location && (
                <DetailRow
                  label="Location"
                  value={resume.location}
                />
              )}

              {resume.email && (
                <DetailRow
                  label="Email"
                  value={resume.email}
                />
              )}

              {resume.phone && (
                <DetailRow
                  label="Phone"
                  value={resume.phone}
                />
              )}
            </div>
          </div>
        </aside>

        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <main className="min-w-0 px-8 py-7">
          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {resume.experience.length > 0 && (
            <ModernSection
              number="01"
              title="Experience"
            >
              <div className="space-y-6">
                {resume.experience.map((item, index) => (
                  <ExperienceItem
                    key={item.id || index}
                    item={item}
                  />
                ))}
              </div>
            </ModernSection>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {resume.projects.length > 0 && (
            <ModernSection
              number="02"
              title="Selected Projects"
            >
              <div className="grid grid-cols-2 gap-3">
                {resume.projects.map((project, index) => (
                  <ProjectCard
                    key={project.id || index}
                    project={project}
                  />
                ))}
              </div>
            </ModernSection>
          )}

          {/* =================================================
              ADDITIONAL SKILLS
          ================================================= */}

          {resume.skills.length > 0 && (
            <ModernSection
              number="03"
              title="Expertise"
            >
              <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                {resume.skills.slice(0, 8).map((skill, index) => {
                  const name = getSkillName(skill);

                  if (!name) return null;

                  return (
                    <div key={`${name}-${index}`}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="text-[8px] font-semibold text-buildcv-text-secondary">
                          {name}
                        </span>

                        <span className="text-[7px] text-buildcv-text-muted">
                          {index % 3 === 0
                            ? "Expert"
                            : index % 3 === 1
                              ? "Advanced"
                              : "Strong"}
                        </span>
                      </div>

                      <div className="h-1 overflow-hidden rounded-full bg-buildcv-border">
                        <div
                          className="
                            h-full
                            rounded-full
                            bg-buildcv-violet
                          "
                          style={{
                            width:
                              index % 3 === 0
                                ? "92%"
                                : index % 3 === 1
                                  ? "82%"
                                  : "72%",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </ModernSection>
          )}
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ value }) {
  return (
    <span
      className="
        max-w-[180px]
        truncate
        text-[7px]
        font-medium
        text-buildcv-text-secondary
      "
    >
      {value}
    </span>
  );
}

/* =========================================================
   SIDEBAR LABEL
========================================================= */

function SidebarLabel({ children }) {
  return (
    <div className="mb-3">
      <div
        className="
          flex
          items-center
          gap-2
          text-[8px]
          font-extrabold
          uppercase
          tracking-[0.18em]
          text-buildcv-ink-900
        "
      >
        <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

        {children}
      </div>

      <div className="mt-2 h-px w-full bg-buildcv-border" />
    </div>
  );
}

/* =========================================================
   DETAIL ROW
========================================================= */

function DetailRow({ label, value }) {
  return (
    <div>
      <p className="text-[6px] font-bold uppercase tracking-[0.12em] text-buildcv-text-muted">
        {label}
      </p>

      <p className="mt-0.5 break-words text-[8px] leading-4 text-buildcv-text-secondary">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

function ModernSection({ number, title, children }) {
  return (
    <section className="mb-8">
      <div className="mb-5 flex items-center gap-3">
        <span
          className="
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-md
            bg-buildcv-violet-50
            text-[7px]
            font-extrabold
            text-buildcv-violet
          "
        >
          {number}
        </span>

        <h2
          className="
            text-[12px]
            font-extrabold
            tracking-[-0.01em]
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

/* =========================================================
   EXPERIENCE ITEM
========================================================= */

function ExperienceItem({ item }) {
  const title = getExperienceTitle(item);
  const company = getCompany(item);
  const date = getDate(item);
  const description = getDescription(item);

  return (
    <article className="relative pl-5">
      {/* Timeline */}
      <div
        className="
          absolute
          bottom-0
          left-[2px]
          top-1
          w-px
          bg-buildcv-violet-200
        "
      />

      <div
        className="
          absolute
          left-[-1px]
          top-1
          h-1.5
          w-1.5
          rounded-full
          bg-buildcv-violet
          ring-2
          ring-buildcv-violet-50
        "
      />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className="
              text-[10px]
              font-bold
              leading-4
              text-buildcv-ink-900
            "
          >
            {title}
          </h3>

          {company && (
            <p
              className="
                mt-0.5
                text-[8px]
                font-semibold
                text-buildcv-violet
              "
            >
              {company}
            </p>
          )}
        </div>

        {date && (
          <span
            className="
              shrink-0
              rounded-full
              bg-buildcv-surface-soft
              px-2
              py-1
              text-[7px]
              font-semibold
              text-buildcv-text-muted
            "
          >
            {date}
          </span>
        )}
      </div>

      {description && (
        <p
          className="
            mt-2
            text-[8.5px]
            leading-[1.65]
            text-buildcv-text-secondary
          "
        >
          {description}
        </p>
      )}
    </article>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  const name = getProjectName(project);
  const description = getDescription(project);

  return (
    <article
      className="
        rounded-xl
        border
        border-buildcv-border
        bg-buildcv-surface-soft
        p-3
        transition
      "
    >
      <div className="mb-2 flex items-center gap-2">
        <span
          className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-md
            bg-buildcv-violet
            text-[7px]
            font-bold
            text-white
          "
        >
          ↗
        </span>

        <h3
          className="
            min-w-0
            truncate
            text-[9px]
            font-bold
            text-buildcv-ink-900
          "
        >
          {name}
        </h3>
      </div>

      {description && (
        <p
          className="
            text-[7.5px]
            leading-[1.6]
            text-buildcv-text-secondary
          "
        >
          {description}
        </p>
      )}

      {project.technologies && (
        <div className="mt-2 flex flex-wrap gap-1">
          {String(project.technologies)
            .split(",")
            .slice(0, 4)
            .map((technology, index) => (
              <span
                key={index}
                className="
                  rounded
                  bg-white
                  px-1.5
                  py-0.5
                  text-[6px]
                  font-semibold
                  text-buildcv-violet
                "
              >
                {technology.trim()}
              </span>
            ))}
        </div>
      )}
    </article>
  );
}

/* =========================================================
   INITIALS
========================================================= */

function getInitials(name = "") {
  const words = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  if (words.length === 0) return "CV";

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase();
  }

  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}
