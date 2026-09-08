import React from "react";

function MinimalPreview({
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
      "Thoughtful frontend developer creating simple, accessible interfaces and useful digital products with modern web technologies.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "Senior Frontend Developer",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description:
        "Built scalable React interfaces for customer-facing digital products.\nCollaborated with designers and product teams to create accessible user experiences.\nImproved frontend architecture, performance, and reusable component patterns.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Brightline Technologies",
      startDate: "2022",
      endDate: "2024",
      description:
        "Developed responsive web applications using React and JavaScript.\nTranslated design concepts into polished and reusable interfaces.\nWorked with backend developers to integrate APIs and deliver reliable features.",
    },
    {
      jobTitle: "Junior Web Developer",
      company: "Studio North",
      startDate: "2020",
      endDate: "2022",
      description:
        "Created responsive websites using HTML, CSS, and JavaScript.\nFixed interface issues and supported ongoing product improvements.\nCollaborated with team members throughout development and testing.",
    },
  ];

  const sampleEducation = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      startDate: "2016",
      endDate: "2020",
    },
    {
      degree: "Web Development Certificate",
      institution: "Design & Technology Institute",
      startDate: "2019",
      endDate: "2020",
    },
  ];

  const sampleSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML & CSS",
    "Responsive Design",
    "Git & GitHub",
    "REST APIs",
    "UI Development",
    "Accessibility",
    "Figma",
  ];

  const sampleProjects = [
    {
      name: "BuildCV",
      title: "BuildCV",
      description:
        "A modern resume builder with live previews and customizable professional templates.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      name: "Analytics Dashboard",
      title: "Analytics Dashboard",
      description:
        "A responsive dashboard for presenting business metrics through clean and intuitive interfaces.",
      technologies: ["React", "TypeScript", "Charts"],
    },
    {
      name: "TaskFlow",
      title: "TaskFlow",
      description:
        "A lightweight productivity application designed for organizing tasks and daily workflows.",
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
        "Built reusable interface patterns that improved consistency across digital products.",
    },
    {
      title: "Accessibility Initiative",
      description:
        "Helped introduce accessible design and development practices across product interfaces.",
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
        className={`text-[10.5px] leading-[1.65] text-slate-500 ${className}`}
      >
        {children}
      </p>
    );
  };

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
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-slate-400" />
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
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-slate-300" />
              Professional responsibility or achievement
            </li>
          )
        )}
      </ul>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-[1123px] w-[794px] overflow-hidden bg-white px-[52px] py-[48px] font-sans text-slate-900">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header>
        {/* Name */}

        {personal.fullName && (
          <div className="text-[38px] font-light leading-none tracking-[-0.04em] text-slate-900">
            {personal.fullName}
          </div>
        )}

        {/* Job Title */}

        {personal.jobTitle && (
          <div className="mt-3 text-[13px] tracking-[0.28em] text-slate-400">
            {personal.jobTitle.toUpperCase()}
          </div>
        )}

        {/* Contact */}

        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin ||
          personal.github) && (
          <div className="mt-3 flex flex-wrap gap-x-2 text-[9.5px] leading-[1.5] text-slate-400">
            {[
              personal.email,
              personal.phone,
              personal.location,
              personal.linkedin,
              personal.github,
            ]
              .filter(Boolean)
              .map((item, index, array) => (
                <React.Fragment
                  key={`${item}-${index}`}
                >
                  {item}

                  {index < array.length - 1 && (
                    <span>•</span>
                  )}
                </React.Fragment>
              ))}
          </div>
        )}

        {/* Divider */}

        <div className="mt-6 h-px bg-slate-100" />
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mt-8">
        {/* ===================================================
            ABOUT
        =================================================== */}

        {personal.summary && (
          <section>
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              About
            </div>

            <TinyText className="mt-4 max-w-[90%]">
              {personal.summary}
            </TinyText>
          </section>
        )}

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        {validExperience.length > 0 && (
          <section
            className={
              personal.summary ? "mt-8" : "mt-1"
            }
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Experience
            </div>

            <div className="mt-5 space-y-7">
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
                ]);

                return (
                  <div key={index}>
                    {/* Job Title + Date */}

                    <div className="flex items-start justify-between gap-5">
                      {jobTitle && (
                        <div className="text-[12px] font-semibold leading-tight text-slate-900">
                          {jobTitle}
                        </div>
                      )}

                      {(startDate || endDate) && (
                        <div className="shrink-0 text-[9.5px] text-slate-400">
                          {startDate || ""} —{" "}
                          {endDate || "Present"}
                        </div>
                      )}
                    </div>

                    {/* Company */}

                    {company && (
                      <TinyText className="mt-1.5">
                        {company}
                      </TinyText>
                    )}

                    {/* Description */}

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
          </section>
        )}

        {/* ===================================================
            EDUCATION
        =================================================== */}

        {validEducation.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Education
            </div>

            <div className="mt-5 space-y-6">
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
                  <div key={index}>
                    {degree && (
                      <div className="text-[12px] font-semibold leading-tight text-slate-900">
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

        {/* ===================================================
            SKILLS
        =================================================== */}

        {finalSkills.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Skills
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">
              {finalSkills.slice(0, 10).map(
                (skill, index) => (
                  <div
                    key={`${skill}-${index}`}
                    className="border-b border-slate-100 pb-2 text-[10px] text-slate-600"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>
          </section>
        )}

        {/* ===================================================
            PROJECTS
        =================================================== */}

        {validProjects.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Projects
            </div>

            <div className="mt-5 space-y-5">
              {validProjects.slice(0, 3).map(
                (project, index) => {
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
                        <div className="text-[11px] font-semibold text-slate-900">
                          {name}
                        </div>
                      )}

                      {description && (
                        <TinyText className="mt-1.5">
                          {description}
                        </TinyText>
                      )}

                      {techText && (
                        <div className="mt-1.5 text-[8.5px] text-slate-400">
                          {techText}
                        </div>
                      )}
                    </div>
                  );
                }
              )}
            </div>
          </section>
        )}

        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        {validCertifications.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Certifications
            </div>

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

        {/* ===================================================
            ACHIEVEMENTS
        =================================================== */}

        {validAchievements.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Achievements
            </div>

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

        {/* ===================================================
            LANGUAGES
        =================================================== */}

        {validLanguages.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Languages
            </div>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
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
          </section>
        )}

        {/* ===================================================
            INTERESTS
        =================================================== */}

        {validInterests.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              Interests
            </div>

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
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
                      className="text-[10px] text-slate-500"
                    >
                      {name}
                    </span>
                  );
                })}
            </div>
          </section>
        )}

        {/* ===================================================
            REFERENCES
        =================================================== */}

        {validReferences.length > 0 && (
          <section className="mt-8">
            <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              References
            </div>

            <div className="mt-5 grid grid-cols-2 gap-6">
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
                        <TinyText>{company}</TinyText>
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
      </main>
    </div>
  );
}

export default MinimalPreview;