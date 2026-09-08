import React from "react";

function ProfessionalPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // Same sample data used across all BuildCV templates
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

const certifications = useSampleData
  ? formData.certifications?.enabled &&
    Array.isArray(formData.certifications.items) &&
    formData.certifications.items.length > 0
    ? formData.certifications.items
    : data.certifications?.enabled &&
      Array.isArray(data.certifications.items) &&
      data.certifications.items.length > 0
    ? data.certifications.items
    : Array.isArray(formData.certifications)
    ? formData.certifications
    : Array.isArray(data.certifications)
    ? data.certifications
    : sampleCertifications
  : formData.certifications?.enabled &&
    Array.isArray(formData.certifications.items)
  ? formData.certifications.items
  : Array.isArray(formData.certifications)
  ? formData.certifications
  : [];

const languages = useSampleData
  ? formData.languages?.enabled &&
    Array.isArray(formData.languages.items) &&
    formData.languages.items.length > 0
    ? formData.languages.items
    : data.languages?.enabled &&
      Array.isArray(data.languages.items) &&
      data.languages.items.length > 0
    ? data.languages.items
    : Array.isArray(formData.languages)
    ? formData.languages
    : Array.isArray(data.languages)
    ? data.languages
    : sampleLanguages
  : formData.languages?.enabled &&
    Array.isArray(formData.languages.items)
  ? formData.languages.items
  : Array.isArray(formData.languages)
  ? formData.languages
  : [];

const achievements = useSampleData
  ? formData.achievements?.enabled &&
    Array.isArray(formData.achievements.items) &&
    formData.achievements.items.length > 0
    ? formData.achievements.items
    : data.achievements?.enabled &&
      Array.isArray(data.achievements.items) &&
      data.achievements.items.length > 0
    ? data.achievements.items
    : Array.isArray(formData.achievements)
    ? formData.achievements
    : Array.isArray(data.achievements)
    ? data.achievements
    : sampleAchievements
  : formData.achievements?.enabled &&
    Array.isArray(formData.achievements.items)
  ? formData.achievements.items
  : Array.isArray(formData.achievements)
  ? formData.achievements
  : [];

const interests = useSampleData
  ? formData.interests?.enabled &&
    String(formData.interests.value || "").trim()
    ? String(formData.interests.value)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : data.interests?.enabled &&
      String(data.interests.value || "").trim()
    ? String(data.interests.value)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : Array.isArray(formData.interests)
    ? formData.interests
    : Array.isArray(data.interests)
    ? data.interests
    : sampleInterests
  : formData.interests?.enabled &&
    String(formData.interests.value || "").trim()
  ? String(formData.interests.value)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
  : Array.isArray(formData.interests)
  ? formData.interests
  : [];

