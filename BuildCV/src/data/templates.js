// =====================================================
// BUILDCV — TEMPLATE DATA
// =====================================================

export const templates = [
  // ===================================================
  // MODERN
  // ===================================================

  {
    id: "modern",
    name: "Modern",
    category: "Modern",

    description:
      "A clean and contemporary resume designed for modern professionals.",

    tag: "Popular",

    accent: "#6366f1",

    preview: "modern",

    features: [
      "Clean Layout",
      "Modern Design",
      "Professional",
    ],
  },

  // ===================================================
  // PROFESSIONAL
  // ===================================================

  {
    id: "professional",
    name: "Professional",
    category: "Professional",

    description:
      "A polished and structured design ideal for corporate and professional roles.",

    tag: "Professional",

    accent: "#2563eb",

    preview: "professional",

    features: [
      "Corporate",
      "Structured",
      "Professional",
    ],
  },

  // ===================================================
  // MINIMAL
  // ===================================================

  {
    id: "minimal",
    name: "Minimal",
    category: "Minimal",

    description:
      "A simple and distraction-free resume focused on clarity and readability.",

    tag: "Simple",

    accent: "#64748b",

    preview: "minimal",

    features: [
      "Minimal",
      "Clean",
      "ATS Friendly",
    ],
  },

  // ===================================================
  // EXECUTIVE
  // ===================================================

  {
    id: "executive",
    name: "Executive",
    category: "Executive",

    description:
      "A sophisticated resume designed for senior professionals and leadership roles.",

    tag: "Executive",

    accent: "#111827",

    preview: "executive",

    features: [
      "Leadership",
      "Premium",
      "Corporate",
    ],
  },

  // ===================================================
  // CREATIVE
  // ===================================================

  {
    id: "creative",
    name: "Creative",
    category: "Creative",

    description:
      "A bold and expressive design for designers and creative professionals.",

    tag: "Creative",

    accent: "#9333ea",

    preview: "creative",

    features: [
      "Creative",
      "Visual",
      "Modern",
    ],
  },

  // ===================================================
  // ELEGANT
  // ===================================================

  {
    id: "elegant",
    name: "Elegant",
    category: "Elegant",

    description:
      "A refined and sophisticated layout with a timeless visual style.",

    tag: "Elegant",

    accent: "#a16207",

    preview: "elegant",

    features: [
      "Elegant",
      "Refined",
      "Timeless",
    ],
  },

  // ===================================================
  // CLASSIC
  // ===================================================

  {
    id: "classic",
    name: "Classic",
    category: "Classic",

    description:
      "A traditional resume layout built for clarity, professionalism, and readability.",

    tag: "Classic",

    accent: "#374151",

    preview: "classic",

    features: [
      "Traditional",
      "Professional",
      "Readable",
    ],
  },

  // ===================================================
  // ACADEMIC
  // ===================================================

  {
    id: "academic",
    name: "Academic",
    category: "Academic",

    description:
      "A detailed academic resume designed for students, researchers, and educators.",

    tag: "Academic",

    accent: "#1d4ed8",

    preview: "academic",

    features: [
      "Academic",
      "Detailed",
      "Research",
    ],
  },

  // ===================================================
  // TECH PRO
  // ===================================================

  {
    id: "tech-pro",
    name: "Tech Pro",
    category: "Technology",

    description:
      "A modern technical resume designed for software and technology professionals.",

    tag: "Tech",

    accent: "#06b6d4",

    preview: "tech-pro",

    features: [
      "Technology",
      "Technical",
      "Modern",
    ],
  },

  // ===================================================
  // DEVELOPER
  // ===================================================

  {
    id: "developer",
    name: "Developer",
    category: "Technology",

    description:
      "A developer-focused resume designed to highlight technical skills and projects.",

    tag: "Developer",

    accent: "#22c55e",

    preview: "developer",

    features: [
      "Developer",
      "Projects",
      "Technical",
    ],
  },

  // ===================================================
  // STARTUP
  // ===================================================

  {
    id: "startup",
    name: "Startup",
    category: "Modern",

    description:
      "A dynamic resume designed for startup professionals and fast-growing companies.",

    tag: "Startup",

    accent: "#f97316",

    preview: "startup",

    features: [
      "Startup",
      "Dynamic",
      "Modern",
    ],
  },

  // ===================================================
  // ATS FOCUS
  // ===================================================

  {
    id: "ats-focus",
    name: "ATS Focus",
    category: "ATS",

    description:
      "A straightforward ATS-friendly resume optimized for applicant tracking systems.",

    tag: "ATS Friendly",

    accent: "#475569",

    preview: "ats-focus",

    features: [
      "ATS Friendly",
      "Simple",
      "Readable",
    ],
  },
]

// =====================================================
// FIND TEMPLATE BY ID
// =====================================================

export function getTemplateById(id) {
  if (!id) {
    return templates[0]
  }

  return (
    templates.find(
      (template) =>
        template.id === String(id)
    ) || templates[0]
  )
}

// =====================================================
// GET TEMPLATE ID
// =====================================================

export function getTemplateId(template) {
  if (!template) {
    return "modern"
  }

  if (typeof template === "string") {
    return template
  }

  if (typeof template === "object") {
    return (
      template.id ||
      template.preview ||
      "modern"
    )
  }

  return "modern"
}

// =====================================================
// VALIDATE TEMPLATE ID
// =====================================================

export function isValidTemplateId(id) {
  return templates.some(
    (template) =>
      template.id === id
  )
}