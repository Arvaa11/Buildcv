import html2pdf from "html2pdf.js"

function DownloadButton() {
  const downloadResume = () => {
    const resume = document.getElementById("resume-preview")

    if (!resume) {
      alert("Resume preview is not available.")
      return
    }

    const options = {
      margin: 0,
      filename: "BuildCV-Resume.pdf",

      image: {
        type: "jpeg",
        quality: 0.98,
      },

      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      },

      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    }

    html2pdf()
      .set(options)
      .from(resume)
      .save()
  }

  return (
    <button
      type="button"
      onClick={downloadResume}
      className="
        w-full
        rounded-buildcv-md
        bg-buildcv-indigo
        px-5
        py-3
        text-sm
        font-semibold
        text-white
        shadow-buildcv-sm
        transition-all
        duration-200
        hover:-translate-y-0.5
        hover:bg-buildcv-indigo-600
        hover:shadow-buildcv-md
      "
    >
      ↓ Download Resume
    </button>
  )
}

export default DownloadButton