import React from "react";

function ProfessionalPreview({ formData = {}, data = {} }) {
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
  const SectionTitle = ({ children }) => (
    <div className="text-[5px] font-bold tracking-[0.18em] text-slate-900">
      {children}
    </div>
  );

  // =========================================================
  // EXPERIENCE DESCRIPTION
  // =========================================================
  const ResumeLines = ({
    description,
    count = 4,
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
              <span className="absolute left-0 top-[3px] h-[2px] w-[2px] rounded-full bg-slate-400" />
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
  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Created scalable interfaces and modern web applications.",
        },
      ];

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
          startDate: "2021",
          endDate: "2025",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : [
        "React",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "SQL",
        "Git",
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================
  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "FRONTEND ENGINEER";

  const displaySummary =
    personal.summary ||
    "Results-driven frontend developer with experience creating scalable interfaces and modern web applications.";

  return (
    <div className="h-full bg-white px-6 py-6">
      {/* =====================================================
          HEADER
      ===================================================== */}
      <header className="border-b-4 border-slate-900 pb-5">
        <div className="text-[18px] font-black">
          {displayName.toUpperCase()}
        </div>

        <div className="mt-1 text-[5px] font-semibold tracking-[0.18em] text-slate-500">
          {displayJobTitle.toUpperCase()}
        </div>

        <div className="mt-3 flex flex-wrap gap-x-1 text-[4px] text-slate-500">
          {personal.email && (
            <span>{personal.email}</span>
          )}

          {personal.email && personal.phone && (
            <span>•</span>
          )}

          {personal.phone && (
            <span>{personal.phone}</span>
          )}

          {(personal.email || personal.phone) &&
            personal.location && <span>•</span>}

          {personal.location && (
            <span>{personal.location}</span>
          )}

          {personal.linkedin && (
            <>
              <span>•</span>
              <span>{personal.linkedin}</span>
            </>
          )}

          {!personal.email &&
            !personal.phone &&
            !personal.location &&
            !personal.linkedin && (
              <>
                <span>email@example.com</span>
                <span>•</span>
                <span>+92 300 0000000</span>
                <span>•</span>
                <span>Rawalpindi</span>
                <span>•</span>
                <span>LinkedIn</span>
              </>
            )}
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}
      <main className="mt-5">
        {/* PROFESSIONAL SUMMARY */}
        <section>
          <SectionTitle>
            PROFESSIONAL SUMMARY
          </SectionTitle>

          <TinyText className="mt-3">
            {displaySummary}
          </TinyText>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="mt-6">
          <SectionTitle>
            PROFESSIONAL EXPERIENCE
          </SectionTitle>

          <div className="mt-3 space-y-5">
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
                  <div key={index}>
                    <div className="flex justify-between">
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

                    <div className="mt-1 text-[4px] font-semibold text-indigo-600">
                      {company || "Company Name"}
                    </div>

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

        {/* EDUCATION */}
        <section className="mt-6">
          <SectionTitle>EDUCATION</SectionTitle>

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
                    <div className="text-[6px] font-bold">
                      {degree ||
                        "Bachelor of Computer Science"}
                    </div>

                    <TinyText className="mt-1">
                      {institution ||
                        "University Name"}

                      {(startDate || endDate) && (
                        <>
                          {" "}
                          • {startDate || ""} —{" "}
                          {endDate || ""}
                        </>
                      )}
                    </TinyText>
                  </div>
                );
              })}
          </div>
        </section>

        {/* TECHNICAL SKILLS */}
        <section className="mt-6">
          <SectionTitle>
            TECHNICAL SKILLS
          </SectionTitle>

          <TinyText className="mt-3">
            {displaySkills
              .slice(0, 12)
              .map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <React.Fragment key={`${skillName}-${index}`}>
                    {index > 0 && " • "}
                    {skillName || "Skill"}
                  </React.Fragment>
                );
              })}
          </TinyText>
        </section>
      </main>
    </div>
  );
}

export default ProfessionalPreview;