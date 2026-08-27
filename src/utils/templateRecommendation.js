import { templates } from "../data/templates"

export function calculateTemplateScore(
  template,
  answers
) {
  let score = 0

  // Role
  if (
    answers.role &&
    template.roles.includes(answers.role)
  ) {
    score += 30
  }

  // Experience level
  if (
    answers.experienceLevel &&
    template.experienceLevels.includes(
      answers.experienceLevel
    )
  ) {
    score += 20
  }

  // Style
  if (
    answers.style &&
    template.style.toLowerCase() ===
      answers.style.toLowerCase()
  ) {
    score += 20
  }

  // ATS
  if (
    answers.ats &&
    template.atsLevel === answers.ats
  ) {
    score += 15
  }

  // Photo
  if (
    typeof answers.photo === "boolean" &&
    template.photo === answers.photo
  ) {
    score += 10
  }

  // Content level
  if (
    answers.contentLevel === "short" &&
    template.style === "Compact"
  ) {
    score += 5
  }

  if (
    answers.contentLevel === "detailed" &&
    template.sections.includes("experience")
  ) {
    score += 5
  }

  return score
}

export function getRecommendedTemplates(answers) {
  return templates
    .map((template) => ({
      ...template,
      score: calculateTemplateScore(
        template,
        answers
      ),
    }))
    .sort((a, b) => b.score - a.score)
}

export function getMatchLabel(score) {
  if (score >= 90) {
    return "Excellent Match"
  }

  if (score >= 75) {
    return "Great Match"
  }

  if (score >= 60) {
    return "Good Match"
  }

  return "Recommended"
}