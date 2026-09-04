import React from "react";

function TechPreview({ formData = {}, data = {} }) {
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
          jobTitle: "Frontend Engineer",
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
    personal.jobTitle || "FRONTEND ENGINEER";

  const displaySummary =
    personal.summary ||
    "Frontend engineer focused on performant interfaces, component systems and modern architecture.";

  return (
    <div className="h-full bg-[#f8fafc]">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="bg-slate-950 px-6 py-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-mono text-[15px] font-bold">
              {displayName
                .toUpperCase()
                .replace(/\s+/g, "_")}
            </div>

            <div className="mt-1 font-mono text-[4px] text-cyan-300">
              {displayJobTitle
                .toUpperCase()
                .replace(/\s+/g, "_")}
            </div>
          </div>

          <div className="h-7 w-7 rounded-lg border border-cyan-400 bg-cyan-400/10" />
        </div>
      </header>

      {/* =====================================================
          BODY
      ===================================================== */}
      <div className="grid grid-cols-[0.7fr_1.5fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}
        <aside className="bg-slate-900 px-4 py-5 text-white">
          <div className="font-mono text-[5px] text-cyan-300">
            STACK
          </div>

          <div className="mt-4 space-y-2">
            {displaySkills
              .slice(0, 10)
              .map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <div
                    key={`${skillName}-${index}`}
                    className="rounded bg-white/5 px-2 py-2 font-mono text-[4px]"
                  >
                    {skillName || "Skill"}
                  </div>
                );
              })}
          </div>

          {/* CONTACT */}
          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="mt-7">
              <div className="font-mono text-[5px] text-cyan-300">
                CONTACT
              </div>

              <div className="mt-3 space-y-2">
                {personal.email && (
                  <TinyText color="text-white/60">
                    {personal.email}
                  </TinyText>
                )}

                {personal.phone && (
                  <TinyText color="text-white/60">
                    {personal.phone}
                  </TinyText>
                )}

                {personal.location && (
                  <TinyText color="text-white/60">
                    {personal.location}
                  </TinyText>
                )}

                {personal.linkedin && (
                  <TinyText color="text-white/60">
                    {personal.linkedin}
                  </TinyText>
                )}

                {personal.github && (
                  <TinyText color="text-white/60">
                    {personal.github}
                  </TinyText>
                )}
              </div>
            </div>
          )}
        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}
        <main className="px-5 py-5">
          {/* PROFILE */}
          <div className="font-mono text-[5px] text-cyan-700">
            // PROFILE
          </div>

          <TinyText className="mt-3">
            {displaySummary}
          </TinyText>

          {/* EXPERIENCE */}
          <section className="mt-6">
            <div className="font-mono text-[5px] text-cyan-700">
              // EXPERIENCE
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
                      className="rounded border border-cyan-100 bg-white p-3"
                    >
                      <div className="font-mono text-[5px] font-bold">
                        {jobTitle || "Frontend Engineer"}
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

          {/* PROJECTS */}
          <section className="mt-5">
            <div className="font-mono text-[5px] text-cyan-700">
              // PROJECTS
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
                      className="border border-slate-200 bg-white p-2"
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

export default TechPreview;