import ClassicPreview from "./templates/ClassicPreview";
import MinimalPreview from "./templates/MinimalPreview";
import BoldPreview from "./templates/BoldPreview";
import CleanPreview from "./templates/CleanPreview";
import ModernPreview from "./templates/ModernPreview";
import ProfessionalPreview from "./templates/ProfessionalPreview";
import ExecutivePreview from "./templates/ExecutivePreview";
import TechPreview from "./templates/TechPreview";
import ElegantPreview from "./templates/ElegantPreview";
import AcademicPreview from "./templates/AcademicPreview";
import CreativePreview from "./templates/CreativePreview";
import PortfolioPreview from "./templates/PortfolioPreview";
import AuroraPreview from "./templates/AuroraPreview";
import MonarchPreview from "./templates/MonarchPreview";
import NexusPreview from "./templates/NexusPreview";
import SagePreview from "./templates/SagePreview";
import VertexPreview from "./templates/VertexPreview";
import MusePreview from "./templates/MusePreview";
import OrbitPreview from "./templates/OrbitPreview";
import NoirPreview from "./templates/NoirPreview";
import CoralPreview from "./templates/CoralPreview";
import OceanPreview from "./templates/OceanPreview";
import StellarPreview from "./templates/StellarPreview";
import AtelierPreview from "./templates/AtelierPreview";

// =====================================================
// BUILDCV — TEMPLATE COMPONENTS
// =====================================================

const templateComponents = {
  modern: ModernPreview,
  professional: ProfessionalPreview,
  minimal: MinimalPreview,
  executive: ExecutivePreview,
  creative: CreativePreview,
  elegant: ElegantPreview,
  classic: ClassicPreview,
  academic: AcademicPreview,

  bold: BoldPreview,
  clean: CleanPreview,
  tech: TechPreview,
  portfolio: PortfolioPreview,

  aurora: AuroraPreview,
  monarch: MonarchPreview,
  nexus: NexusPreview,
  sage: SagePreview,
  vertex: VertexPreview,
  muse: MusePreview,
  orbit: OrbitPreview,
  noir: NoirPreview,
  coral: CoralPreview,
  ocean: OceanPreview,
  stellar: StellarPreview,
  atelier: AtelierPreview,
};

// =====================================================
// BUILDCV — RESUME PREVIEW
// =====================================================

function ResumePreview({
  selectedTemplate = "modern",
  formData = {},
  previewId = "resume-preview",
}) {
  // ===================================================
  // GET TEMPLATE ID
  // ===================================================

  const templateId =
    typeof selectedTemplate === "string"
      ? selectedTemplate.trim().toLowerCase()
      : selectedTemplate?.id ||
        selectedTemplate?.slug ||
        selectedTemplate?.preview ||
        "modern";

  // ===================================================
  // PERSONAL INFORMATION
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
    ...(formData.personal || {}),
  };

  // ===================================================
  // NORMALIZED RESUME DATA
  // ===================================================

  const normalizedData = {
    // -----------------------------------------------
    // Personal
    // -----------------------------------------------

    personal,

    // -----------------------------------------------
    // Required sections
    // -----------------------------------------------

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

    // -----------------------------------------------
    // OPTIONAL SECTIONS
    // -----------------------------------------------

    certifications: formData.certifications || {
      enabled: false,
      items: [],
    },

    languages: formData.languages || {
      enabled: false,
      items: [],
    },

    achievements: formData.achievements || {
      enabled: false,
      items: [],
    },

    interests: formData.interests || {
      enabled: false,
      value: "",
    },

    references: formData.references || {
      enabled: false,
      items: [],
    },

    // -----------------------------------------------
    // Flat values for templates that use them
    // -----------------------------------------------

    fullName: personal.fullName,
    jobTitle: personal.jobTitle,
    email: personal.email,
    phone: personal.phone,
    location: personal.location,
    linkedin: personal.linkedin,
    github: personal.github,
    summary: personal.summary,
    profileImage: personal.profileImage,
  };

  // ===================================================
  // TEMPLATE PROPS
  // ===================================================

  const templateProps = {
    formData: normalizedData,
    data: normalizedData,
  };

  // ===================================================
  // SELECT TEMPLATE COMPONENT
  // ===================================================

  const TemplateComponent =
    templateComponents[templateId] || ModernPreview;

  // ===================================================
  // RENDER
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

        margin: 0,
        padding: 0,

        backgroundColor: "#FFFFFF",
        color: "#111827",

        boxSizing: "border-box",

        overflow: "hidden",

        position: "relative",
      }}
    >
      <TemplateComponent {...templateProps} />
    </div>
  );
}

export default ResumePreview;