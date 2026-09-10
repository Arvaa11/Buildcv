import React from "react";

function CreativePreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
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
      "I create digital experiences that combine thoughtful design, clean code, and meaningful interactions.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "Creative Developer",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description: [
        "Built responsive digital experiences using React and modern frontend technologies.",
        "Translated creative concepts into polished, accessible interfaces.",
        "Collaborated with designers and developers to improve product experiences.",
      ],
    },
    {
      jobTitle: "Frontend Developer",
      company: "Pixel & Co.",
      startDate: "2022",
      endDate: "2024",
      description: [
        "Developed reusable React components for multiple digital products.",
        "Improved responsive layouts and cross-browser interface consistency.",
        "Worked closely with UX teams to refine user interactions.",
      ],
    },
    {
      jobTitle: "UI Designer & Developer",
      company: "Studio Eight",
      startDate: "2021",
      endDate: "2022",
      description: [
        "Designed and developed landing pages and interactive prototypes.",
        "Created visual systems that balanced usability and brand identity.",
        "Presented design concepts and technical solutions to clients.",
      ],
    },
    {
      jobTitle: "Junior Web Designer",
      company: "Creative Lab",
      startDate: "2020",
      endDate: "2021",
      description: [
        "Created responsive website layouts and visual assets.",
        "Supported senior designers with research, prototyping, and implementation.",
        "Maintained consistent typography, spacing, and component styles.",
      ],
    },
  ];

  const sampleSkills = [
    "Figma",
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Git",
    "Adobe",
    "UI Design",
    "UX Design",
    "Prototyping",
    "Responsive Design",
    "Design Systems",
  ];

  const sampleProjects = [
    {
      name: "BuildCV",
      description:
        "A modern resume-building platform focused on flexible templates and a polished editing experience.",
    },
    {
      name: "Luma Studio",
      description:
        "A creative agency website featuring interactive layouts, visual storytelling, and responsive design.",
    },
    {
      name: "Flow Dashboard",
      description:
        "A productivity dashboard designed to simplify complex information through clean visual patterns.",
    },
    {
      name: "Portfolio 24",
      description:
        "A personal portfolio concept combining editorial typography, case studies, and subtle interactions.",
    },
  ];

  const sampleEducation = [
    {
      degree: "BSc Computer Science",
      institution: "University of California",
      startDate: "2020",
      endDate: "2024",
      description:
        "Focus on software development, interaction design, and digital systems.",
    },
    {
      degree: "Diploma in Visual Design",
      institution: "Design Academy",
      startDate: "2019",
      endDate: "2020",
      description:
        "Focused on visual communication, typography, and digital design.",
    },
  ];

  const sampleCertifications = [
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2024",
    },
    {
      name: "Meta Front-End Developer",
      issuer: "Meta",
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
        "Recognized for creating an accessible and visually engaging digital product experience.",
      date: "2024",
    },
    {
      title: "Creative Tech Showcase",
      description:
        "Selected to present an interactive web experience at a regional creative technology event.",
      date: "2023",
    },
    {
      title: "Open Source Contributor",
      description:
        "Contributed reusable frontend components and documentation to community projects.",
      date: "2022",
    },
  ];

  const sampleInterests = [
    "Digital Art",
    "Photography",
    "Typography",
    "Creative Coding",
    "Design Systems",
    "Travel",
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
        ...(formData.personal || {}),
      };

  // =========================================================
  // ARRAY DATA
  // =========================================================

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

  const education = useSampleData
    ? Array.isArray(formData.education) && formData.education.length > 0
      ? formData.education
      : Array.isArray(data.education) && data.education.length > 0
      ? data.education
      : sampleEducation
    : Array.isArray(formData.education)
    ? formData.education
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
        .map((line) => String(line).trim())
        .filter(Boolean);
    }

    return String(description)
      .split("\n")
      .map((line) => line.trim())
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
      ]) ||
      getValue(item, [
        "description",
        "details",
        "responsibilities",
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

  const validEducation = education.filter((item) => {
    return (
      getValue(item, [
        "degree",
        "qualification",
        "title",
        "program",
      ]) ||
      getValue(item, [
        "institution",
        "school",
        "university",
        "college",
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
          text-[11.5px]
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
  }) => (
    <div
      className="
        flex
        items-center
        gap-3
        pb-1
        text-[13px]
        font-bold
        tracking-[0.18em]
        text-slate-900
      "
    >
      {accent && (
        <span className="h-[3px] w-5 shrink-0 rounded-full bg-fuchsia-500" />
      )}

      {children}
    </div>
  );

  const SkillPill = ({
    children,
    dark = false,
  }) => (
    <span
      className={
        dark
          ? `
            inline-flex
            max-w-full
            break-words
            rounded-full
            border
            border-fuchsia-300/20
            bg-white/5
            px-2.5
            py-1.5
            text-[10.5px]
            font-medium
            leading-[1.2]
            text-white/80
          `
          : `
            inline-flex
            max-w-full
            break-words
            rounded-full
            border
            border-fuchsia-200
            bg-fuchsia-50
            px-2.5
            py-1.5
            text-[10.5px]
            font-medium
            leading-[1.2]
            text-fuchsia-700
          `
      }
    >
      {children}
    </span>
  );

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5 pb-1">
          {lines.map((line, index) => (
            <li
              key={index}
              className="
                relative
                pb-1
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
                  top-[9px]
                  h-[4px]
                  w-[4px]
                  rounded-full
                  bg-fuchsia-400
                "
              />

              {line}
            </li>
          ))}
        </ul>
      );
    }

    if (!useSampleData) {
      return null;
    }

    return (
      <ul className="space-y-1.5 pb-1">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="
              relative
              pb-1
              pl-4
              text-[11.5px]
              leading-[1.6]
              text-slate-400
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
                bg-fuchsia-300
              "
            />

            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-fuchsia-300",
    background = "bg-fuchsia-100",
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
        <span className="text-[12px] font-black text-fuchsia-600">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName;
  const displayJobTitle = personal.jobTitle;

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className="
        flex
        min-h-[1123px]
        w-[794px]
        overflow-visible
        bg-white
        font-sans
      "
    >
      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside
        className="
          relative
          min-h-[1123px]
          w-[36%]
          shrink-0
          overflow-hidden
          bg-slate-950
          px-[30px]
          py-[38px]
          text-white
        "
      >
        {/* Decorative Circle */}

        <div
          className="
            absolute
            -right-14
            -top-14
            h-40
            w-40
            rounded-full
            bg-fuchsia-500
            opacity-80
          "
        />

        <div className="relative">
          {/* PHOTO */}

          <PhotoCircle
            ring="ring-fuchsia-300"
            background="bg-fuchsia-100"
          />

          {/* NAME */}

          {displayName && (
            <div
              className="
                mt-5
                break-words
                pb-1
                text-[34px]
                font-black
                leading-[1.05]
                tracking-[-0.02em]
              "
            >
              {displayName
                .split(" ")
                .filter(Boolean)
                .map((word, index, words) => (
                  <React.Fragment key={index}>
                    {word.toUpperCase()}

                    {index < words.length - 1 && <br />}
                  </React.Fragment>
                ))}
            </div>
          )}

          {/* JOB TITLE */}

          {displayJobTitle && (
            <div
              className="
                mt-3
                break-words
                pb-1
                text-[12px]
                font-medium
                uppercase
                leading-[1.4]
                tracking-[0.14em]
                text-fuchsia-300
              "
            >
              {displayJobTitle}
            </div>
          )}

          {/* CONTACT */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="mt-9">
              <div
                className="
                  pb-1
                  text-[12px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                LET&apos;S CONNECT
              </div>

              <div
                className="
                  mt-3
                  space-y-2.5
                  break-words
                  text-[10.5px]
                  leading-[1.55]
                  text-white/65
                "
              >
                {personal.email && (
                  <div className="break-words pb-1">
                    {personal.email}
                  </div>
                )}

                {personal.phone && (
                  <div className="break-words pb-1">
                    {personal.phone}
                  </div>
                )}

                {personal.location && (
                  <div className="break-words pb-1">
                    {personal.location}
                  </div>
                )}

                {personal.linkedin && (
                  <div className="break-words pb-1">
                    {personal.linkedin}
                  </div>
                )}

                {personal.github && (
                  <div className="break-words pb-1">
                    {personal.github}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SKILLS */}

          {finalSkills.length > 0 && (
            <div className="mt-9 break-inside-avoid">
              <div
                className="
                  pb-1
                  text-[12px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                TOOLS
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {finalSkills.map((skill, index) => (
                  <SkillPill
                    key={`${skill}-${index}`}
                    dark
                  >
                    {skill}
                  </SkillPill>
                ))}
              </div>
            </div>
          )}

          {/* EDUCATION */}

          {validEducation.length > 0 && (
            <div className="mt-8 break-inside-avoid">
              <div
                className="
                  pb-1
                  text-[12px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                EDUCATION
              </div>

              <div className="mt-3 space-y-4">
                {validEducation.map((item, index) => {
                  const degree = getValue(item, [
                    "degree",
                    "qualification",
                    "title",
                    "program",
                  ]);

                  const institution = getValue(item, [
                    "institution",
                    "school",
                    "university",
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

                  const description = getValue(item, [
                    "description",
                    "details",
                    "summary",
                  ]);

                  return (
                    <article
                      key={index}
                      className="break-inside-avoid pb-1"
                    >
                      {degree && (
                        <div className="pb-1 text-[11px] font-bold leading-[1.4] text-white">
                          {degree}
                        </div>
                      )}

                      {institution && (
                        <TinyText className="!text-white/55">
                          {institution}
                        </TinyText>
                      )}

                      {(startDate || endDate) && (
                        <div className="pb-1 text-[10px] leading-[1.4] text-white/40">
                          {startDate || ""}
                          {startDate || endDate ? " — " : ""}
                          {endDate || ""}
                        </div>
                      )}

                      {description && (
                        <div className="pb-1 text-[10px] leading-[1.5] text-white/45">
                          {description}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* CERTIFICATIONS */}

          {validCertifications.length > 0 && (
            <div className="mt-8 break-inside-avoid">
              <div
                className="
                  pb-1
                  text-[12px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                CERTIFICATIONS
              </div>

              <div className="mt-3 space-y-3">
                {validCertifications.map((item, index) => {
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
                      className="break-inside-avoid pb-1"
                    >
                      {name && (
                        <div className="pb-1 text-[10.5px] font-semibold leading-[1.4] text-white/90">
                          {name}
                        </div>
                      )}

                      {(issuer || date) && (
                        <div className="text-[9.5px] leading-[1.4] text-white/45">
                          {issuer}
                          {issuer && date ? " • " : ""}
                          {date}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          )}

          {/* LANGUAGES */}

          {validLanguages.length > 0 && (
            <div className="mt-8 break-inside-avoid">
              <div
                className="
                  pb-1
                  text-[12px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                LANGUAGES
              </div>

              <div className="mt-3 space-y-2">
                {validLanguages.map((item, index) => {
                  const language = getValue(item, [
                    "language",
                    "name",
                  ]);

                  const level = getValue(item, [
                    "level",
                    "proficiency",
                  ]);

                  return (
                    <div
                      key={index}
                      className="
                        flex
                        items-start
                        justify-between
                        gap-3
                        pb-1
                        text-[10.5px]
                        leading-[1.4]
                      "
                    >
                      <span className="break-words text-white/85">
                        {language}
                      </span>

                      {level && (
                        <span className="shrink-0 text-right text-[9.5px] text-white/45">
                          {level}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* INTERESTS */}

          {validInterests.length > 0 && (
            <div className="mt-8 break-inside-avoid">
              <div
                className="
                  pb-1
                  text-[12px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                INTERESTS
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {validInterests.map((interest, index) => {
                  const name =
                    typeof interest === "string"
                      ? interest
                      : getValue(interest, [
                          "name",
                          "title",
                          "interest",
                        ]);

                  return (
                    <SkillPill
                      key={`${name}-${index}`}
                      dark
                    >
                      {name}
                    </SkillPill>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <main
        className="
          min-h-[1123px]
          w-[64%]
          overflow-visible
          px-[38px]
          py-[38px]
        "
      >
        {/* INTRO */}

        {(personal.summary || useSampleData) && (
          <section className="break-inside-avoid">
            <div
              className="
                pb-1
                text-[12px]
                font-bold
                tracking-[0.18em]
                text-fuchsia-600
              "
            >
              HELLO
            </div>

            <div
              className="
                mt-4
                max-w-[390px]
                pb-2
                text-[25px]
                font-extrabold
                leading-[1.18]
                tracking-[-0.02em]
                text-slate-900
              "
            >
              {personal.summary ||
                "I create digital experiences people remember."}
            </div>

            {useSampleData && (
              <TinyText className="mt-3 max-w-[450px]">
                Frontend developer combining visual design
                with modern web technologies.
              </TinyText>
            )}
          </section>
        )}

        {/* EXPERIENCE */}

        {validExperience.length > 0 && (
          <section className="mt-8">
            <SectionTitle accent>
              EXPERIENCE
            </SectionTitle>

            <div className="mt-4 space-y-5">
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

                return (
                  <article
                    key={index}
                    className="break-inside-avoid pb-1"
                  >
                    {jobTitle && (
                      <div
                        className="
                          pb-1
                          text-[14px]
                          font-bold
                          leading-[1.35]
                          text-slate-900
                        "
                      >
                        {jobTitle}
                      </div>
                    )}

                    {(company ||
                      startDate ||
                      endDate) && (
                      <TinyText className="mt-1">
                        {company}

                        {(startDate || endDate) && (
                          <>
                            {" "}
                            • {startDate || ""} —{" "}
                            {endDate || "Present"}
                          </>
                        )}
                      </TinyText>
                    )}

                    {description && (
                      <div className="mt-2 pb-1">
                        <ResumeLines
                          description={description}
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

        {/* FEATURED WORK */}

        {validProjects.length > 0 && (
          <section className="mt-8">
            <SectionTitle accent>
              FEATURED WORK
            </SectionTitle>

            <div className="mt-4 space-y-3">
              {validProjects.map((project, index) => {
                const projectName = getValue(project, [
                  "name",
                  "title",
                  "projectName",
                ]);

                const description = getValue(project, [
                  "description",
                  "details",
                  "summary",
                ]);

                return (
                  <article
                    key={index}
                    className={`
                      break-inside-avoid
                      rounded-xl
                      p-3.5
                      pb-4
                      ${
                        index === 0
                          ? "bg-fuchsia-50"
                          : "border border-slate-200"
                      }
                    `}
                  >
                    {projectName && (
                      <div
                        className="
                          pb-1
                          text-[13px]
                          font-bold
                          leading-[1.35]
                          text-slate-900
                        "
                      >
                        {projectName}
                      </div>
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

        {/* ACHIEVEMENTS */}

        {validAchievements.length > 0 && (
          <section className="mt-8">
            <SectionTitle accent>
              ACHIEVEMENTS
            </SectionTitle>

            <div className="mt-4 space-y-3">
              {validAchievements.map((item, index) => {
                const title = getValue(item, [
                  "title",
                  "name",
                ]);

                const description = getValue(item, [
                  "description",
                  "details",
                ]);

                const date = getValue(item, [
                  "date",
                  "year",
                ]);

                return (
                  <article
                    key={index}
                    className="break-inside-avoid pb-1"
                  >
                    <div className="flex items-start justify-between gap-3">
                      {title && (
                        <div
                          className="
                            pb-1
                            text-[12px]
                            font-bold
                            leading-[1.4]
                            text-slate-900
                          "
                        >
                          {title}
                        </div>
                      )}

                      {date && (
                        <div className="shrink-0 text-[10px] text-slate-400">
                          {date}
                        </div>
                      )}
                    </div>

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

        {/* REFERENCES */}

        {validReferences.length > 0 && (
          <section className="mt-8">
            <SectionTitle accent>
              REFERENCES
            </SectionTitle>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {validReferences.map((item, index) => {
                const name = getValue(item, [
                  "name",
                  "fullName",
                ]);

                const position = getValue(item, [
                  "position",
                  "jobTitle",
                  "role",
                ]);

                const company = getValue(item, [
                  "company",
                  "organization",
                ]);

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
                      rounded-xl
                      border
                      border-slate-200
                      p-3
                      pb-4
                    "
                  >
                    {name && (
                      <div
                        className="
                          pb-1
                          text-[11.5px]
                          font-bold
                          leading-[1.4]
                          text-slate-900
                        "
                      >
                        {name}
                      </div>
                    )}

                    {(position || company) && (
                      <TinyText className="mt-1">
                        {position}
                        {position && company
                          ? " • "
                          : ""}
                        {company}
                      </TinyText>
                    )}

                    {email && (
                      <div
                        className="
                          mt-1
                          break-all
                          pb-1
                          text-[9.5px]
                          leading-[1.4]
                          text-slate-400
                        "
                      >
                        {email}
                      </div>
                    )}

                    {phone && (
                      <div
                        className="
                          pb-1
                          text-[9.5px]
                          leading-[1.4]
                          text-slate-400
                        "
                      >
                        {phone}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default CreativePreview;
