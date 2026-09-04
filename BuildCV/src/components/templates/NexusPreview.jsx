import React from "react";

function NexusPreview({ formData = {}, data = {} }) {
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
  // SMALL COMPONENTS
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

  const ResumeLines = ({
    description,
    count = 4,
  }) => {
    const lines = getDescriptionLines(description);

    // Real description
    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-2 text-[4.5px] leading-[1.55] text-slate-600"
            >
              <span className="absolute left-0 top-[3px] h-[2px] w-[2px] rounded-full bg-blue-400" />
              {line}
            </li>
          ))}
        </ul>
      );
    }

    // Fallback description
    return (
      <ul className="space-y-1.5">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="relative pl-2 text-[4.5px] leading-[1.55] text-slate-400"
          >
            <span className="absolute left-0 top-[3px] h-[2px] w-[2px] rounded-full bg-blue-200" />
            Professional responsibility or technical achievement
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
    : ["React", "Next.js", "Node", "Git"];

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Engineer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built scalable interfaces and collaborated with teams to deliver reliable digital products.",
        },
      ];

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description:
            "Resume builder and professional digital product.",
        },
        {
          name: "Analytics",
          description:
            "Data-focused interface and analytics experience.",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "Frontend Engineer";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-full bg-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="px-6 pt-6">
        <div className="flex items-center justify-between">
          <div>
            {/* Name */}

            <div className="text-[17px] font-black text-[#123b72]">
              {displayName.toUpperCase()}
            </div>

            {/* Job Title */}

            <div className="mt-1 text-[5px] font-bold tracking-[0.2em] text-blue-600">
              {displayJobTitle.toUpperCase()}
            </div>
          </div>

          {/* Nexus Accent */}

          <div className="h-8 w-8 rounded-lg bg-blue-600" />
        </div>

        {/* Featured Skills */}

        <div className="mt-5 grid grid-cols-3 gap-2">
          {displaySkills.slice(0, 3).map((skill, index) => {
            const skillName = getSkillName(skill);

            return (
              <div
                key={`${skillName}-${index}`}
                className="rounded-lg bg-blue-50 px-2 py-2 text-center text-[4px] font-bold text-blue-700"
              >
                {skillName || "Skill"}
              </div>
            );
          })}
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mt-5 grid grid-cols-[0.7fr_1.5fr]">
        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="bg-[#123b72] px-4 py-5 text-white">
          {/* Contact */}

          <div className="text-[5px] font-bold tracking-[0.15em] text-blue-200">
            CONTACT
          </div>

          <div className="mt-3 space-y-2 text-[4px] text-white/70">
            {personal.email && (
              <div>{personal.email}</div>
            )}

            {personal.phone && (
              <div>{personal.phone}</div>
            )}

            {personal.location && (
              <div>{personal.location}</div>
            )}

            {personal.linkedin && (
              <div>{personal.linkedin}</div>
            )}

            {!personal.email &&
              !personal.phone &&
              !personal.location &&
              !personal.linkedin && (
                <>
                  <div>email@example.com</div>
                  <div>Phone Number</div>
                  <div>Location</div>
                </>
              )}
          </div>

          {/* Skills */}

          <div className="mt-7 text-[5px] font-bold tracking-[0.15em] text-blue-200">
            SKILLS
          </div>

          <div className="mt-3 space-y-2">
            {displaySkills
              .slice(0, 10)
              .map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <div
                    key={`${skillName}-${index}`}
                    className="text-[4px] text-white"
                  >
                    {skillName || "Skill"}
                  </div>
                );
              })}
          </div>
        </aside>

        {/* =================================================
            MAIN
        ================================================= */}

        <main className="px-5 py-5">
          {/* Professional Summary */}

          <div className="text-[5px] font-bold tracking-[0.2em] text-blue-600">
            PROFESSIONAL SUMMARY
          </div>

          <TinyText className="mt-2">
            {personal.summary ||
              "Product-focused frontend engineer creating scalable interfaces and thoughtful user experiences."}
          </TinyText>

          {/* Experience */}

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-blue-600">
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
                  ]);

                  return (
                    <div key={index}>
                      <div className="text-[6px] font-bold text-slate-900">
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

                      <div className="mt-2">
                        <ResumeLines
                          description={description}
                          count={4}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>

          {/* Projects */}

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-blue-600">
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

                  const description = getValue(
                    project,
                    [
                      "description",
                      "details",
                      "summary",
                    ]
                  );

                  return (
                    <div
                      key={`${projectName}-${index}`}
                      className="rounded-lg border border-blue-100 p-2"
                    >
                      <div className="text-[5px] font-bold text-slate-900">
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

export default NexusPreview;