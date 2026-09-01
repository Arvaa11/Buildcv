/*
=========================================================
BUILDCV — CLASSIC EDITORIAL PREVIEW
=========================================================

Layout:
• One Column
• Optional Profile Photo
• Traditional + Editorial
• Strong typography hierarchy
• ATS-friendly content structure
• A4 resume
=========================================================
*/

export default function ClassicPreview({ formData = {} }) {
  const personal = formData.personal || {};

  const education = Array.isArray(formData.education)
    ? formData.education
    : [];

  const experience = Array.isArray(formData.experience)
    ? formData.experience
    : [];

  const skills = Array.isArray(formData.skills)
    ? formData.skills
    : [];

  const projects = Array.isArray(formData.projects)
    ? formData.projects
    : [];

  const getSkillName = (skill) => {
    if (typeof skill === "string") return skill;

    return (
      skill?.name ||
      skill?.skill ||
      skill?.title ||
      ""
    );
  };

  return (
    <div
      className="
        min-h-[1123px]
        w-[794px]
        bg-white
        px-12
        py-10
        text-[#111827]
      "
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <header>

        <div className="flex items-start justify-between gap-8">

          {/* NAME / TITLE */}

          <div className="min-w-0">

            <p
              className="
                mb-3
                text-[8px]
                font-bold
                uppercase
                tracking-[0.28em]
                text-[#6366F1]
              "
            >
              Resume
            </p>

            <h1
              className="
                font-display
                text-[34px]
                font-extrabold
                leading-[1]
                tracking-[-0.045em]
                text-[#111827]
              "
            >
              {personal.fullName || "Your Name"}
            </h1>

            <p
              className="
                mt-3
                text-[12px]
                font-semibold
                tracking-wide
                text-[#475569]
              "
            >
              {personal.jobTitle || "Professional Title"}
            </p>

          </div>

          {/* PROFILE PHOTO */}

          {personal.profileImage ? (
            <img
              src={personal.profileImage}
              alt={personal.fullName || "Profile"}
              className="
                h-[88px]
                w-[88px]
                shrink-0
                rounded-2xl
                object-cover
              "
            />
          ) : (
            <div
              className="
                flex
                h-[88px]
                w-[88px]
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-[#EEF2FF]
                text-2xl
                font-bold
                text-[#6366F1]
              "
            >
              {(personal.fullName || "Y")
                .charAt(0)
                .toUpperCase()}
            </div>
          )}

        </div>

        {/* CONTACT BAR */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-x-5
            gap-y-2
            border-y
            border-[#E2E8F0]
            py-3
            text-[9px]
            font-medium
            text-[#475569]
          "
        >

          {personal.email && (
            <span>{personal.email}</span>
          )}

          {personal.phone && (
            <span>{personal.phone}</span>
          )}

          {personal.location && (
            <span>{personal.location}</span>
          )}

          {personal.linkedin && (
            <span className="break-all">
              {personal.linkedin}
            </span>
          )}

          {personal.github && (
            <span className="break-all">
              {personal.github}
            </span>
          )}

        </div>

      </header>


      {/* =================================================
          SUMMARY
      ================================================= */}

      {personal.summary && (
        <ClassicSection
          number="01"
          title="Professional Summary"
        >
          <p
            className="
              max-w-[680px]
              text-[10px]
              leading-[1.8]
              text-[#475569]
            "
          >
            {personal.summary}
          </p>
        </ClassicSection>
      )}


      {/* =================================================
          EXPERIENCE
      ================================================= */}

      {experience.length > 0 && (
        <ClassicSection
          number="02"
          title="Experience"
        >

          <div className="space-y-6">

            {experience.map((item, index) => {

              const position =
                item.position ||
                item.title ||
                item.role ||
                "Position";

              const company =
                item.company ||
                item.organization ||
                "";

              const description =
                item.description ||
                "";

              const startDate =
                item.startDate ||
                "";

              const endDate =
                item.endDate ||
                "";

              return (
                <article
                  key={item.id || index}
                  className="
                    grid
                    grid-cols-[145px_1fr]
                    gap-7
                  "
                >

                  {/* DATE */}

                  <div className="pt-0.5">

                    {(startDate || endDate) && (
                      <p
                        className="
                          text-[8px]
                          font-semibold
                          leading-4
                          text-[#718096]
                        "
                      >
                        {startDate}

                        {startDate && endDate
                          ? " — "
                          : ""}

                        {endDate}
                      </p>
                    )}

                  </div>


                  {/* CONTENT */}

                  <div
                    className="
                      relative
                      border-l-2
                      border-[#E0E7FF]
                      pl-5
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
                        bg-[#6366F1]
                      "
                    />

                    <h3
                      className="
                        text-[12px]
                        font-bold
                        text-[#111827]
                      "
                    >
                      {position}
                    </h3>

                    {company && (
                      <p
                        className="
                          mt-1
                          text-[9px]
                          font-bold
                          text-[#6366F1]
                        "
                      >
                        {company}
                      </p>
                    )}

                    {description && (
                      <p
                        className="
                          mt-2
                          text-[9px]
                          leading-[1.75]
                          text-[#475569]
                        "
                      >
                        {description}
                      </p>
                    )}

                  </div>

                </article>
              );
            })}

          </div>

        </ClassicSection>
      )}


      {/* =================================================
          EDUCATION
      ================================================= */}

      {education.length > 0 && (
        <ClassicSection
          number="03"
          title="Education"
        >

          <div className="space-y-5">

            {education.map((item, index) => {

              const degree =
                item.degree ||
                item.title ||
                item.program ||
                "Degree";

              const field =
                item.field ||
                item.major ||
                "";

              const institution =
                item.institution ||
                item.school ||
                item.university ||
                "";

              const startDate =
                item.startDate ||
                "";

              const endDate =
                item.endDate ||
                "";

              return (
                <div
                  key={item.id || index}
                  className="
                    grid
                    grid-cols-[145px_1fr]
                    gap-7
                  "
                >

                  {/* DATE */}

                  <div>

                    {(startDate || endDate) && (
                      <p
                        className="
                          text-[8px]
                          font-semibold
                          text-[#718096]
                        "
                      >
                        {startDate}

                        {startDate && endDate
                          ? " — "
                          : ""}

                        {endDate}
                      </p>
                    )}

                  </div>


                  {/* EDUCATION */}

                  <div>

                    <h3
                      className="
                        text-[11px]
                        font-bold
                        text-[#111827]
                      "
                    >
                      {degree}
                    </h3>

                    {field && (
                      <p
                        className="
                          mt-1
                          text-[9px]
                          text-[#475569]
                        "
                      >
                        {field}
                      </p>
                    )}

                    {institution && (
                      <p
                        className="
                          mt-1
                          text-[9px]
                          font-semibold
                          text-[#6366F1]
                        "
                      >
                        {institution}
                      </p>
                    )}

                    {item.description && (
                      <p
                        className="
                          mt-2
                          text-[9px]
                          leading-6
                          text-[#718096]
                        "
                      >
                        {item.description}
                      </p>
                    )}

                  </div>

                </div>
              );
            })}

          </div>

        </ClassicSection>
      )}


      {/* =================================================
          SKILLS
      ================================================= */}

      {skills.length > 0 && (
        <ClassicSection
          number="04"
          title="Core Skills"
        >

          <div
            className="
              grid
              grid-cols-3
              gap-x-8
              gap-y-2.5
            "
          >

            {skills.map((skill, index) => {

              const name = getSkillName(skill);

              if (!name) return null;

              return (
                <div
                  key={skill?.id || index}
                  className="
                    flex
                    items-center
                    gap-2
                  "
                >

                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#6366F1]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      text-[#475569]
                    "
                  >
                    {name}
                  </span>

                </div>
              );
            })}

          </div>

        </ClassicSection>
      )}


      {/* =================================================
          PROJECTS
      ================================================= */}

      {projects.length > 0 && (
        <ClassicSection
          number="05"
          title="Selected Projects"
        >

          <div className="space-y-5">

            {projects.map((project, index) => {

              const name =
                project.name ||
                project.title ||
                "Project";

              const description =
                project.description ||
                "";

              const technologies =
                project.technologies ||
                "";

              const link =
                project.link ||
                "";

              return (
                <article
                  key={project.id || index}
                  className="
                    border-b
                    border-[#E2E8F0]
                    pb-4
                    last:border-b-0
                  "
                >

                  <div
                    className="
                      flex
                      items-start
                      justify-between
                      gap-5
                    "
                  >

                    <h3
                      className="
                        text-[11px]
                        font-bold
                        text-[#111827]
                      "
                    >
                      {name}
                    </h3>

                    {link && (
                      <span
                        className="
                          max-w-[220px]
                          break-all
                          text-right
                          text-[8px]
                          font-medium
                          text-[#6366F1]
                        "
                      >
                        {link}
                      </span>
                    )}

                  </div>

                  {description && (
                    <p
                      className="
                        mt-1.5
                        max-w-[650px]
                        text-[9px]
                        leading-[1.7]
                        text-[#475569]
                      "
                    >
                      {description}
                    </p>
                  )}

                  {technologies && (
                    <p
                      className="
                        mt-2
                        text-[8px]
                        font-bold
                        tracking-wide
                        text-[#6366F1]
                      "
                    >
                      {Array.isArray(technologies)
                        ? technologies.join("  •  ")
                        : technologies}
                    </p>
                  )}

                </article>
              );
            })}

          </div>

        </ClassicSection>
      )}


      {/* =================================================
          FOOTER
      ================================================= */}

      <footer
        className="
          mt-8
          flex
          items-center
          justify-between
          border-t
          border-[#E2E8F0]
          pt-3
          text-[7px]
          font-medium
          uppercase
          tracking-[0.15em]
          text-[#718096]
        "
      >

        <span>
          BuildCV
        </span>

        <span>
          {personal.fullName || "Your Name"}
        </span>

      </footer>

    </div>
  );
}


/* =====================================================
   CLASSIC SECTION
===================================================== */

function ClassicSection({
  number,
  title,
  children,
}) {
  return (
    <section className="mt-8">

      {/* SECTION HEADER */}

      <div
        className="
          mb-4
          flex
          items-center
          gap-4
        "
      >

        <span
          className="
            text-[8px]
            font-bold
            tracking-[0.12em]
            text-[#6366F1]
          "
        >
          {number}
        </span>

        <h2
          className="
            text-[10px]
            font-extrabold
            uppercase
            tracking-[0.18em]
            text-[#111827]
          "
        >
          {title}
        </h2>

        <div
          className="
            h-px
            flex-1
            bg-[#E2E8F0]
          "
        />

      </div>

      {children}

    </section>
  );
}
