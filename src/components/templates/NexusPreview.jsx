import React from "react";

function NexusPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // COMMON SAMPLE DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Olivia Carter",
    jobTitle: "Executive Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Strategic technology professional creating elegant digital products, improving user experiences, and leading thoughtful frontend initiatives.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "Senior Frontend Developer",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description:
        "Led frontend development for customer-facing digital products.\nImproved interface consistency through reusable component systems.\nCollaborated with designers and product teams to deliver polished experiences.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Cedar Labs",
      startDate: "2022",
      endDate: "2024",
      description:
        "Built responsive web interfaces using modern frontend technologies.\nTranslated design concepts into accessible and reusable components.\nWorked closely with cross-functional teams throughout product delivery.",
    },
    {
      jobTitle: "Web Developer",
      company: "Brightline Studio",
      startDate: "2021",
      endDate: "2022",
      description:
        "Developed responsive websites for digital products and campaigns.\nMaintained reusable UI patterns and improved page performance.\nSupported testing and refinement across multiple screen sizes.",
    },
  ];

  const sampleSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "UI Strategy",
    "Leadership",
    "UX Design",
    "HTML & CSS",
    "Git",
    "Responsive Design",
    "Design Systems",
    "Accessibility",
    "Product Thinking",
  ];

  const sampleEducation = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      startDate: "2022",
      endDate: "2024",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      startDate: "2018",
      endDate: "2022",
    },
  ];

  const sampleProjects = [
    {
      title: "Executive Dashboard",
      name: "Executive Dashboard",
      description:
        "Designed a modern analytics dashboard focused on clarity, accessibility, and efficient decision-making.",
      technologies: ["React", "TypeScript", "CSS"],
    },
    {
      title: "Design System",
      name: "Design System",
      description:
        "Created a reusable component library to improve consistency across multiple digital products.",
      technologies: ["React", "Storybook", "Figma"],
    },
    {
      title: "Portfolio Platform",
      name: "Portfolio Platform",
      description:
        "Built a responsive portfolio experience combining editorial layouts with interactive project showcases.",
      technologies: ["React", "JavaScript", "Responsive Design"],
    },
  ];

  const sampleCertifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2024",
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
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
      title: "Design System Initiative",
      description:
        "Established reusable interface patterns that improved consistency across product experiences.",
      date: "2025",
    },
    {
      title: "Frontend Mentorship",
      description:
        "Supported junior developers through code reviews, technical guidance, and collaborative learning.",
      date: "2024",
    },
    {
      title: "Product Experience Improvement",
      description:
        "Partnered with product teams to simplify workflows and create more intuitive user experiences.",
      date: "2023",
    },
  ];

  const sampleInterests = [
    "Digital Design",
    "Technology",
    "Photography",
    "Travel",
    "Reading",
    "Creative Coding",
  ];

  const sampleReferences = [
    {
      name: "Daniel Morgan",
      role: "Product Director",
      company: "Northstar Digital",
      email: "daniel.morgan@example.com",
      phone: "+1 415 555 0124",
    },
    {
      name: "Sophia Bennett",
      role: "Engineering Manager",
      company: "Cedar Labs",
      email: "sophia.bennett@example.com",
      phone: "+1 415 555 0168",
    },
  ];

  // =========================================================
  // NORMALIZE PERSONAL DATA
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
        ...(data.personal || {}),
        ...(formData.personal || {}),
      };

  // =========================================================
  // NORMALIZE MAIN ARRAYS
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
    : Array.isArray(data.experience)
    ? data.experience
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
    : Array.isArray(data.skills)
    ? data.skills
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
    : Array.isArray(data.projects)
    ? data.projects
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
    : Array.isArray(data.education)
    ? data.education
    : [];

  // =========================================================
  // OPTIONAL SECTIONS
  // =========================================================

  const getSectionItems = (
    formSection,
    dataSection,
    sampleItems = []
  ) => {
    if (useSampleData) {
      if (
        formSection?.enabled &&
        Array.isArray(formSection.items) &&
        formSection.items.length > 0
      ) {
        return formSection.items;
      }

      if (
        dataSection?.enabled &&
        Array.isArray(dataSection.items) &&
        dataSection.items.length > 0
      ) {
        return dataSection.items;
      }

      if (Array.isArray(formSection) && formSection.length > 0) {
        return formSection;
      }

      if (Array.isArray(dataSection) && dataSection.length > 0) {
        return dataSection;
      }

      return sampleItems;
    }

    if (
      formSection?.enabled &&
      Array.isArray(formSection.items)
    ) {
      return formSection.items;
    }

    if (Array.isArray(formSection)) {
      return formSection;
    }

    if (
      dataSection?.enabled &&
      Array.isArray(dataSection.items)
    ) {
      return dataSection.items;
    }

    if (Array.isArray(dataSection)) {
      return dataSection;
    }

    return [];
  };

  const certifications = getSectionItems(
    formData.certifications,
    data.certifications,
    sampleCertifications
  );

  const languages = getSectionItems(
    formData.languages,
    data.languages,
    sampleLanguages
  );

  const achievements = getSectionItems(
    formData.achievements,
    data.achievements,
    sampleAchievements
  );

  const references = getSectionItems(
    formData.references,
    data.references,
    sampleReferences
  );

  // =========================================================
  // INTERESTS
  // =========================================================

  const parseInterests = (
    formSection,
    dataSection,
    sampleItems = []
  ) => {
    if (useSampleData) {
      if (
        formSection?.enabled &&
        typeof formSection.value === "string" &&
        formSection.value.trim()
      ) {
        return formSection.value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }

      if (
        dataSection?.enabled &&
        typeof dataSection.value === "string" &&
        dataSection.value.trim()
      ) {
        return dataSection.value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }

      if (Array.isArray(formSection) && formSection.length > 0) {
        return formSection;
      }

      if (Array.isArray(dataSection) && dataSection.length > 0) {
        return dataSection;
      }

      return sampleItems;
    }

    if (
      formSection?.enabled &&
      typeof formSection.value === "string"
    ) {
      return formSection.value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    if (Array.isArray(formSection)) {
      return formSection;
    }

    if (
      dataSection?.enabled &&
      typeof dataSection.value === "string"
    ) {
      return dataSection.value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    if (Array.isArray(dataSection)) {
      return dataSection;
    }

    return [];
  };

  const interests = parseInterests(
    formData.interests,
    data.interests,
    sampleInterests
  );

  // =========================================================
  // HELPERS
  // =========================================================

  const getValue = (item, keys) => {
    if (!item) {
      return "";
    }

    for (const key of keys) {
      if (
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

  const getTechnologies = (project) => {
    const technologies = getValue(project, [
      "technologies",
      "tech",
      "stack",
      "tools",
    ]);

    if (Array.isArray(technologies)) {
      return technologies.filter(Boolean);
    }

    if (technologies) {
      return String(technologies)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  };

  // =========================================================
  // VALID DATA
  // =========================================================

  const validExperience = Array.isArray(experience)
    ? experience.filter((item) =>
        getValue(item, [
          "jobTitle",
          "title",
          "position",
          "role",
          "company",
          "companyName",
          "organization",
        ])
      )
    : [];

  const validSkills = Array.isArray(skills)
    ? skills.filter((skill) =>
        String(getSkillName(skill) || "").trim()
      )
    : [];

  const validProjects = Array.isArray(projects)
    ? projects.filter((project) =>
        getValue(project, [
          "name",
          "title",
          "projectName",
          "description",
          "details",
          "summary",
        ])
      )
    : [];

  const validEducation = Array.isArray(education)
    ? education.filter((item) =>
        getValue(item, [
          "degree",
          "qualification",
          "program",
          "institution",
          "school",
          "university",
        ])
      )
    : [];

  const validCertifications = Array.isArray(certifications)
    ? certifications.filter((item) =>
        getValue(item, [
          "name",
          "title",
          "certificate",
        ])
      )
    : [];

  const validLanguages = Array.isArray(languages)
    ? languages.filter((item) =>
        getValue(item, [
          "name",
          "language",
        ])
      )
    : [];

  const validAchievements = Array.isArray(achievements)
    ? achievements.filter((item) =>
        getValue(item, [
          "title",
          "name",
          "achievement",
          "description",
          "details",
        ])
      )
    : [];

  const validInterests = Array.isArray(interests)
    ? interests.filter((item) => {
        const value =
          typeof item === "string"
            ? item
            : getValue(item, [
                "name",
                "title",
                "interest",
              ]);

        return String(value || "").trim();
      })
    : [];

  const validReferences = Array.isArray(references)
    ? references.filter((item) =>
        getValue(item, [
          "name",
          "fullName",
        ])
      )
    : [];

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
        className={`text-[10px] leading-[1.55] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  const ResumeLines = ({ description }) => {
    const lines = getDescriptionLines(description);

    if (lines.length === 0) {
      return null;
    }

    return (
      <ul className="space-y-1.5">
        {lines.map((line, index) => (
          <li
            key={index}
            className="relative pl-3 text-[9.5px] leading-[1.5] text-slate-600"
          >
            <span className="absolute left-0 top-[7px] h-[4px] w-[4px] rounded-full bg-blue-400" />
            {line}
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName;
  const displayJobTitle = personal.jobTitle;

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-[1123px] w-[794px] bg-white font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="px-[52px] pt-[48px]">
        <div className="flex items-center justify-between">
          <div>
            {/* Name */}

            {displayName && (
              <div className="text-[38px] font-black leading-none text-[#123b72]">
                {displayName.toUpperCase()}
              </div>
            )}

            {/* Job Title */}

            {displayJobTitle && (
              <div className="mt-3 text-[12px] font-bold tracking-[0.2em] text-blue-600">
                {displayJobTitle.toUpperCase()}
              </div>
            )}
          </div>

          {/* Nexus Accent */}

          <div className="h-16 w-16 rounded-2xl bg-blue-600" />
        </div>

        {/* Featured Skills */}

        {validSkills.length > 0 && (
          <div className="mt-7 grid grid-cols-3 gap-3">
            {validSkills.slice(0, 3).map((skill, index) => {
              const skillName = getSkillName(skill);

              return (
                <div
                  key={`${skillName}-${index}`}
                  className="rounded-xl bg-blue-50 px-4 py-3 text-center text-[9px] font-bold text-blue-700"
                >
                  {skillName}
                </div>
              );
            })}
          </div>
        )}
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mt-8 grid grid-cols-[0.72fr_1.5fr] items-start">
        {/* =================================================
            SIDEBAR
        ================================================= */}

        <aside className="bg-[#123b72] px-[34px] py-[40px] text-white">
          {/* Contact */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <>
              <div className="text-[11px] font-bold tracking-[0.15em] text-blue-200">
                CONTACT
              </div>

              <div className="mt-4 space-y-2.5 text-[9px] leading-[1.5] text-white/70">
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

                {personal.github && (
                  <div>{personal.github}</div>
                )}
              </div>
            </>
          )}

          {/* Skills */}

          {validSkills.length > 0 && (
            <>
              <div className="mt-10 text-[11px] font-bold tracking-[0.15em] text-blue-200">
                SKILLS
              </div>

              <div className="mt-4 space-y-3">
                {validSkills.slice(0, 10).map((skill, index) => {
                  const skillName = getSkillName(skill);

                  return (
                    <div
                      key={`${skillName}-${index}`}
                      className="text-[10px] text-white"
                    >
                      {skillName}
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* Education */}

          {validEducation.length > 0 && (
            <section className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.15em] text-blue-200">
                EDUCATION
              </div>

              <div className="mt-4 space-y-5">
                {validEducation.slice(0, 2).map((item, index) => {
                  const degree = getValue(item, [
                    "degree",
                    "qualification",
                    "program",
                    "title",
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
                      <div className="text-[10px] font-bold text-white">
                        {degree}
                      </div>

                      {institution && (
                        <div className="mt-1 text-[9px] text-white/70">
                          {institution}
                        </div>
                      )}

                      {(startDate || endDate) && (
                        <div className="mt-1 text-[8px] text-blue-200">
                          {startDate || ""} —{" "}
                          {endDate || "Present"}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Languages */}

          {validLanguages.length > 0 && (
            <section className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.15em] text-blue-200">
                LANGUAGES
              </div>

              <div className="mt-4 space-y-3">
                {validLanguages.slice(0, 4).map((item, index) => {
                  const name = getValue(item, [
                    "name",
                    "language",
                  ]);

                  const level = getValue(item, [
                    "level",
                    "proficiency",
                    "fluency",
                  ]);

                  return (
                    <div key={index}>
                      <div className="text-[10px] font-bold text-white">
                        {name}
                      </div>

                      {level && (
                        <div className="mt-0.5 text-[8.5px] text-white/60">
                          {level}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Interests */}

          {validInterests.length > 0 && (
            <section className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.15em] text-blue-200">
                INTERESTS
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {validInterests.slice(0, 6).map((interest, index) => {
                  const value =
                    typeof interest === "string"
                      ? interest
                      : getValue(interest, [
                          "name",
                          "title",
                          "interest",
                        ]);

                  return (
                    <span
                      key={`${value}-${index}`}
                      className="rounded-full bg-white/10 px-2.5 py-1 text-[8px] text-white/80"
                    >
                      {value}
                    </span>
                  );
                })}
              </div>
            </section>
          )}
        </aside>

        {/* =================================================
            MAIN
        ================================================= */}

        <main className="px-[40px] py-[40px]">
          {/* Professional Summary */}

          {personal.summary && (
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] text-blue-600">
                PROFESSIONAL SUMMARY
              </div>

              <TinyText className="mt-3">
                {personal.summary}
              </TinyText>
            </section>
          )}

          {/* Experience */}

          {validExperience.length > 0 && (
            <section
              className={
                personal.summary ? "mt-9" : "mt-0"
              }
            >
              <div className="text-[11px] font-bold tracking-[0.2em] text-blue-600">
                EXPERIENCE
              </div>

              <div className="mt-5 space-y-7">
                {validExperience.slice(0, 4).map((item, index) => {
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
                        <div className="text-[12px] font-bold text-slate-900">
                          {jobTitle}
                        </div>
                      )}

                      {(company ||
                        startDate ||
                        endDate) && (
                        <div className="mt-1.5 text-[9.5px] text-blue-600">
                          {company}

                          {(startDate || endDate) && (
                            <>
                              {company && " "}
                              • {startDate || ""} —{" "}
                              {endDate || "Present"}
                            </>
                          )}
                        </div>
                      )}

                      {description && (
                        <div className="mt-3">
                          <ResumeLines
                            description={description}
                          />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Projects */}

          {validProjects.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-blue-600">
                PROJECTS
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {validProjects.slice(0, 6).map((project, index) => {
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

                  const technologies =
                    getTechnologies(project);

                  return (
                    <div
                      key={`${projectName}-${index}`}
                      className="rounded-xl border border-blue-100 p-4"
                    >
                      {projectName && (
                        <div className="text-[10px] font-bold text-slate-900">
                          {projectName}
                        </div>
                      )}

                      {description && (
                        <TinyText className="mt-1.5">
                          {description}
                        </TinyText>
                      )}

                      {technologies.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {technologies
                            .slice(0, 4)
                            .map(
                              (
                                technology,
                                techIndex
                              ) => (
                                <span
                                  key={`${technology}-${techIndex}`}
                                  className="rounded-md bg-blue-50 px-1.5 py-0.5 text-[7.5px] font-medium text-blue-700"
                                >
                                  {technology}
                                </span>
                              )
                            )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* Achievements */}

          {validAchievements.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-blue-600">
                ACHIEVEMENTS
              </div>

              <div className="mt-4 space-y-4">
                {validAchievements
                  .slice(0, 3)
                  .map((item, index) => {
                    const title = getValue(item, [
                      "title",
                      "name",
                      "achievement",
                    ]);

                    const description = getValue(item, [
                      "description",
                      "details",
                      "summary",
                    ]);

                    const date = getValue(item, [
                      "date",
                      "year",
                    ]);

                    return (
                      <div key={index}>
                        <div className="flex items-start justify-between gap-3">
                          {title && (
                            <div className="text-[10px] font-bold text-slate-900">
                              {title}
                            </div>
                          )}

                          {date && (
                            <div className="shrink-0 text-[8px] text-slate-500">
                              {date}
                            </div>
                          )}
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
          )}

          {/* Certifications */}

          {validCertifications.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-blue-600">
                CERTIFICATIONS
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {validCertifications
                  .slice(0, 4)
                  .map((item, index) => {
                    const name = getValue(item, [
                      "name",
                      "title",
                      "certificate",
                    ]);

                    const issuer = getValue(item, [
                      "issuer",
                      "organization",
                      "provider",
                    ]);

                    const date = getValue(item, [
                      "date",
                      "year",
                    ]);

                    return (
                      <div
                        key={index}
                        className="rounded-xl bg-blue-50/70 p-3"
                      >
                        <div className="text-[9px] font-bold text-slate-900">
                          {name}
                        </div>

                        {(issuer || date) && (
                          <div className="mt-1 text-[8px] text-slate-500">
                            {issuer}
                            {issuer && date && " • "}
                            {date}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* References */}

          {validReferences.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-blue-600">
                REFERENCES
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {validReferences
                  .slice(0, 2)
                  .map((item, index) => {
                    const name = getValue(item, [
                      "name",
                      "fullName",
                    ]);

                    const role = getValue(item, [
                      "role",
                      "position",
                      "title",
                    ]);

                    const company = getValue(item, [
                      "company",
                      "organization",
                    ]);

                    const email = getValue(item, [
                      "email",
                    ]);

                    const phone = getValue(item, [
                      "phone",
                      "mobile",
                    ]);

                    return (
                      <div key={index}>
                        <div className="text-[10px] font-bold text-slate-900">
                          {name}
                        </div>

                        {(role || company) && (
                          <div className="mt-1 text-[8.5px] text-blue-600">
                            {role}
                            {role && company && " • "}
                            {company}
                          </div>
                        )}

                        {email && (
                          <div className="mt-1 text-[8px] text-slate-500">
                            {email}
                          </div>
                        )}

                        {phone && (
                          <div className="mt-0.5 text-[8px] text-slate-500">
                            {phone}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default NexusPreview;