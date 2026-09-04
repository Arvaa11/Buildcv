import React from "react";

function MonarchPreview({ formData = {}, data = {} }) {
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

  const TinyText = ({
    children,
    className = "",
    color = "text-[#725e5e]",
  }) => (
    <p
      className={`text-[10px] leading-[1.6] ${color} ${className}`}
    >
      {children}
    </p>
  );

  const ResumeLines = ({
    description,
    count = 3,
  }) => {
    const lines = getDescriptionLines(description);

    // Real description
    if (lines.length > 0) {
      return (
        <ul className="space-y-2">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-3 text-[9.5px] leading-[1.55] text-[#725e5e]"
            >
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-[#d9bd82]" />
              {line}
            </li>
          ))}
        </ul>
      );
    }

    // Fallback description
    return (
      <ul className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="relative pl-3 text-[9.5px] leading-[1.55] text-[#a28e86]"
          >
            <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-[#decfc5]" />
            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-[#d9bd82]",
    background = "bg-[#f0dfb8]",
  }) => {
    // Real uploaded image
    if (personal.profileImage) {
      return (
        <div
          className={`h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ${ring}`}
        >
          <img
            src={personal.profileImage}
            alt={personal.fullName || "Profile"}
            className="h-full w-full object-cover"
          />
        </div>
      );
    }

    // Initials fallback
    const initials = (personal.fullName || "YN")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();

    return (
      <div
        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-2 ${ring} ${background}`}
      >
        <span className="font-serif text-[11px] font-bold text-[#4b1720]">
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
          jobTitle: "Senior Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Led frontend development and delivered elegant digital experiences for modern products.",
        },
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2022",
          endDate: "2024",
          description:
            "Built responsive interfaces and collaborated with teams to create reliable digital products.",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : ["Leadership", "React", "Strategy", "UX"];

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
        },
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName || "ARWA KHAN";

  const displayJobTitle =
    personal.jobTitle || "Executive Developer";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-[#faf7f2] font-sans text-[#3f2930]">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-[#4b1720] px-[52px] py-[48px] text-[#fff8ed]">
        <div className="flex items-center gap-5">
          {/* Profile Photo */}

          <div className="rounded-full border border-[#d9bd82] p-1">
            <PhotoCircle
              ring="ring-[#d9bd82]"
              background="bg-[#f0dfb8]"
            />
          </div>

          <div>
            {/* Name */}

            <div className="font-serif text-[36px] font-bold leading-none tracking-wide">
              {displayName.toUpperCase()}
            </div>

            {/* Job Title */}

            <div className="mt-3 text-[12px] font-semibold tracking-[0.3em] text-[#e3c98e]">
              {displayJobTitle.toUpperCase()}
            </div>

            {/* Contact */}

            {(personal.email ||
              personal.phone ||
              personal.location) && (
              <div className="mt-3 text-[9.5px] leading-[1.5] text-[#fff8ed]/60">
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
          CONTENT
      ===================================================== */}

      <div className="px-[52px] py-[48px]">
        <div className="grid grid-cols-[1.4fr_0.75fr] gap-8">
          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <main>
            {/* Professional Profile */}

            <div className="font-serif text-[22px] font-bold text-[#4b1720]">
              PROFESSIONAL PROFILE
            </div>

            <TinyText
              className="mt-4"
              color="text-[#725e5e]"
            >
              {personal.summary ||
                "Strategic technology professional creating elegant digital products and leading meaningful experiences."}
            </TinyText>

            {/* Career */}

            <section className="mt-8">
              <div className="border-b border-[#d9bd82] pb-3 font-serif text-[11px] font-bold tracking-[0.12em] text-[#4b1720]">
                CAREER
              </div>

              <div className="mt-5 space-y-7">
                {displayExperience
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

                    const description = getValue(item, [
                      "description",
                      "details",
                      "responsibilities",
                    ]);

                    return (
                      <div key={index}>
                        {/* Role */}

                        <div className="text-[12px] font-bold leading-tight text-[#3f2930]">
                          {jobTitle ||
                            "Senior Frontend Developer"}
                        </div>

                        {/* Company + Dates */}

                        <div className="mt-1.5 text-[9.5px] text-[#8c6d39]">
                          {company || "Company Name"}

                          {(startDate || endDate) && (
                            <>
                              {" "}
                              • {startDate || ""} —{" "}
                              {endDate || "Present"}
                            </>
                          )}
                        </div>

                        {/* Description */}

                        <div className="mt-3">
                          <ResumeLines
                            description={description}
                            count={3}
                          />
                        </div>
                      </div>
                    );
                  })}
              </div>
            </section>
          </main>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="border-l border-[#dfcdbb] pl-6">
            {/* Signature Skills */}

            <div className="text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
              SIGNATURE SKILLS
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {displaySkills
                .slice(0, 10)
                .map((skill, index) => {
                  const skillName = getSkillName(skill);

                  return (
                    <span
                      key={`${skillName}-${index}`}
                      className="rounded-full bg-[#eadbbf] px-3 py-1.5 text-[9px] font-semibold leading-tight text-[#4b1720]"
                    >
                      {skillName || "Skill"}
                    </span>
                  );
                })}
            </div>

            {/* Education */}

            <div className="mt-9 text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
              EDUCATION
            </div>

            <div className="mt-4 space-y-6">
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
                    <div key={index}>
                      <div className="text-[10.5px] font-bold leading-[1.35] text-[#3f2930]">
                        {degree ||
                          "Bachelor of Computer Science"}
                      </div>

                      <TinyText
                        color="text-[#725e5e]"
                        className="mt-1.5"
                      >
                        {institution || "University Name"}

                        {(startDate || endDate) && (
                          <>
                            {" "}
                            • {startDate || ""} —{" "}
                            {endDate || "Present"}
                          </>
                        )}
                      </TinyText>
                    </div>
                  );
                })}
            </div>

            {/* Contact */}

            {(personal.email ||
              personal.phone ||
              personal.location ||
              personal.linkedin) && (
              <div className="mt-9">
                <div className="text-[11px] font-bold tracking-[0.18em] text-[#8c6d39]">
                  CONTACT
                </div>

                <TinyText
                  color="text-[#725e5e]"
                  className="mt-4"
                >
                  {personal.email}

                  {personal.phone && (
                    <>
                      <br />
                      {personal.phone}
                    </>
                  )}

                  {personal.location && (
                    <>
                      <br />
                      {personal.location}
                    </>
                  )}

                  {personal.linkedin && (
                    <>
                      <br />
                      {personal.linkedin}
                    </>
                  )}
                </TinyText>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default MonarchPreview;