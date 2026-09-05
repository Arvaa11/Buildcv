import { useEffect, useRef, useState } from "react"

import ClassicPreview from "./templates/ClassicPreview"
import MinimalPreview from "./templates/MinimalPreview"
import BoldPreview from "./templates/BoldPreview"
import CleanPreview from "./templates/CleanPreview"
import ModernPreview from "./templates/ModernPreview"
import ProfessionalPreview from "./templates/ProfessionalPreview"
import ExecutivePreview from "./templates/ExecutivePreview"
import TechPreview from "./templates/TechPreview"
import ElegantPreview from "./templates/ElegantPreview"
import AcademicPreview from "./templates/AcademicPreview"
import CreativePreview from "./templates/CreativePreview"
import PortfolioPreview from "./templates/PortfolioPreview"
import AuroraPreview from "./templates/AuroraPreview"
import MonarchPreview from "./templates/MonarchPreview"
import NexusPreview from "./templates/NexusPreview"
import SagePreview from "./templates/SagePreview"
import VertexPreview from "./templates/VertexPreview"
import MusePreview from "./templates/MusePreview"
import OrbitPreview from "./templates/OrbitPreview"
import NoirPreview from "./templates/NoirPreview"
import CoralPreview from "./templates/CoralPreview"
import OceanPreview from "./templates/OceanPreview"
import StellarPreview from "./templates/StellarPreview"
import AtelierPreview from "./templates/AtelierPreview"

// =====================================================
// TEMPLATE COMPONENTS
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
}

// =====================================================
// RESUME PREVIEW
// =====================================================
function ResumePreview({
  selectedTemplate = "modern",
  formData = {},
  previewId = "resume-preview",
  fitToContainer = false,
}) {
  const containerRef = useRef(null)

  const [scale, setScale] = useState(1)

  // ===================================================
  // TEMPLATE ID
  // ===================================================

  const templateId =
    typeof selectedTemplate === "string"
      ? selectedTemplate.trim().toLowerCase()
      : selectedTemplate?.id ||
        selectedTemplate?.slug ||
        selectedTemplate?.preview ||
        "modern"

  // ===================================================
  // PERSONAL
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
  }

  // ===================================================
  // NORMALIZED DATA
  // ===================================================

  const normalizedData = {
    personal,

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

    certifications:
      formData.certifications || {
        enabled: false,
        items: [],
      },

    languages:
      formData.languages || {
        enabled: false,
        items: [],
      },

    achievements:
      formData.achievements || {
        enabled: false,
        items: [],
      },

    interests:
      formData.interests || {
        enabled: false,
        value: "",
      },

    references:
      formData.references || {
        enabled: false,
        items: [],
      },

    fullName: personal.fullName,
    jobTitle: personal.jobTitle,
    email: personal.email,
    phone: personal.phone,
    location: personal.location,
    linkedin: personal.linkedin,
    github: personal.github,
    summary: personal.summary,
    profileImage: personal.profileImage,
  }

  // ===================================================
  // TEMPLATE
  // ===================================================

  const templateProps = {
    formData: normalizedData,
    data: normalizedData,
  }

  const TemplateComponent =
    templateComponents[templateId] ||
    ModernPreview

  // ===================================================
  // A4 FIT CALCULATION
  // ===================================================

  useEffect(() => {
    if (!fitToContainer) {
      setScale(1)
      return
    }

    const container =
      containerRef.current

    if (!container) {
      return
    }

    const updateScale = () => {
      const availableWidth =
        container.clientWidth

      const availableHeight =
        container.clientHeight

      if (
        availableWidth <= 0 ||
        availableHeight <= 0
      ) {
        return
      }

      // A4 dimensions in CSS pixels
      const A4_WIDTH = 794
      const A4_HEIGHT = 1123

      // Fit based on BOTH width and height.
      const widthScale =
        availableWidth / A4_WIDTH

      const heightScale =
        availableHeight / A4_HEIGHT

      const fittedScale =
        Math.min(
          widthScale,
          heightScale
        )

      setScale(fittedScale)
    }

    updateScale()

    const resizeObserver =
      new ResizeObserver(
        updateScale
      )

    resizeObserver.observe(container)

    window.addEventListener(
      "resize",
      updateScale
    )

    return () => {
      resizeObserver.disconnect()

      window.removeEventListener(
        "resize",
        updateScale
      )
    }
  }, [fitToContainer])

  // ===================================================
  // FITTED PREVIEW
  // ===================================================

  if (fitToContainer) {
    return (
      <div
        ref={containerRef}
        style={{
          width: "100%",
          height: "100%",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          overflow: "hidden",

          backgroundColor: "#F8FAFC",

          position: "relative",
        }}
      >

        <div
          id={previewId}
          className="resume-preview"
          data-template={templateId}
          style={{
            width: "794px",
            height: "1123px",

            minWidth: "794px",
            minHeight: "1123px",

            margin: 0,
            padding: 0,

            backgroundColor: "#FFFFFF",
            color: "#111827",

            boxSizing: "border-box",

            overflow: "visible",

            position: "absolute",

            top: "50%",
            left: "50%",

            transform: `
              translate(-50%, -50%)
              scale(${scale})
            `,

            transformOrigin: "center center",

            boxShadow:
              "0 4px 18px rgba(15, 23, 42, 0.10)",
          }}
        >

          <TemplateComponent
            {...templateProps}
          />

        </div>

      </div>
    )
  }

  // ===================================================
  // FULL A4 VERSION
  //
  // Used for PDF/export.
  // ===================================================

  return (
    <div
      id={previewId}
      className="resume-preview"
      data-template={templateId}
      style={{
        width: "794px",
        height: "1123px",

        minWidth: "794px",
        minHeight: "1123px",

        margin: 0,
        padding: 0,

        backgroundColor: "#FFFFFF",
        color: "#111827",

        boxSizing: "border-box",

        overflow: "visible",

        position: "relative",
      }}
    >

      <TemplateComponent
        {...templateProps}
      />

    </div>
  )
}
  // ===================================================
  // NORMAL A4 VERSION
  //
  // Used by PDF/download logic.
  // ===================================================

  return (
    <div
      id={previewId}
      className="resume-preview"
      data-template={templateId}
      style={{
        width: "794px",
        minWidth: "794px",

        height: "1123px",
        minHeight: "1123px",

        margin: 0,
        padding: 0,

        backgroundColor: "#FFFFFF",
        color: "#111827",

        boxSizing: "border-box",

        overflow: "visible",

        position: "relative",
      }}
    >

      <TemplateComponent
        {...templateProps}
      />

    </div>
  )


export default ResumePreview