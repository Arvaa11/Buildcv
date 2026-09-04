import React from "react";

function ModernPreview({ formData = {}, data = {} }) {
  // =========================================================
  // NORMALIZE DATA
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
  // SMALL COMPONENTS
  // =========================================================

  const TinyText = ({
    children,
    className = "",
    color = "text-slate-500",
  }) => (
    <p
      className={`text-[10px] leading-[1.6] ${color} ${className}`}
    >
      {children}
    </p>
  );

  const SectionTitle = ({
    children,
    color = "text-indigo-700",
  }) => (
    <div
      className={`text-[11px] font-bold tracking-[0.2em] ${color}`}
    >
      {children}
    </div>
  );

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines = getDescriptionLines(description);

    // Real description
    if (lines.length > 0) {
      return (
        <ul className="space-y-2">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-600"
            >
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-indigo-400" />
              {line}
            </li>
          ))}
        </ul>
      );
    }

    // Fallback description
    return (
      <ul className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-400"
          >
            <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-indigo-300" />
            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-indigo-200",
    background = "bg-indigo-50",
  }) => {
    // Real uploaded photo
    if (personal.profileImage) {
      return (
        <div
          className={`h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ${ring}`}
        >
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    // Initials fallback
    const initials = (personal.fullName || "YN")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-2 ${ring} ${background}`}
      >
        <span className="text-[11px] font-black text-indigo-600">
          {initials}
        </span>
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
            "Built responsive and accessible interfaces using modern frontend technologies.",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : ["React", "TypeScript", "Figma", "Git"];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "Frontend Developer";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-slate-50 font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative overflow-hidden bg-white px-[52px] py-[48px]">
        {/* Decorative Circle */}
        <div className="absolute right-[-55px] top-[-55px] h-44 w-44 rounded-full bg-indigo-100" />

        <div className="relative flex items-center gap-5">
          <PhotoCircle
            ring="ring-indigo-200"
            background="bg-indigo-50"
          />

          <div>
            {/* Name */}
            <div className="text-[36px] font-black leading-none text-slate-900">
              {displayName.toUpperCase()}
            </div>

            {/* Job Title */}
            <div className="mt-3 text-[13px] font-bold tracking-[0.2em] text-indigo-600">
              {displayJobTitle.toUpperCase()}
            </div>

            {/* Contact */}
            {(personal.email ||
              personal.phone ||
              personal.location) && (
              <div className="mt-3 text-[9.5px] leading-[1.5] text-slate-400">
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
          MAIN
      ===================================================== */}

      <main className="px-[52px] py-[40px]">
        <div className="grid grid-cols-[1.5fr_0.7fr] gap-8">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div>
            {/* Profile Card */}

            <div className="rounded-2xl bg-indigo-600 p-6 text-white">
              <div className="text-[11px] font-bold tracking-[0.2em] text-indigo-200">
                PROFILE
              </div>

              <div className="mt-3 text-[22px] font-extrabold leading-[1.2]">
                {personal.summary
                  ? personal.summary
                  : "Designing interfaces"}
                {!personal.summary && (
                  <>
                    <br />
                    that feel effortless.
                  </>
                )}
              </div>

              <TinyText
                className="mt-3"
                color="text-indigo-100"
              >
                {personal.summary
                  ? ""
                  : "Frontend developer combining technology, design and usability."}
              </TinyText>
            </div>

            {/* Experience */}

            <section className="mt-8">
              <SectionTitle color="text-indigo-700">
                EXPERIENCE
              </SectionTitle>

              <div className="mt-5 space-y-6">
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
                    ]);

                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-white p-5 shadow-sm"
                      >
                        {/* Job Title */}

                        <div className="text-[12px] font-bold leading-tight text-slate-900">
                          {jobTitle || "Frontend Developer"}
                        </div>

                        {/* Company + Dates */}

                        <div className="mt-1.5 text-[9.5px] text-indigo-600">
                          {company || "Company Name"}

                          {(startDate || endDate) && (
                            <>
                              {" "}
                              • {startDate || ""} —{" "}
                              {endDate || "Present"}
                            </>
                          )}
                        </div>

                        {/* Description */}

                        <div className="mt-3">
                          <ResumeLines
                            description={description}
                            count={3}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside>
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <SectionTitle color="text-indigo-700">
                SKILLS
              </SectionTitle>

              <div className="mt-5 space-y-3">
                {displaySkills
                  .slice(0, 10)
                  .map((skill, index) => {
                    const skillName = getSkillName(skill);

                    return (
                      <div
                        key={`${skillName}-${index}`}
                        className="rounded-lg bg-indigo-50 px-3 py-2.5 text-[9.5px] font-semibold leading-tight text-indigo-700"
                      >
                        {skillName || "Skill"}
                      </div>
                    );
                  })}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default ModernPreview;