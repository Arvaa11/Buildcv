import { Link } from "react-router-dom"

const plans = [
  {
    name: "Free",
    description:
      "Everything you need to create a professional resume and start your job search.",
    price: "$0",
    period: "forever",
    features: [
      "Access to selected templates",
      "Resume builder",
      "Live resume preview",
      "Basic customization",
      "PDF download",
    ],
    button: "Start for Free",
    href: "/builder",
    featured: false,
  },
  {
    name: "Pro",
    description:
      "Advanced tools and premium features for creating polished, standout resumes.",
    price: "$9",
    period: "per month",
    features: [
      "All professional templates",
      "Unlimited resumes",
      "Advanced customization",
      "Multiple resume versions",
      "Premium PDF export",
      "Priority support",
    ],
    button: "Get Pro",
    href: "/builder?plan=pro",
    featured: true,
  },
]

function Pricing() {
  return (
    <section
      id="pricing"
      className="
      scroll-mt-28
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

      <div className="pointer-events-none absolute left-1/2 top-[-250px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-buildcv-violet/20 blur-3xl" />

      {/* Left Pink Glow */}
      <div className="pointer-events-none absolute left-[5%] top-[40%] h-40 w-40 rounded-full bg-buildcv-accent/15 blur-3xl" />

      {/* Right Violet Glow */}
      <div className="pointer-events-none absolute right-[5%] top-[25%] h-40 w-40 rounded-full bg-buildcv-violet/20 blur-3xl" />

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
            HEADER
        ================================================= */}

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

            Simple Pricing
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
            Start free.

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
              Upgrade when you're ready.
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
            Create your first resume for free. Upgrade when you need
            more templates, customization, and powerful features.
          </p>
        </div>

        {/* =================================================
            PRICING CARDS
        ================================================= */}

        <div
          className="
            mx-auto
            mt-14
            grid
            max-w-4xl
            grid-cols-1
            gap-6
            md:grid-cols-2
            md:gap-7
          "
        >
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`
                group/card
                relative
                flex
                flex-col
                overflow-hidden
                rounded-buildcv-2xl
                border
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                sm:p-8

                ${plan.featured
                  ? `
                      border-buildcv-violet/30
                      bg-white
                      shadow-buildcv-lg
                      hover:border-buildcv-violet/50
                      hover:shadow-buildcv-xl
                    `
                  : `
                      border-buildcv-border
                      bg-white
                      shadow-buildcv-sm
                      hover:border-buildcv-violet/25
                      hover:shadow-buildcv-lg
                    `
                }
              `}
            >
              {/* =================================================
                  TOP GRADIENT
              ================================================= */}

              <div
                className={`
                  absolute
                  inset-x-0
                  top-0
                  h-1
                  bg-gradient-to-r
                  from-buildcv-violet
                  to-buildcv-accent
                  transition-transform
                  duration-500
                  ${plan.featured
                    ? "scale-x-100"
                    : "origin-left scale-x-0 group-hover/card:scale-x-100"
                  }
                `}
              />

              {/* =================================================
                  PRO BACKGROUND GLOW
              ================================================= */}

              {plan.featured && (
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-24
                    -top-24
                    h-56
                    w-56
                    rounded-full
                    bg-buildcv-violet/10
                    blur-3xl
                    transition-all
                    duration-500
                    group-hover/card:bg-buildcv-violet/20
                  "
                />
              )}

              {/* =================================================
                  POPULAR BADGE
              ================================================= */}

              {plan.featured && (
                <div
                  className="
                    absolute
                    right-5
                    top-5
                    rounded-full
                    bg-gradient-to-r
                    from-buildcv-violet
                    to-buildcv-accent
                    px-3
                    py-1.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-white
                    shadow-buildcv-violet
                    transition-transform
                    duration-300
                    group-hover/card:scale-105
                  "
                >
                  Most Popular
                </div>
              )}

              {/* =================================================
                  PLAN HEADER
              ================================================= */}

              <div className="relative">
                <div className="flex items-center gap-3">
                  {/* Plan Icon */}

                  <div
                    className={`
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-buildcv-md
                      font-display
                      text-sm
                      font-bold
                      transition-all
                      duration-300

                      ${plan.featured
                        ? `
                            bg-gradient-to-br
                            from-buildcv-violet
                            to-buildcv-accent
                            text-white
                            shadow-buildcv-violet
                            group-hover/card:scale-105
                          `
                        : `
                            bg-buildcv-violet-50
                            text-buildcv-violet
                            group-hover/card:bg-buildcv-violet
                            group-hover/card:text-white
                          `
                      }
                    `}
                  >
                    {plan.featured ? "★" : "✓"}
                  </div>

                  {/* Name */}

                  <div>
                    <h3
                      className="
                        font-display
                        text-xl
                        font-bold
                        text-buildcv-ink
                      "
                    >
                      {plan.name}
                    </h3>

                    <p
                      className="
                        mt-0.5
                        text-xs
                        font-medium
                        text-buildcv-text-muted
                      "
                    >
                      {plan.featured
                        ? "For serious job seekers"
                        : "Perfect to get started"}
                    </p>
                  </div>
                </div>

                {/* Description */}

                <p
                  className="
                    mt-5
                    min-h-[48px]
                    max-w-sm
                    text-sm
                    leading-6
                    text-buildcv-text-secondary
                  "
                >
                  {plan.description}
                </p>
              </div>

              {/* =================================================
                  PRICE
              ================================================= */}

              <div
                className="
                  mt-7
                  rounded-buildcv-xl
                  border
                  border-buildcv-border
                  bg-buildcv-surface
                  px-5
                  py-5
                  transition-all
                  duration-300
                  group-hover/card:border-buildcv-violet/15
                  group-hover/card:shadow-buildcv-xs
                "
              >
                <div className="flex items-end gap-2">
                  <span
                    className="
                      font-display
                      text-4xl
                      font-extrabold
                      tracking-tight
                      text-buildcv-ink
                      transition-colors
                      duration-300
                      group-hover/card:text-buildcv-violet
                      sm:text-5xl
                    "
                  >
                    {plan.price}
                  </span>

                  <span
                    className="
                      mb-1
                      text-xs
                      font-medium
                      text-buildcv-text-muted
                    "
                  >
                    {plan.period}
                  </span>
                </div>

                {plan.featured && (
                  <p
                    className="
                      mt-2
                      text-xs
                      font-semibold
                      text-buildcv-violet
                    "
                  >
                    Unlock everything BuildCV offers.
                  </p>
                )}
              </div>

              {/* =================================================
                  DIVIDER
              ================================================= */}

              <div className="my-7 h-px bg-buildcv-border" />

              {/* =================================================
                  FEATURES
              ================================================= */}

              <div className="flex-1">
                <p
                  className="
                    mb-4
                    text-xs
                    font-bold
                    uppercase
                    tracking-[0.1em]
                    text-buildcv-text-muted
                  "
                >
                  What's included
                </p>

                <ul className="space-y-3.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="
                        group/feature
                        flex
                        items-start
                        gap-3
                      "
                    >
                      <span
                        className={`
                          mt-0.5
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          text-[10px]
                          font-bold
                          transition-all
                          duration-300

                          ${plan.featured
                            ? `
                                bg-buildcv-violet
                                text-white
                                group-hover/feature:scale-110
                              `
                            : `
                                bg-buildcv-violet-50
                                text-buildcv-violet
                                group-hover/feature:bg-buildcv-violet
                                group-hover/feature:text-white
                                group-hover/feature:scale-110
                              `
                          }
                        `}
                      >
                        ✓
                      </span>

                      <span
                        className="
                          text-sm
                          leading-5
                          text-buildcv-text-secondary
                          transition-colors
                          duration-200
                          group-hover/feature:text-buildcv-ink
                        "
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <Link
                to={plan.href}
                className={`
                  group/button
                  mt-8
                  inline-flex
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-buildcv-md
                  px-5
                  py-3.5
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:-translate-y-1

                  ${plan.featured
                    ? `
                        bg-gradient-to-r
                        from-buildcv-violet
                        to-buildcv-accent
                        text-white
                        shadow-buildcv-violet
                        hover:shadow-buildcv-lg
                      `
                    : `
                        border
                        border-buildcv-border
                        bg-buildcv-background
                        text-buildcv-ink
                        hover:border-buildcv-violet/30
                        hover:bg-buildcv-violet-50
                        hover:text-buildcv-violet
                        hover:shadow-buildcv-sm
                      `
                  }
                `}
              >
                <span>{plan.button}</span>

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
            </article>
          ))}
        </div>

        {/* =================================================
            TRUST NOTE
        ================================================= */}

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
            sm:gap-6
          "
        >
          {/* No Credit Card */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-buildcv-border
              bg-white
              px-4
              py-2
              shadow-buildcv-sm
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-buildcv-violet-50
                text-[10px]
                font-bold
                text-buildcv-violet
              "
            >
              ✓
            </span>

            <p
              className="
                text-xs
                font-medium
                text-buildcv-text-secondary
              "
            >
              No credit card required
            </p>
          </div>

          {/* Free Start */}

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-buildcv-border
              bg-white
              px-4
              py-2
              shadow-buildcv-sm
            "
          >
            <span
              className="
                flex
                h-5
                w-5
                items-center
                justify-center
                rounded-full
                bg-buildcv-violet-50
                text-[10px]
                font-bold
                text-buildcv-violet
              "
            >
              ✓
            </span>

            <p
              className="
                text-xs
                font-medium
                text-buildcv-text-secondary
              "
            >
              Start building for free
            </p>
          </div>
        </div>

        {/* =================================================
            FINAL NOTE
        ================================================= */}

        <p
          className="
            mt-6
            text-center
            text-xs
            text-buildcv-text-muted
          "
        >
          Build your resume first. Upgrade only when you need more.
        </p>
      </div>
    </section>
  )
}

export default Pricing