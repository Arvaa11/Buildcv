import ModernPreview from "./templates/ModernPreview"
import ProfessionalPreview from "./templates/ProfessionalPreview"
import MinimalPreview from "./templates/MinimalPreview"

// Add your other template imports here as we connect them.

function ResumePreview({
  template = "modern",
  formData = {},
}) {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernPreview formData={formData} />

      case "professional":
        return <ProfessionalPreview formData={formData} />

      case "minimal":
        return <MinimalPreview formData={formData} />

      default:
        return <ModernPreview formData={formData} />
    }
  }

  return (
    <div
      id="resume-preview"
      className="
        mx-auto
        w-full
        max-w-[794px]
        overflow-hidden
        bg-white
        shadow-2xl
      "
    >
      {renderTemplate()}
    </div>
  )
}

export default ResumePreview