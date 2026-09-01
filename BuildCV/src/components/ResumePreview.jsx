import ModernPreview from "./templates/previews/ModernPreview"
import ProfessionalPreview from "./templates/previews/ProfessionalPreview"
import MinimalPreview from "./templates/previews/MinimalPreview"
import ClassicPreview from "./templates/previews/ClassicPreview"
import ElegantPreview from "./templates/previews/ElegantPreview"
import CreativePreview from "./templates/previews/CreativePreview"
import DeveloperPreview from "./templates/previews/DeveloperPreview"
import ExecutivePreview from "./templates/previews/ExecutivePreview"
import AcademicPreview from "./templates/previews/AcademicPreveiw"
import StartupPreview from "./templates/previews/StartupPreview"
import TechProPreview from "./templates/previews/TechProPreview"
import ATSFocusPreview from "./templates/previews/ATSFocusPreview"

// =====================================================
// BUILDCV — RESUME PREVIEW
// =====================================================

function ResumePreview({
  selectedTemplate = "modern",
  formData = {},
  previewId = "resume-preview",
}) {
  // ===================================================
  // NORMALIZE TEMPLATE ID
  // ===================================================

  const normalizeTemplateId = (template) => {
    if (!template) {
      return "modern"
    }

    if (typeof template === "string") {
      return template
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
    }

    if (typeof template === "object") {
      return (
        template.id ||
        template.slug ||
        normalizeTemplateId(template.name) ||
        "modern"
      )
    }

    return "modern"
  }

  const templateId =
    normalizeTemplateId(selectedTemplate)

  // ===================================================
  // PERSONAL DATA
  // ===================================================

  const personal = {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    github: "",
    summary: "",
    profileImage: "",
    ...(formData?.personal || {}),
  }

  // ===================================================
  // NORMALIZED RESUME DATA
  // ===================================================

  const normalizedData = {
    personal,

    education: Array.isArray(formData?.education)
      ? formData.education
      : [],

    experience: Array.isArray(formData?.experience)
      ? formData.experience
      : [],

    skills: Array.isArray(formData?.skills)
      ? formData.skills
      : [],

    projects: Array.isArray(formData?.projects)
      ? formData.projects
      : [],

    // =================================================
    // ROOT LEVEL PERSONAL DATA
    // =================================================

    fullName: personal.fullName,
    jobTitle: personal.jobTitle,
    email: personal.email,
    phone: personal.phone,
    location: personal.location,
    linkedin: personal.linkedin,
    github: personal.github,
    summary: personal.summary,
    profileImage: personal.profileImage,
  }

  // ===================================================
  // COMMON TEMPLATE PROPS
  // ===================================================

  const templateProps = {
    formData: normalizedData,
    data: normalizedData,
  }

  // ===================================================
  // RENDER SELECTED TEMPLATE
  // ===================================================

  const renderTemplate = () => {
    switch (templateId) {
      // =================================================
      // MODERN
      // =================================================

      case "modern":
        return (
          <ModernPreview
            {...templateProps}
          />
        )

      // =================================================
      // PROFESSIONAL
      // =================================================

      case "professional":
        return (
          <ProfessionalPreview
            {...templateProps}
          />
        )

      // =================================================
      // MINIMAL
      // =================================================

      case "minimal":
        return (
          <MinimalPreview
            {...templateProps}
          />
        )

      // =================================================
      // CLASSIC
      // =================================================

      case "classic":
        return (
          <ClassicPreview
            {...templateProps}
          />
        )

      // =================================================
      // ELEGANT
      // =================================================

      case "elegant":
        return (
          <ElegantPreview
            {...templateProps}
          />
        )

      // =================================================
      // CREATIVE
      // =================================================

      case "creative":
        return (
          <CreativePreview
            {...templateProps}
          />
        )

      // =================================================
      // DEVELOPER
      // =================================================

      case "developer":
        return (
          <DeveloperPreview
            {...templateProps}
          />
        )

      // =================================================
      // EXECUTIVE
      // =================================================

      case "executive":
        return (
          <ExecutivePreview
            {...templateProps}
          />
        )

      // =================================================
      // ACADEMIC
      // =================================================

      case "academic":
        return (
          <AcademicPreview
            {...templateProps}
          />
        )

      // =================================================
      // STARTUP
      // =================================================

      case "startup":
        return (
          <StartupPreview
            {...templateProps}
          />
        )

      // =================================================
      // TECH PRO
      // =================================================

      case "tech-pro":
        return (
          <TechProPreview
            {...templateProps}
          />
        )

      // =================================================
      // ATS FOCUS
      // =================================================

      case "ats-focus":
        return (
          <ATSFocusPreview
            {...templateProps}
          />
        )

      // =================================================
      // FALLBACK
      // =================================================

      default:
        return (
          <ModernPreview
            {...templateProps}
          />
        )
    }
  }

  // ===================================================
  // MAIN PREVIEW
  // ===================================================

  return (
    <div
      id={previewId}
      className="resume-preview"
      data-template={templateId}
      style={{
        width: "210mm",
        minWidth: "210mm",

        height: "297mm",
        minHeight: "297mm",

        margin: "0",
        padding: "0",

        backgroundColor: "#FFFFFF",
        color: "#111827",

        boxSizing: "border-box",

        overflow: "hidden",
        position: "relative",

        flexShrink: 0,
      }}
    >
      {renderTemplate()}
    </div>
  )
}

export default ResumePreview