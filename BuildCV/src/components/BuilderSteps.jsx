import { useEffect, useRef } from "react"
import gsap from "gsap"

// =====================================================
// BUILDER STEPS
// =====================================================

export const BUILDER_STEPS = [
  {
    id: "personal",
    number: 1,
    title: "Personal Information",
    description: "Your name and contact details.",
  },
  {
    id: "education",
    number: 2,
    title: "Education",
    description: "Your academic background.",
  },
  {
    id: "experience",
    number: 3,
    title: "Experience",
    description: "Your professional experience.",
  },
  {
    id: "skills",
    number: 4,
    title: "Skills",
    description: "Your technical skills.",
  },
  {
    id: "projects",
    number: 5,
    title: "Projects",
    description: "Your best projects.",
  },
]

// =====================================================
// STEP STATE
// =====================================================

function getStepState(index, activeIndex) {
  if (index < activeIndex) return "completed"
  if (index === activeIndex) return "active"
  return "upcoming"
}

// =====================================================
// PROGRESS RING
// =====================================================

const RING_SIZE = 46
const RING_STROKE = 3

const RING_RADIUS =
  (RING_SIZE - RING_STROKE) / 2

const RING_CIRCUMFERENCE =
  2 * Math.PI * RING_RADIUS

// =====================================================
// COMPONENT
// =====================================================

