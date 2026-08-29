import ModernPreview from "./templates/previews/ModernPreview"
import ProfessionalPreview from "./templates/previews/ProfessionalPreview"
import MinimalPreview from "./templates/previews/MinimalPreview"

// =====================================================
// RESUME PREVIEW
// =====================================================

function ResumePreview({
  selectedTemplate = "modern",
  formData = {},
  previewId,
}) {
  // ===================================================
  // NORMALIZE DATA
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
  // RENDER TEMPLATE
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