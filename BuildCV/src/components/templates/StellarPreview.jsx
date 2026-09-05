
import React from "react";

function StellarPreview({
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

  const education = getArrayData(
    formData.education,
    data.education,
    sampleEducation
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
      "technology",
      "techStack",
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
            className="relative pl-3 text-[10px] leading-[1.55] text-white/55"
          >
            <span
              className={`absolute left-0 top-[6px] h-[3px] w-[3px] rounded-full ${color}`}
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
    ring = "ring-violet-300",
    background = "bg-violet-100",
  }) => {
    const size = large
      ? "h-20 w-20"
      : "h-14 w-14";

    if (personal.profileImage) {
      return (
        <img
          src={personal.profileImage}
          alt={personal.fullName || "Profile"}
          className={`${size} shrink-0 rounded-full object-cover ring-2 ${ring}`}
        />
      );
    }

    // Only show initials in sample mode.
    // Live Builder stays empty when no photo is provided.
    if (!useSampleData) {
      return null;
    }

    const initials = (personal.fullName || "")
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    return (
      <div
        className={`${size} flex shrink-0 items-center justify-center rounded-full ${background} text-[11px] font-black text-violet-900 ring-2 ${ring}`}
      >
        {initials}
      </div>
    );
  };

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName;
  const displayJobTitle = personal.jobTitle;
  const displaySummary = personal.summary;

  const displayTagline = personal.jobTitle
    ? `${personal.jobTitle} • Product • Design Systems`
    : useSampleData
    ? "Frontend • Product • Design Systems"
    : "";

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-[#0b1020] font-sans text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative overflow-hidden px-[52px] py-[48px]">
        {/* Decorative circle */}

        <div className="absolute right-[-55px] top-[-55px] h-56 w-56 rounded-full border border-violet-400/20" />

        <div className="absolute right-[55px] top-[55px] h-3 w-3 rounded-full bg-violet-400" />

        <div className="absolute left-[155px] top-[35px] h-2 w-2 rounded-full bg-cyan-300" />

        <div className="absolute right-[110px] top-[105px] h-1.5 w-1.5 rounded-full bg-violet-300/60" />

        <div className="relative flex items-center gap-6">
          {/* PROFILE PHOTO */}

          <PhotoCircle
            large
            ring="ring-violet-300"
            background="bg-violet-100"
          />

          {/* NAME */}

          <div>
            {displayName && (
              <div className="text-[36px] font-black leading-none tracking-tight text-white">
                {displayName.toUpperCase()}
              </div>
            )}

            {/* JOB TITLE */}

            {displayJobTitle && (
              <div className="mt-3 font-mono text-[11px] tracking-[0.2em] text-violet-300">
                {displayJobTitle.toUpperCase()}
              </div>
            )}

            {/* TAGLINE */}

            {displayTagline && (
              <TinyText
                className="mt-3"
                color="text-white/50"
              >
                {displayTagline}
              </TinyText>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="px-[52px] py-4">
        <div className="grid grid-cols-[1.4fr_0.75fr] gap-7">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <section>
            {/* =================================================
                PROFILE
            ================================================= */}

            {displaySummary && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="font-mono text-[11px] text-violet-300">
                  01 — PROFILE
                </div>

                <div className="mt-4 text-[16px] font-extrabold leading-[1.35]">
                  {displaySummary}
                </div>
              </div>
            )}

            {/* =================================================
                EXPERIENCE
            ================================================= */}

            {experience.length > 0 && (
              <section
                className={
                  displaySummary ? "mt-9" : ""
                }
              >
                <div className="font-mono text-[11px] text-violet-300">
                  02 — EXPERIENCE
                </div>

                <div className="mt-5 space-y-8">
                  {experience
                    .slice(0, 4)
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

                      const startDate = getValue(
                        item,
                        [
                          "startDate",
                          "start",
                          "from",
                        ]
                      );

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
                        !startDate &&
                        !endDate &&
                        !description
                      ) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {/* JOB TITLE + DATE */}

                          <div className="flex items-start justify-between gap-6">
                            {jobTitle && (
                              <div className="text-[13px] font-bold text-white">
                                {jobTitle}
                              </div>
                            )}

                            {(startDate ||
                              endDate) && (
                              <div className="shrink-0 text-[10px] text-white/40">
                                {startDate || ""} —{" "}
                                {endDate || "Present"}
                              </div>
                            )}
                          </div>

                          {/* COMPANY */}

                          {company && (
                            <div className="mt-1.5 text-[10px] text-violet-300">
                              {company}
                            </div>
                          )}

                          {/* DESCRIPTION */}

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

            {/* =================================================
                SELECTED WORK
            ================================================= */}

            {projects.length > 0 && (
              <section className="mt-9">
                <div className="font-mono text-[11px] text-violet-300">
                  05 — SELECTED WORK
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {projects
                    .slice(0, 4)
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
                        !description &&
                        technologies.length === 0
                      ) {
                        return null;
                      }

                      return (
                        <div
                          key={`${projectName}-${index}`}
                          className="rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                          {projectName && (
                            <div className="text-[11px] font-bold text-white">
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
                                .slice(0, 3)
                                .map(
                                  (
                                    technology,
                                    techIndex
                                  ) => (
                                    <span
                                      key={`${technology}-${techIndex}`}
                                      className="rounded-full bg-violet-400/10 px-2 py-1 text-[8px] text-violet-300"
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
                <div className="font-mono text-[11px] text-violet-300">
                  06 — ACHIEVEMENTS
                </div>

                <div className="mt-5 space-y-4">
                  {achievements
                    .slice(0, 3)
                    .map((item, index) => {
                      const title = getValue(
                        item,
                        ["title", "name"]
                      );

                      const description =
                        getValue(item, [
                          "description",
                          "details",
                          "summary",
                        ]);

                      if (!title && !description) {
                        return null;
                      }

                      return (
                        <div
                          key={index}
                          className="border-l-2 border-violet-400/40 pl-4"
                        >
                          {title && (
                            <div className="text-[11px] font-bold text-white">
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
                <div className="font-mono text-[11px] text-violet-300">
                  07 — CERTIFICATIONS
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
                          "certificate",
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

                      if (
                        !name &&
                        !issuer &&
                        !date
                      ) {
                        return null;
                      }

                      return (
                        <div
                          key={index}
                          className="rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                          {name && (
                            <div className="text-[10px] font-bold text-white">
                              {name}
                            </div>
                          )}

                          {issuer && (
                            <TinyText className="mt-1.5">
                              {issuer}
                            </TinyText>
                          )}

                          {date && (
                            <TinyText
                              className="mt-1"
                              color="text-violet-300"
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
                <div className="font-mono text-[11px] text-violet-300">
                  08 — REFERENCES
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {references
                    .slice(0, 2)
                    .map((reference, index) => {
                      const name = getValue(
                        reference,
                        ["name", "fullName"]
                      );

                      const role = getValue(
                        reference,
                        [
                          "role",
                          "position",
                          "title",
                        ]
                      );

                      const company = getValue(
                        reference,
                        [
                          "company",
                          "organization",
                        ]
                      );

                      const email = getValue(
                        reference,
                        ["email"]
                      );

                      const phone = getValue(
                        reference,
                        ["phone", "telephone"]
                      );

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
                        <div
                          key={index}
                          className="rounded-xl border border-white/10 bg-white/5 p-4"
                        >
                          {name && (
                            <div className="text-[11px] font-bold text-white">
                              {name}
                            </div>
                          )}

                          {(role || company) && (
                            <TinyText className="mt-1.5">
                              {[
                                role,
                                company,
                              ]
                                .filter(Boolean)
                                .join(" · ")}
                            </TinyText>
                          )}

                          {email && (
                            <TinyText className="mt-2">
                              {email}
                            </TinyText>
                          )}

                          {phone && (
                            <TinyText>
                              {phone}
                            </TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}
          </section>

          {/* =================================================
              RIGHT SIDEBAR — STACK
          ================================================= */}

          <aside className="rounded-2xl bg-violet-500/10 p-6">
            <div className="font-mono text-[11px] text-violet-300">
              03 — STACK
            </div>

            {skills.length > 0 && (
              <div className="mt-6 space-y-3">
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
                        className="rounded-xl border border-violet-300/10 px-4 py-3 text-[10px] text-white/80"
                      >
                        {skillName}
                      </div>
                    );
                  })}
              </div>
            )}

            {/* =================================================
                EDUCATION
            ================================================= */}

            {education.length > 0 && (
              <div className="mt-10">
                <div className="font-mono text-[11px] text-violet-300">
                  04 — EDUCATION
                </div>

                <div className="mt-5 space-y-5">
                  {education
                    .slice(0, 3)
                    .map((item, index) => {
                      const degree = getValue(
                        item,
                        [
                          "degree",
                          "program",
                          "qualification",
                          "title",
                        ]
                      );

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

                      const endDate = getValue(
                        item,
                        [
                          "endDate",
                          "end",
                          "to",
                        ]
                      );

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
                            <div className="text-[10px] font-semibold text-white/80">
                              {degree}
                            </div>
                          )}

                          {institution && (
                            <TinyText className="mt-1">
                              {institution}
                            </TinyText>
                          )}

                          {(startDate ||
                            endDate) && (
                            <TinyText
                              className="mt-1"
                              color="text-violet-300"
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
                LANGUAGES
            ================================================= */}

            {languages.length > 0 && (
              <div className="mt-10">
                <div className="font-mono text-[11px] text-violet-300">
                  LANGUAGES
                </div>

                <div className="mt-5 space-y-4">
                  {languages
                    .slice(0, 4)
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

                      if (!name && !level) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {name && (
                            <div className="text-[10px] font-medium text-white/80">
                              {name}
                            </div>
                          )}

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
              <div className="mt-10">
                <div className="font-mono text-[11px] text-violet-300">
                  INTERESTS
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {interests
                    .slice(0, 8)
                    .map((interest, index) => {
                      const name =
                        typeof interest ===
                        "string"
                          ? interest
                          : getValue(
                              interest,
                              [
                                "name",
                                "title",
                                "interest",
                              ]
                            );

                      if (!name) {
                        return null;
                      }

                      return (
                        <span
                          key={`${name}-${index}`}
                          className="rounded-full border border-violet-300/10 px-2.5 py-1 text-[9px] text-white/70"
                        >
                          {name}
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
              <div className="mt-10">
                <div className="font-mono text-[11px] text-violet-300">
                  CONTACT
                </div>

                <div className="mt-5 space-y-3">
                  {personal.email && (
                    <div className="break-all text-[10px] leading-[1.5] text-white/50">
                      {personal.email}
                    </div>
                  )}

                  {personal.phone && (
                    <div className="text-[10px] leading-[1.5] text-white/50">
                      {personal.phone}
                    </div>
                  )}

                  {personal.location && (
                    <div className="text-[10px] leading-[1.5] text-white/50">
                      {personal.location}
                    </div>
                  )}

                  {personal.linkedin && (
                    <div className="break-all text-[10px] leading-[1.5] text-white/50">
                      {personal.linkedin}
                    </div>
                  )}

                  {personal.github && (
                    <div className="break-all text-[10px] leading-[1.5] text-white/50">
                      {personal.github}
                    </div>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  );
}

export default StellarPreview;
