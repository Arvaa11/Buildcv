import { Link } from "react-router-dom"

const footerLinks = {
  Product: [
    { label: "Resume Builder", href: "/builder" },
    { label: "Templates", href: "/templates" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
  ],

  Resources: [
    { label: "Resume Tips", href: "#" },
    { label: "Career Guide", href: "#" },
    { label: "Help Center", href: "#" },
  ],

  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
}

const socialLinks = [
  {
    label: "LinkedIn",
    short: "in",
    href: "#",
  },
  {
    label: "GitHub",
    short: "GH",
    href: "#",
  },
  {
    label: "X",
    short: "𝕏",
    href: "#",
  },
]

function Footer() {
  return (
    <footer
      className="
        relative
        isolate
        overflow-hidden
        bg-[#0B0D14]
        text-white
      "
    >
      {/* =================================================
          BACKGROUND EFFECTS
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          -top-40
          h-96
          w-96
          rounded-full
          bg-buildcv-violet/15
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          bottom-0
          h-96
          w-96
          rounded-full
          bg-buildcv-accent/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-72
          w-72
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-buildcv-violet/5
          blur-[100px]
        "
      />

      {/* =================================================
          TOP GRADIENT LINE
      ================================================= */}

      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-buildcv-violet
          to-transparent
          opacity-70
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
            TOP CTA
        ================================================= */}

        <div className="border-b border-white/[0.08] py-10 sm:py-12">
          <div
            className="
              relative
              overflow-hidden
              rounded-buildcv-2xl
              border
              border-white/[0.08]
              bg-white/[0.035]
              px-6
              py-7
              backdrop-blur-xl
              sm:px-8
              sm:py-8
            "
          >
            {/* CTA glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-52
                w-52
                rounded-full
                bg-buildcv-violet/15
                blur-3xl
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                -bottom-24
                -left-20
                h-48
                w-48
                rounded-full
                bg-buildcv-accent/10
                blur-3xl
              "
            />

            <div
              className="
                relative
                flex
                flex-col
                gap-6
                sm:flex-row
                sm:items-center
                sm:justify-between
              "
            >
              {/* Brand */}

              <Link
                to="/"
                className="group flex items-center gap-4"
              >
                {/* Logo */}

                <div
                  className="
                    relative
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-buildcv-md
                    bg-gradient-to-br
                    from-buildcv-violet
                    to-buildcv-accent
                    font-display
                    text-lg
                    font-extrabold
                    text-white
                    shadow-buildcv-violet
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:shadow-buildcv-lg
                  "
                >
                  B

                  <span
                    className="
                      absolute
                      -right-2
                      -top-2
                      h-6
                      w-6
                      rounded-full
                      bg-white/20
                      blur-md
                    "
                  />
                </div>

                <div>
                  <h2
                    className="
                      font-display
                      text-xl
                      font-extrabold
                      tracking-tight
                    "
                  >
                    Build
                    <span className="text-buildcv-accent">
                      CV
                    </span>
                  </h2>

                  <p
                    className="
                      mt-1
                      text-sm
                      text-slate-400
                    "
                  >
                    Build a resume. Build your future.
                  </p>
                </div>
              </Link>

              {/* CTA */}

              <Link
                to="/template"
                className="
                  group/button
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2.5
                  rounded-buildcv-md
                  bg-gradient-to-r
                  from-buildcv-violet
                  to-buildcv-accent
                  px-6
                  py-3.5
                  text-sm
                  font-bold
                  text-white
                  shadow-buildcv-violet
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-buildcv-lg
                  sm:w-auto
                "
              >
                Start Building

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
          </div>
        </div>

        {/* =================================================
            MAIN FOOTER
        ================================================= */}

        <div
          className="
            grid
            grid-cols-2
            gap-x-8
            gap-y-12
            py-14
            sm:py-16
            lg:grid-cols-[1.7fr_1fr_1fr_1fr]
            lg:gap-16
          "
        >
          {/* =================================================
              BRAND / ABOUT
          ================================================= */}

          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="
                inline-flex
                items-center
                font-display
                text-2xl
                font-extrabold
                tracking-tight
              "
            >
              Build
              <span
                className="
                  bg-gradient-to-r
                  from-buildcv-violet
                  to-buildcv-accent
                  bg-clip-text
                  text-transparent
                "
              >
                CV
              </span>
            </Link>

            <p
              className="
                mt-4
                max-w-sm
                text-sm
                leading-7
                text-slate-400
              "
            >
              Create a professional resume without
              complicated design tools. Choose a template,
              add your information, and make your next
              opportunity count.
            </p>

            {/* Trust indicator */}

            <div
              className="
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.035]
                px-3
                py-2
                text-xs
                font-medium
                text-slate-400
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-emerald-400
                    opacity-40
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-emerald-400
                  "
                />
              </span>

              Start building for free
            </div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-buildcv-md
                    border
                    border-white/[0.08]
                    bg-white/[0.035]
                    text-xs
                    font-bold
                    text-slate-400
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-buildcv-violet/40
                    hover:bg-buildcv-violet
                    hover:text-white
                    hover:shadow-buildcv-violet
                  "
                >
                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {social.short}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* =================================================
              LINK COLUMNS
          ================================================= */}

          {Object.entries(footerLinks).map(
            ([title, links]) => (
              <div key={title}>
                <h3
                  className="
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white
                  "
                >
                  {title}
                </h3>

                {/* Accent */}

                <div
                  className="
                    mt-3
                    h-0.5
                    w-7
                    rounded-full
                    bg-gradient-to-r
                    from-buildcv-violet
                    to-buildcv-accent
                  "
                />

                <ul className="mt-6 space-y-3.5">
                  {links.map((link) => {
                    const isInternal =
                      link.href.startsWith("/")

                    const linkClassName = `
                      group
                      inline-flex
                      items-center
                      gap-0
                      text-sm
                      text-slate-400
                      transition-all
                      duration-200
                      hover:translate-x-1
                      hover:text-white
                    `

                    const arrowClassName = `
                      mr-0
                      w-0
                      overflow-hidden
                      text-buildcv-accent
                      opacity-0
                      transition-all
                      duration-200
                      group-hover:mr-2
                      group-hover:w-3
                      group-hover:opacity-100
                    `

                    if (isInternal) {
                      return (
                        <li key={link.label}>
                          <Link
                            to={link.href}
                            className={linkClassName}
                          >
                            <span
                              className={arrowClassName}
                            >
                              →
                            </span>

                            {link.label}
                          </Link>
                        </li>
                      )
                    }

                    return (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={linkClassName}
                        >
                          <span
                            className={arrowClassName}
                          >
                            →
                          </span>

                          {link.label}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          )}
        </div>

        {/* =================================================
            BOTTOM BAR
        ================================================= */}

        <div className="border-t border-white/[0.08] py-6">
          <div
            className="
              flex
              flex-col
              gap-3
              text-xs
              text-slate-500
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p>
              © 2026 BuildCV. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <span>
                Built for better opportunities.
              </span>

              <span className="text-buildcv-violet">
                •
              </span>

              <span className="text-slate-400">
                Made with purpose.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer