import React from "react";

function VertexPreview({ formData = {}, data = {} }) {
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
    count = 3,
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
              <span className="absolute left-0 top-[3px] h-[2px] w-[2px] rounded-full bg-cyan-400" />
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
            <span className="absolute left-0 top-[3px] h-[2px] w-[2px] rounded-full bg-slate-300" />
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
    : ["React", "TypeScript", "Node.js", "Git"];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built performant interfaces, reusable components and modern web applications.",
        },
      ];

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description: "Resume builder platform",
        },
        {
          name: "AI Platform",
          description: "AI-powered digital product",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "DIGITAL ENGINEER";

  const displaySummary =
    personal.summary ||
    "Frontend developer focused on performant interfaces, design systems and modern architecture.";

  return (
    <div className="h-full bg-[#f7fbfc]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="relative overflow-hidden bg-slate-950 px-5 py-6 text-white">
        <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-cyan-400/40" />

        <div className="relative flex items-center gap-4">
          {/* Geometric Vertex Mark */}
          <div className="h-14 w-14 rotate-45 border-2 border-cyan-300 p-2">
            <div className="h-full w-full -rotate-45 bg-cyan-100" />
          </div>

          <div>
            <div className="text-[14px] font-black">
              {displayName.toUpperCase()}
            </div>

            <div className="mt-1 font-mono text-[4px] tracking-[0.2em] text-cyan-300">
              {displayJobTitle
                .toUpperCase()
                .replace(/\s+/g, "_")}
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          BODY
      ===================================================== */}
      <div className="grid grid-cols-[0.75fr_1.5fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}
        <aside className="border-r border-cyan-100 bg-white px-4 py-5">
          {/* SYSTEM / SKILLS */}
          <div className="font-mono text-[5px] font-bold text-cyan-700">
            SYSTEM
          </div>

          <div className="mt-4 space-y-2">
            {displaySkills
              .slice(0, 10)
              .map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <div
                    key={`${skillName}-${index}`}
                    className="border-l-2 border-cyan-400 bg-cyan-50 px-2 py-2 font-mono text-[4px] font-bold"
                  >
                    {skillName || "Skill"}
                  </div>
                );
              })}
          </div>

          {/* CONNECT */}
          <div className="mt-8 font-mono text-[5px] font-bold text-cyan-700">
            CONNECT
          </div>

          <div className="mt-3">
            {personal.email ||
            personal.github ||
            personal.location ||
            personal.linkedin ||
            personal.phone ? (
              <TinyText>
                {personal.email && (
                  <>
                    {personal.email}
                    <br />
                  </>
                )}

                {personal.github && (
                  <>
                    {personal.github}
                    <br />
                  </>
                )}

                {personal.linkedin && (
                  <>
                    {personal.linkedin}
                    <br />
                  </>
                )}

                {personal.phone && (
                  <>
                    {personal.phone}
                    <br />
                  </>
                )}

                {personal.location && (
                  <>{personal.location}</>
                )}
              </TinyText>
            ) : (
              <TinyText>
                email@example.com
                <br />
                github.com/arwa
                <br />
                Rawalpindi
              </TinyText>
            )}
          </div>
        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}
        <main className="px-5 py-5">
          {/* PROFILE */}
          <div className="font-mono text-[5px] font-bold text-cyan-700">
            01 / PROFILE
          </div>

          <div className="mt-2 text-[7px] font-extrabold leading-tight">
            {personal.summary ? (
              personal.summary
            ) : (
              <>
                Building digital systems
                <br />
                with precision.
              </>
            )}
          </div>

          <TinyText className="mt-3">
            {displaySummary}
          </TinyText>

          {/* EXPERIENCE */}
          <section className="mt-6">
            <div className="font-mono text-[5px] font-bold text-cyan-700">
              02 / EXPERIENCE
            </div>

            <div className="mt-3 space-y-4">
              {displayExperience
                .slice(0, 5)
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
                      className="rounded-lg border border-cyan-100 bg-white p-3"
                    >
                      <div className="text-[6px] font-bold">
                        {jobTitle || "Frontend Developer"}
                      </div>

                      <TinyText className="mt-1">
                        {company || "Company Name"}

                        {(startDate || endDate) && (
                          <>
                            {" "}
                            • {startDate || ""} —{" "}
                            {endDate || "Present"}
                          </>
                        )}
                      </TinyText>

                      <div className="mt-2">
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

          {/* PROJECTS */}
          <section className="mt-5">
            <div className="font-mono text-[5px] font-bold text-cyan-700">
              03 / PROJECTS
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
                      className="border border-slate-200 p-2"
                    >
                      <div className="font-mono text-[5px] font-bold">
                        {projectName || "Project"}
                      </div>

                      {description && (
                        <TinyText className="mt-1">
                          {description}
                        </TinyText>
                      )}
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

export default VertexPreview;