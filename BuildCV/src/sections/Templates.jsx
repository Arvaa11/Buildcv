import { useNavigate } from "react-router-dom"

/* =========================================================
   TEMPLATE DATA
========================================================= */

const templateOptions = [
  {
    id: "modern",
    name: "Modern",
    description:
      "A sharp, contemporary layout designed for developers, designers, startups, and digital professionals.",
    category: "Most Popular",
    style: "Modern",
    structure: [
      "1 Column",
      "Profile",
      "Experience",
      "Education",
      "Skills",
    ],
  },

  {
    id: "professional",
    name: "Professional",
    description:
      "A structured two-column resume built for corporate, business, finance, and traditional career paths.",
    category: "Professional",
    style: "Corporate",
    structure: [
      "2 Columns",
      "Contact",
      "Skills",
      "Experience",
      "Education",
    ],
  },

  {
    id: "minimal",
    name: "Minimal",
    description:
      "A refined and distraction-free layout that keeps attention exactly where it belongs: your experience.",
    category: "Minimal",
    style: "Clean",
    structure: [
      "1 Column",
      "Simple",
      "Experience",
      "Education",
      "Skills",
    ],
  },
]


/* =========================================================
   MODERN PREVIEW
========================================================= */

function ModernPreview() {
  const skills = [
    "React",
    "TypeScript",
    "JavaScript",
    "UI Design",
    "Figma",
    "Tailwind CSS",
  ];

  return (
    <div className="h-full w-full bg-slate-50 font-sans text-slate-900">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="relative overflow-hidden bg-white px-5 py-5">

        {/* Decorative Circle */}

        <div className="absolute right-[-25px] top-[-25px] h-20 w-20 rounded-full bg-indigo-100" />

        <div className="relative flex items-center gap-3">

          {/* Profile */}

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-indigo-50 ring-1 ring-indigo-200">
            <span className="text-[7px] font-black text-indigo-600">
              OC
            </span>
          </div>

          <div className="min-w-0">

            {/* Name */}

            <h2 className="text-[16px] font-black leading-none tracking-[-0.04em] text-slate-900">
              OLIVIA CARTER
            </h2>

            {/* Job Title */}

            <p className="mt-1.5 text-[6px] font-bold tracking-[0.18em] text-indigo-600">
              FRONTEND DEVELOPER
            </p>

            {/* Contact */}

            <p className="mt-1.5 text-[4.5px] leading-[1.5] text-slate-400">
              olivia.carter@example.com • +1 415 555 0198 • San Francisco, CA
            </p>

          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="px-5 py-4">

        <div className="grid grid-cols-[1.5fr_0.7fr] gap-4">

          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div>

            {/* =================================================
                PROFILE
            ================================================= */}

            <section className="rounded-xl bg-indigo-600 p-3.5 text-white">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-200">
                PROFILE
              </div>

              <p className="mt-1.5 text-[9px] font-extrabold leading-[1.25]">
                Frontend developer combining technology, design,
                and usability to create scalable digital products
                and effortless user experiences.
              </p>

            </section>


            {/* =================================================
                EXPERIENCE
            ================================================= */}

            <section className="mt-4">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-700">
                EXPERIENCE
              </div>

              <div className="mt-2.5 space-y-2.5">

                {/* Experience 1 */}

                <div className="rounded-lg bg-white p-2.5 shadow-sm">

                  <p className="text-[7px] font-bold leading-tight text-slate-900">
                    Senior Frontend Developer
                  </p>

                  <p className="mt-0.5 text-[5px] text-indigo-600">
                    Northstar Digital • 2024 — Present
                  </p>

                  <ul className="mt-1.5 space-y-1">

                    <li className="relative pl-2 text-[4.8px] leading-[1.45] text-slate-600">
                      <span className="absolute left-0 top-[3px] h-[3px] w-[3px] rounded-full bg-indigo-400" />
                      Built scalable React interfaces for digital products.
                    </li>

                    <li className="relative pl-2 text-[4.8px] leading-[1.45] text-slate-600">
                      <span className="absolute left-0 top-[3px] h-[3px] w-[3px] rounded-full bg-indigo-400" />
                      Created accessible and reusable UI components.
                    </li>

                  </ul>

                </div>


                {/* Experience 2 */}

                <div className="rounded-lg bg-white p-2.5 shadow-sm">

                  <p className="text-[7px] font-bold leading-tight text-slate-900">
                    Frontend Developer
                  </p>

                  <p className="mt-0.5 text-[5px] text-indigo-600">
                    Brightline Technologies • 2022 — 2024
                  </p>

                  <ul className="mt-1.5 space-y-1">

                    <li className="relative pl-2 text-[4.8px] leading-[1.45] text-slate-600">
                      <span className="absolute left-0 top-[3px] h-[3px] w-[3px] rounded-full bg-indigo-400" />
                      Developed responsive React applications.
                    </li>

                    <li className="relative pl-2 text-[4.8px] leading-[1.45] text-slate-600">
                      <span className="absolute left-0 top-[3px] h-[3px] w-[3px] rounded-full bg-indigo-400" />
                      Integrated REST APIs and design systems.
                    </li>

                  </ul>

                </div>

              </div>

            </section>


            {/* =================================================
                PROJECTS
            ================================================= */}

            <section className="mt-4">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-700">
                PROJECTS
              </div>

              <div className="mt-2.5 space-y-2">

                <div>

                  <p className="text-[6.5px] font-bold text-slate-900">
                    BuildCV
                  </p>

                  <p className="mt-0.5 text-[4.8px] leading-[1.5] text-slate-600">
                    Professional resume builder with live previews
                    and customizable templates.
                  </p>

                  <p className="mt-0.5 text-[4px] text-indigo-500">
                    React • Tailwind CSS • JavaScript
                  </p>

                </div>


                <div>

                  <p className="text-[6.5px] font-bold text-slate-900">
                    Analytics Dashboard
                  </p>

                  <p className="mt-0.5 text-[4.8px] leading-[1.5] text-slate-600">
                    Responsive analytics interface for visualizing
                    business insights.
                  </p>

                  <p className="mt-0.5 text-[4px] text-indigo-500">
                    React • TypeScript • Charts
                  </p>

                </div>

              </div>

            </section>


            {/* =================================================
                EDUCATION
            ================================================= */}

            <section className="mt-4">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-700">
                EDUCATION
              </div>

              <div className="mt-2.5">

                <p className="text-[6.5px] font-bold text-slate-900">
                  Bachelor of Computer Science
                </p>

                <p className="mt-0.5 text-[4.8px] text-slate-500">
                  University of California • 2016 — 2020
                </p>

              </div>

            </section>

          </div>


          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside>

            {/* =================================================
                SKILLS
            ================================================= */}

            <section className="rounded-xl bg-white p-3 shadow-sm">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-700">
                SKILLS
              </div>

              <div className="mt-2.5 space-y-1.5">

                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-md bg-indigo-50 px-2 py-1.5 text-[4.8px] font-semibold leading-tight text-indigo-700"
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </section>


            {/* =================================================
                CONTACT
            ================================================= */}

            <section className="mt-3 rounded-xl bg-white p-3 shadow-sm">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-700">
                CONTACT
              </div>

              <div className="mt-2.5 space-y-1 text-[4.8px] leading-[1.5] text-slate-500">

                <p>
                  olivia.carter@example.com
                </p>

                <p>
                  +1 415 555 0198
                </p>

                <p>
                  San Francisco, CA
                </p>

                <p>
                  linkedin.com/in/oliviacarter
                </p>

                <p>
                  github.com/oliviacarter
                </p>

              </div>

            </section>


            {/* =================================================
                LANGUAGES
            ================================================= */}

            <section className="mt-3 rounded-xl bg-white p-3 shadow-sm">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-700">
                LANGUAGES
              </div>

              <div className="mt-2.5 space-y-1.5">

                <p className="text-[4.8px] text-slate-600">
                  <span className="font-semibold">
                    English
                  </span>
                  <span className="text-slate-400">
                    {" "}• Native
                  </span>
                </p>

                <p className="text-[4.8px] text-slate-600">
                  <span className="font-semibold">
                    Spanish
                  </span>
                  <span className="text-slate-400">
                    {" "}• Professional
                  </span>
                </p>

                <p className="text-[4.8px] text-slate-600">
                  <span className="font-semibold">
                    French
                  </span>
                  <span className="text-slate-400">
                    {" "}• Conversational
                  </span>
                </p>

              </div>

            </section>


            {/* =================================================
                INTERESTS
            ================================================= */}

            <section className="mt-3 rounded-xl bg-white p-3 shadow-sm">

              <div className="text-[6px] font-bold tracking-[0.18em] text-indigo-700">
                INTERESTS
              </div>

              <div className="mt-2.5 flex flex-wrap gap-1">

                {[
                  "Web Design",
                  "Open Source",
                  "Photography",
                  "Technology",
                ].map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full bg-indigo-50 px-1.5 py-1 text-[4px] font-medium text-indigo-600"
                  >
                    {interest}
                  </span>
                ))}

              </div>

            </section>

          </aside>

        </div>

      </main>

    </div>
  );
}


