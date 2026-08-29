// =====================================================
// BUILDCV — TEMPLATE RECOMMENDATION ENGINE
// =====================================================

const TEMPLATE_IDS = [
  "modern",
  "professional",
  "minimal",
  "academic",
  "ats-focus",
  "classic",
  "creative",
  "developer",
  "elegant",
  "executive",
  "startup",
  "tech-pro",
]

// =====================================================
// TEMPLATE SCORING RULES
// =====================================================

const RULES = {
  modern: {
    careerField: {
      technology: 8,
      business: 6,
      general: 7,
      creative: 5,
      academic: 3,
    },

    experienceLevel: {
      student: 7,
      entry: 8,
      mid: 8,
      senior: 6,
      executive: 4,
    },

    purpose: {
      job: 7,
      internship: 8,
      freelance: 7,
      careerChange: 8,
      academicPosition: 3,
    },

    ats: {
      veryImportant: 5,
      important: 6,
      notSure: 7,
      notImportant: 7,
    },

    style: {
      modern: 10,
      minimal: 7,
      professional: 6,
      creative: 5,
      traditional: 3,
    },

    strength: {
      projects: 8,
      experience: 7,
      education: 5,
      research: 3,
      portfolio: 7,
      leadership: 6,
    },
  },

  professional: {
    careerField: {
      business: 10,
      general: 9,
      technology: 6,
      academic: 6,
      creative: 4,
    },

    experienceLevel: {
      student: 5,
      entry: 7,
      mid: 9,
      senior: 9,
      executive: 7,
    },

    purpose: {
      job: 9,
      internship: 5,
      freelance: 4,
      careerChange: 7,
      academicPosition: 6,
    },

    ats: {
      veryImportant: 8,
      important: 8,
      notSure: 7,
      notImportant: 5,
    },

    style: {
      modern: 6,
      minimal: 7,
      professional: 10,
      creative: 3,
      traditional: 8,
    },

    strength: {
      projects: 5,
      experience: 10,
      education: 6,
      research: 5,
      portfolio: 4,
      leadership: 9,
    },
  },

  minimal: {
    careerField: {
      technology: 7,
      business: 7,
      general: 9,
      creative: 6,
      academic: 7,
    },

    experienceLevel: {
      student: 8,
      entry: 9,
      mid: 8,
      senior: 7,
      executive: 6,
    },

    purpose: {
      job: 8,
      internship: 8,
      freelance: 7,
      careerChange: 8,
      academicPosition: 7,
    },

    ats: {
      veryImportant: 8,
      important: 8,
      notSure: 9,
      notImportant: 8,
    },

    style: {
      modern: 7,
      minimal: 10,
      professional: 8,
      creative: 4,
      traditional: 8,
    },

    strength: {
      projects: 7,
      experience: 7,
      education: 7,
      research: 6,
      portfolio: 5,
      leadership: 6,
    },
  },

  academic: {
    careerField: {
      academic: 10,
      technology: 3,
      business: 4,
      general: 4,
      creative: 3,
    },

    experienceLevel: {
      student: 8,
      entry: 7,
      mid: 8,
      senior: 8,
      executive: 4,
    },

    purpose: {
      job: 4,
      internship: 5,
      freelance: 2,
      careerChange: 3,
      academicPosition: 10,
    },

    ats: {
      veryImportant: 5,
      important: 6,
      notSure: 7,
      notImportant: 6,
    },

    style: {
      modern: 4,
      minimal: 7,
      professional: 8,
      creative: 2,
      traditional: 10,
    },

    strength: {
      projects: 4,
      experience: 6,
      education: 9,
      research: 10,
      portfolio: 2,
      leadership: 6,
    },
  },

  "ats-focus": {
    careerField: {
      technology: 9,
      business: 9,
      general: 9,
      academic: 6,
      creative: 4,
    },

    experienceLevel: {
      student: 7,
      entry: 9,
      mid: 10,
      senior: 10,
      executive: 8,
    },

    purpose: {
      job: 10,
      internship: 8,
      freelance: 3,
      careerChange: 9,
      academicPosition: 6,
    },

    ats: {
      veryImportant: 15,
      important: 12,
      notSure: 7,
      notImportant: 2,
    },

    style: {
      modern: 5,
      minimal: 8,
      professional: 9,
      creative: 1,
      traditional: 8,
    },

    strength: {
      projects: 7,
      experience: 9,
      education: 7,
      research: 5,
      portfolio: 3,
      leadership: 7,
    },
  },

  classic: {
    careerField: {
      business: 8,
      general: 9,
      academic: 8,
      technology: 5,
      creative: 3,
    },

    experienceLevel: {
      student: 6,
      entry: 7,
      mid: 8,
      senior: 9,
      executive: 9,
    },

    purpose: {
      job: 8,
      internship: 5,
      freelance: 3,
      careerChange: 7,
      academicPosition: 8,
    },

    ats: {
      veryImportant: 7,
      important: 8,
      notSure: 8,
      notImportant: 7,
    },

    style: {
      modern: 3,
      minimal: 7,
      professional: 8,
      creative: 2,
      traditional: 10,
    },

    strength: {
      projects: 4,
      experience: 9,
      education: 8,
      research: 7,
      portfolio: 2,
      leadership: 8,
    },
  },

  creative: {
    careerField: {
      creative: 15,
      technology: 5,
      business: 3,
      academic: 2,
      general: 4,
    },

    experienceLevel: {
      student: 8,
      entry: 9,
      mid: 8,
      senior: 7,
      executive: 3,
    },

    purpose: {
      job: 6,
      internship: 8,
      freelance: 10,
      careerChange: 7,
      academicPosition: 1,
    },

    ats: {
      veryImportant: 1,
      important: 2,
      notSure: 5,
      notImportant: 10,
    },

    style: {
      modern: 7,
      minimal: 5,
      professional: 2,
      creative: 15,
      traditional: 1,
    },

    strength: {
      projects: 7,
      experience: 6,
      education: 2,
      research: 1,
      portfolio: 15,
      leadership: 4,
    },
  },

  developer: {
    careerField: {
      technology: 15,
      business: 2,
      academic: 2,
      creative: 5,
      general: 4,
    },

    experienceLevel: {
      student: 10,
      entry: 10,
      mid: 9,
      senior: 8,
      executive: 3,
    },

    purpose: {
      job: 9,
      internship: 10,
      freelance: 9,
      careerChange: 8,
      academicPosition: 2,
    },

    ats: {
      veryImportant: 10,
      important: 9,
      notSure: 7,
      notImportant: 4,
    },

    style: {
      modern: 9,
      minimal: 6,
      professional: 6,
      creative: 5,
      traditional: 2,
    },

    strength: {
      projects: 15,
      experience: 9,
      education: 6,
      research: 2,
      portfolio: 10,
      leadership: 3,
    },
  },

  elegant: {
    careerField: {
      business: 7,
      general: 8,
      creative: 7,
      technology: 5,
      academic: 5,
    },

    experienceLevel: {
      student: 5,
      entry: 7,
      mid: 8,
      senior: 9,
      executive: 8,
    },

    purpose: {
      job: 7,
      internship: 5,
      freelance: 7,
      careerChange: 7,
      academicPosition: 4,
    },

    ats: {
      veryImportant: 4,
      important: 5,
      notSure: 7,
      notImportant: 8,
    },

    style: {
      modern: 7,
      minimal: 7,
      professional: 8,
      creative: 8,
      traditional: 5,
    },

    strength: {
      projects: 5,
      experience: 8,
      education: 5,
      research: 3,
      portfolio: 9,
      leadership: 7,
    },
  },

  executive: {
    careerField: {
      business: 10,
      general: 9,
      technology: 7,
      academic: 4,
      creative: 3,
    },

    experienceLevel: {
      student: 1,
      entry: 2,
      mid: 6,
      senior: 10,
      executive: 15,
    },

    purpose: {
      job: 9,
      internship: 1,
      freelance: 3,
      careerChange: 7,
      academicPosition: 5,
    },

    ats: {
      veryImportant: 7,
      important: 8,
      notSure: 7,
      notImportant: 6,
    },

    style: {
      modern: 5,
      minimal: 4,
      professional: 10,
      creative: 2,
      traditional: 8,
    },

    strength: {
      projects: 4,
      experience: 12,
      education: 3,
      research: 2,
      portfolio: 3,
      leadership: 15,
    },
  },

  startup: {
    careerField: {
      technology: 10,
      business: 9,
      creative: 7,
      general: 7,
      academic: 2,
    },

    experienceLevel: {
      student: 8,
      entry: 10,
      mid: 10,
      senior: 8,
      executive: 4,
    },

    purpose: {
      job: 9,
      internship: 9,
      freelance: 7,
      careerChange: 9,
      academicPosition: 2,
    },

    ats: {
      veryImportant: 7,
      important: 7,
      notSure: 8,
      notImportant: 7,
    },

    style: {
      modern: 9,
      minimal: 6,
      professional: 5,
      creative: 8,
      traditional: 2,
    },

    strength: {
      projects: 10,
      experience: 9,
      education: 4,
      research: 2,
      portfolio: 8,
      leadership: 9,
    },
  },

  "tech-pro": {
    careerField: {
      technology: 15,
      business: 3,
      creative: 5,
      general: 5,
      academic: 3,
    },

    experienceLevel: {
      student: 8,
      entry: 9,
      mid: 10,
      senior: 10,
      executive: 5,
    },

    purpose: {
      job: 10,
      internship: 9,
      freelance: 8,
      careerChange: 9,
      academicPosition: 2,
    },

    ats: {
      veryImportant: 11,
      important: 10,
      notSure: 7,
      notImportant: 4,
    },

    style: {
      modern: 10,
      minimal: 6,
      professional: 7,
      creative: 6,
      traditional: 2,
    },

    strength: {
      projects: 13,
      experience: 10,
      education: 5,
      research: 3,
      portfolio: 10,
      leadership: 4,
    },
  },
}

