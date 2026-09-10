import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/* =========================================================
   BUILDCV — TEMPLATE RECOMMENDATION QUESTIONS
========================================================= */

const questions = [
  {
    id: "careerField",
    title: "What type of work are you applying for?",
    description: "Choose the field that best matches your career.",
    options: [
      { label: "Technology / Software", value: "technology" },
      { label: "Business / Corporate", value: "business" },
      { label: "Academic / Research", value: "academic" },
      { label: "Creative / Design", value: "creative" },
      { label: "General Professional", value: "general" },
    ],
  },
  {
    id: "experienceLevel",
    title: "What is your experience level?",
    description: "This helps us choose a layout appropriate for your career stage.",
    options: [
      { label: "Student / Fresh Graduate", value: "student" },
      { label: "Entry Level", value: "entry" },
      { label: "Mid Level", value: "mid" },
      { label: "Senior Level", value: "senior" },
      { label: "Executive", value: "executive" },
    ],
  },
  {
    id: "purpose",
    title: "What are you creating this resume for?",
    description: "Choose the main purpose of your resume.",
    options: [
      { label: "Job Application", value: "job" },
      { label: "Internship", value: "internship" },
      { label: "Freelancing", value: "freelance" },
      { label: "Academic Position", value: "academicPosition" },
      { label: "Career Change", value: "careerChange" },
    ],
  },
  {
    id: "ats",
    title: "How important is ATS compatibility?",
    description:
      "ATS-friendly resumes are easier for applicant tracking systems to read.",
    options: [
      { label: "Very important", value: "veryImportant" },
      { label: "Important", value: "important" },
      { label: "I'm not sure", value: "notSure" },
      { label: "Not important", value: "notImportant" },
    ],
  },
  {
    id: "style",
    title: "What resume style do you prefer?",
    description: "Choose the visual style you like most.",
    options: [
      { label: "Modern", value: "modern" },
      { label: "Minimal & Clean", value: "minimal" },
      { label: "Professional", value: "professional" },
      { label: "Creative", value: "creative" },
      { label: "Traditional", value: "traditional" },
    ],
  },
  {
    id: "strength",
    title: "What do you want your resume to highlight?",
    description:
      "Choose the area that best represents your strongest experience.",
    options: [
      {
        label: "Projects & Technical Skills",
        value: "projects",
      },
      {
        label: "Work Experience",
        value: "experience",
      },
      {
        label: "Education",
        value: "education",
      },
      {
        label: "Research & Publications",
        value: "research",
      },
      {
        label: "Portfolio & Creative Work",
        value: "portfolio",
      },
      {
        label: "Leadership & Achievements",
        value: "leadership",
      },
    ],
  },
];

/* =========================================================
   RECOMMENDATION ENGINE
========================================================= */

