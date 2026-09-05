import React from "react";

function ModernPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Olivia Carter",
    jobTitle: "Frontend Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Frontend developer combining technology, design, and usability to create scalable digital products and effortless user experiences.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "Senior Frontend Developer",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description:
        "Built scalable React interfaces for customer-facing digital products.\nCollaborated with product and design teams to create accessible user experiences.\nImproved reusable component architecture and frontend performance.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Brightline Technologies",
      startDate: "2022",
      endDate: "2024",
      description:
        "Developed responsive web applications using React and TypeScript.\nTranslated design systems into consistent production-ready interfaces.\nIntegrated REST APIs and collaborated with backend developers.",
    },
    {
      jobTitle: "Junior Web Developer",
      company: "Studio North",
      startDate: "2020",
      endDate: "2022",
      description:
        "Created responsive websites using HTML, CSS, and JavaScript.\nWorked with designers to implement polished digital experiences.\nSupported debugging, testing, and continuous product improvements.",
    },
  ];

  const sampleSkills = [
    "React",
    "TypeScript",
    "JavaScript",
    "UI Design",
    "Figma",
    "Tailwind CSS",
    "Git & GitHub",
    "REST APIs",
    "Accessibility",
    "Responsive Design",
  ];

  const sampleEducation = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      startDate: "2016",
      endDate: "2020",
    },
    {
      degree: "UI/UX Design Certificate",
      institution: "Design Institute",
      startDate: "2019",
      endDate: "2020",
    },
  ];

  const sampleProjects = [
    {
      name: "BuildCV",
      title: "BuildCV",
      description:
        "A professional resume builder with live previews and customizable resume templates.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      name: "Analytics Dashboard",
      title: "Analytics Dashboard",
      description:
        "A responsive analytics interface that transforms business data into clear visual insights.",
      technologies: ["React", "TypeScript", "Charts"],
    },
    {
      name: "TaskFlow",
      title: "TaskFlow",
      description:
        "A clean productivity application for organizing projects, tasks, and daily workflows.",
      technologies: ["React", "CSS", "REST API"],
    },
  ];

  const sampleCertifications = [
    {
      name: "Meta Front-End Developer",
      issuer: "Meta",
      year: "2023",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022",
    },
    {
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2022",
    },
  ];

  const sampleLanguages = [
    {
      name: "English",
      level: "Native",
    },
    {
      name: "Spanish",
      level: "Professional",
    },
    {
      name: "French",
      level: "Conversational",
    },
  ];

  const sampleAchievements = [
    {
      title: "Frontend Excellence",
      description:
        "Created reusable interface patterns that improved consistency across multiple digital products.",
    },
    {
      title: "Design System",
      description:
        "Helped establish a scalable component system for product teams.",
    },
    {
      title: "Developer Mentoring",
      description:
        "Supported junior developers through code reviews and collaborative development.",
    },
  ];

  const sampleInterests = [
    "Web Design",
    "Open Source",
    "Photography",
    "Technology",
    "Reading",
    "Travel",
  ];

  const sampleReferences = [
    {
      name: "James Wilson",
      position: "Product Manager",
      company: "Northstar Digital",
      email: "james.wilson@example.com",
    },
    {
      name: "Sophia Bennett",
      position: "Engineering Manager",
      company: "Brightline Technologies",
      email: "sophia.bennett@example.com",
    },
  ];

  // =========================================================
  // PERSONAL DATA
  // =========================================================

  const personal = useSampleData
    ? {
        ...samplePersonal,
        ...(data.personal || {}),
        ...(formData.personal || {}),
      }
    : {
        fullName: "",
        jobTitle: "",
        email: "",
        phone: "",
        location: "",
        linkedin: "",
        github: "",
        summary: "",
        profileImage: "",
        ...(formData.personal || {}),
      };

  // =========================================================
  // ARRAY DATA
  // =========================================================

  const experience = useSampleData
    ? Array.isArray(formData.experience) &&
      formData.experience.length > 0
      ? formData.experience
      : Array.isArray(data.experience) &&
        data.experience.length > 0
      ? data.experience
      : sampleExperience
    : Array.isArray(formData.experience)
    ? formData.experience
    : [];

  const skills = useSampleData
    ? Array.isArray(formData.skills) &&
      formData.skills.length > 0
      ? formData.skills
      : Array.isArray(data.skills) &&
        data.skills.length > 0
      ? data.skills
      : sampleSkills
    : Array.isArray(formData.skills)
    ? formData.skills
    : [];

  const education = useSampleData
    ? Array.isArray(formData.education) &&
      formData.education.length > 0
      ? formData.education
      : Array.isArray(data.education) &&
        data.education.length > 0
      ? data.education
      : sampleEducation
    : Array.isArray(formData.education)
    ? formData.education
    : [];

  const projects = useSampleData
    ? Array.isArray(formData.projects) &&
      formData.projects.length > 0
      ? formData.projects
      : Array.isArray(data.projects) &&
        data.projects.length > 0
      ? data.projects
      : sampleProjects
    : Array.isArray(formData.projects)
    ? formData.projects
    : [];

  const certifications = useSampleData
    ? Array.isArray(formData.certifications) &&
      formData.certifications.length > 0
      ? formData.certifications
      : Array.isArray(data.certifications) &&
        data.certifications.length > 0
      ? data.certifications
      : sampleCertifications
    : Array.isArray(formData.certifications)
    ? formData.certifications
    : [];

  const languages = useSampleData
    ? Array.isArray(formData.languages) &&
      formData.languages.length > 0
      ? formData.languages
      : Array.isArray(data.languages) &&
        data.languages.length > 0
      ? data.languages
      : sampleLanguages
    : Array.isArray(formData.languages)
    ? formData.languages
    : [];

  const achievements = useSampleData
    ? Array.isArray(formData.achievements) &&
      formData.achievements.length > 0
      ? formData.achievements
      : Array.isArray(data.achievements) &&
        data.achievements.length > 0
      ? data.achievements
      : sampleAchievements
    : Array.isArray(formData.achievements)
    ? formData.achievements
    : [];

  const interests = useSampleData
    ? Array.isArray(formData.interests) &&
      formData.interests.length > 0
      ? formData.interests
      : Array.isArray(data.interests) &&
        data.interests.length > 0
      ? data.interests
      : sampleInterests
    : Array.isArray(formData.interests)
    ? formData.interests
    : [];

  const references = useSampleData
    ? Array.isArray(formData.references) &&
      formData.references.length > 0
      ? formData.references
      : Array.isArray(data.references) &&
        data.references.length > 0
      ? data.references
      : sampleReferences
    : Array.isArray(formData.references)
    ? formData.references
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
      return description
        .map((line) => String(line).trim())
        .filter(Boolean);
    }

    return String(description)
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
  };

  // =========================================================
  // VALID DATA
  // =========================================================

  const validExperience = experience.filter((item) =>
    getValue(item, [
      "jobTitle",
      "title",
      "position",
      "role",
      "company",
      "companyName",
      "organization",
      "description",
      "details",
      "responsibilities",
    ])
  );

  const validEducation = education.filter((item) =>
    getValue(item, [
      "degree",
      "program",
      "qualification",
      "title",
      "institution",
      "university",
      "school",
      "college",
    ])
  );

  const validProjects = projects.filter((item) =>
    getValue(item, [
      "name",
      "title",
      "projectName",
      "description",
    ])
  );

  const validCertifications = certifications.filter((item) =>
    getValue(item, [
      "name",
      "title",
      "certificate",
      "certification",
      "issuer",
    ])
  );

  const validLanguages = languages.filter((item) =>
    getValue(item, [
      "name",
      "language",
      "title",
    ])
  );

  const validAchievements = achievements.filter((item) =>
    getValue(item, [
      "title",
      "name",
      "achievement",
      "description",
    ])
  );

  const validReferences = references.filter((item) =>
    getValue(item, [
      "name",
      "fullName",
      "person",
      "position",
      "company",
      "email",
    ])
  );

  const validInterests = interests.filter((item) => {
    if (typeof item === "string") {
      return item.trim() !== "";
    }

    return Boolean(
      getValue(item, [
        "name",
        "interest",
        "title",
        "label",
      ])
    );
  });

  const finalSkills = skills
    .map(getSkillName)
    .filter(Boolean);

  // =========================================================
  // SMALL COMPONENTS
  // =========================================================

  const TinyText = ({
    children,
    className = "",
    color = "text-slate-500",
  }) => {
    if (
      children === undefined ||
      children === null ||
      String(children).trim() === ""
    ) {
      return null;
    }

    return (
      <p
        className={`text-[10px] leading-[1.6] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  const SectionTitle = ({
    children,
    color = "text-indigo-700",
  }) => (
    <div
      className={`text-[11px] font-bold tracking-[0.2em] ${color}`}
    >
      {children}
    </div>
  );

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-2">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-600"
            >
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-indigo-400" />
              {line}
            </li>
          ))}
        </ul>
      );
    }

    if (!useSampleData) {
      return null;
    }

    return (
      <ul className="space-y-2">
        {Array.from({ length: count }).map(
          (_, index) => (
            <li
              key={index}
              className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-400"
            >
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-indigo-300" />
              Professional responsibility or achievement
            </li>
          )
        )}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-indigo-200",
    background = "bg-indigo-50",
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

    if (!useSampleData) {
      return null;
    }

    const initials = (personal.fullName || "YN")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-2 ${ring} ${background}`}
      >
        <span className="text-[11px] font-black text-indigo-600">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-slate-50 font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative overflow-hidden bg-white px-[52px] py-[48px]">
        {/* Decorative Circle */}

        <div className="absolute right-[-55px] top-[-55px] h-44 w-44 rounded-full bg-indigo-100" />

        <div className="relative flex items-center gap-5">
          <PhotoCircle
            ring="ring-indigo-200"
            background="bg-indigo-50"
          />

          <div>
            {/* Name */}

            {personal.fullName && (
              <div className="text-[36px] font-black leading-none text-slate-900">
                {personal.fullName.toUpperCase()}
              </div>
            )}

            {/* Job Title */}

            {personal.jobTitle && (
              <div className="mt-3 text-[13px] font-bold tracking-[0.2em] text-indigo-600">
                {personal.jobTitle.toUpperCase()}
              </div>
            )}

            {/* Contact */}

            {(personal.email ||
              personal.phone ||
              personal.location) && (
              <div className="mt-3 text-[9.5px] leading-[1.5] text-slate-400">
                {[
                  personal.email,
                  personal.phone,
                  personal.location,
                ]
                  .filter(Boolean)
                  .join(" • ")}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="px-[52px] py-[40px]">
        <div className="grid grid-cols-[1.5fr_0.7fr] gap-8">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div>
            {/* Profile Card */}

            {personal.summary && (
              <div className="rounded-2xl bg-indigo-600 p-6 text-white">
                <div className="text-[11px] font-bold tracking-[0.2em] text-indigo-200">
                  PROFILE
                </div>

                <div className="mt-3 text-[22px] font-extrabold leading-[1.2]">
                  {personal.summary}
                </div>
              </div>
            )}

            {/* Experience */}

            {validExperience.length > 0 && (
              <section
                className={
                  personal.summary ? "mt-8" : "mt-1"
                }
              >
                <SectionTitle color="text-indigo-700">
                  EXPERIENCE
                </SectionTitle>

                <div className="mt-5 space-y-6">
                  {validExperience
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
                        <div
                          key={index}
                          className="rounded-xl bg-white p-5 shadow-sm"
                        >
                          {jobTitle && (
                            <div className="text-[12px] font-bold leading-tight text-slate-900">
                              {jobTitle}
                            </div>
                          )}

                          {(company ||
                            startDate ||
                            endDate) && (
                            <div className="mt-1.5 text-[9.5px] text-indigo-600">
                              {company}

                              {(startDate || endDate) && (
                                <>
                                  {company && " • "}
                                  {startDate || ""} —{" "}
                                  {endDate || "Present"}
                                </>
                              )}
                            </div>
                          )}

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
            )}

            {/* Projects */}

            {validProjects.length > 0 && (
              <section className="mt-8">
                <SectionTitle color="text-indigo-700">
                  PROJECTS
                </SectionTitle>

                <div className="mt-5 space-y-5">
                  {validProjects
                    .slice(0, 3)
                    .map((project, index) => {
                      const name = getValue(project, [
                        "name",
                        "title",
                        "projectName",
                      ]);

                      const description = getValue(
                        project,
                        ["description", "details"]
                      );

                      const technologies = getValue(
                        project,
                        [
                          "technologies",
                          "techStack",
                          "tools",
                        ]
                      );

                      const techText = Array.isArray(
                        technologies
                      )
                        ? technologies.join(" • ")
                        : technologies;

                      return (
                        <div key={index}>
                          {name && (
                            <div className="text-[11px] font-bold text-slate-900">
                              {name}
                            </div>
                          )}

                          {description && (
                            <TinyText className="mt-1.5">
                              {description}
                            </TinyText>
                          )}

                          {techText && (
                            <div className="mt-1.5 text-[8.5px] text-indigo-500">
                              {techText}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* Education */}

            {validEducation.length > 0 && (
              <section className="mt-8">
                <SectionTitle color="text-indigo-700">
                  EDUCATION
                </SectionTitle>

                <div className="mt-5 space-y-5">
                  {validEducation
                    .slice(0, 2)
                    .map((item, index) => {
                      const degree = getValue(item, [
                        "degree",
                        "program",
                        "qualification",
                        "title",
                      ]);

                      const institution = getValue(
                        item,
                        [
                          "institution",
                          "university",
                          "school",
                          "college",
                        ]
                      );

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
                          {degree && (
                            <div className="text-[11px] font-bold text-slate-900">
                              {degree}
                            </div>
                          )}

                          {(institution ||
                            startDate ||
                            endDate) && (
                            <TinyText className="mt-1.5">
                              {institution}

                              {(startDate || endDate) && (
                                <>
                                  {institution && " • "}
                                  {startDate || ""} —{" "}
                                  {endDate || "Present"}
                                </>
                              )}
                            </TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* Certifications */}

            {validCertifications.length > 0 && (
              <section className="mt-8">
                <SectionTitle color="text-indigo-700">
                  CERTIFICATIONS
                </SectionTitle>

                <div className="mt-5 space-y-4">
                  {validCertifications
                    .slice(0, 3)
                    .map((item, index) => {
                      const name = getValue(item, [
                        "name",
                        "title",
                        "certificate",
                        "certification",
                      ]);

                      const issuer = getValue(item, [
                        "issuer",
                        "organization",
                        "company",
                      ]);

                      const year = getValue(item, [
                        "year",
                        "date",
                        "issued",
                      ]);

                      return (
                        <div key={index}>
                          {name && (
                            <div className="text-[10px] font-semibold text-slate-900">
                              {name}
                            </div>
                          )}

                          {(issuer || year) && (
                            <TinyText className="mt-1">
                              {issuer}
                              {issuer && year && " • "}
                              {year}
                            </TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* Achievements */}

            {validAchievements.length > 0 && (
              <section className="mt-8">
                <SectionTitle color="text-indigo-700">
                  ACHIEVEMENTS
                </SectionTitle>

                <div className="mt-5 space-y-4">
                  {validAchievements
                    .slice(0, 3)
                    .map((item, index) => {
                      const title = getValue(item, [
                        "title",
                        "name",
                        "achievement",
                      ]);

                      const description = getValue(
                        item,
                        ["description", "details"]
                      );

                      return (
                        <div key={index}>
                          {title && (
                            <div className="text-[10px] font-semibold text-slate-900">
                              {title}
                            </div>
                          )}

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
            )}

            {/* References */}

            {validReferences.length > 0 && (
              <section className="mt-8">
                <SectionTitle color="text-indigo-700">
                  REFERENCES
                </SectionTitle>

                <div className="mt-5 grid grid-cols-2 gap-5">
                  {validReferences
                    .slice(0, 2)
                    .map((item, index) => {
                      const name = getValue(item, [
                        "name",
                        "fullName",
                        "person",
                      ]);

                      const position = getValue(item, [
                        "position",
                        "jobTitle",
                        "role",
                      ]);

                      const company = getValue(item, [
                        "company",
                        "organization",
                      ]);

                      const email = getValue(item, [
                        "email",
                        "contact",
                      ]);

                      return (
                        <div key={index}>
                          {name && (
                            <div className="text-[10px] font-semibold text-slate-900">
                              {name}
                            </div>
                          )}

                          {position && (
                            <TinyText className="mt-1">
                              {position}
                            </TinyText>
                          )}

                          {company && (
                            <TinyText>
                              {company}
                            </TinyText>
                          )}

                          {email && (
                            <TinyText>{email}</TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside>
            {/* Skills */}

            {finalSkills.length > 0 && (
              <div className="rounded-2xl bg-white p-5 shadow-sm">
                <SectionTitle color="text-indigo-700">
                  SKILLS
                </SectionTitle>

                <div className="mt-5 space-y-3">
                  {finalSkills
                    .slice(0, 10)
                    .map((skill, index) => (
                      <div
                        key={`${skill}-${index}`}
                        className="rounded-lg bg-indigo-50 px-3 py-2.5 text-[9.5px] font-semibold leading-tight text-indigo-700"
                      >
                        {skill}
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Contact */}

            {(personal.email ||
              personal.phone ||
              personal.location ||
              personal.linkedin ||
              personal.github) && (
              <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
                <SectionTitle color="text-indigo-700">
                  CONTACT
                </SectionTitle>

                <TinyText className="mt-4">
                  {personal.email}

                  {personal.phone && (
                    <>
                      {personal.email && <br />}
                      {personal.phone}
                    </>
                  )}

                  {personal.location && (
                    <>
                      {(personal.email ||
                        personal.phone) && <br />}
                      {personal.location}
                    </>
                  )}

                  {personal.linkedin && (
                    <>
                      {(personal.email ||
                        personal.phone ||
                        personal.location) && <br />}
                      {personal.linkedin}
                    </>
                  )}

                  {personal.github && (
                    <>
                      {(personal.email ||
                        personal.phone ||
                        personal.location ||
                        personal.linkedin) && <br />}
                      {personal.github}
                    </>
                  )}
                </TinyText>
              </div>
            )}

            {/* Languages */}

            {validLanguages.length > 0 && (
              <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
                <SectionTitle color="text-indigo-700">
                  LANGUAGES
                </SectionTitle>

                <div className="mt-5 space-y-3">
                  {validLanguages
                    .slice(0, 4)
                    .map((item, index) => {
                      const name =
                        typeof item === "string"
                          ? item
                          : getValue(item, [
                              "name",
                              "language",
                              "title",
                            ]);

                      const level =
                        typeof item === "string"
                          ? ""
                          : getValue(item, [
                              "level",
                              "proficiency",
                              "fluency",
                            ]);

                      return (
                        <div
                          key={index}
                          className="text-[10px] text-slate-600"
                        >
                          <span className="font-semibold">
                            {name}
                          </span>

                          {level && (
                            <span className="text-slate-400">
                              {" "}
                              • {level}
                            </span>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Interests */}

            {validInterests.length > 0 && (
              <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm">
                <SectionTitle color="text-indigo-700">
                  INTERESTS
                </SectionTitle>

                <div className="mt-5 flex flex-wrap gap-2">
                  {validInterests
                    .slice(0, 6)
                    .map((item, index) => {
                      const name =
                        typeof item === "string"
                          ? item
                          : getValue(item, [
                              "name",
                              "interest",
                              "title",
                              "label",
                            ]);

                      return (
                        <span
                          key={index}
                          className="rounded-full bg-indigo-50 px-3 py-1.5 text-[9px] font-medium text-indigo-600"
                        >
                          {name}
                        </span>
                      );
                    })}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}

export default ModernPreview;