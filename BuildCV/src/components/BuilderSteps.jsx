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
// BUILDCV — PREMIUM LIGHT UI
// =====================================================

const styles = {
  connector: {
    completed: "bg-buildcv-violet/30",
    active: "bg-buildcv-border",
    upcoming: "bg-buildcv-border-soft",
  },

  button: {
    completed:
      "border-transparent bg-transparent hover:border-buildcv-border hover:bg-buildcv-background-soft",

    active:
      "border-buildcv-border-violet bg-buildcv-background-violet shadow-buildcv-xs",

    upcoming:
      "border-transparent bg-transparent hover:border-buildcv-border hover:bg-buildcv-background-soft",
  },

  indicator: {
    completed:
      "border-buildcv-violet bg-buildcv-violet text-buildcv-white shadow-[0_2px_6px_rgba(124,58,237,0.16)]",

    active:
      "border-buildcv-violet bg-buildcv-violet text-buildcv-white shadow-[0_0_0_4px_rgba(124,58,237,0.08)]",

    upcoming:
      "border-buildcv-border bg-buildcv-card text-buildcv-text-muted group-hover:border-buildcv-violet-300 group-hover:bg-buildcv-background-violet group-hover:text-buildcv-violet",
  },

  title: {
    completed:
      "text-buildcv-ink-900",

    active:
      "text-buildcv-violet-600",

    upcoming:
      "text-buildcv-ink-800 group-hover:text-buildcv-violet-600",
  },

  description: {
    completed:
      "text-buildcv-text-secondary",

    active:
      "text-buildcv-violet-600/70",

    upcoming:
      "text-buildcv-text-muted",
  },
}

// =====================================================
// PROGRESS RING
// =====================================================

const RING_SIZE = 44
const RING_STROKE = 3
const RING_RADIUS = (RING_SIZE - RING_STROKE) / 2
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS

// =====================================================
// COMPONENT
// =====================================================