function getRecommendedTemplate(answers) {
  const scores = {};

  const addScore = (templateIds, points) => {
    templateIds.forEach((id) => {
      scores[id] = (scores[id] || 0) + points;
    });
  };

  /* Career field */
  switch (answers.careerField) {
    case "technology":
      addScore(["tech", "nexus", "vertex"], 5);
      addScore(["modern", "aurora"], 3);
      break;

    case "business":
      addScore(
        ["professional", "sage", "ocean", "executive", "classic"],
        5
      );
      break;

    case "academic":
      addScore(["academic", "classic", "minimal"], 6);
      break;

    case "creative":
      addScore(
        ["creative", "portfolio", "atelier", "muse", "coral"],
        5
      );
      break;

    case "general":
      addScore(
        ["professional", "modern", "sage", "clean", "classic"],
        4
      );
      break;

    default:
      break;
  }

  /* Experience */
  switch (answers.experienceLevel) {
    case "student":
      addScore(
        ["academic", "clean", "minimal", "modern", "tech"],
        4
      );
      break;

    case "entry":
      addScore(
        ["modern", "professional", "clean", "tech", "minimal"],
        4
      );
      break;

    case "mid":
      addScore(
        ["professional", "modern", "sage", "ocean", "nexus"],
        4
      );
      break;

    case "senior":
      addScore(
        ["executive", "professional", "monarch", "noir", "sage"],
        5
      );
      break;

    case "executive":
      addScore(
        ["executive", "monarch", "noir", "professional"],
        6
      );
      break;

    default:
      break;
  }

  /* Purpose */
  switch (answers.purpose) {
    case "job":
      addScore(["professional", "modern", "clean", "classic"], 3);
      break;

    case "internship":
      addScore(["modern", "clean", "minimal", "tech"], 4);
      break;

    case "freelance":
      addScore(
        ["creative", "portfolio", "modern", "atelier", "muse"],
        5
      );
      break;

    case "academicPosition":
      addScore(["academic", "classic", "minimal"], 6);
      break;

    case "careerChange":
      addScore(
        ["professional", "modern", "clean", "sage"],
        4
      );
      break;

    default:
      break;
  }

  /* ATS */
  switch (answers.ats) {
    case "veryImportant":
      addScore(
        [
          "classic",
          "minimal",
          "clean",
          "professional",
          "executive",
          "tech",
          "nexus",
          "academic",
          "ocean",
          "sage",
        ],
        7
      );
      break;

    case "important":
      addScore(
        [
          "classic",
          "minimal",
          "clean",
          "professional",
          "tech",
          "nexus",
          "academic",
        ],
        4
      );
      break;

    case "notSure":
      addScore(["modern", "professional", "clean"], 2);
      break;

    case "notImportant":
      addScore(
        [
          "creative",
          "portfolio",
          "aurora",
          "muse",
          "orbit",
          "noir",
          "coral",
          "stellar",
          "atelier",
        ],
        5
      );
      break;

    default:
      break;
  }

  /* Style */
  switch (answers.style) {
    case "modern":
      addScore(
        ["modern", "aurora", "nexus", "vertex", "stellar"],
        6
      );
      break;

    case "minimal":
      addScore(["minimal", "clean", "academic"], 6);
      break;

    case "professional":
      addScore(
        ["professional", "classic", "executive", "ocean", "sage"],
        6
      );
      break;

    case "creative":
      addScore(
        ["creative", "portfolio", "muse", "coral", "atelier"],
        6
      );
      break;

    case "traditional":
      addScore(["classic", "academic", "professional"], 6);
      break;

    default:
      break;
  }

  /* Strength */
  switch (answers.strength) {
    case "projects":
      addScore(
        ["tech", "nexus", "vertex", "modern"],
        6
      );
      break;

    case "experience":
      addScore(
        ["professional", "executive", "classic", "ocean"],
        6
      );
      break;

    case "education":
      addScore(
        ["academic", "classic", "minimal"],
        6
      );
      break;

    case "research":
      addScore(["academic", "classic"], 7);
      break;

    case "portfolio":
      addScore(
        ["portfolio", "creative", "atelier", "muse"],
        7
      );
      break;

    case "leadership":
      addScore(
        ["executive", "monarch", "professional"],
        7
      );
      break;

    default:
      break;
  }

  return (
    Object.entries(scores).sort((a, b) => b[1] - a[1])[0]?.[0] ||
    "modern"
  );
}

/* =========================================================
   COMPONENT
========================================================= */

