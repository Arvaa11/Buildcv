// =====================================================
// BUILDCV — TEMPLATE QUESTIONNAIRE
// =====================================================

export const templateQuestions = [
  {
    id: "careerField",
    title: "What type of work are you applying for?",
    description:
      "Choose the field that best matches your career.",
    type: "single",
    options: [
      {
        id: "technology",
        label: "Technology / Software",
        value: "technology",
      },
      {
        id: "business",
        label: "Business / Corporate",
        value: "business",
      },
      {
        id: "academic",
        label: "Academic / Research",
        value: "academic",
      },
      {
        id: "creative",
        label: "Creative / Design",
        value: "creative",
      },
      {
        id: "general",
        label: "General Professional",
        value: "general",
      },
    ],
  },

  {
    id: "experienceLevel",
    title: "What is your experience level?",
    description:
      "This helps us choose a layout appropriate for your career stage.",
    type: "single",
    options: [
      {
        id: "student",
        label: "Student / Fresh Graduate",
        value: "student",
      },
      {
        id: "entry",
        label: "Entry Level",
        value: "entry",
      },
      {
        id: "mid",
        label: "Mid Level",
        value: "mid",
      },
      {
        id: "senior",
        label: "Senior Level",
        value: "senior",
      },
      {
        id: "executive",
        label: "Executive",
        value: "executive",
      },
    ],
  },

  {
    id: "purpose",
    title: "What are you creating this resume for?",
    description:
      "Choose the main purpose of your resume.",
    type: "single",
    options: [
      {
        id: "job",
        label: "Job Application",
        value: "job",
      },
      {
        id: "internship",
        label: "Internship",
        value: "internship",
      },
      {
        id: "freelance",
        label: "Freelancing",
        value: "freelance",
      },
      {
        id: "academicPosition",
        label: "Academic Position",
        value: "academicPosition",
      },
      {
        id: "careerChange",
        label: "Career Change",
        value: "careerChange",
      },
    ],
  },

  {
    id: "ats",
    title: "How important is ATS compatibility?",
    description:
      "ATS-friendly resumes are easier for applicant tracking systems to read.",
    type: "single",
    options: [
      {
        id: "veryImportant",
        label: "Very important",
        value: "veryImportant",
      },
      {
        id: "important",
        label: "Important",
        value: "important",
      },
      {
        id: "notSure",
        label: "I'm not sure",
        value: "notSure",
      },
      {
        id: "notImportant",
        label: "Not important",
        value: "notImportant",
      },
    ],
  },

  {
    id: "style",
    title: "What resume style do you prefer?",
    description:
      "Choose the visual style you like most.",
    type: "single",
    options: [
      {
        id: "modern",
        label: "Modern",
        value: "modern",
      },
      {
        id: "minimal",
        label: "Minimal & Clean",
        value: "minimal",
      },
      {
        id: "professional",
        label: "Professional",
        value: "professional",
      },
      {
        id: "creative",
        label: "Creative",
        value: "creative",
      },
      {
        id: "traditional",
        label: "Traditional",
        value: "traditional",
      },
    ],
  },

  {
    id: "strength",
    title: "What do you want your resume to highlight?",
    description:
      "Choose the area that best represents your strongest experience.",
    type: "single",
    options: [
      {
        id: "projects",
        label: "Projects & Technical Skills",
        value: "projects",
      },
      {
        id: "experience",
        label: "Work Experience",
        value: "experience",
      },
      {
        id: "education",
        label: "Education",
        value: "education",
      },
      {
        id: "research",
        label: "Research & Publications",
        value: "research",
      },
      {
        id: "portfolio",
        label: "Portfolio & Creative Work",
        value: "portfolio",
      },
      {
        id: "leadership",
        label: "Leadership & Achievements",
        value: "leadership",
      },
    ],
  },
]

// =====================================================
// DEFAULT ANSWERS
// =====================================================

export const DEFAULT_TEMPLATE_ANSWERS = {
  careerField: "",
  experienceLevel: "",
  purpose: "",
  ats: "",
  style: "",
  strength: "",
}

// =====================================================
// HELPERS
// =====================================================

export function getQuestionById(questionId) {
  return (
    templateQuestions.find(
      (question) => question.id === questionId
    ) || null
  )
}

export function getOptionById(questionId, optionId) {
  const question = getQuestionById(questionId)

  if (!question) {
    return null
  }

  return (
    question.options.find(
      (option) => option.id === optionId
    ) || null
  )
}

export function getTotalQuestions() {
  return templateQuestions.length
}

export function getAnsweredQuestions(answers = {}) {
  return templateQuestions.filter(
    (question) => Boolean(answers[question.id])
  ).length
}

export function getQuestionProgress(answers = {}) {
  const total = getTotalQuestions()

  if (!total) {
    return 0
  }

  return Math.round(
    (getAnsweredQuestions(answers) / total) * 100
  )
}

export default templateQuestions
