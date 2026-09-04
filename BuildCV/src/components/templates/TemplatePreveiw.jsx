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

function TemplatePreview({
  template,
  formData = {},
  data = {},
}) {
  if (!template) {
    return null;
  }

  const previewProps = {
    formData,
    data,
  };

  switch (template.id) {
    case "classic":
      return <ClassicPreview {...previewProps} />;

    case "minimal":
      return <MinimalPreview {...previewProps} />;

    case "bold":
      return <BoldPreview {...previewProps} />;

    case "clean":
      return <CleanPreview {...previewProps} />;

    case "modern":
      return <ModernPreview {...previewProps} />;

    case "professional":
      return <ProfessionalPreview {...previewProps} />;

    case "executive":
      return <ExecutivePreview {...previewProps} />;

    case "tech":
      return <TechPreview {...previewProps} />;

    case "elegant":
      return <ElegantPreview {...previewProps} />;

    case "academic":
      return <AcademicPreview {...previewProps} />;

    case "creative":
      return <CreativePreview {...previewProps} />;

    case "portfolio":
      return <PortfolioPreview {...previewProps} />;

    case "aurora":
      return <AuroraPreview {...previewProps} />;

    case "monarch":
      return <MonarchPreview {...previewProps} />;

    case "nexus":
      return <NexusPreview {...previewProps} />;

    case "sage":
      return <SagePreview {...previewProps} />;

    case "vertex":
      return <VertexPreview {...previewProps} />;

    case "muse":
      return <MusePreview {...previewProps} />;

    case "orbit":
      return <OrbitPreview {...previewProps} />;

    case "noir":
      return <NoirPreview {...previewProps} />;

    case "coral":
      return <CoralPreview {...previewProps} />;

    case "ocean":
      return <OceanPreview {...previewProps} />;

    case "stellar":
      return <StellarPreview {...previewProps} />;

    case "atelier":
      return <AtelierPreview {...previewProps} />;

    default:
      return <ModernPreview {...previewProps} />;
  }
}

export default TemplatePreview;