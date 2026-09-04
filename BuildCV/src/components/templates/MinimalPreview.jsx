import React from "react";

function MinimalPreview({ formData = {}, data = {} }) {
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

  const TinyText = ({ children, className = "" }) => (
    <p
      className={`text-[10.5px] leading-[1.65] text-slate-500 ${className}`}
    >
      {children}
    </p>
  );

  const ResumeLines = ({ description, count = 4 }) => {
    const lines = getDescriptionLines(description);

    // Real description
    if (lines.length > 0) {
      return (
        <ul className="space-y-2">
          {lines.map((line, index) => (
            <li
              key={index}
              className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-600"
            >
              <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-slate-400" />
              {line}
            </li>
          ))}
        </ul>
      );
    }

    // Fallback content
    return (
      <ul className="space-y-2">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="relative pl-3 text-[9.5px] leading-[1.55] text-slate-400"
          >
            <span className="absolute left-0 top-[6px] h-[4px] w-[4px] rounded-full bg-slate-300" />
            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  // =========================================================
  // DISPLAY EXPERIENCE
  // =========================================================

  const displayExperience = experience.length
    ? experience
    : [
        {
          jobTitle: "Frontend Developer",
          company: "Company Name",
          startDate: "2024",
          endDate: "Present",
          description:
            "Built responsive and accessible interfaces using modern frontend technologies.",
        },
        {
          jobTitle: "Junior Developer",
          company: "Company Name",
          startDate: "2022",
          endDate: "2024",
          description:
            "Worked on web development projects and collaborated with teams to build useful digital products.",
        },
      ];

  // =========================================================
  // DISPLAY EDUCATION
  // =========================================================

  const displayEducation = education.length
    ? education
    : [
        {
          degree: "Bachelor of Computer Science",
          institution: "University Name",
          startDate: "",
          endDate: "",
        },
      ];

  // =========================================================
  // RENDER
  // =========================================================

  return (
    <div className="h-[1123px] w-[794px] overflow-hidden bg-white px-[52px] py-[48px] font-sans text-slate-900">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header>
        {/* Name */}
        <div className="text-[38px] font-light leading-none tracking-[-0.04em] text-slate-900">
          {personal.fullName || "Your Name"}
        </div>

        {/* Job Title */}
        <div className="mt-3 text-[13px] tracking-[0.28em] text-slate-400">
          {(personal.jobTitle || "FRONTEND DEVELOPER").toUpperCase()}
        </div>

        {/* Contact */}
        {(personal.email ||
          personal.phone ||
          personal.location ||
          personal.linkedin) && (
          <div className="mt-3 flex flex-wrap gap-x-2 text-[9.5px] leading-[1.5] text-slate-400">
            {[
              personal.email,
              personal.phone,
              personal.location,
              personal.linkedin,
            ]
              .filter(Boolean)
              .map((item, index, array) => (
                <React.Fragment key={`${item}-${index}`}>
                  {item}

                  {index < array.length - 1 && (
                    <span>•</span>
                  )}
                </React.Fragment>
              ))}
          </div>
        )}

        {/* Divider */}
        <div className="mt-6 h-px bg-slate-100" />
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mt-8">
        {/* ===================================================
            ABOUT
        =================================================== */}

        <section>
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            About
          </div>

          <TinyText className="mt-4 max-w-[90%]">
            {personal.summary ||
              "Thoughtful developer creating simple interfaces and useful digital products."}
          </TinyText>
        </section>

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section className="mt-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Experience
          </div>

          <div className="mt-5 space-y-7">
            {displayExperience.map((item, index) => {
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
                  {/* Job Title + Date */}
                  <div className="flex items-start justify-between gap-5">
                    <div className="text-[12px] font-semibold leading-tight text-slate-900">
                      {jobTitle || "Job Title"}
                    </div>

                    {(startDate || endDate) && (
                      <div className="shrink-0 text-[9.5px] text-slate-400">
                        {startDate || ""} —{" "}
                        {endDate || "Present"}
                      </div>
                    )}
                  </div>

                  {/* Company */}
                  <TinyText className="mt-1.5">
                    {company || "Company Name"}
                  </TinyText>

                  {/* Description */}
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
        </section>

        {/* ===================================================
            EDUCATION
        =================================================== */}

        <section className="mt-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
            Education
          </div>

          <div className="mt-5 space-y-6">
            {displayEducation.map((item, index) => {
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
                  {/* Degree */}
                  <div className="text-[12px] font-semibold leading-tight text-slate-900">
                    {degree || "Bachelor of Computer Science"}
                  </div>

                  {/* Institution + Date */}
                  <TinyText className="mt-1.5">
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
        </section>
      </main>
    </div>
  );
}

export default MinimalPreview;