import React from "react";

function ClassicPreview({
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
    email: "olivia.carter@email.com",
    phone: "+1 415 555 0187",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Frontend developer with 5+ years of experience building responsive, accessible, and high-performance web applications. Passionate about creating clean interfaces and thoughtful digital experiences.",
    profileImage: "",
  };

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
      ],
    },
    {
      jobTitle: "Frontend Developer",
      company: "Nova Technologies",
      startDate: "2021",
      endDate: "2023",
      description: [
        "Developed modern interfaces using React, JavaScript and CSS.",
        "Worked closely with designers to deliver polished user experiences.",
      ],
    },
    {
      jobTitle: "Junior Web Developer",
      company: "Bright Digital",
      startDate: "2019",
      endDate: "2021",
      description: [
        "Implemented responsive layouts for client websites.",
        "Maintained frontend features and improved cross-browser compatibility.",
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
        "Developed a responsive shopping platform with reusable React components, product filtering and REST API integration.",
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
      name: "Portfolio Website",
      description:
        "Designed and developed a personal portfolio focused on accessibility, performance and modern visual design.",
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

  const sampleInterests =
    "UI/UX Design, Open Source, Photography, Technology";

  const sampleReferences = [
    {
      name: "Daniel Wilson",
      position: "Product Manager",
      company: "PixelCraft Studio",
      email: "daniel.wilson@email.com",
    },
    {
      name: "Sarah Mitchell",
      position: "Engineering Manager",
      company: "Nova Technologies",
      email: "sarah.mitchell@email.com",
    },
  ];

  // =========================================================
  // OPTIONAL SECTION SOURCE
  // =========================================================

  const getOptionalSection = (
    formSection,
    dataSection,
    sampleItems
  ) => {
    // =====================================================
    // LIVE BUILDER
    // =====================================================

    if (!useSampleData) {
      if (
        formSection?.enabled &&
        Array.isArray(formSection.items)
      ) {
        return formSection.items;
      }

      return [];
    }

    // =====================================================
    // SAMPLE / TEMPLATE PREVIEW
    // =====================================================

    if (
      formSection?.enabled &&
      Array.isArray(formSection.items) &&
      formSection.items.length > 0
    ) {
      return formSection.items;
    }

    if (
      dataSection?.enabled &&
      Array.isArray(dataSection.items) &&
      dataSection.items.length > 0
    ) {
      return dataSection.items;
    }

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

  if (!useSampleData) {
    if (formData.interests?.enabled) {
      interests = String(
        formData.interests.value || ""
      ).trim();
    }
  } else {
    if (
      formData.interests?.enabled &&
      String(formData.interests.value || "").trim()
    ) {
      interests = String(
        formData.interests.value
      ).trim();
    } else if (
      data.interests?.enabled &&
      String(data.interests.value || "").trim()
    ) {
      interests = String(
        data.interests.value
      ).trim();
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
  // CONTACT INFORMATION
  // =========================================================

  const contactItems = [
    personal.email,
    personal.phone,
    personal.location,
    personal.linkedin,
    personal.github,
  ].filter(Boolean);

  // =========================================================
  // SECTION TITLE
  // =========================================================

  const SectionTitle = ({ children }) => (
    <div className="mb-3.5 flex items-center gap-2.5">
      <span
        className="
          h-[3px]
          w-7
          shrink-0
          rounded-full
          bg-indigo-600
        "
      />

      <h2
        className="
          text-[14px]
          font-extrabold
          uppercase
          tracking-[0.2em]
          leading-none
          text-slate-900
        "
      >
        {children}
      </h2>
    </div>
  );

  // =========================================================
  // BODY TEXT
  // =========================================================

  const TinyText = ({
    children,
    className = "",
  }) => (
    <p
      className={`
        text-[12.5px]
        leading-[1.6]
        text-slate-500
        ${className}
      `}
    >
      {children}
    </p>
  );

  // =========================================================
  // BULLET LIST
  // =========================================================

  const ResumeLines = ({ text }) => {
    if (!text) {
      return null;
    }

    const lines = Array.isArray(text)
      ? text.filter(Boolean)
      : String(text)
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

    if (lines.length === 0) {
      return null;
    }

    return (
      <ul className="space-y-1.5">
        {lines.slice(0, 4).map((line, index) => (
          <li
            key={index}
            className="
              relative
              pl-4
              text-[11.5px]
              leading-[1.6]
              text-slate-600
            "
          >
            <span
              className="
                absolute
                left-0
                top-[8px]
                h-[5px]
                w-[5px]
                rounded-full
                bg-indigo-600
              "
            />

            {line}
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // SKILL PILL
  // =========================================================

  const SkillPill = ({ children }) => (
    <span
      className="
        inline-flex
        items-center
        rounded-md
        border
        border-slate-200
        bg-slate-50
        px-2.5
        py-2
        text-[10.5px]
        font-semibold
        leading-none
        text-slate-700
      "
    >
      {children}
    </span>
  );

  // =========================================================
  // A4 RESUME
  // =========================================================

  return (
    <div
      className="
        box-border
        min-h-[1123px]
        h-auto
        w-[794px]
        overflow-visible
        bg-white
        px-[38px]
        py-[36px]
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="border-b border-slate-200 pb-7">
        <div className="flex items-end justify-between gap-7">
          <div className="min-w-0">
            {personal.fullName && (
              <h1
                className="
                  text-[46px]
                  font-black
                  leading-none
                  tracking-[-0.04em]
                  text-slate-900
                "
              >
                {personal.fullName}
              </h1>
            )}

            {personal.jobTitle && (
              <div
                className="
                  mt-3
                  text-[16px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-indigo-600
                "
              >
                {personal.jobTitle}
              </div>
            )}
          </div>

          {(personal.fullName ||
            personal.jobTitle) && (
            <div
              className="
                mb-1
                h-12
                w-1
                shrink-0
                rounded-full
                bg-indigo-600
              "
            />
          )}
        </div>

        {/* CONTACT */}

        {contactItems.length > 0 && (
          <div
            className="
              mt-5
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              text-[12px]
              font-medium
              leading-[1.45]
              text-slate-500
            "
          >
            {contactItems.map((item, index) => (
              <React.Fragment
                key={`${item}-${index}`}
              >
                {index > 0 && (
                  <span className="text-slate-300">
                    •
                  </span>
                )}

                <span>{item}</span>
              </React.Fragment>
            ))}
          </div>
        )}
      </header>

      {/* =====================================================
          TWO COLUMN CONTENT
      ====================================================== */}

      <div
        className="
          mt-8
          grid
          grid-cols-[1.7fr_0.9fr]
          gap-6
        "
      >
        {/* ===================================================
            LEFT COLUMN
        ==================================================== */}

        <main className="min-w-0">
          {/* PROFILE */}

          {personal.summary && (
            <section>
              <SectionTitle>
                Profile
              </SectionTitle>

              <TinyText className="text-[13px] leading-[1.65]">
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

              <div className="space-y-7">
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
                          break-inside-avoid
                          pl-5
                        "
                      >
                        {/* DOT */}

                        <span
                          className="
                            absolute
                            left-0
                            top-[6px]
                            h-2.5
                            w-2.5
                            rounded-full
                            bg-indigo-600
                          "
                        />

                        {/* LINE */}

                        {index <
                          Math.min(
                            experience.length,
                            3
                          ) -
                            1 && (
                          <span
                            className="
                              absolute
                              left-[4px]
                              top-5
                              h-[calc(100%+28px)]
                              w-px
                              bg-slate-200
                            "
                          />
                        )}

                        {jobTitle && (
                          <h3
                            className="
                              text-[15px]
                              font-bold
                              leading-[1.35]
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
                              text-[11.5px]
                              font-semibold
                              leading-[1.4]
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
                          <div className="mt-2.5">
                            <ResumeLines
                              text={
                                description
                              }
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
                                text-[14.5px]
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
                                text-[10px]
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
                              text-[13px]
                              font-bold
                              leading-[1.35]
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
                              text-[11px]
                              leading-[1.4]
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
                                text-[13px]
                                font-bold
                                leading-[1.35]
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
                                text-[10px]
                                font-semibold
                                text-indigo-600
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
        </main>

        {/* ===================================================
            RIGHT COLUMN
        ==================================================== */}

        <aside
          className="
            min-w-0
            border-l
            border-slate-200
            pl-5
          "
        >
          {/* EDUCATION */}

          {education.length > 0 && (
            <section>
              <SectionTitle>
                Education
              </SectionTitle>

              <div className="space-y-6">
                {education
                  .slice(0, 3)
                  .map((item, index) => {
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
                        className="break-inside-avoid"
                      >
                        {degree && (
                          <h3
                            className="
                              text-[13px]
                              font-bold
                              leading-[1.4]
                              text-slate-900
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
                              text-[11px]
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
                  })}
              </div>
            </section>
          )}

          {/* SKILLS */}

          {finalSkills.length > 0 && (
            <section
              className={
                education.length > 0
                  ? "mt-9"
                  : ""
              }
            >
              <SectionTitle>
                Skills
              </SectionTitle>

              <div className="flex flex-wrap gap-1.5">
                {finalSkills
                  .slice(0, 14)
                  .map((skill, index) => (
                    <SkillPill
                      key={`${skill}-${index}`}
                    >
                      {skill}
                    </SkillPill>
                  ))}
              </div>
            </section>
          )}

          {/* LANGUAGES */}

          {validLanguages.length > 0 && (
            <section className="mt-9">
              <SectionTitle>
                Languages
              </SectionTitle>

              <div className="space-y-4">
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
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-2
                          "
                        >
                          {language && (
                            <span
                              className="
                                text-[11.5px]
                                font-bold
                                text-slate-800
                              "
                            >
                              {language}
                            </span>
                          )}

                          {level && (
                            <span
                              className="
                                text-[10.5px]
                                text-slate-400
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
                              bg-slate-100
                            "
                          >
                            <div
                              className="
                                h-1
                                w-full
                                rounded-full
                                bg-indigo-600
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
            <section className="mt-9">
              <SectionTitle>
                References
              </SectionTitle>

              <div className="space-y-5">
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
                              text-[12.5px]
                              font-bold
                              leading-[1.35]
                              text-slate-900
                            "
                          >
                            {name}
                          </h3>
                        )}

                        {(position ||
                          company) && (
                          <TinyText className="mt-1">
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
                              text-[10px]
                              leading-[1.5]
                              text-slate-500
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

          {/* STRENGTHS */}

          {useSampleData && (
            <section className="mt-9">
              <SectionTitle>
                Strengths
              </SectionTitle>

              <div className="space-y-2.5">
                {[
                  "Problem Solving",
                  "Communication",
                  "Teamwork",
                  "Attention to Detail",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2.5
                      text-[11.5px]
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
                        bg-indigo-600
                      "
                    />

                    {item}
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}

export default ClassicPreview;