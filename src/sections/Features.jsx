import { Link } from "react-router-dom"

const features = [
  {
    number: "01",
    title: "Live resume preview",
    description:
      "See your resume update instantly while you build it. No guessing and no constant refreshing.",
  },
  {
    number: "02",
    title: "Professional templates",
    description:
      "Choose from carefully designed layouts built to keep your experience clear and professional.",
  },
  {
    number: "03",
    title: "Easy customization",
    description:
      "Customize your resume without fighting complicated design tools or confusing settings.",
  },
  {
    number: "04",
    title: "Ready-to-use PDF",
    description:
      "Download a polished PDF that is ready to send to employers, recruiters, and clients.",
  },
]

function Features() {
  return (
    <section
      id="features"
      className="
      scroll-mt-28
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
          BACKGROUND DECORATION
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          top-32
          h-[420px]
          w-[420px]
          rounded-full
          bg-buildcv-violet/8
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          bottom-0
          h-[420px]
          w-[420px]
          rounded-full
          bg-buildcv-accent/6
          blur-[120px]
        "
      />

      {/* Subtle grid */}

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


      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">


        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mx-auto max-w-2xl text-center">

          {/* Badge */}

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
                shadow-[0_0_10px_rgba(124,58,237,0.45)]
              "
            />

            Powerful Features

          </div>


          {/* Heading */}

          <h2
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

            Everything you need to build

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
              a better resume.
            </span>

          </h2>


          {/* Description */}

          <p
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
            BuildCV gives you everything you need to create,
            customize, preview, and download a professional
            resume without unnecessary complexity.
          </p>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ====================================================== */}

        <div
          className="
            mt-16
            grid
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-20
            lg:mt-20
          "
        >


          {/* =====================================================
              BUILDER MOCKUP
          ====================================================== */}

          <div className="relative">

            {/* Main glow */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[360px]
                w-[360px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-buildcv-violet/10
                blur-[100px]
                sm:h-[460px]
                sm:w-[460px]
              "
            />


            {/* Browser */}

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-buildcv-2xl
                border
                border-buildcv-border
                bg-white
                shadow-buildcv-xl
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]
              "
            >

              {/* Browser Header */}

              <div
                className="
                  flex
                  h-12
                  items-center
                  justify-between
                  border-b
                  border-buildcv-border
                  bg-white
                  px-4
                  sm:px-5
                "
              >

                {/* Browser dots */}

                <div className="flex items-center gap-1.5">

                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />

                </div>


                {/* URL */}

                <div
                  className="
                    hidden
                    rounded-full
                    border
                    border-buildcv-border
                    bg-buildcv-background
                    px-5
                    py-1.5
                    text-[10px]
                    font-medium
                    text-buildcv-text-muted
                    sm:block
                  "
                >
                  buildcv.app/builder
                </div>


                <div className="w-12" />

              </div>


              {/* Builder */}

              <div
                className="
                  grid
                  min-h-[470px]
                  grid-cols-1
                  md:grid-cols-[0.8fr_1.2fr]
                "
              >


                {/* =================================================
                    SIDEBAR
                ================================================== */}

                <div
                  className="
                    hidden
                    border-r
                    border-buildcv-border
                    bg-buildcv-background
                    p-5
                    md:block
                  "
                >

                  {/* Logo */}

                  <div className="mb-7">

                    <div className="flex items-center gap-2">

                      <div
                        className="
                          flex
                          h-7
                          w-7
                          items-center
                          justify-center
                          rounded-buildcv-md
                          bg-gradient-to-br
                          from-buildcv-violet
                          to-buildcv-accent
                          text-[9px]
                          font-bold
                          text-white
                          shadow-buildcv-violet
                        "
                      >
                        B
                      </div>

                      <div
                        className="
                          h-2
                          w-16
                          rounded-full
                          bg-buildcv-ink
                        "
                      />

                    </div>

                    <div
                      className="
                        mt-2
                        h-1.5
                        w-24
                        rounded-full
                        bg-slate-200
                      "
                    />

                  </div>


                  {/* Navigation */}

                  <div className="space-y-2">

                    {[
                      "Personal Info",
                      "Experience",
                      "Education",
                      "Skills",
                      "Projects",
                    ].map((item, index) => (

                      <div
                        key={item}
                        className={`
                          group/item
                          flex
                          items-center
                          gap-2.5
                          rounded-buildcv-md
                          px-3
                          py-2.5
                          text-[10px]
                          font-medium
                          transition-all
                          duration-300
                          ${index === 0
                            ? "bg-buildcv-violet-50 text-buildcv-violet shadow-sm"
                            : "text-buildcv-text-secondary hover:bg-white hover:text-buildcv-ink hover:shadow-sm"
                          }
                        `}
                      >

                        <span
                          className={`
                            flex
                            h-6
                            w-6
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            text-[9px]
                            font-bold
                            transition-all
                            duration-300
                            ${index === 0
                              ? "bg-buildcv-violet text-white shadow-buildcv-violet"
                              : "border border-buildcv-border bg-white text-buildcv-text-muted group-hover/item:border-buildcv-violet/30 group-hover/item:text-buildcv-violet"
                            }
                          `}
                        >
                          {index + 1}
                        </span>

                        {item}

                      </div>

                    ))}

                  </div>


                  {/* Progress */}

                  <div
                    className="
                      mt-8
                      rounded-buildcv-lg
                      border
                      border-buildcv-border
                      bg-white
                      p-4
                      shadow-buildcv-sm
                    "
                  >

                    <div className="mb-2 flex items-center justify-between">

                      <span
                        className="
                          text-[9px]
                          font-semibold
                          text-buildcv-text-muted
                        "
                      >
                        Resume progress
                      </span>

                      <span
                        className="
                          text-[9px]
                          font-bold
                          text-buildcv-violet
                        "
                      >
                        72%
                      </span>

                    </div>

                    <div
                      className="
                        h-1.5
                        overflow-hidden
                        rounded-full
                        bg-slate-100
                      "
                    >

                      <div
                        className="
                          h-full
                          w-[72%]
                          rounded-full
                          bg-gradient-to-r
                          from-buildcv-violet
                          to-buildcv-accent
                        "
                      />

                    </div>

                  </div>

                </div>


                {/* =================================================
                    RESUME
                ================================================== */}

                <div
                  className="
                    bg-gradient-to-br
                    from-slate-50
                    to-buildcv-violet-50/30
                    p-5
                    sm:p-8
                  "
                >

                  <div
                    className="
                      mx-auto
                      min-h-[420px]
                      max-w-[340px]
                      rounded-xl
                      bg-white
                      p-5
                      shadow-buildcv-lg
                      ring-1
                      ring-slate-200
                      transition-all
                      duration-500
                      group-hover:scale-[1.015]
                      group-hover:shadow-buildcv-xl
                    "
                  >

                    {/* Resume Header */}

                    <div className="flex items-start justify-between">

                      <div>

                        <div
                          className="
                            h-3
                            w-28
                            rounded-full
                            bg-buildcv-ink
                          "
                        />

                        <div
                          className="
                            mt-2
                            h-1.5
                            w-20
                            rounded-full
                            bg-gradient-to-r
                            from-buildcv-violet
                            to-buildcv-accent
                          "
                        />

                      </div>


                      <div
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-full
                          bg-buildcv-violet-50
                          text-[8px]
                          font-bold
                          text-buildcv-violet
                          ring-1
                          ring-buildcv-violet/10
                        "
                      >
                        AM
                      </div>

                    </div>


                    <div className="my-5 h-px bg-slate-200" />


                    {/* Resume Sections */}

                    <div className="space-y-5">

                      {/* Profile */}

                      <div>

                        <div
                          className="
                            mb-2
                            h-1.5
                            w-12
                            rounded-full
                            bg-buildcv-violet
                          "
                        />

                        <div className="space-y-1.5">

                          <div className="h-1.5 w-full rounded-full bg-slate-100" />
                          <div className="h-1.5 w-[90%] rounded-full bg-slate-100" />
                          <div className="h-1.5 w-[75%] rounded-full bg-slate-100" />

                        </div>

                      </div>


                      {/* Experience */}

                      <div>

                        <div
                          className="
                            mb-3
                            h-1.5
                            w-16
                            rounded-full
                            bg-buildcv-violet
                          "
                        />

                        <div className="space-y-3">

                          {[1, 2].map((item) => (

                            <div key={item}>

                              <div
                                className="
                                  h-2
                                  w-24
                                  rounded-full
                                  bg-slate-800
                                "
                              />

                              <div
                                className="
                                  mt-2
                                  h-1.5
                                  w-full
                                  rounded-full
                                  bg-slate-100
                                "
                              />

                              <div
                                className="
                                  mt-1.5
                                  h-1.5
                                  w-[80%]
                                  rounded-full
                                  bg-slate-100
                                "
                              />

                            </div>

                          ))}

                        </div>

                      </div>


                      {/* Skills */}

                      <div>

                        <div
                          className="
                            mb-2
                            h-1.5
                            w-12
                            rounded-full
                            bg-buildcv-violet
                          "
                        />

                        <div className="flex flex-wrap gap-1.5">

                          {[1, 2, 3, 4].map((item) => (

                            <span
                              key={item}
                              className="
                                h-4
                                w-12
                                rounded-full
                                bg-buildcv-violet-50
                                ring-1
                                ring-buildcv-violet/10
                              "
                            />

                          ))}

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* =================================================
                FLOATING STATUS CARD
            ================================================== */}

            <div
              className="
                absolute
                -bottom-7
                -right-3
                z-20
                rounded-buildcv-xl
                border
                border-buildcv-border
                bg-white/95
                p-4
                shadow-buildcv-lg
                backdrop-blur-xl
                transition-all
                duration-500
                group-hover:-translate-y-1
                sm:-right-6
              "
            >

              <div className="flex items-center gap-3">

                <div
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-emerald-50
                    text-sm
                    font-bold
                    text-emerald-600
                    ring-1
                    ring-emerald-500/20
                  "
                >
                  ✓
                </div>

                <div>

                  <p
                    className="
                      text-xs
                      font-bold
                      text-buildcv-ink
                    "
                  >
                    Saved automatically
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      text-buildcv-text-muted
                    "
                  >
                    Your progress is safe
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* =====================================================
              FEATURE LIST
          ====================================================== */}

          <div>

            <div className="space-y-4">

              {features.map((feature) => (

                <div
                  key={feature.number}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-buildcv-xl
                    border
                    border-buildcv-border
                    bg-white
                    p-5
                    shadow-buildcv-sm
                    transition-all
                    duration-500
                    hover:-translate-y-1.5
                    hover:border-buildcv-violet/25
                    hover:shadow-buildcv-lg
                    sm:p-6
                  "
                >

                  {/* Card glow */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-16
                      -top-16
                      h-36
                      w-36
                      rounded-full
                      bg-buildcv-violet/10
                      opacity-0
                      blur-3xl
                      transition-opacity
                      duration-500
                      group-hover:opacity-100
                    "
                  />


                  <div className="relative flex gap-5">

                    {/* Number */}

                    <div
                      className="
                        relative
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-buildcv-lg
                        border
                        border-buildcv-violet/10
                        bg-buildcv-violet-50
                        font-display
                        text-xs
                        font-extrabold
                        text-buildcv-violet
                        shadow-sm
                        transition-all
                        duration-500
                        group-hover:scale-110
                        group-hover:border-buildcv-violet
                        group-hover:bg-gradient-to-br
                        group-hover:from-buildcv-violet
                        group-hover:to-buildcv-accent
                        group-hover:text-white
                        group-hover:shadow-buildcv-violet
                      "
                    >

                      {feature.number}

                      <span
                        className="
                          absolute
                          -right-1
                          -top-1
                          h-2.5
                          w-2.5
                          rounded-full
                          bg-buildcv-accent
                          opacity-0
                          transition-opacity
                          duration-300
                          group-hover:opacity-100
                        "
                      />

                    </div>


                    {/* Content */}

                    <div className="min-w-0">

                      <h3
                        className="
                          font-display
                          text-lg
                          font-bold
                          tracking-tight
                          text-buildcv-ink
                          transition-colors
                          duration-300
                          group-hover:text-buildcv-violet
                          sm:text-xl
                        "
                      >
                        {feature.title}
                      </h3>


                      <p
                        className="
                          mt-2
                          text-sm
                          leading-6
                          text-buildcv-text-secondary
                          sm:text-base
                        "
                      >
                        {feature.description}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            {/* =================================================
                CTA
            ================================================== */}

            <Link
              to="/builder"
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

              Start building your resume

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
              >
                →
              </span>

            </Link>

          </div>

        </div>


        {/* =====================================================
            BOTTOM MICRO CTA
        ====================================================== */}

        <div
          className="
            mt-20
            flex
            flex-col
            items-center
            justify-center
            gap-2
            text-center
          "
        >

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              font-semibold
              text-buildcv-text-muted
            "
          >

            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-emerald-500
              "
            />

            Built for modern job seekers

          </div>

          <p
            className="
              max-w-md
              text-xs
              leading-5
              text-buildcv-text-muted
            "
          >
            Simple enough to use in minutes. Powerful enough
            to create a resume you are proud to send.
          </p>



        </div>


      </div>

    </section>
  )
}

export default Features