import React from "react";

function MusePreview({ formData = {}, data = {} }) {
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
      className={`text-[10px] leading-[1.55] ${color} ${className}`}
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
              className="relative pl-3 text-[9.5px] leading-[1.5] text-slate-600"
            >
              <span className="absolute left-0 top-[7px] h-[4px] w-[4px] rounded-full bg-orange-300" />
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
            className="relative pl-3 text-[9.5px] leading-[1.5] text-slate-400"
          >
            <span className="absolute left-0 top-[7px] h-[4px] w-[4px] rounded-full bg-orange-100" />
            Professional responsibility or creative achievement
          </li>
        ))}
      </ul>
    );
  };

  const SkillPill = ({
    children,
    dark = false,
  }) => (
    <span
      className={
        dark
          ? "rounded-full border border-orange-300/30 bg-white/10 px-3 py-1.5 text-[9px] font-semibold text-white"
          : "rounded-full bg-orange-100 px-3 py-1.5 text-[9px] font-semibold text-orange-700"
      }
    >
      {children}
    </span>
  );

  const PhotoCircle = ({
    large = false,
    ring = "ring-orange-300",
    background = "bg-orange-100",
  }) => {
    const size = large
      ? "h-16 w-16"
      : "h-14 w-14";

    // Real uploaded photo
    if (personal.profileImage) {
      return (
        <div
          className={`overflow-hidden rounded-full ${size} ring-2 ${ring}`}
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
        className={`flex items-center justify-center rounded-full ${size} ring-2 ${ring} ${background}`}
      >
        <span className="text-[16px] font-black text-orange-600">
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
            "Built engaging interfaces and created memorable digital experiences using modern frontend technologies.",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : ["Figma", "React", "Adobe", "GSAP"];

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description:
            "Visual identity and digital experience",
        },
        {
          name: "Brand Website",
          description:
            "Creative website design and development",
        },
        {
          name: "Portfolio",
          description:
            "Personal portfolio and digital experience",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const nameParts = (personal.fullName || "ARWA KHAN")
    .trim()
    .split(/\s+/);

  const firstName = nameParts[0] || "ARWA";

  const lastName =
    nameParts.slice(1).join(" ") || "KHAN";

  const displayJobTitle =
    personal.jobTitle || "Creative Developer";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-[#fffaf8] font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative px-[52px] py-[48px]">
        {/* Decorative Shape */}

        <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[90px] bg-orange-200" />

        <div className="relative">
          {/* Profile Photo */}

          <PhotoCircle
            large
            ring="ring-orange-300"
            background="bg-orange-100"
          />

          {/* Name */}

          <div className="mt-5 text-[38px] font-black leading-[0.92] text-slate-900">
            {firstName.toUpperCase()}
            <br />
            {lastName.toUpperCase()}
          </div>

          {/* Job Title */}

          <div className="mt-4 inline-block rounded-full bg-orange-500 px-4 py-2 text-[11px] font-bold tracking-wide text-white">
            {displayJobTitle.toUpperCase()}
          </div>
        </div>
      </header>

      {/* =====================================================
          TWO COLUMN CONTENT
      ===================================================== */}

      <div className="grid grid-cols-[0.72fr_1.55fr]">
        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="bg-slate-900 px-[34px] py-[40px] text-white">
          {/* About */}

          <div className="text-[11px] font-bold tracking-[0.2em] text-orange-300">
            ABOUT
          </div>

          <TinyText
            className="mt-4"
            color="text-white/60"
          >
            {personal.summary ||
              "Designer and developer turning ideas into memorable digital experiences."}
          </TinyText>

          {/* Tools */}

          <div className="mt-9 text-[11px] font-bold tracking-[0.2em] text-orange-300">
            TOOLS
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {displaySkills.slice(0, 10).map((skill, index) => {
              const skillName = getSkillName(skill);

              return (
                <SkillPill
                  key={`${skillName}-${index}`}
                  dark
                >
                  {skillName || "Skill"}
                </SkillPill>
              );
            })}
          </div>

          {/* Contact */}

          <div className="mt-10 text-[11px] font-bold tracking-[0.2em] text-orange-300">
            CONTACT
          </div>

          <TinyText
            className="mt-4"
            color="text-white/60"
          >
            {personal.email || "email@example.com"}

            {personal.phone && (
              <>
                <br />
                {personal.phone}
              </>
            )}

            {personal.location && (
              <>
                <br />
                {personal.location}
              </>
            )}

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
                  <br />
                  Location
                </>
              )}
          </TinyText>
        </aside>

        {/* =================================================
            MAIN
        ================================================= */}

        <main className="px-[40px] py-[40px]">
          {/* Selected Experience */}

          <div className="text-[11px] font-bold tracking-[0.2em] text-orange-600">
            SELECTED EXPERIENCE
          </div>

          <div className="mt-5 space-y-7">
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
                    <div className="text-[12px] font-black text-slate-900">
                      {jobTitle || "Frontend Developer"}
                    </div>

                    <div className="mt-1.5 text-[9.5px] text-orange-600">
                      {company || "Company Name"}

                      {(startDate || endDate) && (
                        <>
                          {" "}
                          • {startDate || ""} —{" "}
                          {endDate || "Present"}
                        </>
                      )}
                    </div>

                    <div className="mt-3">
                      <ResumeLines
                        description={description}
                        count={4}
                      />
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Creative Work */}

          <div className="mt-9 text-[11px] font-bold tracking-[0.2em] text-orange-600">
            CREATIVE WORK
          </div>

          <div className="mt-4 space-y-3">
            {displayProjects
              .slice(0, 5)
              .map((project, index) => {
                const projectName = getValue(project, [
                  "name",
                  "title",
                  "projectName",
                ]);

                const projectDescription = getValue(
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
                    className={`rounded-xl p-4 ${
                      index === 0
                        ? "bg-orange-100"
                        : "border border-orange-100 bg-white"
                    }`}
                  >
                    <div className="text-[10.5px] font-black text-slate-900">
                      {projectName || "Project"}
                    </div>

                    <TinyText className="mt-1.5">
                      {projectDescription ||
                        "Visual identity and digital experience"}
                    </TinyText>
                  </div>
                );
              })}
          </div>
        </main>
      </div>
    </div>
  );
}

export default MusePreview;