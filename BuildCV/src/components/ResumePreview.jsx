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
      case "modern":
        return (
          <ModernPreview
            formData={normalizedData}
          />
        )

      case "professional":
        return (
          <ProfessionalPreview
            formData={normalizedData}
          />
        )

      case "minimal":
        return (
          <MinimalPreview
            formData={normalizedData}
          />
        )

      case "classic":
        return (
          <ClassicPreview
            formData={normalizedData}
          />
        )

      case "elegant":
        return (
          <ElegantPreview
            formData={normalizedData}
          />
        )

      case "creative":
        return (
          <CreativePreview
            formData={normalizedData}
          />
        )

      case "developer":
        return (
          <DeveloperPreview
            formData={normalizedData}
          />
        )

      case "executive":
        return (
          <ExecutivePreview
            formData={normalizedData}
          />
        )

      case "academic":
        return (
          <AcademicPreview
            formData={normalizedData}
          />
        )

      case "startup":
        return (
          <StartupPreview
            formData={normalizedData}
          />
        )

      case "tech-pro":
        return (
          <TechProPreview
            formData={normalizedData}
          />
        )

      case "ats-focus":
        return (
          <ATSFocusPreview
            formData={normalizedData}
          />
        )

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
      className="resume-preview"
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
      }}
    >
      {renderTemplate()}
    </div>
  )
}

export default ResumePreview