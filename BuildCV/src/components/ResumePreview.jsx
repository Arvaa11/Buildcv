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
// BUILDCV — DEFAULT OPTIONAL SECTIONS
// =====================================================

const DEFAULT_CERTIFICATIONS = {
  enabled: false,
  items: [],
};

const DEFAULT_LANGUAGES = {
  enabled: false,
  items: [],
};

const DEFAULT_ACHIEVEMENTS = {
  enabled: false,
  items: [],
};

const DEFAULT_INTERESTS = {
  enabled: false,
  value: "",
};

const DEFAULT_REFERENCES = {
  enabled: false,
  items: [],
};

// =====================================================
// BUILDCV — SAFE ARRAY
// =====================================================

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

// =====================================================
// BUILDCV — SAFE OPTIONAL ARRAY SECTION
// =====================================================
//
// Supports:
//
// {
//   enabled: true,
//   items: [...]
// }
//
// Also safely handles an old/direct array format.
//

function normalizeArraySection(value, fallback) {
  if (Array.isArray(value)) {
    return {
      ...fallback,
      enabled: value.length > 0,
      items: value,
    };
  }

  if (value && typeof value === "object") {
    return {
      ...fallback,
      ...value,
      enabled:
        typeof value.enabled === "boolean"
          ? value.enabled
          : safeArray(value.items).length > 0,
      items: safeArray(value.items),
    };
  }

  return {
    ...fallback,
    items: [],
  };
}

// =====================================================
// BUILDCV — SAFE INTERESTS
// =====================================================
//
// Supports:
//
// {
//   enabled: true,
//   value: "Reading, Travel"
// }
//
// {
//   enabled: true,
//   items: ["Reading", "Travel"]
// }
//
// "Reading, Travel"
//
// ["Reading", "Travel"]
//

function normalizeInterests(value) {
  if (Array.isArray(value)) {
    return {
      enabled: value.length > 0,
      value: value.join(", "),
      items: value,
    };
  }

  if (typeof value === "string") {
    return {
      enabled: value.trim().length > 0,
      value,
      items: value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };
  }

  if (value && typeof value === "object") {
    const items = safeArray(value.items);

    const stringValue =
      typeof value.value === "string"
        ? value.value
        : items
            .map((item) => {
              if (typeof item === "string") return item;

              if (item && typeof item === "object") {
                return (
                  item.name ||
                  item.title ||
                  item.value ||
                  ""
                );
              }

              return "";
            })
            .filter(Boolean)
            .join(", ");

    return {
      ...DEFAULT_INTERESTS,
      ...value,
      enabled:
        typeof value.enabled === "boolean"
          ? value.enabled
          : stringValue.trim().length > 0,
      value: stringValue,
      items,
    };
  }

  return {
    ...DEFAULT_INTERESTS,
    items: [],
  };
}

// =====================================================
// BUILDCV — RESUME PREVIEW
// =====================================================

function ResumePreview({
  selectedTemplate = "modern",
  formData = {},
  previewId = "resume-preview",
  fitToContainer = false,
}) {
  // ===================================================
  // SAFETY
  // ===================================================

  const sourceData =
    formData && typeof formData === "object"
      ? formData
      : {};

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
    ...(sourceData.personal &&
    typeof sourceData.personal === "object"
      ? sourceData.personal
      : {}),
  };

  // ===================================================
  // NORMALIZED RESUME DATA
  // ===================================================
  //
  // IMPORTANT:
  // Start with ...sourceData.
  //
  // This means we DO NOT throw away any fields that
  // another template may use.
  //
  // Then normalize the known sections safely.
  // ===================================================

  const normalizedData = {
    // Preserve EVERYTHING coming from Builder
    ...sourceData,

    // -------------------------------------------------
    // Personal
    // -------------------------------------------------

    personal,

    // -------------------------------------------------
    // Required sections
    // -------------------------------------------------

    education: safeArray(sourceData.education),

    experience: safeArray(sourceData.experience),

    skills: safeArray(sourceData.skills),

    projects: safeArray(sourceData.projects),

    // -------------------------------------------------
    // Optional sections
    // -------------------------------------------------

    certifications: normalizeArraySection(
      sourceData.certifications,
      DEFAULT_CERTIFICATIONS
    ),

    languages: normalizeArraySection(
      sourceData.languages,
      DEFAULT_LANGUAGES
    ),

    achievements: normalizeArraySection(
      sourceData.achievements,
      DEFAULT_ACHIEVEMENTS
    ),

    references: normalizeArraySection(
      sourceData.references,
      DEFAULT_REFERENCES
    ),

    interests: normalizeInterests(
      sourceData.interests
    ),

    // -------------------------------------------------
    // Flat personal values
    //
    // Some templates use:
    // data.fullName
    //
    // while others use:
    // data.personal.fullName
    //
    // Keep BOTH formats available.
    // -------------------------------------------------

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
  //
  // Every template receives the SAME complete data.
  //
  // formData → normalizedData
  // data     → normalizedData
  //
  // This prevents one template from receiving less data
  // than another.
  // ===================================================

  const templateProps = {
    formData: normalizedData,
    data: normalizedData,
  };

  // ===================================================
  // SELECT TEMPLATE
  // ===================================================

  const TemplateComponent =
    templateComponents[templateId] ||
    ModernPreview;

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <div
      id={previewId}
      className={`resume-preview${
        fitToContainer
          ? " resume-preview--fit"
          : ""
      }`}
      data-template={templateId}
      style={{
        // ---------------------------------------------
        // A4 PAGE SIZE
        // ---------------------------------------------

        width: "210mm",
        minWidth: "210mm",

        minHeight: "297mm",
        height: "auto",

        // ---------------------------------------------
        // IMPORTANT:
        // NO GLOBAL PADDING
        //
        // Every template controls its own padding.
        // ---------------------------------------------

        margin: 0,
        padding: 0,

        // ---------------------------------------------
        // Resume background
        // ---------------------------------------------

        backgroundColor: "#FFFFFF",
        color: "#111827",

        // ---------------------------------------------
        // Layout
        // ---------------------------------------------

        boxSizing: "border-box",

        // ---------------------------------------------
        // IMPORTANT:
        // Never clip template content.
        // ---------------------------------------------

        overflow: "visible",

        position: "relative",

        flexShrink: 0,
      }}
    >
      <TemplateComponent
        {...templateProps}
      />
    </div>
  );
}

export default ResumePreview;