function BuilderSteps({
  activeStep,
  onStepChange,
  steps = BUILDER_STEPS,
  optionalSections = [],
}) {
  const navRef = useRef(null)
  const ringRef = useRef(null)
  const isFirstRender = useRef(true)

  // ===================================================
  // CURRENT REQUIRED STEP
  // ===================================================

  const currentStepIndex = steps.findIndex(
    (step) => step.id === activeStep
  )

  const isOptionalActive =
    optionalSections.some(
      (section) => section.id === activeStep
    )

  const safeStepIndex =
    currentStepIndex >= 0
      ? currentStepIndex
      : steps.length - 1

  // ===================================================
  // PROGRESS
  // ===================================================

  const progress = isOptionalActive
    ? 100
    : steps.length > 0
      ? ((safeStepIndex + 1) / steps.length) * 100
      : 0

  // ===================================================
  // ACTIVE OPTIONAL SECTION
  // ===================================================

  const activeOptionalSection =
    optionalSections.find(
      (section) => section.id === activeStep
    )

  // ===================================================
  // STEP CHANGE
  // ===================================================

  const handleStepChange = (stepId) => {
    if (typeof onStepChange === "function") {
      onStepChange(stepId)
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // ===================================================
  // ENTRANCE ANIMATION
  // ===================================================

  useEffect(() => {
    const items =
      navRef.current?.querySelectorAll(
        "[data-step-item]"
      )

    if (!items || items.length === 0) {
      return
    }

    gsap.fromTo(
      items,
      {
        opacity: 0,
        x: -8,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.04,
        ease: "power2.out",
      }
    )

    return () => {
      gsap.killTweensOf(items)
    }
  }, [])

  // ===================================================
  // PROGRESS RING
  // ===================================================

  useEffect(() => {
    if (!ringRef.current) {
      return
    }

    const offset =
      RING_CIRCUMFERENCE -
      (progress / 100) *
        RING_CIRCUMFERENCE

    if (isFirstRender.current) {
      isFirstRender.current = false

      gsap.set(ringRef.current, {
        strokeDashoffset: offset,
      })

      return
    }

    gsap.to(ringRef.current, {
      strokeDashoffset: offset,
      duration: 0.6,
      ease: "power2.out",
    })
  }, [progress])

  // ===================================================
  // RENDER
  // =====================================================

  return (
    <aside className="h-full w-full">
      <div
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-[#E2E8F0]
          bg-white
          shadow-[0_12px_35px_rgba(79,70,229,0.08)]
        "
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            border-b
            border-[#E2E8F0]
            bg-gradient-to-br
            from-[#F8FAFC]
            via-white
            to-[#EEF2FF]
            px-5
            py-5
          "
        >
          <div className="flex items-start justify-between gap-4">
            {/* HEADER CONTENT */}

            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#6366F1]
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#6366F1]
                  "
                >
                  Resume Builder
                </p>
              </div>

              <h2
                className="
                  mt-2
                  text-lg
                  font-black
                  tracking-tight
                  text-[#111827]
                "
              >
                Build your resume
              </h2>

              <p
                className="
                  mt-1
                  max-w-[200px]
                  text-xs
                  leading-5
                  text-[#718096]
                "
              >
                Complete each section to create
                a professional resume.
              </p>
            </div>

            {/* =================================================
                PROGRESS RING
            ================================================= */}

            <div
              className="
                relative
                flex
                h-[46px]
                w-[46px]
                shrink-0
                items-center
                justify-center
              "
            >
              <svg
                width={RING_SIZE}
                height={RING_SIZE}
                viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
                className="-rotate-90"
                aria-hidden="true"
              >
                {/* TRACK */}

                <circle
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth={RING_STROKE}
                  className="stroke-[#E0E7FF]"
                />

                {/* PROGRESS */}

                <circle
                  ref={ringRef}
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth={RING_STROKE}
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  className="stroke-[#6366F1]"
                />
              </svg>

              <span
                className="
                  absolute
                  text-[10px]
                  font-black
                  text-[#4F46E5]
                "
              >
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        {/* =================================================
            NAVIGATION
        ================================================= */}

        <nav
          ref={navRef}
          className="
            relative
            flex-1
            space-y-1
            overflow-y-auto
            bg-white
            p-3
          "
          aria-label="Resume builder steps"
        >
          {/* =================================================
              REQUIRED STEPS
          ================================================= */}

          {steps.map((step, index) => {
            const state = getStepState(
              index,
              safeStepIndex
            )

            const isActive =
              !isOptionalActive &&
              state === "active"

            const isCompleted =
              state === "completed"

            return (
              <div
                key={step.id}
                data-step-item
                className="relative"
              >
                {/* CONNECTOR */}

                {index < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      left-[21px]
                      top-[43px]
                      h-[calc(100%-20px)]
                      w-px
                      transition-colors
                      duration-300
                      ${
                        isCompleted
                          ? "bg-[#A5B4FC]"
                          : "bg-[#E2E8F0]"
                      }
                    `}
                  />
                )}

                {/* STEP BUTTON */}

                <button
                  type="button"
                  onClick={() =>
                    handleStepChange(step.id)
                  }
                  aria-current={
                    isActive
                      ? "step"
                      : undefined
                  }
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-xl
                    border
                    px-3
                    py-3
                    text-left
                    transition-all
                    duration-200
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#6366F1]
                    focus-visible:ring-offset-2
                    ${
                      isActive
                        ? `
                          border-[#C7D2FE]
                          bg-[#EEF2FF]
                          shadow-[0_4px_14px_rgba(99,102,241,0.10)]
                        `
                        : `
                          border-transparent
                          bg-white
                          hover:border-[#E2E8F0]
                          hover:bg-[#F8FAFC]
                          hover:shadow-sm
                        `
                    }
                  `}
                >
                  {/* NUMBER */}

                  <span
                    className={`
                      relative
                      z-10
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-[11px]
                      font-black
                      transition-all
                      duration-200
                      ${
                        isCompleted
                          ? `
                            border-[#6366F1]
                            bg-[#6366F1]
                            text-white
                            shadow-[0_4px_10px_rgba(99,102,241,0.20)]
                          `
                          : isActive
                            ? `
                              border-[#6366F1]
                              bg-[#6366F1]
                              text-white
                              shadow-[0_0_0_4px_rgba(99,102,241,0.10)]
                            `
                            : `
                              border-[#E2E8F0]
                              bg-white
                              text-[#718096]
                              group-hover:border-[#A5B4FC]
                              group-hover:bg-[#EEF2FF]
                              group-hover:text-[#4F46E5]
                            `
                      }
                    `}
                  >
                    {isCompleted ? (
                      <span
                        className="text-[12px]"
                        aria-label="Completed"
                      >
                        ✓
                      </span>
                    ) : (
                      step.number
                    )}
                  </span>

                  {/* TEXT */}

                  <span className="min-w-0 flex-1">
                    <span
                      className={`
                        block
                        truncate
                        text-[13px]
                        font-bold
                        leading-5
                        transition-colors
                        duration-200
                        ${
                          isActive
                            ? "text-[#4F46E5]"
                            : isCompleted
                              ? "text-[#111827]"
                              : "text-[#334155] group-hover:text-[#111827]"
                        }
                      `}
                    >
                      {step.title}
                    </span>

                    <span
                      className={`
                        mt-0.5
                        block
                        truncate
                        text-[10px]
                        leading-4
                        ${
                          isActive
                            ? "text-[#6366F1]"
                            : isCompleted
                              ? "text-[#718096]"
                              : "text-[#718096]"
                        }
                      `}
                    >
                      {step.description}
                    </span>
                  </span>

                  {/* ACTIVE ARROW */}

                  {isActive && (
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#C7D2FE]
                        bg-white
                        text-xs
                        font-black
                        text-[#4F46E5]
                        shadow-sm
                        transition-transform
                        duration-200
                        group-hover:translate-x-0.5
                      "
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}

                  {/* DONE */}

                  {isCompleted && (
                    <span
                      className="
                        hidden
                        rounded-full
                        bg-[#EEF2FF]
                        px-2
                        py-1
                        text-[9px]
                        font-bold
                        text-[#4F46E5]
                        sm:block
                      "
                    >
                      Done
                    </span>
                  )}
                </button>
              </div>
            )
          })}

          {/* =================================================
              OPTIONAL SECTIONS
          ================================================= */}

          {optionalSections.length > 0 && (
            <div
              data-step-item
              className="
                mt-4
                rounded-2xl
                border
                border-[#E0E7FF]
                bg-[#F8FAFC]
                p-3
              "
            >
              {/* OPTIONAL HEADER */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-3
                  px-1
                  pb-3
                "
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <span
                      className="
                        flex
                        h-6
                        w-6
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-[#6366F1]
                        text-sm
                        font-bold
                        text-white
                        shadow-sm
                      "
                    >
                      +
                    </span>

                    <div>
                      <p
                        className="
                          text-[12px]
                          font-black
                          text-[#111827]
                        "
                      >
                        Add more sections
                      </p>

                      <p
                        className="
                          mt-0.5
                          text-[9px]
                          font-medium
                          text-[#718096]
                        "
                      >
                        Optional — choose what fits your resume.
                      </p>
                    </div>
                  </div>
                </div>

                <span
                  className="
                    shrink-0
                    rounded-full
                    border
                    border-[#E0E7FF]
                    bg-white
                    px-2
                    py-1
                    text-[8px]
                    font-bold
                    uppercase
                    tracking-wider
                    text-[#6366F1]
                  "
                >
                  Optional
                </span>
              </div>

              {/* OPTIONAL GRID */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-2
                "
              >
                {optionalSections.map(
                  (section) => {
                    const isActive =
                      activeStep ===
                      section.id

                    return (
                      <button
                        key={section.id}
                        type="button"
                        onClick={() =>
                          handleStepChange(
                            section.id
                          )
                        }
                        aria-current={
                          isActive
                            ? "step"
                            : undefined
                        }
                        className={`
                          group
                          relative
                          flex
                          min-h-[82px]
                          w-full
                          flex-col
                          items-start
                          justify-between
                          rounded-xl
                          border
                          p-3
                          text-left
                          transition-all
                          duration-200
                          focus-visible:outline-none
                          focus-visible:ring-2
                          focus-visible:ring-[#6366F1]
                          focus-visible:ring-offset-2
                          ${
                            isActive
                              ? `
                                border-[#6366F1]
                                bg-[#EEF2FF]
                                shadow-[0_5px_16px_rgba(99,102,241,0.13)]
                              `
                              : `
                                border-[#E2E8F0]
                                bg-white
                                hover:-translate-y-0.5
                                hover:border-[#A5B4FC]
                                hover:bg-[#EEF2FF]
                                hover:shadow-sm
                              `
                          }
                        `}
                      >
                        {/* TOP ROW */}

                        <div
                          className="
                            flex
                            w-full
                            items-center
                            justify-between
                            gap-2
                          "
                        >
                          
                             

                          {/* SELECTED LABEL */}

                          {isActive && (
                            <span
                              className="
                                rounded-full
                                bg-[#6366F1]
                                px-1.5
                                py-0.5
                                text-[7px]
                                font-black
                                uppercase
                                tracking-wider
                                text-white
                              "
                            >
                              Added
                            </span>
                          )}
                        </div>

                        {/* TITLE */}

                        <div className="w-full">
                          <span
                            className={`
                              block
                              truncate
                              text-[11px]
                              font-black
                              leading-4
                              transition-colors
                              duration-200
                              ${
                                isActive
                                  ? "text-[#4F46E5]"
                                  : "text-[#111827] group-hover:text-[#4F46E5]"
                              }
                            `}
                          >
                            {section.title}
                          </span>

                          {/* DESCRIPTION */}

                          {section.description && (
                            <span
                              className={`
                                mt-0.5
                                block
                                truncate
                                text-[8px]
                                leading-3
                                ${
                                  isActive
                                    ? "text-[#6366F1]"
                                    : "text-[#718096]"
                                }
                              `}
                            >
                              {section.description}
                            </span>
                          )}
                        </div>

                        {/* ACTIVE INDICATOR */}

                        {isActive && (
                          <span
                            className="
                              absolute
                              right-2
                              top-2
                              h-1.5
                              w-1.5
                              rounded-full
                              bg-[#6366F1]
                            "
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    )
                  }
                )}
              </div>

              {/* OPTIONAL HELPER */}

              <div
                className="
                  mt-3
                  flex
                  items-center
                  gap-1.5
                  px-1
                "
              >
                <span
                  className="
                    h-1
                    w-1
                    shrink-0
                    rounded-full
                    bg-[#6366F1]
                  "
                />

                <p
                  className="
                    text-[8px]
                    font-medium
                    leading-3
                    text-[#718096]
                  "
                >
                  Select a section to add more detail
                  to your resume.
                </p>
              </div>
            </div>
          )}
        </nav>

        {/* =================================================
            PROGRESS SUMMARY
        ================================================= */}

        <div
          className="
            border-t
            border-[#E2E8F0]
            bg-[#F8FAFC]
            px-5
            py-5
          "
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className="
                  text-xs
                  font-bold
                  text-[#111827]
                "
              >
                {isOptionalActive
                  ? activeOptionalSection?.title ||
                    "Additional information"
                  : "Your progress"}
              </p>

              <p
                className="
                  mt-0.5
                  text-[10px]
                  text-[#718096]
                "
              >
                {isOptionalActive
                  ? "Optional section"
                  : `Step ${safeStepIndex + 1} of ${steps.length}`}
              </p>
            </div>

            <span
              className="
                rounded-full
                bg-[#EEF2FF]
                px-2.5
                py-1
                text-xs
                font-black
                text-[#4F46E5]
              "
            >
              {Math.round(progress)}%
            </span>
          </div>

          {/* PROGRESS BAR */}

          <div
            className="
              mt-3
              h-1.5
              overflow-hidden
              rounded-full
              bg-[#E0E7FF]
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-[#6366F1]
                transition-all
                duration-500
                ease-out
              "
              style={{
                width: `${progress}%`,
              }}
            />
          </div>

          {/* MESSAGE */}

          <p
            className="
              mt-3
              text-[10px]
              leading-4
              text-[#718096]
            "
          >
            {isOptionalActive
              ? "Optional information can make your resume more complete."
              : safeStepIndex ===
                  steps.length - 1
                ? "Almost there — review your resume and download it."
                : "Keep going — each section makes your resume stronger."}
          </p>
        </div>

        {/* =================================================
            RESUME TIP
        ================================================= */}

        <div
          className="
            border-t
            border-[#E2E8F0]
            bg-white
            px-3
            pb-3
            pt-3
          "
        >
          <div
            className="
              rounded-xl
              border
              border-[#E0E7FF]
              bg-[#EEF2FF]
              p-3
            "
          >
            <div className="flex items-start gap-2.5">
              <span
                className="
                  flex
                  h-6
                  w-6
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#C7D2FE]
                  bg-white
                  text-[11px]
                  font-bold
                  text-[#6366F1]
                "
              >
                ✦
              </span>

              <div className="min-w-0">
                <p
                  className="
                    text-[10px]
                    font-bold
                    text-[#111827]
                  "
                >
                  Resume tip
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    leading-4
                    text-[#718096]
                  "
                >
                  Highlight measurable results
                  instead of only listing your
                  responsibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default BuilderSteps