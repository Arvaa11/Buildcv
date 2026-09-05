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

const RING_SIZE = 44
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
  // ===================================================

  return (
    <aside className="w-full">

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#E2E8F0]
          bg-white
          shadow-sm
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            border-b
            border-[#E2E8F0]
            bg-white
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
                  max-w-[190px]
                  text-xs
                  leading-5
                  text-[#64748B]
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
                h-11
                w-11
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
                  strokeDasharray={
                    RING_CIRCUMFERENCE
                  }
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
            space-y-1
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
                      left-[22px]
                      top-[43px]
                      h-[calc(100%-22px)]
                      w-px
                      transition-colors
                      duration-300
                      ${
                        isCompleted
                          ? "bg-[#C7D2FE]"
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
                    ${
                      isActive
                        ? "border-[#C7D2FE] bg-[#EEF2FF] shadow-sm"
                        : "border-transparent bg-white hover:border-[#E2E8F0] hover:bg-[#F8FAFC]"
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
                          ? "border-[#6366F1] bg-[#6366F1] text-white shadow-md shadow-[#6366F1]/20"
                          : isActive
                            ? "border-[#6366F1] bg-[#6366F1] text-white shadow-[0_0_0_4px_rgba(99,102,241,0.10)]"
                            : "border-[#E2E8F0] bg-white text-[#64748B] group-hover:border-[#A5B4FC] group-hover:bg-[#EEF2FF] group-hover:text-[#4F46E5]"
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
                            ? "text-[#6366F1]/70"
                            : isCompleted
                              ? "text-[#64748B]"
                              : "text-[#94A3B8]"
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
                        text-[9px]
                        font-bold
                        text-[#6366F1]
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
              MORE INFORMATION
          ================================================= */}

          {optionalSections.length > 0 && (
            <>
              {/* DIVIDER */}

              <div
                data-step-item
                className="px-2 pb-1 pt-4"
              >
                <div className="flex items-center gap-2">

                  <span
                    className="
                      h-px
                      flex-1
                      bg-[#E2E8F0]
                    "
                  />

                  <span
                    className="
                      shrink-0
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#94A3B8]
                    "
                  >
                    More information
                  </span>

                  <span
                    className="
                      h-px
                      flex-1
                      bg-[#E2E8F0]
                    "
                  />

                </div>
              </div>

              {/* =================================================
                  OPTIONAL GRID
              ================================================= */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-1.5
                "
              >

                {optionalSections.map(
                  (section) => {

                    const isActive =
                      activeStep ===
                      section.id

                    return (
                      <div
                        key={section.id}
                        data-step-item
                        className="relative"
                      >

                        <button
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
                            min-h-[72px]
                            w-full
                            flex-col
                            items-start
                            justify-center
                            rounded-xl
                            border
                            px-3
                            py-2.5
                            text-left
                            transition-all
                            duration-200
                            ${
                              isActive
                                ? "border-[#C7D2FE] bg-[#EEF2FF] shadow-sm"
                                : "border-transparent bg-white hover:border-[#E2E8F0] hover:bg-[#F8FAFC]"
                            }
                          `}
                        >

                          {/* PLUS ICON */}

                          <span
                            className={`
                              flex
                              h-6
                              w-6
                              items-center
                              justify-center
                              rounded-full
                              border
                              text-[13px]
                              font-semibold
                              transition-all
                              duration-200
                              ${
                                isActive
                                  ? "border-[#6366F1] bg-[#6366F1] text-white"
                                  : "border-[#E2E8F0] bg-white text-[#64748B] group-hover:border-[#A5B4FC] group-hover:bg-[#EEF2FF] group-hover:text-[#4F46E5]"
                              }
                            `}
                          >
                            +
                          </span>

                          {/* TITLE */}

                          <span
                            className={`
                              mt-1.5
                              block
                              w-full
                              truncate
                              text-[11px]
                              font-bold
                              leading-4
                              ${
                                isActive
                                  ? "text-[#4F46E5]"
                                  : "text-[#334155] group-hover:text-[#111827]"
                              }
                            `}
                          >
                            {section.title}
                          </span>

                          {/* ACTIVE ARROW */}

                          {isActive && (
                            <span
                              className="
                                absolute
                                right-2.5
                                top-2.5
                                text-[11px]
                                font-black
                                text-[#4F46E5]
                              "
                              aria-hidden="true"
                            >
                              →
                            </span>
                          )}

                        </button>

                      </div>
                    )
                  }
                )}

              </div>
            </>
          )}

        </nav>

        {/* =================================================
            PROGRESS SUMMARY
        ================================================= */}

        <div
          className="
            border-t
            border-[#E2E8F0]
            bg-[#FAFBFC]
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
                  text-[#94A3B8]
                "
              >
                {isOptionalActive
                  ? "Optional section"
                  : `Step ${safeStepIndex + 1} of ${steps.length}`}
              </p>

            </div>

            <span
              className="
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
              text-[#94A3B8]
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
              border-[#C7D2FE]
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
                    text-[#64748B]
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