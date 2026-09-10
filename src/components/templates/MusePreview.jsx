import React from "react";

function MusePreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // Used ONLY when useSampleData === true
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
      technologies: [
        "React",
        "JavaScript",
        "Responsive Design",
      ],
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
        ...(formData.personal || {}),
      };

  // =========================================================
  // NORMALIZE ARRAY DATA
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
        .filter(Boolean)
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
      "tools",
      "stack",
    ]);

    if (Array.isArray(technologies)) {
      return technologies.filter(Boolean);
    }

    if (typeof technologies === "string") {
      return technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  };

  // =========================================================
  // OPTIONAL SECTION DATA
  // =========================================================

  const getOptionalSection = (
    formSection,
    dataSection,
    sampleItems
  ) => {
    // =====================================================
    // LIVE BUILDER
    // =====================================================

    if (!useSampleData) {
      if (
        formSection?.enabled &&
        Array.isArray(formSection.items)
      ) {
        return formSection.items;
      }

      return [];
    }

    // =====================================================
    // SAMPLE / TEMPLATE PREVIEW
    // =====================================================

    // User entered optional data
    if (
      formSection?.enabled &&
      Array.isArray(formSection.items) &&
      formSection.items.length > 0
    ) {
      return formSection.items;
    }

    // Template optional data
    if (
      dataSection?.enabled &&
      Array.isArray(dataSection.items) &&
      dataSection.items.length > 0
    ) {
      return dataSection.items;
    }

    // Sample optional data
    return Array.isArray(sampleItems)
      ? sampleItems
      : [];
  };

  // =========================================================
  // CERTIFICATIONS
  // =========================================================

  const certifications = getOptionalSection(
    formData.certifications,
    data.certifications,
    sampleCertifications
  );

  // =========================================================
  // LANGUAGES
  // =========================================================

  const languages = getOptionalSection(
    formData.languages,
    data.languages,
    sampleLanguages
  );

  // =========================================================
  // ACHIEVEMENTS
  // =========================================================

  const achievements = getOptionalSection(
    formData.achievements,
    data.achievements,
    sampleAchievements
  );

  // =========================================================
  // REFERENCES
  // =========================================================

  const references = getOptionalSection(
    formData.references,
    data.references,
    sampleReferences
  );

  // =========================================================
  // INTERESTS
  // =========================================================

  let interests = [];

  if (!useSampleData) {
    // =====================================================
    // LIVE BUILDER
    // =====================================================

    if (formData.interests?.enabled) {
      const value = String(
        formData.interests.value || ""
      ).trim();

      if (value) {
        interests = value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }
    }
  } else {
    // =====================================================
    // SAMPLE / TEMPLATE PREVIEW
    // =====================================================

    // User entered interests
    if (
      formData.interests?.enabled &&
      String(formData.interests.value || "").trim()
    ) {
      interests = String(
        formData.interests.value
      )
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    // Template interests
    else if (
      data.interests?.enabled &&
      String(data.interests.value || "").trim()
    ) {
      interests = String(
        data.interests.value
      )
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    // Sample interests
    else if (Array.isArray(sampleInterests)) {
      interests = sampleInterests;
    } else if (sampleInterests) {
      interests = String(sampleInterests)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }
  }

  // =========================================================
  // ALWAYS GUARANTEE INTERESTS IS AN ARRAY
  // =========================================================

  if (!Array.isArray(interests)) {
    interests = [];
  }

  // =========================================================
  // VALID DATA
  // =========================================================

  const validExperience = experience.filter((item) => {
    return (
      getValue(item, [
        "jobTitle",
        "title",
        "position",
        "role",
      ]) ||
      getValue(item, [
        "company",
        "companyName",
        "organization",
      ]) ||
      getValue(item, [
        "description",
        "details",
        "responsibilities",
      ])
    );
  });

  const validSkills = skills
    .map(getSkillName)
    .filter(
      (skill) => String(skill).trim() !== ""
    );

  const validProjects = projects.filter((item) => {
    return (
      getValue(item, [
        "name",
        "title",
        "projectName",
      ]) ||
      getValue(item, [
        "description",
        "details",
        "summary",
      ]) ||
      getTechnologies(item).length > 0
    );
  });

  const validEducation = education.filter((item) => {
    return (
      getValue(item, [
        "degree",
        "program",
        "qualification",
        "title",
      ]) ||
      getValue(item, [
        "institution",
        "university",
        "school",
        "college",
      ])
    );
  });

  const validCertifications =
    certifications.filter((item) => {
      return (
        getValue(item, [
          "name",
          "title",
          "certificate",
          "certification",
        ]) ||
        getValue(item, [
          "issuer",
          "organization",
        ])
      );
    });

  const validLanguages = languages.filter((item) => {
    if (typeof item === "string") {
      return item.trim() !== "";
    }

    return (
      getValue(item, [
        "name",
        "language",
        "title",
      ]) ||
      getValue(item, [
        "level",
        "proficiency",
      ])
    );
  });

  const validAchievements = achievements.filter(
    (item) => {
      return (
        getValue(item, [
          "title",
          "name",
          "achievement",
        ]) ||
        getValue(item, [
          "description",
          "details",
        ])
      );
    }
  );

  const validInterests = interests
    .map((interest) =>
      typeof interest === "string"
        ? interest
        : getValue(interest, [
            "name",
            "title",
            "interest",
            "label",
          ])
    )
    .filter(
      (interest) =>
        String(interest).trim() !== ""
    );

  const validReferences = references.filter(
    (item) => {
      return (
        getValue(item, [
          "name",
          "fullName",
        ]) ||
        getValue(item, [
          "role",
          "position",
          "title",
        ]) ||
        getValue(item, [
          "company",
          "organization",
        ])
      );
    }
  );

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

  const ResumeLines = ({
    description,
    count = 4,
  }) => {
    const lines =
      getDescriptionLines(description);

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

    // Never show fake description in live mode
    if (!useSampleData) {
      return null;
    }

    // Sample-only fallback
    return (
      <ul className="space-y-1.5">
        {Array.from({ length: count }).map(
          (_, index) => (
            <li
              key={index}
              className="relative pl-3 text-[9.5px] leading-[1.5] text-slate-400"
            >
              <span className="absolute left-0 top-[7px] h-[4px] w-[4px] rounded-full bg-orange-100" />
              Professional responsibility or creative achievement
            </li>
          )
        )}
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
            alt={
              personal.fullName || "Profile"
            }
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    // No fake photo in live mode
    if (!useSampleData) {
      return null;
    }

    const initials = (
      personal.fullName || "Olivia Carter"
    )
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
  // DISPLAY VALUES
  // =========================================================

  const nameParts = personal.fullName
    ? personal.fullName.trim().split(/\s+/)
    : [];

  const firstName = nameParts[0] || "";

  const lastName =
    nameParts.slice(1).join(" ");

  const displayJobTitle =
    personal.jobTitle || "";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-[1123px] w-[794px] bg-[#fffaf8] font-sans">
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

          {personal.fullName && (
            <div className="mt-5 text-[38px] font-black leading-[0.92] text-slate-900">
              {firstName.toUpperCase()}

              {lastName && (
                <>
                  <br />
                  {lastName.toUpperCase()}
                </>
              )}
            </div>
          )}

          {/* Job Title */}

          {displayJobTitle && (
            <div className="mt-4 inline-block rounded-full bg-orange-500 px-4 py-2 text-[11px] font-bold tracking-wide text-white">
              {displayJobTitle.toUpperCase()}
            </div>
          )}
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

          {personal.summary && (
            <div>
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-300">
                ABOUT
              </div>

              <TinyText
                className="mt-4"
                color="text-white/60"
              >
                {personal.summary}
              </TinyText>
            </div>
          )}

          {/* Tools */}

          {validSkills.length > 0 && (
            <div
              className={
                personal.summary
                  ? "mt-9"
                  : "mt-2"
              }
            >
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-300">
                TOOLS
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {validSkills
                  .slice(0, 10)
                  .map(
                    (skillName, index) => (
                      <SkillPill
                        key={`${skillName}-${index}`}
                        dark
                      >
                        {skillName}
                      </SkillPill>
                    )
                  )}
              </div>
            </div>
          )}

          {/* Contact */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-300">
                CONTACT
              </div>

              <TinyText
                className="mt-4"
                color="text-white/60"
              >
                {personal.email}

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

                {personal.github && (
                  <>
                    <br />
                    {personal.github}
                  </>
                )}
              </TinyText>
            </div>
          )}

          {/* Education */}

          {validEducation.length > 0 && (
            <div className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-300">
                EDUCATION
              </div>

              <div className="mt-4 space-y-5">
                {validEducation
                  .slice(0, 2)
                  .map((item, index) => {
                    const degree =
                      getValue(item, [
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

                    const startDate =
                      getValue(item, [
                        "startDate",
                        "start",
                        "from",
                      ]);

                    const endDate =
                      getValue(item, [
                        "endDate",
                        "end",
                        "to",
                      ]);

                    return (
                      <div key={index}>
                        {degree && (
                          <div className="text-[10px] font-bold leading-[1.35] text-white">
                            {degree}
                          </div>
                        )}

                        {institution && (
                          <TinyText
                            className="mt-1"
                            color="text-white/55"
                          >
                            {institution}
                          </TinyText>
                        )}

                        {(startDate ||
                          endDate) && (
                          <TinyText
                            className="mt-0.5"
                            color="text-white/45"
                          >
                            {startDate || ""}{" "}
                            —{" "}
                            {endDate ||
                              "Present"}
                          </TinyText>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Languages */}

          {validLanguages.length > 0 && (
            <div className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-300">
                LANGUAGES
              </div>

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
                          ]);

                    return (
                      <div key={index}>
                        {name && (
                          <div className="text-[10px] font-semibold text-white">
                            {name}
                          </div>
                        )}

                        {level && (
                          <TinyText
                            className="mt-0.5"
                            color="text-white/45"
                          >
                            {level}
                          </TinyText>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Interests */}

          {validInterests.length > 0 && (
            <div className="mt-10">
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-300">
                INTERESTS
              </div>

              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
                {validInterests
                  .slice(0, 8)
                  .map(
                    (interest, index) => (
                      <span
                        key={`${interest}-${index}`}
                        className="text-[9px] text-white/55"
                      >
                        {interest}
                      </span>
                    )
                  )}
              </div>
            </div>
          )}
        </aside>

        {/* =================================================
            MAIN
        ================================================= */}

        <main className="px-[40px] py-[40px]">
          {/* Selected Experience */}

          {validExperience.length > 0 && (
            <>
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-600">
                SELECTED EXPERIENCE
              </div>

              <div className="mt-5 space-y-7">
                {validExperience
                  .slice(0, 4)
                  .map((item, index) => {
                    const jobTitle =
                      getValue(item, [
                        "jobTitle",
                        "title",
                        "position",
                        "role",
                      ]);

                    const company =
                      getValue(item, [
                        "company",
                        "companyName",
                        "organization",
                      ]);

                    const startDate =
                      getValue(item, [
                        "startDate",
                        "start",
                        "from",
                      ]);

                    const endDate =
                      getValue(item, [
                        "endDate",
                        "end",
                        "to",
                      ]);

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                        "responsibilities",
                      ]);

                    return (
                      <div key={index}>
                        {jobTitle && (
                          <div className="text-[12px] font-black text-slate-900">
                            {jobTitle}
                          </div>
                        )}

                        {(company ||
                          startDate ||
                          endDate) && (
                          <div className="mt-1.5 text-[9.5px] text-orange-600">
                            {company}

                            {(startDate ||
                              endDate) && (
                              <>
                                {company && " "}
                                •{" "}
                                {startDate || ""}{" "}
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
                              count={4}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </>
          )}

          {/* Creative Work */}

          {validProjects.length > 0 && (
            <div
              className={
                validExperience.length > 0
                  ? "mt-9"
                  : "mt-2"
              }
            >
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-600">
                CREATIVE WORK
              </div>

              <div className="mt-4 space-y-3">
                {validProjects
                  .slice(0, 5)
                  .map((project, index) => {
                    const projectName =
                      getValue(project, [
                        "name",
                        "title",
                        "projectName",
                      ]);

                    const projectDescription =
                      getValue(project, [
                        "description",
                        "details",
                        "summary",
                      ]);

                    const technologies =
                      getTechnologies(
                        project
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
                        {projectName && (
                          <div className="text-[10.5px] font-black text-slate-900">
                            {projectName}
                          </div>
                        )}

                        {projectDescription && (
                          <TinyText className="mt-1.5">
                            {
                              projectDescription
                            }
                          </TinyText>
                        )}

                        {technologies.length >
                          0 && (
                          <div className="mt-2 text-[8.5px] font-semibold tracking-wide text-orange-600">
                            {technologies.join(
                              " • "
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* Achievements */}

          {validAchievements.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-600">
                ACHIEVEMENTS
              </div>

              <div className="mt-4 space-y-4">
                {validAchievements
                  .slice(0, 3)
                  .map((item, index) => {
                    const title =
                      getValue(item, [
                        "title",
                        "name",
                        "achievement",
                      ]);

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                      ]);

                    return (
                      <div key={index}>
                        {title && (
                          <div className="text-[10.5px] font-black text-slate-900">
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

          {/* Certifications */}

          {validCertifications.length > 0 && (
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-600">
                CERTIFICATIONS
              </div>

              <div className="mt-4 space-y-4">
                {validCertifications
                  .slice(0, 3)
                  .map((item, index) => {
                    const name =
                      getValue(item, [
                        "name",
                        "title",
                        "certificate",
                      ]);

                    const issuer =
                      getValue(item, [
                        "issuer",
                        "organization",
                      ]);

                    const date =
                      getValue(item, [
                        "date",
                        "year",
                      ]);

                    return (
                      <div key={index}>
                        {name && (
                          <div className="text-[10.5px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(issuer || date) && (
                          <TinyText className="mt-1">
                            {[issuer, date]
                              .filter(Boolean)
                              .join(" • ")}
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
            <section className="mt-9">
              <div className="text-[11px] font-bold tracking-[0.2em] text-orange-600">
                REFERENCES
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {validReferences
                  .slice(0, 2)
                  .map((item, index) => {
                    const name =
                      getValue(item, [
                        "name",
                        "fullName",
                      ]);

                    const role =
                      getValue(item, [
                        "role",
                        "position",
                        "title",
                      ]);

                    const company =
                      getValue(item, [
                        "company",
                        "organization",
                      ]);

                    const email =
                      getValue(item, [
                        "email",
                      ]);

                    const phone =
                      getValue(item, [
                        "phone",
                        "telephone",
                        "mobile",
                      ]);

                    return (
                      <div key={index}>
                        {name && (
                          <div className="text-[10.5px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(role || company) && (
                          <TinyText className="mt-1">
                            {[role, company]
                              .filter(Boolean)
                              .join(" • ")}
                          </TinyText>
                        )}

                        {email && (
                          <TinyText className="mt-0.5">
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

export default MusePreview;