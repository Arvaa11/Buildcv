import { Link } from "react-router-dom"

function FinalCTA() {
  return (
    <section
      className="
        relative
        isolate
        overflow-hidden
        bg-buildcv-background
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-96
          w-96
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-buildcv-violet/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-72
          w-72
          rounded-full
          bg-buildcv-accent/10
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-72
          w-72
          rounded-full
          bg-buildcv-violet/10
          blur-[110px]
        "
      />

      {/* =================================================
          SUBTLE GRID
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(124,58,237,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.8)_1px,transparent_1px)]
          [background-size:64px_64px]
          [mask-image:linear-gradient(to_bottom,black,transparent)]
        "
      />

      {/* =================================================
          CONTAINER
      ================================================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* =================================================
            CTA CARD
        ================================================= */}

        <div
          className="
            group
            relative
            overflow-hidden
            rounded-buildcv-2xl
            border
            border-buildcv-violet/15
            bg-white
            px-6
            py-14
            text-center
            shadow-buildcv-xl
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-buildcv-violet/30
            hover:shadow-buildcv-xl
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* =================================================
              INNER GLOW
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-buildcv-violet/10
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-32
              -left-24
              h-72
              w-72
              rounded-full
              bg-buildcv-accent/10
              blur-3xl
              transition-transform
              duration-700
              group-hover:scale-125
            "
          />

          {/* =================================================
              DECORATIVE RINGS
          ================================================= */}

          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-20
              h-52
              w-52
              rounded-full
              border
              border-buildcv-violet/10
              transition-transform
              duration-700
              group-hover:rotate-12
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              -left-16
              h-44
              w-44
              rounded-full
              border
              border-buildcv-accent/15
              transition-transform
              duration-700
              group-hover:-rotate-12
            "
          />

          {/* =================================================
              CONTENT
          ================================================= */}

          <div className="relative mx-auto max-w-3xl">
            {/* Badge */}

            <div
              className="
                mx-auto
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-buildcv-violet/15
                bg-buildcv-violet-50
                px-4
                py-2
                text-xs
                font-bold
                uppercase
                tracking-[0.12em]
                text-buildcv-violet
                shadow-buildcv-xs
                transition-all
                duration-300
                group-hover:border-buildcv-violet/30
                group-hover:shadow-buildcv-sm
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-buildcv-violet
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    inline-flex
                    h-2
                    w-2
                    rounded-full
                    bg-buildcv-violet
                  "
                />
              </span>

              Your next opportunity starts here
            </div>

            {/* =================================================
                HEADING
            ================================================= */}

            <h2
              className="
                mx-auto
                mt-6
                max-w-2xl
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
              Your experience deserves a resume

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
                that stands out.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mx-auto
                mt-5
                max-w-xl
                text-sm
                leading-6
                text-buildcv-text-secondary
                sm:text-base
                sm:leading-7
              "
            >
              Create a clean, professional resume in minutes
              and take the next step toward your career goals.
            </p>

            {/* =================================================
                BUTTONS
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-col
                items-center
                justify-center
                gap-3
                sm:flex-row
              "
            >
              {/* Primary CTA */}

              <Link
                to="/builder"
                className="
                  group/button
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
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
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-buildcv-lg
                  sm:w-auto
                "
              >
                <span>Create My Resume</span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                >
                  →
                </span>
              </Link>

              {/* Secondary CTA */}

              <Link
                to="/templates"
                className="
                  group/button
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-buildcv-md
                  border
                  border-buildcv-border
                  bg-white
                  px-6
                  py-3.5
                  text-sm
                  font-semibold
                  text-buildcv-ink
                  shadow-buildcv-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-buildcv-violet/30
                  hover:bg-buildcv-violet-50
                  hover:text-buildcv-violet
                  hover:shadow-buildcv-md
                  sm:w-auto
                "
              >
                <span>Explore Templates</span>

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover/button:translate-x-1
                  "
                >
                  →
                </span>
              </Link>
            </div>

            {/* =================================================
                TRUST INFORMATION
            ================================================= */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                justify-center
                gap-x-6
                gap-y-3
                text-xs
                text-buildcv-text-muted
              "
            >
              {/* No Credit Card */}

              <span className="flex items-center gap-1.5">
                <span
                  className="
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-50
                    text-[9px]
                    font-bold
                    text-emerald-600
                  "
                >
                  ✓
                </span>

                No credit card required
              </span>

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-buildcv-border
                  sm:block
                "
              />

              {/* Free */}

              <span className="flex items-center gap-1.5">
                <span
                  className="
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-50
                    text-[9px]
                    font-bold
                    text-emerald-600
                  "
                >
                  ✓
                </span>

                Start for free
              </span>

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-buildcv-border
                  sm:block
                "
              />

              {/* Templates */}

              <span className="flex items-center gap-1.5">
                <span
                  className="
                    flex
                    h-4
                    w-4
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-50
                    text-[9px]
                    font-bold
                    text-emerald-600
                  "
                >
                  ✓
                </span>

                Professional templates
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA