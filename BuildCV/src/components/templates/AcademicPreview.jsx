import React from "react";

function AcademicPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Dr. Olivia Carter",
    jobTitle: "Researcher • Software Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0182",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Research-focused technology professional with interests in artificial intelligence, modern web development and data-driven solutions. Experienced in technical research, software development and communicating complex ideas through clear documentation.",
    profileImage: "",
  };

  const sampleEducation = [
    {
      degree: "Ph.D. in Computer Science",
      institution: "Stanford University",
      startDate: "2021",
      endDate: "2025",
    },
    {
      degree: "M.S. in Computer Science",
      institution: "University of California",
      startDate: "2019",
      endDate: "2021",
    },
    {
      degree: "B.S. in Computer Science",
      institution: "University of Washington",
      startDate: "2015",
      endDate: "2019",
    },
  ];

  const sampleExperience = [
    {
      jobTitle: "Research Assistant",
      company: "Stanford AI Research Lab",
      startDate: "2024",
      endDate: "Present",
      description:
        "Conducted research in machine learning and intelligent systems.\nAnalyzed datasets and contributed to technical research publications.\nDeveloped prototypes to evaluate research concepts.",
    },
    {
      jobTitle: "Software Research Intern",
      company: "Technology Research Center",
      startDate: "2022",
      endDate: "2024",
      description:
        "Supported software research and development initiatives.\nBuilt data-driven applications and technical prototypes.\nPrepared technical documentation and research reports.",
    },
  ];

  const sampleSkills = [
    "Python",
    "React",
    "JavaScript",
    "SQL",
    "Machine Learning",
    "Data Analysis",
    "Git",
    "Research",
  ];

  const sampleProjects = [
    {
      title: "Intelligent Research Platform",
      description:
        "Developed a research platform for analyzing datasets and presenting data-driven insights.",
    },
    {
      title: "Academic Web Application",
      description:
        "Designed and developed a responsive web application for academic research and collaboration.",
    },
  ];

  const samplePublications = [
    {
      title: "A Novel AI Framework for Business Analytics",
      publisher: "International Computing Conference",
      year: "2026",
    },
    {
      title: "Intelligent Decision Support Systems",
      publisher: "Journal of Applied Computing",
      year: "2025",
    },
  ];

  const sampleResearchInterests = [
    "Artificial Intelligence",
    "Web Development",
    "Data Science",
    "HCI",
  ];

  const sampleAcademicFocus = [
    "Research & Analysis",
    "Technical Writing",
    "Problem Solving",
    "Data-Driven Thinking",
  ];

  // =========================================================
  // SAMPLE OPTIONAL DATA
  // =========================================================

  const sampleCertifications = [
    {
      name: "Meta Front-End Developer",
      issuer: "Meta",
      year: "2023",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022",
    },
    {
      name: "JavaScript Algorithms",
      issuer: "freeCodeCamp",
      year: "2022",
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
      title: "Research Excellence",
      description:
        "Contributed to research projects involving intelligent systems and data-driven solutions.",
    },
    {
      title: "Academic Publication",
      description:
        "Published technical research focused on modern computing and artificial intelligence.",
    },
    {
      title: "Developer Mentoring",
      description:
        "Supported junior developers through technical guidance and collaborative research.",
    },
  ];

  const sampleInterests = [
    "Artificial Intelligence",
    "Open Source",
    "Reading",
    "Research",
    "Technology",
    "Photography",
  ];

  const sampleReferences = [
    {
      name: "James Wilson",
      position: "Research Director",
      company: "Stanford AI Research Lab",
      email: "james.wilson@example.com",
    },
    {
      name: "Sophia Bennett",
      position: "Engineering Manager",
      company: "Technology Research Center",
      email: "sophia.bennett@example.com",
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

  const publications = useSampleData
    ? Array.isArray(formData.publications) &&
      formData.publications.length > 0
      ? formData.publications
      : Array.isArray(data.publications) &&
        data.publications.length > 0
      ? data.publications
      : samplePublications
    : Array.isArray(formData.publications)
    ? formData.publications
    : [];

  // =========================================================
  // OPTIONAL SECTIONS
  // =========================================================

  const getOptionalItems = (
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

  const certifications = getOptionalItems(
    formData.certifications,
    data.certifications,
    sampleCertifications
  );

  const languages = getOptionalItems(
    formData.languages,
    data.languages,
    sampleLanguages
  );

  const achievements = getOptionalItems(
    formData.achievements,
    data.achievements,
    sampleAchievements
  );

  const references = getOptionalItems(
    formData.references,
    data.references,
    sampleReferences
  );

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
      interests = sampleInterests;
    }
  }

  // =========================================================
  // DISPLAY SKILLS
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

  const displaySkills = skills
    .map(getSkillName)
    .filter(Boolean);

  // =========================================================
  // RESEARCH INTERESTS
  // =========================================================

  const researchInterests = useSampleData
    ? sampleResearchInterests
    : Array.isArray(formData.researchInterests)
    ? formData.researchInterests
    : [];

  // =========================================================
  // ACADEMIC FOCUS
  // =========================================================

  const academicFocus = useSampleData
    ? sampleAcademicFocus
    : Array.isArray(formData.academicFocus)
    ? formData.academicFocus
    : [];

  // =========================================================
  // HELPERS
  // =========================================================

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
  // SMALL COMPONENTS
  // =========================================================

  const SectionTitle = ({ children }) => (
    <div className="mb-3 flex items-center gap-2.5">
      <span className="h-[3px] w-5 rounded-full bg-indigo-600" />

      <h2
        className="
          text-[11px]
          font-extrabold
          uppercase
          tracking-[0.2em]
          text-slate-900
        "
      >
        {children}
      </h2>
    </div>
  );

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

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines =
      getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.slice(0, 4).map(
            (line, index) => (
              <li
                key={index}
                className="
                  relative
                  pl-3.5
                  text-[9.5px]
                  leading-[1.5]
                  text-slate-600
                "
              >
                <span
                  className="
                    absolute
                    left-0
                    top-[6px]
                    h-[4px]
                    w-[4px]
                    rounded-full
                    bg-indigo-600
                  "
                />

                {line}
              </li>
            )
          )}
        </ul>
      );
    }

    // Never show fake text in Builder.
    if (!useSampleData) {
      return null;
    }

    return (
      <ul className="space-y-1.5">
        {Array.from({ length: count }).map(
          (_, index) => (
            <li
              key={index}
              className="
                relative
                pl-3.5
                text-[9.5px]
                leading-[1.5]
                text-slate-400
              "
            >
              <span
                className="
                  absolute
                  left-0
                  top-[6px]
                  h-[4px]
                  w-[4px]
                  rounded-full
                  bg-slate-300
                "
              />

              Professional responsibility or
              achievement
            </li>
          )
        )}
      </ul>
    );
  };

  const PhotoCircle = () => {
    if (personal.profileImage) {
      return (
        <img
          src={personal.profileImage}
          alt=""
          className="
            h-16
            w-16
            shrink-0
            rounded-full
            border
            border-slate-200
            object-cover
          "
        />
      );
    }

    if (!useSampleData) {
      return null;
    }

    return (
      <div
        className="
          flex
          h-16
          w-16
          shrink-0
          items-center
          justify-center
          rounded-full
          border
          border-slate-300
          bg-slate-50
          text-[7px]
          font-semibold
          text-slate-400
        "
      >
        PHOTO
      </div>
    );
  };

  const SkillPill = ({ children }) => (
    <span
      className="
        inline-flex
        items-center
        rounded-md
        border
        border-slate-200
        bg-slate-50
        px-2
        py-1.5
        text-[9px]
        font-semibold
        leading-none
        text-slate-700
      "
    >
      {children}
    </span>
  );

  // =========================================================
  // CONTACT INFORMATION
  // =========================================================

  const contactItems = [
    personal.email,
    personal.phone,
    personal.location,
    personal.linkedin,
  ].filter(Boolean);

  // =========================================================
  // VALID OPTIONAL DATA
  // =========================================================

  const validCertifications =
    certifications.filter((item) =>
      getValue(item, [
        "name",
        "title",
        "certificate",
        "certification",
        "issuer",
      ])
    );

  const validLanguages =
    languages.filter((item) => {
      if (typeof item === "string") {
        return item.trim() !== "";
      }

      return Boolean(
        getValue(item, [
          "name",
          "language",
          "title",
        ])
      );
    });

  const validAchievements =
    achievements.filter((item) =>
      getValue(item, [
        "title",
        "name",
        "achievement",
        "description",
      ])
    );

  const validReferences =
    references.filter((item) =>
      getValue(item, [
        "name",
        "fullName",
        "person",
        "position",
        "company",
        "email",
      ])
    );

  const validInterests =
    interests.filter((item) => {
      if (typeof item === "string") {
        return item.trim() !== "";
      }

      return Boolean(
        getValue(item, [
          "name",
          "interest",
          "title",
          "label",
        ])
      );
    });

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      id="resume-preview"
      className="
        box-border
        min-h-[1123px]
        h-auto
        overflow-visible
        w-[794px]
        bg-white
        px-[52px]
        py-[48px]
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          border-b
          border-slate-900
          pb-6
        "
      >
        <div
          className="
            flex
            items-center
            gap-5
          "
        >
          {/* PHOTO */}

          <PhotoCircle />

          {/* NAME + TITLE */}

          <div className="min-w-0 flex-1">
            {personal.fullName && (
              <h1
                className="
                  text-[38px]
                  font-black
                  leading-none
                  tracking-[-0.035em]
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
                  text-[13px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-indigo-600
                "
              >
                {personal.jobTitle}
              </div>
            )}
          </div>

          {/* ACCENT */}

          <div
            className="
              h-10
              w-1
              shrink-0
              rounded-full
              bg-indigo-600
            "
          />
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
              gap-y-1.5
              text-[9.5px]
              font-medium
              text-slate-500
            "
          >
            {contactItems.map(
              (item, index) => (
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
              )
            )}
          </div>
        )}
      </header>

      {/* =====================================================
          RESEARCH INTERESTS
      ===================================================== */}

      {researchInterests.length > 0 && (
        <section className="mt-6">
          <SectionTitle>
            Research Interests
          </SectionTitle>

          <div className="flex flex-wrap gap-2">
            {researchInterests.map(
              (item, index) => (
                <SkillPill key={`${item}-${index}`}>
                  {item}
                </SkillPill>
              )
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          mt-6
          grid
          grid-cols-[1.7fr_0.9fr]
          gap-8
        "
      >
        {/* ===================================================
            LEFT COLUMN
        =================================================== */}

        <main className="min-w-0">
          {/* =================================================
              PROFILE
          ================================================= */}

          {personal.summary && (
            <section>
              <SectionTitle>
                Academic Profile
              </SectionTitle>

              <TinyText>
                {personal.summary}
              </TinyText>
            </section>
          )}

          {/* =================================================
              EDUCATION
          ================================================= */}

          {education.length > 0 && (
            <section className="mt-7">
              <SectionTitle>
                Education
              </SectionTitle>

              <div className="space-y-5">
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
                        "university",
                        "school",
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

                    return (
                      <article
                        key={index}
                        className="
                          relative
                          break-inside-avoid
                          pl-4
                        "
                      >
                        {/* TIMELINE DOT */}

                        <span
                          className="
                            absolute
                            left-0
                            top-[5px]
                            h-2
                            w-2
                            rounded-full
                            bg-indigo-600
                          "
                        />

                        {/* DEGREE */}

                        {degree && (
                          <h3
                            className="
                              text-[11px]
                              font-bold
                              leading-[1.4]
                              text-slate-900
                            "
                          >
                            {degree}
                          </h3>
                        )}

                        {/* INSTITUTION */}

                        {institution && (
                          <div
                            className="
                              mt-1
                              text-[10px]
                              font-medium
                              text-slate-500
                            "
                          >
                            {institution}
                          </div>
                        )}

                        {/* DATE */}

                        {(startDate ||
                          endDate) && (
                          <div
                            className="
                              mt-1
                              text-[9.5px]
                              font-semibold
                              text-indigo-600
                            "
                          >
                            {startDate || ""}
                            {startDate &&
                            endDate
                              ? " — "
                              : ""}
                            {endDate || ""}
                          </div>
                        )}
                      </article>
                    );
                  })}
              </div>
            </section>
          )}

          {/* =================================================
              RESEARCH & EXPERIENCE
          ================================================= */}

          {experience.length > 0 && (
            <section className="mt-7">
              <SectionTitle>
                Research & Experience
              </SectionTitle>

              <div className="space-y-6">
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
                        "institution",
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

                    return (
                      <article
                        key={index}
                        className="
                          relative
                          break-inside-avoid
                          pl-4
                        "
                      >
                        {/* TIMELINE DOT */}

                        <span
                          className="
                            absolute
                            left-0
                            top-[5px]
                            h-2
                            w-2
                            rounded-full
                            bg-indigo-600
                          "
                        />

                        {/* TIMELINE LINE */}

                        {index <
                          experience
                            .slice(0, 3)
                            .length -
                            1 && (
                          <span
                            className="
                              absolute
                              left-[3px]
                              top-4
                              h-[calc(100%+24px)]
                              w-px
                              bg-slate-200
                            "
                          />
                        )}

                        {/* ROLE */}

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

                        {/* ORGANIZATION + DATE */}

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
                              text-[9.5px]
                              font-semibold
                            "
                          >
                            {company && (
                              <span className="text-indigo-600">
                                {company}
                              </span>
                            )}

                            {(startDate ||
                              endDate) && (
                              <>
                                {company && (
                                  <span className="text-slate-300">
                                    •
                                  </span>
                                )}

                                <span className="text-slate-400">
                                  {startDate ||
                                    ""}
                                  {startDate &&
                                  endDate
                                    ? " — "
                                    : ""}
                                  {endDate ||
                                    ""}
                                </span>
                              </>
                            )}
                          </div>
                        )}

                        {/* DESCRIPTION */}

                        {description && (
                          <div className="mt-2">
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

          {/* =================================================
              PUBLICATIONS
          ================================================= */}

          {publications.length > 0 && (
            <section className="mt-7">
              <SectionTitle>
                Publications
              </SectionTitle>

              <div className="space-y-4">
                {publications
                  .slice(0, 3)
                  .map(
                    (
                      publication,
                      index
                    ) => {
                      const title =
                        typeof publication ===
                        "string"
                          ? publication
                          : getValue(
                              publication,
                              [
                                "title",
                                "name",
                              ]
                            );

                      const publisher =
                        getValue(
                          publication,
                          [
                            "publisher",
                            "journal",
                            "conference",
                            "venue",
                          ]
                        );

                      const year =
                        getValue(
                          publication,
                          [
                            "year",
                            "date",
                          ]
                        );

                      return (
                        <article
                          key={index}
                          className="break-inside-avoid"
                        >
                          {title && (
                            <h3
                              className="
                                text-[10.5px]
                                font-bold
                                leading-[1.4]
                                text-slate-900
                              "
                            >
                              {title}
                            </h3>
                          )}

                          {(publisher ||
                            year) && (
                            <p
                              className="
                                mt-1
                                text-[9.5px]
                                leading-[1.4]
                                text-slate-500
                              "
                            >
                              {publisher}

                              {publisher &&
                              year
                                ? " • "
                                : ""}

                              {year}
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
              CERTIFICATIONS
          ================================================= */}

          {validCertifications.length > 0 && (
            <section className="mt-7">
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
                        "certificate",
                        "certification",
                      ]);

                    const issuer =
                      getValue(item, [
                        "issuer",
                        "organization",
                        "company",
                      ]);

                    const year =
                      getValue(item, [
                        "year",
                        "date",
                        "issued",
                      ]);

                    return (
                      <article
                        key={index}
                        className="break-inside-avoid"
                      >
                        {name && (
                          <h3
                            className="
                              text-[10.5px]
                              font-bold
                              leading-[1.4]
                              text-slate-900
                            "
                          >
                            {name}
                          </h3>
                        )}

                        {(issuer || year) && (
                          <TinyText className="mt-1">
                            {issuer}
                            {issuer && year
                              ? " • "
                              : ""}
                            {year}
                          </TinyText>
                        )}
                      </article>
                    );
                  })}
              </div>
            </section>
          )}

          {/* =================================================
              ACHIEVEMENTS
          ================================================= */}

          {validAchievements.length > 0 && (
            <section className="mt-7">
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
                        "achievement",
                      ]);

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                      ]);

                    return (
                      <article
                        key={index}
                        className="break-inside-avoid"
                      >
                        {title && (
                          <h3
                            className="
                              text-[10.5px]
                              font-bold
                              leading-[1.4]
                              text-slate-900
                            "
                          >
                            {title}
                          </h3>
                        )}

                        {description && (
                          <TinyText className="mt-1">
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
              INTERESTS
          ================================================= */}

          {validInterests.length > 0 && (
            <section className="mt-7">
              <SectionTitle>
                Interests
              </SectionTitle>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {validInterests
                  .slice(0, 8)
                  .map((item, index) => {
                    const name =
                      typeof item ===
                      "string"
                        ? item
                        : getValue(item, [
                            "name",
                            "interest",
                            "title",
                            "label",
                          ]);

                    return (
                      <span
                        key={index}
                        className="
                          text-[9.5px]
                          font-medium
                          text-slate-600
                        "
                      >
                        {name}
                      </span>
                    );
                  })}
              </div>
            </section>
          )}
        </main>

        {/* ===================================================
            RIGHT COLUMN
        =================================================== */}

        <aside
          className="
            min-w-0
            border-l
            border-slate-200
            pl-6
          "
        >
          {/* =================================================
              SKILLS
          ================================================= */}

          {displaySkills.length > 0 && (
            <section>
              <SectionTitle>
                Technical Skills
              </SectionTitle>

              <div className="flex flex-wrap gap-1.5">
                {displaySkills
                  .slice(0, 14)
                  .map(
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

          {/* =================================================
              RESEARCH AREAS
          ================================================= */}

          {researchInterests.length > 0 && (
            <section className="mt-8">
              <SectionTitle>
                Research Areas
              </SectionTitle>

              <div className="space-y-2.5">
                {researchInterests.map(
                  (item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[9.5px]
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
                  )
                )}
              </div>
            </section>
          )}

          {/* =================================================
              PROJECTS
          ================================================= */}

          {projects.length > 0 && (
            <section className="mt-8">
              <SectionTitle>
                Projects
              </SectionTitle>

              <div className="space-y-5">
                {projects
                  .slice(0, 2)
                  .map((project, index) => {
                    const title =
                      typeof project ===
                      "string"
                        ? project
                        : getValue(
                            project,
                            [
                              "title",
                              "name",
                            ]
                          );

                    const description =
                      typeof project ===
                      "string"
                        ? ""
                        : getValue(
                            project,
                            [
                              "description",
                              "details",
                            ]
                          );

                    return (
                      <article
                        key={index}
                        className="break-inside-avoid"
                      >
                        {title && (
                          <h3
                            className="
                              text-[10.5px]
                              font-bold
                              leading-[1.4]
                              text-slate-900
                            "
                          >
                            {title}
                          </h3>
                        )}

                        {description && (
                          <TinyText className="mt-1.5">
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
              ACADEMIC FOCUS
          ================================================= */}

          {academicFocus.length > 0 && (
            <section className="mt-8">
              <SectionTitle>
                Academic Focus
              </SectionTitle>

              <div className="space-y-2.5">
                {academicFocus.map(
                  (item, index) => (
                    <div
                      key={`${item}-${index}`}
                      className="
                        flex
                        items-center
                        gap-2
                        text-[9.5px]
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
                  )
                )}
              </div>
            </section>
          )}

          {/* =================================================
              LANGUAGES
          ================================================= */}

          {validLanguages.length > 0 && (
            <section className="mt-8">
              <SectionTitle>
                Languages
              </SectionTitle>

              <div className="space-y-2.5">
                {validLanguages
                  .slice(0, 5)
                  .map((item, index) => {
                    const name =
                      typeof item ===
                      "string"
                        ? item
                        : getValue(item, [
                            "name",
                            "language",
                            "title",
                          ]);

                    const level =
                      typeof item ===
                      "string"
                        ? ""
                        : getValue(item, [
                            "level",
                            "proficiency",
                            "fluency",
                          ]);

                    return (
                      <div
                        key={index}
                        className="
                          text-[9.5px]
                          font-medium
                          text-slate-600
                        "
                      >
                        <span className="font-semibold text-slate-900">
                          {name}
                        </span>

                        {level && (
                          <span className="text-slate-400">
                            {" "}
                            • {level}
                          </span>
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

          {validReferences.length > 0 && (
            <section className="mt-8">
              <SectionTitle>
                References
              </SectionTitle>

              <div className="space-y-4">
                {validReferences
                  .slice(0, 3)
                  .map((item, index) => {
                    const name =
                      getValue(item, [
                        "name",
                        "fullName",
                        "person",
                      ]);

                    const position =
                      getValue(item, [
                        "position",
                        "jobTitle",
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
                        "contact",
                      ]);

                    return (
                      <article
                        key={index}
                        className="break-inside-avoid"
                      >
                        {name && (
                          <h3
                            className="
                              text-[10px]
                              font-bold
                              leading-[1.4]
                              text-slate-900
                            "
                          >
                            {name}
                          </h3>
                        )}

                        {position && (
                          <TinyText className="mt-1">
                            {position}
                          </TinyText>
                        )}

                        {company && (
                          <TinyText>
                            {company}
                          </TinyText>
                        )}

                        {email && (
                          <TinyText>
                            {email}
                          </TinyText>
                        )}
                      </article>
                    );
                  })}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}

export default AcademicPreview;