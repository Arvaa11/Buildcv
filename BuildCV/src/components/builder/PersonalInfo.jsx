import { useRef, useState } from "react"

function PersonalInfo({ formData, setFormData }) {
  const fileInputRef = useRef(null)

  const [error, setError] = useState("")
  const [isDragging, setIsDragging] = useState(false)

  // =====================================================
  // TEXT INPUT HANDLER
  // =====================================================

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }))
  }

  // =====================================================
  // PROFILE IMAGE
  // =====================================================

  const processImage = (file) => {
    if (!file) return

    setError("")

    const allowedTypes = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ]

    if (!allowedTypes.includes(file.type)) {
      setError("Please upload a JPG, PNG, or WEBP image.")
      return
    }

    const maxSize = 2 * 1024 * 1024

    if (file.size > maxSize) {
      setError("Image size must be smaller than 2MB.")
      return
    }

    const reader = new FileReader()

    reader.onload = () => {
      setFormData((previous) => ({
        ...previous,
        profileImage: reader.result,
      }))
    }

    reader.onerror = () => {
      setError("Unable to read this image. Please try again.")
    }

    reader.readAsDataURL(file)
  }

  const handleImageChange = (event) => {
    const file = event.target.files?.[0]

    processImage(file)

    event.target.value = ""
  }

  const handleDragOver = (event) => {
    event.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (event) => {
    event.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (event) => {
    event.preventDefault()
    setIsDragging(false)

    const file = event.dataTransfer.files?.[0]

    processImage(file)
  }

  const openFileSelector = () => {
    fileInputRef.current?.click()
  }

  const removeImage = () => {
    setFormData((previous) => ({
      ...previous,
      profileImage: "",
    }))

    setError("")
  }

  // =====================================================
  // COMPLETION
  // =====================================================

  const fields = {
    profileImage: Boolean(formData.profileImage),
    fullName: Boolean(formData.fullName?.trim()),
    jobTitle: Boolean(formData.jobTitle?.trim()),
    email: Boolean(formData.email?.trim()),
    phone: Boolean(formData.phone?.trim()),
    location: Boolean(formData.location?.trim()),
    linkedin: Boolean(formData.linkedin?.trim()),
    github: Boolean(formData.github?.trim()),
  }

  const completedFields =
    Object.values(fields).filter(Boolean).length

  const totalFields = Object.keys(fields).length

  const completionPercentage =
    totalFields > 0
      ? Math.round((completedFields / totalFields) * 100)
      : 0

  // =====================================================
  // SHARED STYLES
  // =====================================================

  const inputClass = `
    w-full
    rounded-lg
    border
    border-[#E2E8F0]
    bg-white
    px-4
    py-3
    text-sm
    font-medium
    text-[#111827]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#718096]
    hover:border-[#CBD5E1]
    focus:border-[#6366F1]
    focus:ring-4
    focus:ring-[#6366F1]/10
  `

  const labelClass = `
    mb-2
    block
    text-sm
    font-semibold
    text-[#111827]
  `

  const sectionTitleClass = `
    text-sm
    font-bold
    text-[#111827]
  `

  const sectionDescriptionClass = `
    mt-1
    text-xs
    leading-5
    text-[#718096]
  `

  // =====================================================
  // RENDER
  // =====================================================

 
      return (
        <section
          className="
      flex
      h-[calc(100vh-190px)]
      min-h-[620px]
      flex-col
      overflow-hidden
      rounded-xl
      border
      border-[#E2E8F0]
      bg-white
    "
        >
          {/* =====================================================
        HEADER — FIXED
    ===================================================== */}

          <div
            className="
        shrink-0
        border-b
        border-[#E2E8F0]
        bg-white
        px-5
        py-5
        sm:px-7
        sm:py-6
      "
          >
            <div className="flex items-start gap-4">

              <div
                className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-lg
            bg-[#EEF2FF]
            text-sm
            font-black
            text-[#6366F1]
          "
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="8" r="3.5" />

                  <path
                    strokeLinecap="round"
                    d="M5.5 20c.8-3.3 3.1-5 6.5-5s5.7 1.7 6.5 5"
                  />
                </svg>
              </div>

              <div className="min-w-0">

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1]" />

                  <span
                    className="
                text-[10px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#6366F1]
              "
                  >
                    Step 01
                  </span>
                </div>

                <h2
                  className="
              mt-1.5
              text-xl
              font-bold
              tracking-tight
              text-[#111827]
              sm:text-2xl
            "
                >
                  Personal information
                </h2>

                <p
                  className="
              mt-1.5
              max-w-xl
              text-sm
              leading-6
              text-[#718096]
            "
                >
                  Add your basic information so employers can easily
                  contact you.
                </p>

              </div>
            </div>
          </div>

          {/* =====================================================
        SCROLLABLE FORM CONTENT
    ===================================================== */}

          <div
            className="
        min-h-0
        flex-1
        overflow-y-auto
        overscroll-contain
        px-5
        py-6
        sm:px-7
        sm:py-7
        scrollbar-thin
        scrollbar-track-transparent
        scrollbar-thumb-[#CBD5E1]
      "
          >

            {/* =====================================================
          PROFILE PHOTO
      ===================================================== */}

            <div>

              <div className="mb-5">

                <div className="flex items-center gap-3">

                  <h3 className="text-sm font-bold text-[#111827]">
                    Profile photo
                  </h3>

                  <div className="h-px flex-1 bg-[#E2E8F0]" />

                  <span
                    className="
                rounded-full
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                px-2.5
                py-1
                text-[10px]
                font-semibold
                text-[#718096]
              "
                  >
                    Optional
                  </span>

                </div>

                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  Add a professional photo to personalize your resume.
                </p>

              </div>

              {/* Your existing photo/upload JSX stays here */}

            </div>

            {/* =====================================================
          BASIC INFORMATION
      ===================================================== */}

            <div className="mt-10">

              <div className="mb-5">

                <div className="flex items-center gap-3">

                  <h3 className="text-sm font-bold text-[#111827]">
                    Basic information
                  </h3>

                  <div className="h-px flex-1 bg-[#E2E8F0]" />

                </div>

                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  Tell employers who you are.
                </p>

              </div>

              <div className="grid grid-cols-1 gap-5">

                {/* Full Name */}

                <div>
                  <label
                    htmlFor="fullName"
                    className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#111827]
              "
                  >
                    Full name
                    <span className="ml-1 text-[#6366F1]">*</span>
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName || ""}
                    onChange={handleChange}
                    placeholder="e.g. Arwa Khan"
                    autoComplete="name"
                    className="
                w-full
                rounded-lg
                border
                border-[#E2E8F0]
                bg-white
                px-4
                py-3
                text-sm
                font-medium
                text-[#111827]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#718096]
                hover:border-[#CBD5E1]
                focus:border-[#6366F1]
                focus:ring-4
                focus:ring-[#6366F1]/10
              "
                  />

                  <p className="mt-1.5 text-xs text-[#718096]">
                    Use the name you want employers to see.
                  </p>
                </div>

                {/* Professional Title */}

                <div>
                  <label
                    htmlFor="jobTitle"
                    className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#111827]
              "
                  >
                    Professional title
                    <span className="ml-1 text-[#6366F1]">*</span>
                  </label>

                  <input
                    id="jobTitle"
                    name="jobTitle"
                    type="text"
                    value={formData.jobTitle || ""}
                    onChange={handleChange}
                    placeholder="e.g. Frontend Developer"
                    autoComplete="organization-title"
                    className="
                w-full
                rounded-lg
                border
                border-[#E2E8F0]
                bg-white
                px-4
                py-3
                text-sm
                font-medium
                text-[#111827]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#718096]
                hover:border-[#CBD5E1]
                focus:border-[#6366F1]
                focus:ring-4
                focus:ring-[#6366F1]/10
              "
                  />
                </div>

              </div>
            </div>

            {/* =====================================================
          CONTACT INFORMATION
      ===================================================== */}

            <div className="mt-10">

              <div className="mb-5">

                <div className="flex items-center gap-3">

                  <h3 className="text-sm font-bold text-[#111827]">
                    Contact information
                  </h3>

                  <div className="h-px flex-1 bg-[#E2E8F0]" />

                </div>

                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  Give employers a way to reach you.
                </p>

              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#111827]
              "
                  >
                    Email address
                    <span className="ml-1 text-[#6366F1]">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="
                w-full
                rounded-lg
                border
                border-[#E2E8F0]
                bg-white
                px-4
                py-3
                text-sm
                text-[#111827]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#718096]
                focus:border-[#6366F1]
                focus:ring-4
                focus:ring-[#6366F1]/10
              "
                  />
                </div>

                {/* Phone */}

                <div>
                  <label
                    htmlFor="phone"
                    className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#111827]
              "
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    autoComplete="tel"
                    className="
                w-full
                rounded-lg
                border
                border-[#E2E8F0]
                bg-white
                px-4
                py-3
                text-sm
                text-[#111827]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#718096]
                focus:border-[#6366F1]
                focus:ring-4
                focus:ring-[#6366F1]/10
              "
                  />
                </div>

                {/* Location */}

                <div className="sm:col-span-2">

                  <label
                    htmlFor="location"
                    className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#111827]
              "
                  >
                    Location
                  </label>

                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location || ""}
                    onChange={handleChange}
                    placeholder="e.g. Islamabad, Pakistan"
                    autoComplete="address-level2"
                    className="
                w-full
                rounded-lg
                border
                border-[#E2E8F0]
                bg-white
                px-4
                py-3
                text-sm
                text-[#111827]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#718096]
                focus:border-[#6366F1]
                focus:ring-4
                focus:ring-[#6366F1]/10
              "
                  />

                </div>

              </div>
            </div>

            {/* =====================================================
          ONLINE PRESENCE
      ===================================================== */}

            <div className="mt-10">

              <div className="mb-5">

                <div className="flex items-center gap-3">

                  <h3 className="text-sm font-bold text-[#111827]">
                    Online presence
                  </h3>

                  <div className="h-px flex-1 bg-[#E2E8F0]" />

                  <span
                    className="
                rounded-full
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                px-2.5
                py-1
                text-[10px]
                font-semibold
                text-[#718096]
              "
                  >
                    Optional
                  </span>

                </div>

                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  Add professional profiles to strengthen your resume.
                </p>

              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* LinkedIn */}

                <div>

                  <label
                    htmlFor="linkedin"
                    className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#111827]
              "
                  >
                    LinkedIn
                  </label>

                  <div className="relative">

                    <span
                      className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-xs
                  font-bold
                  text-[#6366F1]
                "
                    >
                      in
                    </span>

                    <input
                      id="linkedin"
                      name="linkedin"
                      type="url"
                      value={formData.linkedin || ""}
                      onChange={handleChange}
                      placeholder="linkedin.com/in/yourname"
                      className="
                  w-full
                  rounded-lg
                  border
                  border-[#E2E8F0]
                  bg-white
                  py-3
                  pl-10
                  pr-4
                  text-sm
                  text-[#111827]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-[#718096]
                  focus:border-[#6366F1]
                  focus:ring-4
                  focus:ring-[#6366F1]/10
                "
                    />

                  </div>
                </div>

                {/* GitHub */}

                <div>

                  <label
                    htmlFor="github"
                    className="
                mb-2
                block
                text-sm
                font-semibold
                text-[#111827]
              "
                  >
                    GitHub
                  </label>

                  <div className="relative">

                    <span
                      className="
                  pointer-events-none
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[10px]
                  font-bold
                  text-[#6366F1]
                "
                    >
                      GH
                    </span>

                    <input
                      id="github"
                      name="github"
                      type="url"
                      value={formData.github || ""}
                      onChange={handleChange}
                      placeholder="github.com/yourname"
                      className="
                  w-full
                  rounded-lg
                  border
                  border-[#E2E8F0]
                  bg-white
                  py-3
                  pl-10
                  pr-4
                  text-sm
                  text-[#111827]
                  outline-none
                  transition-all
                  duration-200
                  placeholder:text-[#718096]
                  focus:border-[#6366F1]
                  focus:ring-4
                  focus:ring-[#6366F1]/10
                "
                    />

                  </div>
                </div>

              </div>
            </div>

            {/* =====================================================
          PROFESSIONAL SUMMARY
      ===================================================== */}

            <div className="mt-10">

              <div className="mb-5">

                <div className="flex items-center gap-3">

                  <h3 className="text-sm font-bold text-[#111827]">
                    Professional summary
                  </h3>

                  <div className="h-px flex-1 bg-[#E2E8F0]" />

                </div>

                <p className="mt-1 text-xs leading-5 text-[#718096]">
                  Write a short summary that highlights your experience,
                  strengths, and career goals.
                </p>

              </div>

              <textarea
                name="summary"
                value={formData.summary || ""}
                onChange={handleChange}
                rows={6}
                placeholder="e.g. Frontend developer passionate about building clean, accessible and user-friendly web applications..."
                className="
            min-h-[150px]
            w-full
            resize-y
            rounded-lg
            border
            border-[#E2E8F0]
            bg-white
            px-4
            py-3
            text-sm
            leading-6
            text-[#111827]
            outline-none
            transition-all
            duration-200
            placeholder:text-[#718096]
            hover:border-[#CBD5E1]
            focus:border-[#6366F1]
            focus:ring-4
            focus:ring-[#6366F1]/10
          "
              />

            </div>

            {/* =====================================================
          PROFESSIONAL TIP
      ===================================================== */}

            <div
              className="
          mt-10
          flex
          items-start
          gap-3
          rounded-lg
          border
          border-[#E0E7FF]
          bg-[#EEF2FF]
          px-4
          py-3.5
        "
            >

              <span
                className="
            flex
            h-6
            w-6
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-[#E0E7FF]
            text-[10px]
            font-bold
            text-[#6366F1]
          "
              >
                i
              </span>

              <div>

                <p className="text-xs font-semibold text-[#111827]">
                  Keep it professional
                </p>

                <p className="mt-0.5 text-xs leading-5 text-[#475569]">
                  Use a professional email address and make sure
                  your LinkedIn and GitHub profiles are up to date.
                </p>

              </div>

            </div>

            {/* =====================================================
          COMPLETION
      ===================================================== */}

            <div className="mt-8 pb-2">

              <div className="flex items-center justify-between">

                <p className="text-xs font-semibold text-[#111827]">
                  Personal information progress
                </p>

                <span className="text-xs font-bold text-[#6366F1]">
                  {completionPercentage}%
                </span>

              </div>

              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#E2E8F0]">

                <div
                  className="
              h-full
              rounded-full
              bg-[#6366F1]
              transition-all
              duration-300
            "
                  style={{
                    width: `${completionPercentage}%`,
                  }}
                />

              </div>

            </div>

          </div>

        </section>
      )


}

export default PersonalInfo
