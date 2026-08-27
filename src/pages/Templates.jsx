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

  const [selectedTemplate, setSelectedTemplate] =
    useState(() => {
      return (
        localStorage.getItem(TEMPLATE_STORAGE_KEY) ||
        "modern"
      )
    })

  // =====================================================
  // CONTINUE TO BUILDER
  // =====================================================

  const handleContinue = (templateId) => {
    if (!templateId) return

    // Save selected template
    localStorage.setItem(
      TEMPLATE_STORAGE_KEY,
      templateId
    )

    // Update local state
    setSelectedTemplate(templateId)

    // Go to builder
    navigate("/builder", {
      state: {
        selectedTemplate: templateId,
      },
    })
  }

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <main>
      <TemplateSelector
        selectedTemplate={selectedTemplate}
        setSelectedTemplate={setSelectedTemplate}
        onContinue={handleContinue}
      />
    </main>
  )
}

export default Templates