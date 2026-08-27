import ModernPreview from "./previews/ModernPreview"
import ProfessionalPreview from "./previews/ProfessionalPreview"
import MinimalPreview from "./previews/MinimalPreview"

function TemplatePreview({ templateId }) {
  switch (templateId) {
    case "modern":
      return <ModernPreview />

    case "professional":
      return <ProfessionalPreview />

    case "minimal":
      return <MinimalPreview />

    default:
      return <ModernPreview />
  }
}

export default TemplatePreview