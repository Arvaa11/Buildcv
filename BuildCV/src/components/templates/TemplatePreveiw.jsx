import ModernPreview from "./previews/ModernPreview"
import ProfessionalPreview from "./previews/ProfessionalPreview"
import MinimalPreview from "./previews/MinimalPreview"
import ExecutivePreview from "./previews/ExecutivePreview"
import CreativePreview from "./previews/CreativePreview"
import ElegantPreview from "./previews/ElegantPreview"
import ClassicPreview from "./previews/ClassicPreview"
import AcademicPreview from "./previews/AcademicPreveiw"
import TechProPreview from "./previews/TechProPreview"
import DeveloperPreview from "./previews/DeveloperPreview"
import StartupPreview from "./previews/StartupPreview"
import ATSFocusPreview from "./previews/ATSFocusPreview"

// =====================================================
// BUILDCV — TEMPLATE PREVIEW
// =====================================================

// Sample data is ONLY used on the Templates page.
// The actual Builder preview uses the user's real data.
const sampleData = {
  personal: {
    fullName: "Alex Morgan",
    jobTitle: "Product Designer",
    email: "alex@example.com",
    phone: "+1 555 123 4567",
    location: "New York, USA",
    linkedin: "linkedin.com/in/alexmorgan",
    github: "github.com/alexmorgan",
    summary:
      "Creative professional with experience building thoughtful digital products and solving complex problems.",
  },

  education: [
    {
      id: "1",
      degree: "B.S. Computer Science",
      institution: "University of Technology",
      field: "",
      startDate: "",
      endDate: "",
      date: "2021 — 2025",
      description: "",
    },
  ],

  experience: [
    {
      id: "1",
      position: "Senior Product Designer",
      title: "Senior Product Designer",
      company: "Acme Inc.",
      startDate: "",
      endDate: "",
      date: "2023 — Present",
      description:
        "Designed scalable digital experiences and collaborated with cross-functional teams to deliver high-impact products.",
    },
  ],

  skills: [
    { name: "UI/UX Design" },
    { name: "Figma" },
    { name: "Product Strategy" },
    { name: "Prototyping" },
  ],

  projects: [
    {
      id: "1",
      name: "Design System",
      description:
        "Created a scalable design system used across multiple products.",
      technologies:
        "Figma · React · Storybook",
      link: "",
    },
  ],
}

// =====================================================
// TEMPLATE COMPONENT MAP
// =====================================================

const templateComponents = {
  modern: ModernPreview,
  professional: ProfessionalPreview,
  minimal: MinimalPreview,
  executive: ExecutivePreview,
  creative: CreativePreview,
  elegant: ElegantPreview,
  classic: ClassicPreview,
  academic: AcademicPreview,
  "tech-pro": TechProPreview,
  developer: DeveloperPreview,
  startup: StartupPreview,
  "ats-focus": ATSFocusPreview,
}

// =====================================================
// NORMALIZE TEMPLATE ID
// =====================================================

function normalizeTemplateId(templateId) {
  if (!templateId) {
    return "modern"
  }

  return String(templateId)
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
}

// =====================================================
// TEMPLATE PREVIEW
// =====================================================

function TemplatePreview({
  templateId,
}) {
  const normalizedTemplateId =
    normalizeTemplateId(templateId)

  const SelectedTemplate =
    templateComponents[
      normalizedTemplateId
    ] || ModernPreview

  return (
    <SelectedTemplate
      formData={sampleData}
      data={sampleData}
    />
  )
}

export default TemplatePreview