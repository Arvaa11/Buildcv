import React from "react";

function AtelierPreview({
  formData = {},
  data = {},
  useSampleData = false,
}) {
  // =========================================================
  // SAMPLE DATA
  // Same sample data used across all BuildCV templates
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
  // ARRAY DATA HELPER
  // =========================================================

  const getArrayData = (
    formValue,
    dataValue,
    sampleValue
  ) => {
    if (useSampleData) {
      if (
        Array.isArray(formValue) &&
        formValue.length > 0
      ) {
        return formValue;
      }

      if (
        Array.isArray(dataValue) &&
        dataValue.length > 0
      ) {
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

  // =========================================================
  // DATA
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

  const getTechnologies = (project) => {
    const technologies = getValue(project, [
      "technologies",
      "technology",
      "techStack",
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
  // SMALL TEXT
  // =========================================================

  const TinyText = ({
    children,
    className = "",
    color = "text-[#796b63]",
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
        className={`text-[10px] leading-[1.55] ${color} ${className}`}
      >
        {children}
      </p>
    );
  };

  // =========================================================
  // RESUME BULLETS
  // =========================================================

  const ResumeLines = ({
    description,
    color = "bg-[#d7c5b8]",
  }) => {
    const lines = getDescriptionLines(description);

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
              pl-3.5
              text-[9.5px]
              leading-[1.5]
              text-[#75665e]
            "
          >
            <span
              className={`
                absolute
                left-0
                top-[6px]
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
  };

  // =========================================================
  // PROFILE PHOTO
  // =========================================================

  const PhotoCircle = ({
    ring = "ring-[#caa993]",
    background = "bg-[#eadbd0]",
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

    const initials = (personal.fullName || "OC")
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
        <span className="font-serif text-[10px] font-bold text-[#8a6250]">
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

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div
      className="
        box-border
        min-h-[1123px]
        w-[794px]
        overflow-
        bg-[#f7f3ee]
        px-[52px]
        py-[48px]
        font-sans
        text-[#27221f]
      "
    >
      {/* =================================================
          HEADER
      ================================================= */}

      <header className="pb-6">
        <div className="flex items-start justify-between">
          <div>
            {personal.fullName && (
              <div
                className="
                  font-serif
                  text-[38px]
                  font-bold
                  leading-[0.98]
                  tracking-[-0.04em]
                  text-[#27221f]
                "
              >
                {personal.fullName
                  .split(" ")
                  .filter(Boolean)
                  .map((word, index, words) => (
                    <React.Fragment key={index}>
                      {word.toUpperCase()}

                      {index < words.length - 1 && (
                        <br />
                      )}
                    </React.Fragment>
                  ))}
              </div>
            )}

            {personal.jobTitle && (
              <div
                className="
                  mt-3
                  text-[13px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#8a6250]
                "
              >
                {personal.jobTitle}
              </div>
            )}
          </div>

          {(personal.profileImage || useSampleData) && (
            <PhotoCircle
              ring="ring-[#caa993]"
              background="bg-[#eadbd0]"
            />
          )}
        </div>

        {(personal.fullName ||
          personal.jobTitle ||
          personal.profileImage) && (
          <div className="mt-6 h-px bg-[#cdb9aa]" />
        )}
      </header>

      {/* =================================================
          MAIN
      ================================================= */}

      <main>
        <div className="grid grid-cols-[0.72fr_1.5fr] gap-8">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <aside className="min-w-0">
            {/* CONTACT */}

            {[
              personal.email,
              personal.phone,
              personal.location,
              personal.linkedin,
              personal.github,
            ].some(Boolean) && (
              <section>
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Contact
                </div>

                <TinyText className="mt-4">
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

                  {personal.github && (
                    <>
                      {personal.github}
                    </>
                  )}
                </TinyText>
              </section>
            )}

            {/* TOOLS */}

            {displaySkills.length > 0 && (
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Tools
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {displaySkills
                    .slice(0, 8)
                    .map((skill, index) => (
                      <span
                        key={`${skill}-${index}`}
                        className="
                          inline-flex
                          items-center
                          rounded-full
                          border
                          border-[#cdb9aa]
                          px-2.5
                          py-1.5
                          text-[9px]
                          leading-none
                          text-[#634e43]
                        "
                      >
                        {skill}
                      </span>
                    ))}
                </div>
              </section>
            )}

            {/* EDUCATION */}

            {education.length > 0 && (
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Education
                </div>

                <div className="mt-4 space-y-4">
                  {education
                    .slice(0, 3)
                    .map((item, index) => {
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

                      const institution = getValue(
                        item,
                        [
                          "institution",
                          "university",
                          "school",
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
                        ]
                      );

                      if (
                        !degree &&
                        !field &&
                        !institution &&
                        !startDate &&
                        !endDate &&
                        !description
                      ) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {degree && (
                            <TinyText>
                              {degree}
                            </TinyText>
                          )}

                          {field && (
                            <TinyText>
                              {field}
                            </TinyText>
                          )}

                          {(institution ||
                            startDate ||
                            endDate) && (
                            <TinyText color="text-[#8a6250]">
                              {institution}

                              {(startDate ||
                                endDate) && (
                                <>
                                  {institution
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
                            </TinyText>
                          )}

                          {description && (
                            <TinyText className="mt-1">
                              {description}
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
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Languages
                </div>

                <div className="mt-4 space-y-3">
                  {languages
                    .slice(0, 4)
                    .map((language, index) => {
                      const name = getValue(language, [
                        "name",
                        "language",
                        "title",
                      ]);

                      const level = getValue(language, [
                        "level",
                        "proficiency",
                        "fluency",
                      ]);

                      if (!name && !level) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {name && (
                            <TinyText>
                              {name}
                            </TinyText>
                          )}

                          {level && (
                            <TinyText
                              color="text-[#8a6250]"
                            >
                              {level}
                            </TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* INTERESTS */}

            {interests.length > 0 && (
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Interests
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {interests
                    .slice(0, 8)
                    .map((interest, index) => {
                      const name =
                        typeof interest === "string"
                          ? interest
                          : getValue(interest, [
                              "name",
                              "title",
                              "interest",
                            ]);

                      if (!name) {
                        return null;
                      }

                      return (
                        <span
                          key={`${name}-${index}`}
                          className="
                            inline-flex
                            items-center
                            rounded-full
                            border
                            border-[#cdb9aa]
                            px-2.5
                            py-1.5
                            text-[9px]
                            leading-none
                            text-[#634e43]
                          "
                        >
                          {name}
                        </span>
                      );
                    })}
                </div>
              </section>
            )}
          </aside>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <main className="min-w-0">
            {/* SUMMARY */}

            {personal.summary && (
              <section>
                <div className="rounded-2xl bg-[#e8ddd5] p-5">
                  <div
                    className="
                      font-serif
                      text-[25px]
                      font-bold
                      leading-[1.12]
                      tracking-[-0.02em]
                      text-[#342a25]
                    "
                  >
                    {useSampleData ? (
                      <>
                        Design meets
                        <br />
                        technology.
                      </>
                    ) : (
                      personal.summary
                    )}
                  </div>

                  {useSampleData && (
                    <TinyText
                      className="mt-4"
                      color="text-[#75665e]"
                    >
                      {personal.summary}
                    </TinyText>
                  )}
                </div>
              </section>
            )}

            {/* EXPERIENCE */}

            {experience.length > 0 && (
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Experience
                </div>

                <div className="mt-5 space-y-5 border-l border-[#caa993] pl-5">
                  {experience
                    .slice(0, 4)
                    .map((item, index) => {
                      const jobTitle = getValue(
                        item,
                        [
                          "position",
                          "jobTitle",
                          "title",
                          "role",
                        ]
                      );

                      const company = getValue(
                        item,
                        [
                          "company",
                          "companyName",
                          "organization",
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

                      const endDate = getValue(item, [
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
                        <div key={index}>
                          {jobTitle && (
                            <div className="text-[11px] font-bold leading-[1.4] text-[#342a25]">
                              {jobTitle}
                            </div>
                          )}

                          {(company ||
                            startDate ||
                            endDate) && (
                            <div className="mt-1 text-[9.5px] leading-[1.4] text-[#8a6250]">
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
                            <div className="mt-3">
                              <ResumeLines
                                description={
                                  description
                                }
                                color="bg-[#d7c5b8]"
                              />
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* SELECTED WORK */}

            {projects.length > 0 && (
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Selected Work
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {projects
                    .slice(0, 4)
                    .map((project, index) => {
                      const projectName =
                        getValue(project, [
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
                        getTechnologies(project);

                      const link = getValue(project, [
                        "link",
                        "url",
                        "projectLink",
                        "github",
                      ]);

                      if (
                        !projectName &&
                        !description &&
                        technologies.length === 0 &&
                        !link
                      ) {
                        return null;
                      }

                      return (
                        <div
                          key={index}
                          className="
                            rounded-xl
                            border
                            border-[#d9c9be]
                            bg-[#faf7f4]
                            p-4
                          "
                        >
                          {projectName && (
                            <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#342a25]">
                              {projectName}
                            </div>
                          )}

                          {description && (
                            <TinyText className="mt-2">
                              {description}
                            </TinyText>
                          )}

                          {technologies.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {technologies.map(
                                (
                                  technology,
                                  techIndex
                                ) => (
                                  <span
                                    key={`${technology}-${techIndex}`}
                                    className="
                                      rounded-full
                                      bg-[#eadbd0]
                                      px-2
                                      py-1
                                      text-[8px]
                                      font-semibold
                                      text-[#634e43]
                                    "
                                  >
                                    {technology}
                                  </span>
                                )
                              )}
                            </div>
                          )}

                          {link && (
                            <TinyText
                              className="mt-2 break-all"
                              color="text-[#8a6250]"
                            >
                              {link}
                            </TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}

            {/* ACHIEVEMENTS */}

            {achievements.length > 0 && (
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Achievements
                </div>

                <div className="mt-5 space-y-4">
                  {achievements
                    .slice(0, 3)
                    .map((item, index) => {
                      const title = getValue(item, [
                        "title",
                        "name",
                      ]);

                      const description =
                        getValue(item, [
                          "description",
                          "details",
                          "summary",
                        ]);

                      if (!title && !description) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {title && (
                            <div className="text-[10.5px] font-bold text-[#342a25]">
                              {title}
                            </div>
                          )}

                          {description && (
                            <TinyText className="mt-1">
                              {description}
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
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  Certifications
                </div>

                <div className="mt-5 space-y-4">
                  {certifications
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

                      if (!name && !issuer && !date) {
                        return null;
                      }

                      return (
                        <div key={index}>
                          {name && (
                            <div className="text-[10.5px] font-bold text-[#342a25]">
                              {name}
                            </div>
                          )}

                          {(issuer || date) && (
                            <TinyText
                              className="mt-1"
                              color="text-[#8a6250]"
                            >
                              {[issuer, date]
                                .filter(Boolean)
                                .join(" • ")}
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
              <section className="mt-7">
                <div className="font-serif text-[11px] font-bold leading-[1.3] text-[#493b34]">
                  References
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  {references
                    .slice(0, 2)
                    .map((item, index) => {
                      const name = getValue(item, [
                        "name",
                        "fullName",
                      ]);

                      const role = getValue(item, [
                        "role",
                        "position",
                        "title",
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
                        <div key={index}>
                          {name && (
                            <div className="text-[10.5px] font-bold text-[#342a25]">
                              {name}
                            </div>
                          )}

                          {(role || company) && (
                            <TinyText
                              className="mt-1"
                              color="text-[#8a6250]"
                            >
                              {[role, company]
                                .filter(Boolean)
                                .join(" • ")}
                            </TinyText>
                          )}

                          {(email || phone) && (
                            <TinyText
                              className="mt-1"
                              color="text-[#75665e]"
                            >
                              {[email, phone]
                                .filter(Boolean)
                                .join(" • ")}
                            </TinyText>
                          )}
                        </div>
                      );
                    })}
                </div>
              </section>
            )}
          </main>
        </div>
      </main>
    </div>
  );
}

export default AtelierPreview;