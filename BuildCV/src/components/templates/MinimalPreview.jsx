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
    jobTitle: "Creative Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0182",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Creative developer focused on building thoughtful digital experiences with clean interfaces, accessible interactions, and scalable front-end architecture.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "Senior Frontend Developer",
      company: "Northstar Digital",
      location: "San Francisco, CA",
      startDate: "2022",
      endDate: "Present",
      description: [
        "Built responsive web applications using React and modern JavaScript.",
        "Collaborated with designers and backend engineers to deliver scalable products.",
        "Improved usability and performance across key product experiences.",
      ],
    },
    {
      jobTitle: "Frontend Developer",
      company: "Pixel Studio",
      location: "San Francisco, CA",
      startDate: "2020",
      endDate: "2022",
      description: [
        "Developed reusable interface components and responsive layouts.",
        "Worked closely with product teams to turn concepts into production-ready features.",
      ],
    },
  ];

  const sampleSkills = [
    { name: "React" },
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "HTML & CSS" },
    { name: "Git & GitHub" },
    { name: "Node.js" },
    { name: "UI/UX" },
    { name: "REST APIs" },
  ];

  const sampleEducation = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      location: "Berkeley, CA",
      startDate: "2016",
      endDate: "2020",
      description: "",
    },
  ];

  const sampleProjects = [
    {
      title: "Portfolio Platform",
      name: "Portfolio Platform",
      description:
        "A responsive portfolio platform designed to showcase creative projects and professional experience.",
      technologies: ["React", "JavaScript", "CSS"],
      link: "github.com/oliviacarter/portfolio",
    },
    {
      title: "Task Management App",
      name: "Task Management App",
      description:
        "A clean productivity application for organizing tasks, projects, and daily priorities.",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "github.com/oliviacarter/tasks",
    },
  ];

  const sampleCertifications = [
    {
      name: "Meta Front-End Developer",
      issuer: "Meta",
      date: "2023",
    },
    {
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      date: "2022",
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
  ];

  const sampleAchievements = [
    {
      title: "Developer Community Contributor",
      description:
        "Contributed educational resources and technical content to the developer community.",
    },
    {
      title: "Open Source Contributor",
      description:
        "Participated in open-source projects focused on developer tooling and web accessibility.",
    },
  ];

  const sampleInterests = [
    "Design",
    "Photography",
    "Technology",
    "Travel",
  ];

  const sampleReferences = [
    {
      name: "Michael Anderson",
      position: "Product Director",
      company: "Northstar Digital",
      email: "michael@example.com",
      phone: "+1 415 555 0199",
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

  const getArrayData = (formValue, dataValue, sampleValue = []) => {
    if (useSampleData) {
      if (Array.isArray(formValue) && formValue.length > 0) {
        return formValue;
      }

      if (Array.isArray(dataValue) && dataValue.length > 0) {
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

  const education = getArrayData(
    formData.education,
    data.education,
    sampleEducation
  );

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

  const certifications = getArrayData(
    formData.certifications,
    data.certifications,
    sampleCertifications
  );

  const languages = getArrayData(
    formData.languages,
    data.languages,
    sampleLanguages
  );

  const achievements = getArrayData(
    formData.achievements,
    data.achievements,
    sampleAchievements
  );

  const interests = getArrayData(
    formData.interests,
    data.interests,
    sampleInterests
  );

  const references = getArrayData(
    formData.references,
    data.references,
    sampleReferences
  );

  const getValue = (item, keys = []) => {
    if (!item) return "";

    for (const key of keys) {
      const value = item[key];

      if (
        value !== undefined &&
        value !== null &&
        String(value).trim() !== ""
      ) {
        return value;
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
    if (!description) return [];

    if (Array.isArray(description)) {
      return description
        .flatMap((item) => {
          if (typeof item === "string") {
            return item
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean);
          }

          return [];
        })
        .filter(Boolean);
    }

    return String(description)
      .split("\n")
      .map((line) =>
        line
          .replace(/^[-•*]\s*/, "")
          .trim()
      )
      .filter(Boolean);
  };

  const getTechnologies = (project) => {
    if (!project) return [];

    const technologies =
      project.technologies ||
      project.technology ||
      project.techStack ||
      project.tech ||
      [];

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
        className={`text-[12px] leading-[1.6] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  const SectionTitle = ({ children }) => (
    <div className="mb-4 pb-1 text-[14px] font-extrabold tracking-[0.18em] text-slate-900">
      {children}
    </div>
  );

  const ResumeLines = ({ description }) => {
    const lines = getDescriptionLines(description);

    if (lines.length === 0) return null;

    return (
      <ul className="space-y-2 pb-2">
        {lines.map((line, index) => (
          <li
            key={index}
            className="relative pl-4 text-[12px] leading-[1.6] text-slate-600"
          >
            <span className="absolute left-0 top-[9px] h-[4px] w-[4px] rounded-full bg-slate-400" />
            {line}
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="min-h-[1123px] w-[794px] overflow-visible bg-white px-[52px] py-[48px] font-sans text-slate-900">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b-4 border-slate-900 pb-7">
        <div className="flex items-end justify-between gap-8">
          <div className="min-w-0 flex-1">
            {personal.fullName && (
              <h1 className="text-[46px] font-black leading-none tracking-[-0.04em] text-slate-900">
                {personal.fullName}
              </h1>
            )}

            {personal.jobTitle && (
              <p className="mt-3 pb-1 text-[16px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                {personal.jobTitle}
              </p>
            )}
          </div>

          {personal.profileImage && (
            <div className="h-[88px] w-[88px] shrink-0 overflow-hidden rounded-full border border-slate-200">
              <img
                src={personal.profileImage}
                alt={personal.fullName || "Profile"}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin ||
          personal.github) && (
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 pb-1 text-[12px] leading-[1.55] text-slate-500">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
            {personal.github && <span>{personal.github}</span>}
          </div>
        )}
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mt-9">

        {/* ===================================================
            SUMMARY
        =================================================== */}

        {personal.summary && (
          <section className="mb-9 break-inside-avoid">
            <SectionTitle>Profile</SectionTitle>

            <p className="pb-2 text-[13px] leading-[1.65] text-slate-600">
              {personal.summary}
            </p>
          </section>
        )}

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        {experience.length > 0 && (
          <section className="mb-9">
            <SectionTitle>Experience</SectionTitle>

            <div className="space-y-7">
              {experience.slice(0, 5).map((item, index) => {
                const jobTitle = getValue(item, [
                  "jobTitle",
                  "title",
                  "position",
                  "role",
                ]);

                const company = getValue(item, [
                  "company",
                  "organization",
                  "employer",
                ]);

                const location = getValue(item, [
                  "location",
                  "city",
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
                  <article
                    key={index}
                    className="break-inside-avoid pb-2"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0 flex-1">
                        {jobTitle && (
                          <h3 className="pb-1 text-[15px] font-bold leading-[1.4] text-slate-900">
                            {jobTitle}
                          </h3>
                        )}

                        {(company || location) && (
                          <p className="pb-1 text-[11.5px] font-medium leading-[1.55] text-slate-500">
                            {[company, location]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}
                      </div>

                      {(startDate || endDate) && (
                        <span className="shrink-0 pt-0.5 text-[11.5px] font-medium leading-[1.5] text-slate-500">
                          {[startDate, endDate]
                            .filter(Boolean)
                            .join(" — ")}
                        </span>
                      )}
                    </div>

                    <div className="mt-2">
                      <ResumeLines description={description} />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================
            EDUCATION
        =================================================== */}

        {education.length > 0 && (
          <section className="mb-9">
            <SectionTitle>Education</SectionTitle>

            <div className="space-y-6">
              {education.slice(0, 3).map((item, index) => {
                const degree = getValue(item, [
                  "degree",
                  "title",
                  "program",
                  "qualification",
                ]);

                const institution = getValue(item, [
                  "institution",
                  "school",
                  "university",
                  "college",
                ]);

                const location = getValue(item, [
                  "location",
                  "city",
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
                  "graduationDate",
                ]);

                const description = getValue(item, [
                  "description",
                  "details",
                ]);

                return (
                  <article
                    key={index}
                    className="break-inside-avoid pb-2"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0 flex-1">
                        {degree && (
                          <h3 className="pb-1 text-[14px] font-bold leading-[1.45] text-slate-900">
                            {degree}
                          </h3>
                        )}

                        {(institution || location) && (
                          <p className="pb-1 text-[12px] leading-[1.55] text-slate-500">
                            {[institution, location]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}
                      </div>

                      {(startDate || endDate) && (
                        <span className="shrink-0 pt-0.5 text-[11.5px] leading-[1.5] text-slate-500">
                          {[startDate, endDate]
                            .filter(Boolean)
                            .join(" — ")}
                        </span>
                      )}
                    </div>

                    {description && (
                      <TinyText className="mt-2 pb-2">
                        {description}
                      </TinyText>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================
            SKILLS
        =================================================== */}

        {skills.length > 0 && (
          <section className="mb-9 break-inside-avoid">
            <SectionTitle>Skills</SectionTitle>

            <div className="flex flex-wrap gap-2.5 pb-2">
              {skills.slice(0, 12).map((skill, index) => {
                const name = getSkillName(skill);

                if (!name) return null;

                return (
                  <span
                    key={index}
                    className="rounded border border-slate-200 px-3 py-1.5 text-[12px] font-medium leading-[1.4] text-slate-600"
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================
            PROJECTS
        =================================================== */}

        {projects.length > 0 && (
          <section className="mb-9">
            <SectionTitle>Projects</SectionTitle>

            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {projects.slice(0, 4).map((project, index) => {
                const title = getValue(project, [
                  "title",
                  "name",
                  "projectName",
                ]);

                const description = getValue(project, [
                  "description",
                  "details",
                ]);

                const technologies = getTechnologies(project);

                const link = getValue(project, [
                  "link",
                  "url",
                  "github",
                ]);

                return (
                  <article
                    key={index}
                    className="break-inside-avoid pb-2"
                  >
                    {title && (
                      <h3 className="pb-1 text-[14px] font-bold leading-[1.45] text-slate-900">
                        {title}
                      </h3>
                    )}

                    {description && (
                      <p className="pb-2 text-[12px] leading-[1.6] text-slate-600">
                        {description}
                      </p>
                    )}

                    {technologies.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-1.5 pb-1">
                        {technologies.map((technology, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-[10.5px] font-medium uppercase tracking-[0.05em] text-slate-500"
                          >
                            {technology}
                            {techIndex < technologies.length - 1
                              ? " ·"
                              : ""}
                          </span>
                        ))}
                      </div>
                    )}

                    {link && (
                      <p className="mt-1 break-all text-[10.5px] leading-[1.5] text-slate-400">
                        {link}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================
            ACHIEVEMENTS
        =================================================== */}

        {achievements.length > 0 && (
          <section className="mb-9">
            <SectionTitle>Achievements</SectionTitle>

            <div className="grid grid-cols-2 gap-x-8 gap-y-7">
              {achievements.slice(0, 3).map((item, index) => {
                const title = getValue(item, [
                  "title",
                  "name",
                  "achievement",
                ]);

                const description = getValue(item, [
                  "description",
                  "details",
                ]);

                return (
                  <article
                    key={index}
                    className="break-inside-avoid pb-2"
                  >
                    {title && (
                      <h3 className="pb-1 text-[13px] font-bold leading-[1.45] text-slate-900">
                        {title}
                      </h3>
                    )}

                    {description && (
                      <p className="pb-2 text-[12px] leading-[1.6] text-slate-600">
                        {description}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        {certifications.length > 0 && (
          <section className="mb-9">
            <SectionTitle>Certifications</SectionTitle>

            <div className="grid grid-cols-3 gap-x-7 gap-y-6">
              {certifications.slice(0, 3).map((item, index) => {
                const name = getValue(item, [
                  "name",
                  "title",
                  "certification",
                ]);

                const issuer = getValue(item, [
                  "issuer",
                  "organization",
                  "provider",
                ]);

                const date = getValue(item, [
                  "date",
                  "issueDate",
                  "year",
                ]);

                return (
                  <article
                    key={index}
                    className="break-inside-avoid pb-2"
                  >
                    {name && (
                      <h3 className="pb-1 text-[12px] font-bold leading-[1.5] text-slate-900">
                        {name}
                      </h3>
                    )}

                    {issuer && (
                      <p className="pb-1 text-[11px] leading-[1.55] text-slate-500">
                        {issuer}
                      </p>
                    )}

                    {date && (
                      <p className="text-[10px] leading-[1.5] text-slate-400">
                        {date}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* ===================================================
            LANGUAGES / INTERESTS / REFERENCES
        =================================================== */}

        {(languages.length > 0 ||
          interests.length > 0 ||
          references.length > 0) && (
          <section className="mt-1 grid grid-cols-3 gap-x-8 border-t border-slate-200 pt-8">

            {/* =================================================
                LANGUAGES
            ================================================= */}

            {languages.length > 0 && (
              <div className="break-inside-avoid">
                <SectionTitle>Languages</SectionTitle>

                <div className="space-y-4">
                  {languages.map((language, index) => {
                    const name = getValue(language, [
                      "name",
                      "language",
                    ]);

                    const level = getValue(language, [
                      "level",
                      "proficiency",
                      "fluency",
                    ]);

                    if (!name) return null;

                    return (
                      <div
                        key={index}
                        className="break-inside-avoid pb-1"
                      >
                        <p className="text-[12px] font-semibold leading-[1.5] text-slate-900">
                          {name}
                        </p>

                        {level && (
                          <p className="text-[11px] leading-[1.55] text-slate-500">
                            {level}
                          </p>
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
              <div className="break-inside-avoid">
                <SectionTitle>Interests</SectionTitle>

                <div className="flex flex-wrap gap-2 pb-2">
                  {interests.map((interest, index) => {
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
                        className="border border-slate-200 px-2.5 py-1.5 text-[10.5px] font-medium leading-[1.4] text-slate-500"
                      >
                        {value}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}

            {/* =================================================
                REFERENCES
            ================================================= */}

            {references.length > 0 && (
              <div className="break-inside-avoid">
                <SectionTitle>References</SectionTitle>

                <div className="space-y-5">
                  {references.map((reference, index) => {
                    const name = getValue(reference, [
                      "name",
                      "fullName",
                    ]);

                    const position = getValue(reference, [
                      "position",
                      "jobTitle",
                      "role",
                    ]);

                    const company = getValue(reference, [
                      "company",
                      "organization",
                    ]);

                    const email = getValue(reference, [
                      "email",
                    ]);

                    const phone = getValue(reference, [
                      "phone",
                      "telephone",
                    ]);

                    return (
                      <div
                        key={index}
                        className="break-inside-avoid pb-2"
                      >
                        {name && (
                          <p className="text-[12px] font-semibold leading-[1.5] text-slate-900">
                            {name}
                          </p>
                        )}

                        {(position || company) && (
                          <p className="pb-1 text-[11px] leading-[1.55] text-slate-500">
                            {[position, company]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}

                        {email && (
                          <p className="break-all text-[10.5px] leading-[1.55] text-slate-500">
                            {email}
                          </p>
                        )}

                        {phone && (
                          <p className="text-[10.5px] leading-[1.55] text-slate-500">
                            {phone}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}

export default MinimalPreview;
