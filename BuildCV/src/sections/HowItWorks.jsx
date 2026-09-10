const steps = [
  {
    number: "01",
    title: "Choose your template",
    description:
      "Start with a professionally designed template that matches your career, industry, and personal style.",
  },
  {
    number: "02",
    title: "Build your resume",
    description:
      "Add your experience, education, skills, projects, and achievements with our simple step-by-step builder.",
  },
  {
    number: "03",
    title: "Download & apply",
    description:
      "Preview your finished resume, download it as a polished PDF, and start applying with confidence.",
  },
]


function HowItWorks() {
  return (
    <section
      id="how-it-works"
      data-how-it-works
      className="
      scroll-mt-28
    relative
    isolate
    overflow-hidden
    bg-buildcv-background
    py-16
    sm:py-20
    lg:py-24
  "
    >

      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-buildcv-violet/20 blur-3xl" />

      {/* Left Pink Glow */}
      <div className="pointer-events-none absolute left-[5%] top-[40%] h-40 w-40 rounded-full bg-buildcv-accent/15 blur-3xl" />

      {/* Right Violet Glow */}
      <div className="pointer-events-none absolute right-[5%] top-[25%] h-40 w-40 rounded-full bg-buildcv-violet/20 blur-3xl" />


      {/* =====================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(#111827_1px,transparent_1px),linear-gradient(90deg,#111827_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent_85%)]
        "
      />


      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div
          data-how-header
          className="mx-auto max-w-2xl text-center"
        >

          {/* Eyebrow */}

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
              shadow-buildcv-xs
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-buildcv-violet
              "
            />

            How It Works

          </div>


          {/* Heading */}

          <h2
            data-how-title
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

            From blank page

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
              to job-ready.
            </span>

          </h2>


          {/* Description */}

          <p
            data-how-description
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
            No complicated tools. No confusing layouts.
            Just a simple three-step process that turns
            your experience into a professional resume.
          </p>

        </div>


        {/* =====================================================
            STEPS
        ====================================================== */}

        <div
          data-how-steps
          className="relative mt-16 lg:mt-20"
        >

          {/* =================================================
              DESKTOP CONNECTING LINE
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              left-[16%]
              right-[16%]
              top-10
              hidden
              lg:block
            "
          >

            {/* Base */}

            <div
              className="
                h-px
                w-full
                bg-buildcv-border
              "
            />

            {/* GSAP animated progress */}

            <div
              data-step-progress
              className="
                absolute
                left-0
                top-0
                h-px
                w-0
                bg-gradient-to-r
                from-buildcv-violet
                via-buildcv-violet-500
                to-buildcv-accent
              "
            />

          </div>


          {/* =================================================
              STEP GRID
          ================================================= */}

          <div
            className="
              grid
              grid-cols-1
              gap-12
              md:grid-cols-3
              md:gap-8
              lg:gap-12
            "
          >

            {steps.map((step, index) => (

              <div
                key={step.number}
                data-step
                className="
                  group
                  relative
                  text-center
                "
              >

                {/* =================================================
                    STEP NUMBER
                ================================================= */}

                <div
                  data-step-number
                  className="
                    relative
                    mx-auto
                    h-20
                    w-20
                  "
                >

                  {/* Glow */}

                  <div
                    className="
                      absolute
                      -inset-4
                      rounded-full
                      bg-buildcv-violet/10
                      opacity-0
                      blur-xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />


                  {/* Outer ring */}

                  <div
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-buildcv-violet/15
                      bg-white
                      shadow-buildcv-md
                      transition-all
                      duration-500
                      group-hover:scale-105
                      group-hover:border-buildcv-violet/30
                      group-hover:shadow-buildcv-lg
                    "
                  />


                  {/* Decorative orbit */}

                  <div
                    className="
                      absolute
                      -inset-1
                      rounded-full
                      border
                      border-dashed
                      border-buildcv-violet/20
                      opacity-0
                      transition-all
                      duration-700
                      group-hover:rotate-180
                      group-hover:opacity-100
                    "
                  />


                  {/* Number */}

                  <div
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-14
                      w-14
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-br
                      from-buildcv-violet
                      to-buildcv-accent
                      font-display
                      text-sm
                      font-extrabold
                      text-white
                      shadow-buildcv-violet
                      transition-transform
                      duration-500
                      group-hover:scale-110
                    "
                  >
                    {step.number}
                  </div>


                  {/* Corner dot */}

                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      h-3
                      w-3
                      scale-0
                      rounded-full
                      border-2
                      border-white
                      bg-buildcv-accent
                      opacity-0
                      shadow-sm
                      transition-all
                      duration-300
                      group-hover:scale-100
                      group-hover:opacity-100
                    "
                  />

                </div>


                {/* =================================================
                    STEP CONTENT
                ================================================= */}

                <div
                  data-step-content
                  className="
                    relative
                    mx-auto
                    mt-7
                    max-w-sm
                    rounded-buildcv-xl
                    border
                    border-transparent
                    bg-transparent
                    p-6
                    transition-all
                    duration-500
                    group-hover:-translate-y-1
                    group-hover:border-buildcv-border
                    group-hover:bg-white
                    group-hover:shadow-buildcv-lg
                  "
                >

                  {/* Label */}

                  <div
                    className="
                      mb-3
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-buildcv-violet
                    "
                  >
                    Step {index + 1}
                  </div>


                  {/* Title */}

                  <h3
                    className="
                      font-display
                      text-xl
                      font-bold
                      tracking-tight
                      text-buildcv-ink
                      transition-colors
                      duration-300
                      group-hover:text-buildcv-violet
                    "
                  >
                    {step.title}
                  </h3>


                  {/* Description */}

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-buildcv-text-secondary
                      sm:text-base
                    "
                  >
                    {step.description}
                  </p>


                  {/* Bottom indicator */}

                  <div
                    className="
                      mt-5
                      flex
                      items-center
                      justify-center
                      gap-1.5
                      text-xs
                      font-bold
                      text-buildcv-violet
                      opacity-0
                      transition-all
                      duration-300
                      group-hover:opacity-100
                    "
                  >

                    <span>
                      Next
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

                  </div>

                </div>


                {/* =================================================
                    MOBILE CONNECTOR
                ================================================= */}

                {index !== steps.length - 1 && (

                  <div
                    className="
                      relative
                      mx-auto
                      mt-2
                      h-14
                      w-px
                      overflow-hidden
                      bg-buildcv-border
                      md:hidden
                    "
                  >

                    <div
                      className="
                        absolute
                        left-0
                        top-0
                        h-1/2
                        w-full
                        bg-gradient-to-b
                        from-buildcv-violet
                        to-buildcv-accent
                      "
                    />

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>


        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div
          data-how-cta
          className="
            relative
            mt-16
            overflow-hidden
            rounded-buildcv-2xl
            border
            border-white/10
            bg-buildcv-ink
            px-6
            py-8
            text-white
            shadow-buildcv-xl
            sm:px-8
            sm:py-9
            lg:mt-20
          "
        >

          {/* Gradient glow */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-32
              h-64
              w-64
              rounded-full
              bg-buildcv-violet/20
              blur-[80px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              left-1/3
              h-52
              w-52
              rounded-full
              bg-buildcv-accent/10
              blur-[80px]
            "
          />


          {/* CTA content */}

          <div
            className="
              relative
              flex
              flex-col
              items-center
              justify-between
              gap-6
              sm:flex-row
            "
          >

            <div className="text-center sm:text-left">

              <div
                className="
                  mb-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-buildcv-violet-400
                  sm:justify-start
                "
              >

                <span className="h-1.5 w-1.5 rounded-full bg-buildcv-violet-400" />

                Ready when you are

              </div>


              <h3
                className="
                  font-display
                  text-xl
                  font-extrabold
                  tracking-tight
                  sm:text-2xl
                "
              >
                Ready to build something better?
              </h3>


              <p
                className="
                  mt-1.5
                  text-sm
                  leading-6
                  text-slate-300
                "
              >
                Start with a professional template and
                turn your experience into your next opportunity.
              </p>

            </div>


            {/* CTA */}

            <a
              href="#templates"
              className="
                group
                relative
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
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

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/25
                  to-transparent
                  transition-transform
                  duration-700
                  group-hover:translate-x-full
                "
              />

              <span className="relative">
                Start Building
              </span>

              <span
                className="
                  relative
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>

            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default HowItWorks