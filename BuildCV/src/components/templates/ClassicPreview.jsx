import React from "react";

function ClassicPreview({ formData = {}, data = {} }) {
  // =========================================================
  // DATA
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

  // =========================================================
  // UI COMPONENTS
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

  const ResumeLines = ({ text }) => {
    if (!text) return null;

    const lines = Array.isArray(text)
      ? text.filter(Boolean)
      : String(text)
          .split("\n")
          .map((line) => line.trim())
          .filter(Boolean);

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
        ))}
      </ul>
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
  // CONTACT
  // =========================================================

  const contactItems = [
    personal.email,
    personal.phone,
    personal.location,
    personal.linkedin,
  ].filter(Boolean);

  // =========================================================
  // FALLBACK EXPERIENCE
  // =========================================================

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Senior Frontend Developer",
          company: "Creative Digital Studio",
          startDate: "2023",
          endDate: "Present",
          description:
            "Built responsive web applications and reusable UI systems while improving performance, accessibility, and user experience.",
        },
        {
          jobTitle: "Frontend Developer",
          company: "Technology Company",
          startDate: "2021",
          endDate: "2023",
          description:
            "Developed modern interfaces using React and JavaScript and collaborated with designers to deliver polished digital products.",
        },
        {
          jobTitle: "Web Developer Intern",
          company: "Digital Agency",
          startDate: "2020",
          endDate: "2021",
          description:
            "Supported frontend development, implemented responsive layouts, and contributed to client-facing web projects.",
        },
      ];

  // =========================================================
  // FALLBACK EDUCATION
  // =========================================================

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
          startDate: "2017",
          endDate: "2021",
        },
        {
          degree: "Higher Secondary Education",
          institution: "College Name",
          startDate: "2015",
          endDate: "2017",
        },
      ];

  // =========================================================
  // FALLBACK SKILLS
  // =========================================================

  const displaySkills = skills
    .map(getSkillName)
    .filter(Boolean);

  const finalSkills =
    displaySkills.length > 0
      ? displaySkills
      : [
          "React",
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "Tailwind CSS",
          "Git",
          "REST APIs",
          "Responsive Design",
          "UI Development",
        ];

  // =========================================================
  // MAIN A4 DOCUMENT
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

      <header className="border-b border-slate-200 pb-6">
        <div className="flex items-end justify-between gap-8">

          {/* NAME + TITLE */}

          <div className="min-w-0">
            <h1
              className="
                text-[38px]
                font-black
                leading-none
                tracking-[-0.035em]
                text-slate-900
              "
            >
              {personal.fullName || "Your Name"}
            </h1>

            <div
              className="
                mt-3
                text-[13px]
                font-bold
                uppercase
                tracking-[0.22em]
                text-indigo-600
              "
            >
              {personal.jobTitle || "Frontend Developer"}
            </div>
          </div>

          {/* SMALL ACCENT */}

          <div
            className="
              mb-1
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
            contactItems.map((item, index) => (
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
            ))
          ) : (
            <>
              <span>email@example.com</span>
              <span className="text-slate-300">
                •
              </span>
              <span>+1 234 567 890</span>
              <span className="text-slate-300">
                •
              </span>
              <span>City, Country</span>
              <span className="text-slate-300">
                •
              </span>
              <span>linkedin.com/in/username</span>
            </>
          )}
        </div>
      </header>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          mt-7
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
              Profile
            </SectionTitle>

            <TinyText>
              {personal.summary ||
                "Results-driven professional with a strong foundation in modern web development and user-focused design. Experienced in building responsive digital experiences, solving complex problems, and turning ideas into clean, reliable products."}
            </TinyText>
          </section>

          {/* =================================================
              EXPERIENCE
          ================================================= */}

          <section className="mt-7">
            <SectionTitle>
              Experience
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
                      {/* TIMELINE */}

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

                      {/* VERTICAL LINE */}

                      {index <
                        displayExperience.slice(
                          0,
                          3
                        ).length -
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

                      {/* JOB */}

                      <h3
                        className="
                          text-[12px]
                          font-bold
                          leading-[1.3]
                          text-slate-900
                        "
                      >
                        {jobTitle ||
                          "Job Title"}
                      </h3>

                      {/* COMPANY */}

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
                            "Company Name"}
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

                      {description && (
                        <div className="mt-2">
                          <ResumeLines
                            text={description}
                          />
                        </div>
                      )}
                    </article>
                  );
                })}
            </div>
          </section>

          {/* =================================================
              PROJECTS / HIGHLIGHTS
          ================================================= */}

          <section className="mt-7">
            <SectionTitle>
              Highlights
            </SectionTitle>

            <ResumeLines
              text={[
                "Strong focus on clean, maintainable and responsive interfaces.",
                "Comfortable collaborating across design and development workflows.",
                "Focused on performance, accessibility and intuitive user experiences.",
              ]}
            />
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
              EDUCATION
          ================================================= */}

          <section>
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
                        {degree ||
                          "Degree / Program"}
                      </h3>

                      <TinyText className="mt-1">
                        {institution ||
                          "University Name"}
                      </TinyText>

                      {(startDate ||
                        endDate) && (
                        <p
                          className="
                            mt-1.5
                            text-[9px]
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

          {/* =================================================
              SKILLS
          ================================================= */}

          <section className="mt-8">
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

          {/* =================================================
              LANGUAGES
          ================================================= */}

          <section className="mt-8">
            <SectionTitle>
              Languages
            </SectionTitle>

            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-bold
                      text-slate-800
                    "
                  >
                    English
                  </span>

                  <span
                    className="
                      text-[8.5px]
                      text-slate-400
                    "
                  >
                    Professional
                  </span>
                </div>

                <div className="mt-1.5 h-1 rounded-full bg-slate-100">
                  <div className="h-1 w-[88%] rounded-full bg-indigo-600" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <span
                    className="
                      text-[10px]
                      font-bold
                      text-slate-800
                    "
                  >
                    Spanish
                  </span>

                  <span
                    className="
                      text-[8.5px]
                      text-slate-400
                    "
                  >
                    Conversational
                  </span>
                </div>

                <div className="mt-1.5 h-1 rounded-full bg-slate-100">
                  <div className="h-1 w-[65%] rounded-full bg-indigo-600" />
                </div>
              </div>
            </div>
          </section>

          {/* =================================================
              CORE STRENGTHS
          ================================================= */}

          <section className="mt-8">
            <SectionTitle>
              Strengths
            </SectionTitle>

            <div className="space-y-2">
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

export default ClassicPreview;