const references = useSampleData
  ? formData.references?.enabled &&
    Array.isArray(formData.references.items) &&
    formData.references.items.length > 0
    ? formData.references.items
    : data.references?.enabled &&
      Array.isArray(data.references.items) &&
      data.references.items.length > 0
    ? data.references.items
    : Array.isArray(formData.references)
    ? formData.references
    : Array.isArray(data.references)
    ? data.references
    : sampleReferences
  : formData.references?.enabled &&
    Array.isArray(formData.references.items)
  ? formData.references.items
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
      "tools",
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
        className={`text-[10px] leading-[1.55] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  // =========================================================
  // SECTION TITLE
  // =========================================================

  const SectionTitle = ({ children }) => (
    <div className="text-[11px] font-bold tracking-[0.18em] text-slate-900">
      {children}
    </div>
  );

  // =========================================================
  // EXPERIENCE DESCRIPTION
  // =========================================================

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
            className="relative pl-3 text-[10px] leading-[1.55] text-slate-600"
          >
            <span className="absolute left-0 top-[6px] h-[3px] w-[3px] rounded-full bg-slate-400" />
            {line}
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="min-h-[1123px] w-[794px] overflow-hidden bg-white px-[52px] py-[48px] font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b-4 border-slate-900 pb-6">
        {/* NAME */}

        {personal.fullName && (
          <div className="text-[36px] font-black leading-none text-slate-900">
            {personal.fullName.toUpperCase()}
          </div>
        )}

        {/* JOB TITLE */}

        {personal.jobTitle && (
          <div className="mt-3 text-[12px] font-semibold tracking-[0.18em] text-slate-500">
            {personal.jobTitle.toUpperCase()}
          </div>
        )}

        {/* CONTACT INFORMATION */}

        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin ||
          personal.github) && (
          <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1 text-[10px] text-slate-500">
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
              <span className="break-all">
                {personal.linkedin}
              </span>
            )}

            {personal.github && (
              <>
                {(personal.email ||
                  personal.phone ||
                  personal.location ||
                  personal.linkedin) && (
                  <span>•</span>
                )}

                <span className="break-all">
                  {personal.github}
                </span>
              </>
            )}
          </div>
        )}
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mt-8">
        {/* ===================================================
            PROFESSIONAL SUMMARY
        =================================================== */}

        {personal.summary && (
          <section>
            <SectionTitle>
              PROFESSIONAL SUMMARY
            </SectionTitle>

            <TinyText className="mt-4 max-w-[680px]">
              {personal.summary}
            </TinyText>
          </section>
        )}

        {/* ===================================================
            PROFESSIONAL EXPERIENCE
        =================================================== */}

        {experience.length > 0 && (
          <section className="mt-9">
            <SectionTitle>
              PROFESSIONAL EXPERIENCE
            </SectionTitle>

            <div className="mt-5 space-y-7">
              {experience
                .slice(0, 5)
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
                    "summary",
                  ]);

                  if (
                    !jobTitle &&
                    !company &&
                    !startDate &&
                    !endDate &&
                    !description
                  ) {
                    return null;
                  }

                  return (
                    <div key={index}>
                      {/* JOB HEADER */}

                      {(jobTitle ||
                        startDate ||
                        endDate) && (
                        <div className="flex items-start justify-between gap-6">
                          {jobTitle && (
                            <div className="text-[13px] font-bold text-slate-900">
                              {jobTitle}
                            </div>
                          )}

                          {(startDate || endDate) && (
                            <div className="shrink-0 text-[10px] text-slate-500">
                              {startDate || ""} —{" "}
                              {endDate || "Present"}
                            </div>
                          )}
                        </div>
                      )}

                      {/* COMPANY */}

                      {company && (
                        <div className="mt-1.5 text-[10px] font-semibold text-indigo-600">
                          {company}
                        </div>
                      )}

                      {/* DESCRIPTION */}

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

        {/* ===================================================
            EDUCATION
        =================================================== */}

        {education.length > 0 && (
          <section className="mt-9">
            <SectionTitle>EDUCATION</SectionTitle>

            <div className="mt-5 space-y-5">
              {education
                .slice(0, 3)
                .map((item, index) => {
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

                  if (
                    !degree &&
                    !institution &&
                    !startDate &&
                    !endDate
                  ) {
                    return null;
                  }

                  return (
                    <div key={index}>
                      {degree && (
                        <div className="text-[13px] font-bold text-slate-900">
                          {degree}
                        </div>
                      )}

                      {(institution ||
                        startDate ||
                        endDate) && (
                        <TinyText className="mt-1.5">
                          {institution}

                          {institution &&
                            (startDate || endDate) && (
                              <> • </>
                            )}

                          {(startDate || endDate) && (
                            <>
                              {startDate || ""} —{" "}
                              {endDate || ""}
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
            TECHNICAL SKILLS
        =================================================== */}

        {skills.length > 0 && (
          <section className="mt-9">
            <SectionTitle>
              TECHNICAL SKILLS
            </SectionTitle>

            <TinyText className="mt-4">
              {skills
                .slice(0, 12)
                .map((skill, index) => {
                  const skillName =
                    getSkillName(skill);

                  if (!skillName) {
                    return null;
                  }

                  return (
                    <React.Fragment
                      key={`${skillName}-${index}`}
                    >
                      {index > 0 && " • "}
                      {skillName}
                    </React.Fragment>
                  );
                })}
            </TinyText>
          </section>
        )}

        {/* ===================================================
            SELECTED PROJECTS
        =================================================== */}

        {projects.length > 0 && (
          <section className="mt-9">
            <SectionTitle>
              SELECTED PROJECTS
            </SectionTitle>

            <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-5">
              {projects
                .slice(0, 4)
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

                  if (
                    !projectName &&
                    !description &&
                    technologies.length === 0
                  ) {
                    return null;
                  }

                  return (
                    <div key={`project-${index}`}>
                      {projectName && (
                        <div className="text-[11px] font-bold text-slate-900">
                          {projectName}
                        </div>
                      )}

                      {description && (
                        <TinyText className="mt-1.5">
                          {description}
                        </TinyText>
                      )}

                      {technologies.length > 0 && (
                        <div className="mt-2 text-[8px] font-semibold text-indigo-600">
                          {technologies
                            .slice(0, 4)
                            .join(" • ")}
                        </div>
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

        {achievements.length > 0 && (
          <section className="mt-9">
            <SectionTitle>
              ACHIEVEMENTS
            </SectionTitle>

            <div className="mt-5 grid grid-cols-2 gap-6">
              {achievements
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

                  if (!title && !description) {
                    return null;
                  }

                  return (
                    <div key={`achievement-${index}`}>
                      {title && (
                        <div className="text-[10.5px] font-bold text-slate-900">
                          {title}
                        </div>
                      )}

                      {description && (
                        <TinyText className="mt-1.5">
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
            CERTIFICATIONS
        =================================================== */}

        {certifications.length > 0 && (
          <section className="mt-9">
            <SectionTitle>
              CERTIFICATIONS
            </SectionTitle>

            <div className="mt-5 grid grid-cols-3 gap-5">
              {certifications
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
                    "company",
                  ]);

                  const date = getValue(item, [
                    "date",
                    "year",
                    "issuedDate",
                  ]);

                  if (!name && !issuer && !date) {
                    return null;
                  }

                  return (
                    <div key={`cert-${index}`}>
                      {name && (
                        <div className="text-[9.5px] font-bold text-slate-900">
                          {name}
                        </div>
                      )}

                      {issuer && (
                        <TinyText className="mt-1">
                          {issuer}
                        </TinyText>
                      )}

                      {date && (
                        <div className="mt-1 text-[8px] font-semibold text-indigo-600">
                          {date}
                        </div>
                      )}
                    </div>
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
          <section className="mt-9 grid grid-cols-3 gap-7">
            {/* LANGUAGES */}

            {languages.length > 0 && (
              <div>
                <SectionTitle>
                  LANGUAGES
                </SectionTitle>

                <div className="mt-4 space-y-2.5">
                  {languages
                    .slice(0, 4)
                    .map((item, index) => {
                      const name = getValue(item, [
                        "name",
                        "language",
                        "title",
                      ]);

                      const level = getValue(item, [
                        "level",
                        "proficiency",
                        "fluency",
                      ]);

                      if (!name) {
                        return null;
                      }

                      return (
                        <div
                          key={`language-${index}`}
                        >
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
              </div>
            )}

            {/* INTERESTS */}

            {interests.length > 0 && (
              <div>
                <SectionTitle>
                  INTERESTS
                </SectionTitle>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {interests
                    .slice(0, 6)
                    .map((interest, index) => {
                      const name =
                        typeof interest === "string"
                          ? interest
                          : getValue(interest, [
                              "name",
                              "title",
                              "interest",
                            ]);

                      if (!name) {
                        return null;
                      }

                      return (
                        <span
                          key={`interest-${index}`}
                          className="rounded-full bg-slate-100 px-2 py-1 text-[8px] font-semibold text-slate-500"
                        >
                          {name}
                        </span>
                      );
                    })}
                </div>
              </div>
            )}

            {/* REFERENCES */}

            {references.length > 0 && (
              <div>
                <SectionTitle>
                  REFERENCES
                </SectionTitle>

                <div className="mt-4 space-y-3">
                  {references
                    .slice(0, 2)
                    .map((item, index) => {
                      const name = getValue(item, [
                        "name",
                        "fullName",
                      ]);

                      const role = getValue(item, [
                        "role",
                        "position",
                        "jobTitle",
                      ]);

                      const company = getValue(item, [
                        "company",
                        "organization",
                      ]);

                      if (
                        !name &&
                        !role &&
                        !company
                      ) {
                        return null;
                      }

                      return (
                        <div
                          key={`reference-${index}`}
                        >
                          {name && (
                            <div className="text-[9.5px] font-bold text-slate-900">
                              {name}
                            </div>
                          )}

                          {(role || company) && (
                            <TinyText className="mt-0.5">
                              {role}
                              {role && company
                                ? " • "
                                : ""}
                              {company}
                            </TinyText>
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

export default ProfessionalPreview;