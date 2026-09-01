import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

/* =========================================================
   BUILDCV — WORLD-CLASS TEMPLATE LIBRARY
   24 UNIQUE RESUME DESIGNS
========================================================= */

const templates = [
  /* =======================================================
     ONE COLUMN
  ======================================================= */

  {
    id: "classic",
    name: "Classic",
    category: "One Column",
    categories: ["Professional", "ATS"],
    layout: "One Column",
    hasPhoto: false,
    ats: true,
    description:
      "A timeless single-column resume with strong hierarchy and exceptional readability.",
  },

  {
    id: "minimal",
    name: "Minimal",
    category: "One Column",
    categories: ["Modern", "ATS"],
    layout: "One Column",
    hasPhoto: false,
    ats: true,
    description:
      "An editorial-inspired resume with generous whitespace and refined typography.",
  },

  {
    id: "bold",
    name: "Bold",
    category: "One Column",
    categories: ["Modern", "Professional"],
    layout: "One Column",
    hasPhoto: false,
    ats: true,
    description:
      "A typography-first resume designed to make a confident first impression.",
  },

  {
    id: "clean",
    name: "Clean",
    category: "One Column",
    categories: ["Professional", "ATS"],
    layout: "One Column",
    hasPhoto: false,
    ats: true,
    description:
      "A beautifully organized resume built around clarity, balance and effortless scanning.",
  },

  {
    id: "editorial",
    name: "Editorial",
    category: "One Column",
    categories: ["Creative", "Modern"],
    layout: "One Column",
    hasPhoto: false,
    ats: true,
    description:
      "A magazine-inspired resume combining sophisticated typography with a powerful editorial grid.",
  },

  {
    id: "lumen",
    name: "Lumen",
    category: "One Column",
    categories: ["Modern", "ATS"],
    layout: "One Column",
    hasPhoto: false,
    ats: true,
    description:
      "A bright, airy resume using subtle emerald accents and beautifully controlled spacing.",
  },

  /* =======================================================
     TWO COLUMN
  ======================================================= */

  {
    id: "modern",
    name: "Modern",
    category: "Two Column",
    categories: ["Modern", "ATS"],
    layout: "Two Column",
    hasPhoto: false,
    ats: true,
    description:
      "A balanced two-column layout with a polished modern professional hierarchy.",
  },

  {
    id: "professional",
    name: "Professional",
    category: "Two Column",
    categories: ["Professional", "ATS"],
    layout: "Two Column",
    hasPhoto: false,
    ats: true,
    description:
      "A polished corporate resume that keeps every important detail easy to scan.",
  },

  {
    id: "executive",
    name: "Executive",
    category: "Two Column",
    categories: ["Professional", "ATS"],
    layout: "Two Column",
    hasPhoto: false,
    ats: true,
    description:
      "A premium executive layout designed for experienced professionals and leaders.",
  },

  {
    id: "tech",
    name: "Tech Pro",
    category: "Two Column",
    categories: ["Modern", "ATS"],
    layout: "Two Column",
    hasPhoto: false,
    ats: true,
    description:
      "A technical resume built around skills, experience, projects and measurable achievements.",
  },

  {
    id: "nexus",
    name: "Nexus",
    category: "Two Column",
    categories: ["Modern", "Professional", "ATS"],
    layout: "Two Column",
    hasPhoto: false,
    ats: true,
    description:
      "A premium cobalt-accented professional layout with an elegant information architecture.",
  },

  {
    id: "sage",
    name: "Sage",
    category: "Two Column",
    categories: ["Professional", "Modern"],
    layout: "Two Column",
    hasPhoto: false,
    ats: true,
    description:
      "A calm, sophisticated resume combining forest green accents with an executive structure.",
  },

  /* =======================================================
     PHOTO
  ======================================================= */

  {
    id: "elegant",
    name: "Elegant",
    category: "One Column + Photo",
    categories: ["Professional", "Creative"],
    layout: "One Column",
    hasPhoto: true,
    ats: false,
    description:
      "A sophisticated personal-brand resume with a refined profile presentation.",
  },

  {
    id: "academic",
    name: "Academic",
    category: "One Column + Photo",
    categories: ["Professional"],
    layout: "One Column",
    hasPhoto: true,
    ats: false,
    description:
      "A refined academic-style layout for researchers, educators and professionals.",
  },

  {
    id: "aurora",
    name: "Aurora",
    category: "One Column + Photo",
    categories: ["Creative", "Modern"],
    layout: "One Column",
    hasPhoto: true,
    ats: false,
    description:
      "A distinctive personal-brand layout inspired by soft aurora gradients and modern editorial design.",
  },

  {
    id: "monarch",
    name: "Monarch",
    category: "One Column + Photo",
    categories: ["Professional", "Creative"],
    layout: "One Column",
    hasPhoto: true,
    ats: false,
    description:
      "A luxurious executive profile combining deep burgundy, warm champagne and refined typography.",
  },

  /* =======================================================
     TWO COLUMN + PHOTO
  ======================================================= */

  {
    id: "creative",
    name: "Creative",
    category: "Two Column + Photo",
    categories: ["Creative", "Modern"],
    layout: "Two Column",
    hasPhoto: true,
    ats: false,
    description:
      "A visually expressive design created for designers, creators and modern professionals.",
  },

  {
    id: "portfolio",
    name: "Portfolio",
    category: "Two Column + Photo",
    categories: ["Creative"],
    layout: "Two Column",
    hasPhoto: true,
    ats: false,
    description:
      "A portfolio-inspired resume that gives projects and personal branding more visual space.",
  },

  {
    id: "vertex",
    name: "Vertex",
    category: "Two Column + Photo",
    categories: ["Modern", "Creative"],
    layout: "Two Column",
    hasPhoto: true,
    ats: false,
    description:
      "A futuristic technology-inspired resume using geometric sections and electric cyan accents.",
  },

  {
    id: "muse",
    name: "Muse",
    category: "Two Column + Photo",
    categories: ["Creative"],
    layout: "Two Column",
    hasPhoto: true,
    ats: false,
    description:
      "A bold designer-focused resume with artistic typography, expressive shapes and editorial balance.",
  },

  {
    id: "orbit",
    name: "Orbit",
    category: "Two Column + Photo",
    categories: ["Modern", "Creative"],
    layout: "Two Column",
    hasPhoto: true,
    ats: false,
    description:
      "A futuristic personal-brand resume built around circular details, timelines and orbital visual language.",
  },

  {
    id: "noir",
    name: "Noir",
    category: "Two Column + Photo",
    categories: ["Creative", "Professional"],
    layout: "Two Column",
    hasPhoto: true,
    ats: false,
    description:
      "A dramatic luxury resume pairing deep charcoal with warm gold-inspired accents.",
  },

  /* =======================================================
     EXTRA CREATIVE
  ======================================================= */

  {
    id: "coral",
    name: "Coral",
    category: "Two Column + Photo",
    categories: ["Creative", "Modern"],
    layout: "Two Column",
    hasPhoto: true,
    ats: false,
    description:
      "An energetic creative layout using coral accents, soft surfaces and expressive project cards.",
  },

  {
    id: "ocean",
    name: "Ocean",
    category: "Two Column",
    categories: ["Professional", "Modern", "ATS"],
    layout: "Two Column",
    hasPhoto: false,
    ats: true,
    description:
      "A sophisticated deep-blue professional resume with a calm, trustworthy visual language.",
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  "All",
  "One Column",
  "Two Column",
  "One Column + Photo",
  "Two Column + Photo",
  "ATS",
];

/* =========================================================
   SMALL PREVIEW HELPERS
========================================================= */

function ResumeLines({
  count = 3,
  className = "",
  color = "bg-slate-300",
}) {
  const widths = ["w-full", "w-11/12", "w-4/5", "w-9/12"];

  return (
    <div className={`space-y-1 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`h-[3px] rounded-full ${color} ${
            widths[index % widths.length]
          }`}
        />
      ))}
    </div>
  );
}

function TinyText({
  children,
  className = "",
  color = "text-slate-500",
}) {
  return (
    <div
      className={`text-[4px] leading-[1.6] ${color} ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({
  children,
  accent = false,
  centered = false,
  color = "text-slate-900",
}) {
  return (
    <div className={centered ? "text-center" : ""}>
      <div
        className={`text-[6px] font-bold tracking-[0.16em] ${
          accent ? "text-indigo-600" : color
        }`}
      >
        {children}
      </div>

      <div
        className={`mt-1 h-[2px] w-7 rounded-full ${
          accent ? "bg-indigo-300" : "bg-slate-300"
        } ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

function SkillPill({
  children,
  dark = false,
  color = "violet",
}) {
  const styles = {
    violet: dark
      ? "bg-white/10 text-white"
      : "bg-violet-50 text-violet-700",

    emerald: dark
      ? "bg-white/10 text-white"
      : "bg-emerald-50 text-emerald-700",

    blue: dark
      ? "bg-white/10 text-white"
      : "bg-blue-50 text-blue-700",

    coral: dark
      ? "bg-white/10 text-white"
      : "bg-orange-50 text-orange-700",

    gold: dark
      ? "bg-white/10 text-white"
      : "bg-amber-50 text-amber-700",
  };

  return (
    <span
      className={`rounded-full px-2 py-1 text-[4px] font-semibold ${styles[color]}`}
    >
      {children}
    </span>
  );
}

function PhotoCircle({
  large = false,
  ring = "ring-violet-300",
  background = "bg-violet-100",
}) {
  return (
    <div
      className={`rounded-full ${background} ${
        large ? "h-16 w-16" : "h-12 w-12"
      } ring-2 ${ring}`}
    />
  );
}

function Dot({ color = "bg-violet-500" }) {
  return (
    <span
      className={`mx-1 inline-block h-[2px] w-[2px] rounded-full ${color}`}
    />
  );
}

/* =========================================================
   1. CLASSIC
========================================================= */

function ClassicPreview() {
  return (
    <div className="h-full bg-white px-6 py-5">
      <header className="border-b-2 border-slate-900 pb-3">
        <div className="text-[15px] font-extrabold tracking-tight text-slate-900">
          ARWA KHAN
        </div>

        <div className="mt-1 text-[5px] font-semibold tracking-[0.16em] text-indigo-600">
          FRONTEND DEVELOPER
        </div>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[4px] text-slate-500">
          <span>email@example.com</span>
          <span>+92 300 0000000</span>
          <span>Rawalpindi</span>
          <span>LinkedIn</span>
        </div>
      </header>

      <section className="mt-4">
        <SectionTitle>PROFILE</SectionTitle>

        <TinyText className="mt-2">
          Frontend developer focused on building accessible,
          responsive and polished digital experiences.
        </TinyText>
      </section>

      <section className="mt-5">
        <SectionTitle>EXPERIENCE</SectionTitle>

        <div className="mt-2">
          <div className="flex items-baseline justify-between">
            <div className="text-[6px] font-bold">
              Frontend Developer
            </div>

            <div className="text-[4px] text-slate-500">
              2024 — Present
            </div>
          </div>

          <div className="mt-1 text-[4px] font-semibold text-indigo-600">
            Company Name
          </div>

          <div className="mt-2">
            <ResumeLines count={3} />
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-baseline justify-between">
            <div className="text-[6px] font-bold">
              Junior Developer
            </div>

            <div className="text-[4px] text-slate-500">
              2022 — 2024
            </div>
          </div>

          <div className="mt-2">
            <ResumeLines count={2} />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <SectionTitle>EDUCATION</SectionTitle>

        <div className="mt-2 text-[6px] font-bold">
          Bachelor of Computer Science
        </div>

        <div className="mt-1 text-[4px] text-slate-500">
          University Name • 2021 — 2025
        </div>
      </section>

      <section className="mt-5">
        <SectionTitle>SKILLS</SectionTitle>

        <div className="mt-2 flex flex-wrap gap-1">
          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Git",
            "CSS",
            "UI/UX",
          ].map((skill) => (
            <SkillPill key={skill}>
              {skill}
            </SkillPill>
          ))}
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   2. MINIMAL
========================================================= */

function MinimalPreview() {
  return (
    <div className="h-full bg-white px-8 py-9">
      <header className="text-center">
        <div className="text-[16px] font-light tracking-[0.02em] text-slate-900">
          ARWA KHAN
        </div>

        <div className="mt-2 text-[5px] uppercase tracking-[0.3em] text-slate-500">
          Frontend Developer
        </div>

        <div className="mt-3 text-[4px] text-slate-500">
          email@example.com
          <span className="mx-1">•</span>
          +92 300 0000000
          <span className="mx-1">•</span>
          Rawalpindi
        </div>
      </header>

      <div className="mx-auto mt-6 h-px w-12 bg-slate-900" />

      {[
        ["PROFILE", "Creative frontend developer who enjoys transforming ideas into simple, elegant and useful interfaces."],
        ["EXPERIENCE", "Frontend Developer"],
        ["EDUCATION", "Bachelor of Computer Science"],
        ["PROJECTS", "BuildCV"],
      ].map(([title, content], index) => (
        <section key={title} className="mt-7">
          <div className="text-[5px] font-bold tracking-[0.25em]">
            {title}
          </div>

          <div className="mt-3 text-[6px] font-semibold">
            {index === 0 ? (
              <TinyText>{content}</TinyText>
            ) : (
              content
            )}
          </div>

          {index === 1 && (
            <>
              <div className="mt-1 text-[4px] text-slate-500">
                Company Name / 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines count={3} />
              </div>
            </>
          )}

          {index === 2 && (
            <TinyText className="mt-1">
              University Name / 2021 — 2025
            </TinyText>
          )}

          {index === 3 && (
            <div className="mt-2">
              <ResumeLines count={2} />
            </div>
          )}
        </section>
      ))}

      <section className="mt-7">
        <div className="text-[5px] font-bold tracking-[0.25em]">
          SKILLS
        </div>

        <div className="mt-3 text-[4px] text-slate-500">
          React / JavaScript / TypeScript / Git / CSS
        </div>
      </section>
    </div>
  );
}

/* =========================================================
   3. BOLD
========================================================= */

function BoldPreview() {
  return (
    <div className="h-full bg-white p-5">
      <header className="bg-slate-950 px-5 py-6 text-white">
        <div className="text-[19px] font-black leading-none tracking-[-0.04em]">
          ARWA
          <br />
          KHAN
        </div>

        <div className="mt-3 border-l-2 border-fuchsia-400 pl-2 text-[5px] font-bold tracking-[0.2em] text-fuchsia-300">
          FRONTEND DEVELOPER
        </div>

        <div className="mt-5 text-[4px] text-white/60">
          EMAIL • PHONE • LOCATION • LINKEDIN
        </div>
      </header>

      <div className="grid grid-cols-[1.4fr_0.8fr] gap-5 px-1 pt-5">
        <div>
          <section>
            <SectionTitle
              accent
              color="text-slate-900"
            >
              EXPERIENCE
            </SectionTitle>

            <div className="mt-3 text-[7px] font-black">
              Frontend Developer
            </div>

            <div className="mt-1 text-[4px] text-fuchsia-600">
              Company Name
            </div>

            <div className="mt-2">
              <ResumeLines count={4} />
            </div>
          </section>

          <section className="mt-6">
            <SectionTitle
              accent
              color="text-slate-900"
            >
              PROJECTS
            </SectionTitle>

            <div className="mt-3 text-[6px] font-bold">
              BuildCV
            </div>

            <div className="mt-2">
              <ResumeLines count={3} />
            </div>
          </section>
        </div>

        <aside className="border-l border-slate-200 pl-4">
          <SectionTitle
            accent
            color="text-slate-900"
          >
            SKILLS
          </SectionTitle>

          <div className="mt-3 space-y-2">
            {["React", "JavaScript", "TypeScript", "Git"].map(
              (skill) => (
                <div
                  key={skill}
                  className="text-[5px] font-semibold"
                >
                  {skill}
                </div>
              )
            )}
          </div>

          <div className="mt-7">
            <SectionTitle
              accent
              color="text-slate-900"
            >
              EDUCATION
            </SectionTitle>

            <div className="mt-3 text-[5px] font-bold">
              BS Computer Science
            </div>

            <TinyText className="mt-1">
              University Name
            </TinyText>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* =========================================================
   4. CLEAN
========================================================= */

function CleanPreview() {
  return (
    <div className="h-full bg-white px-6 py-6">
      <header className="flex items-end justify-between border-b border-slate-200 pb-4">
        <div>
          <div className="text-[14px] font-extrabold text-slate-900">
            ARWA KHAN
          </div>

          <div className="mt-1 text-[5px] font-semibold text-indigo-600">
            FRONTEND DEVELOPER
          </div>
        </div>

        <div className="text-right text-[4px] leading-[1.7] text-slate-500">
          email@example.com
          <br />
          +92 300 0000000
          <br />
          Rawalpindi
        </div>
      </header>

      <section className="mt-5 rounded-lg bg-slate-50 p-4">
        <div className="text-[5px] font-bold tracking-[0.18em] text-indigo-600">
          ABOUT ME
        </div>

        <TinyText className="mt-2">
          Frontend developer passionate about creating clean,
          responsive and user-friendly digital products.
        </TinyText>
      </section>

      {[
        ["EXPERIENCE", "Frontend Developer", "2024 — NOW"],
        ["EDUCATION", "Bachelor of Computer Science", "2021 — 2025"],
        ["SKILLS", "React • JavaScript • TypeScript • Git", ""],
      ].map(([title, name, date]) => (
        <section key={title} className="mt-6">
          <div className="flex items-center gap-3">
            <div className="text-[6px] font-bold">
              {title}
            </div>

            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="mt-4 grid grid-cols-[55px_1fr] gap-3">
            <div className="text-[4px] font-semibold text-indigo-600">
              {date}
            </div>

            <div>
              <div className="text-[6px] font-bold">
                {name}
              </div>

              {title !== "SKILLS" && (
                <div className="mt-2">
                  <ResumeLines count={3} />
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

/* =========================================================
   5. MODERN
========================================================= */

function ModernPreview() {
  return (
    <div className="flex h-full bg-white">
      <aside className="w-[31%] bg-indigo-600 px-3 py-5 text-white">
        <div className="text-center">
          <div className="mx-auto h-14 w-14 rounded-full bg-white/20 ring-2 ring-white/50" />

          <div className="mt-3 text-[8px] font-extrabold">
            ARWA KHAN
          </div>

          <div className="mt-1 text-[4px] font-medium text-indigo-100">
            FRONTEND DEVELOPER
          </div>
        </div>

        <div className="mt-7">
          <div className="text-[5px] font-bold tracking-[0.15em]">
            CONTACT
          </div>

          <div className="mt-2 space-y-2 text-[4px] text-white/70">
            <div>email@example.com</div>
            <div>+92 300 0000000</div>
            <div>Rawalpindi</div>
            <div>LinkedIn</div>
          </div>
        </div>

        <div className="mt-7">
          <div className="text-[5px] font-bold tracking-[0.15em]">
            SKILLS
          </div>

          <div className="mt-3 space-y-2">
            {["React", "JavaScript", "TypeScript", "Git"].map(
              (skill) => (
                <div key={skill}>
                  <div className="text-[4px] text-white/80">
                    {skill}
                  </div>

                  <div className="mt-1 h-[2px] rounded-full bg-white/20">
                    <div className="h-full w-4/5 rounded-full bg-white" />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </aside>

      <main className="w-[69%] px-5 py-6">
        <SectionTitle accent>PROFILE</SectionTitle>

        <TinyText className="mt-2">
          Product-minded frontend developer building modern,
          responsive and accessible web experiences.
        </TinyText>

        <section className="mt-6">
          <SectionTitle accent>EXPERIENCE</SectionTitle>

          <div className="relative mt-4 border-l-2 border-indigo-100 pl-4">
            <div className="absolute -left-[5px] top-0 h-2 w-2 rounded-full bg-indigo-600" />

            <div className="text-[6px] font-bold">
              Frontend Developer
            </div>

            <div className="mt-1 text-[4px] text-indigo-600">
              Company Name • 2024 — Present
            </div>

            <div className="mt-2">
              <ResumeLines count={4} />
            </div>
          </div>
        </section>

        <section className="mt-6">
          <SectionTitle accent>PROJECTS</SectionTitle>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {["BuildCV", "Portfolio"].map((project) => (
              <div
                key={project}
                className="rounded-md bg-indigo-50 p-2"
              >
                <div className="text-[5px] font-bold">
                  {project}
                </div>

                <TinyText className="mt-1">
                  Modern digital product
                </TinyText>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   6. PROFESSIONAL
========================================================= */

function ProfessionalPreview() {
  return (
    <div className="h-full bg-white">
      <header className="bg-slate-50 px-6 py-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[15px] font-extrabold text-slate-900">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-semibold tracking-[0.15em] text-indigo-600">
              FRONTEND DEVELOPER
            </div>
          </div>

          <div className="text-right text-[4px] leading-[1.8] text-slate-500">
            email@example.com
            <br />
            +92 300 0000000
            <br />
            Rawalpindi
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[0.72fr_1.55fr]">
        <aside className="border-r border-slate-200 px-4 py-5">
          <SectionTitle accent>CORE SKILLS</SectionTitle>

          <div className="mt-3 space-y-2">
            {["React", "JavaScript", "TypeScript", "Git", "CSS"].map(
              (skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-2 text-[4px] font-semibold"
                >
                  <span className="h-1 w-1 rounded-full bg-indigo-600" />
                  {skill}
                </div>
              )
            )}
          </div>

          <div className="mt-7">
            <SectionTitle accent>EDUCATION</SectionTitle>

            <div className="mt-3 text-[5px] font-bold">
              BS Computer Science
            </div>

            <TinyText className="mt-1">
              University Name
            </TinyText>
          </div>

          <div className="mt-7">
            <SectionTitle accent>LANGUAGES</SectionTitle>

            <div className="mt-3 space-y-2 text-[4px]">
              <div>English</div>
              <div>Urdu</div>
            </div>
          </div>
        </aside>

        <main className="px-5 py-5">
          <SectionTitle>PROFESSIONAL SUMMARY</SectionTitle>

          <TinyText className="mt-2">
            Detail-oriented frontend developer with a passion
            for scalable interfaces and thoughtful user
            experiences.
          </TinyText>

          <section className="mt-6">
            <SectionTitle>PROFESSIONAL EXPERIENCE</SectionTitle>

            <div className="mt-3">
              <div className="text-[6px] font-bold">
                Frontend Developer
              </div>

              <div className="mt-1 text-[4px] text-indigo-600">
                Company Name | 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines count={4} />
              </div>
            </div>

            <div className="mt-5">
              <div className="text-[6px] font-bold">
                Junior Developer
              </div>

              <div className="mt-1 text-[4px] text-slate-500">
                Previous Company | 2022 — 2024
              </div>

              <div className="mt-2">
                <ResumeLines count={3} />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   7. EXECUTIVE
========================================================= */

function ExecutivePreview() {
  return (
    <div className="h-full bg-white px-6 py-6">
      <header className="border-b-4 border-slate-900 pb-5">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[18px] font-black tracking-[-0.03em]">
              ARWA KHAN
            </div>

            <div className="mt-2 text-[5px] font-bold uppercase tracking-[0.28em] text-indigo-600">
              FRONTEND DEVELOPER
            </div>
          </div>

          <div className="text-right text-[4px] leading-[1.8] text-slate-500">
            Rawalpindi, Pakistan
            <br />
            email@example.com
            <br />
            +92 300 0000000
          </div>
        </div>
      </header>

      <div className="mt-5 grid grid-cols-[1.6fr_0.7fr] gap-6">
        <main>
          <div className="text-[5px] font-bold tracking-[0.22em] text-indigo-600">
            EXECUTIVE PROFILE
          </div>

          <TinyText className="mt-3">
            Strategic frontend developer combining strong
            technical skills with a product-focused approach
            to digital experiences.
          </TinyText>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.22em]">
              CAREER HISTORY
            </div>

            {[
              ["Lead Frontend Developer", "2024 — Present"],
              ["Frontend Developer", "2022 — 2024"],
            ].map(([role, date]) => (
              <div key={role} className="mt-4">
                <div className="flex justify-between">
                  <div className="text-[6px] font-bold">
                    {role}
                  </div>

                  <div className="text-[4px] text-slate-500">
                    {date}
                  </div>
                </div>

                <div className="mt-1 text-[4px] font-semibold text-indigo-600">
                  Company Name
                </div>

                <div className="mt-2">
                  <ResumeLines count={3} />
                </div>
              </div>
            ))}
          </section>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.22em]">
              SELECTED ACHIEVEMENTS
            </div>

            <div className="mt-3 space-y-2">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex gap-2">
                  <span className="mt-[1px] h-1 w-1 rounded-full bg-indigo-600" />
                  <ResumeLines count={1} />
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className="border-l border-slate-200 pl-4">
          <div className="text-[5px] font-bold tracking-[0.2em] text-indigo-600">
            EXPERTISE
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {[
              "React",
              "UI/UX",
              "Leadership",
              "JavaScript",
              "Strategy",
            ].map((skill) => (
              <SkillPill key={skill}>{skill}</SkillPill>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-[5px] font-bold tracking-[0.2em] text-indigo-600">
              EDUCATION
            </div>

            <div className="mt-3 text-[5px] font-bold">
              Bachelor of Computer Science
            </div>

            <TinyText className="mt-1">
              University Name
            </TinyText>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* =========================================================
   8. TECH PRO
========================================================= */

function TechPreview() {
  return (
    <div className="h-full bg-white">
      <header className="bg-slate-950 px-5 py-5 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[14px] font-black">
              ARWA KHAN
            </div>

            <div className="mt-1 font-mono text-[4px] text-cyan-300">
              &lt;FrontendDeveloper /&gt;
            </div>
          </div>

          <div className="rounded-md bg-white/10 px-3 py-2 text-[4px] text-white/70">
            AVAILABLE FOR WORK
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[0.8fr_1.7fr]">
        <aside className="border-r border-slate-200 bg-slate-50 px-4 py-5">
          <div className="font-mono text-[5px] font-bold text-cyan-600">
            // STACK
          </div>

          <div className="mt-3 space-y-2">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Node.js",
              "Git",
              "CSS",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded bg-white px-2 py-1.5 font-mono text-[4px] font-semibold shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="mt-7">
            <div className="font-mono text-[5px] font-bold text-cyan-600">
              // CONTACT
            </div>

            <div className="mt-3 space-y-2 text-[4px] text-slate-500">
              <div>email@example.com</div>
              <div>github.com/arwa</div>
              <div>linkedin.com/in/arwa</div>
            </div>
          </div>
        </aside>

        <main className="px-5 py-5">
          {["ABOUT", "EXPERIENCE", "PROJECTS"].map(
            (section, index) => (
              <section
                key={section}
                className={index ? "mt-6" : ""}
              >
                <div className="font-mono text-[5px] font-bold text-cyan-600">
                  // {section}
                </div>

                <TinyText className="mt-2">
                  Frontend developer building fast, accessible
                  and scalable web applications.
                </TinyText>

                {section !== "ABOUT" && (
                  <div className="mt-3 rounded border border-slate-200 p-2">
                    <div className="font-mono text-[5px] font-bold">
                      {section === "PROJECTS"
                        ? "BuildCV"
                        : "Frontend Developer"}
                    </div>

                    <div className="mt-2">
                      <ResumeLines count={2} />
                    </div>
                  </div>
                )}
              </section>
            )
          )}
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   9. ELEGANT
========================================================= */

function ElegantPreview() {
  return (
    <div className="h-full bg-white px-7 py-6">
      <header className="text-center">
        <PhotoCircle large />

        <div className="mt-4 font-serif text-[15px] font-semibold tracking-wide text-slate-900">
          ARWA KHAN
        </div>

        <div className="mt-2 text-[5px] uppercase tracking-[0.3em] text-violet-600">
          Frontend Developer
        </div>

        <div className="mt-3 text-[4px] text-slate-500">
          Email <Dot />
          Phone <Dot />
          Rawalpindi <Dot />
          LinkedIn
        </div>
      </header>

      <div className="mx-auto mt-5 h-px w-16 bg-violet-300" />

      {["ABOUT ME", "EXPERIENCE", "EDUCATION", "SKILLS"].map(
        (section) => (
          <section
            key={section}
            className="mt-5"
          >
            <SectionTitle
              accent
              centered
            >
              {section}
            </SectionTitle>

            <div className="mt-3 text-center">
              {section !== "SKILLS" && (
                <>
                  <div className="text-[6px] font-bold">
                    {section === "EXPERIENCE"
                      ? "Frontend Developer"
                      : section === "EDUCATION"
                      ? "Bachelor of Computer Science"
                      : "A thoughtful developer passionate about combining technology, design and storytelling."}
                  </div>

                  <TinyText className="mt-1">
                    {section === "EXPERIENCE"
                      ? "Company Name • 2024 — Present"
                      : section === "EDUCATION"
                      ? "University Name"
                      : ""}
                  </TinyText>
                </>
              )}

              {section === "SKILLS" && (
                <div className="flex flex-wrap justify-center gap-1">
                  {["React", "JavaScript", "UI/UX", "Git", "CSS"].map(
                    (skill) => (
                      <SkillPill key={skill}>
                        {skill}
                      </SkillPill>
                    )
                  )}
                </div>
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
}

/* =========================================================
   10. ACADEMIC
========================================================= */

function AcademicPreview() {
  return (
    <div className="h-full bg-white px-6 py-5">
      <header className="flex items-center gap-4 border-b border-slate-900 pb-4">
        <PhotoCircle />

        <div>
          <div className="text-[13px] font-bold">
            ARWA KHAN
          </div>

          <div className="mt-1 text-[5px] font-semibold text-indigo-600">
            RESEARCHER • DEVELOPER
          </div>

          <div className="mt-2 text-[4px] text-slate-500">
            email@example.com • Rawalpindi • LinkedIn
          </div>
        </div>
      </header>

      {[
        ["RESEARCH INTERESTS", "tags"],
        ["EDUCATION", "education"],
        ["RESEARCH & EXPERIENCE", "experience"],
        ["PUBLICATIONS", "publication"],
        ["TECHNICAL SKILLS", "skills"],
      ].map(([title, type]) => (
        <section key={title} className="mt-5">
          <div className="border-b border-slate-200 pb-1 text-[6px] font-bold">
            {title}
          </div>

          {type === "tags" && (
            <div className="mt-2 flex flex-wrap gap-1">
              {[
                "Artificial Intelligence",
                "Web Development",
                "Data Science",
                "HCI",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-slate-200 px-2 py-1 text-[4px]"
                >
                  {item}
                </span>
              ))}
            </div>
          )}

          {type === "education" && (
            <div className="mt-3">
              <div className="text-[6px] font-bold">
                Bachelor of Computer Science
              </div>

              <TinyText className="mt-1">
                University Name • 2021 — 2025
              </TinyText>
            </div>
          )}

          {type === "experience" && (
            <div className="mt-3">
              <div className="text-[6px] font-bold">
                Research Assistant
              </div>

              <div className="mt-1 text-[4px] text-indigo-600">
                Research Lab • 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines count={3} />
              </div>
            </div>
          )}

          {type === "publication" && (
            <div className="mt-3 space-y-2">
              <div className="text-[5px] font-bold">
                A Novel AI Framework for Business Analytics
              </div>

              <TinyText>
                Conference / Journal • 2026
              </TinyText>

              <div className="text-[5px] font-bold">
                Intelligent Decision Support Systems
              </div>
            </div>
          )}

          {type === "skills" && (
            <TinyText className="mt-2">
              Python • React • JavaScript • SQL • Git • Machine Learning
            </TinyText>
          )}
        </section>
      ))}
    </div>
  );
}

/* =========================================================
   11. CREATIVE
========================================================= */

function CreativePreview() {
  return (
    <div className="flex h-full bg-white">
      <aside className="relative w-[36%] overflow-hidden bg-slate-950 px-4 py-6 text-white">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-fuchsia-500 opacity-80" />

        <div className="relative">
          <div className="h-16 w-16 rounded-2xl bg-fuchsia-100 ring-4 ring-white/10" />

          <div className="mt-4 text-[9px] font-black leading-tight">
            ARWA
            <br />
            KHAN
          </div>

          <div className="mt-2 text-[4px] uppercase tracking-[0.18em] text-fuchsia-300">
            Creative Developer
          </div>

          <div className="mt-8">
            <div className="text-[5px] font-bold tracking-[0.15em] text-fuchsia-300">
              LET'S CONNECT
            </div>

            <div className="mt-3 space-y-2 text-[4px] text-white/65">
              <div>email@example.com</div>
              <div>+92 300 0000000</div>
              <div>Rawalpindi</div>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-[5px] font-bold tracking-[0.15em] text-fuchsia-300">
              TOOLS
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {["Figma", "React", "CSS", "Git", "Adobe"].map(
                (skill) => (
                  <SkillPill
                    key={skill}
                    dark
                  >
                    {skill}
                  </SkillPill>
                )
              )}
            </div>
          </div>
        </div>
      </aside>

      <main className="w-[64%] px-5 py-6">
        <div className="text-[5px] font-bold tracking-[0.2em] text-fuchsia-600">
          HELLO
        </div>

        <div className="mt-2 text-[8px] font-extrabold leading-tight">
          I create digital
          <br />
          experiences people
          <br />
          remember.
        </div>

        <TinyText className="mt-3">
          Frontend developer combining visual design with
          modern web technologies.
        </TinyText>

        <section className="mt-6">
          <SectionTitle
            accent
            color="text-slate-900"
          >
            EXPERIENCE
          </SectionTitle>

          <div className="mt-3">
            <div className="text-[6px] font-bold">
              Frontend Developer
            </div>

            <div className="mt-1 text-[4px] text-slate-500">
              Company Name • 2024 — Present
            </div>

            <div className="mt-2">
              <ResumeLines count={3} />
            </div>
          </div>
        </section>

        <section className="mt-6">
          <SectionTitle
            accent
            color="text-slate-900"
          >
            FEATURED WORK
          </SectionTitle>

          <div className="mt-3 space-y-2">
            <div className="rounded-lg bg-fuchsia-50 p-3">
              <div className="text-[6px] font-bold">
                BuildCV
              </div>

              <TinyText className="mt-1">
                Professional resume builder
              </TinyText>

              <div className="mt-2 flex gap-1">
                <SkillPill>React</SkillPill>
                <SkillPill>UI</SkillPill>
              </div>
            </div>

            <div className="rounded-lg border border-slate-200 p-3">
              <div className="text-[6px] font-bold">
                Portfolio
              </div>

              <TinyText className="mt-1">
                Personal creative website
              </TinyText>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* =========================================================
   12. PORTFOLIO
========================================================= */

function PortfolioPreview() {
  return (
    <div className="h-full bg-white">
      <header className="relative overflow-hidden bg-violet-50 px-6 py-5">
        <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-indigo-200" />

        <div className="relative flex items-center gap-4">
          <PhotoCircle />

          <div>
            <div className="text-[13px] font-black text-slate-900">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-semibold text-violet-700">
              FRONTEND DEVELOPER
            </div>

            <TinyText className="mt-2">
              Building thoughtful digital products.
            </TinyText>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[1.45fr_0.75fr] gap-5 px-5 py-5">
        <main>
          <div className="text-[5px] font-bold tracking-[0.2em] text-violet-700">
            SELECTED PROJECTS
          </div>

          <div className="mt-3 space-y-3">
            {["BuildCV", "Portfolio", "Dashboard"].map(
              (project, index) => (
                <div
                  key={project}
                  className="rounded-xl border border-slate-200 p-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-[7px] font-extrabold">
                      {project}
                    </div>

                    <span className="rounded-full bg-violet-50 px-2 py-1 text-[3.5px] font-bold text-violet-700">
                      0{index + 1}
                    </span>
                  </div>

                  <TinyText className="mt-2">
                    A modern digital product showcasing
                    development and design.
                  </TinyText>
                </div>
              )
            )}
          </div>
        </main>

        <aside className="border-l border-slate-200 pl-4">
          <div className="text-[5px] font-bold tracking-[0.2em] text-violet-700">
            ABOUT
          </div>

          <TinyText className="mt-3">
            Developer passionate about clean interfaces,
            thoughtful UX and modern technologies.
          </TinyText>

          <div className="mt-7">
            <div className="text-[5px] font-bold tracking-[0.2em] text-violet-700">
              EXPERIENCE
            </div>

            <div className="mt-3 text-[5px] font-bold">
              Frontend Developer
            </div>

            <TinyText className="mt-1">
              Company Name
            </TinyText>
          </div>

          <div className="mt-7">
            <div className="text-[5px] font-bold tracking-[0.2em] text-violet-700">
              SKILLS
            </div>

            <div className="mt-3 flex flex-wrap gap-1">
              {["React", "JS", "TS", "Git", "Figma"].map(
                (skill) => (
                  <SkillPill key={skill}>{skill}</SkillPill>
                )
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* =========================================================
   13. AURORA
========================================================= */

function AuroraPreview() {
  return (
    <div className="h-full bg-white">
      <header className="relative overflow-hidden px-6 py-6">
        <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-teal-200 blur-2xl" />
        <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-indigo-200 blur-2xl" />

        <div className="relative flex items-center gap-4">
          <div className="rounded-full bg-white p-1 shadow-lg">
            <PhotoCircle
              ring="ring-teal-300"
              background="bg-teal-100"
            />
          </div>

          <div>
            <div className="text-[15px] font-black tracking-tight text-slate-900">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-bold tracking-[0.2em] text-teal-700">
              CREATIVE DEVELOPER
            </div>

            <div className="mt-2 text-[4px] text-slate-500">
              Digital experiences • Frontend • Product
            </div>
          </div>
        </div>
      </header>

      <div className="mx-6 h-[2px] rounded-full bg-gradient-to-r from-teal-400 via-indigo-400 to-transparent" />

      <main className="px-6 py-5">
        <div className="grid grid-cols-[1.5fr_0.7fr] gap-5">
          <div>
            <section>
              <div className="text-[5px] font-black tracking-[0.2em] text-teal-700">
                THE PROFILE
              </div>

              <div className="mt-2 text-[8px] font-extrabold leading-tight text-slate-900">
                Designing interfaces
                <br />
                with clarity and soul.
              </div>

              <TinyText className="mt-3">
                Frontend developer blending technology,
                interaction and visual design.
              </TinyText>
            </section>

            <section className="mt-6">
              <div className="text-[5px] font-black tracking-[0.2em] text-teal-700">
                EXPERIENCE
              </div>

              <div className="mt-3 rounded-xl bg-slate-50 p-3">
                <div className="text-[6px] font-bold">
                  Frontend Developer
                </div>

                <div className="mt-1 text-[4px] text-teal-700">
                  Company Name • 2024 — Present
                </div>

                <div className="mt-2">
                  <ResumeLines count={3} />
                </div>
              </div>
            </section>
          </div>

          <aside className="rounded-2xl bg-slate-950 p-4 text-white">
            <div className="text-[5px] font-bold tracking-[0.18em] text-teal-300">
              EXPERTISE
            </div>

            <div className="mt-4 space-y-3">
              {["React", "UI/UX", "JavaScript", "Figma"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="border-b border-white/10 pb-2 text-[5px]"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>

            <div className="mt-8 text-[4px] text-white/60">
              email@example.com
              <br />
              Rawalpindi
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   14. MONARCH
========================================================= */

function MonarchPreview() {
  return (
    <div className="h-full bg-[#faf7f2]">
      <header className="bg-[#4b1720] px-6 py-7 text-[#fff8ed]">
        <div className="flex items-center gap-4">
          <div className="rounded-full border border-[#d9bd82] p-1">
            <PhotoCircle
              ring="ring-[#d9bd82]"
              background="bg-[#f0dfb8]"
            />
          </div>

          <div>
            <div className="font-serif text-[16px] font-bold tracking-wide">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-semibold tracking-[0.3em] text-[#e3c98e]">
              EXECUTIVE DEVELOPER
            </div>
          </div>
        </div>
      </header>

      <div className="px-6 py-5">
        <div className="grid grid-cols-[1.4fr_0.75fr] gap-5">
          <main>
            <div className="font-serif text-[8px] font-bold text-[#4b1720]">
              PROFESSIONAL PROFILE
            </div>

            <TinyText
              className="mt-3"
              color="text-[#725e5e]"
            >
              Strategic technology professional creating
              elegant digital products and leading meaningful
              experiences.
            </TinyText>

            <section className="mt-6">
              <div className="border-b border-[#d9bd82] pb-2 font-serif text-[6px] font-bold text-[#4b1720]">
                CAREER
              </div>

              {[
                "Senior Frontend Developer",
                "Frontend Developer",
              ].map((role) => (
                <div key={role} className="mt-4">
                  <div className="text-[6px] font-bold text-[#3f2930]">
                    {role}
                  </div>

                  <div className="mt-1 text-[4px] text-[#8c6d39]">
                    Company Name • 2024 — Present
                  </div>

                  <div className="mt-2">
                    <ResumeLines
                      count={3}
                      color="bg-[#decfc5]"
                    />
                  </div>
                </div>
              ))}
            </section>
          </main>

          <aside className="border-l border-[#dfcdbb] pl-4">
            <div className="text-[5px] font-bold tracking-[0.18em] text-[#8c6d39]">
              SIGNATURE SKILLS
            </div>

            <div className="mt-4 flex flex-wrap gap-1">
              {[
                "Leadership",
                "React",
                "Strategy",
                "UX",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-[#eadbbf] px-2 py-1 text-[4px] font-semibold text-[#4b1720]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 text-[5px] font-bold tracking-[0.18em] text-[#8c6d39]">
              EDUCATION
            </div>

            <div className="mt-3 text-[5px] font-bold text-[#3f2930]">
              Bachelor of Computer Science
            </div>

            <TinyText
              className="mt-1"
              color="text-[#725e5e]"
            >
              University Name
            </TinyText>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   15. NEXUS
========================================================= */

function NexusPreview() {
  return (
    <div className="h-full bg-white">
      <header className="px-6 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[17px] font-black text-[#123b72]">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-bold tracking-[0.2em] text-blue-600">
              FRONTEND ENGINEER
            </div>
          </div>

          <div className="h-8 w-8 rounded-lg bg-blue-600" />
        </div>

        <div className="mt-5 grid grid-cols-3 gap-2">
          {["React", "TypeScript", "UI Systems"].map(
            (item) => (
              <div
                key={item}
                className="rounded-lg bg-blue-50 px-2 py-2 text-center text-[4px] font-bold text-blue-700"
              >
                {item}
              </div>
            )
          )}
        </div>
      </header>

      <div className="mt-5 grid grid-cols-[0.7fr_1.5fr]">
        <aside className="bg-[#123b72] px-4 py-5 text-white">
          <div className="text-[5px] font-bold tracking-[0.15em] text-blue-200">
            CONTACT
          </div>

          <div className="mt-3 space-y-2 text-[4px] text-white/70">
            <div>email@example.com</div>
            <div>+92 300 0000000</div>
            <div>Rawalpindi</div>
          </div>

          <div className="mt-7 text-[5px] font-bold tracking-[0.15em] text-blue-200">
            SKILLS
          </div>

          <div className="mt-3 space-y-2">
            {["React", "Next.js", "Node", "Git"].map(
              (skill) => (
                <div
                  key={skill}
                  className="text-[4px]"
                >
                  {skill}
                </div>
              )
            )}
          </div>
        </aside>

        <main className="px-5 py-5">
          <div className="text-[5px] font-bold tracking-[0.2em] text-blue-600">
            PROFESSIONAL SUMMARY
          </div>

          <TinyText className="mt-2">
            Product-focused frontend engineer creating scalable
            interfaces and thoughtful user experiences.
          </TinyText>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-blue-600">
              EXPERIENCE
            </div>

            <div className="mt-3">
              <div className="text-[6px] font-bold">
                Frontend Engineer
              </div>

              <div className="mt-1 text-[4px] text-slate-500">
                Company Name • 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines count={4} />
              </div>
            </div>
          </section>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-blue-600">
              PROJECTS
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {["BuildCV", "Analytics"].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-blue-100 p-2"
                >
                  <div className="text-[5px] font-bold">
                    {item}
                  </div>

                  <TinyText className="mt-1">
                    Selected project
                  </TinyText>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   16. SAGE
========================================================= */

function SagePreview() {
  return (
    <div className="h-full bg-[#fbfcf8] px-6 py-6">
      <header className="border-b-2 border-emerald-900 pb-5">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[17px] font-black text-emerald-950">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-bold tracking-[0.22em] text-emerald-700">
              PRODUCT DEVELOPER
            </div>
          </div>

          <div className="text-right text-[4px] leading-[1.7] text-slate-500">
            email@example.com
            <br />
            Rawalpindi
            <br />
            LinkedIn
          </div>
        </div>
      </header>

      <div className="mt-5 grid grid-cols-[0.72fr_1.5fr] gap-5">
        <aside className="rounded-2xl bg-emerald-950 p-4 text-white">
          <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-300">
            SKILLS
          </div>

          <div className="mt-4 space-y-3">
            {["React", "Product Design", "JavaScript", "Figma"].map(
              (skill) => (
                <div key={skill}>
                  <div className="text-[4px]">
                    {skill}
                  </div>

                  <div className="mt-1 h-[2px] rounded-full bg-white/20">
                    <div className="h-full w-4/5 rounded-full bg-emerald-300" />
                  </div>
                </div>
              )
            )}
          </div>

          <div className="mt-8 text-[5px] font-bold tracking-[0.2em] text-emerald-300">
            EDUCATION
          </div>

          <TinyText
            className="mt-3"
            color="text-white/60"
          >
            Bachelor of Computer Science
          </TinyText>
        </aside>

        <main>
          <div className="rounded-2xl bg-emerald-50 p-4">
            <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-800">
              PROFILE
            </div>

            <TinyText className="mt-2">
              Thoughtful product developer creating useful,
              accessible and elegant digital experiences.
            </TinyText>
          </div>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-800">
              EXPERIENCE
            </div>

            <div className="mt-3 border-l-2 border-emerald-200 pl-4">
              <div className="text-[6px] font-bold">
                Frontend Developer
              </div>

              <div className="mt-1 text-[4px] text-emerald-700">
                Company Name • 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines
                  count={4}
                  color="bg-emerald-200"
                />
              </div>
            </div>
          </section>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-emerald-800">
              SELECTED WORK
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {["BuildCV", "Portfolio"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-emerald-100 bg-white p-3"
                >
                  <div className="text-[5px] font-bold">
                    {item}
                  </div>

                  <TinyText className="mt-1">
                    Digital product
                  </TinyText>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   17. VERTEX
========================================================= */

function VertexPreview() {
  return (
    <div className="h-full bg-[#f7fbfc]">
      <header className="relative overflow-hidden bg-slate-950 px-5 py-6 text-white">
        <div className="absolute right-0 top-0 h-24 w-24 border-l border-b border-cyan-400/40" />

        <div className="relative flex items-center gap-4">
          <div className="h-14 w-14 rotate-45 border-2 border-cyan-300 p-2">
            <div className="h-full w-full -rotate-45 bg-cyan-100" />
          </div>

          <div>
            <div className="text-[14px] font-black">
              ARWA KHAN
            </div>

            <div className="mt-1 font-mono text-[4px] tracking-[0.2em] text-cyan-300">
              DIGITAL ENGINEER
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[0.75fr_1.5fr]">
        <aside className="border-r border-cyan-100 bg-white px-4 py-5">
          <div className="font-mono text-[5px] font-bold text-cyan-700">
            SYSTEM
          </div>

          <div className="mt-4 space-y-2">
            {["React", "TypeScript", "Node.js", "Git"].map(
              (skill) => (
                <div
                  key={skill}
                  className="border-l-2 border-cyan-400 bg-cyan-50 px-2 py-2 font-mono text-[4px] font-bold"
                >
                  {skill}
                </div>
              )
            )}
          </div>

          <div className="mt-8 font-mono text-[5px] font-bold text-cyan-700">
            CONNECT
          </div>

          <TinyText className="mt-3">
            email@example.com
            <br />
            github.com/arwa
            <br />
            Rawalpindi
          </TinyText>
        </aside>

        <main className="px-5 py-5">
          <div className="font-mono text-[5px] font-bold text-cyan-700">
            01 / PROFILE
          </div>

          <div className="mt-2 text-[7px] font-extrabold leading-tight">
            Building digital systems
            <br />
            with precision.
          </div>

          <TinyText className="mt-3">
            Frontend developer focused on performant interfaces,
            design systems and modern architecture.
          </TinyText>

          <section className="mt-6">
            <div className="font-mono text-[5px] font-bold text-cyan-700">
              02 / EXPERIENCE
            </div>

            <div className="mt-3 rounded-lg border border-cyan-100 bg-white p-3">
              <div className="text-[6px] font-bold">
                Frontend Developer
              </div>

              <div className="mt-1 font-mono text-[4px] text-cyan-700">
                Company Name • 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines count={3} />
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className="font-mono text-[5px] font-bold text-cyan-700">
              03 / PROJECTS
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {["BuildCV", "AI Platform"].map((project) => (
                <div
                  key={project}
                  className="border border-slate-200 p-2"
                >
                  <div className="font-mono text-[5px] font-bold">
                    {project}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   18. MUSE
========================================================= */

function MusePreview() {
  return (
    <div className="h-full bg-[#fffaf8]">
      <header className="relative px-6 py-6">
        <div className="absolute right-0 top-0 h-28 w-28 rounded-bl-[60px] bg-orange-200" />

        <div className="relative">
          <PhotoCircle
            large
            ring="ring-orange-300"
            background="bg-orange-100"
          />

          <div className="mt-4 text-[19px] font-black leading-none text-slate-900">
            ARWA
            <br />
            KHAN
          </div>

          <div className="mt-2 inline-block rounded-full bg-orange-500 px-3 py-1 text-[4px] font-bold text-white">
            CREATIVE DEVELOPER
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[0.65fr_1.55fr]">
        <aside className="bg-slate-900 px-4 py-5 text-white">
          <div className="text-[5px] font-bold tracking-[0.2em] text-orange-300">
            ABOUT
          </div>

          <TinyText
            className="mt-3"
            color="text-white/60"
          >
            Designer and developer turning ideas into memorable
            digital experiences.
          </TinyText>

          <div className="mt-7 text-[5px] font-bold tracking-[0.2em] text-orange-300">
            TOOLS
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {["Figma", "React", "Adobe", "GSAP"].map(
              (skill) => (
                <SkillPill
                  key={skill}
                  dark
                  color="coral"
                >
                  {skill}
                </SkillPill>
              )
            )}
          </div>

          <div className="mt-8 text-[5px] font-bold tracking-[0.2em] text-orange-300">
            CONTACT
          </div>

          <TinyText
            className="mt-3"
            color="text-white/60"
          >
            email@example.com
            <br />
            Rawalpindi
          </TinyText>
        </aside>

        <main className="px-5 py-5">
          <div className="text-[5px] font-bold tracking-[0.2em] text-orange-600">
            SELECTED EXPERIENCE
          </div>

          <div className="mt-3">
            <div className="text-[7px] font-black">
              Frontend Developer
            </div>

            <div className="mt-1 text-[4px] text-orange-600">
              Company Name • 2024 — Present
            </div>

            <div className="mt-3">
              <ResumeLines
                count={4}
                color="bg-orange-100"
              />
            </div>
          </div>

          <div className="mt-6 text-[5px] font-bold tracking-[0.2em] text-orange-600">
            CREATIVE WORK
          </div>

          <div className="mt-3 space-y-2">
            {["BuildCV", "Brand Website", "Portfolio"].map(
              (project, index) => (
                <div
                  key={project}
                  className={`rounded-xl p-3 ${
                    index === 0
                      ? "bg-orange-100"
                      : "border border-orange-100 bg-white"
                  }`}
                >
                  <div className="text-[6px] font-black">
                    {project}
                  </div>

                  <TinyText className="mt-1">
                    Visual identity and digital experience
                  </TinyText>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   19. ORBIT
========================================================= */

function OrbitPreview() {
  return (
    <div className="h-full bg-slate-950 text-white">
      <header className="relative overflow-hidden px-6 py-6">
        <div className="absolute right-[-25px] top-[-25px] h-28 w-28 rounded-full border border-cyan-400/30">
          <div className="absolute inset-3 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-8 rounded-full bg-cyan-400" />
        </div>

        <div className="relative">
          <PhotoCircle
            large
            ring="ring-cyan-300"
            background="bg-cyan-100"
          />

          <div className="mt-4 text-[16px] font-black">
            ARWA KHAN
          </div>

          <div className="mt-1 font-mono text-[5px] tracking-[0.2em] text-cyan-300">
            PRODUCT ENGINEER
          </div>
        </div>
      </header>

      <main className="px-6 py-4">
        <div className="grid grid-cols-[1.45fr_0.7fr] gap-5">
          <section>
            <div className="font-mono text-[5px] font-bold text-cyan-300">
              CAREER ORBIT
            </div>

            <div className="relative mt-4 border-l border-cyan-400/30 pl-5">
              {[
                ["2024", "Frontend Developer"],
                ["2022", "Junior Developer"],
                ["2021", "Computer Science"],
              ].map(([year, title]) => (
                <div
                  key={year}
                  className="relative mb-5"
                >
                  <div className="absolute -left-[25px] top-0 h-3 w-3 rounded-full border border-cyan-300 bg-slate-950" />

                  <div className="font-mono text-[4px] text-cyan-300">
                    {year}
                  </div>

                  <div className="mt-1 text-[6px] font-bold">
                    {title}
                  </div>

                  <div className="mt-2">
                    <ResumeLines
                      count={2}
                      color="bg-white/10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <aside>
            <div className="font-mono text-[5px] font-bold text-cyan-300">
              SKILLS
            </div>

            <div className="mt-4 space-y-2">
              {["React", "TypeScript", "Node", "Figma"].map(
                (skill) => (
                  <div
                    key={skill}
                    className="rounded-lg border border-white/10 px-3 py-2 text-[4px]"
                  >
                    {skill}
                  </div>
                )
              )}
            </div>

            <div className="mt-7 font-mono text-[5px] text-cyan-300">
              CONTACT
            </div>

            <TinyText
              className="mt-3"
              color="text-white/50"
            >
              email@example.com
              <br />
              Rawalpindi
            </TinyText>
          </aside>
        </div>
      </main>
    </div>
  );
}

/* =========================================================
   20. NOIR
========================================================= */

function NoirPreview() {
  return (
    <div className="h-full bg-[#111111] text-white">
      <header className="border-b border-white/10 px-6 py-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="font-serif text-[18px] font-bold tracking-wide">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] tracking-[0.3em] text-amber-300">
              CREATIVE TECHNOLOGIST
            </div>
          </div>

          <PhotoCircle
            ring="ring-amber-300"
            background="bg-amber-100"
          />
        </div>

        <div className="mt-5 text-[4px] text-white/50">
          email@example.com • Rawalpindi • LinkedIn
        </div>
      </header>

      <div className="grid grid-cols-[1.45fr_0.7fr]">
        <main className="px-6 py-5">
          <div className="text-[5px] font-bold tracking-[0.22em] text-amber-300">
            PROFILE
          </div>

          <div className="mt-3 font-serif text-[8px] leading-tight">
            Technology with
            <br />
            personality.
          </div>

          <TinyText
            className="mt-3"
            color="text-white/50"
          >
            Developer creating refined digital experiences
            where engineering meets visual storytelling.
          </TinyText>

          <section className="mt-7">
            <div className="text-[5px] font-bold tracking-[0.22em] text-amber-300">
              EXPERIENCE
            </div>

            <div className="mt-3">
              <div className="text-[6px] font-bold">
                Frontend Developer
              </div>

              <div className="mt-1 text-[4px] text-amber-200/70">
                Company Name • 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines
                  count={4}
                  color="bg-white/10"
                />
              </div>
            </div>
          </section>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.22em] text-amber-300">
              SELECTED WORK
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {["BuildCV", "Portfolio"].map((project) => (
                <div
                  key={project}
                  className="border border-white/10 p-3"
                >
                  <div className="font-serif text-[6px] font-bold">
                    {project}
                  </div>

                  <TinyText
                    className="mt-1"
                    color="text-white/40"
                  >
                    Digital experience
                  </TinyText>
                </div>
              ))}
            </div>
          </section>
        </main>

        <aside className="border-l border-white/10 px-4 py-5">
          <div className="text-[5px] font-bold tracking-[0.2em] text-amber-300">
            EXPERTISE
          </div>

          <div className="mt-4 space-y-3">
            {["React", "UI Design", "JavaScript", "Strategy"].map(
              (skill) => (
                <div
                  key={skill}
                  className="border-b border-white/10 pb-2 text-[5px]"
                >
                  {skill}
                </div>
              )
            )}
          </div>

          <div className="mt-8 text-[5px] font-bold tracking-[0.2em] text-amber-300">
            EDUCATION
          </div>

          <TinyText
            className="mt-3"
            color="text-white/50"
          >
            Bachelor of Computer Science
          </TinyText>
        </aside>
      </div>
    </div>
  );
}

/* =========================================================
   21. CORAL
========================================================= */

function CoralPreview() {
  return (
    <div className="h-full bg-[#fff9f7]">
      <header className="relative overflow-hidden bg-[#ff6b5f] px-6 py-6 text-white">
        <div className="absolute -right-10 -bottom-12 h-32 w-32 rounded-full border-[14px] border-white/20" />

        <div className="relative flex items-center gap-4">
          <PhotoCircle
            ring="ring-white"
            background="bg-orange-100"
          />

          <div>
            <div className="text-[15px] font-black">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-bold tracking-[0.2em] text-white/80">
              CREATIVE DEVELOPER
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[0.7fr_1.5fr]">
        <aside className="bg-[#242424] px-4 py-5 text-white">
          <div className="text-[5px] font-bold tracking-[0.2em] text-orange-300">
            CONTACT
          </div>

          <TinyText
            className="mt-3"
            color="text-white/60"
          >
            email@example.com
            <br />
            +92 300 0000000
            <br />
            Rawalpindi
          </TinyText>

          <div className="mt-8 text-[5px] font-bold tracking-[0.2em] text-orange-300">
            SKILLS
          </div>

          <div className="mt-3 flex flex-wrap gap-1">
            {["React", "Figma", "CSS", "GSAP"].map(
              (skill) => (
                <SkillPill
                  key={skill}
                  dark
                  color="coral"
                >
                  {skill}
                </SkillPill>
              )
            )}
          </div>
        </aside>

        <main className="px-5 py-5">
          <div className="text-[5px] font-bold tracking-[0.2em] text-[#ff5549]">
            HELLO
          </div>

          <div className="mt-2 text-[8px] font-black leading-tight">
            I design.
            <br />
            I build.
            <br />
            I remember.
          </div>

          <TinyText className="mt-3">
            Frontend developer creating expressive interfaces
            with thoughtful user experiences.
          </TinyText>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#ff5549]">
              EXPERIENCE
            </div>

            <div className="mt-3 rounded-xl bg-orange-50 p-3">
              <div className="text-[6px] font-bold">
                Frontend Developer
              </div>

              <div className="mt-1 text-[4px] text-[#ff5549]">
                Company Name • 2024 — Present
              </div>

              <div className="mt-2">
                <ResumeLines
                  count={3}
                  color="bg-orange-200"
                />
              </div>
            </div>
          </section>

          <section className="mt-5">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#ff5549]">
              PROJECTS
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {["BuildCV", "Branding"].map((project) => (
                <div
                  key={project}
                  className="rounded-xl border border-orange-100 p-3"
                >
                  <div className="text-[6px] font-bold">
                    {project}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   22. OCEAN
========================================================= */

function OceanPreview() {
  return (
    <div className="h-full bg-white">
      <header className="bg-[#082f49] px-6 py-6 text-white">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[17px] font-black">
              ARWA KHAN
            </div>

            <div className="mt-1 text-[5px] font-semibold tracking-[0.22em] text-cyan-200">
              FRONTEND SPECIALIST
            </div>
          </div>

          <div className="text-right text-[4px] leading-[1.7] text-white/60">
            email@example.com
            <br />
            Rawalpindi
            <br />
            LinkedIn
          </div>
        </div>
      </header>

      <div className="grid grid-cols-[0.72fr_1.5fr]">
        <aside className="bg-[#e8f6fb] px-4 py-5">
          <div className="text-[5px] font-bold tracking-[0.18em] text-[#087ea4]">
            EXPERTISE
          </div>

          <div className="mt-3 space-y-2">
            {[
              "React",
              "JavaScript",
              "TypeScript",
              "Design Systems",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-lg bg-white px-2 py-2 text-[4px] font-semibold text-slate-700"
              >
                {skill}
              </div>
            ))}
          </div>

          <div className="mt-8 text-[5px] font-bold tracking-[0.18em] text-[#087ea4]">
            EDUCATION
          </div>

          <TinyText className="mt-3">
            Bachelor of Computer Science
          </TinyText>
        </aside>

        <main className="px-5 py-5">
          <div className="rounded-2xl bg-[#f0fafc] p-4">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#087ea4]">
              PROFESSIONAL PROFILE
            </div>

            <TinyText className="mt-2">
              Frontend specialist building fast, accessible and
              reliable digital products.
            </TinyText>
          </div>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#087ea4]">
              EXPERIENCE
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between">
                <div className="text-[6px] font-bold">
                  Frontend Developer
                </div>

                <div className="text-[4px] text-slate-500">
                  2024 — Present
                </div>
              </div>

              <div className="mt-1 text-[4px] font-semibold text-[#087ea4]">
                Company Name
              </div>

              <div className="mt-2">
                <ResumeLines
                  count={4}
                  color="bg-cyan-100"
                />
              </div>
            </div>
          </section>

          <section className="mt-6">
            <div className="text-[5px] font-bold tracking-[0.2em] text-[#087ea4]">
              PROJECTS
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2">
              {["BuildCV", "Dashboard"].map((project) => (
                <div
                  key={project}
                  className="rounded-xl border border-cyan-100 p-3"
                >
                  <div className="text-[6px] font-bold">
                    {project}
                  </div>

                  <TinyText className="mt-1">
                    Selected project
                  </TinyText>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

/* =========================================================
   TEMPLATE PREVIEW ROUTER
========================================================= */

function TemplatePreview({ template }) {
  switch (template.id) {
    case "classic":
      return <ClassicPreview />;

    case "minimal":
      return <MinimalPreview />;

    case "bold":
      return <BoldPreview />;

    case "clean":
      return <CleanPreview />;

    case "modern":
      return <ModernPreview />;

    case "professional":
      return <ProfessionalPreview />;

    case "executive":
      return <ExecutivePreview />;

    case "tech":
      return <TechPreview />;

    case "elegant":
      return <ElegantPreview />;

    case "academic":
      return <AcademicPreview />;

    case "creative":
      return <CreativePreview />;

    case "portfolio":
      return <PortfolioPreview />;

    case "aurora":
      return <AuroraPreview />;

    case "monarch":
      return <MonarchPreview />;

    case "nexus":
      return <NexusPreview />;

    case "sage":
      return <SagePreview />;

    case "vertex":
      return <VertexPreview />;

    case "muse":
      return <MusePreview />;

    case "orbit":
      return <OrbitPreview />;

    case "noir":
      return <NoirPreview />;

    case "coral":
      return <CoralPreview />;

    case "ocean":
      return <OceanPreview />;

    default:
      return <ClassicPreview />;
  }
}

/* =========================================================
   TEMPLATE CARD
========================================================= */

function TemplateCard({
  template,
  onPreview,
  onUse,
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="relative h-[410px] overflow-hidden bg-slate-100 p-5">
        <div className="mx-auto h-full max-w-[270px] overflow-hidden rounded-lg bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
          <TemplatePreview template={template} />
        </div>

        <div className="absolute left-5 top-5 flex flex-col gap-2">
          {template.ats && (
            <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-[10px] font-bold text-emerald-700 shadow-sm">
              ATS
            </span>
          )}

          {template.hasPhoto && (
            <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-[10px] font-bold text-slate-600 shadow-sm">
              Photo
            </span>
          )}
        </div>

        <span className="absolute right-5 top-5 rounded-full bg-white px-3 py-1 text-[10px] font-bold text-indigo-600 shadow-sm">
          FREE
        </span>

        <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            onClick={() => onPreview(template)}
            className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-900 shadow-xl transition hover:scale-105 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Preview Template
          </button>
        </div>
      </div>

      <div className="border-t border-slate-200 p-5">
        <div>
          <h3 className="font-display text-lg font-bold text-slate-900">
            {template.name}
          </h3>

          <p className="mt-1 text-xs font-medium text-slate-500">
            {template.category}
            {" • "}
            {template.hasPhoto
              ? "With Photo"
              : "Without Photo"}
          </p>
        </div>

        <p className="mt-3 min-h-[42px] text-sm leading-5 text-slate-600">
          {template.description}
        </p>

        <div className="mt-5 flex gap-2">
          <button
            type="button"
            onClick={() => onPreview(template)}
            className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
          >
            Preview
          </button>

          <button
            type="button"
            onClick={() => onUse(template)}
            className="flex-1 rounded-xl bg-indigo-600 px-3 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
          >
            Use Template
          </button>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PREVIEW MODAL
========================================================= */

function PreviewModal({
  template,
  onClose,
  onUse,
}) {
  if (!template) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="font-display text-lg font-bold text-slate-900 sm:text-xl">
                {template.name}
              </h2>

              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
                FREE
              </span>
            </div>

            <p className="mt-1 text-xs text-slate-500 sm:text-sm">
              {template.category}
              {template.hasPhoto
                ? " • Profile Photo"
                : " • No Photo"}
              {template.ats
                ? " • ATS-Friendly"
                : ""}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-slate-400 transition hover:bg-slate-100 hover:text-slate-900"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-slate-100 p-5 sm:p-8">
          <div className="mx-auto aspect-[210/297] w-full max-w-[620px] overflow-hidden rounded-lg bg-white shadow-2xl">
            <TemplatePreview template={template} />
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-slate-200 bg-white p-4 sm:flex-row sm:justify-end sm:p-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
          >
            Continue Browsing
          </button>

          <button
            type="button"
            onClick={() => onUse(template)}
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
          >
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN TEMPLATES PAGE
========================================================= */

export default function Templates() {
  const navigate = useNavigate();

  const [activeFilter, setActiveFilter] =
    useState("All");

  const [previewTemplate, setPreviewTemplate] =
    useState(null);

  const filteredTemplates = useMemo(() => {
    if (activeFilter === "All") {
      return templates;
    }

    if (activeFilter === "ATS") {
      return templates.filter(
        (template) => template.ats
      );
    }

    return templates.filter(
      (template) =>
        template.category === activeFilter
    );
  }, [activeFilter]);

  const handleUseTemplate = (template) => {
    localStorage.setItem(
      "buildcv-selected-template",
      template.id
    );

    localStorage.setItem(
      "buildcv-template",
      template.id
    );

    setPreviewTemplate(null);

    navigate("/builder", {
      state: {
        selectedTemplate: template.id,
      },
    });
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* ===================================================
          HERO
      =================================================== */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[430px] w-[430px] -translate-x-1/2 rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="pointer-events-none absolute left-[10%] top-[40%] h-32 w-32 rounded-full bg-fuchsia-200/20 blur-3xl" />

        <div className="pointer-events-none absolute right-[10%] top-[30%] h-32 w-32 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <span className="inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-700">
            24 Beautiful Templates • 100% Free
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Your Resume Should Look
            <span className="ml-2 bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore a collection of carefully designed resume
            templates — from timeless professional layouts to
            bold creative experiences.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold text-slate-500">
            <span>✦ 24 Unique Designs</span>
            <span>•</span>
            <span>✦ ATS-Friendly Options</span>
            <span>•</span>
            <span>✦ Photo & Non-Photo</span>
          </div>
        </div>
      </section>

      {/* ===================================================
          TEMPLATES
      =================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-12">
        {/* FILTERS */}

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const isActive =
              activeFilter === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() =>
                  setActiveFilter(filter)
                }
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* RESULT HEADER */}

        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="font-display text-xl font-bold text-slate-900">
              {activeFilter === "All"
                ? "All Templates"
                : activeFilter}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredTemplates.length} design
              {filteredTemplates.length !== 1
                ? "s"
                : ""}{" "}
              available
            </p>
          </div>

          <div className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-500 sm:block">
            Designed for first impressions
          </div>
        </div>

        {/* GRID */}

        {filteredTemplates.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredTemplates.map(
              (template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onPreview={
                    setPreviewTemplate
                  }
                  onUse={
                    handleUseTemplate
                  }
                />
              )
            )}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
              ✦
            </div>

            <h3 className="mt-4 font-display text-lg font-bold text-slate-900">
              No templates found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try another template category.
            </p>

            <button
              type="button"
              onClick={() =>
                setActiveFilter("All")
              }
              className="mt-5 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700"
            >
              View All Templates
            </button>
          </div>
        )}
      </section>

      {/* ===================================================
          MODAL
      =================================================== */}

      <PreviewModal
        template={previewTemplate}
        onClose={() =>
          setPreviewTemplate(null)
        }
        onUse={handleUseTemplate}
      />
    </main>
  );
}