/* =========================================================
   PROFESSIONAL PREVIEW
========================================================= */

function ProfessionalPreview() {
  return (
    <div className="flex h-full w-full bg-white text-slate-900">

      {/* SIDEBAR */}

      <aside className="w-[31%] shrink-0 bg-buildcv-ink p-3 text-white">

        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[9px] font-bold ring-1 ring-white/10">
          AM
        </div>

        {/* Contact */}

        <div className="mt-4">

          <SideTitle>
            Contact
          </SideTitle>

          <div className="mt-2 space-y-2 text-[5.5px] leading-tight text-slate-300">

            <p>alex@email.com</p>
            <p>+1 234 567</p>
            <p>New York</p>
            <p>linkedin.com/alex</p>

          </div>

        </div>

        {/* Skills */}

        <div className="mt-5">

          <SideTitle>
            Skills
          </SideTitle>

          <div className="mt-2 space-y-2">

            {[
              "React",
              "JavaScript",
              "TypeScript",
              "CSS",
              "Git",
            ].map((skill) => (

              <div key={skill}>

                <p className="text-[5.5px] text-slate-300">
                  {skill}
                </p>

                <div className="mt-1 h-1 overflow-hidden rounded-full bg-white/10">

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

            ))}

          </div>

        </div>

        {/* Education */}

        <div className="mt-5">

          <SideTitle>
            Education
          </SideTitle>

          <p className="mt-2 text-[6px] font-bold">
            BS Computer Science
          </p>

          <p className="mt-1 text-[5.5px] text-slate-400">
            University of Technology
          </p>

        </div>

      </aside>

      {/* MAIN */}

      <main className="flex-1 p-4">

        <h2 className="text-[15px] font-extrabold tracking-tight">
          Alex Morgan
        </h2>

        <p className="mt-1 text-[7px] font-semibold uppercase tracking-wider text-buildcv-violet">
          Frontend Developer
        </p>

        <div className="my-3 h-px bg-slate-200" />

        <ProfessionalSection title="Professional Summary">

          <p className="text-[6.5px] leading-[1.5] text-slate-500">
            Frontend developer experienced in building modern,
            responsive and accessible web applications.
          </p>

        </ProfessionalSection>

        <ProfessionalSection title="Work Experience">

          <ProfessionalJob
            title="Frontend Developer"
            company="Tech Company"
          />

          <ProfessionalJob
            title="Web Developer"
            company="Creative Studio"
          />

        </ProfessionalSection>

        <ProfessionalSection title="Projects">

          <p className="text-[7px] font-bold">
            Portfolio Website
          </p>

          <p className="mt-1 text-[5.8px] text-slate-500">
            React • Tailwind CSS • JavaScript
          </p>

        </ProfessionalSection>

        <ProfessionalSection title="Certifications">

          <p className="text-[6.5px] text-slate-500">
            Frontend Development Certification
          </p>

        </ProfessionalSection>

      </main>

    </div>
  )
}

