import React from "react";

/* =========================================================
   PROFESSIONAL PREVIEW
   - Professional reference typography
   - PDF-friendly text sizing
   - Same live/sample data support
   - Same resume sections
   - No artificial data limits
========================================================= */

function ProfessionalPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // =========================================================

  const samplePersonal = {
    fullName: "Olivia Carter",
    jobTitle: "Executive Developer",
    email: "olivia.carter@example.com",
    phone: "+1 415 555 0198",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Strategic technology professional creating elegant digital products, improving user experiences, and leading thoughtful frontend initiatives.",
    profileImage: "",
  };

  const sampleExperience = [
    {
      jobTitle: "Senior Frontend Developer",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description:
        "Led frontend development for customer-facing digital products.\nImproved interface consistency through reusable component systems.\nCollaborated with designers and product teams to deliver polished experiences.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Cedar Labs",
      startDate: "2022",
      endDate: "2024",
      description:
        "Built responsive web interfaces using modern frontend technologies.\nTranslated design concepts into accessible and reusable components.\nWorked closely with cross-functional teams throughout product delivery.",
    },
    {
      jobTitle: "Web Developer",
      company: "Brightline Studio",
      startDate: "2021",
      endDate: "2022",
      description:
        "Developed responsive websites for digital products and campaigns.\nMaintained reusable UI patterns and improved page performance.\nSupported testing and refinement across multiple screen sizes.",
    },
  ];

  const sampleSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "UI Strategy",
    "Leadership",
    "UX Design",
    "HTML & CSS",
    "Git",
    "Responsive Design",
    "Design Systems",
    "Accessibility",
    "Product Thinking",
  ];

  const sampleEducation = [
    {
      degree: "Master of Computer Science",
      institution: "Stanford University",
      startDate: "2022",
      endDate: "2024",
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "University of California",
      startDate: "2018",
      endDate: "2022",
    },
  ];

  const sampleProjects = [
    {
      title: "Executive Dashboard",
      name: "Executive Dashboard",
      description:
        "Designed a modern analytics dashboard focused on clarity, accessibility, and efficient decision-making.",
      technologies: ["React", "TypeScript", "CSS"],
    },
    {
      title: "Design System",
      name: "Design System",
      description:
        "Created a reusable component library to improve consistency across multiple digital products.",
      technologies: ["React", "Storybook", "Figma"],
    },
    {
      title: "Portfolio Platform",
      name: "Portfolio Platform",
      description:
        "Built a responsive portfolio experience combining editorial layouts with interactive project showcases.",
      technologies: ["React", "JavaScript", "Responsive Design"],
    },
  ];

  const sampleCertifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2025",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      date: "2024",
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
    },
  ];

  const sampleLanguages = [
    { name: "English", level: "Native" },
    { name: "Spanish", level: "Professional" },
    { name: "French", level: "Conversational" },
  ];

  const sampleAchievements = [
    {
      title: "Design System Initiative",
      description:
        "Established reusable interface patterns that improved consistency across product experiences.",
    },
    {
      title: "Frontend Mentorship",
      description:
        "Supported junior developers through code reviews, technical guidance, and collaborative learning.",
    },
    {
      title: "Product Experience Improvement",
      description:
        "Partnered with product teams to simplify workflows and create more intuitive user experiences.",
    },
  ];

  const sampleInterests = [
    "Digital Design",
    "Technology",
    "Photography",
    "Travel",
    "Reading",
    "Creative Coding",
  ];

  const sampleReferences = [
    {
      name: "Daniel Morgan",
      role: "Product Director",
      company: "Northstar Digital",
      email: "daniel.morgan@example.com",
      phone: "+1 415 555 0124",
    },
    {
      name: "Sophia Bennett",
      role: "Engineering Manager",
      company: "Cedar Labs",
      email: "sophia.bennett@example.com",
      phone: "+1 415 555 0168",
    },
  ];

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

  const getArrayData = (formValue, dataValue, sampleValue) => {
    if (useSampleData) {
      if (Array.isArray(formValue) && formValue.length > 0) {
        return formValue;
      }

      if (Array.isArray(dataValue) && dataValue.length > 0) {
        return dataValue;
      }

      return sampleValue;
    }

    if (Array.isArray(formValue)) {
      return formValue;
    }

    if (Array.isArray(dataValue)) {
      return dataValue;
    }

    return [];
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
    const technologies = getValue(project, [
      "technologies",
      "technology",
      "tech",
      "stack",
      "tools",
    ]);

    if (Array.isArray(technologies)) {
      return technologies.filter(Boolean);
    }

    if (typeof technologies === "string") {
      return technologies
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  };

  // =========================================================
  // PERSONAL
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
  // MAIN ARRAY DATA
  // =========================================================

  const education = getArrayData(
    formData.education,
    data.education,
    sampleEducation
  );

  const experience = getArrayData(
    formData.experience,
    data.experience,
    sampleExperience
  );

  const skills = getArrayData(
    formData.skills,
    data.skills,
    sampleSkills
  );

  const projects = getArrayData(
    formData.projects,
    data.projects,
    sampleProjects
  );

  // =========================================================
  // OPTIONAL SECTIONS
  // =========================================================

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
  // SIDEBAR TITLE
  // =========================================================

  const SideTitle = ({ children }) => (
    <h3
      className="
        border-b
        border-white/10
        pb-2
        text-[9px]
        font-bold
        uppercase
        tracking-[0.14em]
        text-white
      "
    >
      {children}
    </h3>
  );

  // =========================================================
  // MAIN SECTION TITLE
  // =========================================================

  const ProfessionalSection = ({
    title,
    children,
    className = "",
  }) => (
    <section className={className}>
      <div className="flex items-center gap-2.5">
        <span className="h-[3px] w-3.5 shrink-0 bg-buildcv-violet" />

        <h3
          className="
            text-[10px]
            font-bold
            uppercase
            tracking-[0.13em]
            text-slate-900
          "
        >
          {title}
        </h3>
      </div>

      <div className="mt-3.5">
        {children}
      </div>
    </section>
  );

  // =========================================================
  // SMALL TEXT
  // =========================================================

  const TinyText = ({
    children,
    className = "",
    color = "text-slate-500",
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
        className={`text-[8.5px] leading-[1.55] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  // =========================================================
  // EXPERIENCE DESCRIPTION
  // =========================================================

  const ResumeLines = ({ description }) => {
    const lines = getDescriptionLines(description);

    if (lines.length === 0) {
      return null;
    }

    return (
      <ul className="space-y-1.5">
        {lines.map((line, index) => (
          <li
            key={index}
            className="
              relative
              pl-3
              text-[8.5px]
              leading-[1.55]
              text-slate-500
            "
          >
            <span
              className="
                absolute
                left-0
                top-[6px]
                h-[3px]
                w-[3px]
                rounded-full
                bg-buildcv-violet
              "
            />

            {line}
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // PROFESSIONAL JOB
  // =========================================================

  const ProfessionalJob = ({
    title,
    company,
    startDate,
    endDate,
    description,
  }) => {
    if (!title && !company && !startDate && !endDate && !description) {
      return null;
    }

    return (
      <article className="relative border-l border-slate-200 pl-4">
        <span
          className="
            absolute
            -left-[3px]
            top-[4px]
            h-[5px]
            w-[5px]
            rounded-full
            bg-buildcv-violet
          "
        />

        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            {title && (
              <h4 className="text-[11px] font-bold leading-tight text-slate-900">
                {title}
              </h4>
            )}

            {company && (
              <p className="mt-1 text-[8.5px] font-semibold text-buildcv-violet">
                {company}
              </p>
            )}
          </div>

          {(startDate || endDate) && (
            <span className="shrink-0 text-[8px] font-medium text-slate-400">
              {startDate || ""}
              {startDate || endDate ? " — " : ""}
              {endDate || "Present"}
            </span>
          )}
        </div>

        {description && (
          <div className="mt-2.5">
            <ResumeLines description={description} />
          </div>
        )}
      </article>
    );
  };

  // =========================================================
  // PROFILE INITIALS
  // =========================================================

  const getInitials = (name) => {
    if (!name) return "AM";

    return name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // =========================================================
  // RETURN
  // =========================================================

  return (
    <div
      className="
        flex
        min-h-[1123px]
        h-auto
        w-[794px]
        overflow-visible
        bg-white
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside
        className="
          w-[31%]
          shrink-0
          self-stretch
          bg-buildcv-ink
          px-7
          py-8
          text-white
        "
      >
        {/* PROFILE */}

        <div className="flex justify-center">
          {personal.profileImage ? (
            <img
              src={personal.profileImage}
              alt={personal.fullName || "Profile"}
              className="
                h-16
                w-16
                rounded-full
                object-cover
                ring-2
                ring-white/10
              "
            />
          ) : (
            <div
              className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-full
                bg-white/10
                text-[13px]
                font-bold
                tracking-wide
                ring-1
                ring-white/10
              "
            >
              {getInitials(personal.fullName)}
            </div>
          )}
        </div>

        {/* CONTACT */}

        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin ||
          personal.github) && (
          <div className="mt-8">
            <SideTitle>Contact</SideTitle>

            <div className="mt-3.5 space-y-2.5 text-[8px] leading-[1.45] text-slate-300">
              {personal.email && (
                <p className="break-all">{personal.email}</p>
              )}

              {personal.phone && <p>{personal.phone}</p>}

              {personal.location && <p>{personal.location}</p>}

              {personal.linkedin && (
                <p className="break-all">
                  {personal.linkedin}
                </p>
              )}

              {personal.github && (
                <p className="break-all">
                  {personal.github}
                </p>
              )}
            </div>
          </div>
        )}

        {/* SKILLS */}

        {skills.length > 0 && (
          <div className="mt-8">
            <SideTitle>Skills</SideTitle>

            <div className="mt-3.5 space-y-3.5">
              {skills.map((skill, index) => {
                const skillName = getSkillName(skill);

                if (!skillName) return null;

                return (
                  <div key={`${skillName}-${index}`}>
                    <p className="text-[8px] font-medium text-slate-300">
                      {skillName}
                    </p>

                    <div className="mt-1.5 h-[3px] overflow-hidden rounded-full bg-white/10">
                      <div
                        className="
                          h-full
                          w-4/5
                          rounded-full
                          bg-gradient-to-r
                          from-buildcv-violet
                          to-buildcv-accent
                        "
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* EDUCATION */}

        {education.length > 0 && (
          <div className="mt-8">
            <SideTitle>Education</SideTitle>

            <div className="mt-3.5 space-y-5">
              {education.map((item, index) => {
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

                if (
                  !degree &&
                  !institution &&
                  !startDate &&
                  !endDate
                ) {
                  return null;
                }

                return (
                  <div key={`education-${index}`}>
                    {degree && (
                      <p className="text-[9px] font-bold leading-[1.4] text-white">
                        {degree}
                      </p>
                    )}

                    {institution && (
                      <p className="mt-1.5 text-[8px] leading-[1.4] text-slate-400">
                        {institution}
                      </p>
                    )}

                    {(startDate || endDate) && (
                      <p className="mt-1.5 text-[7.5px] text-slate-500">
                        {startDate || ""}
                        {startDate || endDate ? " — " : ""}
                        {endDate || "Present"}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* LANGUAGES */}

        {languages.length > 0 && (
          <div className="mt-8">
            <SideTitle>Languages</SideTitle>

            <div className="mt-3.5 space-y-3">
              {languages.map((item, index) => {
                const name = getValue(item, [
                  "name",
                  "language",
                  "title",
                ]);

                const level = getValue(item, [
                  "level",
                  "proficiency",
                  "fluency",
                ]);

                if (!name) return null;

                return (
                  <div key={`language-side-${index}`}>
                    <p className="text-[8px] font-semibold text-white">
                      {name}
                    </p>

                    {level && (
                      <p className="mt-0.5 text-[7.5px] text-slate-400">
                        {level}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="min-w-0 flex-1 px-8 py-8">
        {/* HEADER */}

        {(personal.fullName || personal.jobTitle) && (
          <header>
            {personal.fullName && (
              <h1
                className="
                  text-[32px]
                  font-extrabold
                  leading-none
                  tracking-tight
                  text-slate-900
                "
              >
                {personal.fullName}
              </h1>
            )}

            {personal.jobTitle && (
              <p
                className="
                  mt-2.5
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-buildcv-violet
                "
              >
                {personal.jobTitle}
              </p>
            )}

            <div className="my-5 h-px bg-slate-200" />
          </header>
        )}

        {/* PROFESSIONAL SUMMARY */}

        {personal.summary && (
          <ProfessionalSection title="Professional Summary">
            <p className="text-[8.5px] leading-[1.6] text-slate-500">
              {personal.summary}
            </p>
          </ProfessionalSection>
        )}

        {/* EXPERIENCE */}

        {experience.length > 0 && (
          <ProfessionalSection
            title="Work Experience"
            className="mt-7"
          >
            <div className="space-y-5">
              {experience.map((item, index) => {
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
                  "summary",
                ]);

                return (
                  <ProfessionalJob
                    key={`experience-${index}`}
                    title={jobTitle}
                    company={company}
                    startDate={startDate}
                    endDate={endDate}
                    description={description}
                  />
                );
              })}
            </div>
          </ProfessionalSection>
        )}

        {/* PROJECTS */}

        {projects.length > 0 && (
          <ProfessionalSection
            title="Projects"
            className="mt-7"
          >
            <div className="grid grid-cols-2 gap-x-5 gap-y-4">
              {projects.map((project, index) => {
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

                const technologies =
                  getTechnologies(project);

                if (
                  !projectName &&
                  !description &&
                  technologies.length === 0
                ) {
                  return null;
                }

                return (
                  <article
                    key={`project-${index}`}
                    className="
                      rounded-md
                      border
                      border-slate-100
                      bg-slate-50/60
                      p-3
                    "
                  >
                    {projectName && (
                      <h4 className="text-[9px] font-bold leading-tight text-slate-900">
                        {projectName}
                      </h4>
                    )}

                    {description && (
                      <TinyText className="mt-1.5">
                        {description}
                      </TinyText>
                    )}

                    {technologies.length > 0 && (
                      <p className="mt-2 text-[8px] font-semibold leading-tight text-buildcv-violet">
                        {technologies.join(" • ")}
                      </p>
                    )}
                  </article>
                );
              })}
            </div>
          </ProfessionalSection>
        )}

        {/* ACHIEVEMENTS */}

        {achievements.length > 0 && (
          <ProfessionalSection
            title="Achievements"
            className="mt-7"
          >
            <div className="space-y-4">
              {achievements.map((item, index) => {
                const title = getValue(item, [
                  "title",
                  "name",
                ]);

                const description = getValue(item, [
                  "description",
                  "details",
                  "summary",
                ]);

                if (!title && !description) {
                  return null;
                }

                return (
                  <div
                    key={`achievement-${index}`}
                    className="border-l-2 border-buildcv-violet/30 pl-3"
                  >
                    {title && (
                      <p className="text-[9px] font-bold text-slate-900">
                        {title}
                      </p>
                    )}

                    {description && (
                      <TinyText className="mt-1.5">
                        {description}
                      </TinyText>
                    )}
                  </div>
                );
              })}
            </div>
          </ProfessionalSection>
        )}

        {/* CERTIFICATIONS */}

        {certifications.length > 0 && (
          <ProfessionalSection
            title="Certifications"
            className="mt-7"
          >
            <div className="grid grid-cols-2 gap-3.5">
              {certifications.map((item, index) => {
                const name = getValue(item, [
                  "name",
                  "title",
                  "certificate",
                ]);

                const issuer = getValue(item, [
                  "issuer",
                  "organization",
                  "company",
                ]);

                const date = getValue(item, [
                  "date",
                  "year",
                  "issuedDate",
                ]);

                if (!name && !issuer && !date) {
                  return null;
                }

                return (
                  <div
                    key={`cert-${index}`}
                    className="
                      border
                      border-slate-100
                      bg-white
                      p-2.5
                    "
                  >
                    {name && (
                      <p className="text-[8.5px] font-bold leading-[1.4] text-slate-900">
                        {name}
                      </p>
                    )}

                    {issuer && (
                      <TinyText className="mt-1.5">
                        {issuer}
                      </TinyText>
                    )}

                    {date && (
                      <p className="mt-1.5 text-[8px] font-semibold text-buildcv-violet">
                        {date}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </ProfessionalSection>
        )}

        {/* INTERESTS */}

        {interests.length > 0 && (
          <ProfessionalSection
            title="Interests"
            className="mt-7"
          >
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => {
                const name =
                  typeof interest === "string"
                    ? interest
                    : getValue(interest, [
                        "name",
                        "title",
                        "interest",
                      ]);

                if (!name) return null;

                return (
                  <span
                    key={`interest-${index}`}
                    className="
                      rounded
                      bg-slate-100
                      px-2.5
                      py-1.5
                      text-[8px]
                      font-semibold
                      leading-none
                      text-slate-500
                    "
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          </ProfessionalSection>
        )}

        {/* REFERENCES */}

        {references.length > 0 && (
          <ProfessionalSection
            title="References"
            className="mt-7"
          >
            <div className="grid grid-cols-2 gap-5">
              {references.map((item, index) => {
                const name = getValue(item, [
                  "name",
                  "fullName",
                ]);

                const role = getValue(item, [
                  "role",
                  "position",
                  "jobTitle",
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

                if (
                  !name &&
                  !role &&
                  !company &&
                  !email &&
                  !phone
                ) {
                  return null;
                }

                return (
                  <div key={`reference-${index}`}>
                    {name && (
                      <p className="text-[8.5px] font-bold text-slate-900">
                        {name}
                      </p>
                    )}

                    {(role || company) && (
                      <TinyText className="mt-1">
                        {role}
                        {role && company ? " • " : ""}
                        {company}
                      </TinyText>
                    )}

                    {email && (
                      <TinyText className="mt-1.5">
                        {email}
                      </TinyText>
                    )}

                    {phone && (
                      <TinyText>{phone}</TinyText>
                    )}
                  </div>
                );
              })}
            </div>
          </ProfessionalSection>
        )}

        {/* =====================================================
            FALLBACK
        ===================================================== */}

        {!personal.summary &&
          experience.length === 0 &&
          education.length === 0 &&
          skills.length === 0 &&
          projects.length === 0 &&
          certifications.length === 0 &&
          achievements.length === 0 &&
          languages.length === 0 &&
          interests.length === 0 &&
          references.length === 0 && (
            <div className="mt-8 text-center text-[8.5px] text-slate-400">
              Add information to your resume to see the preview.
            </div>
          )}
      </main>
    </div>
  );
}

export default ProfessionalPreview;