// =====================================================
// CALCULATE TEMPLATE SCORE
// =====================================================

export function calculateTemplateScore(
  templateId,
  answers = {}
) {
  const rules = RULES[templateId]

  if (!rules) {
    return 0
  }

  let score = 0

  Object.entries(answers).forEach(
    ([questionId, answer]) => {
      if (!answer) return

      const questionRules = rules[questionId]

      if (!questionRules) return

      score += questionRules[answer] || 0
    }
  )

  return score
}

// =====================================================
// GET ALL SCORES
// =====================================================

export function getTemplateScores(answers = {}) {
  return TEMPLATE_IDS.map((templateId) => ({
    templateId,
    score: calculateTemplateScore(
      templateId,
      answers
    ),
  })).sort((a, b) => b.score - a.score)
}

// =====================================================
// GET RECOMMENDATIONS
// =====================================================

export function recommendTemplates(
  answers = {},
  limit = 3
) {
  const scores = getTemplateScores(answers)

  if (!Object.values(answers).some(Boolean)) {
    return []
  }

  const maxScore = scores[0]?.score || 0

  return scores
    .slice(0, limit)
    .map((item) => ({
      ...item,

      percentage:
        maxScore > 0
          ? Math.round(
              (item.score / maxScore) * 100
            )
          : 0,

      isBestMatch:
        item.templateId ===
        scores[0]?.templateId,
    }))
}

