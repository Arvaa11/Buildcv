import React from "react";

/* =========================================================
   12. PORTFOLIO
========================================================= */

function PortfolioPreview({ formData = {}, data = {} }) {
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
  // SECTION TITLE
  // =========================================================
  const SectionTitle = ({
    children,
    color = "text-violet-700",
  }) => (
    <div
      className={`text-[5px] font-bold tracking-[0.2em] ${color}`}
    >
      {children}
    </div>
  );

  // =========================================================
  // SKILL PILL
  // =========================================================
  const SkillPill = ({ children }) => (
    <span className="rounded-full bg-violet-50 px-2 py-1 text-[3.5px] font-bold text-violet-700">
      {children}
    </span>
  );

  // =========================================================
  // PROFILE PHOTO
  // =========================================================
  const PhotoCircle = () => {
    const initials =
      personal.fullName
        ?.trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "AK";

    return (
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-violet-200 ring-2 ring-white">
        {personal.profileImage ? (
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[9px] font-black text-violet-700">
            {initials}
          </div>
        )}
      </div>
    );
  };

  // =========================================================
  // FALLBACK DATA
  // =========================================================
  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description:
            "A modern digital product showcasing development and design.",
        },
        {
          name: "Portfolio",
          description:
            "A personal portfolio designed to showcase creative work and technical skills.",
        },
        {
          name: "Dashboard",
          description:
            "A modern dashboard interface for managing digital information.",
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
            "Building thoughtful digital products and modern user experiences.",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : ["React", "JS", "TS", "Git", "Figma"];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "FRONTEND DEVELOPER";

  const displayTagline =
    personal.summary ||
    "Building thoughtful digital products.";

  const displayAbout =
    personal.summary ||
    "Developer passionate about clean interfaces, thoughtful UX and modern technologies.";

  return (
    <div className="h-full bg-white">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="relative overflow-hidden bg-violet-50 px-6 py-5">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-200" />

        <div className="relative flex items-center gap-4">
          <PhotoCircle />

          <div>
            <div className="text-[13px] font-black text-slate-900">
              {displayName.toUpperCase()}
            </div>

            <div className="mt-1 text-[5px] font-semibold text-violet-700">
              {displayJobTitle.toUpperCase()}
            </div>

            <TinyText className="mt-2">
              {displayTagline}
            </TinyText>
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <div className="grid grid-cols-[1.45fr_0.75fr] gap-5 px-5 py-5">
        {/* ===================================================
            PROJECTS
        =================================================== */}
        <main>
          <SectionTitle color="text-violet-700">
            SELECTED PROJECTS
          </SectionTitle>

          <div className="mt-3 space-y-3">
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
                    className="rounded-xl border border-slate-200 p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="text-[7px] font-extrabold">
                        {projectName || "Project"}
                      </div>

                      <span className="rounded-full bg-violet-50 px-2 py-1 text-[3.5px] font-bold text-violet-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <TinyText className="mt-2">
                      {description ||
                        "A modern digital product showcasing development and design."}
                    </TinyText>
                  </div>
                );
              })}
          </div>
        </main>

        {/* ===================================================
            SIDEBAR
        =================================================== */}
        <aside className="border-l border-slate-200 pl-4">
          {/* ABOUT */}
          <SectionTitle color="text-violet-700">
            ABOUT
          </SectionTitle>

          <TinyText className="mt-3">
            {displayAbout}
          </TinyText>

          {/* EXPERIENCE */}
          <div className="mt-7">
            <SectionTitle color="text-violet-700">
              EXPERIENCE
            </SectionTitle>

            <div className="mt-3 space-y-4">
              {displayExperience
                .slice(0, 3)
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

                  return (
                    <div key={index}>
                      <div className="text-[5px] font-bold">
                        {jobTitle || "Frontend Developer"}
                      </div>

                      <TinyText className="mt-1">
                        {company || "Company Name"}
                      </TinyText>

                      {(startDate || endDate) && (
                        <TinyText className="mt-1 text-violet-600">
                          {startDate || ""} —{" "}
                          {endDate || "Present"}
                        </TinyText>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>

          {/* SKILLS */}
          <div className="mt-7">
            <SectionTitle color="text-violet-700">
              SKILLS
            </SectionTitle>

            <div className="mt-3 flex flex-wrap gap-1">
              {displaySkills
                .slice(0, 10)
                .map((skill, index) => {
                  const skillName = getSkillName(skill);

                  return (
                    <SkillPill key={`${skillName}-${index}`}>
                      {skillName || "Skill"}
                    </SkillPill>
                  );
                })}
            </div>
          </div>

          {/* CONTACT */}
          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin) && (
            <div className="mt-7">
              <SectionTitle color="text-violet-700">
                CONTACT
              </SectionTitle>

              <TinyText className="mt-3 space-y-1">
                {personal.email && (
                  <span className="block">
                    {personal.email}
                  </span>
                )}

                {personal.phone && (
                  <span className="block">
                    {personal.phone}
                  </span>
                )}

                {personal.location && (
                  <span className="block">
                    {personal.location}
                  </span>
                )}

                {personal.linkedin && (
                  <span className="block">
                    {personal.linkedin}
                  </span>
                )}
              </TinyText>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default PortfolioPreview;