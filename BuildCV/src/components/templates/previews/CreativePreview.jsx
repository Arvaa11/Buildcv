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

export default function CreativePreview({ formData }) {
  const resume = getResumeData(formData);

  return (
    <div
      className="
        relative
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
          CREATIVE DECORATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-24
          h-64
          w-64
          rounded-full
          bg-buildcv-violet-50
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-8
          top-8
          h-20
          w-20
          rounded-full
          border-[12px]
          border-buildcv-violet-100
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-32
          w-32
          -translate-x-1/2
          translate-y-1/2
          rounded-full
          bg-buildcv-violet-50
        "
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative px-10 pb-7 pt-9">
        <div className="flex items-start justify-between gap-8">
          {/* Identity */}

          <div className="flex min-w-0 items-center gap-5">
            {/* Profile */}

            {resume.profileImage ? (
              <img
                src={resume.profileImage}
                alt={resume.fullName || "Profile"}
                className="
                  h-24
                  w-24
                  shrink-0
                  rounded-[28px]
                  object-cover
                  shadow-buildcv-md
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
                  rounded-[28px]
                  bg-buildcv-violet
                  shadow-buildcv-md
                  ring-4
                  ring-buildcv-violet-50
                "
              >
                <span
                  className="
                    font-display
                    text-3xl
                    font-extrabold
                    text-white
                  "
                >
                  {resume.fullName
                    ? resume.fullName
                        .charAt(0)
                        .toUpperCase()
                    : "A"}
                </span>
              </div>
            )}

            <div className="min-w-0">
              <div
                className="
                  mb-2
                  inline-flex
                  rounded-full
                  bg-buildcv-violet-50
                  px-2.5
                  py-1
                  text-[7px]
                  font-extrabold
                  uppercase
                  tracking-[0.16em]
                  text-buildcv-violet
                "
              >
                Creative Profile
              </div>

              <h1
                className="
                  font-display
                  text-3xl
                  font-extrabold
                  leading-none
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
                    text-[11px]
                    font-bold
                    text-buildcv-text-secondary
                  "
                >
                  {resume.jobTitle}
                </p>
              )}
            </div>
          </div>

          {/* Decorative mark */}

          <div className="hidden shrink-0 sm:block">
            <div
              className="
                flex
                h-11
                w-11
                rotate-12
                items-center
                justify-center
                rounded-xl
                bg-buildcv-violet
              "
            >
              <span
                className="
                  -rotate-12
                  text-lg
                  font-black
                  text-white
                "
              >
                +
              </span>
            </div>
          </div>
        </div>

        {/* Contact */}

        <div
          className="
            mt-7
            grid
            grid-cols-2
            gap-x-6
            gap-y-2
            border-t
            border-buildcv-border
            pt-4
            sm:grid-cols-4
          "
        >
          {resume.email && (
            <CreativeContact
              label="EMAIL"
              value={resume.email}
            />
          )}

          {resume.phone && (
            <CreativeContact
              label="PHONE"
              value={resume.phone}
            />
          )}

          {resume.location && (
            <CreativeContact
              label="LOCATION"
              value={resume.location}
            />
          )}

          {resume.linkedin && (
            <CreativeContact
              label="LINKEDIN"
              value={resume.linkedin}
            />
          )}

          {resume.github && (
            <CreativeContact
              label="GITHUB"
              value={resume.github}
            />
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <div className="relative grid grid-cols-[1fr_235px] gap-8 px-10 pb-10">
        {/* ===================================================
            LEFT
        =================================================== */}

        <main className="min-w-0">
          {/* PROFILE */}

          {resume.summary && (
            <CreativeSection
              number="01"
              title="About Me"
            >
              <div
                className="
                  rounded-2xl
                  bg-buildcv-violet-50
                  p-4
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
            </CreativeSection>
          )}

          {/* EXPERIENCE */}

          {resume.experience.length > 0 && (
            <CreativeSection
              number="02"
              title="Experience"
            >
              <div className="space-y-5">
                {resume.experience.map(
                  (item, index) => (
                    <CreativeExperience
                      key={
                        item.id || index
                      }
                      item={item}
                    />
                  )
                )}
              </div>
            </CreativeSection>
          )}

          {/* PROJECTS */}

          {resume.projects.length > 0 && (
            <CreativeSection
              number="03"
              title="Selected Work"
            >
              <div className="grid grid-cols-2 gap-3">
                {resume.projects.map(
                  (project, index) => (
                    <CreativeProject
                      key={
                        project.id || index
                      }
                      project={project}
                      index={index}
                    />
                  )
                )}
              </div>
            </CreativeSection>
          )}
        </main>

        {/* ===================================================
            RIGHT SIDEBAR
        =================================================== */}

        <aside className="min-w-0">
          {/* SKILLS */}

          {resume.skills.length > 0 && (
            <CreativeSidebar title="Skills">
              <div className="flex flex-wrap gap-1.5">
                {resume.skills.map(
                  (skill, index) => {
                    const name =
                      getSkillName(
                        skill
                      );

                    if (!name)
                      return null;

                    return (
                      <span
                        key={index}
                        className="
                          rounded-lg
                          border
                          border-buildcv-violet-100
                          bg-buildcv-violet-50
                          px-2.5
                          py-1.5
                          text-[7.5px]
                          font-bold
                          text-buildcv-violet
                        "
                      >
                        {name}
                      </span>
                    );
                  }
                )}
              </div>
            </CreativeSidebar>
          )}

          {/* EDUCATION */}

          {resume.education.length > 0 && (
            <CreativeSidebar title="Education">
              <div className="space-y-5">
                {resume.education.map(
                  (item, index) => (
                    <div
                      key={
                        item.id || index
                      }
                      className="
                        relative
                        border-l-2
                        border-buildcv-violet-100
                        pl-4
                      "
                    >
                      <div
                        className="
                          absolute
                          -left-[5px]
                          top-1
                          h-2
                          w-2
                          rounded-full
                          bg-buildcv-violet
                        "
                      />

                      <h3
                        className="
                          text-[9px]
                          font-extrabold
                          leading-4
                          text-buildcv-ink-900
                        "
                      >
                        {getEducationTitle(
                          item
                        )}
                      </h3>

                      <p
                        className="
                          mt-1
                          text-[7.5px]
                          leading-4
                          text-buildcv-text-secondary
                        "
                      >
                        {getInstitution(
                          item
                        )}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[7px]
                          font-bold
                          text-buildcv-violet
                        "
                      >
                        {getDate(item)}
                      </p>
                    </div>
                  )
                )}
              </div>
            </CreativeSidebar>
          )}

          {/* CREATIVE STATEMENT */}

          <div
            className="
              mt-7
              rounded-2xl
              bg-buildcv-ink-900
              p-4
            "
          >
            <div
              className="
                mb-3
                h-1
                w-7
                rounded-full
                bg-buildcv-violet
              "
            />

            <p
              className="
                text-[8px]
                font-bold
                leading-[1.7]
                text-white
              "
            >
              Design with purpose.
              Build with impact.
            </p>

            <p
              className="
                mt-2
                text-[6.5px]
                text-white/60
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
   CONTACT
========================================================= */

function CreativeContact({ label, value }) {
  return (
    <div className="min-w-0">
      <p
        className="
          text-[6px]
          font-extrabold
          tracking-[0.14em]
          text-buildcv-violet
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          truncate
          text-[7.5px]
          font-semibold
          text-buildcv-text-secondary
        "
      >
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   SECTION
========================================================= */

function CreativeSection({
  number,
  title,
  children,
}) {
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center gap-3">
        <span
          className="
            text-[8px]
            font-black
            text-buildcv-violet
          "
        >
          {number}
        </span>

        <h2
          className="
            font-display
            text-[11px]
            font-extrabold
            uppercase
            tracking-[0.14em]
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
   SIDEBAR
========================================================= */

function CreativeSidebar({
  title,
  children,
}) {
  return (
    <section
      className="
        mb-7
        rounded-2xl
        border
        border-buildcv-border
        bg-white
        p-4
      "
    >
      <div className="mb-4 flex items-center gap-2">
        <span
          className="
            h-1.5
            w-1.5
            rounded-full
            bg-buildcv-violet
          "
        />

        <h2
          className="
            text-[9px]
            font-extrabold
            uppercase
            tracking-[0.15em]
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
   EXPERIENCE
========================================================= */

function CreativeExperience({
  item,
}) {
  const title =
    getExperienceTitle(item);

  const company =
    getCompany(item);

  const description =
    getDescription(item);

  const date = getDate(item);

  return (
    <article
      className="
        rounded-2xl
        border
        border-buildcv-border
        bg-white
        p-4
      "
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3
            className="
              text-[10px]
              font-extrabold
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

        {date && (
          <span
            className="
              shrink-0
              rounded-full
              bg-buildcv-surface-soft
              px-2
              py-1
              text-[6.5px]
              font-bold
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
            mt-2.5
            text-[8.5px]
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
   PROJECT
========================================================= */

function CreativeProject({
  project,
  index,
}) {
  const name =
    getProjectName(project);

  const description =
    getDescription(project);

  const projectNumbers = [
    "01",
    "02",
    "03",
    "04",
  ];

  return (
    <article
      className="
        group
        rounded-2xl
        border
        border-buildcv-border
        bg-buildcv-surface-soft
        p-3.5
      "
    >
      <div className="flex items-center justify-between">
        <span
          className="
            text-[7px]
            font-black
            text-buildcv-violet
          "
        >
          PROJECT{" "}
          {projectNumbers[
            index % 4
          ]}
        </span>

        <span
          className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-white
            text-[8px]
            font-bold
            text-buildcv-violet
          "
        >
          ↗
        </span>
      </div>

      <h3
        className="
          mt-3
          text-[9px]
          font-extrabold
          text-buildcv-ink-900
        "
      >
        {name}
      </h3>

      {description && (
        <p
          className="
            mt-2
            line-clamp-3
            text-[7.5px]
            leading-[1.6]
            text-buildcv-text-secondary
          "
        >
          {description}
        </p>
      )}

      {project.technologies && (
        <div className="mt-3 flex flex-wrap gap-1">
          {String(
            project.technologies
          )
            .split(",")
            .map(
              (
                technology,
                technologyIndex
              ) => {
                const value =
                  technology.trim();

                if (!value)
                  return null;

                return (
                  <span
                    key={
                      technologyIndex
                    }
                    className="
                      rounded
                      bg-white
                      px-1.5
                      py-0.5
                      text-[5.5px]
                      font-semibold
                      text-buildcv-text-muted
                    "
                  >
                    {value}
                  </span>
                );
              }
            )}
        </div>
      )}
    </article>
  );
}