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

function TemplatePreview({ templateId, formData = {} }) {
  switch (templateId) {
    case "modern":
      return <ModernPreview formData={formData} />

    case "professional":
      return <ProfessionalPreview formData={formData} />

    case "minimal":
      return <MinimalPreview formData={formData} />

    case "executive":
      return <ExecutivePreview formData={formData} />

    case "creative":
      return <CreativePreview formData={formData} />

    case "elegant":
      return <ElegantPreview formData={formData} />

    case "classic":
      return <ClassicPreview formData={formData} />

    case "academic":
      return <AcademicPreview formData={formData} />

    case "tech-pro":
      return <TechProPreview formData={formData} />

    case "developer":
      return <DeveloperPreview formData={formData} />

    case "startup":
      return <StartupPreview formData={formData} />

    case "ats-focus":
      return <ATSFocusPreview formData={formData} />

    default:
      return <ModernPreview formData={formData} />
  }
}

export default TemplatePreview