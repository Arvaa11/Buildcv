import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"

import { templates } from "../../data/templates"
import TemplatePreview from "./TemplatePreveiw"

function TemplateSelector({
  selectedTemplate,
  setSelectedTemplate,
  onContinue,
}) {
  const navigate = useNavigate()

  const [activeCategory, setActiveCategory] = useState("All")
  const [showRecommendation, setShowRecommendation] = useState(false)

  const gridRef = useRef(null)
  const isFirstRender = useRef(true)

  /* =========================================================
     CATEGORIES
  ========================================================= */

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        templates
          .map((template) => template.category)
          .filter(Boolean)
      ),
    ]

    return ["All", ...uniqueCategories]
  }, [])

  /* =========================================================
     FILTERED TEMPLATES
  ========================================================= */

  const filteredTemplates = useMemo(() => {
    if (activeCategory === "All") {
      return templates
    }

    return templates.filter(
      (template) => template.category === activeCategory
    )
  }, [activeCategory])

  /* =========================================================
     SELECT TEMPLATE
  ========================================================= */

  const handleSelect = (templateId) => {
    if (!templateId) return

    console.log("Selected template:", templateId)

    // Update parent state
    setSelectedTemplate(templateId)

    // Save template
    localStorage.setItem(
      "buildcv-selected-template",
      templateId
    )

    /*
      If parent provided onContinue,
      send the selected template to parent.
    */
    if (typeof onContinue === "function") {
      onContinue(templateId)
      return
    }

    /*
      Fallback:
      If this component is used without onContinue,
      go directly to Builder.
    */
    navigate("/builder", {
      state: {
        selectedTemplate: templateId,
      },
    })
  }

  /* =========================================================
     CATEGORY ANIMATION
  ========================================================= */

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    const cards =
      gridRef.current?.querySelectorAll(
        "[data-template-card]"
      )

    if (!cards?.length) return

    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 16,
        scale: 0.98,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.45,
        stagger: 0.05,
        ease: "power2.out",
      }
    )
  }, [activeCategory])

  return (
    <section className="min-w-0 space-y-8">

      {/* =====================================================
          HERO
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-buildcv-border
          bg-buildcv-background
          px-6
          py-8
          shadow-buildcv-sm
          sm:px-8
          sm:py-10
          lg:px-10
          lg:py-12
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-24
            h-72
            w-72
            rounded-full
            bg-buildcv-indigo/10
            blur-3xl
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
            bg-buildcv-indigo/5
            blur-3xl
          "
        />

        <div className="relative">

          <div
            className="
              mb-5
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-buildcv-indigo/30
              bg-buildcv-indigo/10
              px-4
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-buildcv-indigo-400
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                border
                border-buildcv-indigo
                bg-buildcv-indigo
              "
            />

            Step 1 · Choose your design
          </div>

          <h1
            className="
              max-w-4xl
              font-display
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-buildcv-text
              sm:text-5xl
              lg:text-6xl
            "
          >
            Build a resume that
            <span className="block text-buildcv-violet">
              looks as good as it reads.
            </span>
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-buildcv-text-secondary
              sm:text-lg
            "
          >
            Choose a professionally designed template and create a
            resume that looks polished, modern, and professional.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <StatCard
              label="Templates"
              value={`${templates.length}+ Designs`}
            />

            <StatCard
              label="Customization"
              value="Fully Editable"
            />

            <StatCard
              label="Switching"
              value="Change Anytime"
            />
          </div>

        </div>
      </div>

      {/* =====================================================
          RECOMMENDATION
      ===================================================== */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-buildcv-ink
          shadow-[0_20px_50px_rgba(0,0,0,0.25)]
        "
      >
        <div
          className="
            pointer-events-none
            absolute
            -right-16
            -top-20
            h-64
            w-64
            rounded-full
            bg-buildcv-indigo/10
            blur-3xl
          "
        />

        <div
          className="
            relative
            flex
            flex-col
            gap-6
            p-6
            sm:p-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >

          <div className="flex items-start gap-4">

            <div
              className="
                flex
                h-14
                w-14
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-buildcv-indigo/20
                bg-buildcv-indigo/10
                text-2xl
                text-buildcv-indigo-400
              "
            >
              ✦
            </div>

            <div>
              <p
                className="
                  font-display
                  text-lg
                  font-bold
                  text-buildcv-violet
                  sm:text-xl
                "
              >
                Not sure which design fits you?
              </p>

              <p
                className="
                  mt-2
                  max-w-xl
                  text-sm
                  leading-6
                  text-buildcv-white
                "
              >
                Answer three quick questions and we'll recommend
                the best template for your role and experience.
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={() => setShowRecommendation(true)}
            className="
              inline-flex
              shrink-0
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-buildcv-indigo
              bg-buildcv-indigo
              px-6
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-lg
              transition-all
              duration-200
              hover:-translate-y-1
              hover:bg-buildcv-indigo-600
            "
          >
            ✦ Find My Template
          </button>

        </div>
      </div>

      {/* =====================================================
          FILTERS
      ===================================================== */}

      <div
        className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >

        <div className="overflow-x-auto">

          <div
            className="
              inline-flex
              min-w-max
              gap-1.5
              rounded-2xl
              border
              border-buildcv-border
              bg-buildcv-background
              p-1.5
              shadow-buildcv-sm
            "
          >

            {categories.map((category) => {
              const isActive =
                activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category)
                  }
                  className={`
                    rounded-xl
                    px-5
                    py-2.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-buildcv-indigo text-white shadow-md"
                        : "text-buildcv-text-secondary hover:bg-buildcv-border hover:text-buildcv-text"
                    }
                  `}
                >
                  {category}
                </button>
              )
            })}

          </div>
        </div>

        <div
          className="
            rounded-full
            border
            border-buildcv-border
            bg-buildcv-indigo
            px-4
            py-3
            text-sm
            font-medium
            text-buildcv-white
          "
        >
          Showing{" "}
          <span className="font-bold">
            {filteredTemplates.length}
          </span>{" "}
          {filteredTemplates.length === 1
            ? "template"
            : "templates"}
        </div>

      </div>

      {/* =====================================================
          TEMPLATE GRID
      ===================================================== */}

      <div
        ref={gridRef}
        className="
          grid
          grid-cols-1
          gap-7
          sm:grid-cols-2
          xl:grid-cols-3
        "
      >

        {filteredTemplates.map((template) => {

          const isSelected =
            selectedTemplate === template.id

          const isRecommended =
            template.id === "modern"

          return (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={isSelected}
              isRecommended={isRecommended}
              onSelect={() =>
                handleSelect(template.id)
              }
            />
          )
        })}

      </div>

      {/* =====================================================
          BOTTOM MESSAGE
      ===================================================== */}

      <div
        className="
          flex
          items-start
          gap-4
          rounded-2xl
          border
          border-buildcv-indigo/20
          bg-buildcv-indigo/5
          px-5
          py-5
        "
      >
        <div
          className="
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-buildcv-indigo/15
            text-sm
            font-bold
            text-buildcv-indigo-400
          "
        >
          ✓
        </div>

        <div>
          <p className="text-sm font-bold text-buildcv-text">
            Your design isn't permanent.
          </p>

          <p
            className="
              mt-1
              text-sm
              leading-6
              text-buildcv-text-secondary
            "
          >
            You can switch templates later without losing your
            resume information.
          </p>
        </div>
      </div>

      {/* =====================================================
          RECOMMENDATION MODAL
      ===================================================== */}

      {showRecommendation && (
        <TemplateRecommendation
          onClose={() =>
            setShowRecommendation(false)
          }
          onSelect={(templateId) => {
            handleSelect(templateId)
          }}
        />
      )}

    </section>
  )
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({ label, value }) {
  return (
    <div
      className="
        rounded-2xl
        border
        border-buildcv-border
        bg-buildcv-background
        px-5
        py-4
        transition-all
        duration-200
        hover:border-buildcv-indigo
        hover:shadow-md
      "
    >
      <p
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-wider
          text-buildcv-text-muted
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          text-base
          font-bold
          text-buildcv-text
        "
      >
        {value}
      </p>
    </div>
  )
}

