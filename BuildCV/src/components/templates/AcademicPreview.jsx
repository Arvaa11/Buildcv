import React from "react";

function AcademicPreview({ formData = {}, data = {} }) {
  // =========================================================
  // NORMALIZE DATA
  // =========================================================

  const personal = {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
    profileImage: "",
    ...(formData.personal || data.personal || {}),
  };

  const education = Array.isArray(formData.education)
    ? formData.education
    : Array.isArray(data.education)
    ? data.education
    : [];

  const experience = Array.isArray(formData.experience)
    ? formData.experience
    : Array.isArray(data.experience)
    ? data.experience
    : [];

  const skills = Array.isArray(formData.skills)
    ? formData.skills
    : Array.isArray(data.skills)
    ? data.skills
    : [];

  const projects = Array.isArray(formData.projects)
    ? formData.projects
    : Array.isArray(data.projects)
    ? data.projects
    : [];

  const publications = Array.isArray(formData.publications)
    ? formData.publications
    : Array.isArray(data.publications)
    ? data.publications
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
  // RESEARCH INTERESTS
  // =========================================================

  const researchInterests = [
    "Artificial Intelligence",
    "Web Development",
    "Data Science",
    "HCI",
  ];

  // =========================================================
  // DISPLAY EDUCATION
  // =========================================================

  const displayEducation = education.length
    ? education
    : [
        {
          degree:
            "Bachelor of Computer Science",
          institution: "University Name",
          startDate: "2017",
          endDate: "2021",
        },
        {
          degree:
            "Higher Secondary Education",
          institution: "College Name",
          startDate: "2015",
          endDate: "2017",
        },
      ];

  // =========================================================
  // DISPLAY EXPERIENCE
  // =========================================================

  const displayExperience =
    experience.length
      ? experience
      : [
          {
            jobTitle: "Research Assistant",
            company: "Research Lab",
            startDate: "2024",
            endDate: "Present",
            description:
              "Conducted research, analyzed information and contributed to technical projects.",
          },
          {
            jobTitle:
              "Research & Development Intern",
            company: "Technology Organization",
            startDate: "2022",
            endDate: "2024",
            description:
              "Supported research activities, technical documentation and development of digital solutions.",
          },
        ];

  // =========================================================
  // DISPLAY SKILLS
  // =========================================================

  const displaySkills = skills
    .map(getSkillName)
    .filter(Boolean);

  const finalSkills =
    displaySkills.length > 0
      ? displaySkills
      : [
          "Python",
          "React",
          "JavaScript",
          "SQL",
          "Git",
          "Machine Learning",
        ];

  // =========================================================
  // DISPLAY PROJECTS
  // =========================================================

  const displayProjects =
    projects.length > 0
      ? projects
      : [
          {
            title: "Research Project",
            description:
              "Developed a technical solution focused on data analysis, research and practical implementation.",
          },
          {
            title: "Web Development Project",
            description:
              "Designed and developed a responsive web application using modern development technologies.",
          },
        ];

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
            <h1
              className="
                text-[38px]
                font-black
                leading-none
                tracking-[-0.035em]
                text-slate-900
              "
            >
              {personal.fullName ||
                "Your Name"}
            </h1>

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
              {personal.jobTitle ||
                "Researcher • Developer"}
            </div>
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
          {contactItems.length > 0 ? (
            contactItems.map(
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
            )
          ) : (
            <>
              <span>
                email@example.com
              </span>

              <span className="text-slate-300">
                •
              </span>

              <span>
                +1 234 567 890
              </span>

              <span className="text-slate-300">
                •
              </span>

              <span>
                City, Country
              </span>

              <span className="text-slate-300">
                •
              </span>

              <span>
                linkedin.com/in/username
              </span>
            </>
          )}
        </div>
      </header>

      {/* =====================================================
          RESEARCH INTERESTS
      ===================================================== */}

      <section className="mt-6">
        <SectionTitle>
          Research Interests
        </SectionTitle>

        <div className="flex flex-wrap gap-2">
          {researchInterests.map(
            (item) => (
              <SkillPill key={item}>
                {item}
              </SkillPill>
            )
          )}
        </div>
      </section>

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

          <section>
            <SectionTitle>
              Academic Profile
            </SectionTitle>

            <TinyText>
              {personal.summary ||
                "Research-focused professional with an interest in technology, modern web development and data-driven solutions. Experienced in exploring technical problems, developing practical solutions and communicating ideas through clear research and documentation."}
            </TinyText>
          </section>

          {/* =================================================
              EDUCATION
          ================================================= */}

          <section className="mt-7">
            <SectionTitle>
              Education
            </SectionTitle>

            <div className="space-y-5">
              {displayEducation
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

                      <h3
                        className="
                          text-[11px]
                          font-bold
                          leading-[1.4]
                          text-slate-900
                        "
                      >
                        {degree ||
                          "Degree / Program"}
                      </h3>

                      {/* INSTITUTION */}

                      <div
                        className="
                          mt-1
                          text-[10px]
                          font-medium
                          text-slate-500
                        "
                      >
                        {institution ||
                          "University Name"}
                      </div>

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
                          {" — "}
                          {endDate ||
                            "Present"}
                        </div>
                      )}
                    </article>
                  );
                })}
            </div>
          </section>

          {/* =================================================
              RESEARCH & EXPERIENCE
          ================================================= */}

          <section className="mt-7">
            <SectionTitle>
              Research & Experience
            </SectionTitle>

            <div className="space-y-6">
              {displayExperience
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
                        displayExperience
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

                      <h3
                        className="
                          text-[12px]
                          font-bold
                          leading-[1.3]
                          text-slate-900
                        "
                      >
                        {jobTitle ||
                          "Research / Professional Role"}
                      </h3>

                      {/* ORGANIZATION + DATE */}

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
                        <span className="text-indigo-600">
                          {company ||
                            "Organization"}
                        </span>

                        {(startDate ||
                          endDate) && (
                          <>
                            <span className="text-slate-300">
                              •
                            </span>

                            <span className="text-slate-400">
                              {startDate ||
                                ""}{" "}
                              —{" "}
                              {endDate ||
                                "Present"}
                            </span>
                          </>
                        )}
                      </div>

                      {/* DESCRIPTION */}

                      <div className="mt-2">
                        <ResumeLines
                          description={
                            description
                          }
                          count={3}
                        />
                      </div>
                    </article>
                  );
                })}
            </div>
          </section>

          {/* =================================================
              PUBLICATIONS
          ================================================= */}

          <section className="mt-7">
            <SectionTitle>
              Publications
            </SectionTitle>

            {publications.length > 0 ? (
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
                          <h3
                            className="
                              text-[10.5px]
                              font-bold
                              leading-[1.4]
                              text-slate-900
                            "
                          >
                            {title ||
                              "Publication Title"}
                          </h3>

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
            ) : (
              <div className="space-y-4">
                <article>
                  <h3
                    className="
                      text-[10.5px]
                      font-bold
                      leading-[1.4]
                      text-slate-900
                    "
                  >
                    A Novel AI Framework
                    for Business Analytics
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[9.5px]
                      text-slate-500
                    "
                  >
                    Conference / Journal •
                    2026
                  </p>
                </article>

                <article>
                  <h3
                    className="
                      text-[10.5px]
                      font-bold
                      leading-[1.4]
                      text-slate-900
                    "
                  >
                    Intelligent Decision
                    Support Systems
                  </h3>
                </article>
              </div>
            )}
          </section>
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

          <section>
            <SectionTitle>
              Technical Skills
            </SectionTitle>

            <div className="flex flex-wrap gap-1.5">
              {finalSkills
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

          {/* =================================================
              RESEARCH AREAS
          ================================================= */}

          <section className="mt-8">
            <SectionTitle>
              Research Areas
            </SectionTitle>

            <div className="space-y-2.5">
              {researchInterests.map(
                (item) => (
                  <div
                    key={item}
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

          {/* =================================================
              PROJECTS
          ================================================= */}

          <section className="mt-8">
            <SectionTitle>
              Projects
            </SectionTitle>

            <div className="space-y-5">
              {displayProjects
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
                      <h3
                        className="
                          text-[10.5px]
                          font-bold
                          leading-[1.4]
                          text-slate-900
                        "
                      >
                        {title ||
                          "Project Title"}
                      </h3>

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

          {/* =================================================
              ACADEMIC FOCUS
          ================================================= */}

          <section className="mt-8">
            <SectionTitle>
              Academic Focus
            </SectionTitle>

            <div className="space-y-2.5">
              {[
                "Research & Analysis",
                "Technical Writing",
                "Problem Solving",
                "Data-Driven Thinking",
              ].map((item) => (
                <div
                  key={item}
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
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

export default AcademicPreview;