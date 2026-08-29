
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import TemplateSelector from "../components/templates/TemplateSelector"

// =====================================================
// STORAGE
// =====================================================

const TEMPLATE_STORAGE_KEY = "buildcv-selected-template"

// =====================================================
// COMPONENT
// =====================================================

function Templates() {
  const navigate = useNavigate()

  // ---------------------------------------------------
  // SELECTED TEMPLATE
  // ---------------------------------------------------

  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    try {
      return (
        localStorage.getItem(TEMPLATE_STORAGE_KEY) ||
        "modern"
      )
    } catch (error) {
      console.error(
        "Failed to load selected template:",
        error
      )

      return "modern"
    }
  })

  // ---------------------------------------------------
  // SELECT TEMPLATE
  // ---------------------------------------------------

  const handleSelectTemplate = (templateId) => {
    if (!templateId) return

    setSelectedTemplate(templateId)

    try {
      localStorage.setItem(
        TEMPLATE_STORAGE_KEY,
        templateId
      )
    } catch (error) {
      console.error(
        "Failed to save selected template:",
        error
      )
    }
  }

  // ---------------------------------------------------
  // CONTINUE TO BUILDER
  // ---------------------------------------------------

  const handleContinue = (templateId) => {
    const finalTemplateId =
      templateId || selectedTemplate

    if (!finalTemplateId) return

    try {
      localStorage.setItem(
        TEMPLATE_STORAGE_KEY,
        finalTemplateId
      )
    } catch (error) {
      console.error(
        "Failed to save selected template:",
        error
      )
    }

    setSelectedTemplate(finalTemplateId)

    navigate("/builder", {
      state: {
        selectedTemplate: finalTemplateId,
      },
    })
  }

  // ===================================================
  // RENDER
  // ===================================================

  return (
    <main className="min-h-screen bg-buildcv-background">
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={handleSelectTemplate}
        onContinue={handleContinue}
      />
    </main>
  )
}

export default Templates
