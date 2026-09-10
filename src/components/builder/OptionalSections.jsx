import React from "react"

import Certifications from "./Certifications"
import Languages from "./Languages"
import Achievements from "./Achievements"
import Interests from "./Interests"
import References from "./References"

const OPTIONAL_SECTIONS = [
  { id: "certifications", title: "Certifications" },
  { id: "languages", title: "Languages" },
  { id: "achievements", title: "Achievements" },
  { id: "interests", title: "Interests" },
  { id: "references", title: "References" },
]

function OptionalSections({ formData, setFormData }) {
  const enableSection = (sectionId) => {
    setFormData((current) => {
      const existing = current[sectionId] || {}

      return {
        ...current,
        [sectionId]: { ...existing, enabled: true },
      }
    })
  }

  const disableSection = (sectionId) => {
    setFormData((current) => {
      if (sectionId === "interests") {
        return {
          ...current,
          interests: { enabled: false, value: "" },
        }
      }

      return {
        ...current,
        [sectionId]: { enabled: false, items: [] },
      }
    })
  }

  return (
    <div className="border-t border-[#E2E8F0] bg-white px-5 py-5 sm:px-8">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-bold text-[#111827]">Add more information</p>
          <p className="mt-0.5 text-[11px] leading-4 text-[#718096]">
            Optional sections for your resume.
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-[#EEF2FF] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wide text-[#6366F1]">
          Optional
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {OPTIONAL_SECTIONS.map((section) => {
          const isEnabled = formData?.[section.id]?.enabled === true

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => isEnabled ? disableSection(section.id) : enableSection(section.id)}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-2 text-[10px] font-semibold transition-all duration-200 ${
                isEnabled
                  ? "border-[#C7D2FE] bg-[#EEF2FF] text-[#4F46E5]"
                  : "border-[#E2E8F0] bg-white text-[#475569] hover:border-[#A5B4FC] hover:bg-[#EEF2FF] hover:text-[#4F46E5]"
              }`}
            >
              <span className="text-sm leading-none">{isEnabled ? "✓" : "+"}</span>
              <span>{section.title}</span>
            </button>
          )
        })}
      </div>

      {formData?.certifications?.enabled && (
        <div className="mt-4"><Certifications formData={formData} setFormData={setFormData} onRemove={() => disableSection("certifications")} /></div>
      )}
      {formData?.languages?.enabled && (
        <div className="mt-4"><Languages formData={formData} setFormData={setFormData} onRemove={() => disableSection("languages")} /></div>
      )}
      {formData?.achievements?.enabled && (
        <div className="mt-4"><Achievements formData={formData} setFormData={setFormData} onRemove={() => disableSection("achievements")} /></div>
      )}
      {formData?.interests?.enabled && (
        <div className="mt-4"><Interests formData={formData} setFormData={setFormData} onRemove={() => disableSection("interests")} /></div>
      )}
      {formData?.references?.enabled && (
        <div className="mt-4"><References formData={formData} setFormData={setFormData} onRemove={() => disableSection("references")} /></div>
      )}
    </div>
  )
}

export default OptionalSections
