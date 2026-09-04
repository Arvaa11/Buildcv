import React from "react";

function NoirPreview({ formData = {}, data = {} }) {
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
  // SMALL TEXT COMPONENT
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
    count = 4,
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
    ring = "ring-amber-300",
    background = "bg-amber-100",
  }) => {
    const initials =
      personal.fullName
        ?.trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "AK";

    return (
      <div
        className={`h-10 w-10 overflow-hidden rounded-full ${background} ring-2 ${ring}`}
      >
        {personal.profileImage ? (
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[8px] font-bold text-slate-800">
            {initials}
          </div>
        )}
      </div>
    );
  };

  // =========================================================
  // FALLBACK DATA
  // =========================================================
  const displaySkills = skills.length
    ? skills
    : ["React", "UI Design", "JavaScript", "Strategy"];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Creating refined digital experiences where engineering meets visual storytelling.",
        },
      ];

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "",
          startDate: "",
          endDate: "",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "CREATIVE TECHNOLOGIST";

  const displayLocation =
    personal.location || "Location";

  const displaySummary =
    personal.summary ||
    "Developer creating refined digital experiences where engineering meets visual storytelling.";

  return (
    <div className="h-full bg-[#111111] text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-serif text-[18px] font-bold tracking-wide">
              {displayName.toUpperCase()}
            </div>

            <div className="mt-1 text-[5px] tracking-[0.3em] text-amber-300">
              {displayJobTitle.toUpperCase()}
            </div>
          </div>

          <PhotoCircle
            ring="ring-amber-300"
            background="bg-amber-100"
          />
        </div>

        <div className="mt-5 flex flex-wrap gap-x-1 text-[4px] text-white/50">
          {personal.email && <span>{personal.email}</span>}

          {personal.email && personal.phone && (
            <span>•</span>
          )}

          {personal.phone && <span>{personal.phone}</span>}

          {(personal.email || personal.phone) &&
            personal.location && <span>•</span>}

          <span>{displayLocation}</span>

          {personal.linkedin && (
            <>
              <span>•</span>
              <span>{personal.linkedin}</span>
            </>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}
      <div className="grid grid-cols-[1.45fr_0.7fr]">
        {/* ===================================================
            LEFT SIDE
        =================================================== */}
        <main className="px-6 py-5">
          {/* PROFILE */}
          <div className="text-[5px] font-bold tracking-[0.22em] text-amber-300">
            PROFILE
          </div>

          <div className="mt-3 font-serif text-[8px] leading-tight">
            {personal.summary ? (
              <>
                {personal.summary.length > 70
                  ? `${personal.summary.slice(0, 70)}...`
                  : personal.summary}
              </>
            ) : (
              <>
                Technology with
                <br />
                personality.
              </>
            )}
          </div>

          <TinyText
            className="mt-3"
            color="text-white/50"
          >
            {displaySummary}
          </TinyText>

          {/* EXPERIENCE */}
          <section className="mt-7">
            <div className="text-[5px] font-bold tracking-[0.22em] text-amber-300">
              EXPERIENCE
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

                      <div className="mt-1 text-[4px] text-amber-200/70">
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
                          count={4}
                          color="bg-white/10"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        </main>

        {/* ===================================================
            RIGHT SIDEBAR
        =================================================== */}
        <aside className="border-l border-white/10 px-4 py-5">
          {/* EXPERTISE */}
          <div className="text-[5px] font-bold tracking-[0.2em] text-amber-300">
            EXPERTISE
          </div>

          <div className="mt-4 space-y-3">
            {displaySkills.slice(0, 10).map((skill, index) => {
              const skillName = getSkillName(skill);

              return (
                <div
                  key={`${skillName}-${index}`}
                  className="border-b border-white/10 pb-2 text-[5px]"
                >
                  {skillName || "Skill"}
                </div>
              );
            })}
          </div>

          {/* EDUCATION */}
          <div className="mt-8 text-[5px] font-bold tracking-[0.2em] text-amber-300">
            EDUCATION
          </div>

          <div className="mt-3 space-y-4">
            {displayEducation.slice(0, 3).map((item, index) => {
              const degree = getValue(item, [
                "degree",
                "program",
                "qualification",
                "title",
              ]);

              const institution = getValue(item, [
                "institution",
                "university",
                "school",
                "college",
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

              return (
                <div key={index}>
                  <TinyText color="text-white/70">
                    {degree || "Bachelor of Computer Science"}
                  </TinyText>

                  {institution && (
                    <TinyText
                      className="mt-1"
                      color="text-white/40"
                    >
                      {institution}
                    </TinyText>
                  )}

                  {(startDate || endDate) && (
                    <TinyText
                      className="mt-1"
                      color="text-amber-200/60"
                    >
                      {startDate || ""}{" "}
                      {startDate || endDate ? "—" : ""}{" "}
                      {endDate || ""}
                    </TinyText>
                  )}
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </div>
  );
}

export default NoirPreview;