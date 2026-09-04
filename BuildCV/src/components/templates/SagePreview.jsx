import React from "react";

function SagePreview({ formData = {}, data = {} }) {
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
    color = "bg-emerald-200",
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
    : ["React", "Product Design", "JavaScript", "Figma"];

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

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Creating useful, accessible and elegant digital experiences.",
        },
      ];

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description: "Digital product",
        },
        {
          name: "Portfolio",
          description: "Digital product",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "PRODUCT DEVELOPER";

  const displayLocation =
    personal.location || "Location";

  const displaySummary =
    personal.summary ||
    "Thoughtful product developer creating useful, accessible and elegant digital experiences.";

  return (
    <div className="h-full bg-[#fbfcf8] px-6 py-6">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="border-b-2 border-emerald-900 pb-5">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[17px] font-black text-emerald-950">
              {displayName.toUpperCase()}
            </div>

            <div className="mt-1 text-[5px] font-bold tracking-[0.22em] text-emerald-700">
              {displayJobTitle.toUpperCase()}
            </div>
          </div>

          <div className="text-right text-[4px] leading-[1.7] text-slate-500">
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
          CONTENT
      ===================================================== */}
      <div className="mt-5 grid grid-cols-[0.72fr_1.5fr] gap-5">
        {/* ===================================================
            SIDEBAR
        =================================================== */}
        <aside className="rounded-2xl bg-emerald-950 p-4 text-white">
          {/* SKILLS */}
          <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-300">
            SKILLS
          </div>

          <div className="mt-4 space-y-3">
            {displaySkills
              .slice(0, 10)
              .map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <div key={`${skillName}-${index}`}>
                    <div className="text-[4px]">
                      {skillName || "Skill"}
                    </div>

                    <div className="mt-1 h-[2px] rounded-full bg-white/20">
                      <div className="h-full w-4/5 rounded-full bg-emerald-300" />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* EDUCATION */}
          <div className="mt-8 text-[5px] font-bold tracking-[0.2em] text-emerald-300">
            EDUCATION
          </div>

          <div className="mt-3 space-y-4">
            {displayEducation
              .slice(0, 3)
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
                  <div key={index}>
                    <TinyText
                      color="text-white/60"
                    >
                      {degree ||
                        "Bachelor of Computer Science"}
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
                        color="text-emerald-200/60"
                      >
                        {startDate || ""} —{" "}
                        {endDate || ""}
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
        <main>
          {/* PROFILE */}
          <div className="rounded-2xl bg-emerald-50 p-4">
            <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-800">
              PROFILE
            </div>

            <TinyText className="mt-2">
              {displaySummary}
            </TinyText>
          </div>

          {/* EXPERIENCE */}
          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-800">
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
                    <div
                      key={index}
                      className="border-l-2 border-emerald-200 pl-4"
                    >
                      <div className="text-[6px] font-bold">
                        {jobTitle || "Frontend Developer"}
                      </div>

                      <div className="mt-1 text-[4px] text-emerald-700">
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
                          color="bg-emerald-200"
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>

          {/* SELECTED WORK */}
          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-800">
              SELECTED WORK
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
                      className="rounded-xl border border-emerald-100 bg-white p-3"
                    >
                      <div className="text-[5px] font-bold">
                        {projectName || "Project"}
                      </div>

                      <TinyText className="mt-1">
                        {description || "Digital product"}
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

export default SagePreview;