import React from "react";

function AtelierPreview({ formData = {}, data = {} }) {
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
    if (typeof skill === "string") return skill;

    return getValue(skill, [
      "name",
      "skill",
      "title",
      "label",
    ]);
  };

  const getDescriptionLines = (description) => {
    if (!description) return [];

    if (Array.isArray(description)) {
      return description.filter(Boolean);
    }

    return String(description)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  };

  const TinyText = ({
    children,
    className = "",
    color = "text-[#796b63]",
  }) => (
    <p
      className={`text-[4.5px] leading-[1.65] ${color} ${className}`}
    >
      {children}
    </p>
  );

  const ResumeLines = ({
    description,
    count = 3,
    color = "bg-[#d7c5b8]",
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-2 text-[4.5px] leading-[1.55] text-[#75665e]"
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
            className="relative pl-2 text-[4.5px] leading-[1.55] text-[#8b7c73]"
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

  const PhotoCircle = ({
    ring = "ring-[#caa993]",
    background = "bg-[#eadbd0]",
  }) => {
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

    return (
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-2 ${ring} ${background}`}
      >
        <span className="font-serif text-[8px] font-bold text-[#8a6250]">
          {(personal.fullName || "YN")
            .split(" ")
            .filter(Boolean)
            .slice(0, 2)
            .map((word) => word[0])
            .join("")
            .toUpperCase()}
        </span>
      </div>
    );
  };

  // =========================================================
  // FALLBACK DATA
  // =========================================================

  const displaySkills = skills.length
    ? skills
    : ["Figma", "React", "Adobe", "GSAP"];

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
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
            "Built responsive interfaces and created useful digital experiences.",
        },
      ];

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          title: "BuildCV",
          description: "Digital experience",
        },
        {
          name: "Portfolio",
          title: "Portfolio",
          description: "Digital experience",
        },
      ];

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-full bg-[#f7f3ee]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="px-6 py-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="font-serif text-[20px] font-bold tracking-[-0.04em] text-[#27221f]">
              {personal.fullName ? (
                personal.fullName
                  .split(" ")
                  .filter(Boolean)
                  .map((word, index) => (
                    <React.Fragment key={index}>
                      {word.toUpperCase()}
                      {index <
                        personal.fullName.split(" ").filter(Boolean)
                          .length -
                          1 && <br />}
                    </React.Fragment>
                  ))
              ) : (
                <>
                  YOUR
                  <br />
                  NAME
                </>
              )}
            </div>

            <div className="mt-3 text-[5px] font-semibold uppercase tracking-[0.25em] text-[#8a6250]">
              {personal.jobTitle || "Creative Developer"}
            </div>
          </div>

          <PhotoCircle
            ring="ring-[#caa993]"
            background="bg-[#eadbd0]"
          />
        </div>

        <div className="mt-5 h-px bg-[#cdb9aa]" />
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="px-6 pb-6">
        <div className="grid grid-cols-[0.72fr_1.5fr] gap-5">
          {/* =================================================
              LEFT SIDEBAR
          ================================================= */}

          <aside>
            {/* Contact */}

            <div className="font-serif text-[7px] font-bold text-[#493b34]">
              Contact
            </div>

            <TinyText className="mt-3">
              {personal.email || "email@example.com"}

              <br />

              {personal.phone || "+92 300 0000000"}

              <br />

              {personal.location || "Location"}

              {personal.linkedin && (
                <>
                  <br />
                  {personal.linkedin}
                </>
              )}
            </TinyText>

            {/* Tools */}

            <div className="mt-7 font-serif text-[7px] font-bold text-[#493b34]">
              Tools
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {displaySkills.slice(0, 8).map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <span
                    key={`${skillName}-${index}`}
                    className="rounded-full border border-[#cdb9aa] px-2 py-1 text-[3.5px] text-[#634e43]"
                  >
                    {skillName || "Skill"}
                  </span>
                );
              })}
            </div>

            {/* Education */}

            <div className="mt-7 font-serif text-[7px] font-bold text-[#493b34]">
              Education
            </div>

            <div className="mt-3 space-y-3">
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

                    <TinyText color="text-[#8a6250]">
                      {institution || "University Name"}

                      {(startDate || endDate) && (
                        <>
                          {" "}
                          • {startDate || ""} —{" "}
                          {endDate || "Present"}
                        </>
                      )}
                    </TinyText>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* =================================================
              RIGHT CONTENT
          ================================================= */}

          <main>
            {/* Intro Card */}

            <div className="rounded-2xl bg-[#e8ddd5] p-4">
              <div className="font-serif text-[8px] font-bold leading-tight text-[#342a25]">
                {personal.summary ? (
                  personal.summary
                ) : (
                  <>
                    Design meets
                    <br />
                    technology.
                  </>
                )}
              </div>

              <TinyText
                className="mt-3"
                color="text-[#75665e]"
              >
                {personal.summary
                  ? personal.summary
                  : "Developer crafting visual, useful and memorable digital experiences."}
              </TinyText>
            </div>

            {/* Experience */}

            <section className="mt-6">
              <div className="font-serif text-[7px] font-bold text-[#493b34]">
                Experience
              </div>

              <div className="mt-3 space-y-5 border-l border-[#caa993] pl-4">
                {displayExperience.slice(0, 4).map((item, index) => {
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
                      <div className="text-[6px] font-bold text-[#342a25]">
                        {jobTitle || "Frontend Developer"}
                      </div>

                      <div className="mt-1 text-[4px] text-[#8a6250]">
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
                          count={3}
                          color="bg-[#d7c5b8]"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Selected Work */}

            <section className="mt-6">
              <div className="font-serif text-[7px] font-bold text-[#493b34]">
                Selected Work
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2">
                {displayProjects.slice(0, 4).map((project, index) => {
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
                      key={index}
                      className="rounded-xl border border-[#d9c9be] bg-[#faf7f4] p-3"
                    >
                      <div className="font-serif text-[6px] font-bold text-[#342a25]">
                        {projectName || "Project"}
                      </div>

                      <TinyText className="mt-1">
                        {description || "Digital experience"}
                      </TinyText>
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </div>
      </main>
    </div>
  );
}

export default AtelierPreview;