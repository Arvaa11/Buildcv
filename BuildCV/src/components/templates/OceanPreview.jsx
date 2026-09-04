import React from "react";

function OceanPreview({ formData = {}, data = {} }) {
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
    color = "text-slate-500",
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
    color = "bg-cyan-100",
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-2 text-[4.5px] leading-[1.55] text-slate-600"
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
            className="relative pl-2 text-[4.5px] leading-[1.55] text-slate-400"
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
  // FALLBACK DATA
  // =========================================================
  const displaySkills = skills.length
    ? skills
    : [
        "React",
        "JavaScript",
        "TypeScript",
        "Design Systems",
        "Git",
      ];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Building fast, accessible and reliable digital products.",
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

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description:
            "Professional resume builder and digital product.",
        },
        {
          name: "Dashboard",
          description:
            "Modern dashboard interface for managing digital data.",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "FRONTEND SPECIALIST";

  const displayLocation =
    personal.location || "Location";

  const displaySummary =
    personal.summary ||
    "Frontend specialist building fast, accessible and reliable digital products.";

  return (
    <div className="h-full bg-white">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="bg-[#082f49] px-6 py-6 text-white">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[17px] font-black">
              {displayName.toUpperCase()}
            </div>

            <div className="mt-1 text-[5px] font-semibold tracking-[0.22em] text-cyan-200">
              {displayJobTitle.toUpperCase()}
            </div>
          </div>

          <div className="text-right text-[4px] leading-[1.7] text-white/60">
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
                  <br />
                  LinkedIn
                </>
              )}
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}
      <div className="grid grid-cols-[0.72fr_1.5fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}
        <aside className="bg-[#e8f6fb] px-4 py-5">
          {/* EXPERTISE */}
          <div className="text-[5px] font-bold tracking-[0.18em] text-[#087ea4]">
            EXPERTISE
          </div>

          <div className="mt-3 space-y-2">
            {displaySkills.slice(0, 10).map((skill, index) => {
              const skillName = getSkillName(skill);

              return (
                <div
                  key={`${skillName}-${index}`}
                  className="rounded-lg bg-white px-2 py-2 text-[4px] font-semibold text-slate-700"
                >
                  {skillName || "Skill"}
                </div>
              );
            })}
          </div>

          {/* EDUCATION */}
          <div className="mt-8 text-[5px] font-bold tracking-[0.18em] text-[#087ea4]">
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
                  <TinyText>
                    {degree || "Bachelor of Computer Science"}
                  </TinyText>

                  {institution && (
                    <TinyText className="mt-1">
                      {institution}
                    </TinyText>
                  )}

                  {(startDate || endDate) && (
                    <TinyText className="mt-1">
                      {startDate || ""} — {endDate || ""}
                    </TinyText>
                  )}
                </div>
              );
            })}
          </div>
        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}
        <main className="px-5 py-5">
          {/* PROFESSIONAL PROFILE */}
          <div className="rounded-2xl bg-[#f0fafc] p-4">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#087ea4]">
              PROFESSIONAL PROFILE
            </div>

            <TinyText className="mt-2">
              {displaySummary}
            </TinyText>
          </div>

          {/* EXPERIENCE */}
          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#087ea4]">
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
                      <div className="flex items-center justify-between">
                        <div className="text-[6px] font-bold">
                          {jobTitle || "Frontend Developer"}
                        </div>

                        {(startDate || endDate) && (
                          <div className="text-[4px] text-slate-500">
                            {startDate || ""} —{" "}
                            {endDate || "Present"}
                          </div>
                        )}
                      </div>

                      <div className="mt-1 text-[4px] font-semibold text-[#087ea4]">
                        {company || "Company Name"}
                      </div>

                      <div className="mt-2">
                        <ResumeLines
                          description={description}
                          count={4}
                          color="bg-cyan-100"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>

          {/* PROJECTS */}
          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#087ea4]">
              PROJECTS
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {displayProjects
                .slice(0, 6)
                .map((project, index) => {
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
                    <div
                      key={`${projectName}-${index}`}
                      className="rounded-xl border border-cyan-100 p-3"
                    >
                      <div className="text-[6px] font-bold">
                        {projectName || "Project"}
                      </div>

                      <TinyText className="mt-1">
                        {description || "Selected project"}
                      </TinyText>
                    </div>
                  );
                })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default OceanPreview;