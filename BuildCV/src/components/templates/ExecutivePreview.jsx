import React from "react";

function ExecutivePreview({ formData = {}, data = {} }) {
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

    return getValue(skill, ["name", "skill", "title", "label"]);
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

  const TinyText = ({ children, className = "" }) => (
    <p
      className={`text-[10.5px] leading-[1.6] text-slate-500 ${className}`}
    >
      {children}
    </p>
  );

  const SectionTitle = ({
    children,
    color = "text-slate-900",
  }) => (
    <div
      className={`text-[11px] font-bold tracking-[0.2em] ${color}`}
    >
      {children}
    </div>
  );

  const ResumeLines = ({
    description,
    count = 4,
  }) => {
    const lines = getDescriptionLines(description);

    if (lines.length > 0) {
      return (
        <ul className="space-y-2">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-600"
            >
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-amber-400" />
              {line}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-400"
          >
            <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-amber-300" />
            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-amber-300",
    background = "bg-slate-700",
  }) => {
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
        <span className="font-serif text-[11px] font-bold text-amber-300">
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
            "Delivered scalable digital products and collaborated with teams to achieve business goals.",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : ["Leadership", "Strategy", "React", "UX"];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName = personal.fullName || "YOUR NAME";

  const displayJobTitle =
    personal.jobTitle || "Technology Leader";

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-[#f8f7f4] font-sans">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="bg-slate-900 px-[52px] py-[48px] text-white">
        <div className="flex items-center gap-5">
          <PhotoCircle
            ring="ring-amber-300"
            background="bg-slate-700"
          />

          <div>
            <div className="font-serif text-[38px] font-bold leading-none tracking-wide">
              {displayName.toUpperCase()}
            </div>

            <div className="mt-3 text-[13px] tracking-[0.28em] text-amber-300">
              {displayJobTitle.toUpperCase()}
            </div>

            {(personal.email ||
              personal.phone ||
              personal.location) && (
              <div className="mt-3 text-[9.5px] leading-[1.5] text-white/60">
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
          MAIN
      ===================================================== */}

      <main className="px-[52px] py-[48px]">
        <div className="grid grid-cols-[1.45fr_0.75fr] gap-8">
          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <section>
            <div className="font-serif text-[22px] font-bold text-slate-900">
              Executive Profile
            </div>

            <TinyText className="mt-4">
              {personal.summary ||
                "Strategic technology professional delivering elegant digital products and meaningful business outcomes."}
            </TinyText>

            {/* Leadership Experience */}

            <div className="mt-8">
              <SectionTitle color="text-amber-700">
                LEADERSHIP EXPERIENCE
              </SectionTitle>

              <div className="mt-5 space-y-7">
                {displayExperience.slice(0, 4).map((item, index) => {
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
                      <div className="text-[12px] font-bold leading-tight text-slate-900">
                        {jobTitle || "Senior Frontend Developer"}
                      </div>

                      <div className="mt-1.5 text-[9.5px] text-amber-700">
                        {company || "Company Name"}

                        {(startDate || endDate) && (
                          <>
                            {" "}
                            • {startDate || ""} —{" "}
                            {endDate || "Present"}
                          </>
                        )}
                      </div>

                      <div className="mt-3">
                        <ResumeLines
                          description={description}
                          count={4}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* =================================================
              SIDEBAR
          ================================================= */}

          <aside className="border-l border-slate-200 pl-6">
            <SectionTitle color="text-amber-700">
              EXPERTISE
            </SectionTitle>

            <div className="mt-5 space-y-3">
              {displaySkills.slice(0, 10).map((skill, index) => {
                const skillName = getSkillName(skill);

                return (
                  <div
                    key={`${skillName}-${index}`}
                    className="border-b border-slate-200 pb-3 text-[10px] leading-[1.4] text-slate-700"
                  >
                    {skillName || "Skill"}
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
                <SectionTitle color="text-amber-700">
                  CONTACT
                </SectionTitle>

                <TinyText className="mt-4">
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
      </main>
    </div>
  );
}

export default ExecutivePreview;