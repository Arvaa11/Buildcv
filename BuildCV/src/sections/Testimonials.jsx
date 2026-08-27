import { Link } from "react-router-dom"

const testimonials = [
  {
    quote:
      "BuildCV made creating my resume so much easier. I chose a template, added my information, and had a professional resume ready in minutes.",
    name: "Sarah Ahmed",
    role: "Marketing Specialist",
    initials: "SA",
  },
  {
    quote:
      "I love how simple the builder is. The live preview made it easy to see exactly how my resume would look before downloading it.",
    name: "Daniel Wilson",
    role: "Software Developer",
    initials: "DW",
  },
  {
    quote:
      "The templates look professional without being complicated. I finally have a resume that actually feels like me.",
    name: "Maya Khan",
    role: "UX Designer",
    initials: "MK",
  },
]

const stats = [
  {
    value: "10K+",
    label: "Resumes created",
  },
  {
    value: "25+",
    label: "Professional templates",
  },
  {
    value: "4.9/5",
    label: "Average user rating",
  },
  {
    value: "5 min",
    label: "Average build time",
  },
]

function Testimonials() {
  return (
    <section
      id="testimonials"
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
      {/* Background Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-80
          w-80
          rounded-full
          bg-buildcv-violet/10
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-10
          h-80
          w-80
          rounded-full
          bg-buildcv-accent/8
          blur-[110px]
        "
      />

      {/* Subtle Grid */}

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

      {/* Container */}

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
        {/* Header */}

        <div className="mx-auto max-w-2xl text-center">
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
                shadow-[0_0_8px_rgba(124,58,237,0.5)]
              "
            />

            Loved by job seekers
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
            People are building better resumes

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
              with BuildCV.
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
            A simple resume builder designed to help you present your skills,
            experience, and potential with confidence.
          </p>
        </div>

        {/* Testimonial Cards */}

        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
            lg:gap-6
          "
        >
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="
                group
                relative
                flex
                flex-col
                overflow-hidden
                rounded-buildcv-2xl
                border
                border-buildcv-border
                bg-white
                p-6
                shadow-buildcv-sm
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-buildcv-violet/25
                hover:shadow-buildcv-xl
                sm:p-7
              "
            >
              {/* Top Gradient */}

              <div
                className="
                  absolute
                  inset-x-0
                  top-0
                  h-1
                  origin-left
                  scale-x-0
                  bg-gradient-to-r
                  from-buildcv-violet
                  via-buildcv-violet-500
                  to-buildcv-accent
                  transition-transform
                  duration-500
                  group-hover:scale-x-100
                "
              />

              {/* Quote Mark */}

              <div
                className="
                  pointer-events-none
                  absolute
                  right-5
                  top-3
                  font-serif
                  text-6xl
                  font-bold
                  leading-none
                  text-buildcv-violet/5
                  transition-all
                  duration-500
                  group-hover:text-buildcv-violet/10
                "
              >
                "
              </div>

              {/* Rating */}

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className="
                        text-sm
                        text-amber-400
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    >
                      ★
                    </span>
                  ))}
                </div>

                <span
                  className="
                    rounded-full
                    bg-buildcv-surface
                    px-2.5
                    py-1
                    text-[10px]
                    font-semibold
                    text-buildcv-text-muted
                  "
                >
                  Verified
                </span>
              </div>

              {/* Quote */}

              <blockquote
                className="
                  relative
                  mt-6
                  flex-1
                  text-sm
                  leading-7
                  text-buildcv-text-secondary
                  sm:text-base
                "
              >
                “{testimonial.quote}”
              </blockquote>

              {/* User */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-3
                  border-t
                  border-buildcv-border
                  pt-5
                "
              >
                {/* Avatar */}

                <div
                  className="
                    relative
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-br
                    from-buildcv-violet
                    to-buildcv-accent
                    font-display
                    text-xs
                    font-bold
                    text-white
                    shadow-buildcv-sm
                    ring-4
                    ring-buildcv-violet-50
                    transition-all
                    duration-300
                    group-hover:scale-110
                  "
                >
                  {testimonial.initials}

                  <span
                    className="
                      absolute
                      bottom-0
                      right-0
                      h-3
                      w-3
                      rounded-full
                      border-2
                      border-white
                      bg-emerald-400
                    "
                  />
                </div>

                {/* User Information */}

                <div className="min-w-0">
                  <p
                    className="
                      truncate
                      text-sm
                      font-bold
                      text-buildcv-ink
                    "
                  >
                    {testimonial.name}
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-xs
                      text-buildcv-text-muted
                    "
                  >
                    {testimonial.role}
                  </p>
                </div>

                {/* Arrow */}

                <div
                  className="
                    ml-auto
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-buildcv-surface
                    text-sm
                    text-buildcv-text-muted
                    transition-all
                    duration-300
                    group-hover:bg-buildcv-violet
                    group-hover:text-white
                  "
                >
                  →
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Social Proof */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:flex-row
          "
        >
          <div className="flex -space-x-2">
            {["SA", "DW", "MK", "AK"].map((initials) => (
              <div
                key={initials}
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-white
                  bg-gradient-to-br
                  from-buildcv-violet
                  to-buildcv-accent
                  text-[9px]
                  font-bold
                  text-white
                  shadow-sm
                "
              >
                {initials}
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center justify-center gap-1.5">
              <span
                className="
                  text-sm
                  font-bold
                  text-buildcv-ink
                "
              >
                4.9
              </span>

              <span className="text-sm text-amber-400">
                ★★★★★
              </span>
            </div>

            <p
              className="
                text-xs
                text-buildcv-text-muted
              "
            >
              Trusted by thousands of job seekers
            </p>
          </div>
        </div>

        {/* Statistics */}

        <div
          className="
            mt-12
            overflow-hidden
            rounded-buildcv-2xl
            border
            border-buildcv-border
            bg-white
            shadow-buildcv-md
          "
        >
          <div
            className="
              grid
              grid-cols-2
              divide-x
              divide-y
              divide-buildcv-border
              lg:grid-cols-4
              lg:divide-y-0
            "
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  group
                  relative
                  px-5
                  py-6
                  text-center
                  transition-all
                  duration-300
                  hover:bg-buildcv-violet-50/50
                  sm:px-8
                  sm:py-8
                "
              >
                {/* Active Indicator */}

                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-1
                    w-0
                    -translate-x-1/2
                    rounded-b-full
                    bg-gradient-to-r
                    from-buildcv-violet
                    to-buildcv-accent
                    transition-all
                    duration-300
                    group-hover:w-12
                  "
                />

                <div
                  className="
                    font-display
                    text-2xl
                    font-extrabold
                    tracking-tight
                    text-buildcv-ink
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:text-buildcv-violet
                    sm:text-3xl
                  "
                >
                  {stat.value}
                </div>

                <p
                  className="
                    mt-2
                    text-xs
                    font-medium
                    text-buildcv-text-muted
                    sm:text-sm
                  "
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}

        <div
          className="
            mt-10
            flex
            flex-col
            items-center
            justify-between
            gap-5
            rounded-buildcv-2xl
            border
            border-buildcv-violet/15
            bg-gradient-to-r
            from-buildcv-violet-50
            via-white
            to-buildcv-accent-soft
            px-6
            py-7
            text-center
            shadow-buildcv-sm
            sm:flex-row
            sm:px-8
            sm:text-left
          "
        >
          <div>
            <h3
              className="
                font-display
                text-lg
                font-bold
                text-buildcv-ink
                sm:text-xl
              "
            >
              Ready to create yours?
            </h3>

            <p
              className="
                mt-1
                text-sm
                text-buildcv-text-secondary
              "
            >
              Build a professional resume without starting from a blank page.
            </p>
          </div>

          <Link
            to="/builder"
            className="
              group
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
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              shadow-buildcv-violet
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-buildcv-lg
            "
          >
            <span>Start Building</span>

            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Testimonials