/* =========================================================
   TEMPLATE CARD
========================================================= */

function TemplateCard({
  template,
  isSelected,
  isRecommended,
  onSelect,
}) {
  return (
    <article
      data-template-card
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        bg-buildcv-background
        transition-all
        duration-300
        ${
          isSelected
            ? "border-buildcv-indigo shadow-[0_20px_55px_rgba(99,102,241,0.20)]"
            : "border-buildcv-border shadow-buildcv-sm hover:-translate-y-2 hover:border-buildcv-indigo/50"
        }
      `}
    >

      {isRecommended && (
        <div
          className="
            absolute
            left-4
            top-4
            z-20
            rounded-full
            bg-buildcv-violet-100
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-buildcv-indigo-400
            shadow-lg
          "
        >
          ✦ Recommended
        </div>
      )}

      {isSelected && (
        <div
          className="
            absolute
            right-4
            top-4
            z-20
            rounded-full
            bg-buildcv-indigo
            px-3
            py-1.5
            text-[10px]
            font-bold
            uppercase
            tracking-wider
            text-white
            shadow-lg
          "
        >
          ✓ Selected
        </div>
      )}

      {/* =====================================================
          PREVIEW
      ===================================================== */}

      <button
        type="button"
        onClick={onSelect}
        className="
          block
          w-full
          text-left
          focus:outline-none
          focus-visible:ring-2
          focus-visible:ring-buildcv-indigo
        "
        aria-label={`Use ${template.name} template`}
      >

        <div
          className="
            relative
            overflow-hidden
            border-b
            border-buildcv-border
            bg-gradient-to-br
            from-[#f4f6f9]
            via-[#cac5fa]
            to-[#e4dbf8]
            px-4
            pb-10
            pt-10
            sm:px-6
          "
        >

          <div
            className="
              relative
              mx-auto
              w-[80%]
              max-w-[280px]
              overflow-hidden
              rounded-md
              bg-white
              shadow-[0_15px_40px_rgba(0,0,0,0.35)]
              transition-all
              duration-500
              group-hover:scale-[1.035]
            "
          >

            <div className="aspect-[210/297] w-full">
              <TemplatePreview
                templateId={template.id}
              />
            </div>

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                flex
                items-center
                justify-center
                bg-[#080d1a]/55
                opacity-0
                backdrop-blur-[2px]
                transition-all
                duration-300
                group-hover:opacity-100
              "
            >
              <span
                className="
                  rounded-full
                  bg-white
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-[#111827]
                  shadow-xl
                "
              >
                Use this template →
              </span>
            </div>

          </div>
        </div>
      </button>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="bg-buildcv-background p-6">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h3
              className="
                font-display
                text-xl
                font-bold
                tracking-tight
                text-buildcv-text
              "
            >
              {template.name}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-buildcv-text-secondary
              "
            >
              {template.description}
            </p>

          </div>

          {template.category && (
            <span
              className="
                shrink-0
                rounded-full
                border
                border-buildcv-border
                bg-buildcv-violet-100
                px-3
                py-1.5
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-buildcv-text-secondary
              "
            >
              {template.category}
            </span>
          )}

        </div>

        {template.features?.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">

            {template.features.map((feature) => (
              <span
                key={feature}
                className="
                  rounded-full
                  border
                  border-buildcv-border
                  bg-buildcv-violet-100
                  px-3
                  py-1.5
                  text-[10px]
                  font-semibold
                  text-buildcv-text-secondary
                "
              >
                {feature}
              </span>
            ))}

          </div>
        )}

        <div className="mt-6 border-t border-buildcv-border pt-5">

          <button
            type="button"
            onClick={onSelect}
            className={`
              flex
              w-full
              items-center
              justify-between
              rounded-xl
              px-5
              py-3.5
              text-sm
              font-bold
              transition-all
              duration-200
              ${
                isSelected
                  ? "bg-buildcv-indigo text-white shadow-md"
                  : "bg-buildcv-violet-100 text-buildcv-text hover:bg-buildcv-indigo hover:text-white"
              }
            `}
          >
            <span>
              {isSelected
                ? "Template selected"
                : "Use this template"}
            </span>

            <span className="text-lg">
              {isSelected ? "✓" : "→"}
            </span>

          </button>

        </div>

      </div>
    </article>
  )
}

/* =========================================================
   RECOMMENDATION MODAL
========================================================= */

function TemplateRecommendation({
  onClose,
  onSelect,
}) {
  const [step, setStep] = useState(1)

  const [answers, setAnswers] = useState({
    role: "",
    experience: "",
    style: "",
  })

  const backdropRef = useRef(null)
  const panelRef = useRef(null)

  const questions = [
    {
      id: "role",
      title: "What type of role are you applying for?",
      options: [
        {
          value: "technology",
          label: "Software & Technology",
        },
        {
          value: "business",
          label: "Business & Corporate",
        },
        {
          value: "design",
          label: "Design & Creative",
        },
        {
          value: "education",
          label: "Education & Academic",
        },
      ],
    },
    {
      id: "experience",
      title: "What's your experience level?",
      options: [
        {
          value: "student",
          label: "Student",
        },
        {
          value: "entry-level",
          label: "Entry Level",
        },
        {
          value: "professional",
          label: "Professional",
        },
        {
          value: "executive",
          label: "Senior / Executive",
        },
      ],
    },
    {
      id: "style",
      title: "What style do you prefer?",
      options: [
        {
          value: "modern",
          label: "Modern",
        },
        {
          value: "professional",
          label: "Professional",
        },
        {
          value: "minimal",
          label: "Minimal",
        },
      ],
    },
  ]

  const currentQuestion = questions[step - 1]

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = "hidden"

    const ctx = gsap.context(() => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.25,
        }
      )

      gsap.fromTo(
        panelRef.current,
        {
          opacity: 0,
          y: 24,
          scale: 0.96,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        }
      )
    })

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyDown
    )

    return () => {
      document.body.style.overflow =
        previousOverflow

      window.removeEventListener(
        "keydown",
        handleKeyDown
      )

      ctx.revert()
    }
  }, [onClose])

  useEffect(() => {
    const question =
      panelRef.current?.querySelector(
        "[data-quiz-question]"
      )

    if (!question) return

    gsap.fromTo(
      question,
      {
        opacity: 0,
        y: 12,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      }
    )
  }, [step])

  const handleAnswer = (value) => {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    }

    setAnswers(nextAnswers)

    if (step < questions.length) {
      setStep((current) => current + 1)
      return
    }

    const recommendedTemplate =
      getRecommendedTemplate(nextAnswers)

    onSelect(recommendedTemplate)
  }

  return (
    <div
      ref={backdropRef}
      onClick={(event) => {
        if (event.target === backdropRef.current) {
          onClose()
        }
      }}
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-[#080d1a]/80
        p-4
        backdrop-blur-md
      "
      role="dialog"
      aria-modal="true"
    >

      <div
        ref={panelRef}
        className="
          max-h-[90vh]
          w-full
          max-w-xl
          overflow-y-auto
          rounded-3xl
          border
          border-buildcv-border
          bg-buildcv-background
          shadow-[0_30px_80px_rgba(0,0,0,0.5)]
        "
      >

        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-buildcv-border
            px-6
            py-5
          "
        >

          <div>
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-buildcv-indigo-400
              "
            >
              Find My Template
            </p>

            <p className="mt-1 text-sm text-buildcv-text-muted">
              Question {step} of {questions.length}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-buildcv-violet-100
              text-xl
              text-buildcv-text-secondary
              hover:bg-buildcv-indigo
              hover:text-white
            "
          >
            ×
          </button>

        </div>

        <div className="h-1.5 bg-buildcv-background">
          <div
            className="
              h-full
              bg-buildcv-indigo
              transition-all
              duration-300
            "
            style={{
              width: `${
                (step / questions.length) * 100
              }%`,
            }}
          />
        </div>

        <div
          data-quiz-question
          className="p-7 sm:p-9"
        >

          <h2
            className="
              font-display
              text-2xl
              font-extrabold
              leading-tight
              text-buildcv-text
              sm:text-3xl
            "
          >
            {currentQuestion.title}
          </h2>

          <p
            className="
              mt-3
              text-sm
              leading-6
              text-buildcv-text-secondary
            "
          >
            Choose the option that best describes you.
          </p>

          <div className="mt-7 space-y-3">

            {currentQuestion.options.map(
              (option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    handleAnswer(option.value)
                  }
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-2xl
                    border
                    border-buildcv-border
                    bg-buildcv-violet-100
                    px-5
                    py-4
                    text-left
                    transition-all
                    hover:-translate-y-0.5
                    hover:border-buildcv-indigo
                    hover:bg-buildcv-indigo/10
                  "
                >
                  <span
                    className="
                      text-sm
                      font-bold
                      text-buildcv-text
                    "
                  >
                    {option.label}
                  </span>

                  <span
                    className="
                      text-lg
                      text-buildcv-text-muted
                      group-hover:text-buildcv-indigo-400
                    "
                  >
                    →
                  </span>
                </button>
              )
            )}

          </div>

          {step > 1 && (
            <button
              type="button"
              onClick={() =>
                setStep((current) => current - 1)
              }
              className="
                mt-6
                text-xs
                font-semibold
                text-buildcv-text-muted
                hover:text-buildcv-text
              "
            >
              ← Back
            </button>
          )}

        </div>
      </div>
    </div>
  )
}

/* =========================================================
   RECOMMENDATION LOGIC
========================================================= */

function getRecommendedTemplate(answers) {
  if (
    answers.role === "technology" ||
    answers.style === "modern"
  ) {
    return "modern"
  }

  if (
    answers.role === "business" ||
    answers.experience === "executive" ||
    answers.style === "professional"
  ) {
    return "professional"
  }

  return "minimal"
}

export default TemplateSelector