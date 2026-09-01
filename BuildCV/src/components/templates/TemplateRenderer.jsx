import ClassicTemplate from "./previews/ClassicPreview";
import ProfessionalPreview from "./previews/ProfessionalPreview";
import ModernPreview from "./previews/ModernPreview";
import MinimalPreview from "./previews/MinimalPreview";
import ExecutivePreview from "./previews/ExecutivePreview";
import ElegantPreview from "./previews/ElegantPreview";
import CreativePreview from "./previews/CreativePreview";
import TechProPreview from "./previews/TechProPreview";
import StartupPreview from "./previews/StartupPreview";
import AcademicPreview from "./previews/AcademicPreveiw"


const templateComponents = {
  classic: ClassicTemplate,
  professional: ProfessionalPreview,
  modern: ModernPreview,
};

export default function TemplateRenderer({
  templateId,
  resumeData,
}) {
  const Template =
    templateComponents[templateId] || ClassicTemplate;

  return (
    <Template data={resumeData} />
  );
}