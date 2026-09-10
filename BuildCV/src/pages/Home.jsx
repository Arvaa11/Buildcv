import { Link } from "react-router-dom"

import Templates from "../sections/Templates"
import Features from "../sections/Features"
import HowItWorks from "../sections/HowItWorks"
import Testimonials from "../sections/Testimonials"
import Pricing from "../sections/Pricing"
import FinalCTA from "../sections/FinalCTA"


function Home() {
  return (
    <main className="min-h-screen bg-buildcv-background">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        data-hero
        className="
          relative
          isolate
          overflow-hidden
          bg-buildcv-ink
          text-white
        "
      >

        {/* =================================================
            AMBIENT BACKGROUND
        ================================================== */}

        <div
          data-hero-orb
          className="
            pointer-events-none
            absolute
            -left-48
            top-0
            h-[520px]
            w-[520px]
            rounded-full
            bg-buildcv-violet/20
            blur-[120px]
          "
        />

        <div
          data-hero-orb
          className="
            pointer-events-none
            absolute
            -right-48
            top-24
            h-[520px]
            w-[520px]
            rounded-full
            bg-buildcv-accent/15
            blur-[120px]
          "
        />

        <div
          data-hero-orb
          className="
            pointer-events-none
            absolute
            left-1/3
            bottom-[-280px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-buildcv-violet/10
            blur-[140px]
          "
        />


        {/* =================================================
            GRID
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-[0.045]
            [background-image:linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)]
            [background-size:64px_64px]
            [mask-image:linear-gradient(to_bottom,black,transparent)]
          "
        />


        {/* =================================================
            TOP LIGHT
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-buildcv-violet/60
            to-transparent
          "
        />


        {/* =================================================
            HERO CONTAINER
        ================================================== */}

        <div
          className="
            relative
            mx-auto
            max-w-7xl
            px-5
            pb-24
            pt-32
            sm:px-6
            sm:pb-28
            sm:pt-36
            lg:px-8
            lg:pb-32
            lg:pt-40
          "
        >

          <div
            className="
              grid
              items-center
              gap-20
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-16
          "
          >


            {/* =================================================
                LEFT CONTENT
            ================================================== */}

            <div
              data-hero-content
              className="relative z-10"
            >

              {/* Product badge */}

              <div
                data-hero-badge
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.06]
                  px-3.5
                  py-2
                  text-xs
                  font-medium
                  text-slate-300
                  shadow-buildcv-sm
                  backdrop-blur-md
                "
              >

                <span
                  className="
                    flex
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-buildcv-violet-400
                    shadow-[0_0_10px_rgba(167,139,250,0.9)]
                  "
                />

                Build your career. Start with a better resume.

              </div>


              {/* =================================================
                  HEADLINE
              ================================================== */}

              <h1
                data-hero-title
                className="
                  mt-7
                  max-w-4xl
                  font-display
                  text-5xl
                  font-extrabold
                  leading-[1.04]
                  tracking-[-0.04em]
                  sm:text-6xl
                  lg:text-7xl
                  xl:text-[5.25rem]
                "
              >

                Build a resume

                <span
                  className="
                    mt-1
                    block
                    bg-gradient-to-r
                    from-buildcv-violet-400
                    via-buildcv-violet-500
                    to-buildcv-accent
                    bg-clip-text
                    text-transparent
                  "
                >
                  that gets noticed.
                </span>

              </h1>


              {/* =================================================
                  DESCRIPTION
              ================================================== */}

              <p
                data-hero-description
                className="
                  mt-7
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-300
                  sm:text-lg
                  sm:leading-8
                "
              >
                Create a professional, job-ready resume in minutes.
                Choose a beautiful template, add your experience,
                and let BuildCV turn your story into a resume
                recruiters want to read.
              </p>


              {/* =================================================
                  CTA BUTTONS
              ================================================== */}

              <div
                data-hero-actions
                className="
                  mt-9
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  
                "
              >

                {/* Primary */}

                <Link
                  to="/templates"
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

                  <span
                    className="
    absolute
    inset-0
    -translate-x-full
    bg-gradient-to-r
    from-transparent
    via-white/25F
    to-transparent
    transition-transform
    duration-700
    group-hover:translate-x-full
  "
                  />

                  <span className="relative">
                    Create My Resume
                  </span>

                  <span
                    className="
    relative
    text-base
    transition-transform
    duration-300
    group-hover:translate-x-1
  "
                  >
                    →
                  </span>

                </Link>


                <Link
                  to="/templates"
                  className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    rounded-buildcv-md
    border
    border-white/15
    bg-white/[0.05]
    px-6
    py-3.5
    text-sm
    font-semibold
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-white/25
    hover:bg-white/[0.09]
  "
                >
                  Explore Templates

                  <span
                    className="
      text-slate-400
      transition-transform
      duration-300
      group-hover:translate-y-0.5
    "
                  >
                    →
                  </span>
                </Link>

                <div className="flex -space-x-2 ">

                  {["A", "M", "S", "J"].map((letter, index) => (

                    <div
                      key={letter}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border-2
                        border-buildcv-ink
                        bg-gradient-to-br
                        from-buildcv-violet-100
                        to-buildcv-accent-soft
                        text-xs
                        font-bold
                        text-buildcv-violet
                      "
                      style={{
                        zIndex: 10 - index,
                      }}
                    >
                      {letter}
                    </div>

                  ))}

                </div>


                <div>

                  <div className="flex items-center gap-1">

                    <div className="flex text-sm text-amber-300">
                      ★★★★★
                    </div>

                    <span className="text-xs font-semibold text-white">
                      Loved by creators
                    </span>

                  </div>

                  <p className="mt-0.5 text-xs text-slate-400">
                    Build a resume you're proud to send.
                  </p>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT — RESUME SHOWCASE
            ================================================== */}

            <div
              data-hero-visual
              className="
                relative
                flex
                min-h-[540px]
                items-center
                justify-center
                lg:min-h-[620px]
                lg:justify-end
              "
            >

              {/* Main visual glow */}

              <div
                data-hero-orb
                className="
    pointer-events-none
    absolute
    -left-48
    top-0
    h-[520px]
    w-[520px]
    rounded-full
    bg-buildcv-violet/35
    blur-[100px]
  "
              />

              <div
                data-hero-orb
                className="
    pointer-events-none
    absolute
    -right-48
    top-24
    h-[520px]
    w-[520px]
    rounded-full
    bg-buildcv-accent/30
    blur-[100px]
  "
              />

              <div
                data-hero-orb
                className="
    pointer-events-none
    absolute
    left-1/3
    bottom-[-280px]
    h-[500px]
    w-[500px]
    rounded-full
    bg-buildcv-violet/20
    blur-[110px]
  "
              />


              {/* =================================================
                  RESUME CARD
              ================================================== */}

              <div
                data-hero-resume
                className="
                  relative
                  z-10
                  w-full
                  max-w-[500px]
                  rotate-[1.5deg]
                  rounded-buildcv-2xl
                  bg-white
                  p-5
                  text-buildcv-ink
                  shadow-[0_40px_100px_rgba(0,0,0,0.35)]
                  ring-1
                  ring-white/80
                  transition-transform
                  duration-700
                  sm:p-7
                "
              >

                {/* Resume top accent */}

                <div
                  className="
                    absolute
                    inset-x-0
                    top-0
                    h-1
                    rounded-t-buildcv-2xl
                    bg-gradient-to-r
                    from-buildcv-violet
                    via-buildcv-violet-500
                    to-buildcv-accent
                  "
                />


                {/* Resume header */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >

                  <div>

                    <h2
                      className="
                        font-display
                        text-2xl
                        font-extrabold
                        tracking-tight
                      "
                    >
                      Alex Morgan
                    </h2>

                    <p
                      className="
                        mt-1
                        text-sm
                        font-semibold
                        text-buildcv-violet
                      "
                    >
                      Frontend Developer
                    </p>

                    <p
                      className="
                        mt-2
                        text-[10px]
                        text-buildcv-text-muted
                      "
                    >
                      alex.morgan@email.com · New York, NY
                    </p>

                  </div>


                  {/* Profile */}

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-2xl
                      bg-gradient-to-br
                      from-buildcv-violet-100
                      to-buildcv-accent-soft
                      text-sm
                      font-bold
                      text-buildcv-violet
                    "
                  >
                    AM
                  </div>

                </div>


                <div className="my-5 h-px bg-buildcv-border" />


                {/* Profile */}

                <div>

                  <h3
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-buildcv-violet
                    "
                  >
                    Profile
                  </h3>

                  <p
                    className="
                      mt-2
                      text-xs
                      leading-5
                      text-buildcv-text-secondary
                    "
                  >
                    Frontend developer passionate about creating
                    responsive, accessible, and user-friendly web
                    experiences with modern technologies.
                  </p>

                </div>


                {/* Experience */}

                <div className="mt-6">

                  <h3
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-buildcv-violet
                    "
                  >
                    Experience
                  </h3>


                  <div className="mt-3 space-y-4">

                    <div>

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        "
                      >

                        <strong
                          className="
                            text-xs
                            font-bold
                            text-buildcv-ink
                          "
                        >
                          Frontend Developer
                        </strong>

                        <span
                          className="
                            shrink-0
                            text-[9px]
                            text-buildcv-text-muted
                          "
                        >
                          2023 — Present
                        </span>

                      </div>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-4
                          text-buildcv-text-secondary
                        "
                      >
                        Building responsive web applications
                        using React, TypeScript, and modern CSS.
                      </p>

                    </div>


                    <div>

                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        "
                      >

                        <strong
                          className="
                            text-xs
                            font-bold
                            text-buildcv-ink
                          "
                        >
                          Web Developer
                        </strong>

                        <span
                          className="
                            shrink-0
                            text-[9px]
                            text-buildcv-text-muted
                          "
                        >
                          2021 — 2023
                        </span>

                      </div>

                      <p
                        className="
                          mt-1
                          text-[10px]
                          leading-4
                          text-buildcv-text-secondary
                        "
                      >
                        Developed modern websites and improved
                        digital experiences for growing brands.
                      </p>

                    </div>

                  </div>

                </div>


                {/* Skills */}

                <div className="mt-6">

                  <h3
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-buildcv-violet
                    "
                  >
                    Skills
                  </h3>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      gap-1.5
                    "
                  >

                    {[
                      "React",
                      "TypeScript",
                      "JavaScript",
                      "CSS",
                      "Git",
                      "UI/UX",
                    ].map((skill) => (

                      <span
                        key={skill}
                        className="
                          rounded-md
                          bg-buildcv-surface-violet
                          px-2
                          py-1
                          text-[9px]
                          font-semibold
                          text-buildcv-violet
                        "
                      >
                        {skill}
                      </span>

                    ))}

                  </div>

                </div>


                {/* Resume footer */}

                <div
                  className="
                    mt-6
                    flex
                    items-center
                    justify-between
                    border-t
                    border-buildcv-border
                    pt-4
                  "
                >

                  <span
                    className="
                      text-[9px]
                      font-medium
                      text-buildcv-text-muted
                    "
                  >
                    buildcv.app
                  </span>

                  <span
                    className="
                      rounded-full
                      bg-buildcv-success-soft
                      px-2
                      py-1
                      text-[8px]
                      font-bold
                      text-buildcv-success
                    "
                  >
                    ATS Ready
                  </span>

                </div>

              </div>


              {/* =================================================
                  SCORE CARD
              ================================================== */}

              <div
                data-hero-score
                className="
                  absolute
                  bottom-3
                  left-0
                  z-20
                  flex
                  items-center
                  gap-3
                  rounded-buildcv-xl
                  border
                  border-white/70
                  bg-white/90
                  p-3
                  shadow-buildcv-xl
                  backdrop-blur-xl
                  sm:-left-8
                  sm:p-4
                "
              >

                <div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-buildcv-success-soft
                    text-buildcv-success
                    ring-1
                    ring-buildcv-success/20
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
                    Resume Score
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      text-buildcv-text-secondary
                    "
                  >
                    Excellent profile
                  </p>

                </div>

                <strong
                  className="
                    ml-1
                    text-xl
                    font-extrabold
                    text-buildcv-success
                  "
                >
                  92%
                </strong>

              </div>


              {/* =================================================
                  ATS CARD
              ================================================== */}

              <div
                data-hero-ats
                className="
                  absolute
                  right-0
                  top-16
                  z-20
                  hidden
                  items-center
                  gap-2.5
                  rounded-buildcv-lg
                  border
                  border-white/60
                  bg-white/90
                  px-3.5
                  py-3
                  shadow-buildcv-lg
                  backdrop-blur-xl
                  sm:flex
                  lg:-right-4
                "
              >

                <div
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    bg-buildcv-violet-100
                    text-buildcv-violet
                  "
                >
                  ✦
                </div>

                <div>

                  <p
                    className="
                      text-[10px]
                      font-bold
                      text-buildcv-ink
                    "
                  >
                    ATS Optimized
                  </p>

                  <p
                    className="
                      text-[9px]
                      text-buildcv-text-muted
                    "
                  >
                    Ready to apply
                  </p>

                </div>

              </div>


              {/* Decorative dot */}

              <div
                className="
                  absolute
                  -bottom-10
                  right-10
                  h-3
                  w-3
                  rounded-full
                  bg-buildcv-violet-400
                  shadow-[0_0_20px_rgba(167,139,250,0.8)]
                "
              />

            </div>

          </div>


          {/* =================================================
              BOTTOM SCROLL INDICATOR
          ================================================== */}

          <a
            href="#templates"
            className="
              group
              mx-auto
              mt-20
              flex
              w-fit
              flex-col
              items-center
              gap-2
              text-xs
              font-medium
              text-slate-500
              transition-colors
              hover:text-white
              lg:mt-24
            "
          >

            <span>
              Explore BuildCV
            </span>

            <span
              className="
                flex
                h-8
                w-5
                items-start
                justify-center
                rounded-full
                border
                border-white/20
                p-1
              "
            >

              <span
                className="
                  h-1.5
                  w-1
                  rounded-full
                  bg-buildcv-violet-400
                  transition-transform
                  duration-300
                  group-hover:translate-y-2
                "
              />

            </span>

          </a>

        </div>


        {/* =================================================
            BOTTOM FADE
        ================================================== */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-32
            bg-gradient-to-t
            from-buildcv-background
            to-transparent
          "
        />

      </section>


      {/* =====================================================
          SECTIONS
      ====================================================== */}

      <section id="templates" className="scroll-mt-28">
        <Templates />
      </section>

      <section id="features" className="scroll-mt-28">
        <Features />
      </section>

      <section id="how-it-works" className="scroll-mt-28">
        <HowItWorks />
      </section>

      <Testimonials />

      <section id="pricing" className="scroll-mt-28">
        <Pricing />
      </section>

      <FinalCTA />

    </main>
  )
}

export default Home