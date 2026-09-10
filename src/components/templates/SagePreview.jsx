import React from "react";

function SagePreview({
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
  // EXPERIENCE DESCRIPTION
  // =========================================================

  const ResumeLines = ({
    description,
    color = "bg-emerald-200",
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
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName;
  const displayJobTitle = personal.jobTitle;
  const displayLocation = personal.location;
  const displaySummary = personal.summary;

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div className="min-h-[1123px] w-[794px] overflow-hidden bg-[#fbfcf8] px-[52px] py-[48px] font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b-4 border-emerald-900 pb-6">
        <div className="flex items-end justify-between gap-8">
          {/* NAME + TITLE */}

          <div>
            {displayName && (
              <div className="text-[36px] font-black leading-none text-emerald-950">
                {displayName.toUpperCase()}
              </div>
            )}

            {displayJobTitle && (
              <div className="mt-3 text-[12px] font-bold tracking-[0.22em] text-emerald-700">
                {displayJobTitle.toUpperCase()}
              </div>
            )}
          </div>

          {/* CONTACT */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="shrink-0 text-right text-[10px] leading-[1.7] text-slate-500">
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

              {displayLocation && (
                <>
                  {displayLocation}
                  <br />
                </>
              )}

              {personal.linkedin && (
                <>
                  <span className="break-all">
                    {personal.linkedin}
                  </span>
                  <br />
                </>
              )}

              {personal.github && (
                <span className="break-all">
                  {personal.github}
                </span>
              )}
            </div>
          )}
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mt-8 grid grid-cols-[0.72fr_1.5fr] gap-7">
        {/* ===================================================
            SIDEBAR
        =================================================== */}

        <aside className="rounded-2xl bg-emerald-950 p-6 text-white">
          {/* =================================================
              SKILLS
          ================================================= */}

          {skills.length > 0 && (
            <>
              <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-300">
                SKILLS
              </div>

              <div className="mt-6 space-y-5">
                {skills
                  .slice(0, 10)
                  .map((skill, index) => {
                    const skillName =
                      getSkillName(skill);

                    if (!skillName) return null;

                    return (
                      <div
                        key={`${skillName}-${index}`}
                      >
                        <div className="text-[10px] leading-tight">
                          {skillName}
                        </div>

                        <div className="mt-2 h-[4px] rounded-full bg-white/20">
                          <div className="h-full w-4/5 rounded-full bg-emerald-300" />
                        </div>
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
              <div
                className={`${
                  skills.length > 0
                    ? "mt-12"
                    : "mt-2"
                } text-[11px] font-bold tracking-[0.2em] text-emerald-300`}
              >
                EDUCATION
              </div>

              <div className="mt-5 space-y-7">
                {education
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
                          <TinyText color="text-white/80">
                            {degree}
                          </TinyText>
                        )}

                        {institution && (
                          <TinyText
                            className="mt-1.5"
                            color="text-white/50"
                          >
                            {institution}
                          </TinyText>
                        )}

                        {(startDate || endDate) && (
                          <TinyText
                            className="mt-1.5"
                            color="text-emerald-200/70"
                          >
                            {startDate || ""} —{" "}
                            {endDate || ""}
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
            <>
              <div className="mt-12 text-[11px] font-bold tracking-[0.2em] text-emerald-300">
                LANGUAGES
              </div>

              <div className="mt-5 space-y-4">
                {languages
                  .slice(0, 5)
                  .map((language, index) => {
                    const name = getValue(language, [
                      "name",
                      "language",
                      "title",
                    ]);

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
                          <div className="text-[10px] font-medium">
                            {name}
                          </div>
                        )}

                        {level && (
                          <TinyText
                            className="mt-1"
                            color="text-white/50"
                          >
                            {level}
                          </TinyText>
                        )}
                      </div>
                    );
                  })}
              </div>
            </>
          )}

          {/* =================================================
              INTERESTS
          ================================================= */}

          {interests.length > 0 && (
            <>
              <div className="mt-12 text-[11px] font-bold tracking-[0.2em] text-emerald-300">
                INTERESTS
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
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

                    if (!name) return null;

                    return (
                      <span
                        key={`${name}-${index}`}
                        className="rounded-full border border-white/15 px-2.5 py-1 text-[9px] text-white/75"
                      >
                        {name}
                      </span>
                    );
                  })}
              </div>
            </>
          )}
        </aside>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <main>
          {/* =================================================
              PROFILE
          ================================================= */}

          {displaySummary && (
            <section className="rounded-2xl bg-emerald-50 p-6">
              <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-800">
                PROFILE
              </div>

              <TinyText className="mt-4">
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
                displaySummary ? "mt-9" : "mt-2"
              }
            >
              <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-800">
                EXPERIENCE
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

                    const description = getValue(
                      item,
                      [
                        "description",
                        "details",
                        "responsibilities",
                        "summary",
                      ]
                    );

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
                      <div
                        key={index}
                        className="border-l-[3px] border-emerald-200 pl-5"
                      >
                        {/* JOB TITLE */}

                        <div className="flex items-start justify-between gap-5">
                          <div className="text-[13px] font-bold text-slate-900">
                            {jobTitle}
                          </div>

                          {(startDate ||
                            endDate) && (
                            <div className="shrink-0 text-[10px] text-slate-500">
                              {startDate || ""} —{" "}
                              {endDate || "Present"}
                            </div>
                          )}
                        </div>

                        {/* COMPANY */}

                        {company && (
                          <div className="mt-1.5 text-[10px] font-semibold text-emerald-700">
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
                              color="bg-emerald-200"
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
              <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-800">
                SELECTED WORK
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
                      !description &&
                      technologies.length === 0
                    ) {
                      return null;
                    }

                    return (
                      <div
                        key={`${projectName}-${index}`}
                        className="rounded-xl border border-emerald-100 bg-white p-4"
                      >
                        {projectName && (
                          <div className="text-[11px] font-bold text-slate-900">
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
                                    key={`${technology}-${techIndex}`}
                                    className="rounded-full bg-emerald-50 px-2 py-1 text-[8px] font-medium text-emerald-700"
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
              <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-800">
                ACHIEVEMENTS
              </div>

              <div className="mt-5 space-y-4">
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
                      <div
                        key={index}
                        className="border-l-[3px] border-emerald-200 pl-4"
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
              <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-800">
                CERTIFICATIONS
              </div>

              <div className="mt-5 grid grid-cols-2 gap-4">
                {certifications
                  .slice(0, 4)
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
                      "issuedDate",
                    ]);

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
                        className="rounded-xl border border-emerald-100 bg-white p-4"
                      >
                        {name && (
                          <div className="text-[10px] font-bold text-slate-900">
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
                            color="text-emerald-700"
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
              <div className="text-[11px] font-bold tracking-[0.2em] text-emerald-800">
                REFERENCES
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
                      ["role", "position", "title"]
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
                        className="rounded-xl border border-emerald-100 bg-white p-4"
                      >
                        {name && (
                          <div className="text-[11px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(role || company) && (
                          <TinyText className="mt-1.5">
                            {[role, company]
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
        </main>
      </div>
    </div>
  );
}

export default SagePreview;