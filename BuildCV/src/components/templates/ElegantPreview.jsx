import React from "react";

function ElegantPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Olivia Carter",
    jobTitle: "Frontend Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "A thoughtful developer passionate about technology, design, and storytelling, creating elegant digital experiences through clean and purposeful code.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "Senior Frontend Developer",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Built responsive web applications using React and modern JavaScript.",
        "Collaborated with designers and backend engineers to deliver scalable products.",
        "Improved usability and performance across key product experiences.",
      ],
    },
    {
      jobTitle: "Frontend Developer",
      company: "Pixel & Co.",
      startDate: "2022",
      endDate: "2024",
      description: [
        "Developed reusable interface components and responsive layouts.",
        "Worked closely with product teams to turn concepts into production-ready features.",
      ],
    },
    {
      jobTitle: "UI Developer",
      company: "Studio Eight",
      startDate: "2020",
      endDate: "2022",
      description: [
        "Created accessible interfaces and interactive web experiences.",
        "Worked with designers to translate visual concepts into responsive websites.",
      ],
    },
  ];

  const sampleEducation = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      startDate: "2020",
      endDate: "2024",
    },
    {
      degree: "Diploma in Digital Design",
      institution: "Design Academy",
      startDate: "2019",
      endDate: "2020",
    },
  ];

  const sampleSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "UI/UX",
    "Figma",
    "CSS",
    "HTML",
    "Git",
    "Responsive Design",
    "Design Systems",
  ];

  const sampleProjects = [
    {
      name: "BuildCV",
      description:
        "A modern resume builder focused on elegant templates and a simple editing experience.",
    },
    {
      name: "Luma Portfolio",
      description:
        "A refined portfolio experience combining editorial layouts with interactive web design.",
    },
    {
      name: "Flow Dashboard",
      description:
        "A productivity dashboard designed around clear information hierarchy and intuitive interactions.",
    },
  ];

  const sampleCertifications = [
    {
      name: "Meta Front-End Developer",
      issuer: "Meta",
      date: "2024",
    },
    {
      name: "Google UX Design",
      issuer: "Google",
      date: "2023",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022",
    },
  ];

  const sampleLanguages = [
    {
      language: "English",
      level: "Native",
    },
    {
      language: "Spanish",
      level: "Professional",
    },
    {
      language: "French",
      level: "Conversational",
    },
  ];

  const sampleAchievements = [
    {
      title: "Design Excellence Award",
      description:
        "Recognized for creating an elegant and accessible digital product experience.",
      date: "2024",
    },
    {
      title: "Creative Technology Showcase",
      description:
        "Presented an interactive web experience at a regional creative technology event.",
      date: "2023",
    },
    {
      title: "Open Source Contributor",
      description:
        "Contributed frontend components and documentation to community projects.",
      date: "2022",
    },
  ];

  const sampleInterests = [
    "Photography",
    "Typography",
    "Digital Art",
    "Creative Coding",
    "Travel",
    "Reading",
  ];

  const sampleReferences = [
    {
      name: "Daniel Brooks",
      position: "Creative Director",
      company: "Northstar Digital",
      email: "daniel.brooks@example.com",
      phone: "+1 415 555 0142",
    },
    {
      name: "Sophia Miller",
      position: "Product Designer",
      company: "Pixel & Co.",
      email: "sophia.miller@example.com",
      phone: "+1 415 555 0167",
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
  // ARRAY DATA
  // =========================================================

  const education = useSampleData
    ? Array.isArray(formData.education) && formData.education.length > 0
      ? formData.education
      : Array.isArray(data.education) && data.education.length > 0
      ? data.education
      : sampleEducation
    : Array.isArray(formData.education)
    ? formData.education
    : [];

  const experience = useSampleData
    ? Array.isArray(formData.experience) && formData.experience.length > 0
      ? formData.experience
      : Array.isArray(data.experience) && data.experience.length > 0
      ? data.experience
      : sampleExperience
    : Array.isArray(formData.experience)
    ? formData.experience
    : [];

  const skills = useSampleData
    ? Array.isArray(formData.skills) && formData.skills.length > 0
      ? formData.skills
      : Array.isArray(data.skills) && data.skills.length > 0
      ? data.skills
      : sampleSkills
    : Array.isArray(formData.skills)
    ? formData.skills
    : [];

  const projects = useSampleData
    ? Array.isArray(formData.projects) && formData.projects.length > 0
      ? formData.projects
      : Array.isArray(data.projects) && data.projects.length > 0
      ? data.projects
      : sampleProjects
    : Array.isArray(formData.projects)
    ? formData.projects
    : [];

  // =========================================================
  // OPTIONAL SECTION DATA
  // =========================================================

  const getOptionalSection = (
    formSection,
    dataSection,
    sampleItems
  ) => {
    if (!useSampleData) {
      if (
        formSection?.enabled &&
        Array.isArray(formSection.items)
      ) {
        return formSection.items;
      }

      return [];
    }

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

  // =========================================================
  // OPTIONAL SECTIONS
  // =========================================================

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

  let interests = [];

  if (!useSampleData) {
    if (formData.interests?.enabled) {
      const value = String(
        formData.interests.value || ""
      ).trim();

      if (value) {
        interests = value
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean);
      }
    }
  } else {
    if (
      formData.interests?.enabled &&
      String(formData.interests.value || "").trim()
    ) {
      interests = String(formData.interests.value)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    } else if (
      data.interests?.enabled &&
      String(data.interests.value || "").trim()
    ) {
      interests = String(data.interests.value)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    } else {
      interests = Array.isArray(sampleInterests)
        ? sampleInterests
        : String(sampleInterests || "")
            .split(",")
            .map((item) => item.trim())
            .filter(Boolean);
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
    if (typeof skill === "string") return skill;

    return getValue(skill, [
      "name",
      "skill",
      "title",
      "label",
    ]);
  };

  const getDescriptionLines = (description) => {
    if (!description) return [];

    if (Array.isArray(description)) {
      return description
        .flatMap((item) => {
          if (typeof item === "string") {
            return item
              .split("\n")
              .map((line) =>
                line
                  .replace(/^[-•*]\s*/, "")
                  .trim()
              )
              .filter(Boolean);
          }

          return [];
        })
        .filter(Boolean);
    }

    return String(description)
      .split("\n")
      .map((line) =>
        line
          .replace(/^[-•*]\s*/, "")
          .trim()
      )
      .filter(Boolean);
  };

  // =========================================================
  // VALID DATA
  // =========================================================

  const validExperience = experience.filter((item) => {
    return (
      getValue(item, [
        "jobTitle",
        "title",
        "position",
        "role",
      ]) ||
      getValue(item, [
        "company",
        "companyName",
        "organization",
      ])
    );
  });

  const validEducation = education.filter((item) => {
    return (
      getValue(item, [
        "degree",
        "program",
        "qualification",
        "title",
      ]) ||
      getValue(item, [
        "institution",
        "university",
        "school",
        "college",
      ])
    );
  });

  const validProjects = projects.filter((item) => {
    return (
      getValue(item, [
        "name",
        "title",
        "projectName",
      ]) ||
      getValue(item, [
        "description",
        "details",
        "summary",
      ])
    );
  });

  const validCertifications = certifications.filter((item) => {
    return (
      getValue(item, [
        "name",
        "title",
        "certificate",
      ]) ||
      getValue(item, [
        "issuer",
        "organization",
        "provider",
      ])
    );
  });

  const validLanguages = languages.filter((item) => {
    return (
      getValue(item, [
        "language",
        "name",
      ]) ||
      getValue(item, [
        "level",
        "proficiency",
      ])
    );
  });

  const validAchievements = achievements.filter((item) => {
    return (
      getValue(item, [
        "title",
        "name",
      ]) ||
      getValue(item, [
        "description",
        "details",
      ])
    );
  });

  const validReferences = references.filter((item) => {
    return (
      getValue(item, [
        "name",
        "fullName",
      ]) ||
      getValue(item, [
        "position",
        "jobTitle",
        "role",
      ]) ||
      getValue(item, [
        "company",
        "organization",
      ])
    );
  });

  const validInterests = interests.filter((interest) => {
    const name =
      typeof interest === "string"
        ? interest
        : getValue(interest, [
            "name",
            "title",
            "interest",
          ]);

    return String(name).trim() !== "";
  });

  const finalSkills = skills
    .map(getSkillName)
    .filter(Boolean);

  // =========================================================
  // SMALL COMPONENTS
  // =========================================================

  const Dot = () => (
    <span
      className="
        mx-2
        inline-block
        h-[3px]
        w-[3px]
        shrink-0
        rounded-full
        bg-violet-300
      "
    />
  );

  const TinyText = ({
    children,
    className = "",
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
        className={`
          pb-1
          text-[12px]
          leading-[1.6]
          text-slate-500
          ${className}
        `}
      >
        {children}
      </p>
    );
  };

  const SectionTitle = ({
    children,
    accent = false,
    centered = false,
  }) => (
    <div
      className={`
        flex
        items-center
        gap-3
        pb-1
        text-[14px]
        font-extrabold
        tracking-[0.2em]
        text-violet-600
        ${centered ? "justify-center" : ""}
      `}
    >
      {accent && (
        <span className="h-px w-8 shrink-0 bg-violet-300" />
      )}

      <span>{children}</span>

      {accent && (
        <span className="h-px w-8 shrink-0 bg-violet-300" />
      )}
    </div>
  );

  const SkillPill = ({ children }) => (
    <span
      className="
        rounded-full
        border
        border-violet-200
        bg-violet-50
        px-3
        py-1.5
        text-[10.5px]
        font-medium
        leading-[1.4]
        text-violet-700
      "
    >
      {children}
    </span>
  );

  const PhotoCircle = ({ large = false }) => {
    const size = large
      ? "h-20 w-20"
      : "h-16 w-16";

    if (personal.profileImage) {
      return (
        <div
          className={`
            mx-auto
            overflow-hidden
            rounded-full
            ${size}
            ring-2
            ring-violet-200
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
          mx-auto
          flex
          items-center
          justify-center
          rounded-full
          bg-violet-50
          ${size}
          ring-2
          ring-violet-200
        `}
      >
        <span
          className="
            font-serif
            text-[15px]
            font-semibold
            text-violet-600
          "
        >
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
        min-h-[1123px]
        w-[794px]
        overflow-visible
        bg-white
        px-[48px]
        py-[42px]
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="text-center">
        <PhotoCircle large />

        {personal.fullName && (
          <div
            className="
              mt-5
              pb-1
              font-serif
              text-[46px]
              font-semibold
              uppercase
              leading-[1.05]
              tracking-[0.02em]
              text-slate-900
            "
          >
            {personal.fullName}
          </div>
        )}

        {personal.jobTitle && (
          <div
            className="
              mt-3
              pb-1
              text-[16px]
              font-medium
              uppercase
              leading-[1.4]
              tracking-[0.24em]
              text-violet-600
            "
          >
            {personal.jobTitle}
          </div>
        )}

        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin ||
          personal.github) && (
          <div
            className="
              mx-auto
              mt-4
              flex
              max-w-[680px]
              flex-wrap
              items-center
              justify-center
              text-[12px]
              leading-[1.55]
              text-slate-500
            "
          >
            {personal.email && (
              <>
                <span className="pb-1">
                  {personal.email}
                </span>

                {(personal.phone ||
                  personal.location ||
                  personal.linkedin ||
                  personal.github) && <Dot />}
              </>
            )}

            {personal.phone && (
              <>
                <span className="pb-1">
                  {personal.phone}
                </span>

                {(personal.location ||
                  personal.linkedin ||
                  personal.github) && <Dot />}
              </>
            )}

            {personal.location && (
              <>
                <span className="pb-1">
                  {personal.location}
                </span>

                {(personal.linkedin ||
                  personal.github) && <Dot />}
              </>
            )}

            {personal.linkedin && (
              <>
                <span className="break-all pb-1">
                  {personal.linkedin}
                </span>

                {personal.github && <Dot />}
              </>
            )}

            {personal.github && (
              <span className="break-all pb-1">
                {personal.github}
              </span>
            )}
          </div>
        )}
      </header>

      {/* =====================================================
          DECORATIVE LINE
      ====================================================== */}

      <div className="mx-auto mt-6 h-px w-24 bg-violet-300" />

      {/* =====================================================
          SUMMARY
      ====================================================== */}

      {personal.summary && (
        <section className="mt-7">
          <SectionTitle accent centered>
            ABOUT ME
          </SectionTitle>

          <p
            className="
              mx-auto
              mt-4
              max-w-[690px]
              pb-2
              text-center
              text-[13px]
              leading-[1.65]
              text-slate-600
            "
          >
            {personal.summary}
          </p>
        </section>
      )}

      {/* =====================================================
          TWO COLUMN CONTENT
      ====================================================== */}

      <div
        className="
          mt-8
          grid
          grid-cols-[1.65fr_1fr]
          gap-x-9
          items-start
        "
      >
        {/* ===================================================
            LEFT COLUMN
        =================================================== */}

        <div className="min-w-0">

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          {validExperience.length > 0 && (
            <section className="mb-8">
              <SectionTitle accent>
                EXPERIENCE
              </SectionTitle>

              <div className="mt-5 space-y-7">
                {validExperience.map((item, index) => {
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

                  const location = getValue(item, [
                    "location",
                    "city",
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

                  const descriptionLines =
                    getDescriptionLines(description);

                  return (
                    <article
                      key={index}
                      className="
                        break-inside-avoid
                        pb-2
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          {jobTitle && (
                            <h3
                              className="
                                pb-1
                                text-[15px]
                                font-bold
                                leading-[1.4]
                                text-slate-900
                              "
                            >
                              {jobTitle}
                            </h3>
                          )}

                          {(company || location) && (
                            <p
                              className="
                                pb-1
                                text-[11.5px]
                                font-medium
                                leading-[1.5]
                                text-slate-500
                              "
                            >
                              {[company, location]
                                .filter(Boolean)
                                .join(" · ")}
                            </p>
                          )}
                        </div>

                        {(startDate || endDate) && (
                          <span
                            className="
                              shrink-0
                              pb-1
                              text-right
                              text-[11.5px]
                              leading-[1.5]
                              text-slate-400
                            "
                          >
                            {startDate || ""}
                            {startDate || endDate
                              ? " — "
                              : ""}
                            {endDate || "Present"}
                          </span>
                        )}
                      </div>

                      {descriptionLines.length > 0 && (
                        <ul className="mt-2 space-y-2 pb-1">
                          {descriptionLines.map(
                            (line, lineIndex) => (
                              <li
                                key={lineIndex}
                                className="
                                  relative
                                  pl-4
                                  pb-1
                                  text-[12px]
                                  leading-[1.6]
                                  text-slate-600
                                "
                              >
                                <span
                                  className="
                                    absolute
                                    left-0
                                    top-[9px]
                                    h-[4px]
                                    w-[4px]
                                    rounded-full
                                    bg-violet-300
                                  "
                                />
                                {line}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {validEducation.length > 0 && (
            <section className="mb-8">
              <SectionTitle accent>
                EDUCATION
              </SectionTitle>

              <div className="mt-5 space-y-6">
                {validEducation.map((item, index) => {
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

                  const location = getValue(item, [
                    "location",
                    "city",
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
                    "graduationDate",
                  ]);

                  const description = getValue(item, [
                    "description",
                    "details",
                  ]);

                  return (
                    <article
                      key={index}
                      className="
                        break-inside-avoid
                        pb-2
                      "
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0 flex-1">
                          {degree && (
                            <h3
                              className="
                                pb-1
                                text-[14px]
                                font-bold
                                leading-[1.45]
                                text-slate-900
                              "
                            >
                              {degree}
                            </h3>
                          )}

                          {(institution || location) && (
                            <p
                              className="
                                pb-1
                                text-[12px]
                                leading-[1.55]
                                text-slate-500
                              "
                            >
                              {[institution, location]
                                .filter(Boolean)
                                .join(" · ")}
                            </p>
                          )}
                        </div>

                        {(startDate || endDate) && (
                          <span
                            className="
                              shrink-0
                              pb-1
                              text-right
                              text-[11px]
                              leading-[1.5]
                              text-slate-400
                            "
                          >
                            {startDate || ""}
                            {startDate || endDate
                              ? " — "
                              : ""}
                            {endDate || "Present"}
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
                })}
              </div>
            </section>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {validProjects.length > 0 && (
            <section className="mb-8">
              <SectionTitle accent>
                SELECTED WORK
              </SectionTitle>

              <div className="mt-5 space-y-6">
                {validProjects.map((project, index) => {
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

                  const link = getValue(project, [
                    "link",
                    "url",
                    "website",
                    "github",
                  ]);

                  const technologies =
                    project.technologies ||
                    project.technology ||
                    project.techStack ||
                    project.tech ||
                    [];

                  const techList = Array.isArray(
                    technologies
                  )
                    ? technologies
                    : String(technologies || "")
                        .split(",")
                        .map((item) => item.trim())
                        .filter(Boolean);

                  return (
                    <article
                      key={index}
                      className="
                        break-inside-avoid
                        border-b
                        border-violet-100
                        pb-4
                      "
                    >
                      {projectName && (
                        <h3
                          className="
                            pb-1
                            text-[14px]
                            font-bold
                            leading-[1.45]
                            text-slate-900
                          "
                        >
                          {projectName}
                        </h3>
                      )}

                      {description && (
                        <p
                          className="
                            pb-2
                            text-[12px]
                            leading-[1.6]
                            text-slate-600
                          "
                        >
                          {description}
                        </p>
                      )}

                      {techList.length > 0 && (
                        <div className="flex flex-wrap gap-x-2 gap-y-1 pb-1">
                          {techList.map(
                            (technology, techIndex) => (
                              <span
                                key={techIndex}
                                className="
                                  text-[10.5px]
                                  font-medium
                                  leading-[1.5]
                                  text-violet-600
                                "
                              >
                                {technology}
                                {techIndex <
                                techList.length - 1
                                  ? " ·"
                                  : ""}
                              </span>
                            )
                          )}
                        </div>
                      )}

                      {link && (
                        <p
                          className="
                            mt-1
                            break-all
                            pb-1
                            text-[10.5px]
                            leading-[1.5]
                            text-slate-400
                          "
                        >
                          {link}
                        </p>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </div>

        {/* ===================================================
            RIGHT COLUMN
        =================================================== */}

        <aside className="min-w-0">

          {/* =================================================
              SKILLS
          ================================================= */}

          {finalSkills.length > 0 && (
            <section className="mb-8">
              <SectionTitle>
                SKILLS
              </SectionTitle>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-2
                  pb-1
                "
              >
                {finalSkills.map((skill, index) => (
                  <SkillPill key={`${skill}-${index}`}>
                    {skill}
                  </SkillPill>
                ))}
              </div>
            </section>
          )}

          {/* =================================================
              CERTIFICATIONS
          ================================================= */}

          {validCertifications.length > 0 && (
            <section className="mb-8">
              <SectionTitle>
                CERTIFICATIONS
              </SectionTitle>

              <div className="mt-4 space-y-5">
                {validCertifications.map(
                  (item, index) => {
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

                    return (
                      <article
                        key={index}
                        className="
                          break-inside-avoid
                          pb-2
                        "
                      >
                        {name && (
                          <h3
                            className="
                              pb-1
                              text-[12px]
                              font-bold
                              leading-[1.5]
                              text-slate-900
                            "
                          >
                            {name}
                          </h3>
                        )}

                        {(issuer || date) && (
                          <p
                            className="
                              pb-1
                              text-[11px]
                              leading-[1.55]
                              text-slate-500
                            "
                          >
                            {issuer}
                            {issuer && date
                              ? " · "
                              : ""}
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

          {/* =================================================
              ACHIEVEMENTS
          ================================================= */}

          {validAchievements.length > 0 && (
            <section className="mb-8">
              <SectionTitle>
                ACHIEVEMENTS
              </SectionTitle>

              <div className="mt-4 space-y-5">
                {validAchievements.map(
                  (item, index) => {
                    const title = getValue(item, [
                      "title",
                      "name",
                    ]);

                    const description = getValue(
                      item,
                      [
                        "description",
                        "details",
                      ]
                    );

                    const date = getValue(item, [
                      "date",
                      "year",
                    ]);

                    return (
                      <article
                        key={index}
                        className="
                          break-inside-avoid
                          pb-2
                        "
                      >
                        <div className="flex items-start justify-between gap-3">
                          {title && (
                            <h3
                              className="
                                pb-1
                                text-[13px]
                                font-bold
                                leading-[1.45]
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
                                pb-1
                                text-[10px]
                                text-slate-400
                              "
                            >
                              {date}
                            </span>
                          )}
                        </div>

                        {description && (
                          <p
                            className="
                              pb-1
                              text-[11.5px]
                              leading-[1.6]
                              text-slate-500
                            "
                          >
                            {description}
                          </p>
                        )}
                      </article>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* =================================================
              LANGUAGES
          ================================================= */}

          {validLanguages.length > 0 && (
            <section className="mb-8">
              <SectionTitle>
                LANGUAGES
              </SectionTitle>

              <div className="mt-4 space-y-4">
                {validLanguages.map(
                  (item, index) => {
                    const language = getValue(item, [
                      "language",
                      "name",
                    ]);

                    const level = getValue(item, [
                      "level",
                      "proficiency",
                      "fluency",
                    ]);

                    return (
                      <div
                        key={index}
                        className="
                          break-inside-avoid
                          pb-1
                        "
                      >
                        {language && (
                          <p
                            className="
                              pb-1
                              text-[12px]
                              font-semibold
                              leading-[1.5]
                              text-slate-900
                            "
                          >
                            {language}
                          </p>
                        )}

                        {level && (
                          <p
                            className="
                              text-[11px]
                              leading-[1.5]
                              text-slate-500
                            "
                          >
                            {level}
                          </p>
                        )}
                      </div>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* =================================================
              INTERESTS
          ================================================= */}

          {validInterests.length > 0 && (
            <section className="mb-8">
              <SectionTitle>
                INTERESTS
              </SectionTitle>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  gap-2
                  pb-1
                "
              >
                {validInterests.map(
                  (interest, index) => {
                    const name =
                      typeof interest === "string"
                        ? interest
                        : getValue(interest, [
                            "name",
                            "title",
                            "interest",
                          ]);

                    return (
                      <span
                        key={`${name}-${index}`}
                        className="
                          rounded-full
                          border
                          border-violet-200
                          px-2.5
                          py-1
                          text-[10.5px]
                          leading-[1.4]
                          text-slate-600
                        "
                      >
                        {name}
                      </span>
                    );
                  }
                )}
              </div>
            </section>
          )}

          {/* =================================================
              REFERENCES
          ================================================= */}

          {validReferences.length > 0 && (
            <section className="mb-8">
              <SectionTitle>
                REFERENCES
              </SectionTitle>

              <div className="mt-4 space-y-6">
                {validReferences.map(
                  (item, index) => {
                    const name = getValue(item, [
                      "name",
                      "fullName",
                    ]);

                    const position = getValue(
                      item,
                      [
                        "position",
                        "jobTitle",
                        "role",
                      ]
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
                      "telephone",
                    ]);

                    return (
                      <article
                        key={index}
                        className="
                          break-inside-avoid
                          pb-2
                        "
                      >
                        {name && (
                          <p
                            className="
                              pb-1
                              text-[12px]
                              font-semibold
                              leading-[1.5]
                              text-slate-900
                            "
                          >
                            {name}
                          </p>
                        )}

                        {(position || company) && (
                          <p
                            className="
                              pb-1
                              text-[11px]
                              leading-[1.55]
                              text-slate-500
                            "
                          >
                            {[position, company]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}

                        {email && (
                          <p
                            className="
                              break-all
                              pb-1
                              text-[10.5px]
                              leading-[1.5]
                              text-slate-500
                            "
                          >
                            {email}
                          </p>
                        )}

                        {phone && (
                          <p
                            className="
                              pb-1
                              text-[10.5px]
                              leading-[1.5]
                              text-slate-500
                            "
                          >
                            {phone}
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
    </div>
  );
}

export default ElegantPreview;
