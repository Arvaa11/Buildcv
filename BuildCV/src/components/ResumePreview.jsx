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
//
// IMPORTANT:
// This component is the single controller for all
// resume templates.
//
// Builder passes:
//   selectedTemplate
//   formData
//
// ResumePreview then renders the correct template.
//
// The exact same #resume-preview element is used by
// DownloadButton for PDF generation.
// =====================================================

function ResumePreview({
  selectedTemplate = "modern",
  formData = {},
  previewId = "resume-preview",
}) {
  // ===================================================
  // NORMALIZE FORM DATA
  // ===================================================

  const normalizedData = {
    personal: {
      fullName: "",
      jobTitle: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      github: "",
      summary: "",
      profileImage: "",
      ...(formData.personal || {}),
    },

    education: Array.isArray(formData.education)
      ? formData.education
      : [],

    experience: Array.isArray(formData.experience)
      ? formData.experience
      : [],

    skills: Array.isArray(formData.skills)
      ? formData.skills
      : [],

    projects: Array.isArray(formData.projects)
      ? formData.projects
      : [],
  }

  // ===================================================
  // TEMPLATE RENDERER
  // ===================================================

  const renderTemplate = () => {
    switch (selectedTemplate) {
      // -------------------------------------------------
      // MODERN
      // -------------------------------------------------

      case "modern":
        return (
          <ModernPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // PROFESSIONAL
      // -------------------------------------------------

      case "professional":
        return (
          <ProfessionalPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // MINIMAL
      // -------------------------------------------------

      case "minimal":
        return (
          <MinimalPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // CLASSIC
      // -------------------------------------------------

      case "classic":
        return (
          <ClassicPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // ELEGANT
      // -------------------------------------------------

      case "elegant":
        return (
          <ElegantPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // CREATIVE
      // -------------------------------------------------

      case "creative":
        return (
          <CreativePreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // DEVELOPER
      // -------------------------------------------------

      case "developer":
        return (
          <DeveloperPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // EXECUTIVE
      // -------------------------------------------------

      case "executive":
        return (
          <ExecutivePreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // ACADEMIC
      // -------------------------------------------------

      case "academic":
        return (
          <AcademicPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // STARTUP
      // -------------------------------------------------

      case "startup":
        return (
          <StartupPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // ATS FOCUS
      // -------------------------------------------------

      case "ats-focus":
        return (
          <ATSFocusPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // TECH PRO
      // -------------------------------------------------

      case "tech-pro":
        return (
          <TechProPreview
            formData={normalizedData}
          />
        )

      // -------------------------------------------------
      // FALLBACK
      // -------------------------------------------------

      default:
        return (
          <ModernPreview
            formData={normalizedData}
          />
        )
    }
  }

  // ===================================================
  // MAIN
  // ===================================================

  return (
    <div
      id={previewId}
      className="
        resume-preview
        mx-auto
        w-full
        max-w-[794px]
        overflow-hidden
        bg-white
      "
    >
      {renderTemplate()}
    </div>
  )
}

export default ResumePreview