function BuilderSteps({
  activeStep,
  onStepChange,
  steps = BUILDER_STEPS,
}) {
  const navRef = useRef(null)
  const ringRef = useRef(null)
  const isFirstRender = useRef(true)

  // =====================================================
  // FIND CURRENT STEP
  // =====================================================

  const currentStepIndex = steps.findIndex(
    (step) => step.id === activeStep
  )

  const safeStepIndex =
    currentStepIndex >= 0 ? currentStepIndex : 0

  // =====================================================
  // PROGRESS
  // =====================================================

  const progress =
    steps.length > 0
      ? ((safeStepIndex + 1) / steps.length) * 100
      : 0

  // =====================================================
  // CHANGE STEP
  // =====================================================

  const handleStepChange = (stepId) => {
    if (typeof onStepChange === "function") {
      onStepChange(stepId)
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // =====================================================
  // STEP ENTRANCE ANIMATION
  // =====================================================

  useEffect(() => {
    const items =
      navRef.current?.querySelectorAll(
        "[data-step-item]"
      )

    if (!items || items.length === 0) return

    gsap.from(items, {
      opacity: 0,
      x: -8,
      duration: 0.4,
      stagger: 0.04,
      ease: "power2.out",
    })

    return () => {
      gsap.killTweensOf(items)
    }
  }, [])

  // =====================================================
  // PROGRESS RING ANIMATION
  // =====================================================

  useEffect(() => {
    if (!ringRef.current) return

    const offset =
      RING_CIRCUMFERENCE -
      (progress / 100) * RING_CIRCUMFERENCE

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

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <aside className="w-full lg:sticky lg:top-6 lg:self-start">
      <div
        className="
          overflow-hidden
          rounded-buildcv-2xl
          border
          border-buildcv-border
          bg-buildcv-background
          shadow-buildcv-md
        "
      >

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div
          className="
            border-b
            border-buildcv-border
            bg-buildcv-border-violet
            px-5
            py-5
          "
        >
          <div className="flex items-start justify-between gap-4">

            {/* Header */}

            <div className="min-w-0">

              <div className="flex items-center gap-2">

                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-buildcv-violet
                  "
                />

                <p
                  className="
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-buildcv-violet-600
                  "
                >
                  Resume Builder
                </p>

              </div>

              <h2
                className="
                  mt-2
                  font-display
                  text-lg
                  font-bold
                  tracking-tight
                  text-buildcv-ink-900
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
                  text-buildcv-text-secondary
                "
              >
                Complete each section to create a
                professional resume.
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

                {/* Track */}

                <circle
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth={RING_STROKE}
                  className="stroke-buildcv-violet-100"
                />

                {/* Progress */}

                <circle
                  ref={ringRef}
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth={RING_STROKE}
                  strokeLinecap="round"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  className="stroke-buildcv-violet"
                />

              </svg>

              <span
                className="
                  absolute
                  text-[11px]
                  font-bold
                  text-buildcv-violet-600
                "
              >
                {Math.round(progress)}%
              </span>

            </div>

          </div>
        </div>

        {/* =====================================================
            STEPS
        ====================================================== */}

        <nav
          ref={navRef}
          className="
            relative
            space-y-1
            bg-buildcv-background
            p-3
          "
          aria-label="Resume builder steps"
        >

          {steps.map((step, index) => {

            const state = getStepState(
              index,
              safeStepIndex
            )

            const isActive = state === "active"
            const isCompleted = state === "completed"

            return (
              <div
                key={step.id}
                data-step-item
                className="relative"
              >

                {/* Connector */}

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
                      ${styles.connector[state]}
                    `}
                  />
                )}

                {/* Step Button */}

                <button
                  type="button"
                  onClick={() =>
                    handleStepChange(step.id)
                  }
                  aria-current={
                    isActive ? "step" : undefined
                  }
                  className={`
                    group
                    relative
                    flex
                    w-full
                    items-center
                    gap-3
                    rounded-buildcv-md
                    border
                    
                    px-3
                    py-3
                    text-left
                    transition-all
                    duration-200
                    ${styles.button[state]}
                  `}
                >

                  {/* Indicator */}

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
                      font-bold
                      transition-all
                      
                      duration-200
                      ${styles.indicator[state]}
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

                  {/* Content */}

                  <span className="min-w-0 flex-1">

                    <span
                      className={`
                        block
                        truncate
                        text-[13px]
                        font-semibold
                        leading-5
                        transition-colors
                        
                        duration-200
                        ${styles.title[state]}
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
                        
                        ${styles.description[state]}
                      `}
                    >
                      {step.description}
                    </span>

                  </span>

                  {/* Active */}

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
                        border-buildcv-border-violet
                        bg-buildcv-violet-100
                        text-xs
                        font-bold
                        text-buildcv-violet-600
                        transition-transform
                        duration-200
                        group-hover:translate-x-0.5
                      "
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}

                  {/* Completed */}

                  {isCompleted && (
                    <span
                      className="
                        hidden
                        text-[10px]
                        font-semibold
                        text-buildcv-violet-600
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

        </nav>

        {/* =====================================================
            PROGRESS
        ====================================================== */}

        <div
          className="
            border-t
            border-buildcv-border
            bg-buildcv-background
            px-5
            py-5
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p
                className="
                  text-xs
                  font-semibold
                  text-buildcv-ink-900
                "
              >
                Your progress
              </p>

              <p
                className="
                  mt-0.5
                  text-[10px]
                  text-buildcv-text-muted
                "
              >
                Step {safeStepIndex + 1} of {steps.length}
              </p>

            </div>

            <span
              className="
                text-xs
                font-bold
                text-buildcv-violet-600
              "
            >
              {Math.round(progress)}%
            </span>

          </div>

          {/* Progress Bar */}

          <div
            className="
              mt-3
              h-1.5
              overflow-hidden
              rounded-full
              bg-buildcv-violet-50
            "
          >

            <div
              className="
                h-full
                rounded-full
                bg-buildcv-violet
                transition-all
                duration-500
                ease-out
              "
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          {/* Progress Message */}

          <p
            className="
              mt-3
              text-[10px]
              leading-4
              text-buildcv-text-muted
            "
          >
            {safeStepIndex === steps.length - 1
              ? "Almost there — review your resume and download it."
              : "Keep going — each section makes your resume stronger."}
          </p>

        </div>

        {/* =====================================================
            PROFESSIONAL TIP
        ====================================================== */}

        <div className="bg-buildcv-background px-3 pb-3">

          <div
            className="
              rounded-buildcv-md
              border
              border-buildcv-border-violet
              bg-buildcv-background-violet
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
                  border-buildcv-border-violet
                  bg-buildcv-white
                  text-[11px]
                  font-semibold
                  text-buildcv-violet
                "
              >
                ✦
              </span>

              <div className="min-w-0">

                <p
                  className="
                    text-[10px]
                    font-bold
                    text-buildcv-ink-900
                  "
                >
                  Resume tip
                </p>

                <p
                  className="
                    mt-0.5
                    text-[10px]
                    leading-4
                    text-buildcv-text-secondary
                  "
                >
                  Use clear, concise information and
                  highlight results rather than simply
                  listing responsibilities.
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