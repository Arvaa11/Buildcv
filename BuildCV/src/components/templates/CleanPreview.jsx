import React from "react";

function CleanPreview({ formData = {}, data = {} }) {
  // =========================================================
  // DATA
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

  // =========================================================
  // SMALL COMPONENTS
  // =========================================================

  const SectionTitle = ({ children }) => (
    <h2
      className="
        text-[11px]
        font-bold
        uppercase
        tracking-[0.16em]
        text-slate-400
      "
    >
      {children}
    </h2>
  );

  const TinyText = ({ children, className = "" }) => (
    <p
      className={`
        text-[10px]
        leading-[1.55]
        text-slate-500
        ${className}
      `}
    >
      {children}
    </p>
  );

  const ResumeLines = ({ description }) => {
    const lines = getDescriptionLines(description);

    if (!lines.length) {
      return (
        <ul className="mt-2 space-y-1.5 pl-4">
          <li className="text-[9.5px] leading-[1.5] text-slate-500">
            Built responsive interfaces and created polished digital
            experiences.
          </li>
          <li className="text-[9.5px] leading-[1.5] text-slate-500">
            Collaborated with teams to improve usability and performance.
          </li>
        </ul>
      );
    }

    return (
      <ul className="mt-2 space-y-1.5 pl-4">
        {lines.map((line, index) => (
          <li
            key={index}
            className="
              relative
              text-[9.5px]
              leading-[1.5]
              text-slate-500
            "
          >
            <span
              className="
                absolute
                -left-3
                top-[7px]
                h-[3px]
                w-[3px]
                rounded-full
                bg-slate-300
              "
            />

            {line}
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
    : ["React", "JavaScript", "CSS", "Git"];

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
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
            "Built responsive interfaces and created polished digital experiences.",
        },
        {
          jobTitle: "Junior Developer",
          company: "Company Name",
          startDate: "2022",
          endDate: "2024",
          description:
            "Worked on web development projects and collaborated with teams.",
        },
      ];

  const displayProjects = projects.length
    ? projects
    : [
        {
          name: "BuildCV",
          description: "Resume builder project",
        },
        {
          name: "Dashboard",
          description: "Web application dashboard",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const fullName =
    personal.fullName || "YOUR NAME";

  const jobTitle =
    personal.jobTitle || "Frontend Developer";

  const summary =
    personal.summary ||
    "Creative developer focused on building clean, responsive, and user-friendly digital experiences.";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className="
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-white
        px-[52px]
        py-[48px]
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          flex
          items-start
          justify-between
          gap-10
          border-b
          border-slate-200
          pb-7
        "
      >
        {/* LEFT */}
        <div className="min-w-0 flex-1">
          <h1
            className="
              text-[36px]
              font-bold
              uppercase
              leading-[1.05]
              tracking-[-0.03em]
              text-slate-900
            "
          >
            {fullName}
          </h1>

          <p
            className="
              mt-3
              text-[13px]
              font-medium
              uppercase
              tracking-[0.16em]
              text-slate-500
            "
          >
            {jobTitle}
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            w-[245px]
            shrink-0
            space-y-1.5
            pt-1
            text-right
          "
        >
          {personal.email && (
            <p className="truncate text-[9px] text-slate-500">
              {personal.email}
            </p>
          )}

          {personal.phone && (
            <p className="truncate text-[9px] text-slate-500">
              {personal.phone}
            </p>
          )}

          {personal.location && (
            <p className="truncate text-[9px] text-slate-500">
              {personal.location}
            </p>
          )}

          {personal.linkedin && (
            <p className="truncate text-[9px] text-slate-500">
              {personal.linkedin}
            </p>
          )}

          {personal.github && (
            <p className="truncate text-[9px] text-slate-500">
              {personal.github}
            </p>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          mt-8
          grid
          grid-cols-[0.68fr_1.5fr]
          gap-10
        "
      >
        {/* ===================================================
            LEFT SIDEBAR
        ==================================================== */}

        <aside className="space-y-8">
          {/* CONTACT */}
          <section>
            <SectionTitle>Contact</SectionTitle>

            <div className="mt-3 space-y-2">
              {personal.email && (
                <TinyText>{personal.email}</TinyText>
              )}

              {personal.phone && (
                <TinyText>{personal.phone}</TinyText>
              )}

              {personal.location && (
                <TinyText>{personal.location}</TinyText>
              )}

              {personal.linkedin && (
                <TinyText>{personal.linkedin}</TinyText>
              )}

              {personal.github && (
                <TinyText>{personal.github}</TinyText>
              )}

              {!personal.email &&
                !personal.phone &&
                !personal.location &&
                !personal.linkedin &&
                !personal.github && (
                  <>
                    <TinyText>email@example.com</TinyText>
                    <TinyText>+00 000 000 000</TinyText>
                    <TinyText>City, Country</TinyText>
                  </>
                )}
            </div>
          </section>

          {/* SKILLS */}
          <section>
            <SectionTitle>Skills</SectionTitle>

            <div className="mt-3 flex flex-wrap gap-2">
              {displaySkills.map((skill, index) => {
                const skillName = getSkillName(skill);

                if (!skillName) return null;

                return (
                  <span
                    key={index}
                    className="
                      rounded-md
                      border
                      border-slate-200
                      bg-slate-50
                      px-2.5
                      py-1.5
                      text-[9px]
                      font-medium
                      text-slate-600
                    "
                  >
                    {skillName}
                  </span>
                );
              })}
            </div>
          </section>

          {/* EDUCATION */}
          <section>
            <SectionTitle>Education</SectionTitle>

            <div className="mt-4 space-y-5">
              {displayEducation.map((item, index) => {
                const degree = getValue(item, [
                  "degree",
                  "title",
                  "qualification",
                ]);

                const institution = getValue(item, [
                  "institution",
                  "school",
                  "university",
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
                    <p
                      className="
                        text-[10.5px]
                        font-semibold
                        leading-[1.35]
                        text-slate-800
                      "
                    >
                      {degree || "Degree Name"}
                    </p>

                    {institution && (
                      <TinyText className="mt-1">
                        {institution}
                      </TinyText>
                    )}

                    {(startDate || endDate) && (
                      <p
                        className="
                          mt-1
                          text-[9px]
                          text-slate-400
                        "
                      >
                        {startDate}
                        {startDate && endDate ? " — " : ""}
                        {endDate}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        </aside>

        {/* ===================================================
            RIGHT MAIN COLUMN
        ==================================================== */}

        <div className="min-w-0 space-y-8">
          {/* PROFILE */}
          <section>
            <SectionTitle>Profile</SectionTitle>

            <p
              className="
                mt-4
                text-[10.5px]
                leading-[1.65]
                text-slate-500
              "
            >
              {summary}
            </p>
          </section>

          {/* EXPERIENCE */}
          <section>
            <SectionTitle>Experience</SectionTitle>

            <div className="mt-5 space-y-6">
              {displayExperience.map((item, index) => {
                const title = getValue(item, [
                  "jobTitle",
                  "position",
                  "role",
                  "title",
                ]);

                const company = getValue(item, [
                  "company",
                  "organization",
                  "employer",
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
                  <article key={index}>
                    <div
                      className="
                        flex
                        items-start
                        justify-between
                        gap-6
                      "
                    >
                      <div className="min-w-0">
                        <h3
                          className="
                            text-[12px]
                            font-semibold
                            leading-[1.3]
                            text-slate-800
                          "
                        >
                          {title || "Frontend Developer"}
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[9.5px]
                            font-medium
                            text-slate-400
                          "
                        >
                          {company || "Company Name"}
                        </p>
                      </div>

                      {(startDate || endDate) && (
                        <p
                          className="
                            shrink-0
                            pt-0.5
                            text-[9px]
                            text-slate-400
                          "
                        >
                          {startDate}
                          {startDate && endDate ? " — " : ""}
                          {endDate}
                        </p>
                      )}
                    </div>

                    <ResumeLines description={description} />
                  </article>
                );
              })}
            </div>
          </section>

          {/* PROJECTS */}
          <section>
            <SectionTitle>Projects</SectionTitle>

            <div className="mt-5 space-y-5">
              {displayProjects.map((project, index) => {
                const projectName = getValue(project, [
                  "name",
                  "title",
                  "projectName",
                ]);

                const projectDescription = getValue(project, [
                  "description",
                  "details",
                  "summary",
                ]);

                const projectLink = getValue(project, [
                  "link",
                  "url",
                  "projectUrl",
                ]);

                return (
                  <article key={index}>
                    <div className="flex items-start justify-between gap-5">
                      <h3
                        className="
                          text-[10.5px]
                          font-semibold
                          text-slate-800
                        "
                      >
                        {projectName || "Project Name"}
                      </h3>

                      {projectLink && (
                        <p
                          className="
                            max-w-[180px]
                            truncate
                            text-[8.5px]
                            text-slate-400
                          "
                        >
                          {projectLink}
                        </p>
                      )}
                    </div>

                    {projectDescription && (
                      <p
                        className="
                          mt-2
                          text-[9.5px]
                          leading-[1.55]
                          text-slate-500
                        "
                      >
                        {projectDescription}
                      </p>
                    )}

                    {!projectDescription && (
                      <p
                        className="
                          mt-2
                          text-[9.5px]
                          leading-[1.55]
                          text-slate-500
                        "
                      >
                        Web application project focused on creating a
                        clean and useful digital experience.
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default CleanPreview;