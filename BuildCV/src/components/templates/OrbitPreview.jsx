import React from "react";

function OrbitPreview({
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
            className="relative pl-3 text-[9.5px] leading-[1.5] text-white/50"
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
    large = false,
    ring = "ring-cyan-300",
    background = "bg-cyan-100",
  }) => {
    const initials =
      personal.fullName
        ?.trim()
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase() || "";

    if (!personal.profileImage && !useSampleData) {
      return null;
    }

    return (
      <div
        className={`${
          large ? "h-16 w-16" : "h-12 w-12"
        } overflow-hidden rounded-full ${background} ring-2 ${ring}`}
      >
        {personal.profileImage ? (
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[11px] font-bold text-slate-900">
            {initials}
          </div>
        )}
      </div>
    );
  };

  // =========================================================
  // OPTIONAL SECTION HELPERS
  // =========================================================

  const hasContact =
    personal.email ||
    personal.phone ||
    personal.location ||
    personal.linkedin ||
    personal.github;

  const displayName = personal.fullName;
  const displayJobTitle = personal.jobTitle;

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-slate-950 font-sans text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative overflow-hidden px-[52px] py-[48px]">
        {/* Orbit decoration */}

        <div className="absolute right-[-40px] top-[-40px] h-44 w-44 rounded-full border border-cyan-400/30">
          <div className="absolute inset-5 rounded-full border border-cyan-400/20" />

          <div className="absolute inset-12 rounded-full bg-cyan-400" />
        </div>

        <div className="relative">
          <PhotoCircle
            large
            ring="ring-cyan-300"
            background="bg-cyan-100"
          />

          {/* Name */}

          {displayName && (
            <div className="mt-5 text-[38px] font-black leading-none">
              {displayName.toUpperCase()}
            </div>
          )}

          {/* Job title */}

          {displayJobTitle && (
            <div className="mt-3 font-mono text-[12px] tracking-[0.2em] text-cyan-300">
              {displayJobTitle.toUpperCase()}
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="px-[52px] py-[40px]">
        <div className="grid grid-cols-[1.45fr_0.7fr] gap-8">
          {/* =================================================
              CAREER ORBIT
          ================================================= */}

          <section>
            {/* PROFILE */}

            {personal.summary && (
              <div className="mb-8">
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-300">
                  PROFILE ORBIT
                </div>

                <p className="mt-4 text-[10px] leading-[1.65] text-white/60">
                  {personal.summary}
                </p>
              </div>
            )}

            {/* EXPERIENCE */}

            {experience.length > 0 && (
              <>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-300">
                  CAREER ORBIT
                </div>

                <div className="relative mt-6 border-l border-cyan-400/30 pl-7">
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
                        "summary",
                      ]);

                      if (
                        !jobTitle &&
                        !company &&
                        !description
                      ) {
                        return null;
                      }

                      const year =
                        startDate || endDate || "";

                      return (
                        <div
                          key={index}
                          className="relative mb-8"
                        >
                          {/* Orbit point */}

                          <div className="absolute -left-[35px] top-0 h-4 w-4 rounded-full border border-cyan-300 bg-slate-950" />

                          {/* Year */}

                          {year && (
                            <div className="font-mono text-[9.5px] text-cyan-300">
                              {year}
                            </div>
                          )}

                          {/* Job */}

                          {jobTitle && (
                            <div className="mt-2 text-[12px] font-bold">
                              {jobTitle}
                            </div>
                          )}

                          {/* Company */}

                          {company && (
                            <div className="mt-1.5 text-[9.5px] text-white/40">
                              {company}

                              {endDate && (
                                <>
                                  {" "}
                                  • {endDate}
                                </>
                              )}
                            </div>
                          )}

                          {/* Description */}

                          {description && (
                            <div className="mt-3">
                              <ResumeLines
                                description={description}
                                color="bg-white/10"
                              />
                            </div>
                          )}
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
              <>
                <div className="mt-2 font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-300">
                  EDUCATION ORBIT
                </div>

                <div className="relative mt-6 border-l border-cyan-400/30 pl-7">
                  {education
                    .slice(0, 2)
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
                        <div
                          key={`education-${index}`}
                          className="relative mb-8"
                        >
                          <div className="absolute -left-[35px] top-0 h-4 w-4 rounded-full border border-cyan-300 bg-slate-950" />

                          {(startDate || endDate) && (
                            <div className="font-mono text-[9.5px] text-cyan-300">
                              {startDate || ""}{" "}
                              {startDate && endDate
                                ? "—"
                                : ""}
                              {endDate || ""}
                            </div>
                          )}

                          {degree && (
                            <div className="mt-2 text-[12px] font-bold">
                              {degree}
                            </div>
                          )}

                          {institution && (
                            <div className="mt-1.5 text-[9.5px] text-white/40">
                              {institution}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </>
            )}

            {/* =================================================
                PROJECTS
            ================================================= */}

            {projects.length > 0 && (
              <div className="mt-2">
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-300">
                  PROJECT ORBIT
                </div>

                <div className="mt-5 space-y-5">
                  {projects
                    .slice(0, 3)
                    .map((project, index) => {
                      const title = getValue(project, [
                        "title",
                        "name",
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
                        <div
                          key={`project-${index}`}
                          className="border-l border-cyan-400/30 pl-4"
                        >
                          {title && (
                            <div className="text-[11px] font-bold">
                              {title}
                            </div>
                          )}

                          {description && (
                            <p className="mt-2 text-[9.5px] leading-[1.55] text-white/50">
                              {description}
                            </p>
                          )}

                          {technologies.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {technologies
                                .slice(0, 4)
                                .map((tech, techIndex) => (
                                  <span
                                    key={`${tech}-${techIndex}`}
                                    className="rounded-full border border-cyan-400/20 px-2 py-1 text-[8px] text-cyan-300"
                                  >
                                    {tech}
                                  </span>
                                ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </section>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside>
            {/* SKILLS */}

            {skills.length > 0 && (
              <>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-300">
                  SKILLS
                </div>

                <div className="mt-5 space-y-3">
                  {skills
                    .slice(0, 10)
                    .map((skill, index) => {
                      const skillName =
                        getSkillName(skill);

                      if (!skillName) {
                        return null;
                      }

                      return (
                        <div
                          key={`${skillName}-${index}`}
                          className="rounded-lg border border-white/10 px-3 py-2.5 text-[9.5px] text-white/80"
                        >
                          {skillName}
                        </div>
                      );
                    })}
                </div>
              </>
            )}

            {/* CONTACT */}

            {hasContact && (
              <div className="mt-10">
                <div className="font-mono text-[11px] tracking-[0.18em] text-cyan-300">
                  CONTACT
                </div>

                <TinyText
                  className="mt-4"
                  color="text-white/50"
                >
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

                  {personal.github && (
                    <>{personal.github}</>
                  )}
                </TinyText>
              </div>
            )}

            {/* LANGUAGES */}

            {languages.length > 0 && (
              <div className="mt-10">
                <div className="font-mono text-[11px] tracking-[0.18em] text-cyan-300">
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

                      if (!name) {
                        return null;
                      }

                      return (
                        <div
                          key={`language-${index}`}
                        >
                          <div className="text-[9.5px] text-white/80">
                            {name}
                          </div>

                          {level && (
                            <div className="mt-1 text-[8.5px] text-white/35">
                              {level}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* INTERESTS */}

            {interests.length > 0 && (
              <div className="mt-10">
                <div className="font-mono text-[11px] tracking-[0.18em] text-cyan-300">
                  INTERESTS
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {interests
                    .slice(0, 8)
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
                          className="rounded-full border border-white/10 px-2.5 py-1 text-[8px] text-white/55"
                        >
                          {name}
                        </span>
                      );
                    })}
                </div>
              </div>
            )}

            {/* CERTIFICATIONS */}

            {certifications.length > 0 && (
              <div className="mt-10">
                <div className="font-mono text-[11px] tracking-[0.18em] text-cyan-300">
                  CERTIFICATIONS
                </div>

                <div className="mt-4 space-y-4">
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

                      if (!name) {
                        return null;
                      }

                      return (
                        <div
                          key={`certification-${index}`}
                        >
                          <div className="text-[9.5px] font-semibold text-white/80">
                            {name}
                          </div>

                          {issuer && (
                            <div className="mt-1 text-[8.5px] text-white/35">
                              {issuer}
                            </div>
                          )}

                          {date && (
                            <div className="mt-1 font-mono text-[8px] text-cyan-300/70">
                              {date}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* =====================================================
            ACHIEVEMENTS / REFERENCES
        ===================================================== */}

        {(achievements.length > 0 ||
          references.length > 0) && (
          <div className="mt-8 grid grid-cols-2 gap-8">
            {/* ACHIEVEMENTS */}

            {achievements.length > 0 && (
              <section>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-300">
                  ACHIEVEMENTS
                </div>

                <div className="mt-4 space-y-4">
                  {achievements
                    .slice(0, 2)
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
                        <div
                          key={`achievement-${index}`}
                        >
                          {title && (
                            <div className="text-[10px] font-bold">
                              {title}
                            </div>
                          )}

                          {description && (
                            <p className="mt-1.5 text-[8.5px] leading-[1.5] text-white/45">
                              {description}
                            </p>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* REFERENCES */}

            {references.length > 0 && (
              <section>
                <div className="font-mono text-[11px] font-bold tracking-[0.18em] text-cyan-300">
                  REFERENCES
                </div>

                <div className="mt-4 space-y-4">
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

                      const email = getValue(item, [
                        "email",
                      ]);

                      if (
                        !name &&
                        !role &&
                        !company &&
                        !email
                      ) {
                        return null;
                      }

                      return (
                        <div
                          key={`reference-${index}`}
                        >
                          {name && (
                            <div className="text-[10px] font-bold">
                              {name}
                            </div>
                          )}

                          {(role || company) && (
                            <div className="mt-1 text-[8.5px] text-white/40">
                              {role}
                              {role && company
                                ? " • "
                                : ""}
                              {company}
                            </div>
                          )}

                          {email && (
                            <div className="mt-1 text-[8px] text-white/35">
                              {email}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default OrbitPreview;