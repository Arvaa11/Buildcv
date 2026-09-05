import React from "react";

function ExecutivePreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Olivia Carter",
    jobTitle: "Technology Executive",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Strategic technology leader focused on building scalable digital products, leading high-performing teams, and connecting technology decisions with meaningful business outcomes.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "VP of Product Engineering",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description:
        "Led cross-functional engineering initiatives and established product delivery standards.\nImproved collaboration between engineering, design, and product teams.\nGuided technical strategy for scalable customer-facing platforms.",
    },
    {
      jobTitle: "Engineering Director",
      company: "Vertex Labs",
      startDate: "2022",
      endDate: "2024",
      description:
        "Managed engineering teams delivering modern web applications.\nIntroduced development practices that improved reliability and maintainability.\nPartnered with leadership to translate business priorities into technical roadmaps.",
    },
    {
      jobTitle: "Senior Frontend Developer",
      company: "Brightline Technologies",
      startDate: "2020",
      endDate: "2022",
      description:
        "Designed and developed scalable React applications for enterprise users.\nWorked closely with UX teams to create accessible and intuitive interfaces.\nMentored developers and contributed to frontend architecture decisions.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Studio North",
      startDate: "2018",
      endDate: "2020",
      description:
        "Built responsive web experiences using modern JavaScript technologies.\nCollaborated with designers to turn product concepts into polished interfaces.\nSupported testing, debugging, and continuous product improvements.",
    },
  ];

  const sampleSkills = [
    "Technology Strategy",
    "Leadership",
    "Product Strategy",
    "Team Management",
    "React",
    "JavaScript",
    "UX Strategy",
    "Digital Transformation",
    "System Architecture",
    "Agile Delivery",
  ];

  const sampleEducation = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      startDate: "2016",
      endDate: "2018",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      startDate: "2012",
      endDate: "2016",
    },
  ];

  const sampleProjects = [
    {
      name: "Enterprise Platform",
      title: "Enterprise Platform",
      description:
        "A scalable digital platform designed to streamline business workflows and improve team productivity.",
      technologies: ["React", "Node.js", "PostgreSQL"],
    },
    {
      name: "Analytics Dashboard",
      title: "Analytics Dashboard",
      description:
        "A data-driven dashboard providing leadership teams with clear operational insights.",
      technologies: ["React", "TypeScript", "Charts"],
    },
    {
      name: "Design System",
      title: "Design System",
      description:
        "A reusable interface system that improved consistency across multiple digital products.",
      technologies: ["React", "CSS", "Storybook"],
    },
  ];

  const sampleCertifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
    },
    {
      name: "Professional Scrum Master",
      issuer: "Scrum.org",
      year: "2022",
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      year: "2021",
    },
  ];

  const sampleLanguages = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Professional" },
    { name: "French", level: "Conversational" },
  ];

  const sampleAchievements = [
    {
      title: "Digital Transformation",
      description:
        "Led modernization initiatives across multiple product teams.",
    },
    {
      title: "Engineering Leadership",
      description:
        "Built collaborative engineering practices around quality and delivery.",
    },
    {
      title: "Product Innovation",
      description:
        "Helped shape digital products around customer and business needs.",
    },
  ];

  const sampleInterests = [
    "Technology Strategy",
    "Product Design",
    "Leadership",
    "Digital Innovation",
    "Mentoring",
    "Photography",
  ];

  const sampleReferences = [
    {
      name: "James Wilson",
      position: "Chief Technology Officer",
      company: "Northstar Digital",
      email: "james.wilson@example.com",
    },
    {
      name: "Sophia Bennett",
      position: "VP of Product",
      company: "Vertex Labs",
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
    ? Array.isArray(formData.experience) && formData.experience.length > 0
      ? formData.experience
      : Array.isArray(data.experience) && data.experience.length > 0
      ? data.experience
      : sampleExperience
    : Array.isArray(formData.experience)
    ? formData.experience
    : [];

  const skills = useSampleData
    ? Array.isArray(formData.skills) && formData.skills.length > 0
      ? formData.skills
      : Array.isArray(data.skills) && data.skills.length > 0
      ? data.skills
      : sampleSkills
    : Array.isArray(formData.skills)
    ? formData.skills
    : [];

  const education = useSampleData
    ? Array.isArray(formData.education) && formData.education.length > 0
      ? formData.education
      : Array.isArray(data.education) && data.education.length > 0
      ? data.education
      : sampleEducation
    : Array.isArray(formData.education)
    ? formData.education
    : [];

  const projects = useSampleData
    ? Array.isArray(formData.projects) && formData.projects.length > 0
      ? formData.projects
      : Array.isArray(data.projects) && data.projects.length > 0
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
    ? Array.isArray(formData.languages) && formData.languages.length > 0
      ? formData.languages
      : Array.isArray(data.languages) && data.languages.length > 0
      ? data.languages
      : sampleLanguages
    : Array.isArray(formData.languages)
    ? formData.languages
    : [];

  const achievements = useSampleData
    ? Array.isArray(formData.achievements) &&
      formData.achievements.length > 0
      ? formData.achievements
      : Array.isArray(data.achievements) && data.achievements.length > 0
      ? data.achievements
      : sampleAchievements
    : Array.isArray(formData.achievements)
    ? formData.achievements
    : [];

  const interests = useSampleData
    ? Array.isArray(formData.interests) && formData.interests.length > 0
      ? formData.interests
      : Array.isArray(data.interests) && data.interests.length > 0
      ? data.interests
      : sampleInterests
    : Array.isArray(formData.interests)
    ? formData.interests
    : [];

  const references = useSampleData
    ? Array.isArray(formData.references) && formData.references.length > 0
      ? formData.references
      : Array.isArray(data.references) && data.references.length > 0
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
      "qualification",
      "field",
      "institution",
      "school",
      "university",
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
    getValue(item, ["name", "language", "title"])
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
      getValue(item, ["name", "interest", "title", "label"])
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
        className={`text-[10.5px] leading-[1.6] text-slate-500 ${className}`}
      >
        {children}
      </p>
    );
  };

  const SectionTitle = ({
    children,
    color = "text-slate-900",
  }) => (
    <div
      className={`text-[11px] font-bold tracking-[0.2em] ${color}`}
    >
      {children}
    </div>
  );

  const ResumeLines = ({
    description,
    count = 4,
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
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-amber-400" />
              {line}
            </li>
          ))}
        </ul>
      );
    }

    if (!useSampleData) return null;

    return (
      <ul className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-400"
          >
            <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-amber-300" />
            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-amber-300",
    background = "bg-slate-700",
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

    if (!useSampleData) return null;

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
        <span className="font-serif text-[11px] font-bold text-amber-300">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName;
  const displayJobTitle = personal.jobTitle;

  const showContact =
    personal.email ||
    personal.phone ||
    personal.location ||
    personal.linkedin ||
    personal.github;

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-[#f8f7f4] font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-slate-900 px-[52px] py-[48px] text-white">
        <div className="flex items-center gap-5">
          <PhotoCircle
            ring="ring-amber-300"
            background="bg-slate-700"
          />

          <div>
            {displayName && (
              <div className="font-serif text-[38px] font-bold leading-none tracking-wide">
                {displayName.toUpperCase()}
              </div>
            )}

            {displayJobTitle && (
              <div className="mt-3 text-[13px] tracking-[0.28em] text-amber-300">
                {displayJobTitle.toUpperCase()}
              </div>
            )}

            {(personal.email ||
              personal.phone ||
              personal.location) && (
              <div className="mt-3 text-[9.5px] leading-[1.5] text-white/60">
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

      <main className="px-[52px] py-[48px]">
        <div className="grid grid-cols-[1.45fr_0.75fr] gap-8">
          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <section>
            {personal.summary && (
              <>
                <div className="font-serif text-[22px] font-bold text-slate-900">
                  Executive Profile
                </div>

                <TinyText className="mt-4">
                  {personal.summary}
                </TinyText>
              </>
            )}

            {/* Leadership Experience */}

            {validExperience.length > 0 && (
              <div className={personal.summary ? "mt-8" : "mt-1"}>
                <SectionTitle color="text-amber-700">
                  LEADERSHIP EXPERIENCE
                </SectionTitle>

                <div className="mt-5 space-y-7">
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
                        <div key={index}>
                          {jobTitle && (
                            <div className="text-[12px] font-bold leading-tight text-slate-900">
                              {jobTitle}
                            </div>
                          )}

                          {(company ||
                            startDate ||
                            endDate) && (
                            <div className="mt-1.5 text-[9.5px] text-amber-700">
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
                              count={4}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Projects */}

            {validProjects.length > 0 && (
              <div className="mt-8">
                <SectionTitle color="text-amber-700">
                  SELECTED PROJECTS
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

                      const technologies =
                        getValue(project, [
                          "technologies",
                          "techStack",
                          "tools",
                        ]);

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
                            <div className="mt-1.5 text-[8.5px] font-medium text-amber-700">
                              {techText}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Education */}

            {validEducation.length > 0 && (
              <div className="mt-8">
                <SectionTitle color="text-amber-700">
                  EDUCATION
                </SectionTitle>

                <div className="mt-5 space-y-5">
                  {validEducation
                    .slice(0, 2)
                    .map((item, index) => {
                      const degree = getValue(item, [
                        "degree",
                        "qualification",
                        "field",
                      ]);

                      const institution = getValue(
                        item,
                        [
                          "institution",
                          "school",
                          "university",
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
                            <TinyText className="mt-1">
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
              </div>
            )}

            {/* Certifications */}

            {validCertifications.length > 0 && (
              <div className="mt-8">
                <SectionTitle color="text-amber-700">
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
                            <div className="text-[10px] font-bold text-slate-900">
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
              </div>
            )}

            {/* Achievements */}

            {validAchievements.length > 0 && (
              <div className="mt-8">
                <SectionTitle color="text-amber-700">
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
                            <div className="text-[10px] font-bold text-slate-900">
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
              </div>
            )}

            {/* References */}

            {validReferences.length > 0 && (
              <div className="mt-8">
                <SectionTitle color="text-amber-700">
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
                            <div className="text-[10px] font-bold text-slate-900">
                              {name}
                            </div>
                          )}

                          {position && (
                            <TinyText className="mt-1">
                              {position}
                            </TinyText>
                          )}

                          {company && (
                            <TinyText>{company}</TinyText>
                          )}

                          {email && (
                            <TinyText>{email}</TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </section>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="border-l border-slate-200 pl-6">
            {/* Expertise */}

            {finalSkills.length > 0 && (
              <>
                <SectionTitle color="text-amber-700">
                  EXPERTISE
                </SectionTitle>

                <div className="mt-5 space-y-3">
                  {finalSkills.slice(0, 10).map(
                    (skill, index) => (
                      <div
                        key={`${skill}-${index}`}
                        className="border-b border-slate-200 pb-3 text-[10px] leading-[1.4] text-slate-700"
                      >
                        {skill}
                      </div>
                    )
                  )}
                </div>
              </>
            )}

            {/* Contact */}

            {showContact && (
              <div
                className={
                  finalSkills.length > 0
                    ? "mt-9"
                    : "mt-1"
                }
              >
                <SectionTitle color="text-amber-700">
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
              <div className="mt-9">
                <SectionTitle color="text-amber-700">
                  LANGUAGES
                </SectionTitle>

                <div className="mt-4 space-y-3">
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
                          className="text-[10px] text-slate-700"
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
              <div className="mt-9">
                <SectionTitle color="text-amber-700">
                  INTERESTS
                </SectionTitle>

                <div className="mt-4 space-y-2">
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
                        <div
                          key={index}
                          className="text-[10px] text-slate-600"
                        >
                          {name}
                        </div>
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

export default ExecutivePreview;