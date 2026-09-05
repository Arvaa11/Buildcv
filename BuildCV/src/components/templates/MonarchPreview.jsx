import React from "react";

function MonarchPreview({
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
  // NORMALIZE ARRAYS
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
  // SMALL COMPONENTS
  // =========================================================

  const TinyText = ({
    children,
    className = "",
    color = "text-[#725e5e]",
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
        className={`text-[10px] leading-[1.6] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  const ResumeLines = ({
    description,
  }) => {
    const lines = getDescriptionLines(description);

    // No real content = nothing in live mode
    if (lines.length === 0) {
      return null;
    }

    return (
      <ul className="space-y-2">
        {lines.map((line, index) => (
          <li
            key={index}
            className="relative pl-3 text-[9.5px] leading-[1.55] text-[#725e5e]"
          >
            <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-[#d9bd82]" />
            {line}
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-[#d9bd82]",
    background = "bg-[#f0dfb8]",
  }) => {
    // Real uploaded image
    if (personal.profileImage) {
      return (
        <div
          className={`h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ${ring}`}
        >
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    // In live mode, do not invent initials
    if (!useSampleData) {
      return null;
    }

    // Sample-mode initials
    const initials = (personal.fullName || "OC")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-2 ${ring} ${background}`}
      >
        <span className="font-serif text-[11px] font-bold text-[#4b1720]">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1000px] w-[594px] overflow-hidden bg-[#faf7f2] font-sans text-[#3f2930]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-[#4b1720] px-[52px] py-[48px] text-[#fff8ed]">
        <div className="flex items-center gap-5">
          {/* Profile Photo */}

          {personal.profileImage || useSampleData ? (
            <div className="rounded-full border border-[#d9bd82] p-1">
              <PhotoCircle
                ring="ring-[#d9bd82]"
                background="bg-[#f0dfb8]"
              />
            </div>
          ) : null}

          <div>
            {/* Name */}

            {personal.fullName && (
              <div className="font-serif text-[36px] font-bold leading-none tracking-wide">
                {personal.fullName.toUpperCase()}
              </div>
            )}

            {/* Job Title */}

            {personal.jobTitle && (
              <div className="mt-3 text-[12px] font-semibold tracking-[0.3em] text-[#e3c98e]">
                {personal.jobTitle.toUpperCase()}
              </div>
            )}

            {/* Contact */}

            {(personal.email ||
              personal.phone ||
              personal.location) && (
              <div className="mt-3 text-[9.5px] leading-[1.5] text-[#fff8ed]/60">
                {[
                  personal.email,
                  personal.phone,
                  personal.location,
                ]
                  .filter(Boolean)
                  .join(" • ")}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="px-[52px] py-[48px]">
        <div className="grid grid-cols-[1.4fr_0.75fr] gap-8">
          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <main>
            {/* Professional Profile */}

            {personal.summary && (
              <>
                <div className="font-serif text-[22px] font-bold text-[#4b1720]">
                  PROFESSIONAL PROFILE
                </div>

                <TinyText
                  className="mt-4"
                  color="text-[#725e5e]"
                >
                  {personal.summary}
                </TinyText>
              </>
            )}

            {/* Career */}

            {experience.length > 0 && (
              <section
                className={
                  personal.summary ? "mt-8" : "mt-0"
                }
              >
                <div className="border-b border-[#d9bd82] pb-3 font-serif text-[11px] font-bold tracking-[0.12em] text-[#4b1720]">
                  CAREER
                </div>

                <div className="mt-5 space-y-7">
                  {experience
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

                      const description = getValue(item, [
                        "description",
                        "details",
                        "responsibilities",
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
                          {/* Role */}

                          {jobTitle && (
                            <div className="text-[12px] font-bold leading-tight text-[#3f2930]">
                              {jobTitle}
                            </div>
                          )}

                          {/* Company + Dates */}

                          {(company ||
                            startDate ||
                            endDate) && (
                            <div className="mt-1.5 text-[9.5px] text-[#8c6d39]">
                              {company}

                              {(startDate || endDate) && (
                                <>
                                  {company && " • "}
                                  {startDate || ""} —{" "}
                                  {endDate || "Present"}
                                </>
                              )}
                            </div>
                          )}

                          {/* Description */}

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

            {/* =================================================
                SELECTED WORK
            ================================================= */}

            {projects.length > 0 && (
              <section className="mt-8">
                <div className="border-b border-[#d9bd82] pb-3 font-serif text-[11px] font-bold tracking-[0.12em] text-[#4b1720]">
                  SELECTED WORK
                </div>

                <div className="mt-5 space-y-5">
                  {projects
                    .slice(0, 3)
                    .map((project, index) => {
                      const title = getValue(project, [
                        "title",
                        "name",
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

                      if (
                        !title &&
                        !description &&
                        technologies.length === 0
                      ) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {title && (
                            <div className="text-[11.5px] font-bold text-[#3f2930]">
                              {title}
                            </div>
                          )}

                          {description && (
                            <TinyText
                              className="mt-1.5"
                              color="text-[#725e5e]"
                            >
                              {description}
                            </TinyText>
                          )}

                          {technologies.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {technologies.map(
                                (technology, techIndex) => (
                                  <span
                                    key={`${technology}-${techIndex}`}
                                    className="rounded-full bg-[#eadbbf] px-2 py-1 text-[8px] font-semibold text-[#4b1720]"
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
              <section className="mt-8">
                <div className="border-b border-[#d9bd82] pb-3 font-serif text-[11px] font-bold tracking-[0.12em] text-[#4b1720]">
                  ACHIEVEMENTS
                </div>

                <div className="mt-5 space-y-5">
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
                        <div key={index}>
                          {title && (
                            <div className="text-[11px] font-bold text-[#3f2930]">
                              {title}
                            </div>
                          )}

                          {description && (
                            <TinyText
                              className="mt-1"
                              color="text-[#725e5e]"
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

            {/* =================================================
                CERTIFICATIONS
            ================================================= */}

            {certifications.length > 0 && (
              <section className="mt-8">
                <div className="border-b border-[#d9bd82] pb-3 font-serif text-[11px] font-bold tracking-[0.12em] text-[#4b1720]">
                  CERTIFICATIONS
                </div>

                <div className="mt-5 space-y-4">
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
                        "provider",
                      ]);

                      const date = getValue(item, [
                        "date",
                        "year",
                      ]);

                      if (!name && !issuer && !date) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {name && (
                            <div className="text-[10.5px] font-bold text-[#3f2930]">
                              {name}
                            </div>
                          )}

                          {(issuer || date) && (
                            <TinyText
                              className="mt-1"
                              color="text-[#725e5e]"
                            >
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

            {/* =================================================
                REFERENCES
            ================================================= */}

            {references.length > 0 && (
              <section className="mt-8">
                <div className="border-b border-[#d9bd82] pb-3 font-serif text-[11px] font-bold tracking-[0.12em] text-[#4b1720]">
                  REFERENCES
                </div>

                <div className="mt-5 grid grid-cols-2 gap-5">
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
                        "telephone",
                      ]);

                      if (
                        !name &&
                        !role &&
                        !company &&
                        !email &&
                        !phone
                      ) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {name && (
                            <div className="text-[10.5px] font-bold text-[#3f2930]">
                              {name}
                            </div>
                          )}

                          {(role || company) && (
                            <TinyText
                              className="mt-1"
                              color="text-[#8c6d39]"
                            >
                              {[role, company]
                                .filter(Boolean)
                                .join(" • ")}
                            </TinyText>
                          )}

                          {(email || phone) && (
                            <TinyText
                              className="mt-1"
                              color="text-[#725e5e]"
                            >
                              {[email, phone]
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
          </main>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="border-l border-[#dfcdbb] pl-6">
            {/* =================================================
                SIGNATURE SKILLS
            ================================================= */}

            {skills.length > 0 && (
              <>
                <div className="text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
                  SIGNATURE SKILLS
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skills
                    .slice(0, 10)
                    .map((skill, index) => {
                      const skillName =
                        getSkillName(skill);

                      if (!skillName) {
                        return null;
                      }

                      return (
                        <span
                          key={`${skillName}-${index}`}
                          className="rounded-full bg-[#eadbbf] px-3 py-1.5 text-[9px] font-semibold leading-tight text-[#4b1720]"
                        >
                          {skillName}
                        </span>
                      );
                    })}
                </div>
              </>
            )}

            {/* =================================================
                EDUCATION
            ================================================= */}

            {education.length > 0 && (
              <>
                <div className="mt-9 text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
                  EDUCATION
                </div>

                <div className="mt-4 space-y-6">
                  {education
                    .slice(0, 3)
                    .map((item, index) => {
                      const degree = getValue(item, [
                        "degree",
                        "program",
                        "qualification",
                        "title",
                      ]);

                      const institution = getValue(
                        item,
                        [
                          "institution",
                          "university",
                          "school",
                          "college",
                        ]
                      );

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
                            <div className="text-[10.5px] font-bold leading-[1.35] text-[#3f2930]">
                              {degree}
                            </div>
                          )}

                          {(institution ||
                            startDate ||
                            endDate) && (
                            <TinyText
                              color="text-[#725e5e]"
                              className="mt-1.5"
                            >
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
              </>
            )}

            {/* =================================================
                LANGUAGES
            ================================================= */}

            {languages.length > 0 && (
              <div className="mt-9">
                <div className="text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
                  LANGUAGES
                </div>

                <div className="mt-4 space-y-3">
                  {languages
                    .slice(0, 4)
                    .map((language, index) => {
                      const name = getValue(language, [
                        "name",
                        "language",
                        "title",
                      ]);

                      const level = getValue(language, [
                        "level",
                        "proficiency",
                        "fluency",
                      ]);

                      if (!name && !level) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          <div className="text-[10px] font-semibold text-[#3f2930]">
                            {name}
                          </div>

                          {level && (
                            <TinyText
                              color="text-[#725e5e]"
                              className="mt-0.5"
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
              <div className="mt-9">
                <div className="text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
                  INTERESTS
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {interests
                    .slice(0, 8)
                    .map((interest, index) => {
                      const interestName =
                        typeof interest === "string"
                          ? interest
                          : getValue(interest, [
                              "name",
                              "title",
                              "interest",
                            ]);

                      if (!interestName) {
                        return null;
                      }

                      return (
                        <span
                          key={`${interestName}-${index}`}
                          className="rounded-full bg-[#eadbbf] px-2.5 py-1 text-[8.5px] font-semibold text-[#4b1720]"
                        >
                          {interestName}
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
                <div className="text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
                  CONTACT
                </div>

                <TinyText
                  color="text-[#725e5e]"
                  className="mt-4"
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
          </aside>
        </div>
      </div>
    </div>
  );
}

export default MonarchPreview;