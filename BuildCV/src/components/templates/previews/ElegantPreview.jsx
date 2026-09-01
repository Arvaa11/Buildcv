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

export default function ElegantPreview({ formData }) {
  const resume = getResumeData(formData);

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
          TOP IDENTITY AREA
      ===================================================== */}

      <header className="relative px-10 pb-8 pt-9">
        {/* Decorative corner */}
        <div className="absolute right-0 top-0 h-24 w-24 overflow-hidden">
          <div
            className="
              absolute
              -right-12
              -top-12
              h-24
              w-24
              rounded-full
              border-[10px]
              border-buildcv-violet-100
            "
          />
        </div>

        <div className="flex items-center gap-6">
          {/* Profile Image */}

          {resume.profileImage ? (
            <img
              src={resume.profileImage}
              alt={resume.fullName || "Profile"}
              className="
                h-24
                w-24
                shrink-0
                rounded-full
                object-cover
                ring-4
                ring-buildcv-violet-50
              "
            />
          ) : (
            <div
              className="
                flex
                h-24
                w-24
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-buildcv-violet-50
                ring-4
                ring-buildcv-violet-50
              "
            >
              <span className="text-2xl font-bold text-buildcv-violet">
                {resume.fullName
                  ? resume.fullName.charAt(0).toUpperCase()
                  : "A"}
              </span>
            </div>
          )}

          <div className="min-w-0 flex-1">
            <p
              className="
                mb-2
                text-[9px]
                font-bold
                uppercase
                tracking-[0.25em]
                text-buildcv-violet
              "
            >
              Professional Resume
            </p>

            <h1
              className="
                font-display
                text-3xl
                font-extrabold
                tracking-tight
                text-buildcv-ink-900
              "
            >
              {resume.fullName || "Your Name"}
            </h1>

            {resume.jobTitle && (
              <p
                className="
                  mt-2
                  text-sm
                  font-semibold
                  text-buildcv-text-secondary
                "
              >
                {resume.jobTitle}
              </p>
            )}
          </div>
        </div>

        {/* Contact row */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-2
            border-t
            border-buildcv-border
            pt-4
          "
        >
          {resume.email && (
            <ContactItem
              icon="✉"
              value={resume.email}
            />
          )}

          {resume.phone && (
            <ContactItem
              icon="☎"
              value={resume.phone}
            />
          )}

          {resume.location && (
            <ContactItem
              icon="⌖"
              value={resume.location}
            />
          )}

          {resume.linkedin && (
            <ContactItem
              icon="in"
              value={resume.linkedin}
            />
          )}

          {resume.github && (
            <ContactItem
              icon="⌘"
              value={resume.github}
            />
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="grid grid-cols-[1fr_245px] gap-9 px-10 pb-10">
        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <main className="min-w-0">
          {/* ABOUT */}

          {resume.summary && (
            <ElegantSection title="Profile">
              <p
                className="
                  text-[10px]
                  leading-[1.8]
                  text-buildcv-text-secondary
                "
              >
                {resume.summary}
              </p>
            </ElegantSection>
          )}

          {/* EXPERIENCE */}

          {resume.experience.length > 0 && (
            <ElegantSection title="Experience">
              <div className="space-y-6">
                {resume.experience.map((item, index) => (
                  <ExperienceItem
                    key={item.id || index}
                    item={item}
                  />
                ))}
              </div>
            </ElegantSection>
          )}

          {/* PROJECTS */}

          {resume.projects.length > 0 && (
            <ElegantSection title="Selected Projects">
              <div className="space-y-5">
                {resume.projects.map((project, index) => (
                  <ProjectItem
                    key={project.id || index}
                    project={project}
                  />
                ))}
              </div>
            </ElegantSection>
          )}
        </main>

        {/* ===================================================
            RIGHT SIDEBAR
        =================================================== */}

        <aside className="min-w-0 border-l border-buildcv-border pl-7">
          {/* SKILLS */}

          {resume.skills.length > 0 && (
            <ElegantSidebarSection title="Skills">
              <div className="space-y-2.5">
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
                      "
                    >
                      <span
                        className="
                          text-[9px]
                          font-semibold
                          text-buildcv-text-secondary
                        "
                      >
                        {name}
                      </span>

                      <span
                        className="
                          h-1.5
                          w-1.5
                          rounded-full
                          bg-buildcv-violet
                        "
                      />
                    </div>
                  );
                })}
              </div>
            </ElegantSidebarSection>
          )}

          {/* EDUCATION */}

          {resume.education.length > 0 && (
            <ElegantSidebarSection title="Education">
              <div className="space-y-5">
                {resume.education.map((item, index) => (
                  <div key={item.id || index}>
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
                        leading-4
                        text-buildcv-text-secondary
                      "
                    >
                      {getInstitution(item)}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[8px]
                        font-semibold
                        text-buildcv-violet
                      "
                    >
                      {getDate(item)}
                    </p>
                  </div>
                ))}
              </div>
            </ElegantSidebarSection>
          )}

          {/* EDUCATION FALLBACK */}

          {resume.education.length === 0 && (
            <ElegantSidebarSection title="Education">
              <p className="text-[9px] text-buildcv-text-muted">
                Add your education details.
              </p>
            </ElegantSidebarSection>
          )}

          {/* DESIGN ELEMENT */}

          <div className="mt-10">
            <div className="h-px w-12 bg-buildcv-violet-300" />

            <p
              className="
                mt-3
                text-[7px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-buildcv-text-muted
              "
            >
              BuildCV
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ icon, value }) {
  return (
    <div className="flex items-center gap-1.5">
      <span
        className="
          flex
          h-4
          min-w-4
          items-center
          justify-center
          rounded-full
          bg-buildcv-violet-50
          px-1
          text-[6px]
          font-bold
          text-buildcv-violet
        "
      >
        {icon}
      </span>

      <span
        className="
          max-w-[180px]
          truncate
          text-[7.5px]
          font-medium
          text-buildcv-text-secondary
        "
      >
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   MAIN SECTION
========================================================= */

function ElegantSection({ title, children }) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="
            h-5
            w-1
            rounded-full
            bg-buildcv-violet
          "
        />

        <h2
          className="
            font-display
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>

        <span className="h-px flex-1 bg-buildcv-border" />
      </div>

      {children}
    </section>
  );
}

