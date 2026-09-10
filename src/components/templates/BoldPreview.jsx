import React from "react";

function BoldPreview({
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
      "Frontend developer with 5+ years of experience building responsive, accessible, and high-performance web applications. Passionate about creating clean interfaces, reusable components, meaningful interactions, and thoughtful digital experiences.",
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
        "Improved accessibility, usability, and cross-browser compatibility.",
      ],
    },
    {
      jobTitle: "Junior Web Developer",
      company: "Bright Digital",
      startDate: "2019",
      endDate: "2021",
      description: [
        "Implemented responsive layouts for client websites.",
        "Maintained frontend features and resolved UI issues.",
        "Worked with designers to translate visual concepts into functional pages.",
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
    "Next.js",
    "Git",
    "REST APIs",
    "GSAP",
    "Figma",
    "Responsive Design",
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
  // VALID OPTIONAL ITEMS
  // =========================================================

  const validCertifications =
    certifications.filter(
      (item) =>
        getValue(item, ["name", "title"]) ||
        getValue(item, [
          "organization",
          "issuer",
        ]) ||
        getValue(item, ["date"]) ||
        getValue(item, ["link", "url"])
    );

  const validLanguages = languages.filter(
    (item) =>
      getValue(item, [
        "language",
        "name",
      ]) ||
      getValue(item, [
        "level",
        "proficiency",
      ])
  );

  const validAchievements =
    achievements.filter(
      (item) =>
        getValue(item, [
          "title",
          "name",
        ]) ||
        getValue(item, [
          "description",
          "details",
        ]) ||
        getValue(item, ["date"])
    );

  const validReferences =
    references.filter(
      (item) =>
        getValue(item, ["name"]) ||
        getValue(item, [
          "position",
          "role",
        ]) ||
        getValue(item, [
          "company",
          "organization",
        ]) ||
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

  const TinyText = ({
    children,
    className = "",
  }) => (
    <p
      className={`
        text-[10.5px]
        leading-[1.55]
        text-slate-500
        ${className}
      `}
    >
      {children}
    </p>
  );

  const SectionTitle = ({
    children,
    accent = false,
    color = "text-slate-900",
  }) => (
    <div
      className={`
        flex
        items-center
        gap-2.5
        text-[12px]
        font-black
        tracking-[0.2em]
        ${color}
      `}
    >
      {accent && (
        <span className="h-[3px] w-5 rounded-full bg-indigo-600" />
      )}

      {children}
    </div>
  );

  const SkillPill = ({ children }) => (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-indigo-50
        px-2.5
        py-1.5
        text-[10px]
        font-semibold
        leading-none
        text-indigo-700
      "
    >
      {children}
    </span>
  );

  // =========================================================
  // BULLET LIST
  // =========================================================

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines =
      getDescriptionLines(description);

    if (!useSampleData && lines.length === 0) {
      return null;
    }

    const displayLines =
      lines.length > 0
        ? lines
        : [
            "Built responsive interfaces and delivered polished digital experiences.",
            "Collaborated with teams to improve usability and application performance.",
            "Created reusable components and maintained clean frontend architecture.",
          ].slice(0, count);

    return (
      <ul className="space-y-2">
        {displayLines.map((line, index) => (
          <li
            key={index}
            className="
              relative
              pl-4
              text-[10px]
              leading-[1.55]
              text-slate-600
            "
          >
            <span
              className="
                absolute
                left-0
                top-[7px]
                h-[4px]
                w-[4px]
                rounded-full
                bg-indigo-400
              "
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
    ring = "ring-white/30",
    background = "bg-indigo-300",
  }) => {
    if (personal.profileImage) {
      return (
        <div
          className={`
            h-16
            w-16
            shrink-0
            overflow-hidden
            rounded-full
            ring-2
            ${ring}
          `}
        >
          <img
            src={personal.profileImage}
            alt={
              personal.fullName || "Profile"
            }
            className="
              h-full
              w-full
              object-cover
            "
          />
        </div>
      );
    }

    if (!useSampleData) {
      return null;
    }

    const initials = (
      personal.fullName || "YN"
    )
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className={`
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-full
          ring-2
          ${ring}
          ${background}
        `}
      >
        <span className="text-[12px] font-black text-white">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName;

  const displayJobTitle =
    personal.jobTitle;

  const contactItems = [
    personal.email,
    personal.phone,
    personal.location,
    personal.linkedin,
    personal.github,
  ].filter(Boolean);

  // =========================================================
  // MAIN A4 DOCUMENT
  // =========================================================

  return (
    <div
      className="
        box-border
        min-h-[1123px]
        h-auto
        w-[794px]
        overflow-visible
        bg-[#f7f7fb]
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          relative
          overflow-hidden
          bg-indigo-600
          px-[44px]
          py-[42px]
          text-white
        "
      >
        {/* DECORATIVE SHAPES */}

        <div
          className="
            absolute
            -right-16
            -top-16
            h-48
            w-48
            rounded-full
            bg-indigo-400
            opacity-50
          "
        />

        <div
          className="
            absolute
            -bottom-20
            right-28
            h-32
            w-32
            rounded-full
            bg-indigo-500
            opacity-40
          "
        />

        <div
          className="
            relative
            flex
            items-center
            gap-6
          "
        >
          {/* PHOTO */}

          {(useSampleData ||
            personal.profileImage) && (
            <PhotoCircle
              ring="ring-white/30"
              background="bg-indigo-300"
            />
          )}

          {/* NAME */}

          <div className="min-w-0">
            {displayName && (
              <h1
                className="
                  text-[36px]
                  font-black
                  leading-none
                  tracking-[-0.035em]
                "
              >
                {displayName.toUpperCase()}
              </h1>
            )}

            {displayJobTitle && (
              <div
                className="
                  mt-3
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-indigo-100
                "
              >
                {displayJobTitle}
              </div>
            )}

            {contactItems.length > 0 && (
              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-1.5
                  text-[10px]
                  font-medium
                  text-indigo-100
                "
              >
                {contactItems.map(
                  (item, index) => (
                    <React.Fragment
                      key={`${item}-${index}`}
                    >
                      {index > 0 && (
                        <span className="opacity-60">
                          •
                        </span>
                      )}

                      <span>{item}</span>
                    </React.Fragment>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main
        className="
          px-[44px]
          py-[36px]
        "
      >
        {/* ===================================================
            INTRO
        =================================================== */}

        {personal.summary && (
          <section>
            <div
              className="
                max-w-[610px]
                text-[21px]
                font-black
                leading-[1.2]
                tracking-[-0.02em]
                text-slate-900
              "
            >
              {personal.summary}
            </div>
          </section>
        )}

        {/* ===================================================
            CONTENT GRID
        =================================================== */}

        <div
          className={`
            grid
            grid-cols-[1.65fr_0.75fr]
            gap-7
            ${
              personal.summary
                ? "mt-7"
                : ""
            }
          `}
        >
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="min-w-0">
            {/* EXPERIENCE */}

            {experience.length > 0 && (
              <section>
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  EXPERIENCE
                </SectionTitle>

                <div className="mt-5 space-y-5">
                  {experience.map(
                    (item, index) => {
                      const jobTitle =
                        getValue(item, [
                          "jobTitle",
                          "title",
                          "position",
                          "role",
                        ]);

                      const company =
                        getValue(item, [
                          "company",
                          "companyName",
                          "organization",
                          "employer",
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

                      const description =
                        getValue(item, [
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
                        <article
                          key={
                            item.id ||
                            `${jobTitle}-${index}`
                          }
                          className="
                            break-inside-avoid
                            rounded-2xl
                            bg-white
                            p-5
                            shadow-sm
                          "
                        >
                          {jobTitle && (
                            <h3
                              className="
                                text-[13px]
                                font-black
                                leading-[1.4]
                                text-slate-900
                              "
                            >
                              {jobTitle}
                            </h3>
                          )}

                          {(company ||
                            startDate ||
                            endDate) && (
                            <div
                              className="
                                mt-1
                                flex
                                flex-wrap
                                items-center
                                gap-1.5
                                text-[10px]
                                font-semibold
                              "
                            >
                              {company && (
                                <span className="text-indigo-600">
                                  {company}
                                </span>
                              )}

                              {company &&
                                (startDate ||
                                  endDate) && (
                                  <span className="text-slate-300">
                                    •
                                  </span>
                                )}

                              {(startDate ||
                                endDate) && (
                                <span className="text-slate-400">
                                  {startDate || ""}
                                  {" — "}
                                  {endDate ||
                                    "Present"}
                                </span>
                              )}
                            </div>
                          )}

                          {description && (
                            <div className="mt-3">
                              <ResumeLines
                                description={
                                  description
                                }
                                count={3}
                              />
                            </div>
                          )}
                        </article>
                      );
                    }
                  )}
                </div>
              </section>
            )}

            {/* PROJECTS */}

            {validProjects.length > 0 && (
              <section
                className={
                  experience.length > 0
                    ? "mt-8"
                    : ""
                }
              >
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  PROJECTS
                </SectionTitle>

                <div className="mt-5 space-y-5">
                  {validProjects.map(
                    (project, index) => {
                      const name =
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

                      const liveUrl =
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
                            `${name}-${index}`
                          }
                          className="
                            break-inside-avoid
                            rounded-2xl
                            bg-white
                            p-5
                            shadow-sm
                          "
                        >
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-4
                            "
                          >
                            {name && (
                              <h3
                                className="
                                  text-[13px]
                                  font-black
                                  leading-[1.4]
                                  text-slate-900
                                "
                              >
                                {name}
                              </h3>
                            )}

                            {(liveUrl ||
                              githubUrl) && (
                              <span
                                className="
                                  max-w-[160px]
                                  shrink-0
                                  truncate
                                  text-[9px]
                                  font-semibold
                                  text-indigo-600
                                "
                              >
                                {liveUrl ||
                                  githubUrl}
                              </span>
                            )}
                          </div>

                          {description && (
                            <TinyText className="mt-2.5">
                              {description}
                            </TinyText>
                          )}

                          {technologies.length >
                            0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {technologies.map(
                                (
                                  technology,
                                  technologyIndex
                                ) => (
                                  <SkillPill
                                    key={`${technology}-${technologyIndex}`}
                                  >
                                    {
                                      technology
                                    }
                                  </SkillPill>
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

            {/* CERTIFICATIONS */}

            {validCertifications.length >
              0 && (
              <section className="mt-8">
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  CERTIFICATIONS
                </SectionTitle>

                <div className="mt-5 space-y-4">
                  {validCertifications.map(
                    (item, index) => {
                      const name =
                        getValue(item, [
                          "name",
                          "title",
                        ]);

                      const organization =
                        getValue(item, [
                          "organization",
                          "issuer",
                        ]);

                      const date = getValue(
                        item,
                        ["date"]
                      );

                      return (
                        <article
                          key={
                            item.id ||
                            `${name}-${index}`
                          }
                          className="
                            break-inside-avoid
                            rounded-xl
                            bg-white
                            p-4
                            shadow-sm
                          "
                        >
                          {name && (
                            <h3
                              className="
                                text-[11.5px]
                                font-bold
                                leading-[1.4]
                                text-slate-800
                              "
                            >
                              {name}
                            </h3>
                          )}

                          {(organization ||
                            date) && (
                            <div
                              className="
                                mt-1
                                flex
                                flex-wrap
                                items-center
                                gap-1.5
                                text-[10px]
                              "
                            >
                              {organization && (
                                <span className="font-semibold text-indigo-600">
                                  {
                                    organization
                                  }
                                </span>
                              )}

                              {organization &&
                                date && (
                                  <span className="text-slate-300">
                                    •
                                  </span>
                                )}

                              {date && (
                                <span className="text-slate-400">
                                  {date}
                                </span>
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

            {validAchievements.length >
              0 && (
              <section className="mt-8">
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  ACHIEVEMENTS
                </SectionTitle>

                <div className="mt-5 space-y-4">
                  {validAchievements.map(
                    (item, index) => {
                      const title =
                        getValue(item, [
                          "title",
                          "name",
                        ]);

                      const description =
                        getValue(item, [
                          "description",
                          "details",
                        ]);

                      const date = getValue(
                        item,
                        ["date"]
                      );

                      return (
                        <article
                          key={
                            item.id ||
                            `${title}-${index}`
                          }
                          className="
                            break-inside-avoid
                            rounded-xl
                            bg-white
                            p-4
                            shadow-sm
                          "
                        >
                          <div className="flex items-start justify-between gap-4">
                            {title && (
                              <h3
                                className="
                                  text-[11.5px]
                                  font-bold
                                  text-slate-800
                                "
                              >
                                {title}
                              </h3>
                            )}

                            {date && (
                              <span className="shrink-0 text-[9px] font-semibold text-indigo-600">
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
              <section className="mt-8">
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  INTERESTS
                </SectionTitle>

                <TinyText className="mt-4">
                  {interests}
                </TinyText>
              </section>
            )}
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside className="min-w-0">
            {/* SKILLS */}

            {displaySkills.length > 0 && (
              <section>
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  SKILLS
                </SectionTitle>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {displaySkills.map(
                    (skill, index) => (
                      <SkillPill
                        key={`${skill}-${index}`}
                      >
                        {skill}
                      </SkillPill>
                    )
                  )}
                </div>
              </section>
            )}

            {/* EDUCATION */}

            {education.length > 0 && (
              <section
                className={
                  displaySkills.length > 0
                    ? "mt-8"
                    : ""
                }
              >
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  EDUCATION
                </SectionTitle>

                <div className="mt-5 space-y-5">
                  {education.map(
                    (item, index) => {
                      const degree =
                        getValue(item, [
                          "degree",
                          "program",
                          "qualification",
                          "title",
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
                        !institution &&
                        !startDate &&
                        !endDate
                      ) {
                        return null;
                      }

                      return (
                        <article
                          key={
                            item.id || index
                          }
                          className="
                            break-inside-avoid
                            border-l-2
                            border-indigo-100
                            pl-4
                          "
                        >
                          {degree && (
                            <h3
                              className="
                                text-[12px]
                                font-bold
                                leading-[1.4]
                                text-slate-800
                              "
                            >
                              {degree}
                            </h3>
                          )}

                          {institution && (
                            <TinyText className="mt-1">
                              {institution}
                            </TinyText>
                          )}

                          {(startDate ||
                            endDate) && (
                            <p
                              className="
                                mt-1.5
                                text-[9.5px]
                                font-semibold
                                text-indigo-600
                              "
                            >
                              {startDate || ""}
                              {" — "}
                              {endDate ||
                                "Present"}
                            </p>
                          )}
                        </article>
                      );
                    }
                  )}
                </div>
              </section>
            )}

            {/* LANGUAGES */}

            {validLanguages.length > 0 && (
              <section className="mt-8">
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  LANGUAGES
                </SectionTitle>

                <div className="mt-5 space-y-4">
                  {validLanguages.map(
                    (item, index) => {
                      const language =
                        getValue(item, [
                          "language",
                          "name",
                        ]);

                      const level =
                        getValue(item, [
                          "level",
                          "proficiency",
                        ]);

                      if (
                        !language &&
                        !level
                      ) {
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
                                  text-[10.5px]
                                  font-bold
                                  text-slate-800
                                "
                              >
                                {language}
                              </span>
                            )}

                            {level && (
                              <span className="text-[9px] text-slate-400">
                                {level}
                              </span>
                            )}
                          </div>

                          <div className="mt-1.5 h-1 rounded-full bg-slate-100">
                            <div className="h-1 w-full rounded-full bg-indigo-500" />
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </section>
            )}

            {/* CONTACT */}

            {(personal.email ||
              personal.phone ||
              personal.location ||
              personal.linkedin ||
              personal.github) && (
              <section className="mt-8">
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  CONTACT
                </SectionTitle>

                <div className="mt-4 space-y-2.5">
                  {personal.email && (
                    <TinyText>
                      {personal.email}
                    </TinyText>
                  )}

                  {personal.phone && (
                    <TinyText>
                      {personal.phone}
                    </TinyText>
                  )}

                  {personal.location && (
                    <TinyText>
                      {personal.location}
                    </TinyText>
                  )}

                  {personal.linkedin && (
                    <TinyText>
                      {personal.linkedin}
                    </TinyText>
                  )}

                  {personal.github && (
                    <TinyText>
                      {personal.github}
                    </TinyText>
                  )}
                </div>
              </section>
            )}

            {/* EXPERTISE — SAMPLE ONLY */}

            {useSampleData && (
              <section className="mt-8">
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  EXPERTISE
                </SectionTitle>

                <div className="mt-4 space-y-2.5">
                  {[
                    "Interface Design",
                    "Frontend Development",
                    "Responsive Design",
                    "Motion & Interaction",
                    "Design Systems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[10px]
                        font-medium
                        text-slate-600
                      "
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-indigo-500
                        "
                      />

                      {item}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* REFERENCES */}

            {validReferences.length > 0 && (
              <section className="mt-8">
                <SectionTitle
                  accent
                  color="text-indigo-700"
                >
                  REFERENCES
                </SectionTitle>

                <div className="mt-5 space-y-5">
                  {validReferences.map(
                    (item, index) => {
                      const name = getValue(
                        item,
                        ["name"]
                      );

                      const position =
                        getValue(item, [
                          "position",
                          "role",
                        ]);

                      const company =
                        getValue(item, [
                          "company",
                          "organization",
                        ]);

                      const email =
                        getValue(item, [
                          "email",
                        ]);

                      const phone =
                        getValue(item, [
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
                                text-[11px]
                                font-bold
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
                                .join(
                                  " • "
                                )}
                            </TinyText>
                          )}

                          {(email ||
                            phone) && (
                            <p
                              className="
                                mt-1
                                break-all
                                text-[9px]
                                leading-[1.5]
                                text-slate-400
                              "
                            >
                              {[
                                email,
                                phone,
                              ]
                                .filter(Boolean)
                                .join(
                                  " • "
                                )}
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
        </div>
      </main>
    </div>
  );
}

export default BoldPreview;