// =====================================================
// GET BEST TEMPLATE
// =====================================================

export function getBestTemplate(
  answers = {}
) {
  const recommendations =
    recommendTemplates(answers, 1)

  return (
    recommendations[0]?.templateId ||
    "modern"
  )
}

// =====================================================
// TEMPLATE MATCH DESCRIPTION
// =====================================================

export function getRecommendationReason(
  templateId,
  answers = {}
) {
  const reasons = []

  if (
    templateId === "developer" &&
    answers.careerField === "technology"
  ) {
    reasons.push(
      "Designed especially for technology and software roles."
    )
  }

  if (
    templateId === "tech-pro" &&
    answers.careerField === "technology"
  ) {
    reasons.push(
      "Strong choice for technical professionals."
    )
  }

  if (
    templateId === "ats-focus" &&
    ["veryImportant", "important"].includes(
      answers.ats
    )
  ) {
    reasons.push(
      "Optimized for ATS-focused job applications."
    )
  }

  if (
    templateId === "academic" &&
    answers.careerField === "academic"
  ) {
    reasons.push(
      "Well suited to academic and research profiles."
    )
  }

  if (
    templateId === "academic" &&
    answers.strength === "research"
  ) {
    reasons.push(
      "Provides a strong structure for research-focused information."
    )
  }

  if (
    templateId === "creative" &&
    answers.careerField === "creative"
  ) {
    reasons.push(
      "A strong visual choice for creative professionals."
    )
  }

  if (
    templateId === "creative" &&
    answers.strength === "portfolio"
  ) {
    reasons.push(
      "Works well when portfolio and creative work are important."
    )
  }

  if (
    templateId === "executive" &&
    ["senior", "executive"].includes(
      answers.experienceLevel
    )
  ) {
    reasons.push(
      "Designed for experienced professionals and leadership roles."
    )
  }

  if (
    templateId === "professional" &&
    answers.style === "professional"
  ) {
    reasons.push(
      "Matches your preference for a professional appearance."
    )
  }

  if (
    templateId === "minimal" &&
    answers.style === "minimal"
  ) {
    reasons.push(
      "Matches your preference for a clean and minimal design."
    )
  }

  if (
    templateId === "modern" &&
    answers.style === "modern"
  ) {
    reasons.push(
      "Matches your preference for a modern resume."
    )
  }

  if (reasons.length === 0) {
    reasons.push(
      "A balanced match based on your answers."
    )
  }

  return reasons.slice(0, 2)
}

// =====================================================
// DEFAULT EXPORT
// =====================================================

export default {
  calculateTemplateScore,
  getTemplateScores,
  recommendTemplates,
  getBestTemplate,
  getRecommendationReason,
}