/* =========================================================
   SIDEBAR SECTION
========================================================= */

function ElegantSidebarSection({ title, children }) {
  return (
    <section className="mb-8">
      <h2
        className="
          mb-4
          text-[9px]
          font-extrabold
          uppercase
          tracking-[0.18em]
          text-buildcv-violet
        "
      >
        {title}
      </h2>

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
          left-0
          top-1
          w-px
          bg-buildcv-violet-100
        "
      />

      <div
        className="
          absolute
          left-[-3px]
          top-1
          h-1.5
          w-1.5
          rounded-full
          bg-buildcv-violet
        "
      />

      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className="
              text-[11px]
              font-bold
              text-buildcv-ink-900
            "
          >
            {title}
          </h3>

          {company && (
            <p
              className="
                mt-1
                text-[8.5px]
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
              bg-buildcv-violet-50
              px-2
              py-1
              text-[7px]
              font-semibold
              text-buildcv-violet
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
            text-[9px]
            leading-[1.7]
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
   PROJECT ITEM
========================================================= */

function ProjectItem({ project }) {
  const name = getProjectName(project);
  const description = getDescription(project);

  return (
    <article
      className="
        rounded-xl
        border
        border-buildcv-border
        bg-buildcv-surface-soft
        p-3.5
      "
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className="
            text-[10px]
            font-bold
            text-buildcv-ink-900
          "
        >
          {name}
        </h3>

        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-buildcv-violet
          "
        />
      </div>

      {description && (
        <p
          className="
            mt-2
            text-[8.5px]
            leading-[1.7]
            text-buildcv-text-secondary
          "
        >
          {description}
        </p>
      )}

      {project.technologies && (
        <div className="mt-2.5 flex flex-wrap gap-1">
          {String(project.technologies)
            .split(",")
            .map((technology, index) => {
              const value = technology.trim();

              if (!value) return null;

              return (
                <span
                  key={index}
                  className="
                    rounded-full
                    bg-white
                    px-2
                    py-0.5
                    text-[6.5px]
                    font-semibold
                    text-buildcv-violet
                  "
                >
                  {value}
                </span>
              );
            })}
        </div>
      )}
    </article>
  );
}