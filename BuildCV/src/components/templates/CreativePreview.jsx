import React from "react";

function CreativePreview({ formData = {}, data = {} }) {
  // =========================================================
  // DATA
  // =========================================================

  const personal = {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
    profileImage: "",
    ...(formData.personal || data.personal || {}),
  };

  const experience = Array.isArray(formData.experience)
    ? formData.experience
    : Array.isArray(data.experience)
    ? data.experience
    : [];

  const skills = Array.isArray(formData.skills)
    ? formData.skills
    : Array.isArray(data.skills)
    ? data.skills
    : [];

  const projects = Array.isArray(formData.projects)
    ? formData.projects
    : Array.isArray(data.projects)
    ? data.projects
    : [];

  // =========================================================
  // HELPERS
  // =========================================================

  const getValue = (item, keys) => {
    for (const key of keys) {
      if (
        item &&
        item[key] !== undefined &&
        item[key] !== null &&
        String(item[key]).trim() !== ""
      ) {
        return item[key];
      }
    }

    return "";
  };

  const getSkillName = (skill) => {
    if (typeof skill === "string") return skill;

    return getValue(skill, [
      "name",
      "skill",
      "title",
      "label",
    ]);
  };

  const getDescriptionLines = (description) => {
    if (!description) return [];

    if (Array.isArray(description)) {
      return description.filter(Boolean);
    }

    return String(description)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  };

  // =========================================================
  // SMALL COMPONENTS
  // =========================================================

  const TinyText = ({ children, className = "" }) => (
    <p
      className={`
        text-[10px]
        leading-[1.55]
        text-slate-500
        ${className}
      `}
    >
      {children}
    </p>
  );

  const SectionTitle = ({
    children,
    accent = false,
  }) => (
    <div
      className="
        flex
        items-center
        gap-3
        text-[11px]
        font-bold
        tracking-[0.18em]
        text-slate-900
      "
    >
      {accent && (
        <span className="h-[3px] w-5 rounded-full bg-fuchsia-500" />
      )}

      {children}
    </div>
  );

  const SkillPill = ({
    children,
    dark = false,
  }) => (
    <span
      className={
        dark
          ? `
            rounded-full
            border
            border-fuchsia-300/20
            bg-white/5
            px-2.5
            py-1.5
            text-[9px]
            font-medium
            text-white/80
          `
          : `
            rounded-full
            border
            border-fuchsia-200
            bg-fuchsia-50
            px-2.5
            py-1.5
            text-[9px]
            font-medium
            text-fuchsia-700
          `
      }
    >
      {children}
    </span>
  );

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.map((line, index) => (
            <li
              key={index}
              className="
                relative
                pl-4
                text-[9.5px]
                leading-[1.5]
                text-slate-600
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[7px]
                  h-[4px]
                  w-[4px]
                  rounded-full
                  bg-fuchsia-400
                "
              />

              {line}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul className="space-y-1.5">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="
              relative
              pl-4
              text-[9.5px]
              leading-[1.5]
              text-slate-400
            "
          >
            <span
              className="
                absolute
                left-0
                top-[7px]
                h-[4px]
                w-[4px]
                rounded-full
                bg-fuchsia-300
              "
            />

            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-fuchsia-300",
    background = "bg-fuchsia-100",
  }) => {
    if (personal.profileImage) {
      return (
        <div
          className={`
            h-16
            w-16
            shrink-0
            overflow-hidden
            rounded-full
            ring-2
            ${ring}
          `}
        >
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    const initials = (personal.fullName || "YN")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className={`
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-full
          ring-2
          ${ring}
          ${background}
        `}
      >
        <span className="text-[11px] font-black text-fuchsia-600">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // FALLBACK DATA
  // =========================================================

  const displaySkills = skills.length
    ? skills
    : ["Figma", "React", "CSS", "Git", "Adobe"];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built responsive interfaces and created meaningful digital experiences.",
        },
      ];

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description: "Digital product experience",
        },
        {
          name: "Portfolio",
          description: "Digital product experience",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName || "YOUR NAME";

  const displayJobTitle =
    personal.jobTitle || "Creative Developer";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className="
        flex
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-white
        font-sans
      "
    >
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className="
          relative
          h-full
          w-[36%]
          shrink-0
          overflow-hidden
          bg-slate-950
          px-[34px]
          py-[48px]
          text-white
        "
      >
        {/* Decorative Circle */}

        <div
          className="
            absolute
            -right-14
            -top-14
            h-40
            w-40
            rounded-full
            bg-fuchsia-500
            opacity-80
          "
        />

        <div className="relative">
          {/* PHOTO */}

          <PhotoCircle
            ring="ring-fuchsia-300"
            background="bg-fuchsia-100"
          />

          {/* NAME */}

          <div
            className="
              mt-6
              text-[30px]
              font-black
              leading-[1.05]
              tracking-[-0.02em]
            "
          >
            {displayName
              .split(" ")
              .filter(Boolean)
              .map((word, index) => (
                <React.Fragment key={index}>
                  {word.toUpperCase()}

                  {index <
                    displayName.split(" ").filter(Boolean).length -
                      1 && <br />}
                </React.Fragment>
              ))}
          </div>

          {/* JOB TITLE */}

          <div
            className="
              mt-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-fuchsia-300
            "
          >
            {displayJobTitle}
          </div>

          {/* =================================================
              CONTACT
          ================================================== */}

          <div className="mt-12">
            <div
              className="
                text-[11px]
                font-bold
                tracking-[0.16em]
                text-fuchsia-300
              "
            >
              LET&apos;S CONNECT
            </div>

            <div
              className="
                mt-4
                space-y-3
                break-words
                text-[9px]
                leading-[1.5]
                text-white/65
              "
            >
              <div>
                {personal.email || "email@example.com"}
              </div>

              <div>
                {personal.phone || "+92 300 0000000"}
              </div>

              <div>
                {personal.location || "Location"}
              </div>

              {personal.linkedin && (
                <div>{personal.linkedin}</div>
              )}

              {personal.github && (
                <div>{personal.github}</div>
              )}
            </div>
          </div>

          {/* =================================================
              SKILLS
          ================================================== */}

          <div className="mt-12">
            <div
              className="
                text-[11px]
                font-bold
                tracking-[0.16em]
                text-fuchsia-300
              "
            >
              TOOLS
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {displaySkills.slice(0, 10).map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <SkillPill
                    key={`${skillName}-${index}`}
                    dark
                  >
                    {skillName || "Skill"}
                  </SkillPill>
                );
              })}
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main
        className="
          h-full
          w-[64%]
          overflow-hidden
          px-[40px]
          py-[48px]
        "
      >
        {/* =================================================
            INTRO
        ================================================== */}

        <section>
          <div
            className="
              text-[11px]
              font-bold
              tracking-[0.18em]
              text-fuchsia-600
            "
          >
            HELLO
          </div>

          <div
            className="
              mt-5
              max-w-[390px]
              text-[24px]
              font-extrabold
              leading-[1.12]
              tracking-[-0.02em]
              text-slate-900
            "
          >
            {personal.summary ? (
              personal.summary
            ) : (
              <>
                I create digital
                <br />
                experiences people
                <br />
                remember.
              </>
            )}
          </div>

          <TinyText className="mt-5 max-w-[450px]">
            {personal.summary ||
              "Frontend developer combining visual design with modern web technologies."}
          </TinyText>
        </section>

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        <section className="mt-10">
          <SectionTitle accent>
            EXPERIENCE
          </SectionTitle>

          <div className="mt-5 space-y-7">
            {displayExperience.slice(0, 4).map((item, index) => {
              const jobTitle = getValue(item, [
                "jobTitle",
                "title",
                "position",
                "role",
              ]);

              const company = getValue(item, [
                "company",
                "companyName",
                "organization",
              ]);

              const startDate = getValue(item, [
                "startDate",
                "start",
                "from",
              ]);

              const endDate = getValue(item, [
                "endDate",
                "end",
                "to",
              ]);

              const description = getValue(item, [
                "description",
                "details",
                "responsibilities",
              ]);

              return (
                <article key={index}>
                  {/* JOB TITLE */}

                  <div
                    className="
                      text-[12px]
                      font-bold
                      leading-[1.3]
                      text-slate-900
                    "
                  >
                    {jobTitle || "Frontend Developer"}
                  </div>

                  {/* COMPANY + DATE */}

                  <TinyText className="mt-2">
                    {company || "Company Name"}

                    {(startDate || endDate) && (
                      <>
                        {" "}
                        • {startDate || ""} —{" "}
                        {endDate || "Present"}
                      </>
                    )}
                  </TinyText>

                  {/* DESCRIPTION */}

                  <div className="mt-3">
                    <ResumeLines
                      description={description}
                      count={3}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* =================================================
            FEATURED WORK
        ================================================== */}

        <section className="mt-10">
          <SectionTitle accent>
            FEATURED WORK
          </SectionTitle>

          <div className="mt-5 space-y-3">
            {displayProjects.slice(0, 4).map(
              (project, index) => {
                const projectName = getValue(project, [
                  "name",
                  "title",
                  "projectName",
                ]);

                const description = getValue(project, [
                  "description",
                  "details",
                  "summary",
                ]);

                return (
                  <article
                    key={index}
                    className={
                      index === 0
                        ? `
                          rounded-xl
                          bg-fuchsia-50
                          p-4
                        `
                        : `
                          rounded-xl
                          border
                          border-slate-200
                          p-4
                        `
                    }
                  >
                    <div
                      className="
                        text-[11px]
                        font-bold
                        text-slate-900
                      "
                    >
                      {projectName || "Project"}
                    </div>

                    <TinyText className="mt-2">
                      {description ||
                        "Digital product experience"}
                    </TinyText>
                  </article>
                );
              }
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreativePreview;