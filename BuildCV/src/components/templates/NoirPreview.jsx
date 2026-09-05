import React from "react";

function NoirPreview({
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
  // SMALL TEXT COMPONENT
  // =========================================================

  const TinyText = ({
    children,
    className = "",
    color = "text-white/50",
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
    color = "bg-white/10",
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
            className="relative pl-3 text-[9.5px] leading-[1.5] text-white/55"
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
  // PROFILE PHOTO
  // =========================================================

  const PhotoCircle = ({
    ring = "ring-amber-300",
    background = "bg-amber-100",
  }) => {
    if (!personal.profileImage && !useSampleData) {
      return null;
    }

    const initials =
      personal.fullName
        ?.trim()
        .split(/\s+/)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "OC";

    return (
      <div
        className={`h-16 w-16 overflow-hidden rounded-full ${background} ring-2 ${ring}`}
      >
        {personal.profileImage ? (
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[14px] font-bold text-slate-800">
            {initials}
          </div>
        )}
      </div>
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
    <div className="h-[1123px] w-[794px] overflow-hidden bg-[#111111] font-sans text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b border-white/10 px-[52px] py-[48px]">
        <div className="flex items-center justify-between">
          <div>
            {/* Name */}

            {displayName && (
              <div className="font-serif text-[38px] font-bold leading-none tracking-wide">
                {displayName.toUpperCase()}
              </div>
            )}

            {/* Job Title */}

            {displayJobTitle && (
              <div className="mt-3 text-[11px] tracking-[0.3em] text-amber-300">
                {displayJobTitle.toUpperCase()}
              </div>
            )}
          </div>

          {/* Profile Photo */}

          <PhotoCircle
            ring="ring-amber-300"
            background="bg-amber-100"
          />
        </div>

        {/* Contact */}

        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin ||
          personal.github) && (
          <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1.5 text-[9.5px] leading-[1.5] text-white/50">
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
              personal.location && (
                <span>•</span>
              )}

            {personal.location && (
              <span>{personal.location}</span>
            )}

            {(personal.email ||
              personal.phone ||
              personal.location) &&
              personal.linkedin && (
                <span>•</span>
              )}

            {personal.linkedin && (
              <span>{personal.linkedin}</span>
            )}

            {personal.linkedin && personal.github && (
              <span>•</span>
            )}

            {personal.github && (
              <span>{personal.github}</span>
            )}
          </div>
        )}
      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="grid grid-cols-[1.45fr_0.7fr]">
        {/* ===================================================
            LEFT SIDE
        =================================================== */}

        <main className="px-[52px] py-[42px]">
          {/* PROFILE */}

          {personal.summary && (
            <section>
              <div className="text-[11px] font-bold tracking-[0.22em] text-amber-300">
                PROFILE
              </div>

              <div className="mt-5 font-serif text-[22px] leading-[1.15]">
                {personal.summary.length > 110
                  ? `${personal.summary.slice(0, 110)}...`
                  : personal.summary}
              </div>

              <TinyText
                className="mt-5"
                color="text-white/50"
              >
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
              <div className="text-[11px] font-bold tracking-[0.22em] text-amber-300">
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
                        {jobTitle && (
                          <div className="text-[12px] font-bold">
                            {jobTitle}
                          </div>
                        )}

                        {(company ||
                          startDate ||
                          endDate) && (
                          <div className="mt-1.5 text-[9.5px] text-amber-200/70">
                            {company}

                            {(startDate ||
                              endDate) && (
                              <>
                                {company && " "}
                                • {startDate || ""}{" "}
                                —{" "}
                                {endDate ||
                                  "Present"}
                              </>
                            )}
                          </div>
                        )}

                        {description && (
                          <div className="mt-3">
                            <ResumeLines
                              description={
                                description
                              }
                              color="bg-white/10"
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
              <div className="text-[11px] font-bold tracking-[0.22em] text-amber-300">
                PROJECTS
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {validProjects
                  .slice(0, 4)
                  .map((project, index) => {
                    const name = getValue(project, [
                      "name",
                      "title",
                      "projectName",
                    ]);

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
                        key={`${name}-${index}`}
                        className="rounded-lg border border-white/10 p-3.5"
                      >
                        {name && (
                          <div className="text-[10px] font-bold">
                            {name}
                          </div>
                        )}

                        {description && (
                          <TinyText
                            className="mt-1.5"
                            color="text-white/45"
                          >
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
                                    className="rounded bg-white/5 px-1.5 py-0.5 text-[7px] text-amber-200/70"
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
              <div className="text-[11px] font-bold tracking-[0.22em] text-amber-300">
                ACHIEVEMENTS
              </div>

              <div className="mt-5 space-y-4">
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
                          <div className="text-[10px] font-bold">
                            {title}
                          </div>
                        )}

                        {description && (
                          <TinyText
                            className="mt-1"
                            color="text-white/45"
                          >
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
              <div className="text-[11px] font-bold tracking-[0.22em] text-amber-300">
                CERTIFICATIONS
              </div>

              <div className="mt-5 space-y-3">
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
                        className="flex items-start justify-between gap-3 border-b border-white/10 pb-3"
                      >
                        <div>
                          <div className="text-[9.5px] font-bold">
                            {name}
                          </div>

                          {issuer && (
                            <TinyText
                              className="mt-1"
                              color="text-white/40"
                            >
                              {issuer}
                            </TinyText>
                          )}
                        </div>

                        {date && (
                          <span className="shrink-0 text-[8px] text-amber-200/60">
                            {date}
                          </span>
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
              <div className="text-[11px] font-bold tracking-[0.22em] text-amber-300">
                REFERENCES
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
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
                        <div className="text-[10px] font-bold">
                          {name}
                        </div>

                        {(role || company) && (
                          <TinyText
                            className="mt-1"
                            color="text-amber-200/60"
                          >
                            {role}
                            {role &&
                              company &&
                              " • "}
                            {company}
                          </TinyText>
                        )}

                        {email && (
                          <TinyText
                            className="mt-1"
                            color="text-white/40"
                          >
                            {email}
                          </TinyText>
                        )}

                        {phone && (
                          <TinyText
                            className="mt-0.5"
                            color="text-white/40"
                          >
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

        {/* ===================================================
            RIGHT SIDEBAR
        =================================================== */}

        <aside className="border-l border-white/10 px-[34px] py-[42px]">
          {/* EXPERTISE */}

          {validSkills.length > 0 && (
            <section>
              <div className="text-[11px] font-bold tracking-[0.2em] text-amber-300">
                EXPERTISE
              </div>

              <div className="mt-5 space-y-4">
                {validSkills
                  .slice(0, 10)
                  .map((skill, index) => {
                    const skillName =
                      getSkillName(skill);

                    return (
                      <div
                        key={`${skillName}-${index}`}
                        className="border-b border-white/10 pb-3 text-[10px]"
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
              <div className="text-[11px] font-bold tracking-[0.2em] text-amber-300">
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
                          <TinyText color="text-white/70">
                            {degree}
                          </TinyText>
                        )}

                        {institution && (
                          <TinyText
                            className="mt-1"
                            color="text-white/40"
                          >
                            {institution}
                          </TinyText>
                        )}

                        {(startDate ||
                          endDate) && (
                          <TinyText
                            className="mt-1"
                            color="text-amber-200/60"
                          >
                            {startDate || ""}{" "}
                            {startDate || endDate
                              ? "—"
                              : ""}{" "}
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
              <div className="text-[11px] font-bold tracking-[0.2em] text-amber-300">
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
                        <div className="text-[10px] font-bold">
                          {name}
                        </div>

                        {level && (
                          <TinyText
                            className="mt-0.5"
                            color="text-white/40"
                          >
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
              <div className="text-[11px] font-bold tracking-[0.2em] text-amber-300">
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
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] text-white/60"
                      >
                        {value}
                      </span>
                    );
                  })}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}

export default NoirPreview;