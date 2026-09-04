import React from "react";

function CoralPreview({ formData = {}, data = {} }) {
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

  const TinyText = ({
    children,
    className = "",
    color = "text-slate-500",
  }) => (
    <p
      className={`
        text-[10px]
        leading-[1.55]
        ${color}
        ${className}
      `}
    >
      {children}
    </p>
  );

  const ResumeLines = ({
    description,
    count = 3,
    color = "bg-orange-200",
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
                className={`
                  absolute
                  left-0
                  top-[7px]
                  h-[4px]
                  w-[4px]
                  rounded-full
                  ${color}
                `}
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
              className={`
                absolute
                left-0
                top-[7px]
                h-[4px]
                w-[4px]
                rounded-full
                ${color}
              `}
            />

            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const SkillPill = ({
    children,
    dark = false,
    color = "coral",
  }) => {
    const colorClasses =
      color === "coral"
        ? dark
          ? "border-orange-300/30 bg-white/5 text-orange-200"
          : "border-orange-200 bg-orange-50 text-[#ff5549]"
        : "border-slate-200 bg-slate-50 text-slate-700";

    return (
      <span
        className={`
          rounded-full
          border
          px-2.5
          py-1.5
          text-[9px]
          font-medium
          ${colorClasses}
        `}
      >
        {children}
      </span>
    );
  };

  const PhotoCircle = ({
    ring = "ring-white",
    background = "bg-orange-100",
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
        <span className="text-[11px] font-black text-[#ff5549]">
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
    : ["React", "Figma", "CSS", "GSAP"];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built responsive interfaces and created expressive digital experiences.",
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
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-[#fff9f7]
        font-sans
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          relative
          overflow-hidden
          bg-[#ff6b5f]
          px-[52px]
          py-[48px]
          text-white
        "
      >
        {/* Decorative Circle */}

        <div
          className="
            absolute
            -bottom-16
            -right-14
            h-44
            w-44
            rounded-full
            border-[18px]
            border-white/20
          "
        />

        <div className="relative flex items-center gap-6">
          {/* PHOTO */}

          <PhotoCircle
            ring="ring-white"
            background="bg-orange-100"
          />

          {/* NAME + TITLE */}

          <div className="min-w-0">
            <div
              className="
                text-[36px]
                font-black
                uppercase
                leading-[1]
                tracking-[-0.03em]
              "
            >
              {displayName}
            </div>

            <div
              className="
                mt-3
                text-[12px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-white/80
              "
            >
              {displayJobTitle}
            </div>

            {(personal.email ||
              personal.phone ||
              personal.location) && (
              <div
                className="
                  mt-4
                  text-[9px]
                  leading-[1.5]
                  text-white/75
                "
              >
                {[
                  personal.email,
                  personal.phone,
                  personal.location,
                ]
                  .filter(Boolean)
                  .join(" • ")}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT GRID
      ====================================================== */}

      <div className="grid grid-cols-[0.7fr_1.5fr]">
        {/* ===================================================
            SIDEBAR
        ==================================================== */}

        <aside
          className="
            min-h-[875px]
            bg-[#242424]
            px-[34px]
            py-[38px]
            text-white
          "
        >
          {/* CONTACT */}

          <section>
            <div
              className="
                text-[11px]
                font-bold
                tracking-[0.18em]
                text-orange-300
              "
            >
              CONTACT
            </div>

            <TinyText
              className="mt-4"
              color="text-white/60"
            >
              {personal.email || "email@example.com"}

              <br />

              {personal.phone || "+92 300 0000000"}

              <br />

              {personal.location || "Location"}

              {personal.linkedin && (
                <>
                  <br />
                  {personal.linkedin}
                </>
              )}

              {personal.github && (
                <>
                  <br />
                  {personal.github}
                </>
              )}
            </TinyText>
          </section>

          {/* SKILLS */}

          <section className="mt-10">
            <div
              className="
                text-[11px]
                font-bold
                tracking-[0.18em]
                text-orange-300
              "
            >
              SKILLS
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {displaySkills.slice(0, 10).map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <SkillPill
                    key={`${skillName}-${index}`}
                    dark
                    color="coral"
                  >
                    {skillName || "Skill"}
                  </SkillPill>
                );
              })}
            </div>
          </section>
        </aside>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <main
          className="
            min-w-0
            px-[40px]
            py-[38px]
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
                text-[#ff5549]
              "
            >
              HELLO
            </div>

            <div
              className="
                mt-4
                max-w-[380px]
                text-[23px]
                font-black
                leading-[1.12]
                tracking-[-0.02em]
                text-slate-900
              "
            >
              {personal.summary ? (
                personal.summary
              ) : (
                <>
                  I design.
                  <br />
                  I build.
                  <br />
                  I remember.
                </>
              )}
            </div>

            <TinyText className="mt-5 max-w-[470px]">
              {personal.summary ||
                "Frontend developer creating expressive interfaces with thoughtful user experiences."}
            </TinyText>
          </section>

          {/* =================================================
              EXPERIENCE
          ================================================== */}

          <section className="mt-9">
            <div
              className="
                text-[11px]
                font-bold
                tracking-[0.18em]
                text-[#ff5549]
              "
            >
              EXPERIENCE
            </div>

            <div className="mt-5 space-y-5">
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
                  <article
                    key={index}
                    className="
                      rounded-2xl
                      bg-orange-50
                      p-5
                    "
                  >
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

                    <div
                      className="
                        mt-2
                        text-[9.5px]
                        font-medium
                        text-[#ff5549]
                      "
                    >
                      {company || "Company Name"}

                      {(startDate || endDate) && (
                        <>
                          {" "}
                          • {startDate || ""} —{" "}
                          {endDate || "Present"}
                        </>
                      )}
                    </div>

                    {/* DESCRIPTION */}

                    <div className="mt-4">
                      <ResumeLines
                        description={description}
                        count={3}
                        color="bg-orange-200"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default CoralPreview;