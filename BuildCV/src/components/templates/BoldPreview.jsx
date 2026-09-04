import React from "react";

function BoldPreview({ formData = {}, data = {} }) {
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

  const TinyText = ({ children, className = "" }) => (
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

  const SectionTitle = ({
    children,
    accent = false,
    color = "text-slate-900",
  }) => (
    <div
      className={`
        flex
        items-center
        gap-2
        text-[13px]
        font-black
        tracking-[0.16em]
        ${color}
      `}
    >
      {accent && (
        <span className="h-[3px] w-5 rounded-full bg-indigo-600" />
      )}

      {children}
    </div>
  );

  const SkillPill = ({ children }) => (
    <span
      className="
        inline-flex
        items-center
        rounded-full
        bg-indigo-50
        px-2.5
        py-1.5
        text-[9px]
        font-semibold
        leading-none
        text-indigo-700
      "
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
                  bg-indigo-400
                "
              />

              {line}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <ul className="space-y-1.5">
        {Array.from({ length: count }).map((_, index) => (
          <li
            key={index}
            className="
              relative
              pl-3.5
              text-[9.5px]
              leading-[1.5]
              text-slate-400
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
                bg-indigo-300
              "
            />

            Professional responsibility or achievement
          </li>
        ))}
      </ul>
    );
  };

  const PhotoCircle = ({
    ring = "ring-white/30",
    background = "bg-indigo-300",
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
        <span className="text-[10px] font-black text-white">
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
          description:
            "Built responsive interfaces and created meaningful digital experiences.",
        },
        {
          jobTitle: "Junior Developer",
          company: "Technology Company",
          startDate: "2022",
          endDate: "2024",
          description:
            "Developed modern interfaces using React and JavaScript and collaborated with designers.",
        },
      ];

  const displaySkills = skills.length
    ? skills
    : [
        "React",
        "JavaScript",
        "UI/UX",
        "GSAP",
        "Git",
        "HTML",
        "CSS",
        "Figma",
      ];

  // =========================================================
  // DISPLAY VALUES
  // =========================================================

  const displayName =
    personal.fullName || "YOUR NAME";

  const displayJobTitle =
    personal.jobTitle || "Digital Developer";

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
  // MAIN A4 DOCUMENT
  // =========================================================

  return (
    <div
      className="
        box-border
        h-[1123px]
        w-[794px]
        overflow-hidden
        bg-[#f7f7fb]
        font-sans
        text-slate-900
      "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          relative
          overflow-hidden
          bg-indigo-600
          px-[52px]
          py-[42px]
          text-white
        "
      >
        {/* Decorative shape */}

        <div
          className="
            absolute
            -right-16
            -top-16
            h-48
            w-48
            rounded-full
            bg-indigo-400
            opacity-50
          "
        />

        <div
          className="
            absolute
            -bottom-20
            right-28
            h-32
            w-32
            rounded-full
            bg-indigo-500
            opacity-40
          "
        />

        <div
          className="
            relative
            flex
            items-center
            gap-5
          "
        >
          {/* PHOTO */}

          <PhotoCircle
            ring="ring-white/30"
            background="bg-indigo-300"
          />

          {/* NAME */}

          <div className="min-w-0">
            <h1
              className="
                text-[34px]
                font-black
                leading-[1.05]
                tracking-[-0.025em]
              "
            >
              {displayName.toUpperCase()}
            </h1>

            <div
              className="
                mt-2.5
                text-[14px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-indigo-100
              "
            >
              {displayJobTitle}
            </div>

            {/* CONTACT */}

            <div
              className="
                mt-3
                flex
                flex-wrap
                items-center
                gap-x-2.5
                gap-y-1
                text-[9px]
                font-medium
                text-indigo-100
              "
            >
              {contactItems.length > 0 ? (
                contactItems.map((item, index) => (
                  <React.Fragment
                    key={`${item}-${index}`}
                  >
                    {index > 0 && (
                      <span className="opacity-60">
                        •
                      </span>
                    )}

                    <span>{item}</span>
                  </React.Fragment>
                ))
              ) : (
                <>
                  <span>email@example.com</span>
                  <span className="opacity-60">
                    •
                  </span>
                  <span>+1 234 567 890</span>
                  <span className="opacity-60">
                    •
                  </span>
                  <span>City, Country</span>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          MAIN
      ===================================================== */}

      <main
        className="
          px-[52px]
          py-[42px]
        "
      >
        {/* ===================================================
            INTRO
        =================================================== */}

        <section>
          <div
            className="
              max-w-[610px]
              text-[25px]
              font-black
              leading-[1.12]
              tracking-[-0.02em]
              text-slate-900
            "
          >
            {personal.summary ? (
              personal.summary
            ) : (
              <>
                Building
                <br />
                digital things
                <br />
                people love.
              </>
            )}
          </div>

          <TinyText className="mt-4 max-w-[620px]">
            {personal.summary ||
              "Frontend developer passionate about interfaces, motion and meaningful digital experiences."}
          </TinyText>
        </section>

        {/* ===================================================
            CONTENT GRID
        =================================================== */}

        <div
          className="
            mt-9
            grid
            grid-cols-[1.65fr_0.75fr]
            gap-8
          "
        >
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="min-w-0">
            {/* EXPERIENCE */}

            <section>
              <SectionTitle
                accent
                color="text-indigo-700"
              >
                EXPERIENCE
              </SectionTitle>

              <div className="mt-5 space-y-5">
                {displayExperience
                  .slice(0, 4)
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
                          rounded-2xl
                          bg-white
                          p-5
                          shadow-sm
                        "
                      >
                        {/* JOB TITLE */}

                        <h3
                          className="
                            text-[14px]
                            font-black
                            leading-[1.3]
                            text-slate-900
                          "
                        >
                          {jobTitle ||
                            "Frontend Developer"}
                        </h3>

                        {/* COMPANY */}

                        <div
                          className="
                            mt-1.5
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

                        <div className="mt-3">
                          <ResumeLines
                            description={
                              description
                            }
                            count={3}
                          />
                        </div>
                      </article>
                    );
                  })}
              </div>
            </section>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside className="min-w-0">
            {/* =================================================
                SKILLS
            ================================================= */}

            <section>
              <SectionTitle
                accent
                color="text-indigo-700"
              >
                SKILLS
              </SectionTitle>

              <div className="mt-5 flex flex-wrap gap-2">
                {displaySkills
                  .slice(0, 12)
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

            {/* =================================================
                PROFILE DETAILS
            ================================================= */}

            <section className="mt-9">
              <SectionTitle
                accent
                color="text-indigo-700"
              >
                PROFILE
              </SectionTitle>

              <TinyText className="mt-4">
                {personal.summary ||
                  "Creative developer focused on building polished interfaces, thoughtful interactions and reliable digital products."}
              </TinyText>
            </section>

            {/* =================================================
                CONTACT
            ================================================= */}

            <section className="mt-9">
              <SectionTitle
                accent
                color="text-indigo-700"
              >
                CONTACT
              </SectionTitle>

              <div className="mt-4 space-y-2.5">
                <TinyText>
                  {personal.email ||
                    "email@example.com"}
                </TinyText>

                <TinyText>
                  {personal.phone ||
                    "+1 234 567 890"}
                </TinyText>

                <TinyText>
                  {personal.location ||
                    "City, Country"}
                </TinyText>

                {personal.linkedin && (
                  <TinyText>
                    {personal.linkedin}
                  </TinyText>
                )}
              </div>
            </section>

            {/* =================================================
                EXPERTISE
            ================================================= */}

            <section className="mt-9">
              <SectionTitle
                accent
                color="text-indigo-700"
              >
                EXPERTISE
              </SectionTitle>

              <div className="mt-4 space-y-2.5">
                {[
                  "Interface Design",
                  "Frontend Development",
                  "Responsive Design",
                  "Motion & Interaction",
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
                        shrink-0
                        rounded-full
                        bg-indigo-500
                      "
                    />

                    {item}
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default BoldPreview;