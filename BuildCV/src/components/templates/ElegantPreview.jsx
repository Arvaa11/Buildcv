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
    },
    {
      jobTitle: "Frontend Developer",
      company: "Pixel & Co.",
      startDate: "2022",
      endDate: "2024",
    },
    {
      jobTitle: "UI Developer",
      company: "Studio Eight",
      startDate: "2020",
      endDate: "2022",
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

  const certifications = useSampleData
    ? Array.isArray(formData.certifications) &&
      formData.certifications.length > 0
      ? formData.certifications
      : Array.isArray(data.certifications) &&
        data.certifications.length > 0
      ? data.certifications
      : sampleCertifications
    : Array.isArray(formData.certifications)
    ? formData.certifications
    : [];

  const languages = useSampleData
    ? Array.isArray(formData.languages) && formData.languages.length > 0
      ? formData.languages
      : Array.isArray(data.languages) && data.languages.length > 0
      ? data.languages
      : sampleLanguages
    : Array.isArray(formData.languages)
    ? formData.languages
    : [];

  const achievements = useSampleData
    ? Array.isArray(formData.achievements) &&
      formData.achievements.length > 0
      ? formData.achievements
      : Array.isArray(data.achievements) &&
        data.achievements.length > 0
      ? data.achievements
      : sampleAchievements
    : Array.isArray(formData.achievements)
    ? formData.achievements
    : [];

  const interests = useSampleData
    ? Array.isArray(formData.interests) && formData.interests.length > 0
      ? formData.interests
      : Array.isArray(data.interests) && data.interests.length > 0
      ? data.interests
      : sampleInterests
    : Array.isArray(formData.interests)
    ? formData.interests
    : [];

  const references = useSampleData
    ? Array.isArray(formData.references) && formData.references.length > 0
      ? formData.references
      : Array.isArray(data.references) && data.references.length > 0
      ? data.references
      : sampleReferences
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
    if (typeof skill === "string") return skill;

    return getValue(skill, [
      "name",
      "skill",
      "title",
      "label",
    ]);
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
          text-[10px]
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
        text-[11px]
        font-semibold
        tracking-[0.2em]
        text-violet-600
        ${centered ? "justify-center" : ""}
      `}
    >
      {accent && (
        <span className="h-px w-7 bg-violet-300" />
      )}

      {children}

      {accent && centered && (
        <span className="h-px w-7 bg-violet-300" />
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
        text-[9px]
        font-medium
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

    // No fake image/initials in live Builder.
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
            text-[13px]
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
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-white
        px-[52px]
        py-[48px]
        font-sans
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header className="text-center">
        <PhotoCircle large />

        {/* NAME */}

        {displayName && (
          <div
            className="
              mt-6
              font-serif
              text-[34px]
              font-semibold
              uppercase
              leading-[1.05]
              tracking-[0.02em]
              text-slate-900
            "
          >
            {displayName}
          </div>
        )}

        {/* JOB TITLE */}

        {displayJobTitle && (
          <div
            className="
              mt-3
              text-[11px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-violet-600
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
          <div
            className="
              mt-4
              flex
              flex-wrap
              items-center
              justify-center
              text-[9px]
              leading-[1.5]
              text-slate-500
            "
          >
            {personal.email && (
              <>
                <span>{personal.email}</span>

                {(personal.phone ||
                  personal.location ||
                  personal.linkedin ||
                  personal.github) && <Dot />}
              </>
            )}

            {personal.phone && (
              <>
                <span>{personal.phone}</span>

                {(personal.location ||
                  personal.linkedin ||
                  personal.github) && <Dot />}
              </>
            )}

            {personal.location && (
              <>
                <span>{personal.location}</span>

                {(personal.linkedin ||
                  personal.github) && <Dot />}
              </>
            )}

            {personal.linkedin && (
              <>
                <span>{personal.linkedin}</span>

                {personal.github && <Dot />}
              </>
            )}

            {personal.github && (
              <span>{personal.github}</span>
            )}
          </div>
        )}
      </header>

      {/* =====================================================
          DECORATIVE LINE
      ====================================================== */}

      <div className="mx-auto mt-7 h-px w-24 bg-violet-300" />

      {/* =====================================================
          ABOUT ME
      ====================================================== */}

      {(personal.summary || useSampleData) && (
        <section className="mt-8">
          <SectionTitle accent centered>
            ABOUT ME
          </SectionTitle>

          <div className="mt-5 text-center">
            {personal.summary && (
              <TinyText className="mx-auto max-w-[610px]">
                {personal.summary}
              </TinyText>
            )}
          </div>
        </section>
      )}

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      {validExperience.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            EXPERIENCE
          </SectionTitle>

          <div className="mt-5 space-y-7 text-center">
            {validExperience
              .slice(0, 3)
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

                return (
                  <article key={index}>
                    {jobTitle && (
                      <div
                        className="
                          text-[12px]
                          font-semibold
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
                  </article>
                );
              })}
          </div>
        </section>
      )}

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      {validEducation.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            EDUCATION
          </SectionTitle>

          <div className="mt-5 space-y-7 text-center">
            {validEducation
              .slice(0, 3)
              .map((item, index) => {
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

                return (
                  <article key={index}>
                    {degree && (
                      <div
                        className="
                          text-[12px]
                          font-semibold
                          leading-[1.35]
                          text-slate-900
                        "
                      >
                        {degree}
                      </div>
                    )}

                    {(institution ||
                      startDate ||
                      endDate) && (
                      <TinyText className="mt-2">
                        {institution}

                        {(startDate || endDate) && (
                          <>
                            {" "}
                            • {startDate || ""} —{" "}
                            {endDate || "Present"}
                          </>
                        )}
                      </TinyText>
                    )}
                  </article>
                );
              })}
          </div>
        </section>
      )}

      {/* =====================================================
          SKILLS
      ====================================================== */}

      {finalSkills.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            SKILLS
          </SectionTitle>

          <div
            className="
              mt-5
              flex
              flex-wrap
              justify-center
              gap-2
            "
          >
            {finalSkills
              .slice(0, 10)
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

      {/* =====================================================
          FEATURED PROJECTS
      ====================================================== */}

      {validProjects.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            SELECTED WORK
          </SectionTitle>

          <div className="mt-5 grid grid-cols-3 gap-4">
            {validProjects
              .slice(0, 3)
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
                    className="
                      rounded-xl
                      border
                      border-violet-100
                      bg-violet-50/50
                      p-3
                      text-center
                    "
                  >
                    {projectName && (
                      <div
                        className="
                          text-[10px]
                          font-semibold
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

      {/* =====================================================
          CERTIFICATIONS
      ====================================================== */}

      {validCertifications.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            CERTIFICATIONS
          </SectionTitle>

          <div className="mt-5 grid grid-cols-3 gap-5 text-center">
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
                      <div className="text-[10px] font-semibold text-slate-900">
                        {name}
                      </div>
                    )}

                    {(issuer || date) && (
                      <TinyText className="mt-1">
                        {issuer}
                        {issuer && date ? " • " : ""}
                        {date}
                      </TinyText>
                    )}
                  </article>
                );
              })}
          </div>
        </section>
      )}

      {/* =====================================================
          ACHIEVEMENTS
      ====================================================== */}

      {validAchievements.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            ACHIEVEMENTS
          </SectionTitle>

          <div className="mt-5 space-y-4 text-center">
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
                    <div className="flex items-center justify-center gap-3">
                      {title && (
                        <div className="text-[10px] font-semibold text-slate-900">
                          {title}
                        </div>
                      )}

                      {date && (
                        <div className="text-[8px] text-slate-400">
                          {date}
                        </div>
                      )}
                    </div>

                    {description && (
                      <TinyText className="mx-auto mt-1 max-w-[600px]">
                        {description}
                      </TinyText>
                    )}
                  </article>
                );
              })}
          </div>
        </section>
      )}

      {/* =====================================================
          LANGUAGES
      ====================================================== */}

      {validLanguages.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            LANGUAGES
          </SectionTitle>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {validLanguages
              .slice(0, 5)
              .map((item, index) => {
                const language = getValue(item, [
                  "language",
                  "name",
                ]);

                const level = getValue(item, [
                  "level",
                  "proficiency",
                ]);

                return (
                  <SkillPill key={index}>
                    {language}
                    {level ? ` • ${level}` : ""}
                  </SkillPill>
                );
              })}
          </div>
        </section>
      )}

      {/* =====================================================
          INTERESTS
      ====================================================== */}

      {validInterests.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            INTERESTS
          </SectionTitle>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
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
                  <SkillPill key={`${name}-${index}`}>
                    {name}
                  </SkillPill>
                );
              })}
          </div>
        </section>
      )}

      {/* =====================================================
          REFERENCES
      ====================================================== */}

      {validReferences.length > 0 && (
        <section className="mt-9">
          <SectionTitle accent centered>
            REFERENCES
          </SectionTitle>

          <div className="mt-5 grid grid-cols-2 gap-5 text-center">
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
                  <article key={index}>
                    {name && (
                      <div className="text-[10px] font-semibold text-slate-900">
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

                    {(email || phone) && (
                      <TinyText className="mt-1">
                        {email}
                        {email && phone ? " • " : ""}
                        {phone}
                      </TinyText>
                    )}
                  </article>
                );
              })}
          </div>
        </section>
      )}
    </div>
  );
}

export default ElegantPreview;