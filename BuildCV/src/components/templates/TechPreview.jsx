import React from "react";

function TechPreview({
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
  // ARRAY DATA HELPER
  // =========================================================

  const getArrayData = (
    formValue,
    dataValue,
    sampleValue
  ) => {
    if (useSampleData) {
      if (
        Array.isArray(formValue) &&
        formValue.length > 0
      ) {
        return formValue;
      }

      if (
        Array.isArray(dataValue) &&
        dataValue.length > 0
      ) {
        return dataValue;
      }

      return sampleValue;
    }

    if (Array.isArray(formValue)) {
      return formValue;
    }

    if (Array.isArray(dataValue)) {
      return dataValue;
    }

    return [];
  };

  // =========================================================
  // RESUME SECTIONS
  // =========================================================

  const experience = getArrayData(
    formData.experience,
    data.experience,
    sampleExperience
  );

  const skills = getArrayData(
    formData.skills,
    data.skills,
    sampleSkills
  );

  const projects = getArrayData(
    formData.projects,
    data.projects,
    sampleProjects
  );

  const education = getArrayData(
    formData.education,
    data.education,
    sampleEducation
  );

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

  // Use user's entered data first
  if (
    formSection?.enabled &&
    Array.isArray(formSection.items) &&
    formSection.items.length > 0
  ) {
    return formSection.items;
  }

  // Otherwise use template data
  if (
    dataSection?.enabled &&
    Array.isArray(dataSection.items) &&
    dataSection.items.length > 0
  ) {
    return dataSection.items;
  }

  // Otherwise use sample data
  return sampleItems;
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
  // -----------------------------------------------------
  // LIVE BUILDER
  // -----------------------------------------------------

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
  // -----------------------------------------------------
  // SAMPLE / TEMPLATE PREVIEW
  // -----------------------------------------------------

  // Use user's interests first
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

  // Otherwise use template interests
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

  // Otherwise use sample interests
  else {
    interests = Array.isArray(sampleInterests)
      ? sampleInterests
      : String(sampleInterests || "")
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
  }
}
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
      "technology",
      "tech",
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
        className={`text-[10px] leading-[1.65] ${color} ${className}`}
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
    count = 3,
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
            className="relative pl-3 text-[10px] leading-[1.55] text-slate-600"
          >
            <span className="absolute left-0 top-[6px] h-[3px] w-[3px] rounded-full bg-cyan-400" />
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
  const displaySummary = personal.summary;

  const hasContact =
    personal.email ||
    personal.phone ||
    personal.location ||
    personal.linkedin ||
    personal.github;

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="min-h-[1123px] w-[794px] overflow-hidden bg-[#f8fafc] font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-slate-950 px-[52px] py-[48px] text-white">
        <div className="flex items-center justify-between gap-8">
          {/* NAME + TITLE */}

          <div>
            {displayName && (
              <div className="font-mono text-[32px] font-bold leading-none tracking-tight">
                {displayName
                  .toUpperCase()
                  .replace(/\s+/g, "_")}
              </div>
            )}

            {displayJobTitle && (
              <div className="mt-3 font-mono text-[11px] tracking-[0.18em] text-cyan-300">
                {displayJobTitle
                  .toUpperCase()
                  .replace(/\s+/g, "_")}
              </div>
            )}
          </div>

          {/* TECH ICON */}

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-cyan-400 bg-cyan-400/10">
            <div className="font-mono text-[13px] font-bold text-cyan-300">
              {"</>"}
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          BODY
      ===================================================== */}

      <div className="grid grid-cols-[0.7fr_1.5fr]">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="min-h-[1027px] bg-slate-900 px-7 py-8 text-white">
          {/* STACK */}

          {skills.length > 0 && (
            <>
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-300">
                STACK
              </div>

              <div className="mt-6 space-y-3">
                {skills
                  .slice(0, 10)
                  .map((skill, index) => {
                    const skillName =
                      getSkillName(skill);

                    if (!skillName) return null;

                    return (
                      <div
                        key={`${skillName}-${index}`}
                        className="rounded-lg bg-white/5 px-4 py-3 font-mono text-[10px] text-white/80"
                      >
                        {skillName}
                      </div>
                    );
                  })}
              </div>
            </>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {education.length > 0 && (
            <div className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-300">
                EDUCATION
              </div>

              <div className="mt-5 space-y-5">
                {education
                  .slice(0, 3)
                  .map((item, index) => {
                    const degree = getValue(item, [
                      "degree",
                      "title",
                      "qualification",
                    ]);

                    const institution =
                      getValue(item, [
                        "institution",
                        "school",
                        "university",
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

                    if (
                      !degree &&
                      !institution
                    ) {
                      return null;
                    }

                    return (
                      <div key={index}>
                        {degree && (
                          <div className="font-mono text-[10px] font-bold text-white/90">
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

                        {(startDate || endDate) && (
                          <TinyText
                            className="mt-1"
                            color="text-cyan-300/70"
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
            </div>
          )}

          {/* =================================================
              LANGUAGES
          ================================================= */}

          {languages.length > 0 && (
            <div className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-300">
                LANGUAGES
              </div>

              <div className="mt-5 space-y-3">
                {languages
                  .slice(0, 5)
                  .map((language, index) => {
                    const name = getValue(
                      language,
                      ["name", "language", "title"]
                    );

                    const level = getValue(
                      language,
                      [
                        "level",
                        "proficiency",
                        "fluency",
                      ]
                    );

                    if (!name) return null;

                    return (
                      <div key={index}>
                        <div className="font-mono text-[10px] text-white/80">
                          {name}
                        </div>

                        {level && (
                          <TinyText
                            className="mt-1"
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

          {/* =================================================
              INTERESTS
          ================================================= */}

          {interests.length > 0 && (
            <div className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-300">
                INTERESTS
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {interests
                  .slice(0, 8)
                  .map((interest, index) => {
                    const value =
                      typeof interest === "string"
                        ? interest
                        : getValue(interest, [
                            "name",
                            "title",
                            "interest",
                          ]);

                    if (!value) return null;

                    return (
                      <span
                        key={index}
                        className="rounded-md bg-white/5 px-2.5 py-1.5 font-mono text-[9px] text-white/65"
                      >
                        {value}
                      </span>
                    );
                  })}
              </div>
            </div>
          )}

          {/* =================================================
              CONTACT
          ================================================= */}

          {hasContact && (
            <div className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-300">
                CONTACT
              </div>

              <div className="mt-5 space-y-3">
                {personal.email && (
                  <TinyText color="text-white/60">
                    {personal.email}
                  </TinyText>
                )}

                {personal.phone && (
                  <TinyText color="text-white/60">
                    {personal.phone}
                  </TinyText>
                )}

                {personal.location && (
                  <TinyText color="text-white/60">
                    {personal.location}
                  </TinyText>
                )}

                {personal.linkedin && (
                  <TinyText color="text-white/60">
                    {personal.linkedin}
                  </TinyText>
                )}

                {personal.github && (
                  <TinyText color="text-white/60">
                    {personal.github}
                  </TinyText>
                )}
              </div>
            </div>
          )}
        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <main className="px-[36px] py-[38px]">
          {/* =================================================
              PROFILE
          ================================================= */}

          {displaySummary && (
            <section>
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-700">
                // PROFILE
              </div>

              <TinyText className="mt-5 max-w-[500px]">
                {displaySummary}
              </TinyText>
            </section>
          )}

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {experience.length > 0 && (
            <section
              className={
                displaySummary
                  ? "mt-10"
                  : "mt-0"
              }
            >
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-700">
                // EXPERIENCE
              </div>

              <div className="mt-5 space-y-6">
                {experience
                  .slice(0, 5)
                  .map((item, index) => {
                    const jobTitle = getValue(
                      item,
                      [
                        "jobTitle",
                        "title",
                        "position",
                        "role",
                      ]
                    );

                    const company = getValue(
                      item,
                      [
                        "company",
                        "companyName",
                        "organization",
                      ]
                    );

                    const startDate =
                      getValue(item, [
                        "startDate",
                        "start",
                        "from",
                      ]);

                    const endDate = getValue(
                      item,
                      [
                        "endDate",
                        "end",
                        "to",
                      ]
                    );

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                        "responsibilities",
                        "summary",
                      ]);

                    if (
                      !jobTitle &&
                      !company &&
                      !description
                    ) {
                      return null;
                    }

                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-cyan-100 bg-white p-5"
                      >
                        {/* JOB TITLE */}

                        <div className="flex items-start justify-between gap-5">
                          <div className="font-mono text-[12px] font-bold text-slate-900">
                            {jobTitle}
                          </div>

                          {(startDate ||
                            endDate) && (
                            <div className="shrink-0 text-[10px] text-slate-500">
                              {startDate || ""}{" "}
                              —{" "}
                              {endDate ||
                                "Present"}
                            </div>
                          )}
                        </div>

                        {/* COMPANY */}

                        {company && (
                          <TinyText
                            className="mt-2"
                            color="text-cyan-700"
                          >
                            {company}
                          </TinyText>
                        )}

                        {/* DESCRIPTION */}

                        {description && (
                          <div className="mt-4">
                            <ResumeLines
                              description={
                                description
                              }
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {projects.length > 0 && (
            <section className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-700">
                // PROJECTS
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {projects
                  .slice(0, 6)
                  .map((project, index) => {
                    const projectName =
                      getValue(project, [
                        "name",
                        "title",
                        "projectName",
                      ]);

                    const description =
                      getValue(project, [
                        "description",
                        "details",
                        "summary",
                      ]);

                    const technologies =
                      getTechnologies(project);

                    if (
                      !projectName &&
                      !description
                    ) {
                      return null;
                    }

                    return (
                      <div
                        key={`${projectName}-${index}`}
                        className="border border-slate-200 bg-white p-4"
                      >
                        {projectName && (
                          <div className="font-mono text-[11px] font-bold text-slate-900">
                            {projectName}
                          </div>
                        )}

                        {description && (
                          <TinyText className="mt-2">
                            {description}
                          </TinyText>
                        )}

                        {technologies.length >
                          0 && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {technologies
                              .slice(0, 4)
                              .map(
                                (
                                  technology,
                                  techIndex
                                ) => (
                                  <span
                                    key={
                                      techIndex
                                    }
                                    className="rounded bg-cyan-50 px-2 py-1 font-mono text-[8px] text-cyan-700"
                                  >
                                    {
                                      technology
                                    }
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

          {/* =================================================
              ACHIEVEMENTS
          ================================================= */}

          {achievements.length > 0 && (
            <section className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-700">
                // ACHIEVEMENTS
              </div>

              <div className="mt-5 space-y-4">
                {achievements
                  .slice(0, 3)
                  .map((item, index) => {
                    const title = getValue(
                      item,
                      [
                        "title",
                        "name",
                        "achievement",
                      ]
                    );

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                        "summary",
                      ]);

                    if (
                      !title &&
                      !description
                    ) {
                      return null;
                    }

                    return (
                      <div
                        key={index}
                        className="border-l-2 border-cyan-400 pl-4"
                      >
                        {title && (
                          <div className="font-mono text-[10px] font-bold text-slate-900">
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

          {/* =================================================
              CERTIFICATIONS
          ================================================= */}

          {certifications.length > 0 && (
            <section className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-700">
                // CERTIFICATIONS
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {certifications
                  .slice(0, 4)
                  .map((item, index) => {
                    const name = getValue(
                      item,
                      [
                        "name",
                        "title",
                        "certification",
                      ]
                    );

                    const issuer = getValue(
                      item,
                      [
                        "issuer",
                        "organization",
                        "provider",
                      ]
                    );

                    const date = getValue(
                      item,
                      [
                        "date",
                        "year",
                        "issuedDate",
                      ]
                    );

                    if (!name) {
                      return null;
                    }

                    return (
                      <div
                        key={index}
                        className="border border-slate-200 bg-white p-4"
                      >
                        <div className="font-mono text-[10px] font-bold text-slate-900">
                          {name}
                        </div>

                        {issuer && (
                          <TinyText className="mt-1">
                            {issuer}
                          </TinyText>
                        )}

                        {date && (
                          <TinyText
                            className="mt-1"
                            color="text-cyan-700"
                          >
                            {date}
                          </TinyText>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* =================================================
              REFERENCES
          ================================================= */}

          {references.length > 0 && (
            <section className="mt-10">
              <div className="font-mono text-[11px] tracking-[0.12em] text-cyan-700">
                // REFERENCES
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {references
                  .slice(0, 4)
                  .map((item, index) => {
                    const name = getValue(
                      item,
                      ["name", "fullName"]
                    );

                    const role = getValue(
                      item,
                      ["role", "position", "title"]
                    );

                    const company = getValue(
                      item,
                      [
                        "company",
                        "organization",
                      ]
                    );

                    const email = getValue(
                      item,
                      ["email"]
                    );

                    if (!name && !role) {
                      return null;
                    }

                    return (
                      <div
                        key={index}
                        className="border border-slate-200 bg-white p-4"
                      >
                        {name && (
                          <div className="font-mono text-[10px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(role || company) && (
                          <TinyText className="mt-1">
                            {[role, company]
                              .filter(Boolean)
                              .join(" · ")}
                          </TinyText>
                        )}

                        {email && (
                          <TinyText className="mt-1">
                            {email}
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

export default TechPreview;