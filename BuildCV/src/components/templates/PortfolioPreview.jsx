
import React from "react";

/* =========================================================
   12. PORTFOLIO
========================================================= */

function PortfolioPreview({
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
        className={`text-[10px] leading-[1.55] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  // =========================================================
  // SECTION TITLE
  // =========================================================

  const SectionTitle = ({
    children,
    color = "text-violet-700",
  }) => (
    <div
      className={`text-[11px] font-bold tracking-[0.2em] ${color}`}
    >
      {children}
    </div>
  );

  // =========================================================
  // SKILL PILL
  // =========================================================

  const SkillPill = ({ children }) => (
    <span className="rounded-full bg-violet-50 px-2.5 py-1.5 text-[9px] font-bold text-violet-700">
      {children}
    </span>
  );

  // =========================================================
  // PROFILE PHOTO
  // =========================================================

  const PhotoCircle = () => {
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
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-violet-200 ring-2 ring-white">
        {personal.profileImage ? (
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[11px] font-black text-violet-700">
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
  const displayTagline = personal.summary;
  const displayAbout = personal.summary;

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-white font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative overflow-hidden bg-violet-50 px-[52px] py-[48px]">
        {/* Decorative circle */}

        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-indigo-200" />

        <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-violet-300/40" />

        <div className="relative flex items-center gap-5">
          {/* Profile Photo */}

          <PhotoCircle />

          <div>
            {/* Name */}

            {displayName && (
              <div className="text-[36px] font-black leading-none text-slate-900">
                {displayName.toUpperCase()}
              </div>
            )}

            {/* Job title */}

            {displayJobTitle && (
              <div className="mt-3 text-[12px] font-semibold tracking-[0.08em] text-violet-700">
                {displayJobTitle.toUpperCase()}
              </div>
            )}

            {/* Tagline */}

            {displayTagline && (
              <TinyText className="mt-3">
                {displayTagline}
              </TinyText>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="grid grid-cols-[1.45fr_0.75fr] gap-8 px-[52px] py-[42px]">
        {/* ===================================================
            MAIN
        =================================================== */}

        <main>
          {/* =================================================
              PROJECTS
          ================================================= */}

          {projects.length > 0 && (
            <section>
              <SectionTitle color="text-violet-700">
                SELECTED PROJECTS
              </SectionTitle>

              <div className="mt-6 space-y-5">
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
                        className="rounded-xl border border-slate-200 p-5"
                      >
                        <div className="flex items-center justify-between gap-4">
                          {/* Project name */}

                          {projectName && (
                            <div className="text-[12px] font-extrabold text-slate-900">
                              {projectName}
                            </div>
                          )}

                          {/* Number */}

                          <span className="shrink-0 rounded-full bg-violet-50 px-2.5 py-1.5 text-[9px] font-bold text-violet-700">
                            {String(index + 1).padStart(
                              2,
                              "0"
                            )}
                          </span>
                        </div>

                        {/* Description */}

                        {description && (
                          <TinyText className="mt-3">
                            {description}
                          </TinyText>
                        )}

                        {/* Technologies */}

                        {technologies.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
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
                                    className="rounded-full bg-violet-50 px-2.5 py-1 text-[8px] font-bold text-violet-700"
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

          {/* =================================================
              ACHIEVEMENTS
          ================================================= */}

          {achievements.length > 0 && (
            <section className="mt-9">
              <SectionTitle color="text-violet-700">
                ACHIEVEMENTS
              </SectionTitle>

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
                        className="border-l-2 border-violet-300 pl-4"
                      >
                        {title && (
                          <div className="text-[11px] font-bold text-slate-900">
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

          {/* =================================================
              CERTIFICATIONS
          ================================================= */}

          {certifications.length > 0 && (
            <section className="mt-9">
              <SectionTitle color="text-violet-700">
                CERTIFICATIONS
              </SectionTitle>

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
                        className="rounded-lg border border-slate-200 p-4"
                      >
                        <div className="text-[10px] font-bold text-slate-900">
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
                            color="text-violet-600"
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
            <section className="mt-9">
              <SectionTitle color="text-violet-700">
                REFERENCES
              </SectionTitle>

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
                      [
                        "role",
                        "position",
                        "title",
                      ]
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
                        className="rounded-lg border border-slate-200 p-4"
                      >
                        {name && (
                          <div className="text-[10px] font-bold text-slate-900">
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

        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="border-l border-slate-200 pl-6">
          {/* =================================================
              ABOUT
          ================================================= */}

          {displayAbout && (
            <section>
              <SectionTitle color="text-violet-700">
                ABOUT
              </SectionTitle>

              <TinyText className="mt-4">
                {displayAbout}
              </TinyText>
            </section>
          )}

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {experience.length > 0 && (
            <div
              className={
                displayAbout
                  ? "mt-9"
                  : "mt-0"
              }
            >
              <SectionTitle color="text-violet-700">
                EXPERIENCE
              </SectionTitle>

              <div className="mt-5 space-y-6">
                {experience
                  .slice(0, 3)
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

                    const endDate =
                      getValue(item, [
                        "endDate",
                        "end",
                        "to",
                      ]);

                    if (
                      !jobTitle &&
                      !company
                    ) {
                      return null;
                    }

                    return (
                      <div key={index}>
                        {/* Job title */}

                        {jobTitle && (
                          <div className="text-[11px] font-bold text-slate-900">
                            {jobTitle}
                          </div>
                        )}

                        {/* Company */}

                        {company && (
                          <TinyText className="mt-1.5">
                            {company}
                          </TinyText>
                        )}

                        {/* Date */}

                        {(startDate ||
                          endDate) && (
                          <TinyText
                            className="mt-1.5"
                            color="text-violet-600"
                          >
                            {startDate || ""} —{" "}
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
              EDUCATION
          ================================================= */}

          {education.length > 0 && (
            <div className="mt-9">
              <SectionTitle color="text-violet-700">
                EDUCATION
              </SectionTitle>

              <div className="mt-5 space-y-5">
                {education
                  .slice(0, 3)
                  .map((item, index) => {
                    const degree = getValue(
                      item,
                      [
                        "degree",
                        "title",
                        "qualification",
                      ]
                    );

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
                          <div className="text-[10px] font-bold text-slate-900">
                            {degree}
                          </div>
                        )}

                        {institution && (
                          <TinyText className="mt-1.5">
                            {institution}
                          </TinyText>
                        )}

                        {(startDate ||
                          endDate) && (
                          <TinyText
                            className="mt-1"
                            color="text-violet-600"
                          >
                            {startDate || ""} —{" "}
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
              SKILLS
          ================================================= */}

          {skills.length > 0 && (
            <div className="mt-9">
              <SectionTitle color="text-violet-700">
                SKILLS
              </SectionTitle>

              <div className="mt-4 flex flex-wrap gap-2">
                {skills
                  .slice(0, 10)
                  .map((skill, index) => {
                    const skillName =
                      getSkillName(skill);

                    if (!skillName) {
                      return null;
                    }

                    return (
                      <SkillPill
                        key={`${skillName}-${index}`}
                      >
                        {skillName}
                      </SkillPill>
                    );
                  })}
              </div>
            </div>
          )}

          {/* =================================================
              LANGUAGES
          ================================================= */}

          {languages.length > 0 && (
            <div className="mt-9">
              <SectionTitle color="text-violet-700">
                LANGUAGES
              </SectionTitle>

              <div className="mt-4 space-y-3">
                {languages
                  .slice(0, 5)
                  .map((language, index) => {
                    const name = getValue(
                      language,
                      [
                        "name",
                        "language",
                        "title",
                      ]
                    );

                    const level = getValue(
                      language,
                      [
                        "level",
                        "proficiency",
                        "fluency",
                      ]
                    );

                    if (!name) {
                      return null;
                    }

                    return (
                      <div key={index}>
                        <div className="text-[10px] font-bold text-slate-900">
                          {name}
                        </div>

                        {level && (
                          <TinyText className="mt-1">
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
            <div className="mt-9">
              <SectionTitle color="text-violet-700">
                INTERESTS
              </SectionTitle>

              <div className="mt-4 flex flex-wrap gap-2">
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

                    if (!value) {
                      return null;
                    }

                    return (
                      <span
                        key={index}
                        className="rounded-full border border-violet-100 bg-violet-50 px-2.5 py-1.5 text-[8px] font-semibold text-violet-700"
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

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="mt-9">
              <SectionTitle color="text-violet-700">
                CONTACT
              </SectionTitle>

              <div className="mt-4 space-y-1.5">
                {personal.email && (
                  <span className="block break-all text-[10px] leading-[1.5] text-slate-500">
                    {personal.email}
                  </span>
                )}

                {personal.phone && (
                  <span className="block text-[10px] leading-[1.5] text-slate-500">
                    {personal.phone}
                  </span>
                )}

                {personal.location && (
                  <span className="block text-[10px] leading-[1.5] text-slate-500">
                    {personal.location}
                  </span>
                )}

                {personal.linkedin && (
                  <span className="block break-all text-[10px] leading-[1.5] text-slate-500">
                    {personal.linkedin}
                  </span>
                )}

                {personal.github && (
                  <span className="block break-all text-[10px] leading-[1.5] text-slate-500">
                    {personal.github}
                  </span>
                )}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

export default PortfolioPreview;
