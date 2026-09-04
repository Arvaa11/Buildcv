import React from "react";

function ElegantPreview({ formData = {}, data = {} }) {
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
    if (typeof skill === "string") return skill;

    return getValue(skill, [
      "name",
      "skill",
      "title",
      "label",
    ]);
  };

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
  }) => (
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
  // FALLBACK DATA
  // =========================================================

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
        },
      ];

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : [
        "React",
        "JavaScript",
        "UI/UX",
        "Git",
        "CSS",
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName =
    personal.fullName || "YOUR NAME";

  const displayJobTitle =
    personal.jobTitle || "Frontend Developer";

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

        {/* JOB TITLE */}

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

        {/* CONTACT */}

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
          <span>
            {personal.email || "Email"}
          </span>

          <Dot />

          <span>
            {personal.phone || "Phone"}
          </span>

          <Dot />

          <span>
            {personal.location || "Location"}
          </span>

          {personal.linkedin && (
            <>
              <Dot />
              <span>{personal.linkedin}</span>
            </>
          )}

          {personal.github && (
            <>
              <Dot />
              <span>{personal.github}</span>
            </>
          )}
        </div>
      </header>

      {/* =====================================================
          DECORATIVE LINE
      ====================================================== */}

      <div className="mx-auto mt-7 h-px w-24 bg-violet-300" />

      {/* =====================================================
          ABOUT ME
      ====================================================== */}

      <section className="mt-8">
        <SectionTitle accent centered>
          ABOUT ME
        </SectionTitle>

        <div className="mt-5 text-center">
          <TinyText className="mx-auto max-w-[610px]">
            {personal.summary ||
              "A thoughtful developer passionate about technology, design and storytelling."}
          </TinyText>
        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ====================================================== */}

      <section className="mt-9">
        <SectionTitle accent centered>
          EXPERIENCE
        </SectionTitle>

        <div className="mt-5 space-y-7 text-center">
          {displayExperience
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
                  {/* JOB TITLE */}

                  <div
                    className="
                      text-[12px]
                      font-semibold
                      leading-[1.35]
                      text-slate-900
                    "
                  >
                    {jobTitle ||
                      "Frontend Developer"}
                  </div>

                  {/* COMPANY + DATE */}

                  <TinyText className="mt-2">
                    {company || "Company Name"}

                    {(startDate || endDate) && (
                      <>
                        {" "}
                        • {startDate || ""} —{" "}
                        {endDate || "Present"}
                      </>
                    )}
                  </TinyText>
                </article>
              );
            })}
        </div>
      </section>

      {/* =====================================================
          EDUCATION
      ====================================================== */}

      <section className="mt-9">
        <SectionTitle accent centered>
          EDUCATION
        </SectionTitle>

        <div className="mt-5 space-y-7 text-center">
          {displayEducation
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
                  {/* DEGREE */}

                  <div
                    className="
                      text-[12px]
                      font-semibold
                      leading-[1.35]
                      text-slate-900
                    "
                  >
                    {degree ||
                      "Bachelor of Computer Science"}
                  </div>

                  {/* INSTITUTION + DATE */}

                  <TinyText className="mt-2">
                    {institution ||
                      "University Name"}

                    {(startDate || endDate) && (
                      <>
                        {" "}
                        • {startDate || ""} —{" "}
                        {endDate || "Present"}
                      </>
                    )}
                  </TinyText>
                </article>
              );
            })}
        </div>
      </section>

      {/* =====================================================
          SKILLS
      ====================================================== */}

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
          {displaySkills
            .slice(0, 10)
            .map((skill, index) => {
              const skillName =
                getSkillName(skill);

              return (
                <SkillPill
                  key={`${skillName}-${index}`}
                >
                  {skillName || "Skill"}
                </SkillPill>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default ElegantPreview;