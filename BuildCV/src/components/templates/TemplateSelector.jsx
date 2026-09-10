import { useEffect, useMemo, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import gsap from "gsap"

import { templates } from "../../data/templates"
import TemplatePreview from "./TemplatePreveiw"

import {
  templateQuestions,
  DEFAULT_TEMPLATE_ANSWERS,
} from "../../data/templateQuestions"


function TemplateSelector({
  selectedTemplate,
  setSelectedTemplate,
  onContinue,
}) {
  const navigate = useNavigate()

  const [activeCategory, setActiveCategory] =
    useState("All")

  const [showRecommendation, setShowRecommendation] =
    useState(false)

  const gridRef = useRef(null)
  const isFirstRender = useRef(true)

  // =====================================================
  // CATEGORIES
  // =====================================================

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

  // =====================================================
  // FILTERED TEMPLATES
  // =====================================================

  const filteredTemplates = useMemo(() => {
    if (activeCategory === "All") {
      return templates
    }

    return templates.filter(
      (template) =>
        template.category === activeCategory
    )
  }, [activeCategory])

  // =====================================================
  // SELECT TEMPLATE
  // =====================================================

  const handleSelect = (templateId) => {
    if (!templateId) return

    setSelectedTemplate(templateId)

    localStorage.setItem(
      "buildcv-selected-template",
      templateId
    )
  }

  // =====================================================
  // CONTINUE
  // =====================================================

  const handleContinue = () => {
    if (!selectedTemplate) return

    if (typeof onContinue === "function") {
      onContinue(selectedTemplate)
      return
    }

    navigate("/builder", {
      state: {
        selectedTemplate,
      },
    })
  }

  // =====================================================
  // CATEGORY ANIMATION
  // =====================================================

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
    <section className="min-w-0 space-y-6 px-4 pb-8 pt-24 sm:space-y-8 sm:px-7 sm:pb-10 sm:pt-25">

      {/* =================================================
          HERO
      ================================================= */}

      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-buildcv-border
          bg-buildcv-surface
          px-5
          py-7
          shadow-buildcv-md
          sm:px-8
          sm:py-10
          lg:px-10
          lg:py-12
        "
      >
        {/* Ambient violet glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-24
            -top-28
            h-80
            w-80
            rounded-full
            bg-buildcv-violet-50
            opacity-80
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -bottom-32
            left-1/3
            h-64
            w-64
            rounded-full
            bg-buildcv-indigo-50
            opacity-60
            blur-3xl
          "
        />

        <div className="relative">

          {/* Step Badge */}

          <div
            className="
              mb-6
              inline-flex
              items-center
              gap-2.5
              rounded-full
              border
              border-buildcv-border-violet
              bg-buildcv-violet-50
              px-4
              py-2
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-buildcv-violet
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-buildcv-violet
              "
            />

            Step 1 · Choose your design
          </div>

          {/* Heading */}

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
            "
          >
            Build a resume that

            <span
              className="
                block
                text-buildcv-violet
              "
            >
              looks as good as it reads.
            </span>
          </h1>

          {/* Description */}

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
            Choose a professionally designed template
            and create a resume that looks polished,
            modern, and professional.
          </p>

          {/* Stats */}

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

    {/* =================================================
    FIND YOUR TEMPLATE
================================================= */}

<div
  className="
    relative
    z-10
    overflow-hidden
    rounded-3xl
    border
    border-indigo-100
    bg-white
    shadow-[0_12px_40px_rgba(15,23,42,0.08)]
  "
>
  {/* Decorative glow */}

  <div
    className="
      pointer-events-none
      absolute
      -right-20
      -top-24
      h-64
      w-64
      rounded-full
      bg-indigo-50
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
      bg-indigo-50
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
      lg:p-9
    "
  >

    {/* Content */}

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
          bg-indigo-50
          text-2xl
          text-indigo-600
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
            text-gray-900
            sm:text-xl
          "
        >
          Not sure which template to choose?
        </p>

        <p
          className="
            mt-2
            max-w-xl
            text-sm
            leading-6
            text-slate-500
          "
        >
          Answer a few quick questions and we'll
          recommend the template that best matches
          your career, goals, experience, and style.
        </p>

      </div>

    </div>

    {/* Button */}

    <button
      type="button"
      onClick={() => setShowRecommendation(true)}
      className="
        group
        inline-flex
        shrink-0
        items-center
        justify-center
        gap-2.5
        rounded-xl
        bg-indigo-600
        px-6
        py-3.5
        text-sm
        font-bold
        text-white
        shadow-[0_8px_20px_rgba(79,70,229,0.22)]
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:bg-indigo-700
        hover:shadow-[0_12px_25px_rgba(79,70,229,0.28)]
        active:translate-y-0
        active:scale-[0.98]
      "
    >
      <span
        className="
          text-base
          transition-transform
          duration-200
          group-hover:rotate-12
        "
      >
        ✦
      </span>

      Find My Template

      <span
        className="
          text-base
          transition-transform
          duration-200
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </button>

  </div>
</div>

      {/* =================================================
          FILTERS
      ================================================= */}

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
            border-buildcv-indigo
            bg-buildcv-indigo
            px-5
            py-1
            text-sm
            font-medium
            text-white
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

      {/* =================================================
          TEMPLATE GRID
      ================================================= */}

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

          return (
            <TemplateCard
              key={template.id}
              template={template}
              isSelected={isSelected}
              onSelect={() =>
                handleSelect(template.id)
              }
            />
          )
        })}

      </div>

      {/* =================================================
          CONTINUE BUTTON
      ================================================= */}

      {selectedTemplate && (
        <div
          className="
            sticky
            bottom-4
            z-30
            flex
            justify-end
          "
        >
          <button
            type="button"
            onClick={handleContinue}
            className="
              group
              rounded-xl
              bg-buildcv-violet
              px-7
              py-3.5
              text-sm
              font-bold
              text-white
              shadow-buildcv-violet
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:bg-buildcv-violet-600
              active:translate-y-0
              active:scale-[0.98]
            "
          >
            Continue with{" "}
            {templates.find(
              (template) =>
                template.id === selectedTemplate
            )?.name || "Template"}

            <span
              className="
                ml-1.5
                inline-block
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </button>
        </div>
      )}

      {/* =================================================
          RECOMMENDATION MODAL
      ================================================= */}

      {showRecommendation && (
        <TemplateRecommendation
          onClose={() =>
            setShowRecommendation(false)
          }
          onSelect={(templateId) => {
            handleSelect(templateId)
            setShowRecommendation(false)

            if (
              typeof onContinue === "function"
            ) {
              onContinue(templateId)
            }
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
        group
        rounded-2xl
        border
        border-buildcv-border
        bg-buildcv-surface-soft
        px-5
        py-4
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:border-buildcv-border-violet
        hover:bg-buildcv-violet-50
      "
    >
      <p
        className="
          text-[10px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-buildcv-text-muted
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1.5
          text-base
          font-bold
          tracking-tight
          text-buildcv-text
          transition-colors
          duration-200
          group-hover:text-buildcv-violet
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
          "
        >
          ✓ Selected
        </div>
      )}

      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isSelected}
        className="block w-full text-left"
      >

        <div
          className="
            relative
            overflow-hidden
            border-b
            border-buildcv-border
            bg-[#F8FAFC]
            px-3
            pb-5
            pt-5
            sm:px-4
            sm:pb-10
            sm:pt-10
          "
        >

          <div
            className="
              relative
              mx-auto
              w-full
              max-w-[280px]
              overflow-hidden
              rounded-md
              bg-white
              shadow-[0_15px_40px_rgba(0,0,0,0.18)]
              transition-transform
              duration-500
              group-hover:scale-[1.035]
            "
          >

            <div className="aspect-[210/297] w-full">
              <TemplatePreview
                templateId={template.id}
              />
            </div>

          </div>

        </div>

      </button>

      <div className="bg-buildcv-background p-4 sm:p-6">

        <div className="flex items-start justify-between gap-3">

          <div className="min-w-0">

            <h3
              className="
                font-display
                text-lg
                font-bold
                tracking-tight
                text-buildcv-text
                sm:text-xl
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
                bg-buildcv-indigo/5
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

            {template.features.map(
              (feature) => (
                <span
                  key={feature}
                  className="
                    rounded-full
                    border
                    border-buildcv-border
                    bg-buildcv-indigo/5
                    px-3
                    py-1.5
                    text-[10px]
                    font-semibold
                    text-buildcv-text-secondary
                  "
                >
                  {feature}
                </span>
              )
            )}

          </div>
        )}

        <div
          className="
            mt-5
            border-t
            border-buildcv-border
            pt-4
            sm:mt-6
            sm:pt-5
          "
        >

          <button
            type="button"
            onClick={onSelect}
            className={`
              flex
              min-h-11
              w-full
              items-center
              justify-between
              rounded-xl
              px-5
              py-3.5
              text-sm
              font-bold
              transition-all
              ${
                isSelected
                  ? "bg-buildcv-indigo text-white"
                  : "bg-buildcv-indigo/5 text-buildcv-text hover:bg-buildcv-indigo hover:text-white"
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
   TEMPLATE RECOMMENDATION MODAL
========================================================= */

function TemplateRecommendation({
  onClose,
  onSelect,
}) {
  const [step, setStep] = useState(1)

  const [answers, setAnswers] = useState(
    DEFAULT_TEMPLATE_ANSWERS
  )

  const backdropRef = useRef(null)
  const panelRef = useRef(null)

  const questions = templateQuestions

  const currentQuestion =
    questions[step - 1]

  // =====================================================
  // MODAL ANIMATION + KEYBOARD
  // =====================================================

  useEffect(() => {
    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = "hidden"

    const ctx = gsap.context(() => {

      if (backdropRef.current) {
        gsap.fromTo(
          backdropRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
          }
        )
      }

      if (panelRef.current) {
        gsap.fromTo(
          panelRef.current,
          {
            opacity: 0,
            y: 24,
            scale: 0.97,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.35,
            ease: "power3.out",
          }
        )
      }

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

  // =====================================================
  // QUESTION ANIMATION
  // =====================================================

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

  // =====================================================
  // ANSWER
  // =====================================================

  const handleAnswer = (value) => {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    }

    setAnswers(nextAnswers)

    if (step < questions.length) {
      setStep(
        (current) => current + 1
      )
      return
    }

    const recommendedTemplate =
      getRecommendedTemplate(
        nextAnswers
      )

    onSelect(recommendedTemplate)
  }

  // =====================================================
  // RENDER
  // =====================================================

  if (!currentQuestion) {
    return null
  }

  return (
    <div
      ref={backdropRef}
      onClick={(event) => {
        if (
          event.target ===
          backdropRef.current
        ) {
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
        bg-[#111827]/70
        p-4
        backdrop-blur-md
      "
      role="dialog"
      aria-modal="true"
      aria-labelledby="template-recommendation-title"
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
          bg-white
          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

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
              id="template-recommendation-title"
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-buildcv-indigo
              "
            >
              Find My Template
            </p>

            <p
              className="
                mt-1
                text-sm
                text-buildcv-text-muted
              "
            >
              Question {step} of{" "}
              {questions.length}
            </p>

          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close template recommendation"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-buildcv-indigo/5
              text-xl
              text-buildcv-text-secondary
              transition-all
              hover:bg-buildcv-indigo
              hover:text-white
            "
          >
            ×
          </button>

        </div>

        {/* =================================================
            PROGRESS
        ================================================= */}

        <div className="h-1.5 bg-[#F8FAFC]">

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

        {/* =================================================
            QUESTION
        ================================================= */}

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
            {currentQuestion.description}
          </p>

          <div className="mt-7 space-y-3">

            {currentQuestion.options.map(
              (option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() =>
                    handleAnswer(
                      option.value
                    )
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
                    bg-[#F8FAFC]
                    px-5
                    py-4
                    text-left
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-buildcv-indigo
                    hover:bg-buildcv-indigo/5
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
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                      group-hover:text-buildcv-indigo
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
                setStep(
                  (current) =>
                    current - 1
                )
              }
              className="
                mt-6
                text-xs
                font-semibold
                text-buildcv-text-muted
                transition-colors
                hover:text-buildcv-indigo
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

function getRecommendedTemplate(answers = {}) {
  const scores = {
    modern: 0,
    professional: 0,
    minimal: 0,
    executive: 0,
    creative: 0,
    elegant: 0,
    classic: 0,
    academic: 0,
    bold: 0,
    clean: 0,
    tech: 0,
    portfolio: 0,
    aurora: 0,
    monarch: 0,
    nexus: 0,
    sage: 0,
    vertex: 0,
    muse: 0,
    orbit: 0,
    noir: 0,
    coral: 0,
    ocean: 0,
    stellar: 0,
    atelier: 0,
  }

  // =====================================================
  // CAREER FIELD
  // =====================================================

  switch (answers.careerField) {

    case "technology":
      scores.tech += 7
      scores.nexus += 6
      scores.vertex += 6
      scores.modern += 3
      scores.aurora += 2
      break

    case "business":
      scores.professional += 7
      scores.sage += 6
      scores.ocean += 5
      scores.executive += 3
      scores.classic += 2
      break

    case "academic":
      scores.academic += 10
      scores.classic += 3
      scores.minimal += 2
      break

    case "creative":
      scores.creative += 7
      scores.portfolio += 7
      scores.atelier += 6
      scores.muse += 5
      scores.coral += 4
      scores.aurora += 3
      break

    case "general":
      scores.professional += 5
      scores.modern += 4
      scores.sage += 4
      scores.clean += 3
      scores.classic += 2
      break

  }

  // =====================================================
  // EXPERIENCE LEVEL
  // =====================================================

  switch (answers.experienceLevel) {

    case "student":
      scores.academic += 4
      scores.clean += 4
      scores.minimal += 3
      scores.modern += 2
      scores.tech += 2
      break

    case "entry":
      scores.modern += 4
      scores.professional += 4
      scores.clean += 3
      scores.tech += 3
      scores.minimal += 2
      break

    case "mid":
      scores.professional += 5
      scores.modern += 4
      scores.sage += 4
      scores.ocean += 3
      scores.nexus += 2
      break

    case "senior":
      scores.executive += 6
      scores.professional += 5
      scores.monarch += 5
      scores.noir += 4
      scores.sage += 3
      break

    case "executive":
      scores.executive += 9
      scores.monarch += 8
      scores.noir += 7
      scores.professional += 3
      break

  }

  // =====================================================
  // PURPOSE
  // =====================================================

  switch (answers.purpose) {

    case "job":
      scores.professional += 4
      scores.modern += 3
      scores.minimal += 2
      scores.clean += 2
      break

    case "internship":
      scores.tech += 4
      scores.modern += 4
      scores.clean += 3
      scores.minimal += 3
      scores.academic += 2
      break

    case "freelance":
      scores.portfolio += 6
      scores.creative += 5
      scores.tech += 4
      scores.modern += 4
      scores.aurora += 3
      scores.atelier += 3
      break

    case "academicPosition":
      scores.academic += 8
      scores.classic += 3
      scores.minimal += 2
      break

    case "careerChange":
      scores.professional += 6
      scores.sage += 5
      scores.clean += 4
      scores.modern += 3
      scores.classic += 2
      break

  }

  // =====================================================
  // ATS IMPORTANCE
  // =====================================================

  switch (answers.ats) {

    case "veryImportant":
      scores.minimal += 7
      scores.clean += 6
      scores.classic += 6
      scores.professional += 5
      scores.academic += 3

      scores.creative -= 2
      scores.portfolio -= 2
      scores.muse -= 2
      scores.coral -= 2
      scores.atelier -= 2
      break

    case "important":
      scores.professional += 4
      scores.minimal += 4
      scores.clean += 4
      scores.classic += 3
      scores.modern += 2
      break

    case "notSure":
      scores.modern += 3
      scores.professional += 3
      scores.minimal += 2
      break

    case "notImportant":
      scores.creative += 4
      scores.portfolio += 4
      scores.aurora += 3
      scores.muse += 3
      scores.atelier += 3
      scores.bold += 2
      break

  }

  // =====================================================
  // STYLE
  // =====================================================

  switch (answers.style) {

    case "modern":
      scores.modern += 7
      scores.aurora += 6
      scores.orbit += 6
      scores.stellar += 5
      scores.bold += 4
      scores.nexus += 3
      scores.vertex += 3
      break

    case "minimal":
      scores.minimal += 8
      scores.clean += 7
      scores.classic += 3
      scores.sage += 3
      scores.ocean += 2
      break

    case "professional":
      scores.professional += 8
      scores.sage += 6
      scores.ocean += 5
      scores.classic += 4
      scores.executive += 3
      break

    case "creative":
      scores.creative += 8
      scores.portfolio += 7
      scores.atelier += 6
      scores.muse += 6
      scores.coral += 5
      scores.aurora += 3
      break

    case "traditional":
      scores.classic += 9
      scores.academic += 5
      scores.minimal += 4
      scores.professional += 3
      break

  }

  // =====================================================
  // STRENGTH
  // =====================================================

  switch (answers.strength) {

    case "projects":
      scores.tech += 7
      scores.nexus += 6
      scores.vertex += 5
      scores.modern += 4
      scores.portfolio += 3
      break

    case "experience":
      scores.professional += 6
      scores.executive += 5
      scores.sage += 4
      scores.ocean += 3
      scores.classic += 2
      break

    case "education":
      scores.academic += 8
      scores.classic += 4
      scores.minimal += 3
      break

    case "research":
      scores.academic += 10
      scores.classic += 3
      scores.minimal += 2
      break

    case "portfolio":
      scores.portfolio += 9
      scores.creative += 7
      scores.atelier += 6
      scores.muse += 5
      scores.coral += 4
      break

    case "leadership":
      scores.executive += 8
      scores.monarch += 7
      scores.noir += 6
      scores.professional += 4
      scores.bold += 2
      break

  }

  // =====================================================
  // FIND HIGHEST SCORING TEMPLATE
  // =====================================================

  const recommendedTemplate =
    Object.entries(scores)
      .sort((a, b) => b[1] - a[1])[0]?.[0]

  return recommendedTemplate || "modern"
}


export default TemplateSelector