export default function TemplateRecommendation({
  onClose,
  onSelect,
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const backdropRef = useRef(null);
  const panelRef = useRef(null);
  const contentRef = useRef(null);

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;

  /* =======================================================
     OPEN ANIMATION + BODY LOCK
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const context = gsap.context(() => {
      gsap.fromTo(
        backdropRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.25,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        panelRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.45,
          ease: "power3.out",
        }
      );
    });

    return () => {
      context.revert();
      document.body.style.overflow = "";
    };
  }, []);

  /* =======================================================
     ESCAPE KEY
  ======================================================= */

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  /* =======================================================
     QUESTION TRANSITION
  ======================================================= */

  useEffect(() => {
    if (!contentRef.current) return;

    gsap.fromTo(
      contentRef.current,
      {
        opacity: 0,
        x: 20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      }
    );
  }, [step]);

  /* =======================================================
     SELECT ANSWER
  ======================================================= */

  const handleAnswer = (value) => {
    const nextAnswers = {
      ...answers,
      [currentQuestion.id]: value,
    };

    setAnswers(nextAnswers);

    if (step === questions.length - 1) {
      const recommendedTemplate =
        getRecommendedTemplate(nextAnswers);

      setTimeout(() => {
        onSelect(recommendedTemplate);
      }, 250);

      return;
    }

    setTimeout(() => {
      setStep((current) => current + 1);
    }, 180);
  };

  const handleBack = () => {
    if (step === 0) {
      onClose();
      return;
    }

    setStep((current) => current - 1);
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-buildcv-ink/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={panelRef}
        className="relative flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] border border-buildcv-border bg-buildcv-surface shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="template-recommendation-title"
      >
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="border-b border-buildcv-border px-6 py-5 sm:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-buildcv-violet">
                <span>✦</span>
                Template Match
              </div>

              <h2
                id="template-recommendation-title"
                className="mt-1 font-display text-xl font-bold text-buildcv-ink sm:text-2xl"
              >
                Find your perfect template
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-buildcv-border bg-buildcv-surface-soft text-buildcv-text-muted transition hover:border-buildcv-border-violet hover:bg-buildcv-violet-50 hover:text-buildcv-violet"
              aria-label="Close"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Progress */}
          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs font-semibold text-buildcv-text-muted">
              <span>
                Question {step + 1} of {questions.length}
              </span>

              <span>{Math.round(progress)}%</span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-buildcv-violet-50">
              <div
                className="h-full rounded-full bg-buildcv-gradient transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          ref={contentRef}
          className="overflow-y-auto px-6 py-7 sm:px-8 sm:py-9"
        >
          <h3 className="font-display text-2xl font-bold tracking-tight text-buildcv-ink sm:text-3xl">
            {currentQuestion.title}
          </h3>

          <p className="mt-2 max-w-xl text-sm leading-6 text-buildcv-text-secondary sm:text-base">
            {currentQuestion.description}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {currentQuestion.options.map((option) => {
              const selected =
                answers[currentQuestion.id] === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleAnswer(option.value)}
                  className={`group flex min-h-[64px] items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-200 ${
                    selected
                      ? "border-buildcv-violet bg-buildcv-violet-50 shadow-buildcv-sm"
                      : "border-buildcv-border bg-buildcv-surface hover:-translate-y-0.5 hover:border-buildcv-border-violet hover:bg-buildcv-violet-50/60"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border text-sm font-bold transition ${
                      selected
                        ? "border-buildcv-violet bg-buildcv-violet text-buildcv-white"
                        : "border-buildcv-border bg-buildcv-surface-soft text-buildcv-text-muted group-hover:border-buildcv-violet group-hover:text-buildcv-violet"
                    }`}
                  >
                    {selected ? "✓" : ""}
                  </span>

                  <span
                    className={`text-sm font-semibold ${
                      selected
                        ? "text-buildcv-violet"
                        : "text-buildcv-ink-600"
                    }`}
                  >
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div className="flex items-center justify-between border-t border-buildcv-border bg-buildcv-surface-soft px-6 py-4 sm:px-8">
          <button
            type="button"
            onClick={handleBack}
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-buildcv-text-muted transition hover:bg-buildcv-surface hover:text-buildcv-ink"
          >
            ← Back
          </button>

          <span className="text-xs font-medium text-buildcv-text-muted">
            Your answers help us personalize the recommendation.
          </span>
        </div>
      </div>
    </div>
  );
}