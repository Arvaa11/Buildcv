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
      description: "Focus on software development, interaction design, and digital systems.",
    },
    {
      degree: "Diploma in Visual Design",
      institution: "Design Academy",
      startDate: "2019",
      endDate: "2020",
      description: "Focused on visual communication, typography, and digital design.",
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

  // Use user's entered data first
  if (
    formSection?.enabled &&
    Array.isArray(formSection.items) &&
    formSection.items.length > 0
  ) {
    return formSection.items;
  }

  // Otherwise use template data
  if (
    dataSection?.enabled &&
    Array.isArray(dataSection.items) &&
    dataSection.items.length > 0
  ) {
    return dataSection.items;
  }

  // Otherwise use sample data
  return sampleItems;
};


// =========================================================
// CERTIFICATIONS
// =========================================================

const certifications = getOptionalSection(
  formData.certifications,
  data.certifications,
  sampleCertifications
);


// =========================================================
// LANGUAGES
// =========================================================

const languages = getOptionalSection(
  formData.languages,
  data.languages,
  sampleLanguages
);


// =========================================================
// ACHIEVEMENTS
// =========================================================

const achievements = getOptionalSection(
  formData.achievements,
  data.achievements,
  sampleAchievements
);


// =========================================================
// REFERENCES
// =========================================================

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
  // -----------------------------------------------------
  // LIVE BUILDER
  // -----------------------------------------------------

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
  // -----------------------------------------------------
  // SAMPLE / TEMPLATE PREVIEW
  // -----------------------------------------------------

  // Use user's interests first
  if (
    formData.interests?.enabled &&
    String(formData.interests.value || "").trim()
  ) {
    interests = String(
      formData.interests.value
    )
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Otherwise use template interests
  else if (
    data.interests?.enabled &&
    String(data.interests.value || "").trim()
  ) {
    interests = String(
      data.interests.value
    )
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  // Otherwise use sample interests
  else {
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

  const TinyText = ({ children, className = "" }) => {
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
          text-[10px]
          leading-[1.55]
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
        text-[11px]
        font-bold
        tracking-[0.18em]
        text-slate-900
      "
    >
      {accent && (
        <span className="h-[3px] w-5 rounded-full bg-fuchsia-500" />
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
            rounded-full
            border
            border-fuchsia-300/20
            bg-white/5
            px-2.5
            py-1.5
            text-[9px]
            font-medium
            text-white/80
          `
          : `
            rounded-full
            border
            border-fuchsia-200
            bg-fuchsia-50
            px-2.5
            py-1.5
            text-[9px]
            font-medium
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
        <ul className="space-y-1.5">
          {lines.map((line, index) => (
            <li
              key={index}
              className="
                relative
                pl-4
                text-[9.5px]
                leading-[1.5]
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
                  bg-fuchsia-400
                "
              />

              {line}
            </li>
          ))}
        </ul>
      );
    }

    // IMPORTANT:
    // Do not create fake bullets in the real Builder.
    if (!useSampleData) {
      return null;
    }

    return (
      <ul className="space-y-1.5">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="
              relative
              pl-4
              text-[9.5px]
              leading-[1.5]
              text-slate-400
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

    // No fake profile circle in live Builder.
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
        <span className="text-[11px] font-black text-fuchsia-600">
          {initials}
        </span>
      </div>
    );
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
    return String(
      typeof interest === "string"
        ? interest
        : getValue(interest, [
            "name",
            "title",
            "interest",
          ])
    ).trim() !== "";
  });

  const finalSkills = skills
    .map(getSkillName)
    .filter(Boolean);

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
        overflow-hidden
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
          h-full
          w-[36%]
          shrink-0
          overflow-hidden
          bg-slate-950
          px-[34px]
          py-[48px]
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
                mt-6
                text-[30px]
                font-black
                leading-[1.05]
                tracking-[-0.02em]
              "
            >
              {displayName
                .split(" ")
                .filter(Boolean)
                .map((word, index) => (
                  <React.Fragment key={index}>
                    {word.toUpperCase()}

                    {index <
                      displayName
                        .split(" ")
                        .filter(Boolean)
                        .length -
                        1 && <br />}
                  </React.Fragment>
                ))}
            </div>
          )}

          {/* JOB TITLE */}

          {displayJobTitle && (
            <div
              className="
                mt-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.16em]
                text-fuchsia-300
              "
            >
              {displayJobTitle}
            </div>
          )}

          {/* =================================================
              CONTACT
          ================================================== */}

          {(personal.email ||
            personal.phone ||
            personal.location ||
            personal.linkedin ||
            personal.github) && (
            <div className="mt-12">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                LET&apos;S CONNECT
              </div>

              <div
                className="
                  mt-4
                  space-y-3
                  break-words
                  text-[9px]
                  leading-[1.5]
                  text-white/65
                "
              >
                {personal.email && (
                  <div>{personal.email}</div>
                )}

                {personal.phone && (
                  <div>{personal.phone}</div>
                )}

                {personal.location && (
                  <div>{personal.location}</div>
                )}

                {personal.linkedin && (
                  <div>{personal.linkedin}</div>
                )}

                {personal.github && (
                  <div>{personal.github}</div>
                )}
              </div>
            </div>
          )}

          {/* =================================================
              SKILLS
          ================================================== */}

          {finalSkills.length > 0 && (
            <div className="mt-12">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                TOOLS
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {finalSkills
                  .slice(0, 10)
                  .map((skill, index) => (
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

          {/* =================================================
              EDUCATION
          ================================================== */}

          {validEducation.length > 0 && (
            <div className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                EDUCATION
              </div>

              <div className="mt-4 space-y-5">
                {validEducation
                  .slice(0, 2)
                  .map((item, index) => {
                    const degree = getValue(item, [
                      "degree",
                      "qualification",
                      "title",
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

                    return (
                      <div key={index}>
                        {degree && (
                          <div className="text-[10px] font-bold text-white">
                            {degree}
                          </div>
                        )}

                        {institution && (
                          <TinyText className="mt-1 !text-white/50">
                            {institution}
                          </TinyText>
                        )}

                        {(startDate || endDate) && (
                          <div className="mt-1 text-[8px] text-white/40">
                            {startDate || ""}{" "}
                            {startDate || endDate
                              ? "—"
                              : ""}{" "}
                            {endDate || ""}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* =================================================
              CERTIFICATIONS
          ================================================== */}

          {validCertifications.length > 0 && (
            <div className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                CERTIFICATIONS
              </div>

              <div className="mt-4 space-y-4">
                {validCertifications
                  .slice(0, 3)
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
                    ]);

                    return (
                      <div key={index}>
                        {name && (
                          <div className="text-[9px] font-semibold text-white/85">
                            {name}
                          </div>
                        )}

                        {(issuer || date) && (
                          <div className="mt-1 text-[8px] text-white/40">
                            {issuer}
                            {issuer && date ? " • " : ""}
                            {date}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* =================================================
              LANGUAGES
          ================================================== */}

          {validLanguages.length > 0 && (
            <div className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                LANGUAGES
              </div>

              <div className="mt-4 space-y-2">
                {validLanguages
                  .slice(0, 4)
                  .map((item, index) => {
                    const language = getValue(
                      item,
                      ["language", "name"]
                    );

                    const level = getValue(item, [
                      "level",
                      "proficiency",
                    ]);

                    return (
                      <div
                        key={index}
                        className="
                          flex
                          items-center
                          justify-between
                          gap-2
                          text-[9px]
                        "
                      >
                        <span className="text-white/80">
                          {language}
                        </span>

                        {level && (
                          <span className="text-white/40">
                            {level}
                          </span>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* =================================================
              INTERESTS
          ================================================== */}

          {validInterests.length > 0 && (
            <div className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.16em]
                  text-fuchsia-300
                "
              >
                INTERESTS
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {validInterests
                  .slice(0, 6)
                  .map((interest, index) => {
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
          h-full
          w-[64%]
          overflow-hidden
          px-[40px]
          py-[48px]
        "
      >
        {/* =================================================
            INTRO
        ================================================== */}

        {(personal.summary || useSampleData) && (
          <section>
            <div
              className="
                text-[11px]
                font-bold
                tracking-[0.18em]
                text-fuchsia-600
              "
            >
              HELLO
            </div>

            <div
              className="
                mt-5
                max-w-[390px]
                text-[24px]
                font-extrabold
                leading-[1.12]
                tracking-[-0.02em]
                text-slate-900
              "
            >
              {personal.summary ||
                "I create digital experiences people remember."}
            </div>

            {useSampleData && (
              <TinyText className="mt-5 max-w-[450px]">
                Frontend developer combining visual design
                with modern web technologies.
              </TinyText>
            )}
          </section>
        )}

        {/* =================================================
            EXPERIENCE
        ================================================== */}

        {validExperience.length > 0 && (
          <section className="mt-10">
            <SectionTitle accent>
              EXPERIENCE
            </SectionTitle>

            <div className="mt-5 space-y-7">
              {validExperience
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
                    ]
                  );

                  return (
                    <article key={index}>
                      {jobTitle && (
                        <div
                          className="
                            text-[12px]
                            font-bold
                            leading-[1.3]
                            text-slate-900
                          "
                        >
                          {jobTitle}
                        </div>
                      )}

                      {(company ||
                        startDate ||
                        endDate) && (
                        <TinyText className="mt-2">
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
                        <div className="mt-3">
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

        {/* =================================================
            FEATURED WORK
        ================================================== */}

        {validProjects.length > 0 && (
          <section className="mt-10">
            <SectionTitle accent>
              FEATURED WORK
            </SectionTitle>

            <div className="mt-5 space-y-3">
              {validProjects
                .slice(0, 4)
                .map((project, index) => {
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

                  return (
                    <article
                      key={index}
                      className={
                        index === 0
                          ? `
                            rounded-xl
                            bg-fuchsia-50
                            p-4
                          `
                          : `
                            rounded-xl
                            border
                            border-slate-200
                            p-4
                          `
                      }
                    >
                      {projectName && (
                        <div
                          className="
                            text-[11px]
                            font-bold
                            text-slate-900
                          "
                        >
                          {projectName}
                        </div>
                      )}

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
            ACHIEVEMENTS
        ================================================== */}

        {validAchievements.length > 0 && (
          <section className="mt-9">
            <SectionTitle accent>
              ACHIEVEMENTS
            </SectionTitle>

            <div className="mt-5 space-y-4">
              {validAchievements
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
                    ]
                  );

                  const date = getValue(item, [
                    "date",
                    "year",
                  ]);

                  return (
                    <article key={index}>
                      <div className="flex items-start justify-between gap-3">
                        {title && (
                          <div
                            className="
                              text-[10px]
                              font-bold
                              text-slate-900
                            "
                          >
                            {title}
                          </div>
                        )}

                        {date && (
                          <div className="shrink-0 text-[8px] text-slate-400">
                            {date}
                          </div>
                        )}
                      </div>

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
            REFERENCES
        ================================================== */}

        {validReferences.length > 0 && (
          <section className="mt-9">
            <SectionTitle accent>
              REFERENCES
            </SectionTitle>

            <div className="mt-5 grid grid-cols-2 gap-4">
              {validReferences
                .slice(0, 2)
                .map((item, index) => {
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
                        rounded-xl
                        border
                        border-slate-200
                        p-3
                      "
                    >
                      {name && (
                        <div
                          className="
                            text-[10px]
                            font-bold
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
                        <div className="mt-2 break-all text-[8px] text-slate-400">
                          {email}
                        </div>
                      )}

                      {phone && (
                        <div className="mt-1 text-[8px] text-slate-400">
                          {phone}
                        </div>
                      )}
                    </article>
                  );
                })}
            </div>
          </section>
        )}

        {/* =================================================
            EDUCATION / CERTIFICATION FALLBACK AREA
        ================================================== */}

        {validEducation.length > 0 &&
          !useSampleData && (
            <section className="mt-9">
              <SectionTitle accent>
                EDUCATION
              </SectionTitle>

              <div className="mt-5 space-y-4">
                {validEducation
                  .slice(0, 2)
                  .map((item, index) => {
                    const degree = getValue(item, [
                      "degree",
                      "qualification",
                      "title",
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

                    return (
                      <article key={index}>
                        {degree && (
                          <div className="text-[10px] font-bold text-slate-900">
                            {degree}
                          </div>
                        )}

                        {institution && (
                          <TinyText className="mt-1">
                            {institution}
                          </TinyText>
                        )}

                        {(startDate || endDate) && (
                          <TinyText className="mt-1">
                            {startDate || ""} —{" "}
                            {endDate || ""}
                          </TinyText>
                        )}
                      </article>
                    );
                  })}
              </div>
            </section>
          )}

        {validCertifications.length > 0 &&
          !useSampleData && (
            <section className="mt-9">
              <SectionTitle accent>
                CERTIFICATIONS
              </SectionTitle>

              <div className="mt-5 space-y-3">
                {validCertifications
                  .slice(0, 3)
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
                    ]);

                    return (
                      <article key={index}>
                        {name && (
                          <div className="text-[10px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(issuer || date) && (
                          <TinyText className="mt-1">
                            {issuer}
                            {issuer && date
                              ? " • "
                              : ""}
                            {date}
                          </TinyText>
                        )}
                      </article>
                    );
                  })}
              </div>
            </section>
          )}

        {validLanguages.length > 0 &&
          !useSampleData && (
            <section className="mt-9">
              <SectionTitle accent>
                LANGUAGES
              </SectionTitle>

              <div className="mt-5 flex flex-wrap gap-2">
                {validLanguages
                  .slice(0, 5)
                  .map((item, index) => {
                    const language = getValue(
                      item,
                      ["language", "name"]
                    );

                    const level = getValue(item, [
                      "level",
                      "proficiency",
                    ]);

                    return (
                      <SkillPill key={index}>
                        {language}
                        {level
                          ? ` • ${level}`
                          : ""}
                      </SkillPill>
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