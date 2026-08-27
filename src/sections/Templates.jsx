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
  return (
    <div className="h-full w-full bg-white p-5 text-slate-900">

      {/* Header */}

      <div className="flex items-start justify-between gap-3">

        <div>

          <h2 className="text-[15px] font-extrabold tracking-tight">
            Alex Morgan
          </h2>

          <p className="mt-1 text-[7px] font-bold uppercase tracking-[0.12em] text-buildcv-violet">
            Frontend Developer
          </p>

        </div>

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-buildcv-violet-50 text-[8px] font-bold text-buildcv-violet">
          AM
        </div>

      </div>


      {/* Contact */}

      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-[5.5px] text-slate-500">
        <span>alex@email.com</span>
        <span>+1 234 567</span>
        <span>New York</span>
        <span>linkedin.com/alex</span>
      </div>


      <div className="my-3 h-px bg-slate-200" />


      {/* Profile */}

      <PreviewSectionTitle>
        Profile
      </PreviewSectionTitle>

      <p className="mt-1.5 text-[6.5px] leading-[1.5] text-slate-500">
        Frontend developer passionate about creating responsive
        and user-friendly web experiences.
      </p>


      {/* Experience */}

      <div className="mt-4">

        <PreviewSectionTitle>
          Experience
        </PreviewSectionTitle>

        <div className="mt-2 space-y-3">

          <ModernExperience
            title="Frontend Developer"
            company="Tech Company"
            date="2023 — Present"
          />

          <ModernExperience
            title="Web Developer"
            company="Creative Studio"
            date="2021 — 2023"
          />

        </div>

      </div>


      {/* Education */}

      <div className="mt-4">

        <PreviewSectionTitle>
          Education
        </PreviewSectionTitle>

        <div className="mt-2">

          <p className="text-[7px] font-bold">
            BS Computer Science
          </p>

          <p className="mt-0.5 text-[6px] text-slate-500">
            University of Technology
          </p>

        </div>

      </div>


      {/* Projects */}

      <div className="mt-4">

        <PreviewSectionTitle>
          Projects
        </PreviewSectionTitle>

        <div className="mt-2">

          <p className="text-[7px] font-bold">
            Portfolio Website
          </p>

          <p className="mt-0.5 text-[6px] text-slate-500">
            React • Tailwind CSS • JavaScript
          </p>

        </div>

      </div>


      {/* Skills */}

      <div className="mt-4">

        <PreviewSectionTitle>
          Skills
        </PreviewSectionTitle>

        <div className="mt-2 flex flex-wrap gap-1">

          {[
            "React",
            "JavaScript",
            "TypeScript",
            "Git",
            "CSS",
          ].map((skill) => (

            <span
              key={skill}
              className="
                rounded
                bg-buildcv-violet-50
                px-1.5
                py-1
                text-[5.5px]
                font-semibold
                text-buildcv-violet-600
              "
            >
              {skill}
            </span>

          ))}

        </div>

      </div>

    </div>
  )
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
    <div className="h-full w-full bg-white p-5 text-slate-900">

      <div>

        <h2 className="text-[17px] font-extrabold tracking-tight">
          Alex Morgan
        </h2>

        <p className="mt-1 text-[7px] font-medium text-slate-500">
          Frontend Developer
        </p>

        <p className="mt-2 text-[5.5px] text-slate-400">
          alex@email.com • +1 234 567 • New York
        </p>

      </div>


      <div className="my-4 h-px bg-slate-200" />


      <MinimalSection title="About">

        <p className="text-[6.5px] leading-[1.5] text-slate-500">
          Creative frontend developer focused on building
          clean and engaging digital experiences.
        </p>

      </MinimalSection>


      <MinimalSection title="Experience">

        <MinimalExperience
          title="Frontend Developer"
          company="Tech Company"
          date="2023 — Present"
        />

        <MinimalExperience
          title="Web Developer"
          company="Creative Studio"
          date="2021 — 2023"
        />

      </MinimalSection>


      <MinimalSection title="Education">

        <div className="flex justify-between gap-2">

          <div>

            <p className="text-[7px] font-bold">
              BS Computer Science
            </p>

            <p className="mt-0.5 text-[6px] text-slate-500">
              University of Technology
            </p>

          </div>

          <span className="text-[5.5px] text-slate-400">
            2021 — 2025
          </span>

        </div>

      </MinimalSection>


      <MinimalSection title="Projects">

        <p className="text-[7px] font-bold">
          Portfolio Website
        </p>

        <p className="mt-0.5 text-[6px] text-slate-500">
          React • Tailwind CSS • JavaScript
        </p>

      </MinimalSection>


      <MinimalSection title="Skills">

        <p className="text-[6.5px] leading-5 text-slate-500">
          React • JavaScript • TypeScript • Git • CSS
        </p>

      </MinimalSection>

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
   MAIN COMPONENT
========================================================= */

function Templates() {

  const navigate = useNavigate()


  const handleUseTemplate = (template) => {

    localStorage.setItem(
      "buildcv-template",
      template.id
    )

    sessionStorage.setItem(
      "buildcv-selected-template",
      JSON.stringify(template)
    )

    navigate("/builder")
  }


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

              {/* =================================================
                  CARD GLOW
              ================================================== */}

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


              {/* =================================================
                  PREVIEW AREA
              ================================================== */}

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


                {/* =================================================
                    HOVER OVERLAY
                ================================================== */}

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
                        hover:text-buildcv-text
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


              {/* =================================================
                  INFORMATION
              ================================================== */}

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
            FOOTER NOTE
        ====================================================== */}

        <div
          data-template-footer
          className="
            mt-12
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

export default Templates