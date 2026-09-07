import ClassicPreview from "./ClassicPreview";
import MinimalPreview from "./MinimalPreview";
import BoldPreview from "./BoldPreview";
import CleanPreview from "./CleanPreview";
import ModernPreview from "./ModernPreview";
import ProfessionalPreview from "./ProfessionalPreview";
import ExecutivePreview from "./ExecutivePreview";
import TechPreview from "./TechPreview";
import ElegantPreview from "./ElegantPreview";
import AcademicPreview from "./AcademicPreview";
import CreativePreview from "./CreativePreview";
import PortfolioPreview from "./PortfolioPreview";
import AuroraPreview from "./AuroraPreview";
import MonarchPreview from "./MonarchPreview";
import NexusPreview from "./NexusPreview";
import SagePreview from "./SagePreview";
import VertexPreview from "./VertexPreview";
import MusePreview from "./MusePreview";
import OrbitPreview from "./OrbitPreview";
import NoirPreview from "./NoirPreview";
import CoralPreview from "./CoralPreview";
import OceanPreview from "./OceanPreview";
import StellarPreview from "./StellarPreview";
import AtelierPreview from "./AtelierPreview";

/* =========================================================
   TEMPLATE PREVIEW
========================================================= */

function TemplatePreview({
  template,
  formData = {},
  data = {},
  useSampleData = false,
}) {
  if (!template) {
    return null;
  }

  /*
   * IMPORTANT
   *
   * useSampleData = true
   * → Template cards / preview modal can show sample information.
   *
   * useSampleData = false
   * → Builder live preview shows ONLY the user's formData.
   */

  const previewProps = {
    formData,
    data,
    useSampleData,
  };

  let PreviewComponent;

  switch (template.id) {
    case "classic":
      PreviewComponent = ClassicPreview;
      break;

    case "minimal":
      PreviewComponent = MinimalPreview;
      break;

    case "bold":
      PreviewComponent = BoldPreview;
      break;

    case "clean":
      PreviewComponent = CleanPreview;
      break;

    case "modern":
      PreviewComponent = ModernPreview;
      break;

    case "professional":
      PreviewComponent = ProfessionalPreview;
      break;

    case "executive":
      PreviewComponent = ExecutivePreview;
      break;

    case "tech":
      PreviewComponent = TechPreview;
      break;

    case "elegant":
      PreviewComponent = ElegantPreview;
      break;

    case "academic":
      PreviewComponent = AcademicPreview;
      break;

    case "creative":
      PreviewComponent = CreativePreview;
      break;

    case "portfolio":
      PreviewComponent = PortfolioPreview;
      break;

    case "aurora":
      PreviewComponent = AuroraPreview;
      break;

    case "monarch":
      PreviewComponent = MonarchPreview;
      break;

    case "nexus":
      PreviewComponent = NexusPreview;
      break;

    case "sage":
      PreviewComponent = SagePreview;
      break;

    case "vertex":
      PreviewComponent = VertexPreview;
      break;

    case "muse":
      PreviewComponent = MusePreview;
      break;

    case "orbit":
      PreviewComponent = OrbitPreview;
      break;

    case "noir":
      PreviewComponent = NoirPreview;
      break;

    case "coral":
      PreviewComponent = CoralPreview;
      break;

    case "ocean":
      PreviewComponent = OceanPreview;
      break;

    case "stellar":
      PreviewComponent = StellarPreview;
      break;

    case "atelier":
      PreviewComponent = AtelierPreview;
      break;

    default:
      PreviewComponent = ModernPreview;
      break;
  }

  return (
    <div
      id="resume-preview"
      data-template-id={template.id}
      className="w-fit"
    >
      <PreviewComponent {...previewProps} />
    </div>
  );
}

export default TemplatePreview;
 
