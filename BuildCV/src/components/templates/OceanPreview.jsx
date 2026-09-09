import React from "react";

function OceanPreview({
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
    },
    {
      title: "Frontend Mentorship",
      description:
        "Supported junior developers through code reviews, technical guidance, and collaborative learning.",
    },
    {
      title: "Product Experience Improvement",
      description:
        "Partnered with product teams to simplify workflows and create more intuitive user experiences.",
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
        ...(data.personal || {}),
        ...(formData.personal || {}),
      };

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

  const getTechnologies = (project) => {
    const technologies = getValue(project, [
      "technologies",
      "tech",
      "stack",
      "tools",
    ]);

    if (Array.isArray(technologies)) {
      return technologies
        .map((item) => String(item).trim())
        .filter(Boolean);
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
  // OPTIONAL SECTION HELPER
  // Supports:
  // 1. { enabled: true, items: [...] }
  // 2. [...]
  // 3. empty / disabled
  // =========================================================

  const getOptionalSection = (
    formSection,
    dataSection,
    sampleItems = []
  ) => {
    const formIsObject =
      formSection &&
      typeof formSection === "object" &&
      !Array.isArray(formSection);

    const dataIsObject =
      dataSection &&
      typeof dataSection === "object" &&
      !Array.isArray(dataSection);

    // USER FORM DATA
    if (formIsObject) {
      if (
        formSection.enabled === true &&
        Array.isArray(formSection.items)
      ) {
        return formSection.items;
      }

      // If items exist even when enabled isn't explicitly true,
      // preserve the information.
      if (
        Array.isArray(formSection.items) &&
        formSection.items.length > 0
      ) {
        return formSection.items;
      }

      // Explicitly disabled means don't render.
      if (formSection.enabled === false) {
        return [];
      }
    }

    if (Array.isArray(formSection)) {
      return formSection;
    }

    // SAVED / SAMPLE DATA
    if (useSampleData) {
      if (dataIsObject) {
        if (
          dataSection.enabled === true &&
          Array.isArray(dataSection.items)
        ) {
          return dataSection.items;
        }

        if (
          Array.isArray(dataSection.items) &&
          dataSection.items.length > 0
        ) {
          return dataSection.items;
        }

        if (dataSection.enabled === false) {
          return [];
        }
      }

      if (Array.isArray(dataSection) && dataSection.length > 0) {
        return dataSection;
      }

      return sampleItems;
    }

    if (dataIsObject) {
      if (
        dataSection.enabled === true &&
        Array.isArray(dataSection.items)
      ) {
        return dataSection.items;
      }

      if (
        Array.isArray(dataSection.items) &&
        dataSection.items.length > 0
      ) {
        return dataSection.items;
      }
    }

    if (Array.isArray(dataSection)) {
      return dataSection;
    }

    return [];
  };

  // =========================================================
  // RESUME SECTIONS
  // =========================================================

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

  // =========================================================
  // OPTIONAL SECTIONS
  // =========================================================

  const certifications = getOptionalSection(
    formData.certifications,
    data.certifications,
    sampleCertifications
  );

  const languages = getOptionalSection(
    formData.languages,
    data.languages,
    sampleLanguages
  );

  const achievements = getOptionalSection(
    formData.achievements,
    data.achievements,
    sampleAchievements
  );

  const references = getOptionalSection(
    formData.references,
    data.references,
    sampleReferences
  );

  // =========================================================
  // INTERESTS
  // Supports:
  // { enabled: true, value: "Design, Travel" }
  // { enabled: true, items: [...] }
  // [...]
  // =========================================================

  const getInterests = () => {
    const formInterests = formData.interests;
    const dataInterests = data.interests;

    const parseInterestValue = (value) => {
      if (!value) {
        return [];
      }

      if (Array.isArray(value)) {
        return value;
      }

      return String(value)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    };

    // Form object
    if (
      formInterests &&
      typeof formInterests === "object" &&
      !Array.isArray(formInterests)
    ) {
      if (formInterests.enabled === true) {
        if (Array.isArray(formInterests.items)) {
          return formInterests.items;
        }

        if (formInterests.value) {
          return parseInterestValue(formInterests.value);
        }
      }

      if (formInterests.enabled === false) {
        return [];
      }
    }

    // Form array
    if (
      Array.isArray(formInterests) &&
      formInterests.length > 0
    ) {
      return formInterests;
    }

    if (useSampleData) {
      // Data object
      if (
        dataInterests &&
        typeof dataInterests === "object" &&
        !Array.isArray(dataInterests)
      ) {
        if (dataInterests.enabled === true) {
          if (Array.isArray(dataInterests.items)) {
            return dataInterests.items;
          }

          if (dataInterests.value) {
            return parseInterestValue(dataInterests.value);
          }
        }

        if (dataInterests.enabled === false) {
          return [];
        }
      }

      // Data array
      if (
        Array.isArray(dataInterests) &&
        dataInterests.length > 0
      ) {
        return dataInterests;
      }

      return sampleInterests;
    }

    // Non-sample data object
    if (
      dataInterests &&
      typeof dataInterests === "object" &&
      !Array.isArray(dataInterests)
    ) {
      if (dataInterests.enabled === true) {
        if (Array.isArray(dataInterests.items)) {
          return dataInterests.items;
        }

        if (dataInterests.value) {
          return parseInterestValue(dataInterests.value);
        }
      }
    }

    if (Array.isArray(dataInterests)) {
      return dataInterests;
    }

    return [];
  };

  const interests = getInterests();

  // =========================================================
  // VALID DATA
  // =========================================================

  const validSkills = skills.filter((skill) =>
    String(getSkillName(skill) || "").trim()
  );

  const validExperience = experience.filter((item) =>
    getValue(item, [
      "jobTitle",
      "title",
      "position",
      "role",
      "company",
      "companyName",
      "organization",
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
      "details",
      "summary",
    ])
  );

  const validCertifications = certifications.filter((item) =>
    getValue(item, [
      "name",
      "title",
      "certificate",
      "issuer",
      "organization",
      "provider",
    ])
  );

  const validLanguages = languages.filter((item) =>
    getValue(item, [
      "name",
      "language",
      "level",
      "proficiency",
      "fluency",
    ])
  );

  const validAchievements = achievements.filter((item) =>
    getValue(item, [
      "title",
      "name",
      "description",
      "details",
      "summary",
    ])
  );

  const validInterests = interests.filter((item) => {
    const value =
      typeof item === "string"
        ? item
        : getValue(item, [
            "name",
            "title",
            "interest",
          ]);

    return String(value || "").trim();
  });

  const validReferences = references.filter((item) =>
    getValue(item, [
      "name",
      "fullName",
      "position",
      "role",
      "company",
      "organization",
    ])
  );

  // =========================================================
  // SMALL TEXT
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
        className={`pb-1 text-[11.5px] leading-[1.6] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  // =========================================================
  // SECTION TITLE
  // =========================================================

  const SectionTitle = ({ children }) => (
    <div className="pb-1 text-[13px] font-extrabold tracking-[0.18em] text-[#087ea4]">
      {children}
    </div>
  );

  // =========================================================
  // EXPERIENCE DESCRIPTION
  // =========================================================

  const ResumeLines = ({
    description,
    color = "bg-cyan-200",
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length === 0) {
      return null;
    }

    return (
      <ul className="space-y-1.5">
        {lines.map((line, index) => (
          <li
            key={index}
            className="relative pb-1 pl-4 text-[11.5px] leading-[1.55] text-slate-600"
          >
            <span
              className={`absolute left-0 top-[8px] h-[5px] w-[5px] rounded-full ${color}`}
            />

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
    <div className="min-h-[1123px] w-[794px] overflow-visible bg-white font-sans text-slate-700">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-[#082f49] px-[42px] py-[36px] text-white">
        <div className="flex items-end justify-between gap-8">

          <div className="min-w-0 flex-1">

            {displayName && (
              <div className="pb-1 text-[42px] font-black leading-[1.02] tracking-[-0.02em]">
                {displayName.toUpperCase()}
              </div>
            )}

            {displayJobTitle && (
              <div className="mt-3 pb-1 text-[14px] font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {displayJobTitle}
              </div>
            )}

          </div>

          {/* CONTACT */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="w-[235px] shrink-0 text-right text-[11px] leading-[1.6] text-white/70">

              {personal.email && (
                <div className="pb-1 break-words">
                  {personal.email}
                </div>
              )}

              {personal.phone && (
                <div className="pb-1 break-words">
                  {personal.phone}
                </div>
              )}

              {personal.location && (
                <div className="pb-1 break-words">
                  {personal.location}
                </div>
              )}

              {personal.linkedin && (
                <div className="pb-1 break-words">
                  {personal.linkedin}
                </div>
              )}

              {personal.github && (
                <div className="pb-1 break-words">
                  {personal.github}
                </div>
              )}

            </div>
          )}

        </div>
      </header>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="grid grid-cols-[0.78fr_1.52fr]">

        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="bg-[#e8f6fb] px-[30px] py-[34px]">

          {/* EXPERTISE */}

          {validSkills.length > 0 && (
            <section className="break-inside-avoid">

              <SectionTitle>
                EXPERTISE
              </SectionTitle>

              <div className="mt-4 space-y-2.5">

                {validSkills.map((skill, index) => {
                  const skillName = getSkillName(skill);

                  return (
                    <div
                      key={`${skillName}-${index}`}
                      className="break-inside-avoid rounded-lg bg-white px-3 py-2.5 pb-1.5 text-[11px] font-semibold leading-[1.45] text-slate-700"
                    >
                      {skillName}
                    </div>
                  );
                })}

              </div>

            </section>
          )}

          {/* EDUCATION */}

          {validEducation.length > 0 && (
            <section className="mt-8 break-inside-avoid">

              <SectionTitle>
                EDUCATION
              </SectionTitle>

              <div className="mt-4 space-y-5">

                {validEducation.map((item, index) => {
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
                    <div
                      key={index}
                      className="break-inside-avoid pb-1"
                    >

                      {degree && (
                        <div className="pb-1 text-[12.5px] font-bold leading-[1.35] text-slate-800">
                          {degree}
                        </div>
                      )}

                      {institution && (
                        <TinyText className="mt-1">
                          {institution}
                        </TinyText>
                      )}

                      {(startDate || endDate) && (
                        <TinyText className="mt-0.5">
                          {startDate || ""} —{" "}
                          {endDate || "Present"}
                        </TinyText>
                      )}

                    </div>
                  );
                })}

              </div>

            </section>
          )}

          {/* LANGUAGES */}

          {validLanguages.length > 0 && (
            <section className="mt-8 break-inside-avoid">

              <SectionTitle>
                LANGUAGES
              </SectionTitle>

              <div className="mt-4 space-y-3">

                {validLanguages.map((item, index) => {
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
                    <div
                      key={index}
                      className="break-inside-avoid pb-1"
                    >

                      {name && (
                        <div className="pb-1 text-[11.5px] font-bold text-slate-700">
                          {name}
                        </div>
                      )}

                      {level && (
                        <TinyText className="mt-0.5">
                          {level}
                        </TinyText>
                      )}

                    </div>
                  );
                })}

              </div>

            </section>
          )}

          {/* INTERESTS */}

          {validInterests.length > 0 && (
            <section className="mt-8 break-inside-avoid">

              <SectionTitle>
                INTERESTS
              </SectionTitle>

              <div className="mt-4 flex flex-wrap gap-2">

                {validInterests.map((interest, index) => {
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
                      className="rounded-full bg-white px-2.5 py-1.5 pb-1 text-[10px] font-medium leading-[1.3] text-slate-600"
                    >
                      {value}
                    </span>
                  );
                })}

              </div>

            </section>
          )}

        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <main className="px-[34px] py-[34px]">

          {/* PROFESSIONAL PROFILE */}

          {personal.summary && (
            <section className="break-inside-avoid rounded-2xl bg-[#f0fafc] p-5">

              <SectionTitle>
                PROFESSIONAL PROFILE
              </SectionTitle>

              <TinyText className="mt-3 pb-1">
                {personal.summary}
              </TinyText>

            </section>
          )}

          {/* EXPERIENCE */}

          {validExperience.length > 0 && (
            <section
              className={
                personal.summary
                  ? "mt-8 break-inside-avoid"
                  : "mt-0 break-inside-avoid"
              }
            >

              <SectionTitle>
                EXPERIENCE
              </SectionTitle>

              <div className="mt-5 space-y-6">

                {validExperience.map((item, index) => {
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
                    <article
                      key={index}
                      className="break-inside-avoid pb-1"
                    >

                      <div className="flex items-start justify-between gap-4">

                        <div className="min-w-0 flex-1">

                          {jobTitle && (
                            <div className="pb-1 text-[14px] font-bold leading-[1.35] text-slate-900">
                              {jobTitle}
                            </div>
                          )}

                          {company && (
                            <div className="mt-1 pb-1 text-[11.5px] font-semibold text-[#087ea4]">
                              {company}
                            </div>
                          )}

                        </div>

                        {(startDate || endDate) && (
                          <div className="shrink-0 pt-0.5 text-[11px] leading-[1.4] text-slate-500">
                            {startDate || ""} —{" "}
                            {endDate || "Present"}
                          </div>
                        )}

                      </div>

                      {description && (
                        <div className="mt-2 pb-1">
                          <ResumeLines
                            description={description}
                            color="bg-cyan-200"
                          />
                        </div>
                      )}

                    </article>
                  );
                })}

              </div>

            </section>
          )}

          {/* PROJECTS */}

          {validProjects.length > 0 && (
            <section className="mt-8 break-inside-avoid">

              <SectionTitle>
                PROJECTS
              </SectionTitle>

              <div className="mt-4 grid grid-cols-2 gap-3">

                {validProjects.map((project, index) => {
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
                    <article
                      key={`${projectName}-${index}`}
                      className="break-inside-avoid rounded-xl border border-cyan-100 p-3.5 pb-2.5"
                    >

                      {projectName && (
                        <div className="pb-1 text-[12.5px] font-bold leading-[1.35] text-slate-900">
                          {projectName}
                        </div>
                      )}

                      {description && (
                        <TinyText className="mt-1.5 pb-1">
                          {description}
                        </TinyText>
                      )}

                      {technologies.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1.5">

                          {technologies.map(
                            (technology, techIndex) => (
                              <span
                                key={`${technology}-${techIndex}`}
                                className="rounded bg-[#e8f6fb] px-1.5 py-1 text-[9px] font-medium leading-[1.25] text-[#087ea4]"
                              >
                                {technology}
                              </span>
                            )
                          )}

                        </div>
                      )}

                    </article>
                  );
                })}

              </div>

            </section>
          )}

          {/* ACHIEVEMENTS */}

          {validAchievements.length > 0 && (
            <section className="mt-8 break-inside-avoid">

              <SectionTitle>
                ACHIEVEMENTS
              </SectionTitle>

              <div className="mt-4 space-y-4">

                {validAchievements.map((item, index) => {
                  const title = getValue(item, [
                    "title",
                    "name",
                  ]);

                  const description = getValue(item, [
                    "description",
                    "details",
                    "summary",
                  ]);

                  return (
                    <article
                      key={index}
                      className="break-inside-avoid pb-1"
                    >

                      {title && (
                        <div className="pb-1 text-[12px] font-bold leading-[1.35] text-slate-900">
                          {title}
                        </div>
                      )}

                      {description && (
                        <TinyText className="mt-1 pb-1">
                          {description}
                        </TinyText>
                      )}

                    </article>
                  );
                })}

              </div>

            </section>
          )}

          {/* CERTIFICATIONS */}

          {validCertifications.length > 0 && (
            <section className="mt-8 break-inside-avoid">

              <SectionTitle>
                CERTIFICATIONS
              </SectionTitle>

              <div className="mt-4 space-y-3">

                {validCertifications.map((item, index) => {
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
                    <article
                      key={index}
                      className="break-inside-avoid rounded-xl bg-[#f0fafc] p-3 pb-2"
                    >

                      {name && (
                        <div className="pb-1 text-[11.5px] font-bold leading-[1.4] text-slate-900">
                          {name}
                        </div>
                      )}

                      {(issuer || date) && (
                        <div className="mt-1 pb-1 text-[10.5px] leading-[1.45] text-slate-500">
                          {issuer}
                          {issuer && date && " • "}
                          {date}
                        </div>
                      )}

                    </article>
                  );
                })}

              </div>

            </section>
          )}

          {/* REFERENCES */}

          {validReferences.length > 0 && (
            <section className="mt-8 break-inside-avoid">

              <SectionTitle>
                REFERENCES
              </SectionTitle>

              <div className="mt-4 grid grid-cols-2 gap-4">

                {validReferences.map((item, index) => {
                  const name = getValue(item, [
                    "name",
                    "fullName",
                  ]);

                  const role = getValue(item, [
                    "role",
                    "position",
                    "title",
                    "jobTitle",
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
                    "telephone",
                  ]);

                  return (
                    <article
                      key={index}
                      className="break-inside-avoid pb-1"
                    >

                      {name && (
                        <div className="pb-1 text-[12px] font-bold leading-[1.35] text-slate-900">
                          {name}
                        </div>
                      )}

                      {(role || company) && (
                        <TinyText
                          className="mt-1 pb-1"
                          color="text-[#087ea4]"
                        >
                          {role}
                          {role && company && " • "}
                          {company}
                        </TinyText>
                      )}

                      {email && (
                        <TinyText className="mt-1 pb-1 break-words">
                          {email}
                        </TinyText>
                      )}

                      {phone && (
                        <TinyText className="mt-0.5 pb-1">
                          {phone}
                        </TinyText>
                      )}

                    </article>
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

export default OceanPreview;
