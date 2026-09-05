import React from "react";

function CoralPreview({
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
    phone: "+1 415 555 0182",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/oliviacarter",
    github: "github.com/oliviacarter",
    summary:
      "Creative developer creating expressive digital experiences by combining thoughtful design, modern frontend technology and meaningful interactions.",
    profileImage: "",
  };

  const sampleEducation = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Stanford University",
      field: "Computer Science",
      startDate: "2017",
      endDate: "2021",
      description:
        "Focused on software development, human-computer interaction, interface design and digital systems.",
    },
    {
      degree: "Certificate in Digital Product Design",
      institution: "California Design Institute",
      field: "Product Design",
      startDate: "2021",
      endDate: "2022",
      description:
        "Studied visual design, prototyping, usability and user-centered product development.",
    },
  ];

  const sampleExperience = [
    {
      jobTitle: "Senior Creative Developer",
      company: "Northstar Digital",
      startDate: "2024",
      endDate: "Present",
      description:
        "Led frontend development for interactive digital products and brand experiences.\nCollaborated with designers to transform concepts into polished responsive interfaces.\nImproved usability and visual consistency through reusable components and design systems.",
    },
    {
      jobTitle: "Frontend Developer",
      company: "Creative Digital Studio",
      startDate: "2022",
      endDate: "2024",
      description:
        "Built responsive interfaces and interactive web experiences using React and modern JavaScript.\nWorked closely with designers to translate visual concepts into production-ready products.\nCreated reusable components that improved development consistency.",
    },
    {
      jobTitle: "Web Developer",
      company: "Digital Experience Agency",
      startDate: "2021",
      endDate: "2022",
      description:
        "Developed modern websites and interactive experiences for digital clients.\nImplemented responsive layouts and reusable frontend components.\nSupported accessibility, performance and cross-browser improvements.",
    },
    {
      jobTitle: "Junior Frontend Developer",
      company: "Studio North",
      startDate: "2020",
      endDate: "2021",
      description:
        "Supported frontend development for client websites and landing pages.\nConverted design concepts into responsive HTML, CSS and JavaScript interfaces.",
    },
  ];

  const sampleSkills = [
    "React",
    "JavaScript",
    "Figma",
    "UI/UX",
    "GSAP",
    "HTML",
    "CSS",
    "Tailwind CSS",
    "Git",
    "Design Systems",
    "Responsive Design",
    "Prototyping",
  ];

  const sampleProjects = [
    {
      name: "BuildCV",
      description:
        "A modern resume builder focused on beautiful templates and a smooth live editing experience.",
      technologies: "React, Tailwind CSS, JavaScript",
      link: "github.com/oliviacarter/buildcv",
    },
    {
      name: "Studio Portfolio",
      description:
        "An immersive portfolio experience combining editorial layouts with subtle motion and interaction.",
      technologies: "React, GSAP, CSS",
      link: "oliviacarter.dev/portfolio",
    },
    {
      name: "Muse Gallery",
      description:
        "A visual gallery platform designed for presenting creative work through elegant responsive layouts.",
      technologies: "React, Figma, JavaScript",
      link: "github.com/oliviacarter/muse",
    },
    {
      name: "Flow Dashboard",
      description:
        "A productivity dashboard designed to organize projects, tasks and creative workflows.",
      technologies: "React, Tailwind CSS, Figma",
      link: "oliviacarter.dev/flow",
    },
  ];

  const sampleCertifications = [
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      date: "2023",
    },
    {
      name: "Meta Front-End Developer",
      issuer: "Meta",
      date: "2022",
    },
    {
      name: "Advanced React Development",
      issuer: "Frontend Masters",
      date: "2022",
    },
  ];

  const sampleLanguages = [
    {
      language: "English",
      proficiency: "Native",
    },
    {
      language: "Spanish",
      proficiency: "Professional",
    },
    {
      language: "French",
      proficiency: "Basic",
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
      title: "Creative Technology Showcase",
      description:
        "Selected to present an interactive web experience at a regional creative technology event.",
      date: "2023",
    },
    {
      title: "Frontend Community Contributor",
      description:
        "Contributed reusable frontend resources and design experiments to the developer community.",
      date: "2022",
    },
  ];

  const sampleInterests = [
    "Creative Coding",
    "Photography",
    "Typography",
    "Digital Art",
    "Architecture",
    "Travel",
  ];

  const sampleReferences = [
    {
      name: "Daniel Morgan",
      position: "Creative Director",
      company: "Northstar Digital",
      email: "daniel.morgan@example.com",
      phone: "+1 415 555 0144",
    },
    {
      name: "Sophia Bennett",
      position: "Product Designer",
      company: "Creative Digital Studio",
      email: "sophia.bennett@example.com",
      phone: "+1 415 555 0168",
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
  // REQUIRED DATA
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
  // OPTIONAL DATA
  // =========================================================

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
    ? Array.isArray(formData.languages) &&
      formData.languages.length > 0
      ? formData.languages
      : Array.isArray(data.languages) &&
        data.languages.length > 0
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
    ? Array.isArray(formData.interests) &&
      formData.interests.length > 0
      ? formData.interests
      : Array.isArray(data.interests) &&
        data.interests.length > 0
      ? data.interests
      : sampleInterests
    : Array.isArray(formData.interests)
    ? formData.interests
    : [];

  const references = useSampleData
    ? Array.isArray(formData.references) &&
      formData.references.length > 0
      ? formData.references
      : Array.isArray(data.references) &&
        data.references.length > 0
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

  const TinyText = ({
    children,
    className = "",
    color = "text-slate-500",
  }) => (
    <p
      className={`
        text-[10px]
        leading-[1.55]
        ${color}
        ${className}
      `}
    >
      {children}
    </p>
  );

  const ResumeLines = ({
    description,
    count = 3,
    color = "bg-orange-200",
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-1.5">
          {lines.slice(0, 4).map((line, index) => (
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
                className={`
                  absolute
                  left-0
                  top-[7px]
                  h-[4px]
                  w-[4px]
                  rounded-full
                  ${color}
                `}
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
              className={`
                absolute
                left-0
                top-[7px]
                h-[4px]
                w-[4px]
                rounded-full
                ${color}
              `}
            />

            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const SkillPill = ({
    children,
    dark = false,
    color = "coral",
  }) => {
    const colorClasses =
      color === "coral"
        ? dark
          ? "border-orange-300/30 bg-white/5 text-orange-200"
          : "border-orange-200 bg-orange-50 text-[#ff5549]"
        : "border-slate-200 bg-slate-50 text-slate-700";

    return (
      <span
        className={`
          rounded-full
          border
          px-2.5
          py-1.5
          text-[9px]
          font-medium
          ${colorClasses}
        `}
      >
        {children}
      </span>
    );
  };

  const PhotoCircle = ({
    ring = "ring-white",
    background = "bg-orange-100",
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
        <span className="text-[11px] font-black text-[#ff5549]">
          {initials}
        </span>
      </div>
    );
  };

  // =========================================================
  // DISPLAY DATA
  // =========================================================

  const displaySkills = skills
    .map(getSkillName)
    .filter(Boolean);

  const hasContact = [
    personal.email,
    personal.phone,
    personal.location,
    personal.linkedin,
    personal.github,
  ].some(Boolean);

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className="
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-[#fff9f7]
        font-sans
      "
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <header
        className="
          relative
          overflow-hidden
          bg-[#ff6b5f]
          px-[52px]
          py-[48px]
          text-white
        "
      >
        <div
          className="
            absolute
            -bottom-16
            -right-14
            h-44
            w-44
            rounded-full
            border-[18px]
            border-white/20
          "
        />

        <div className="relative flex items-center gap-6">
          {(useSampleData || personal.profileImage) && (
            <PhotoCircle
              ring="ring-white"
              background="bg-orange-100"
            />
          )}

          <div className="min-w-0">
            {personal.fullName && (
              <div
                className="
                  text-[36px]
                  font-black
                  uppercase
                  leading-[1]
                  tracking-[-0.03em]
                "
              >
                {personal.fullName}
              </div>
            )}

            {personal.jobTitle && (
              <div
                className="
                  mt-3
                  text-[12px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/80
                "
              >
                {personal.jobTitle}
              </div>
            )}

            {hasContact && (
              <div
                className="
                  mt-4
                  text-[9px]
                  leading-[1.5]
                  text-white/75
                "
              >
                {[
                  personal.email,
                  personal.phone,
                  personal.location,
                ]
                  .filter(Boolean)
                  .join(" • ")}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT GRID
      ====================================================== */}

      <div className="grid grid-cols-[0.7fr_1.5fr]">

        {/* ===================================================
            SIDEBAR
        ==================================================== */}

        <aside
          className="
            min-h-[875px]
            bg-[#242424]
            px-[34px]
            py-[38px]
            text-white
          "
        >
          {/* CONTACT */}

          {hasContact && (
            <section>
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-orange-300
                "
              >
                CONTACT
              </div>

              <TinyText
                className="mt-4"
                color="text-white/60"
              >
                {personal.email && (
                  <>
                    {personal.email}
                    <br />
                  </>
                )}

                {personal.phone && (
                  <>
                    {personal.phone}
                    <br />
                  </>
                )}

                {personal.location && (
                  <>
                    {personal.location}
                    <br />
                  </>
                )}

                {personal.linkedin && (
                  <>
                    {personal.linkedin}
                    <br />
                  </>
                )}

                {personal.github && personal.github}
              </TinyText>
            </section>
          )}

          {/* SKILLS */}

          {displaySkills.length > 0 && (
            <section className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-orange-300
                "
              >
                SKILLS
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {displaySkills
                  .slice(0, 12)
                  .map((skill, index) => (
                    <SkillPill
                      key={`${skill}-${index}`}
                      dark
                      color="coral"
                    >
                      {skill}
                    </SkillPill>
                  ))}
              </div>
            </section>
          )}

          {/* EDUCATION */}

          {education.length > 0 && (
            <section className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-orange-300
                "
              >
                EDUCATION
              </div>

              <div className="mt-4 space-y-5">
                {education.slice(0, 3).map((item, index) => {
                  const degree = getValue(item, [
                    "degree",
                    "program",
                    "qualification",
                    "title",
                  ]);

                  const field = getValue(item, [
                    "field",
                    "major",
                    "specialization",
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
                    <div key={index}>
                      {degree && (
                        <div className="text-[10px] font-bold text-white/90">
                          {degree}
                        </div>
                      )}

                      {field && (
                        <TinyText
                          className="mt-1"
                          color="text-white/60"
                        >
                          {field}
                        </TinyText>
                      )}

                      {institution && (
                        <TinyText
                          className="mt-1"
                          color="text-orange-200/80"
                        >
                          {institution}
                        </TinyText>
                      )}

                      {(startDate || endDate) && (
                        <TinyText
                          color="text-white/45"
                        >
                          {startDate || ""}
                          {startDate && endDate
                            ? " — "
                            : ""}
                          {endDate || ""}
                        </TinyText>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {/* CERTIFICATIONS */}

          {certifications.length > 0 && (
            <section className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-orange-300
                "
              >
                CERTIFICATIONS
              </div>

              <div className="mt-4 space-y-4">
                {certifications
                  .slice(0, 4)
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
                      "issueDate",
                    ]);

                    return (
                      <div key={index}>
                        {name && (
                          <div className="text-[9.5px] font-semibold text-white/90">
                            {name}
                          </div>
                        )}

                        {(issuer || date) && (
                          <TinyText
                            color="text-white/50"
                          >
                            {issuer}

                            {issuer && date
                              ? " • "
                              : ""}

                            {date}
                          </TinyText>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* LANGUAGES */}

          {languages.length > 0 && (
            <section className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-orange-300
                "
              >
                LANGUAGES
              </div>

              <div className="mt-4 space-y-2.5">
                {languages
                  .slice(0, 5)
                  .map((item, index) => {
                    const language =
                      getValue(item, [
                        "language",
                        "name",
                        "title",
                      ]);

                    const proficiency =
                      getValue(item, [
                        "proficiency",
                        "level",
                        "fluency",
                      ]);

                    return (
                      <TinyText
                        key={index}
                        color="text-white/60"
                      >
                        {language}

                        {language &&
                        proficiency
                          ? " • "
                          : ""}

                        {proficiency}
                      </TinyText>
                    );
                  })}
              </div>
            </section>
          )}

          {/* INTERESTS */}

          {interests.length > 0 && (
            <section className="mt-10">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-orange-300
                "
              >
                INTERESTS
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {interests
                  .slice(0, 8)
                  .map((interest, index) => {
                    const value =
                      typeof interest === "string"
                        ? interest
                        : getValue(interest, [
                            "name",
                            "title",
                            "interest",
                          ]);

                    if (!value) return null;

                    return (
                      <span
                        key={`${value}-${index}`}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          px-2.5
                          py-1.5
                          text-[8px]
                          text-white/65
                        "
                      >
                        {value}
                      </span>
                    );
                  })}
              </div>
            </section>
          )}
        </aside>

        {/* ===================================================
            MAIN CONTENT
        ==================================================== */}

        <main
          className="
            min-w-0
            px-[40px]
            py-[38px]
          "
        >
          {/* INTRO */}

          {personal.summary && (
            <section>
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-[#ff5549]
                "
              >
                HELLO
              </div>

              <div
                className="
                  mt-4
                  max-w-[380px]
                  text-[23px]
                  font-black
                  leading-[1.12]
                  tracking-[-0.02em]
                  text-slate-900
                "
              >
                {useSampleData ? (
                  <>
                    I design.
                    <br />
                    I build.
                    <br />
                    I remember.
                  </>
                ) : (
                  personal.summary
                )}
              </div>

              <TinyText className="mt-5 max-w-[470px]">
                {personal.summary}
              </TinyText>
            </section>
          )}

          {/* EXPERIENCE */}

          {experience.length > 0 && (
            <section className="mt-9">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-[#ff5549]
                "
              >
                EXPERIENCE
              </div>

              <div className="mt-5 space-y-5">
                {experience
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
                      <article
                        key={index}
                        className="
                          rounded-2xl
                          bg-orange-50
                          p-5
                          break-inside-avoid
                        "
                      >
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
                          <div
                            className="
                              mt-2
                              text-[9.5px]
                              font-medium
                              text-[#ff5549]
                            "
                          >
                            {company}

                            {(startDate ||
                              endDate) && (
                              <>
                                {company
                                  ? " • "
                                  : ""}
                                {startDate || ""}
                                {startDate &&
                                endDate
                                  ? " — "
                                  : ""}
                                {endDate || ""}
                              </>
                            )}
                          </div>
                        )}

                        {description && (
                          <div className="mt-4">
                            <ResumeLines
                              description={
                                description
                              }
                              count={3}
                              color="bg-orange-200"
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

          {projects.length > 0 && (
            <section className="mt-9">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-[#ff5549]
                "
              >
                SELECTED WORK
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {projects
                  .slice(0, 4)
                  .map((project, index) => {
                    const name = getValue(project, [
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

                    const technologies =
                      getValue(project, [
                        "technologies",
                        "technology",
                        "techStack",
                        "stack",
                      ]);

                    const link = getValue(project, [
                      "link",
                      "url",
                      "projectLink",
                      "github",
                    ]);

                    return (
                      <article
                        key={index}
                        className="
                          rounded-2xl
                          border
                          border-orange-100
                          bg-[#fffaf8]
                          p-4
                          break-inside-avoid
                        "
                      >
                        {name && (
                          <div
                            className="
                              text-[11px]
                              font-black
                              text-slate-900
                            "
                          >
                            {name}
                          </div>
                        )}

                        {description && (
                          <TinyText className="mt-2">
                            {description}
                          </TinyText>
                        )}

                        {technologies && (
                          <TinyText
                            className="mt-2"
                            color="text-[#ff5549]"
                          >
                            {technologies}
                          </TinyText>
                        )}

                        {link && (
                          <TinyText
                            className="mt-2 break-all"
                            color="text-[#ff5549]"
                          >
                            {link}
                          </TinyText>
                        )}
                      </article>
                    );
                  })}
              </div>
            </section>
          )}

          {/* ACHIEVEMENTS */}

          {achievements.length > 0 && (
            <section className="mt-9">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-[#ff5549]
                "
              >
                ACHIEVEMENTS
              </div>

              <div className="mt-4 space-y-4">
                {achievements
                  .slice(0, 3)
                  .map((item, index) => {
                    const title = getValue(item, [
                      "title",
                      "name",
                      "achievement",
                    ]);

                    const description =
                      getValue(item, [
                        "description",
                        "details",
                        "summary",
                      ]);

                    const date = getValue(item, [
                      "date",
                      "year",
                    ]);

                    return (
                      <div key={index}>
                        {title && (
                          <div className="text-[10px] font-bold text-slate-900">
                            {title}
                          </div>
                        )}

                        {(description || date) && (
                          <TinyText className="mt-1">
                            {description}

                            {description && date
                              ? " • "
                              : ""}

                            {date}
                          </TinyText>
                        )}
                      </div>
                    );
                  })}
              </div>
            </section>
          )}

          {/* REFERENCES */}

          {references.length > 0 && (
            <section className="mt-9">
              <div
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.18em]
                  text-[#ff5549]
                "
              >
                REFERENCES
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {references
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
                          border-orange-100
                          bg-[#fffaf8]
                          p-3.5
                        "
                      >
                        {name && (
                          <div className="text-[10px] font-bold text-slate-900">
                            {name}
                          </div>
                        )}

                        {(position ||
                          company) && (
                          <TinyText className="mt-1">
                            {position}

                            {position &&
                            company
                              ? " • "
                              : ""}

                            {company}
                          </TinyText>
                        )}

                        {email && (
                          <TinyText
                            className="mt-1 break-all"
                            color="text-[#ff5549]"
                          >
                            {email}
                          </TinyText>
                        )}

                        {phone && (
                          <TinyText color="text-[#ff5549]">
                            {phone}
                          </TinyText>
                        )}
                      </article>
                    );
                  })}
              </div>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}

export default CoralPreview;