/* =========================================================
   MINIMAL PREVIEW
========================================================= */

function MinimalPreview() {
  return (
    <div className="h-full w-full bg-white px-5 py-5 text-slate-900">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="border-b-2 border-slate-900 pb-4">

        <div className="flex items-end justify-between gap-3">

          <div className="min-w-0 flex-1">

            <h2 className="text-[17px] font-black leading-none tracking-[-0.04em] text-slate-900">
              Olivia Carter
            </h2>

            <p className="mt-2 text-[7px] font-semibold uppercase tracking-[0.16em] text-slate-600">
              Creative Developer
            </p>

          </div>

          {/* Profile placeholder */}

          <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-slate-200">
            <div className="flex h-full w-full items-center justify-center bg-slate-50 text-[6px] font-bold text-slate-400">
              OC
            </div>
          </div>

        </div>

        <div className="mt-3 flex flex-wrap gap-x-2.5 gap-y-1 text-[5.5px] leading-[1.5] text-slate-500">
          <span>olivia.carter@example.com</span>
          <span>+1 415 555 0182</span>
          <span>San Francisco, CA</span>
        </div>

      </header>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="mt-5">

        {/* ===================================================
            PROFILE
        =================================================== */}

        <section className="mb-5">

          <div className="mb-2 pb-0.5 text-[8px] font-extrabold tracking-[0.16em] text-slate-900">
            PROFILE
          </div>

          <p className="text-[6.5px] leading-[1.55] text-slate-600">
            Creative developer focused on building thoughtful
            digital experiences with clean interfaces,
            accessible interactions, and scalable front-end
            architecture.
          </p>

        </section>


        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section className="mb-5">

          <div className="mb-2 pb-0.5 text-[8px] font-extrabold tracking-[0.16em] text-slate-900">
            EXPERIENCE
          </div>

          <div className="space-y-3.5">

            <article>

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0 flex-1">

                  <h3 className="text-[7px] font-bold leading-[1.4] text-slate-900">
                    Senior Frontend Developer
                  </h3>

                  <p className="mt-0.5 text-[5.5px] leading-[1.5] text-slate-500">
                    Northstar Digital · San Francisco, CA
                  </p>

                </div>

                <span className="shrink-0 text-[5px] text-slate-500">
                  2022 — Present
                </span>

              </div>

              <ul className="mt-1.5 space-y-0.5">

                <li className="relative pl-2 text-[5.5px] leading-[1.5] text-slate-600">
                  <span className="absolute left-0 top-[4px] h-[2px] w-[2px] rounded-full bg-slate-400" />
                  Built responsive web applications using React.
                </li>

                <li className="relative pl-2 text-[5.5px] leading-[1.5] text-slate-600">
                  <span className="absolute left-0 top-[4px] h-[2px] w-[2px] rounded-full bg-slate-400" />
                  Collaborated with designers and engineers.
                </li>

              </ul>

            </article>


            <article>

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0 flex-1">

                  <h3 className="text-[7px] font-bold leading-[1.4] text-slate-900">
                    Frontend Developer
                  </h3>

                  <p className="mt-0.5 text-[5.5px] leading-[1.5] text-slate-500">
                    Pixel Studio · San Francisco, CA
                  </p>

                </div>

                <span className="shrink-0 text-[5px] text-slate-500">
                  2020 — 2022
                </span>

              </div>

              <p className="mt-1 text-[5.5px] leading-[1.5] text-slate-600">
                Developed reusable interface components and responsive layouts.
              </p>

            </article>

          </div>

        </section>


        {/* ===================================================
            EDUCATION
        =================================================== */}

        <section className="mb-5">

          <div className="mb-2 pb-0.5 text-[8px] font-extrabold tracking-[0.16em] text-slate-900">
            EDUCATION
          </div>

          <div className="flex items-start justify-between gap-3">

            <div>

              <p className="text-[7px] font-bold text-slate-900">
                Bachelor of Computer Science
              </p>

              <p className="mt-0.5 text-[5.5px] text-slate-500">
                University of California · Berkeley, CA
              </p>

            </div>

            <span className="shrink-0 text-[5px] text-slate-500">
              2016 — 2020
            </span>

          </div>

        </section>


        {/* ===================================================
            SKILLS
        =================================================== */}

        <section className="mb-5">

          <div className="mb-2 pb-0.5 text-[8px] font-extrabold tracking-[0.16em] text-slate-900">
            SKILLS
          </div>

          <div className="flex flex-wrap gap-1">

            {[
              "React",
              "JavaScript",
              "TypeScript",
              "HTML & CSS",
              "Git & GitHub",
              "Node.js",
              "UI/UX",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded border border-slate-200 px-1.5 py-1 text-[5px] font-medium leading-none text-slate-600"
              >
                {skill}
              </span>
            ))}

          </div>

        </section>


        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section className="mb-5">

          <div className="mb-2 pb-0.5 text-[8px] font-extrabold tracking-[0.16em] text-slate-900">
            PROJECTS
          </div>

          <div className="grid grid-cols-2 gap-x-4 gap-y-3">

            <article>

              <h3 className="text-[6.5px] font-bold text-slate-900">
                Portfolio Platform
              </h3>

              <p className="mt-0.5 text-[5.5px] leading-[1.5] text-slate-600">
                Responsive portfolio platform for creative projects.
              </p>

              <p className="mt-1 text-[4.5px] uppercase tracking-wide text-slate-500">
                React · JavaScript · CSS
              </p>

            </article>


            <article>

              <h3 className="text-[6.5px] font-bold text-slate-900">
                Task Management App
              </h3>

              <p className="mt-0.5 text-[5.5px] leading-[1.5] text-slate-600">
                Productivity application for organizing daily tasks.
              </p>

              <p className="mt-1 text-[4.5px] uppercase tracking-wide text-slate-500">
                React · Node.js · MongoDB
              </p>

            </article>

          </div>

        </section>


        {/* ===================================================
            ADDITIONAL INFORMATION
        =================================================== */}

        <div className="grid grid-cols-3 gap-x-4 border-t border-slate-200 pt-3">

          <section>

            <div className="mb-2 text-[7px] font-extrabold tracking-[0.12em] text-slate-900">
              LANGUAGES
            </div>

            <p className="text-[5.5px] font-semibold text-slate-900">
              English
            </p>

            <p className="text-[5px] text-slate-500">
              Native
            </p>

            <p className="mt-1 text-[5.5px] font-semibold text-slate-900">
              Spanish
            </p>

            <p className="text-[5px] text-slate-500">
              Professional
            </p>

          </section>


          <section>

            <div className="mb-2 text-[7px] font-extrabold tracking-[0.12em] text-slate-900">
              INTERESTS
            </div>

            <div className="flex flex-wrap gap-1">

              {["Design", "Photography", "Technology"].map(
                (interest) => (
                  <span
                    key={interest}
                    className="border border-slate-200 px-1 py-0.5 text-[4.5px] text-slate-500"
                  >
                    {interest}
                  </span>
                )
              )}

            </div>

          </section>


          <section>

            <div className="mb-2 text-[7px] font-extrabold tracking-[0.12em] text-slate-900">
              CERTIFICATIONS
            </div>

            <p className="text-[5.5px] font-semibold text-slate-900">
              Meta Front-End Developer
            </p>

            <p className="mt-0.5 text-[5px] text-slate-500">
              Meta · 2023
            </p>

          </section>

        </div>

      </main>

    </div>
  )
}


