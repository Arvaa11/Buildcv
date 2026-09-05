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
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Professional" },
    { name: "French", level: "Conversational" },
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
    : Array.isArray(data.certifications)
    ? data.certifications
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
    : Array.isArray(data.languages)
    ? data.languages
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
    : Array.isArray(data.achievements)
    ? data.achievements
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
    : Array.isArray(data.interests)
    ? data.interests
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
    : Array.isArray(data.references)
    ? data.references
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
    ])
  );

  const validLanguages = languages.filter((item) =>
    getValue(item, ["name", "language"])
  );

  const validAchievements = achievements.filter((item) =>
    getValue(item, [
      "title",
      "name",
      "description",
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
        className={`text-[10px] leading-[1.55] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  // =========================================================
  // EXPERIENCE DESCRIPTION
  // =========================================================

  const ResumeLines = ({
    description,
    color = "bg-cyan-100",
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
            className="relative pl-3 text-[9.5px] leading-[1.5] text-slate-600"
          >
            <span
              className={`absolute left-0 top-[7px] h-[4px] w-[4px] rounded-full ${color}`}
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
    <div className="h-[1123px] w-[794px] overflow-hidden bg-white font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-[#082f49] px-[52px] py-[48px] text-white">
        <div className="flex items-end justify-between">
          <div>
            {/* Name */}

            {displayName && (
              <div className="text-[38px] font-black leading-none">
                {displayName.toUpperCase()}
              </div>
            )}

            {/* Job Title */}

            {displayJobTitle && (
              <div className="mt-3 text-[12px] font-semibold tracking-[0.22em] text-cyan-200">
                {displayJobTitle.toUpperCase()}
              </div>
            )}
          </div>

          {/* Contact */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="max-w-[230px] text-right text-[9.5px] leading-[1.6] text-white/60">
              {personal.email && (
                <>
                  {personal.email}
                  <br />
                </>
              )}

              {personal.phone && (
                <>
                  {personal.phone}
                  <br />
                </>
              )}

              {personal.location && (
                <>
                  {personal.location}
                  <br />
                </>
              )}

              {personal.linkedin && (
                <>
                  {personal.linkedin}
                  <br />
                </>
              )}

              {personal.github && personal.github}
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="grid grid-cols-[0.72fr_1.5fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="bg-[#e8f6fb] px-[34px] py-[40px]">
          {/* EXPERTISE */}

          {validSkills.length > 0 && (
            <section>
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#087ea4]">
                EXPERTISE
              </div>

              <div className="mt-5 space-y-3">
                {validSkills
                  .slice(0, 10)
                  .map((skill, index) => {
                    const skillName =
                      getSkillName(skill);

                    return (
                      <div
                        key={`${skillName}-${index}`}
                        className="rounded-lg bg-white px-3 py-2.5 text-[9.5px] font-semibold text-slate-700"
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
            <section className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#087ea4]">
                EDUCATION
              </div>

              <div className="mt-4 space-y-5">
                {validEducation
                  .slice(0, 3)
                  .map((item, index) => {
                    const degree = getValue(item, [
                      "degree",
                      "program",
                      "qualification",
                      "title",
                    ]);

                    const institution =
                      getValue(item, [
                        "institution",
                        "university",
                        "school",
                        "college",
                      ]);

                    const startDate = getValue(
                      item,
                      [
                        "startDate",
                        "start",
                        "from",
                      ]
                    );

                    const endDate = getValue(item, [
                      "endDate",
                      "end",
                      "to",
                    ]);

                    return (
                      <div key={index}>
                        {degree && (
                          <TinyText>
                            {degree}
                          </TinyText>
                        )}

                        {institution && (
                          <TinyText className="mt-1.5">
                            {institution}
                          </TinyText>
                        )}

                        {(startDate ||
                          endDate) && (
                          <TinyText className="mt-1.5">
                            {startDate || ""} —{" "}
                            {endDate || ""}
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
            <section className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#087ea4]">
                LANGUAGES
              </div>

              <div className="mt-4 space-y-3">
                {validLanguages
                  .slice(0, 4)
                  .map((item, index) => {
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
                        <div className="text-[9.5px] font-semibold text-slate-700">
                          {name}
                        </div>

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
            <section className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.18em] text-[#087ea4]">
                INTERESTS
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {validInterests
                  .slice(0, 6)
                  .map((interest, index) => {
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
                        className="rounded-full bg-white px-2.5 py-1 text-[8px] font-medium text-slate-600"
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

        <main className="px-[40px] py-[40px]">
          {/* PROFESSIONAL PROFILE */}

          {personal.summary && (
            <section className="rounded-2xl bg-[#f0fafc] p-6">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#087ea4]">
                PROFESSIONAL PROFILE
              </div>

              <TinyText className="mt-3">
                {personal.summary}
              </TinyText>
            </section>
          )}

          {/* EXPERIENCE */}

          {validExperience.length > 0 && (
            <section
              className={
                personal.summary
                  ? "mt-9"
                  : "mt-0"
              }
            >
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#087ea4]">
                EXPERIENCE
              </div>

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

                    const startDate = getValue(
                      item,
                      [
                        "startDate",
                        "start",
                        "from",
                      ]
                    );

                    const endDate = getValue(item, [
                      "endDate",
                      "end",
                      "to",
                    ]);

                    const description = getValue(
                      item,
                      [
                        "description",
                        "details",
                        "responsibilities",
                        "summary",
                      ]
                    );

                    return (
                      <div key={index}>
                        <div className="flex items-center justify-between gap-4">
                          {jobTitle && (
                            <div className="text-[12px] font-bold text-slate-900">
                              {jobTitle}
                            </div>
                          )}

                          {(startDate ||
                            endDate) && (
                            <div className="shrink-0 text-[9.5px] text-slate-500">
                              {startDate || ""} —{" "}
                              {endDate ||
                                "Present"}
                            </div>
                          )}
                        </div>

                        {company && (
                          <div className="mt-1.5 text-[9.5px] font-semibold text-[#087ea4]">
                            {company}
                          </div>
                        )}

                        {description && (
                          <div className="mt-3">
                            <ResumeLines
                              description={
                                description
                              }
                              color="bg-cyan-100"
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* PROJECTS */}

          {validProjects.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#087ea4]">
                PROJECTS
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {validProjects
                  .slice(0, 6)
                  .map((project, index) => {
                    const projectName = getValue(
                      project,
                      [
                        "name",
                        "title",
                        "projectName",
                      ]
                    );

                    const description = getValue(
                      project,
                      [
                        "description",
                        "details",
                        "summary",
                      ]
                    );

                    const technologies =
                      getTechnologies(project);

                    return (
                      <div
                        key={`${projectName}-${index}`}
                        className="rounded-xl border border-cyan-100 p-4"
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
                                    className="rounded bg-[#e8f6fb] px-1.5 py-0.5 text-[7.5px] font-medium text-[#087ea4]"
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

          {/* ACHIEVEMENTS */}

          {validAchievements.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#087ea4]">
                ACHIEVEMENTS
              </div>

              <div className="mt-4 space-y-4">
                {validAchievements
                  .slice(0, 3)
                  .map((item, index) => {
                    const title = getValue(item, [
                      "title",
                      "name",
                    ]);

                    const description = getValue(
                      item,
                      [
                        "description",
                        "details",
                        "summary",
                      ]
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
            </section>
          )}

          {/* CERTIFICATIONS */}

          {validCertifications.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#087ea4]">
                CERTIFICATIONS
              </div>

              <div className="mt-4 space-y-3">
                {validCertifications
                  .slice(0, 3)
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
                        className="rounded-xl bg-[#f0fafc] p-3"
                      >
                        {name && (
                          <div className="text-[9.5px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(issuer || date) && (
                          <div className="mt-1 text-[8px] text-slate-500">
                            {issuer}
                            {issuer &&
                              date &&
                              " • "}
                            {date}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* REFERENCES */}

          {validReferences.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-[#087ea4]">
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
                        {name && (
                          <div className="text-[10px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(role || company) && (
                          <TinyText
                            className="mt-1"
                            color="text-[#087ea4]"
                          >
                            {role}
                            {role &&
                              company &&
                              " • "}
                            {company}
                          </TinyText>
                        )}

                        {email && (
                          <TinyText className="mt-1">
                            {email}
                          </TinyText>
                        )}

                        {phone && (
                          <TinyText className="mt-0.5">
                            {phone}
                          </TinyText>
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

export default OceanPreview;