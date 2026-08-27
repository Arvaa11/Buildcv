import { jsPDF } from "jspdf"

const pageMargin = 18
const pageBottom = 282

const formatDate = (value) => {
  if (!value) return ""

  const [year, month] = value.split("-")

  if (!year || !month) return value

  return new Date(Number(year), Number(month) - 1)
    .toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
}

const sanitizeFilename = (value) =>
  (value || "BuildCV")
    .trim()
    .replace(/[<>:"/\\|?*]|\p{Cc}/gu, "-") || "BuildCV"

export function downloadResumePdf(formData = {}) {
  const pdf = new jsPDF({
    unit: "mm",
    format: "a4",
    orientation: "portrait",
    compress: true,
  })

  let cursorY = pageMargin

  const ensureSpace = (height) => {
    if (cursorY + height <= pageBottom) return

    pdf.addPage()
    cursorY = pageMargin
  }

  const writeLines = (text, size = 10, indent = pageMargin) => {
    if (!text) return

    pdf.setFontSize(size)
    const lines = pdf.splitTextToSize(
      String(text),
      210 - pageMargin - indent
    )

    ensureSpace(lines.length * (size * 0.45) + 3)
    pdf.text(lines, indent, cursorY)
    cursorY += lines.length * (size * 0.45) + 3
  }

  const section = (title) => {
    ensureSpace(12)
    cursorY += 3
    pdf.setDrawColor(79, 70, 229)
    pdf.line(pageMargin, cursorY, 192, cursorY)
    cursorY += 5
    pdf.setFont("helvetica", "bold")
    pdf.setTextColor(31, 41, 55)
    pdf.setFontSize(11)
    pdf.text(title.toUpperCase(), pageMargin, cursorY)
    cursorY += 6
    pdf.setFont("helvetica", "normal")
  }

  const contact = [
    formData.email,
    formData.phone,
    formData.location,
    formData.linkedin,
    formData.github,
  ].filter(Boolean).join("  •  ")

  pdf.setTextColor(17, 24, 39)
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(22)
  writeLines(formData.fullName || "Your Name", 22)

  if (formData.jobTitle) {
    pdf.setTextColor(79, 70, 229)
    writeLines(formData.jobTitle, 12)
  }

  pdf.setTextColor(71, 85, 105)
  writeLines(contact, 9)
  pdf.setTextColor(31, 41, 55)

  if (formData.summary) {
    section("Professional Summary")
    writeLines(formData.summary)
  }

  if (Array.isArray(formData.experience) && formData.experience.length) {
    section("Experience")
    formData.experience.forEach((entry) => {
      ensureSpace(16)
      pdf.setFont("helvetica", "bold")
      writeLines(
        [entry.position, entry.company].filter(Boolean).join(" — "),
        10
      )
      pdf.setFont("helvetica", "normal")
      writeLines(
        [formatDate(entry.startDate), entry.current ? "Present" : formatDate(entry.endDate)]
          .filter(Boolean)
          .join(" – "),
        8
      )
      writeLines(entry.description, 9)
    })
  }

  if (Array.isArray(formData.education) && formData.education.length) {
    section("Education")
    formData.education.forEach((entry) => {
      pdf.setFont("helvetica", "bold")
      writeLines(
        [entry.degree, entry.school].filter(Boolean).join(" — "),
        10
      )
      pdf.setFont("helvetica", "normal")
      writeLines(
        [formatDate(entry.startDate), formatDate(entry.endDate)]
          .filter(Boolean)
          .join(" – "),
        8
      )
    })
  }

  if (Array.isArray(formData.skills) && formData.skills.length) {
    section("Skills")
    writeLines(formData.skills.filter(Boolean).join("  •  "))
  }

  if (Array.isArray(formData.projects) && formData.projects.length) {
    section("Projects")
    formData.projects.forEach((entry) => {
      pdf.setFont("helvetica", "bold")
      writeLines(entry.name, 10)
      pdf.setFont("helvetica", "normal")
      writeLines(entry.description, 9)
      writeLines(
        [entry.liveUrl, entry.githubUrl].filter(Boolean).join("  •  "),
        8
      )
    })
  }

  pdf.save(`${sanitizeFilename(formData.fullName)}-Resume.pdf`)
}
