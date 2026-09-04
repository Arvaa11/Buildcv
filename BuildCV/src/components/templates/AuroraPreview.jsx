import React from "react";

function AuroraPreview({ formData = {}, data = {} }) {
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

  const education = Array.isArray(formData.education)
    ? formData.education
    : Array.isArray(data.education)
    ? data.education
    : [];

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
    if (typeof skill === "string") {
      return skill;
    }

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

  const SectionTitle = ({ children }) => (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <span className="h-[3px] w-5 rounded-full bg-teal-400" />

        <h2
          className="
            text-[11px]
            font-black
            uppercase
            tracking-[0.16em]
            text-teal-700
          "
        >
          {children}
        </h2>
      </div>

      <div className="mt-2 h-px bg-slate-200" />
    </div>
  );

  const TinyText = ({
    children,
    className = "",
    dark = false,
  }) => (
    <p
      className={`
        text-[9.5px]
        leading-[1.55]
        ${dark ? "text-white/65" : "text-slate-500"}
        ${className}
      `}
    >
      {children}
    </p>
  );

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines = getDescriptionLines(description);

    const displayLines =
      lines.length > 0
        ? lines.slice(0, 4)
        : Array.from({ length: count }).map(
            () => "Professional responsibility or achievement"
          );

    return (
      <ul className="space-y-2">
        {displayLines.map((line, index) => (
          <li
            key={index}
            className={`
              relative
              pl-4
              text-[9px]
              leading-[1.5]
              ${
                lines.length > 0
                  ? "text-slate-600"
                  : "text-slate-400"
              }
            `}
          >
            <span
              className="
                absolute
                left-0
                top-[6px]
                h-[4px]
                w-[4px]
                rounded-full
                bg-teal-400
              "
            />

            {line}
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-teal-300",
    background = "bg-teal-100",
  }) => {
    if (personal.profileImage) {
      return (
        <div
          className={`
            h-[82px]
            w-[82px]
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
          h-[82px]
          w-[82px]
          shrink-0
          items-center
          justify-center
          rounded-full
          ring-2
          ${ring}
          ${background}
        `}
      >
        <span className="text-[14px] font-black text-teal-700">
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
    : [
        "React",
        "UI/UX",
        "JavaScript",
        "Figma",
        "HTML",
        "CSS",
        "GSAP",
        "Git",
      ];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Creative Digital Studio",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built responsive interfaces and created useful digital experiences while focusing on usability, performance, and visual quality.",
        },
        {
          jobTitle: "Web Developer",
          company: "Technology Company",
          startDate: "2022",
          endDate: "2024",
          description:
            "Developed modern web interfaces using React and JavaScript and collaborated with designers to deliver polished digital products.",
        },
        {
          jobTitle: "Junior Developer",
          company: "Digital Agency",
          startDate: "2021",
          endDate: "2022",
          description:
            "Supported frontend development and implemented responsive layouts for client-facing web projects.",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName || "YOUR NAME";

  const displayJobTitle =
    personal.jobTitle || "CREATIVE DEVELOPER";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className="
        box-border
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-white
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative overflow-hidden px-[52px] py-[48px] pb-7">
        {/* DECORATIVE BLUR */}

        <div
          className="
            absolute
            -right-16
            -top-20
            h-48
            w-48
            rounded-full
            bg-teal-200
            opacity-70
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-indigo-200
            opacity-60
            blur-3xl
          "
        />

        {/* HEADER CONTENT */}

        <div className="relative flex items-center justify-between gap-8">
          {/* PHOTO */}

          <div
            className="
              rounded-full
              bg-white
              p-1.5
              shadow-lg
            "
          >
            <PhotoCircle
              ring="ring-teal-300"
              background="bg-teal-100"
            />
          </div>

          {/* NAME + TITLE */}

          <div className="min-w-0 flex-1">
            <h1
              className="
                text-[38px]
                font-black
                leading-[0.95]
                tracking-[-0.04em]
                text-slate-900
              "
            >
              {displayName.toUpperCase()}
            </h1>

            <div
              className="
                mt-4
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-teal-700
              "
            >
              {displayJobTitle.toUpperCase()}
            </div>

            <div
              className="
                mt-3
                text-[9px]
                font-medium
                text-slate-500
              "
            >
              Digital experiences • Frontend • Product
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          GRADIENT LINE
      ===================================================== */}

      <div className="mx-[52px] h-[3px] rounded-full bg-gradient-to-r from-teal-400 via-indigo-400 to-transparent" />

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="px-[52px] py-7">
        <div
          className="
            grid
            grid-cols-[1.55fr_0.72fr]
            gap-8
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="min-w-0">
            {/* =================================================
                PROFILE
            ================================================= */}

            <section>
              <SectionTitle>
                The Profile
              </SectionTitle>

              <div
                className="
                  text-[17px]
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-slate-900
                "
              >
                {personal.summary ? (
                  personal.summary
                ) : (
                  <>
                    Designing interfaces
                    <br />
                    with clarity and soul.
                  </>
                )}
              </div>

              <TinyText className="mt-4">
                {personal.summary ||
                  "Frontend developer blending technology, interaction and visual design to create useful and memorable digital experiences."}
              </TinyText>
            </section>

            {/* =================================================
                EXPERIENCE
            ================================================= */}

            <section className="mt-8">
              <SectionTitle>
                Experience
              </SectionTitle>

              <div className="space-y-5">
                {displayExperience
                  .slice(0, 3)
                  .map((item, index) => {
                    const jobTitle =
                      getValue(item, [
                        "jobTitle",
                        "title",
                        "position",
                        "role",
                      ]);

                    const company =
                      getValue(item, [
                        "company",
                        "companyName",
                        "organization",
                      ]);

                    const startDate =
                      getValue(item, [
                        "startDate",
                        "start",
                        "from",
                      ]);

                    const endDate =
                      getValue(item, [
                        "endDate",
                        "end",
                        "to",
                      ]);

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                        "responsibilities",
                      ]);

                    return (
                      <article
                        key={index}
                        className="
                          relative
                          rounded-xl
                          bg-slate-50
                          p-5
                          break-inside-avoid
                        "
                      >
                        {/* ACCENT BAR */}

                        <div
                          className="
                            absolute
                            left-0
                            top-5
                            h-8
                            w-[3px]
                            rounded-r-full
                            bg-teal-400
                          "
                        />

                        {/* JOB TITLE */}

                        <h3
                          className="
                            text-[12px]
                            font-bold
                            leading-[1.3]
                            text-slate-900
                          "
                        >
                          {jobTitle ||
                            "Frontend Developer"}
                        </h3>

                        {/* COMPANY */}

                        <div
                          className="
                            mt-1.5
                            flex
                            flex-wrap
                            items-center
                            gap-1.5
                            text-[9px]
                            font-semibold
                          "
                        >
                          <span className="text-teal-700">
                            {company ||
                              "Company Name"}
                          </span>

                          {(startDate ||
                            endDate) && (
                            <>
                              <span className="text-slate-300">
                                •
                              </span>

                              <span className="text-slate-400">
                                {startDate ||
                                  ""}{" "}
                                —{" "}
                                {endDate ||
                                  "Present"}
                              </span>
                            </>
                          )}
                        </div>

                        {/* DESCRIPTION */}

                        <div className="mt-3">
                          <ResumeLines
                            description={
                              description
                            }
                            count={3}
                          />
                        </div>
                      </article>
                    );
                  })}
              </div>
            </section>
          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          <aside
            className="
              min-w-0
              rounded-2xl
              bg-slate-950
              p-6
              text-white
            "
          >
            {/* =================================================
                EXPERTISE
            ================================================= */}

            <section>
              <div
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-teal-300
                "
              >
                Expertise
              </div>

              <div className="mt-5 space-y-4">
                {displaySkills
                  .slice(0, 9)
                  .map((skill, index) => {
                    const skillName =
                      getSkillName(skill);

                    return (
                      <div
                        key={`${skillName}-${index}`}
                        className="
                          border-b
                          border-white/10
                          pb-3
                          text-[9px]
                          font-medium
                          leading-[1.35]
                          text-white/90
                        "
                      >
                        {skillName || "Skill"}
                      </div>
                    );
                  })}
              </div>
            </section>

            {/* =================================================
                CONTACT
            ================================================= */}

            <section className="mt-8 border-t border-white/10 pt-6">
              <div
                className="
                  text-[10px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-teal-300
                "
              >
                Contact
              </div>

              <div className="mt-4 space-y-2.5">
                <TinyText dark>
                  {personal.email ||
                    "email@example.com"}
                </TinyText>

                <TinyText dark>
                  {personal.phone ||
                    "+92 300 0000000"}
                </TinyText>

                <TinyText dark>
                  {personal.location ||
                    "Location"}
                </TinyText>

                {personal.linkedin && (
                  <TinyText dark>
                    {personal.linkedin}
                  </TinyText>
                )}
              </div>
            </section>

            {/* =================================================
                PROFILE IMAGE NOTE / DECORATION
            ================================================= */}

            <div
              className="
                mt-10
                h-px
                bg-gradient-to-r
                from-teal-400
                via-indigo-400
                to-transparent
              "
            />

            <div
              className="
                mt-4
                text-[8px]
                leading-[1.5]
                text-white/40
              "
            >
              Creative thinking.
              <br />
              Digital craft.
              <br />
              Meaningful experiences.
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default AuroraPreview;