/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function PreviewSectionTitle({ children }) {
  return (
    <h3
      className="
        text-[7px]
        font-extrabold
        uppercase
        tracking-[0.14em]
        text-buildcv-violet
      "
    >
      {children}
    </h3>
  )
}

function SideTitle({ children }) {
  return (
    <h3
      className="
        border-b
        border-white/10
        pb-1
        text-[6px]
        font-bold
        uppercase
        tracking-[0.12em]
        text-white
      "
    >
      {children}
    </h3>
  )
}

function ModernExperience({ title, company, date }) {
  return (
    <div>

      <div className="flex items-start justify-between gap-2">

        <div>

          <p className="text-[7px] font-bold">
            {title}
          </p>

          <p className="mt-0.5 text-[6px] text-slate-500">
            {company}
          </p>

        </div>

        <span className="shrink-0 text-[5.5px] text-slate-400">
          {date}
        </span>

      </div>

      <div className="mt-1.5 space-y-1">

        <div className="h-1 w-full rounded bg-slate-100" />
        <div className="h-1 w-4/5 rounded bg-slate-100" />

      </div>

    </div>
  )
}

function ProfessionalSection({ title, children }) {
  return (
    <section className="mt-4">

      <h3 className="mb-2 text-[6.5px] font-extrabold uppercase tracking-[0.12em] text-buildcv-violet">
        {title}
      </h3>

      {children}

    </section>
  )
}

