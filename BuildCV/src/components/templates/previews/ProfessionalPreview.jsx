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
  getTechnologies,
} from "../templateUtils";

/*
=========================================================
BUILDCV — PROFESSIONAL PREVIEW
=========================================================

Design:
• Single-column corporate layout
• Strong editorial header
• Horizontal contact strip
• No sidebar
• No timeline
• No numbered sections
• No skill percentage bars
• No decorative circles
• Clean ATS-conscious structure
• Premium corporate appearance
=========================================================
*/

export default function ProfessionalPreview({ formData, data }) {
  const resume = getResumeData(formData || data || {});

  return (
    <div
      className="
        mx-auto
        min-h-[1123px]
        w-full
        max-w-[794px]
        bg-white
        px-[52px]
        py-[46px]
        text-buildcv-ink-900
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b-2 border-buildcv-ink-900 pb-6">

        <div className="flex items-end justify-between gap-8">

          {/* NAME + TITLE */}

          <div className="min-w-0 flex-1">

            <p
              className="
                mb-2
                text-[7px]
                font-extrabold
                uppercase
                tracking-[0.24em]
                text-buildcv-violet
              "
            >
              Curriculum Vitae
            </p>

            <h1
              className="
                text-[31px]
                font-extrabold
                leading-[0.95]
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

          {/* PROFILE IMAGE */}

          {resume.profileImage && (
            <img
              src={resume.profileImage}
              alt={resume.fullName || "Profile"}
              className="
                h-[82px]
                w-[82px]
                shrink-0
                rounded-lg
                object-cover
              "
            />
          )}

        </div>

        {/* =================================================
            CONTACT STRIP
        ================================================= */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            items-center
            gap-x-5
            gap-y-2
            border-t
            border-buildcv-border
            pt-3
          "
        >

          {resume.email && (
            <ContactItem
              label="EMAIL"
              value={resume.email}
            />
          )}

          {resume.phone && (
            <ContactItem
              label="PHONE"
              value={resume.phone}
            />
          )}

          {resume.location && (
            <ContactItem
              label="LOCATION"
              value={resume.location}
            />
          )}

          {resume.linkedin && (
            <ContactItem
              label="LINKEDIN"
              value={resume.linkedin}
            />
          )}

          {resume.github && (
            <ContactItem
              label="GITHUB"
              value={resume.github}
            />
          )}

        </div>

      </header>

      {/* =====================================================
          PROFESSIONAL SUMMARY
      ===================================================== */}

      {resume.summary && (
        <ProfessionalSection title="Professional Summary">

          <p
            className="
              max-w-[675px]
              text-[9.5px]
              leading-[1.8]
              text-buildcv-text-secondary
            "
          >
            {resume.summary}
          </p>

        </ProfessionalSection>
      )}

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      {resume.experience.length > 0 && (
        <ProfessionalSection title="Professional Experience">

          <div className="space-y-6">

            {resume.experience.map((item, index) => (
              <ExperienceEntry
                key={item.id || index}
                item={item}
              />
            ))}

          </div>

        </ProfessionalSection>
      )}

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      {resume.education.length > 0 && (
        <ProfessionalSection title="Education">

          <div
            className="
              grid
              grid-cols-2
              gap-x-10
              gap-y-6
            "
          >

            {resume.education.map((item, index) => (
              <EducationEntry
                key={item.id || index}
                item={item}
              />
            ))}

          </div>

        </ProfessionalSection>
      )}

      {/* =====================================================
          SKILLS
      ===================================================== */}

      {resume.skills.length > 0 && (
        <ProfessionalSection title="Core Competencies">

          <div className="grid grid-cols-3 gap-x-8 gap-y-2.5">

            {resume.skills.map((skill, index) => {

              const name = getSkillName(skill);

              if (!name) return null;

              return (
                <div
                  key={`${name}-${index}`}
                  className="
                    flex
                    items-center
                    gap-2
                    border-b
                    border-buildcv-border
                    pb-2
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
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

        </ProfessionalSection>
      )}

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      {resume.projects.length > 0 && (
        <ProfessionalSection title="Selected Projects">

          <div className="space-y-5">

            {resume.projects.map((project, index) => (
              <ProjectEntry
                key={project.id || index}
                project={project}
              />
            ))}

          </div>

        </ProfessionalSection>
      )}

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer
        className="
          mt-8
          flex
          items-center
          justify-between
          border-t
          border-buildcv-border
          pt-3
        "
      >

        <span
          className="
            text-[6.5px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-buildcv-text-muted
          "
        >
          Professional Resume
        </span>

        <span
          className="
            text-[6.5px]
            text-buildcv-text-muted
          "
        >
          {resume.fullName || "Your Name"}
        </span>

      </footer>

    </div>
  );
}

/* =========================================================
   CONTACT ITEM
========================================================= */

function ContactItem({ label, value }) {
  return (
    <div className="flex min-w-0 items-center gap-1.5">

      <span
        className="
          text-[6px]
          font-extrabold
          tracking-[0.12em]
          text-buildcv-violet
        "
      >
        {label}
      </span>

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

    </div>
  );
}

/* =========================================================
   SECTION
========================================================= */

function ProfessionalSection({ title, children }) {
  return (
    <section className="mt-8">

      {/* Heading */}

      <div className="mb-4 flex items-center gap-4">

        <h2
          className="
            whitespace-nowrap
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.15em]
            text-buildcv-ink-900
          "
        >
          {title}
        </h2>

        <div className="h-px flex-1 bg-buildcv-border" />

        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            bg-buildcv-violet
          "
        />

      </div>

      {children}

    </section>
  );
}

/* =========================================================
   EXPERIENCE ENTRY
========================================================= */

function ExperienceEntry({ item }) {
  const title = getExperienceTitle(item);
  const company = getCompany(item);
  const description = getDescription(item);
  const date = getDate(item);

  return (
    <article>

      {/* TOP ROW */}

      <div className="grid grid-cols-[1fr_145px] gap-6">

        {/* POSITION */}

        <div>

          <h3
            className="
              text-[11px]
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
                mt-1
                text-[8px]
                font-bold
                text-buildcv-violet
              "
            >
              {company}
            </p>
          )}

        </div>

        {/* DATE */}

        {date && (
          <div className="text-right">

            <span
              className="
                text-[7px]
                font-semibold
                text-buildcv-text-muted
              "
            >
              {date}
            </span>

          </div>
        )}

      </div>

      {/* ACCENT */}

      <div
        className="
          mt-2
          h-[2px]
          w-7
          bg-buildcv-violet
        "
      />

      {/* DESCRIPTION */}

      {description && (
        <p
          className="
            mt-2.5
            max-w-[650px]
            text-[8.5px]
            leading-[1.75]
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
   EDUCATION ENTRY
========================================================= */

function EducationEntry({ item }) {
  const title = getEducationTitle(item);
  const institution = getInstitution(item);
  const description = getDescription(item);
  const date = getDate(item);

  return (
    <article
      className="
        border-l-2
        border-buildcv-violet
        pl-4
      "
    >

      <div className="flex items-start justify-between gap-3">

        <h3
          className="
            text-[9.5px]
            font-bold
            leading-4
            text-buildcv-ink-900
          "
        >
          {title}
        </h3>

        {date && (
          <span
            className="
              shrink-0
              text-[6.5px]
              font-semibold
              text-buildcv-text-muted
            "
          >
            {date}
          </span>
        )}

      </div>

      {institution && (
        <p
          className="
            mt-1
            text-[8px]
            font-semibold
            text-buildcv-violet
          "
        >
          {institution}
        </p>
      )}

      {description && (
        <p
          className="
            mt-1.5
            text-[7.5px]
            leading-[1.6]
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
   PROJECT ENTRY
========================================================= */

function ProjectEntry({ project }) {
  const name = getProjectName(project);
  const description = getDescription(project);
  const technologies = getTechnologies(project);

  return (
    <article
      className="
        border
        border-buildcv-border
        bg-buildcv-surface-soft
        px-4
        py-3.5
      "
    >

      <div className="flex items-start justify-between gap-5">

        <div className="min-w-0">

          <h3
            className="
              text-[9.5px]
              font-bold
              text-buildcv-ink-900
            "
          >
            {name}
          </h3>

          {technologies && (
            <p
              className="
                mt-1
                text-[7px]
                font-semibold
                text-buildcv-violet
              "
            >
              {technologies}
            </p>
          )}

        </div>

        {project.link && (
          <span
            className="
              shrink-0
              text-[6.5px]
              font-bold
              uppercase
              tracking-[0.08em]
              text-buildcv-violet
            "
          >
            Project
          </span>
        )}

      </div>

      {description && (
        <p
          className="
            mt-2
            text-[8px]
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
