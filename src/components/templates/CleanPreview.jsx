import React from "react";

function CleanPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE PERSONAL DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Olivia Carter",
    jobTitle: "Senior Frontend Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0187",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Frontend developer with 5+ years of experience building responsive, accessible, and high-performance web applications. Passionate about creating clean interfaces, reusable components, and thoughtful digital experiences.",
    profileImage: "",
  };

  // =========================================================
  // SAMPLE EDUCATION
  // =========================================================

  const sampleEducation = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      startDate: "2015",
      endDate: "2019",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Lincoln High School",
      startDate: "2013",
      endDate: "2015",
    },
  ];

  // =========================================================
  // SAMPLE EXPERIENCE
  // =========================================================

  const sampleExperience = [
    {
      jobTitle: "Senior Frontend Developer",
      company: "PixelCraft Studio",
      startDate: "2023",
      endDate: "Present",
      description: [
        "Built responsive web applications using React and TypeScript.",
        "Created reusable UI components and improved application performance.",
        "Collaborated with designers and backend developers to deliver polished user experiences.",
      ],
    },
    {
      jobTitle: "Frontend Developer",
      company: "Nova Technologies",
      startDate: "2021",
      endDate: "2023",
      description: [
        "Developed modern interfaces using React, JavaScript, and CSS.",
        "Integrated REST APIs and created reusable frontend features.",
        "Improved usability, accessibility, and cross-browser compatibility.",
      ],
    },
    {
      jobTitle: "Junior Web Developer",
      company: "Bright Digital",
      startDate: "2019",
      endDate: "2021",
      description: [
        "Implemented responsive layouts for client websites.",
        "Maintained frontend features and fixed UI issues.",
        "Worked with the design team to translate mockups into functional pages.",
      ],
    },
  ];

  // =========================================================
  // SAMPLE SKILLS
  // =========================================================

  const sampleSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "Next.js",
    "Figma",
    "Responsive Design",
    "UI Development",
  ];

  // =========================================================
  // SAMPLE PROJECTS
  // =========================================================

  const sampleProjects = [
    {
      name: "E-Commerce Platform",
      description:
        "Developed a responsive shopping platform with reusable React components, product filtering, authentication, and REST API integration.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
      ],
      liveUrl: "shoply-demo.com",
      githubUrl: "github.com/oliviacarter/shoply",
    },
    {
      name: "Task Management Dashboard",
      description:
        "Created a productivity dashboard with interactive task management, responsive layouts, charts, and organized project workflows.",
      technologies: [
        "React",
        "JavaScript",
        "Chart.js",
        "CSS",
      ],
      liveUrl: "taskflow-demo.com",
      githubUrl: "github.com/oliviacarter/taskflow",
    },
    {
      name: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio focused on accessibility, performance, responsive design, and modern visual presentation.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
      liveUrl: "oliviacarter.dev",
      githubUrl: "github.com/oliviacarter/portfolio",
    },
  ];

  // =========================================================
  // SAMPLE CERTIFICATIONS
  // =========================================================

  const sampleCertifications = [
    {
      name: "Meta Front-End Developer",
      organization: "Meta",
      date: "2022",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      organization: "freeCodeCamp",
      date: "2021",
    },
    {
      name: "Responsive Web Design",
      organization: "freeCodeCamp",
      date: "2020",
    },
  ];

  // =========================================================
  // SAMPLE LANGUAGES
  // =========================================================

  const sampleLanguages = [
    {
      language: "English",
      level: "Fluent",
    },
    {
      language: "Spanish",
      level: "Intermediate",
    },
    {
      language: "French",
      level: "Basic",
    },
  ];

  // =========================================================
  // SAMPLE ACHIEVEMENTS
  // =========================================================

  const sampleAchievements = [
    {
      title: "Employee of the Year",
      description:
        "Recognized for outstanding contribution to product development and team collaboration.",
      date: "2024",
    },
    {
      title: "Best UI Implementation",
      description:
        "Recognized for delivering a polished and accessible interface for a major product release.",
      date: "2023",
    },
  ];

  // =========================================================
  // SAMPLE INTERESTS
  // =========================================================

  const sampleInterests =
    "UI/UX Design, Open Source, Photography, Technology";

  // =========================================================
  // SAMPLE REFERENCES
  // =========================================================

  const sampleReferences = [
    {
      name: "Daniel Wilson",
      position: "Product Manager",
      company: "PixelCraft Studio",
      email: "daniel.wilson@example.com",
    },
    {
      name: "Sarah Mitchell",
      position: "Engineering Manager",
      company: "Nova Technologies",
      email: "sarah.mitchell@example.com",
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
  // REQUIRED SECTIONS
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

  const getTechnologies = (project) => {
    if (!project) {
      return [];
    }

    if (Array.isArray(project.technologies)) {
      return project.technologies.filter(Boolean);
    }

    if (typeof project.technologies === "string") {
      return project.technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
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

  // =========================================================
  // VALID OPTIONAL DATA
  // =========================================================

  const validCertifications = certifications.filter(
    (item) =>
      getValue(item, ["name", "title"]) ||
      getValue(item, ["organization", "issuer"]) ||
      getValue(item, ["date"])
  );

  const validLanguages = languages.filter(
    (item) =>
      getValue(item, ["language", "name"]) ||
      getValue(item, ["level", "proficiency"])
  );

  const validAchievements = achievements.filter(
    (item) =>
      getValue(item, ["title", "name"]) ||
      getValue(item, ["description", "details"]) ||
      getValue(item, ["date"])
  );

  const validReferences = references.filter(
    (item) =>
      getValue(item, ["name"]) ||
      getValue(item, ["position", "role"]) ||
      getValue(item, ["company", "organization"]) ||
      getValue(item, ["email"]) ||
      getValue(item, ["phone"])
  );

  const validProjects = projects.filter(
    (project) =>
      getValue(project, [
        "name",
        "title",
        "projectName",
      ]) ||
      getValue(project, [
        "description",
        "details",
        "summary",
      ]) ||
      getTechnologies(project).length > 0
  );

  // =========================================================
  // DISPLAY SKILLS
  // =========================================================

  const displaySkills = skills
    .map(getSkillName)
    .filter(Boolean);

  // =========================================================
  // SMALL COMPONENTS
  // =========================================================

  const SectionTitle = ({ children }) => (
    <h2
      className="
        text-[14px]
        font-bold
        uppercase
        tracking-[0.16em]
        text-slate-400
      "
    >
      {children}
    </h2>
  );

  const TinyText = ({
    children,
    className = "",
  }) => (
    <p
      className={`
        text-[12.5px]
        leading-[1.55]
        text-slate-500
        ${className}
      `}
    >
      {children}
    </p>
  );

  const ResumeLines = ({ description }) => {
    const lines = getDescriptionLines(description);

    if (!useSampleData && lines.length === 0) {
      return null;
    }

    const displayLines = lines.length
      ? lines
      : [
          "Built responsive interfaces and created polished digital experiences.",
          "Collaborated with teams to improve usability and performance.",
          "Implemented reusable components and maintained clean frontend architecture.",
        ];

    return (
      <ul className="mt-2.5 space-y-1.5 pl-4">
        {displayLines.map((line, index) => (
          <li
            key={index}
            className="
              relative
              text-[11.5px]
              leading-[1.55]
              text-slate-500
            "
          >
            <span
              className="
                absolute
                -left-3
                top-[9px]
                h-[3px]
                w-[3px]
                rounded-full
                bg-slate-300
              "
            />

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
    <div
      className="
        box-border
        h-auto
        min-h-[1123px]
        w-[794px]
        overflow-visible
        bg-white
        px-[38px]
        py-[40px]
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          flex
          items-start
          justify-between
          gap-7
          border-b
          border-slate-200
          pb-7
        "
      >
        <div className="min-w-0 flex-1">
          {personal.fullName && (
            <h1
              className="
                text-[46px]
                font-bold
                uppercase
                leading-[1.03]
                tracking-[-0.03em]
                text-slate-900
              "
            >
              {personal.fullName}
            </h1>
          )}

          {personal.jobTitle && (
            <p
              className="
                mt-3
                text-[17px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-slate-500
              "
            >
              {personal.jobTitle}
            </p>
          )}
        </div>

        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin ||
          personal.github) && (
          <div
            className="
              w-[238px]
              shrink-0
              space-y-1.5
              pt-1
              text-right
            "
          >
            {personal.email && (
              <p className="truncate text-[12px] text-slate-500">
                {personal.email}
              </p>
            )}

            {personal.phone && (
              <p className="truncate text-[12px] text-slate-500">
                {personal.phone}
              </p>
            )}

            {personal.location && (
              <p className="truncate text-[12px] text-slate-500">
                {personal.location}
              </p>
            )}

            {personal.linkedin && (
              <p className="truncate text-[12px] text-slate-500">
                {personal.linkedin}
              </p>
            )}

            {personal.github && (
              <p className="truncate text-[12px] text-slate-500">
                {personal.github}
              </p>
            )}
          </div>
        )}
      </header>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          mt-8
          grid
          grid-cols-[0.68fr_1.5fr]
          gap-6
        "
      >
        {/* ===================================================
            LEFT SIDEBAR
        ==================================================== */}

        <aside className="space-y-8">
          {/* CONTACT */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <section>
              <SectionTitle>Contact</SectionTitle>

              <div className="mt-3 space-y-2">
                {personal.email && (
                  <TinyText>{personal.email}</TinyText>
                )}

                {personal.phone && (
                  <TinyText>{personal.phone}</TinyText>
                )}

                {personal.location && (
                  <TinyText>{personal.location}</TinyText>
                )}

                {personal.linkedin && (
                  <TinyText>{personal.linkedin}</TinyText>
                )}

                {personal.github && (
                  <TinyText>{personal.github}</TinyText>
                )}
              </div>
            </section>
          )}

          {/* SKILLS */}

          {displaySkills.length > 0 && (
            <section>
              <SectionTitle>Skills</SectionTitle>

              <div className="mt-3 flex flex-wrap gap-2">
                {displaySkills.map(
                  (skill, index) => (
                    <span
                      key={`${skill}-${index}`}
                      className="
                        rounded-md
                        border
                        border-slate-200
                        bg-slate-50
                        px-2.5
                        py-1.5
                        text-[11px]
                        font-medium
                        text-slate-600
                      "
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </section>
          )}

          {/* EDUCATION */}

          {education.length > 0 && (
            <section>
              <SectionTitle>Education</SectionTitle>

              <div className="mt-4 space-y-5">
                {education.map((item, index) => {
                  const degree = getValue(item, [
                    "degree",
                    "title",
                    "qualification",
                    "program",
                  ]);

                  const institution = getValue(
                    item,
                    [
                      "institution",
                      "school",
                      "university",
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
                    <article key={item.id || index}>
                      {degree && (
                        <p
                          className="
                            text-[13px]
                            font-semibold
                            leading-[1.35]
                            text-slate-800
                          "
                        >
                          {degree}
                        </p>
                      )}

                      {institution && (
                        <TinyText className="mt-1">
                          {institution}
                        </TinyText>
                      )}

                      {(startDate || endDate) && (
                        <p
                          className="
                            mt-1
                            text-[10.5px]
                            text-slate-400
                          "
                        >
                          {startDate}
                          {startDate && endDate
                            ? " — "
                            : ""}
                          {endDate}
                        </p>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* LANGUAGES */}

          {validLanguages.length > 0 && (
            <section>
              <SectionTitle>
                Languages
              </SectionTitle>

              <div className="mt-4 space-y-4">
                {validLanguages.map(
                  (item, index) => {
                    const language = getValue(
                      item,
                      ["language", "name"]
                    );

                    const level = getValue(
                      item,
                      ["level", "proficiency"]
                    );

                    if (!language && !level) {
                      return null;
                    }

                    return (
                      <div
                        key={
                          item.id ||
                          `${language}-${index}`
                        }
                      >
                        <div className="flex items-center justify-between gap-2">
                          {language && (
                            <span
                              className="
                                text-[12px]
                                font-semibold
                                text-slate-700
                              "
                            >
                              {language}
                            </span>
                          )}

                          {level && (
                            <span className="text-[10.5px] text-slate-400">
                              {level}
                            </span>
                          )}
                        </div>

                        <div
                          className="
                            mt-1.5
                            h-1
                            rounded-full
                            bg-slate-100
                          "
                        >
                          <div
                            className="
                              h-1
                              w-full
                              rounded-full
                              bg-slate-300
                            "
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* CERTIFICATIONS */}

          {validCertifications.length > 0 && (
            <section>
              <SectionTitle>
                Certifications
              </SectionTitle>

              <div className="mt-4 space-y-4">
                {validCertifications.map(
                  (item, index) => {
                    const name = getValue(
                      item,
                      ["name", "title"]
                    );

                    const organization =
                      getValue(item, [
                        "organization",
                        "issuer",
                      ]);

                    const date = getValue(item, [
                      "date",
                    ]);

                    return (
                      <article
                        key={
                          item.id ||
                          `${name}-${index}`
                        }
                      >
                        {name && (
                          <p
                            className="
                              text-[13px]
                              font-semibold
                              leading-[1.4]
                              text-slate-800
                            "
                          >
                            {name}
                          </p>
                        )}

                        {organization && (
                          <TinyText className="mt-1">
                            {organization}
                          </TinyText>
                        )}

                        {date && (
                          <p className="mt-1 text-[10.5px] text-slate-400">
                            {date}
                          </p>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </section>
          )}
        </aside>

        {/* ===================================================
            RIGHT MAIN COLUMN
        ==================================================== */}

        <div className="min-w-0 space-y-8">
          {/* PROFILE */}

          {personal.summary && (
            <section>
              <SectionTitle>Profile</SectionTitle>

              <p
                className="
                  mt-4
                  text-[12.5px]
                  leading-[1.6]
                  text-slate-500
                "
              >
                {personal.summary}
              </p>
            </section>
          )}

          {/* EXPERIENCE */}

          {experience.length > 0 && (
            <section>
              <SectionTitle>
                Experience
              </SectionTitle>

              <div className="mt-5 space-y-6">
                {experience.map((item, index) => {
                  const title = getValue(item, [
                    "jobTitle",
                    "position",
                    "role",
                    "title",
                  ]);

                  const company = getValue(item, [
                    "company",
                    "organization",
                    "employer",
                  ]);

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

                  const description = getValue(
                    item,
                    [
                      "description",
                      "details",
                      "responsibilities",
                    ]
                  );

                  if (
                    !title &&
                    !company &&
                    !startDate &&
                    !endDate &&
                    !description
                  ) {
                    return null;
                  }

                  return (
                    <article
                      key={item.id || index}
                      className="break-inside-avoid"
                    >
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-5
                        "
                      >
                        <div className="min-w-0">
                          {title && (
                            <h3
                              className="
                                text-[15px]
                                font-semibold
                                leading-[1.3]
                                text-slate-800
                              "
                            >
                              {title}
                            </h3>
                          )}

                          {company && (
                            <p
                              className="
                                mt-1
                                text-[11.5px]
                                font-medium
                                text-slate-400
                              "
                            >
                              {company}
                            </p>
                          )}
                        </div>

                        {(startDate ||
                          endDate) && (
                          <p
                            className="
                              shrink-0
                              pt-0.5
                              text-[11px]
                              text-slate-400
                            "
                          >
                            {startDate}
                            {startDate && endDate
                              ? " — "
                              : ""}
                            {endDate}
                          </p>
                        )}
                      </div>

                      {description && (
                        <ResumeLines
                          description={description}
                        />
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* PROJECTS */}

          {validProjects.length > 0 && (
            <section>
              <SectionTitle>
                Projects
              </SectionTitle>

              <div className="mt-5 space-y-5">
                {validProjects.map(
                  (project, index) => {
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

                    const projectLink =
                      getValue(project, [
                        "liveUrl",
                        "link",
                        "url",
                        "projectUrl",
                      ]);

                    const githubUrl =
                      getValue(project, [
                        "githubUrl",
                        "github",
                      ]);

                    const technologies =
                      getTechnologies(project);

                    return (
                      <article
                        key={
                          project.id ||
                          `${projectName}-${index}`
                        }
                        className="break-inside-avoid"
                      >
                        {(projectName ||
                          projectLink ||
                          githubUrl) && (
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-5
                            "
                          >
                            {projectName && (
                              <h3
                                className="
                                  text-[14px]
                                  font-semibold
                                  text-slate-800
                                "
                              >
                                {projectName}
                              </h3>
                            )}

                            {(projectLink ||
                              githubUrl) && (
                              <p
                                className="
                                  max-w-[180px]
                                  truncate
                                  text-right
                                  text-[10px]
                                  text-slate-400
                                "
                              >
                                {projectLink ||
                                  githubUrl}
                              </p>
                            )}
                          </div>
                        )}

                        {projectDescription && (
                          <p
                            className="
                              mt-2
                              text-[11.5px]
                              leading-[1.55]
                              text-slate-500
                            "
                          >
                            {projectDescription}
                          </p>
                        )}

                        {technologies.length >
                          0 && (
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {technologies.map(
                              (
                                technology,
                                technologyIndex
                              ) => (
                                <span
                                  key={`${technology}-${technologyIndex}`}
                                  className="
                                    rounded
                                    border
                                    border-slate-200
                                    bg-slate-50
                                    px-2
                                    py-1
                                    text-[10px]
                                    font-medium
                                    text-slate-500
                                  "
                                >
                                  {technology}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* ACHIEVEMENTS */}

          {validAchievements.length > 0 && (
            <section>
              <SectionTitle>
                Achievements
              </SectionTitle>

              <div className="mt-5 space-y-5">
                {validAchievements.map(
                  (item, index) => {
                    const title = getValue(
                      item,
                      ["title", "name"]
                    );

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                      ]);

                    const date = getValue(item, [
                      "date",
                    ]);

                    return (
                      <article
                        key={
                          item.id ||
                          `${title}-${index}`
                        }
                        className="break-inside-avoid"
                      >
                        <div className="flex items-start justify-between gap-4">
                          {title && (
                            <h3
                              className="
                                text-[13px]
                                font-semibold
                                text-slate-800
                              "
                            >
                              {title}
                            </h3>
                          )}

                          {date && (
                            <span className="shrink-0 text-[10px] text-slate-400">
                              {date}
                            </span>
                          )}
                        </div>

                        {description && (
                          <TinyText className="mt-2">
                            {description}
                          </TinyText>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* INTERESTS */}

          {interests && (
            <section>
              <SectionTitle>
                Interests
              </SectionTitle>

              <p
                className="
                  mt-4
                  text-[11.5px]
                  leading-[1.6]
                  text-slate-500
                "
              >
                {interests}
              </p>
            </section>
          )}

          {/* REFERENCES */}

          {validReferences.length > 0 && (
            <section>
              <SectionTitle>
                References
              </SectionTitle>

              <div className="mt-5 grid grid-cols-2 gap-5">
                {validReferences.map(
                  (item, index) => {
                    const name = getValue(item, [
                      "name",
                    ]);

                    const position = getValue(
                      item,
                      ["position", "role"]
                    );

                    const company = getValue(
                      item,
                      [
                        "company",
                        "organization",
                      ]
                    );

                    const email = getValue(item, [
                      "email",
                    ]);

                    const phone = getValue(item, [
                      "phone",
                    ]);

                    return (
                      <article
                        key={
                          item.id ||
                          `${name}-${index}`
                        }
                        className="break-inside-avoid"
                      >
                        {name && (
                          <h3
                            className="
                              text-[13px]
                              font-semibold
                              text-slate-800
                            "
                          >
                            {name}
                          </h3>
                        )}

                        {(position ||
                          company) && (
                          <TinyText className="mt-1">
                            {[
                              position,
                              company,
                            ]
                              .filter(Boolean)
                              .join(" • ")}
                          </TinyText>
                        )}

                        {(email || phone) && (
                          <p
                            className="
                              mt-1
                              break-all
                              text-[10px]
                              leading-[1.5]
                              text-slate-400
                            "
                          >
                            {[email, phone]
                              .filter(Boolean)
                              .join(" • ")}
                          </p>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default CleanPreview;