function ProfessionalJob({ title, company }) {
  return (
    <div className="mb-3">

      <p className="text-[7px] font-bold">
        {title}
      </p>

      <p className="mt-0.5 text-[5.8px] text-slate-500">
        {company} • 2023 — Present
      </p>

      <div className="mt-1.5 space-y-1">

        <div className="h-1 w-full rounded bg-slate-100" />
        <div className="h-1 w-4/5 rounded bg-slate-100" />

      </div>

    </div>
  )
}

function MinimalSection({ title, children }) {
  return (
    <section className="mt-4">

      <h3 className="mb-2 text-[6.5px] font-extrabold uppercase tracking-[0.14em] text-slate-900">
        {title}
      </h3>

      {children}

    </section>
  )
}

function MinimalExperience({ title, company, date }) {
  return (
    <div className="mb-3">

      <div className="flex items-start justify-between gap-2">

        <div>

          <p className="text-[7px] font-bold">
            {title}
          </p>

          <p className="mt-0.5 text-[6px] text-slate-500">
            {company}
          </p>

        </div>

        <span className="shrink-0 text-[5.5px] text-slate-400">
          {date}
        </span>

      </div>

    </div>
  )
}

/* =========================================================
   TAG
========================================================= */

function Tag({ children }) {
  return (
    <span
      className="
        rounded-full
        border
        border-slate-200
        bg-slate-50
        px-2.5
        py-1
        text-[10px]
        font-semibold
        text-slate-600
        transition-colors
        duration-300
        group-hover:border-buildcv-violet/10
        group-hover:bg-buildcv-violet-50
        group-hover:text-buildcv-violet-600
      "
    >
      {children}
    </span>
  )
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function Templates() {

  const navigate = useNavigate()

  /* =======================================================
     SELECT TEMPLATE → BUILDER
  ======================================================= */

  const handleUseTemplate = (template) => {

    // Save selected template ID
    localStorage.setItem(
      "buildcv-template",
      template.id
    )

    // Save complete template information
    sessionStorage.setItem(
      "buildcv-selected-template",
      JSON.stringify(template)
    )

    // Open Builder
    navigate("/builder")
  }


  /* =======================================================
     RENDER TEMPLATE PREVIEW
  ======================================================= */

  const renderPreview = (templateId) => {

    if (templateId === "professional") {
      return <ProfessionalPreview />
    }

    if (templateId === "minimal") {
      return <MinimalPreview />
    }

    return <ModernPreview />
  }


  return (
    <section
      id="templates"
      data-templates
      className="
        relative
        isolate
        overflow-hidden
        bg-buildcv-background
        py-24
        sm:py-28
        lg:py-32
      "
    >

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-56
          top-20
          h-[520px]
          w-[520px]
          rounded-full
          bg-buildcv-violet/7
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-56
          bottom-10
          h-[520px]
          w-[520px]
          rounded-full
          bg-buildcv-accent/5
          blur-[130px]
        "
      />

      {/* Grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#111827_1px,transparent_1px),linear-gradient(90deg,#111827_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_90%)]
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          data-template-header
          className="mx-auto max-w-2xl text-center"
        >

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-buildcv-violet/15
              bg-buildcv-violet-50
              px-3.5
              py-1.5
              text-xs
              font-bold
              uppercase
              tracking-[0.12em]
              text-buildcv-violet
            "
          >

            <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />

            Resume Templates

          </div>

          <h2
            data-template-title
            className="
              mt-5
              font-display
              text-3xl
              font-extrabold
              leading-[1.1]
              tracking-tight
              text-buildcv-ink
              sm:text-4xl
              lg:text-5xl
            "
          >

            Designed to make

            <span
              className="
                block
                bg-gradient-to-r
                from-buildcv-violet
                via-buildcv-violet-500
                to-buildcv-accent
                bg-clip-text
                text-transparent
              "
            >
              a strong first impression.
            </span>

          </h2>

          <p
            data-template-description
            className="
              mx-auto
              mt-5
              max-w-xl
              text-base
              leading-7
              text-buildcv-text-secondary
              sm:text-lg
              sm:leading-8
            "
          >
            Choose a professionally designed layout,
            customize it with your experience, and
            create a resume you're proud to send.
          </p>

        </div>

        {/* =====================================================
            TEMPLATE GRID
        ====================================================== */}

        <div
          data-template-grid
          className="
            mt-16
            grid
            grid-cols-1
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-7
          "
        >

          {templateOptions.map((template, index) => (

            <article
              key={template.id}
              data-template-card
              className="
                group
                relative
                overflow-hidden
                rounded-buildcv-2xl
                border
                border-buildcv-border
                bg-white
                shadow-buildcv-md
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-buildcv-violet/25
                hover:shadow-buildcv-xl
              "
            >

              {/* CARD GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -inset-px
                  rounded-buildcv-2xl
                  bg-gradient-to-br
                  from-buildcv-violet/0
                  via-buildcv-violet/0
                  to-buildcv-accent/0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* PREVIEW AREA */}

              <div
                className="
                  relative
                  overflow-hidden
                  bg-gradient-to-br
                  from-slate-100
                  via-slate-50
                  to-buildcv-violet-50/40
                  px-6
                  pb-8
                  pt-7
                "
              >

                {/* Top accent */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    bg-gradient-to-r
                    from-buildcv-violet
                    to-buildcv-accent
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* Category */}

                <div
                  className="
                    absolute
                    left-5
                    top-5
                    z-20
                    inline-flex
                    items-center
                    gap-1.5
                    rounded-full
                    border
                    border-white/80
                    bg-white/90
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    uppercase
                    tracking-wide
                    text-slate-600
                    shadow-buildcv-sm
                    backdrop-blur-md
                  "
                >

                  {index === 0 && (
                    <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet" />
                  )}

                  {template.category}

                </div>

                {/* Resume */}

                <div
                  data-template-preview
                  className="
                    relative
                    mx-auto
                    aspect-[0.707]
                    w-full
                    max-w-[300px]
                    overflow-hidden
                    rounded-xl
                    bg-white
                    shadow-[0_20px_50px_rgba(15,23,42,0.14)]
                    ring-1
                    ring-slate-900/5
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:rotate-[0.5deg]
                    group-hover:scale-[1.035]
                  "
                >

                  {renderPreview(template.id)}

                </div>

                {/* HOVER OVERLAY */}

                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    items-center
                    justify-center
                    bg-slate-950/35
                    opacity-0
                    backdrop-blur-[3px]
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                >

                  <button
                    type="button"
                    onClick={() => handleUseTemplate(template)}
                    className="
                      group/button
                      relative
                      inline-flex
                      translate-y-4
                      items-center
                      gap-2
                      overflow-hidden
                      rounded-buildcv-md
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-bold
                      text-buildcv-ink
                      shadow-buildcv-xl
                      transition-all
                      duration-500
                      group-hover:translate-y-0
                      hover:bg-buildcv-violet
                      hover:text-white
                    "
                  >

                    <span
                      className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-buildcv-violet/20
                        to-transparent
                        transition-transform
                        duration-700
                        group-hover/button:translate-x-full
                      "
                    />

                    <span className="relative">
                      Use This Template
                    </span>

                    <span
                      className="
                        relative
                        transition-transform
                        duration-300
                        group-hover/button:translate-x-1
                      "
                    >
                      →
                    </span>

                  </button>

                </div>

              </div>

              {/* INFORMATION */}

              <div className="relative p-6">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p
                      className="
                        text-[10px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-buildcv-violet
                      "
                    >
                      {template.style}
                    </p>

                    <h3
                      className="
                        mt-1
                        font-display
                        text-xl
                        font-extrabold
                        tracking-tight
                        text-buildcv-ink
                      "
                    >
                      {template.name}
                    </h3>

                  </div>

                  {/* Number */}

                  <span
                    className="
                      text-xs
                      font-bold
                      text-slate-300
                      transition-colors
                      duration-300
                      group-hover:text-buildcv-violet/40
                    "
                  >
                    0{index + 1}
                  </span>

                </div>

                <p
                  className="
                    mt-3
                    text-sm
                    leading-6
                    text-buildcv-text-secondary
                  "
                >
                  {template.description}
                </p>

                {/* Tags */}

                <div className="mt-5 flex flex-wrap gap-1.5">

                  {template.structure.map((item) => (

                    <Tag key={item}>
                      {item}
                    </Tag>

                  ))}

                </div>

                {/* Button */}

                <button
                  type="button"
                  onClick={() => handleUseTemplate(template)}
                  className="
                    group/use
                    mt-6
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-buildcv-md
                    border
                    border-buildcv-border
                    bg-white
                    px-4
                    py-3
                    text-sm
                    font-bold
                    text-buildcv-ink
                    transition-all
                    duration-300
                    hover:border-buildcv-violet
                    hover:bg-buildcv-violet
                    hover:text-white
                    hover:shadow-buildcv-violet
                  "
                >

                  <span>
                    Use {template.name}
                  </span>

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover/use:translate-x-1
                    "
                  >
                    →
                  </span>

                </button>

              </div>

            </article>

          ))}

        </div>

        {/* =====================================================
            EXPLORE ALL TEMPLATES
        ====================================================== */}

        <div className="mt-12 flex justify-center">

          <button
            type="button"
            onClick={() => navigate("/templates")}
            className="
              group
    relative
    inline-flex
    items-center
    justify-center
    gap-2.5
    overflow-hidden
    rounded-buildcv-md
    bg-gradient-to-r
    from-buildcv-violet
    to-buildcv-accent
    px-6
    py-3.5
    text-sm
    font-semibold
    text-white
    shadow-buildcv-violet
    transition-all
    duration-500
    hover:-translate-y-1
    hover:shadow-buildcv-xl
            "
          >

            <span>
              Explore All Templates
            </span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>

          </button>

        </div>

        {/* =====================================================
            FOOTER NOTE
        ====================================================== */}

        <div
          data-template-footer
          className="
            mt-8
            flex
            items-center
            justify-center
            gap-2
            text-center
          "
        >

          <span className="h-1.5 w-1.5 rounded-full bg-buildcv-success" />

          <p className="text-sm text-buildcv-text-secondary">
            Change your template anytime while building your resume.
          </p>

        </div>

      </div>

    </section>
  )
}

export default Templates
