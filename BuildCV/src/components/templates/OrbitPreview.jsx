import React from "react";

function OrbitPreview({ formData = {}, data = {} }) {
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
    count = 2,
    color = "bg-white/10",
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-2 text-[4.5px] leading-[1.55] text-white/50"
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
    ring = "ring-cyan-300",
    background = "bg-cyan-100",
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
        className={`${
          large ? "h-12 w-12" : "h-10 w-10"
        } overflow-hidden rounded-full ${background} ring-2 ${ring}`}
      >
        {personal.profileImage ? (
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[8px] font-bold text-slate-900">
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
    : ["React", "TypeScript", "Node", "Figma"];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built modern interfaces and delivered reliable digital products.",
        },
        {
          jobTitle: "Junior Developer",
          company: "Company Name",
          startDate: "2022",
          endDate: "2024",
          description:
            "Worked on frontend features and collaborated with development teams.",
        },
      ];

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Computer Science",
          institution: "",
          startDate: "2021",
          endDate: "",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "PRODUCT ENGINEER";

  const displayLocation =
    personal.location || "Location";

  return (
    <div className="h-full bg-slate-950 text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="relative overflow-hidden px-6 py-6">
        <div className="absolute right-[-25px] top-[-25px] h-28 w-28 rounded-full border border-cyan-400/30">
          <div className="absolute inset-3 rounded-full border border-cyan-400/20" />

          <div className="absolute inset-8 rounded-full bg-cyan-400" />
        </div>

        <div className="relative">
          <PhotoCircle
            large
            ring="ring-cyan-300"
            background="bg-cyan-100"
          />

          <div className="mt-4 text-[16px] font-black">
            {displayName.toUpperCase()}
          </div>

          <div className="mt-1 font-mono text-[5px] tracking-[0.2em] text-cyan-300">
            {displayJobTitle.toUpperCase()}
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}
      <main className="px-6 py-4">
        <div className="grid grid-cols-[1.45fr_0.7fr] gap-5">
          {/* =================================================
              CAREER ORBIT
          ================================================= */}
          <section>
            <div className="font-mono text-[5px] font-bold text-cyan-300">
              CAREER ORBIT
            </div>

            <div className="relative mt-4 border-l border-cyan-400/30 pl-5">
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

                  const year =
                    startDate ||
                    endDate ||
                    `${2024 - index}`;

                  return (
                    <div
                      key={index}
                      className="relative mb-5"
                    >
                      <div className="absolute -left-[25px] top-0 h-3 w-3 rounded-full border border-cyan-300 bg-slate-950" />

                      <div className="font-mono text-[4px] text-cyan-300">
                        {year}
                      </div>

                      <div className="mt-1 text-[6px] font-bold">
                        {jobTitle || "Frontend Developer"}
                      </div>

                      {company && (
                        <div className="mt-1 text-[4px] text-white/40">
                          {company}

                          {endDate && (
                            <>
                              {" "}
                              • {endDate}
                            </>
                          )}
                        </div>
                      )}

                      <div className="mt-2">
                        <ResumeLines
                          description={description}
                          count={2}
                          color="bg-white/10"
                        />
                      </div>
                    </div>
                  );
                })}

              {/* EDUCATION ON THE CAREER ORBIT */}
              {displayEducation
                .slice(0, 2)
                .map((item, index) => {
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
                    <div
                      key={`education-${index}`}
                      className="relative mb-5"
                    >
                      <div className="absolute -left-[25px] top-0 h-3 w-3 rounded-full border border-cyan-300 bg-slate-950" />

                      <div className="font-mono text-[4px] text-cyan-300">
                        {startDate ||
                          endDate ||
                          "Education"}
                      </div>

                      <div className="mt-1 text-[6px] font-bold">
                        {degree || "Computer Science"}
                      </div>

                      {institution && (
                        <div className="mt-1 text-[4px] text-white/40">
                          {institution}
                        </div>
                      )}

                      {(startDate || endDate) && (
                        <TinyText className="mt-1">
                          {startDate || ""} —{" "}
                          {endDate || ""}
                        </TinyText>
                      )}
                    </div>
                  );
                })}
            </div>
          </section>

          {/* =================================================
              SIDEBAR
          ================================================= */}
          <aside>
            {/* SKILLS */}
            <div className="font-mono text-[5px] font-bold text-cyan-300">
              SKILLS
            </div>

            <div className="mt-4 space-y-2">
              {displaySkills
                .slice(0, 10)
                .map((skill, index) => {
                  const skillName = getSkillName(skill);

                  return (
                    <div
                      key={`${skillName}-${index}`}
                      className="rounded-lg border border-white/10 px-3 py-2 text-[4px]"
                    >
                      {skillName || "Skill"}
                    </div>
                  );
                })}
            </div>

            {/* CONTACT */}
            <div className="mt-7 font-mono text-[5px] text-cyan-300">
              CONTACT
            </div>

            <TinyText
              className="mt-3"
              color="text-white/50"
            >
              {personal.email && (
                <>
                  {personal.email}
                  <br />
                </>
              )}

              {personal.phone && (
                <>
                  {personal.phone}
                  <br />
                </>
              )}

              {displayLocation}

              {personal.linkedin && (
                <>
                  <br />
                  {personal.linkedin}
                </>
              )}

              {!personal.email &&
                !personal.phone &&
                !personal.location &&
                !personal.linkedin && (
                  <>
                    email@example.com
                    <br />
                    Rawalpindi
                  </>
                )}
            </TinyText>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default OrbitPreview;