/*
=========================================================
BUILDCV — PORTFOLIO EDITORIAL PREVIEW
=========================================================

Layout:
• Two Column
• Profile Photo
• Creative / Portfolio focused
• Projects emphasized
• Strong visual hierarchy
• Premium editorial style
• A4 resume
=========================================================
*/

export default function PortfolioPreview({ formData = {} }) {
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
        overflow-hidden
        bg-white
        text-[#111827]
      "
    >

      {/* =================================================
          TOP CREATIVE STRIP
      ================================================= */}

      <div className="h-2 w-full bg-[#6366F1]" />


      {/* =================================================
          HEADER
      ================================================= */}

      <header className="px-10 pb-7 pt-8">

        <div className="flex items-center justify-between gap-8">

          {/* LEFT — IDENTITY */}

          <div className="flex min-w-0 items-center gap-5">

            {/* PHOTO */}

            {personal.profileImage ? (
              <img
                src={personal.profileImage}
                alt={personal.fullName || "Profile"}
                className="
                  h-[86px]
                  w-[86px]
                  shrink-0
                  rounded-[22px]
                  object-cover
                "
              />
            ) : (
              <div
                className="
                  flex
                  h-[86px]
                  w-[86px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[22px]
                  bg-[#EEF2FF]
                  text-2xl
                  font-extrabold
                  text-[#6366F1]
                "
              >
                {(personal.fullName || "Y")
                  .charAt(0)
                  .toUpperCase()}
              </div>
            )}

            <div className="min-w-0">

              <p
                className="
                  mb-2
                  text-[7px]
                  font-bold
                  uppercase
                  tracking-[0.25em]
                  text-[#6366F1]
                "
              >
                Creative Portfolio
              </p>

              <h1
                className="
                  font-display
                  text-[30px]
                  font-extrabold
                  leading-none
                  tracking-[-0.04em]
                  text-[#111827]
                "
              >
                {personal.fullName || "Your Name"}
              </h1>

              <p
                className="
                  mt-2.5
                  text-[11px]
                  font-semibold
                  text-[#475569]
                "
              >
                {personal.jobTitle || "Creative Professional"}
              </p>

            </div>

          </div>


          {/* CONTACT */}

          <div
            className="
              max-w-[190px]
              text-right
              text-[8px]
              leading-5
              text-[#718096]
            "
          >

            {personal.email && (
              <div>{personal.email}</div>
            )}

            {personal.phone && (
              <div>{personal.phone}</div>
            )}

            {personal.location && (
              <div>{personal.location}</div>
            )}

            {personal.linkedin && (
              <div className="break-all text-[#6366F1]">
                {personal.linkedin}
              </div>
            )}

            {personal.github && (
              <div className="break-all text-[#6366F1]">
                {personal.github}
              </div>
            )}

          </div>

        </div>


        {/* INTRO */}

        {personal.summary && (
          <div
            className="
              mt-7
              max-w-[650px]
              border-l-[3px]
              border-[#6366F1]
              pl-4
            "
          >

            <p
              className="
                text-[9px]
                leading-[1.8]
                text-[#475569]
              "
            >
              {personal.summary}
            </p>

          </div>
        )}

      </header>


      {/* =================================================
          MAIN GRID
      ================================================= */}

      <div
        className="
          grid
          grid-cols-[235px_1fr]
          border-t
          border-[#E2E8F0]
        "
      >

        {/* =================================================
            LEFT SIDEBAR
        ================================================= */}

        <aside
          className="
            min-h-[1010px]
            bg-[#F8FAFC]
            px-7
            py-7
          "
        >

          {/* =================================================
              SKILLS
          ================================================= */}

          {skills.length > 0 && (
            <PortfolioSideSection title="Expertise">

              <div className="space-y-3">

                {skills.map((skill, index) => {

                  const name = getSkillName(skill);

                  if (!name) return null;

                  return (
                    <div
                      key={skill?.id || index}
                      className="flex items-center gap-2"
                    >

                      <span
                        className="
                          flex
                          h-4
                          w-4
                          shrink-0
                          items-center
                          justify-center
                          rounded
                          bg-[#E0E7FF]
                          text-[6px]
                          font-bold
                          text-[#6366F1]
                        "
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className="
                          text-[8px]
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

            </PortfolioSideSection>
          )}


          {/* =================================================
              EDUCATION
          ================================================= */}

          {education.length > 0 && (
            <PortfolioSideSection title="Education">

              <div className="space-y-5">

                {education.map((item, index) => {

                  const degree =
                    item.degree ||
                    item.title ||
                    item.program ||
                    "Degree";

                  const institution =
                    item.institution ||
                    item.school ||
                    item.university ||
                    "";

                  const field =
                    item.field ||
                    item.major ||
                    "";

                  return (
                    <div key={item.id || index}>

                      <h3
                        className="
                          text-[9px]
                          font-bold
                          leading-4
                          text-[#111827]
                        "
                      >
                        {degree}
                      </h3>

                      {field && (
                        <p
                          className="
                            mt-1
                            text-[7.5px]
                            leading-4
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
                            text-[7.5px]
                            font-semibold
                            text-[#6366F1]
                          "
                        >
                          {institution}
                        </p>
                      )}

                      {(item.startDate || item.endDate) && (
                        <p
                          className="
                            mt-1
                            text-[7px]
                            font-medium
                            text-[#718096]
                          "
                        >
                          {item.startDate}
                          {item.startDate && item.endDate
                            ? " — "
                            : ""}
                          {item.endDate}
                        </p>
                      )}

                    </div>
                  );
                })}

              </div>

            </PortfolioSideSection>
          )}


          {/* =================================================
              PROFILE DETAILS
          ================================================= */}

          <PortfolioSideSection title="Profile">

            <div className="space-y-2.5">

              <ProfileRow
                label="ROLE"
                value={
                  personal.jobTitle ||
                  "Creative Professional"
                }
              />

              <ProfileRow
                label="LOCATION"
                value={
                  personal.location ||
                  "Available Worldwide"
                }
              />

              <ProfileRow
                label="STATUS"
                value="Open to opportunities"
              />

            </div>

          </PortfolioSideSection>

        </aside>


        {/* =================================================
            RIGHT CONTENT
        ================================================= */}

        <main className="px-8 py-7">

          {/* =================================================
              FEATURED PROJECTS
          ================================================= */}

          {projects.length > 0 && (
            <PortfolioSection
              eyebrow="Selected Work"
              title="Projects"
            >

              <div className="space-y-4">

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
                        group
                        rounded-xl
                        border
                        border-[#E2E8F0]
                        bg-white
                        p-4
                      "
                    >

                      <div className="flex items-start gap-4">

                        {/* NUMBER */}

                        <div
                          className="
                            flex
                            h-8
                            w-8
                            shrink-0
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#EEF2FF]
                            text-[8px]
                            font-extrabold
                            text-[#6366F1]
                          "
                        >
                          {String(index + 1).padStart(2, "0")}
                        </div>


                        {/* CONTENT */}

                        <div className="min-w-0 flex-1">

                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-4
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
                                  max-w-[145px]
                                  break-all
                                  text-right
                                  text-[7px]
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
                                text-[8px]
                                leading-[1.7]
                                text-[#475569]
                              "
                            >
                              {description}
                            </p>
                          )}

                          {technologies && (
                            <div className="mt-2.5 flex flex-wrap gap-1.5">

                              {(Array.isArray(technologies)
                                ? technologies
                                : String(technologies)
                                    .split(",")
                                    .map((item) => item.trim())
                              )
                                .filter(Boolean)
                                .map((technology, techIndex) => (
                                  <span
                                    key={techIndex}
                                    className="
                                      rounded-full
                                      bg-[#F8FAFC]
                                      px-2
                                      py-1
                                      text-[6.5px]
                                      font-semibold
                                      text-[#475569]
                                    "
                                  >
                                    {technology}
                                  </span>
                                ))}

                            </div>
                          )}

                        </div>

                      </div>

                    </article>
                  );
                })}

              </div>

            </PortfolioSection>
          )}


          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {experience.length > 0 && (
            <PortfolioSection
              eyebrow="Professional Journey"
              title="Experience"
            >

              <div className="space-y-5">

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

                  return (
                    <article
                      key={item.id || index}
                      className="
                        grid
                        grid-cols-[90px_1fr]
                        gap-5
                      "
                    >

                      {/* DATE */}

                      <div>

                        {(item.startDate ||
                          item.endDate) && (
                          <p
                            className="
                              text-[7px]
                              font-semibold
                              leading-4
                              text-[#718096]
                            "
                          >
                            {item.startDate}

                            {item.startDate &&
                            item.endDate
                              ? " — "
                              : ""}

                            {item.endDate}
                          </p>
                        )}

                      </div>


                      {/* EXPERIENCE */}

                      <div>

                        <h3
                          className="
                            text-[10px]
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
                              text-[8px]
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
                              mt-1.5
                              text-[8px]
                              leading-[1.7]
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

            </PortfolioSection>
          )}


          {/* =================================================
              EMPTY PROJECT STATE
          ================================================= */}

          {projects.length === 0 && (
            <PortfolioSection
              eyebrow="Selected Work"
              title="Projects"
            >

              <div
                className="
                  rounded-xl
                  border
                  border-dashed
                  border-[#CBD5E1]
                  bg-[#F8FAFC]
                  px-5
                  py-6
                "
              >

                <p
                  className="
                    text-[9px]
                    font-semibold
                    text-[#718096]
                  "
                >
                  Your selected projects will appear here.
                </p>

              </div>

            </PortfolioSection>
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
          border-[#E2E8F0]
          px-10
          py-3
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
          Portfolio Edition
        </span>

      </footer>

    </div>
  );
}


/* =====================================================
   PORTFOLIO SECTION
===================================================== */

function PortfolioSection({
  eyebrow,
  title,
  children,
}) {
  return (
    <section className="mb-8">

      <div className="mb-4">

        <p
          className="
            mb-1
            text-[7px]
            font-bold
            uppercase
            tracking-[0.2em]
            text-[#6366F1]
          "
        >
          {eyebrow}
        </p>

        <div className="flex items-center gap-3">

          <h2
            className="
              font-display
              text-[17px]
              font-extrabold
              tracking-tight
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

      </div>

      {children}

    </section>
  );
}


/* =====================================================
   SIDEBAR SECTION
===================================================== */

function PortfolioSideSection({
  title,
  children,
}) {
  return (
    <section className="mb-8">

      <h2
        className="
          mb-3
          text-[8px]
          font-extrabold
          uppercase
          tracking-[0.18em]
          text-[#111827]
        "
      >
        {title}
      </h2>

      {children}

    </section>
  );
}


/* =====================================================
   PROFILE ROW
===================================================== */

function ProfileRow({
  label,
  value,
}) {
  return (
    <div>

      <p
        className="
          text-[6px]
          font-bold
          tracking-[0.16em]
          text-[#6366F1]
        "
      >
        {label}
      </p>

      <p
        className="
          mt-0.5
          text-[7.5px]
          leading-4
          text-[#475569]
        "
      >
        {value}
      </p>

    </div>
  );
}