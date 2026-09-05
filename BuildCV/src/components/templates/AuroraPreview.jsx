import React from "react";

function AuroraPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE PERSONAL DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Olivia Carter",
    jobTitle: "Creative Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Frontend developer blending technology, interaction and visual design to create useful and memorable digital experiences.",
    profileImage: "",
  };

  // =========================================================
  // SAMPLE EDUCATION
  // =========================================================

  const sampleEducation = [
    {
      degree: "BSc Computer Science",
      institution: "University of California",
      startDate: "2020",
      endDate: "2024",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Lincoln High School",
      startDate: "2018",
      endDate: "2020",
    },
  ];

  // =========================================================
  // SAMPLE EXPERIENCE
  // =========================================================

  const sampleExperience = [
    {
      jobTitle: "Frontend Developer",
      company: "Creative Digital Studio",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Built responsive interfaces and created useful digital experiences while focusing on usability, performance, and visual quality.",
        "Developed reusable React components and collaborated with designers to deliver polished digital products.",
      ],
    },
    {
      jobTitle: "Web Developer",
      company: "Technology Company",
      startDate: "2022",
      endDate: "2024",
      description: [
        "Developed modern web interfaces using React and JavaScript.",
        "Collaborated with designers to deliver responsive and accessible user experiences.",
      ],
    },
    {
      jobTitle: "Junior Developer",
      company: "Digital Agency",
      startDate: "2021",
      endDate: "2022",
      description: [
        "Supported frontend development and implemented responsive layouts for client-facing web projects.",
        "Maintained existing interfaces and improved cross-browser compatibility.",
      ],
    },
  ];

  // =========================================================
  // SAMPLE SKILLS
  // =========================================================

  const sampleSkills = [
    "React",
    "UI/UX",
    "JavaScript",
    "Figma",
    "HTML",
    "CSS",
    "GSAP",
    "Git",
    "TypeScript",
    "Tailwind CSS",
    "Responsive Design",
    "REST APIs",
  ];

  // =========================================================
  // SAMPLE PROJECTS
  // =========================================================

  const sampleProjects = [
    {
      name: "Creative Commerce",
      description:
        "Developed a responsive e-commerce interface with reusable React components, product filtering and API integration.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "REST API",
      ],
      liveUrl: "creativecommerce.dev",
      githubUrl: "github.com/oliviacarter/commerce",
    },
    {
      name: "TaskFlow Dashboard",
      description:
        "Created a productivity dashboard with interactive task management, responsive layouts and data visualization.",
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
      name: "Portfolio Experience",
      description:
        "Designed and developed a personal portfolio focused on accessibility, performance and expressive visual interactions.",
      technologies: [
        "Next.js",
        "TypeScript",
        "GSAP",
        "Tailwind CSS",
      ],
      liveUrl: "oliviacarter.dev",
      githubUrl: "github.com/oliviacarter/portfolio",
    },
  ];

  // =========================================================
  // SAMPLE OPTIONAL DATA
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
  ];

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

  const sampleAchievements = [
    {
      title: "Best UI Implementation",
      description:
        "Recognized for delivering a polished and accessible interface for a major product release.",
      date: "2024",
    },
    {
      title: "Creative Developer Award",
      description:
        "Recognized for combining frontend engineering with thoughtful visual design.",
      date: "2023",
    },
  ];

  const sampleInterests =
    "UI/UX Design, Open Source, Photography, Technology";

  const sampleReferences = [
    {
      name: "Daniel Wilson",
      position: "Product Manager",
      company: "Creative Digital Studio",
      email: "daniel.wilson@example.com",
    },
    {
      name: "Sarah Mitchell",
      position: "Engineering Manager",
      company: "Technology Company",
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

  // =========================================================
  // OPTIONAL SECTION SOURCE
  // =========================================================

  const getOptionalSection = (
    formSection,
    dataSection,
    sampleItems
  ) => {
    // User has configured this section.
    if (formSection !== undefined) {
      return formSection.enabled &&
        Array.isArray(formSection.items)
        ? formSection.items
        : [];
    }

    // Builder/PDF must NEVER use sample data.
    if (!useSampleData) {
      return [];
    }

    // Preview can use saved data.
    if (dataSection !== undefined) {
      return dataSection.enabled &&
        Array.isArray(dataSection.items)
        ? dataSection.items
        : [];
    }

    // Otherwise use template sample data.
    return sampleItems;
  };

  const certifications = getOptionalSection(
    formData.certifications,
    data.certifications,
    sampleCertifications
  );

  const languages = getOptionalSection(
    formData.languages,
    data.languages,
    sampleLanguages
  );

  const achievements = getOptionalSection(
    formData.achievements,
    data.achievements,
    sampleAchievements
  );

  const references = getOptionalSection(
    formData.references,
    data.references,
    sampleReferences
  );

  // =========================================================
  // INTERESTS
  // =========================================================

  let interests = "";

  if (formData.interests !== undefined) {
    interests = formData.interests.enabled
      ? String(formData.interests.value || "").trim()
      : "";
  } else if (useSampleData) {
    if (data.interests !== undefined) {
      interests = data.interests.enabled
        ? String(data.interests.value || "").trim()
        : "";
    } else {
      interests = sampleInterests;
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
  // FILTER OPTIONAL ITEMS
  // =========================================================

  const validCertifications = certifications.filter(
    (item) =>
      getValue(item, ["name", "title"]) ||
      getValue(item, ["organization", "issuer"]) ||
      getValue(item, ["date"]) ||
      getValue(item, ["link", "url"])
  );

  const validLanguages = languages.filter(
    (item) =>
      getValue(item, ["language", "name"]) ||
      getValue(item, ["level", "proficiency"])
  );

  const validAchievements = achievements.filter(
    (item) =>
      getValue(item, ["title", "name"]) ||
      getValue(item, [
        "description",
        "details",
      ]) ||
      getValue(item, ["date"])
  );

  const validReferences = references.filter(
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
      ]) ||
      getValue(project, [
        "description",
        "details",
      ]) ||
      getTechnologies(project).length > 0
  );

  // =========================================================
  // DISPLAY SKILLS
  // =========================================================

  const displaySkills = skills
    .map(getSkillName)
    .filter(Boolean);

  const finalSkills = useSampleData
    ? displaySkills.length > 0
      ? displaySkills
      : sampleSkills
    : displaySkills;

  // =========================================================
  // CONTACT
  // =========================================================

  const contactItems = [
    personal.email,
    personal.phone,
    personal.location,
    personal.linkedin,
    personal.github,
  ].filter(Boolean);

  const hasContact = contactItems.length > 0;

  // =========================================================
  // SMALL COMPONENTS
  // =========================================================

  const SectionTitle = ({ children }) => (
    <div className="mb-3">
      <div className="flex items-center gap-2">
        <span className="h-[3px] w-5 rounded-full bg-teal-400" />

        <h2
          className="
            text-[11px]
            font-black
            uppercase
            tracking-[0.16em]
            text-teal-700
          "
        >
          {children}
        </h2>
      </div>

      <div className="mt-2 h-px bg-slate-200" />
    </div>
  );

  const TinyText = ({
    children,
    className = "",
    dark = false,
  }) => (
    <p
      className={`
        text-[9.5px]
        leading-[1.55]
        ${dark ? "text-white/65" : "text-slate-500"}
        ${className}
      `}
    >
      {children}
    </p>
  );

  // =========================================================
  // BULLET LIST
  // =========================================================

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines = getDescriptionLines(description);

    if (!useSampleData && lines.length === 0) {
      return null;
    }

    const displayLines =
      lines.length > 0
        ? lines.slice(0, 4)
        : Array.from({ length: count }).map(
            () =>
              "Professional responsibility or achievement"
          );

    return (
      <ul className="space-y-2">
        {displayLines.map((line, index) => (
          <li
            key={index}
            className={`
              relative
              pl-4
              text-[9px]
              leading-[1.5]
              ${
                lines.length > 0
                  ? "text-slate-600"
                  : "text-slate-400"
              }
            `}
          >
            <span
              className="
                absolute
                left-0
                top-[6px]
                h-[4px]
                w-[4px]
                rounded-full
                bg-teal-400
              "
            />

            {line}
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // PHOTO
  // =========================================================

  const PhotoCircle = ({
    ring = "ring-teal-300",
    background = "bg-teal-100",
  }) => {
    if (personal.profileImage) {
      return (
        <div
          className={`
            h-[82px]
            w-[82px]
            shrink-0
            overflow-hidden
            rounded-full
            ring-2
            ${ring}
          `}
        >
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    if (!useSampleData) {
      return null;
    }

    const initials = (personal.fullName || "YN")
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
          h-[82px]
          w-[82px]
          shrink-0
          items-center
          justify-center
          rounded-full
          ring-2
          ${ring}
          ${background}
        `}
      >
        <span className="text-[14px] font-black text-teal-700">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className="
        box-border
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-white
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="relative overflow-hidden px-[52px] py-[48px] pb-7">
        {/* DECORATIVE BLUR */}

        <div
          className="
            absolute
            -right-16
            -top-20
            h-48
            w-48
            rounded-full
            bg-teal-200
            opacity-70
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-16
            -top-16
            h-40
            w-40
            rounded-full
            bg-indigo-200
            opacity-60
            blur-3xl
          "
        />

        {/* HEADER CONTENT */}

        <div className="relative flex items-center justify-between gap-8">
          {/* PHOTO */}

          {(useSampleData || personal.profileImage) && (
            <div
              className="
                rounded-full
                bg-white
                p-1.5
                shadow-lg
              "
            >
              <PhotoCircle
                ring="ring-teal-300"
                background="bg-teal-100"
              />
            </div>
          )}

          {/* NAME + TITLE */}

          <div className="min-w-0 flex-1">
            {personal.fullName && (
              <h1
                className="
                  text-[38px]
                  font-black
                  leading-[0.95]
                  tracking-[-0.04em]
                  text-slate-900
                "
              >
                {personal.fullName.toUpperCase()}
              </h1>
            )}

            {personal.jobTitle && (
              <div
                className="
                  mt-4
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-teal-700
                "
              >
                {personal.jobTitle.toUpperCase()}
              </div>
            )}

            {useSampleData && (
              <div
                className="
                  mt-3
                  text-[9px]
                  font-medium
                  text-slate-500
                "
              >
                Digital experiences • Frontend • Product
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          GRADIENT LINE
      ====================================================== */}

      <div
        className="
          mx-[52px]
          h-[3px]
          rounded-full
          bg-gradient-to-r
          from-teal-400
          via-indigo-400
          to-transparent
        "
      />

      {/* =====================================================
          MAIN
      ====================================================== */}

      <main className="px-[52px] py-7">
        <div
          className="
            grid
            grid-cols-[1.55fr_0.72fr]
            gap-8
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="min-w-0">
            {/* PROFILE */}

            {personal.summary && (
              <section>
                <SectionTitle>
                  The Profile
                </SectionTitle>

                <div
                  className="
                    text-[17px]
                    font-extrabold
                    leading-[1.15]
                    tracking-[-0.025em]
                    text-slate-900
                  "
                >
                  {personal.summary}
                </div>

                <TinyText className="mt-4">
                  {personal.summary}
                </TinyText>
              </section>
            )}

            {/* EXPERIENCE */}

            {experience.length > 0 && (
              <section
                className={
                  personal.summary
                    ? "mt-8"
                    : ""
                }
              >
                <SectionTitle>
                  Experience
                </SectionTitle>

                <div className="space-y-5">
                  {experience
                    .slice(0, 3)
                    .map((item, index) => {
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
                            relative
                            rounded-xl
                            bg-slate-50
                            p-5
                            break-inside-avoid
                          "
                        >
                          <div
                            className="
                              absolute
                              left-0
                              top-5
                              h-8
                              w-[3px]
                              rounded-r-full
                              bg-teal-400
                            "
                          />

                          {jobTitle && (
                            <h3
                              className="
                                text-[12px]
                                font-bold
                                leading-[1.3]
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
                                mt-1.5
                                flex
                                flex-wrap
                                items-center
                                gap-1.5
                                text-[9px]
                                font-semibold
                              "
                            >
                              {company && (
                                <span className="text-teal-700">
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
                    })}
                </div>
              </section>
            )}

            {/* PROJECTS */}

            {validProjects.length > 0 && (
              <section className="mt-8">
                <SectionTitle>
                  Projects
                </SectionTitle>

                <div className="space-y-5">
                  {validProjects
                    .slice(0, 3)
                    .map((project, index) => {
                      const name =
                        getValue(project, [
                          "name",
                          "title",
                        ]);

                      const description =
                        getValue(project, [
                          "description",
                          "details",
                        ]);

                      const technologies =
                        getTechnologies(
                          project
                        );

                      const liveUrl =
                        getValue(project, [
                          "liveUrl",
                          "link",
                          "url",
                        ]);

                      const githubUrl =
                        getValue(project, [
                          "githubUrl",
                          "github",
                        ]);

                      return (
                        <article
                          key={
                            project.id ||
                            `${name}-${index}`
                          }
                          className="
                            break-inside-avoid
                          "
                        >
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-3
                            "
                          >
                            {name && (
                              <h3
                                className="
                                  text-[12px]
                                  font-bold
                                  leading-[1.35]
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
                                  max-w-[150px]
                                  shrink-0
                                  truncate
                                  text-[8.5px]
                                  font-semibold
                                  text-teal-700
                                "
                              >
                                {liveUrl ||
                                  githubUrl}
                              </span>
                            )}
                          </div>

                          {description && (
                            <div className="mt-1.5">
                              <TinyText>
                                {description}
                              </TinyText>
                            </div>
                          )}

                          {technologies.length >
                            0 && (
                            <div
                              className="
                                mt-2.5
                                flex
                                flex-wrap
                                gap-1.5
                              "
                            >
                              {technologies
                                .slice(0, 6)
                                .map(
                                  (
                                    technology,
                                    technologyIndex
                                  ) => (
                                    <span
                                      key={`${technology}-${technologyIndex}`}
                                      className="
                                        inline-flex
                                        items-center
                                        rounded-md
                                        border
                                        border-slate-200
                                        bg-white
                                        px-2
                                        py-1.5
                                        text-[8.5px]
                                        font-semibold
                                        leading-none
                                        text-slate-700
                                      "
                                    >
                                      {
                                        technology
                                      }
                                    </span>
                                  )
                                )}
                            </div>
                          )}
                        </article>
                      );
                    })}
                </div>
              </section>
            )}

            {/* CERTIFICATIONS */}

            {validCertifications.length > 0 && (
              <section className="mt-8">
                <SectionTitle>
                  Certifications
                </SectionTitle>

                <div className="space-y-4">
                  {validCertifications
                    .slice(0, 3)
                    .map((item, index) => {
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

                      const date =
                        getValue(item, [
                          "date",
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
                                text-slate-900
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
                                text-[9px]
                              "
                            >
                              {organization && (
                                <span className="font-semibold text-teal-700">
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
                    })}
                </div>
              </section>
            )}

            {/* ACHIEVEMENTS */}

            {validAchievements.length > 0 && (
              <section className="mt-8">
                <SectionTitle>
                  Achievements
                </SectionTitle>

                <div className="space-y-4">
                  {validAchievements
                    .slice(0, 3)
                    .map((item, index) => {
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

                      const date =
                        getValue(item, [
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
                          <div
                            className="
                              flex
                              items-start
                              justify-between
                              gap-3
                            "
                          >
                            {title && (
                              <h3
                                className="
                                  text-[11px]
                                  font-bold
                                  text-slate-900
                                "
                              >
                                {title}
                              </h3>
                            )}

                            {date && (
                              <span
                                className="
                                  shrink-0
                                  text-[8.5px]
                                  font-semibold
                                  text-teal-700
                                "
                              >
                                {date}
                              </span>
                            )}
                          </div>

                          {description && (
                            <div className="mt-1.5">
                              <TinyText>
                                {description}
                              </TinyText>
                            </div>
                          )}
                        </article>
                      );
                    })}
                </div>
              </section>
            )}

            {/* INTERESTS */}

            {interests && (
              <section className="mt-8">
                <SectionTitle>
                  Interests
                </SectionTitle>

                <TinyText>
                  {interests}
                </TinyText>
              </section>
            )}
          </div>

          {/* =================================================
              RIGHT SIDEBAR
          ================================================= */}

          {(education.length > 0 ||
            finalSkills.length > 0 ||
            hasContact ||
            validLanguages.length > 0 ||
            validReferences.length > 0 ||
            useSampleData) && (
            <aside
              className="
                min-w-0
                rounded-2xl
                bg-slate-950
                p-6
                text-white
              "
            >
              {/* EDUCATION */}

              {education.length > 0 && (
                <section>
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-teal-300
                    "
                  >
                    Education
                  </div>

                  <div className="mt-5 space-y-5">
                    {education
                      .slice(0, 3)
                      .map((item, index) => {
                        const degree =
                          getValue(item, [
                            "degree",
                            "program",
                            "qualification",
                            "title",
                            "course",
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
                              item.id ||
                              `${degree}-${index}`
                            }
                            className="break-inside-avoid"
                          >
                            {degree && (
                              <h3
                                className="
                                  text-[11px]
                                  font-bold
                                  leading-[1.4]
                                  text-white
                                "
                              >
                                {degree}
                              </h3>
                            )}

                            {institution && (
                              <TinyText
                                dark
                                className="mt-1"
                              >
                                {institution}
                              </TinyText>
                            )}

                            {(startDate ||
                              endDate) && (
                              <p
                                className="
                                  mt-1.5
                                  text-[8.5px]
                                  font-semibold
                                  text-teal-300
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
                      })}
                  </div>
                </section>
              )}

              {/* EXPERTISE / SKILLS */}

              {finalSkills.length > 0 && (
                <section
                  className={
                    education.length > 0
                      ? "mt-8 border-t border-white/10 pt-6"
                      : ""
                  }
                >
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-teal-300
                    "
                  >
                    Expertise
                  </div>

                  <div className="mt-5 space-y-4">
                    {finalSkills
                      .slice(0, 12)
                      .map((skill, index) => (
                        <div
                          key={`${skill}-${index}`}
                          className="
                            border-b
                            border-white/10
                            pb-3
                            text-[9px]
                            font-medium
                            leading-[1.35]
                            text-white/90
                          "
                        >
                          {skill}
                        </div>
                      ))}
                  </div>
                </section>
              )}

              {/* CONTACT */}

              {hasContact && (
                <section className="mt-8 border-t border-white/10 pt-6">
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-teal-300
                    "
                  >
                    Contact
                  </div>

                  <div className="mt-4 space-y-2.5">
                    {personal.email && (
                      <TinyText dark>
                        {personal.email}
                      </TinyText>
                    )}

                    {personal.phone && (
                      <TinyText dark>
                        {personal.phone}
                      </TinyText>
                    )}

                    {personal.location && (
                      <TinyText dark>
                        {personal.location}
                      </TinyText>
                    )}

                    {personal.linkedin && (
                      <TinyText dark>
                        {personal.linkedin}
                      </TinyText>
                    )}

                    {personal.github && (
                      <TinyText dark>
                        {personal.github}
                      </TinyText>
                    )}
                  </div>
                </section>
              )}

              {/* LANGUAGES */}

              {validLanguages.length > 0 && (
                <section className="mt-8 border-t border-white/10 pt-6">
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-teal-300
                    "
                  >
                    Languages
                  </div>

                  <div className="mt-5 space-y-4">
                    {validLanguages
                      .slice(0, 5)
                      .map((item, index) => {
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

                        return (
                          <div
                            key={
                              item.id ||
                              `${language}-${index}`
                            }
                            className="break-inside-avoid"
                          >
                            <div className="flex items-center justify-between gap-2">
                              {language && (
                                <span
                                  className="
                                    text-[9.5px]
                                    font-bold
                                    text-white/90
                                  "
                                >
                                  {language}
                                </span>
                              )}

                              {level && (
                                <span
                                  className="
                                    text-[8px]
                                    text-white/45
                                  "
                                >
                                  {level}
                                </span>
                              )}
                            </div>

                            {(language ||
                              level) && (
                              <div
                                className="
                                  mt-1.5
                                  h-1
                                  rounded-full
                                  bg-white/10
                                "
                              >
                                <div
                                  className="
                                    h-1
                                    w-full
                                    rounded-full
                                    bg-teal-400
                                  "
                                />
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </section>
              )}

              {/* REFERENCES */}

              {validReferences.length > 0 && (
                <section className="mt-8 border-t border-white/10 pt-6">
                  <div
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-teal-300
                    "
                  >
                    References
                  </div>

                  <div className="mt-5 space-y-5">
                    {validReferences
                      .slice(0, 3)
                      .map((item, index) => {
                        const name =
                          getValue(item, [
                            "name",
                          ]);

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
                                  text-[10px]
                                  font-bold
                                  text-white
                                "
                              >
                                {name}
                              </h3>
                            )}

                            {(position ||
                              company) && (
                              <TinyText
                                dark
                                className="mt-1"
                              >
                                {[position, company]
                                  .filter(Boolean)
                                  .join(" • ")}
                              </TinyText>
                            )}

                            {(email ||
                              phone) && (
                              <p
                                className="
                                  mt-1
                                  break-all
                                  text-[8px]
                                  leading-[1.5]
                                  text-white/45
                                "
                              >
                                {[email, phone]
                                  .filter(Boolean)
                                  .join(
                                    " • "
                                  )}
                              </p>
                            )}
                          </article>
                        );
                      })}
                  </div>
                </section>
              )}

              {/* SAMPLE-ONLY DECORATION */}

              {useSampleData && (
                <>
                  <div
                    className="
                      mt-10
                      h-px
                      bg-gradient-to-r
                      from-teal-400
                      via-indigo-400
                      to-transparent
                    "
                  />

                  <div
                    className="
                      mt-4
                      text-[8px]
                      leading-[1.5]
                      text-white/40
                    "
                  >
                    Creative thinking.
                    <br />
                    Digital craft.
                    <br />
                    Meaningful experiences.
                  </div>
                </>
              )}
            </aside>
          )}
        </div>
      </main>
    </div>
  );
}

export default AuroraPreview;