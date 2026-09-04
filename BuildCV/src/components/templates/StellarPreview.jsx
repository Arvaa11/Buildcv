import React from "react";

function StellarPreview({ formData = {}, data = {} }) {
  // =========================================================
  // PERSONAL DATA
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

  // =========================================================
  // RESUME SECTIONS
  // =========================================================
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
    if (!description) {
      return [];
    }

    if (Array.isArray(description)) {
      return description.filter(Boolean);
    }

    return String(description)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  };

  // =========================================================
  // SMALL TEXT
  // =========================================================
  const TinyText = ({
    children,
    className = "",
    color = "text-white/50",
  }) => (
    <p
      className={`text-[4.5px] leading-[1.65] ${color} ${className}`}
    >
      {children}
    </p>
  );

  // =========================================================
  // EXPERIENCE DESCRIPTION
  // =========================================================
  const ResumeLines = ({
    description,
    count = 3,
    color = "bg-white/10",
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-2 text-[4.5px] leading-[1.55] text-white/55"
            >
              <span
                className={`absolute left-0 top-[3px] h-[2px] w-[2px] rounded-full ${color}`}
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
            className="relative pl-2 text-[4.5px] leading-[1.55] text-white/40"
          >
            <span
              className={`absolute left-0 top-[3px] h-[2px] w-[2px] rounded-full ${color}`}
            />

            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // PROFILE PHOTO
  // =========================================================
  const PhotoCircle = ({
    large = false,
    ring = "ring-violet-300",
    background = "bg-violet-100",
  }) => {
    const size = large
      ? "h-14 w-14"
      : "h-10 w-10";

    const initials = (personal.fullName || "ARWA KHAN")
      .trim()
      .split(/\s+/)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    if (personal.profileImage) {
      return (
        <img
          src={personal.profileImage}
          alt={personal.fullName || "Profile"}
          className={`${size} shrink-0 rounded-full object-cover ring-2 ${ring}`}
        />
      );
    }

    return (
      <div
        className={`${size} shrink-0 rounded-full ${background} flex items-center justify-center text-[8px] font-black text-violet-900 ring-2 ${ring}`}
      >
        {initials || "AK"}
      </div>
    );
  };

  // =========================================================
  // FALLBACK DATA
  // =========================================================
  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built scalable interfaces and thoughtful digital products.",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : ["React", "TypeScript", "Node", "Figma"];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "DIGITAL PRODUCT ENGINEER";

  const displaySummary =
    personal.summary ||
    "Developer focused on thoughtful products, scalable systems and beautiful interfaces.";

  const displayTagline = personal.jobTitle
    ? `${personal.jobTitle} • Product • Design Systems`
    : "Frontend • Product • Design Systems";

  return (
    <div className="h-full bg-[#0b1020] text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="relative overflow-hidden px-6 py-7">
        <div className="absolute right-[-20px] top-[-30px] h-36 w-36 rounded-full border border-violet-400/20" />

        <div className="absolute right-8 top-8 h-2 w-2 rounded-full bg-violet-400" />

        <div className="absolute left-28 top-5 h-1.5 w-1.5 rounded-full bg-cyan-300" />

        <div className="relative flex items-center gap-4">
          <PhotoCircle
            large
            ring="ring-violet-300"
            background="bg-violet-100"
          />

          <div>
            <div className="text-[17px] font-black tracking-tight">
              {displayName.toUpperCase()}
            </div>

            <div className="mt-1 text-[5px] font-mono tracking-[0.2em] text-violet-300">
              {displayJobTitle.toUpperCase()}
            </div>

            <TinyText
              className="mt-2"
              color="text-white/50"
            >
              {displayTagline}
            </TinyText>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}
      <main className="px-6 py-4">
        <div className="grid grid-cols-[1.4fr_0.75fr] gap-5">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}
          <section>
            {/* PROFILE */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="font-mono text-[5px] text-violet-300">
                01 — PROFILE
              </div>

              <div className="mt-2 text-[7px] font-extrabold leading-tight">
                {personal.summary ? (
                  personal.summary
                ) : (
                  <>
                    I turn complex
                    <br />
                    ideas into simple
                    <br />
                    experiences.
                  </>
                )}
              </div>

              <TinyText
                className="mt-3"
                color="text-white/50"
              >
                {personal.summary
                  ? ""
                  : "Developer focused on thoughtful products, scalable systems and beautiful interfaces."}
              </TinyText>
            </div>

            {/* EXPERIENCE */}
            <section className="mt-5">
              <div className="font-mono text-[5px] text-violet-300">
                02 — EXPERIENCE
              </div>

              <div className="mt-3 space-y-5">
                {displayExperience
                  .slice(0, 4)
                  .map((item, index) => {
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
                      "summary",
                    ]);

                    return (
                      <div key={index}>
                        <div className="text-[6px] font-bold">
                          {jobTitle || "Frontend Developer"}
                        </div>

                        <div className="mt-1 text-[4px] text-white/40">
                          {company || "Company Name"}

                          {(startDate || endDate) && (
                            <>
                              {" "}
                              • {startDate || ""} —{" "}
                              {endDate || "Present"}
                            </>
                          )}
                        </div>

                        <div className="mt-2">
                          <ResumeLines
                            description={description}
                            count={3}
                            color="bg-white/10"
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          </section>

          {/* =================================================
              RIGHT SIDEBAR — STACK
          ================================================= */}
          <aside className="rounded-2xl bg-violet-500/10 p-4">
            <div className="font-mono text-[5px] text-violet-300">
              03 — STACK
            </div>

            <div className="mt-4 space-y-2">
              {displaySkills
                .slice(0, 10)
                .map((skill, index) => {
                  const skillName = getSkillName(skill);

                  return (
                    <div
                      key={`${skillName}-${index}`}
                      className="rounded-lg border border-violet-300/10 px-3 py-2 text-[4px]"
                    >
                      {skillName || "Skill"}
                    </div>
                  );
                })}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default StellarPreview;