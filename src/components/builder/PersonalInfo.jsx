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
    h-12
    w-full
    rounded-xl
    border
    border-[#E2E8F0]
    bg-[#F8FAFC]
    px-4
    text-sm
    font-medium
    text-[#111827]
    outline-none
    transition-all
    duration-200
    placeholder:text-[#718096]
    hover:border-[#CBD5E1]
    hover:bg-white
    focus:border-[#6366F1]
    focus:bg-white
    focus:ring-4
    focus:ring-[#EEF2FF]
  `

  const labelClass = `
    mb-2
    block
    text-[12px]
    font-bold
    tracking-wide
    text-[#334155]
  `

  const sectionTitleClass = `
    text-[15px]
    font-black
    tracking-tight
    text-[#111827]
  `

  const sectionDescriptionClass = `
    mt-1
    text-xs
    leading-5
    text-[#718096]
  `

  // =====================================================
  // SECTION HEADER
  // =====================================================

  const SectionHeader = ({
    title,
    description,
    optional = false,
  }) => (
    <div className="mb-5">
      <div className="flex items-center gap-3">
        <h3 className={sectionTitleClass}>
          {title}
        </h3>

        <div className="h-px flex-1 bg-[#E2E8F0]" />

        {optional && (
          <span
            className="
              shrink-0
              rounded-full
              border
              border-[#E2E8F0]
              bg-[#F8FAFC]
              px-2.5
              py-1
              text-[9px]
              font-bold
              uppercase
              tracking-wider
              text-[#718096]
            "
          >
            Optional
          </span>
        )}
      </div>

      {description && (
        <p className={sectionDescriptionClass}>
          {description}
        </p>
      )}
    </div>
  )

  // =====================================================
  // RENDER
  // =====================================================

  return (
    <section
      className="
    flex
    h-full
    min-h-0
    flex-col
    overflow-hidden
    bg-white
  "
    >
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div
        className="
          shrink-0
          border-b
          border-[#E2E8F0]
          bg-white
          px-6
          py-6
          sm:px-8
          sm:py-7
        "
      >
        <div className="flex items-start gap-4">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[#E0E7FF]
              bg-[#EEF2FF]
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
                  font-black
                  uppercase
                  tracking-[0.18em]
                  text-[#6366F1]
                "
              >
                Step 01
              </span>
            </div>

            <h2
              className="
                mt-1.5
                text-2xl
                font-black
                tracking-tight
                text-[#111827]
              "
            >
              Personal information
            </h2>

            <p
              className="
                mt-1.5
                max-w-2xl
                text-sm
                leading-6
                text-[#718096]
              "
            >
              Add your basic information so employers can
              easily contact you.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FORM CONTENT
      ===================================================== */}

      <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          bg-[#F8FAFC]
          px-5
          py-7
          sm:px-8
          sm:py-8
        "
      >
        <div className="mx-auto w-full max-w-[960px]">

          {/* =====================================================
              PROFILE PHOTO
          ===================================================== */}

          <section
            className="
              rounded-2xl
              border
              border-[#E2E8F0]
              bg-white
              p-5
              shadow-[0_3px_16px_rgba(15,23,42,0.035)]
              sm:p-6
            "
          >
            <SectionHeader
              title="Profile photo"
              description="Add a professional photo to personalize your resume."
              optional
            />

            <div
              className={`
                rounded-2xl
                border
                p-6
                transition-all
                duration-200
                sm:p-8
                ${isDragging
                  ? "border-[#6366F1] bg-[#EEF2FF]"
                  : "border-[#E2E8F0] bg-[#F8FAFC]"
                }
              `}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageChange}
                className="hidden"
              />

              {formData.profileImage ? (
                <div className="flex flex-col items-center">
                  <div className="relative">
                    <img
                      src={formData.profileImage}
                      alt="Profile preview"
                      className="
                        h-28
                        w-28
                        rounded-full
                        object-cover
                        ring-4
                        ring-[#EEF2FF]
                        ring-offset-2
                        ring-offset-white
                      "
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="
                        absolute
                        -right-1
                        -top-1
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#E2E8F0]
                        bg-white
                        text-sm
                        font-bold
                        text-[#475569]
                        shadow-sm
                        transition
                        hover:bg-[#F8FAFC]
                        hover:text-[#111827]
                      "
                      aria-label="Remove profile photo"
                    >
                      ×
                    </button>
                  </div>

                  <p className="mt-4 text-sm font-bold text-[#111827]">
                    Profile photo added
                  </p>

                  <p className="mt-1 text-xs text-[#718096]">
                    JPG, PNG or WEBP • Maximum 2MB
                  </p>

                  <button
                    type="button"
                    onClick={openFileSelector}
                    className="
                      mt-4
                      rounded-xl
                      border
                      border-[#E2E8F0]
                      bg-white
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      text-[#6366F1]
                      transition-all
                      hover:border-[#6366F1]
                      hover:bg-[#EEF2FF]
                    "
                  >
                    Change photo
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={openFileSelector}
                  className="
                    flex
                    w-full
                    flex-col
                    items-center
                    justify-center
                    text-center
                  "
                >
                  <div
                    className="
                      flex
                      h-16
                      w-16
                      items-center
                      justify-center
                      rounded-2xl
                      bg-[#EEF2FF]
                      text-[#6366F1]
                    "
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-7 w-7"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="16"
                        rx="2"
                      />

                      <circle
                        cx="8.5"
                        cy="9"
                        r="1.5"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4 17 4.5-4.5 3 3 2.5-2.5L20 19"
                      />
                    </svg>
                  </div>

                  <p className="mt-4 text-sm font-bold text-[#111827]">
                    Upload your profile photo
                  </p>

                  <p className="mt-1 text-xs text-[#718096]">
                    Click to browse or drag and drop an image here
                  </p>

                  <p className="mt-2 text-[11px] text-[#718096]">
                    JPG, PNG or WEBP • Maximum 2MB
                  </p>

                  <span
                    className="
                      mt-5
                      rounded-xl
                      bg-[#6366F1]
                      px-5
                      py-2.5
                      text-xs
                      font-bold
                      text-white
                      shadow-[0_5px_14px_rgba(99,102,241,0.18)]
                      transition
                      hover:bg-[#4F46E5]
                    "
                  >
                    Choose photo
                  </span>
                </button>
              )}

              {error && (
                <p className="mt-4 text-center text-xs font-semibold text-[#DC2626]">
                  {error}
                </p>
              )}
            </div>
          </section>

          {/* =====================================================
              BASIC INFORMATION
          ===================================================== */}

          <section
            className="
              mt-7
              rounded-2xl
              border
              border-[#E2E8F0]
              bg-white
              p-5
              shadow-[0_3px_16px_rgba(15,23,42,0.035)]
              sm:p-6
            "
          >
            <SectionHeader
              title="Basic information"
              description="Tell employers who you are."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* FULL NAME */}

              <div>
                <label
                  htmlFor="fullName"
                  className={labelClass}
                >
                  Full name
                  <span className="ml-1 text-[#6366F1]">
                    *
                  </span>
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName || ""}
                  onChange={handleChange}
                  placeholder="e.g. Arwa Khan"
                  autoComplete="name"
                  className={inputClass}
                />

                <p className="mt-2 text-[11px] text-[#718096]">
                  Use the name you want employers to see.
                </p>
              </div>

              {/* PROFESSIONAL TITLE */}

              <div>
                <label
                  htmlFor="jobTitle"
                  className={labelClass}
                >
                  Professional title
                  <span className="ml-1 text-[#6366F1]">
                    *
                  </span>
                </label>

                <input
                  id="jobTitle"
                  name="jobTitle"
                  type="text"
                  value={formData.jobTitle || ""}
                  onChange={handleChange}
                  placeholder="e.g. Frontend Developer"
                  autoComplete="organization-title"
                  className={inputClass}
                />
              </div>

            </div>
          </section>

          {/* =====================================================
              CONTACT INFORMATION
          ===================================================== */}

          <section
            className="
              mt-7
              rounded-2xl
              border
              border-[#E2E8F0]
              bg-white
              p-5
              shadow-[0_3px_16px_rgba(15,23,42,0.035)]
              sm:p-6
            "
          >
            <SectionHeader
              title="Contact information"
              description="Give employers a way to reach you."
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* EMAIL */}

              <div>
                <label
                  htmlFor="email"
                  className={labelClass}
                >
                  Email address
                  <span className="ml-1 text-[#6366F1]">
                    *
                  </span>
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={inputClass}
                />
              </div>

              {/* PHONE */}

              <div>
                <label
                  htmlFor="phone"
                  className={labelClass}
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
                  className={inputClass}
                />
              </div>

              {/* LOCATION */}

              <div className="md:col-span-2">
                <label
                  htmlFor="location"
                  className={labelClass}
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
                  className={inputClass}
                />
              </div>

            </div>
          </section>

          {/* =====================================================
              ONLINE PRESENCE
          ===================================================== */}

          <section
            className="
              mt-7
              rounded-2xl
              border
              border-[#E2E8F0]
              bg-white
              p-5
              shadow-[0_3px_16px_rgba(15,23,42,0.035)]
              sm:p-6
            "
          >
            <SectionHeader
              title="Online presence"
              description="Add professional profiles to strengthen your resume."
              optional
            />

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* LINKEDIN */}

              <div>
                <label
                  htmlFor="linkedin"
                  className={labelClass}
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
                      font-black
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
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

              {/* GITHUB */}

              <div>
                <label
                  htmlFor="github"
                  className={labelClass}
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
                      font-black
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
                    className={`${inputClass} pl-10`}
                  />
                </div>
              </div>

            </div>
          </section>

          {/* =====================================================
              PROFESSIONAL SUMMARY
          ===================================================== */}

          <section
            className="
              mt-7
              rounded-2xl
              border
              border-[#E2E8F0]
              bg-white
              p-5
              shadow-[0_3px_16px_rgba(15,23,42,0.035)]
              sm:p-6
            "
          >
            <SectionHeader
              title="Professional summary"
              description="Write a short summary that highlights your experience, strengths, and career goals."
            />

            <textarea
              name="summary"
              value={formData.summary || ""}
              onChange={handleChange}
              rows={7}
              placeholder="e.g. Frontend developer passionate about building clean, accessible and user-friendly web applications..."
              className="
                min-h-[170px]
                w-full
                resize-y
                rounded-xl
                border
                border-[#E2E8F0]
                bg-[#F8FAFC]
                px-4
                py-3.5
                text-sm
                leading-6
                text-[#111827]
                outline-none
                transition-all
                duration-200
                placeholder:text-[#718096]
                hover:border-[#CBD5E1]
                hover:bg-white
                focus:border-[#6366F1]
                focus:bg-white
                focus:ring-4
                focus:ring-[#EEF2FF]
              "
            />

            <div className="mt-2 flex items-center justify-between">
              <p className="text-[11px] text-[#718096]">
                Keep your summary concise and focused.
              </p>

              <span className="text-[10px] font-semibold text-[#718096]">
                {formData.summary?.length || 0} characters
              </span>
            </div>
          </section>

          {/* =====================================================
              PROFESSIONAL TIP
          ===================================================== */}

          <div
            className="
              mt-7
              flex
              items-start
              gap-3
              rounded-2xl
              border
              border-[#E0E7FF]
              bg-[#EEF2FF]
              px-5
              py-4
            "
          >
            <span
              className="
                flex
                h-7
                w-7
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#C7D2FE]
                bg-white
                text-[11px]
                font-black
                text-[#6366F1]
              "
            >
              i
            </span>

            <div>
              <p className="text-xs font-bold text-[#111827]">
                Keep it professional
              </p>

              <p className="mt-1 text-xs leading-5 text-[#475569]">
                Use a professional email address and make sure
                your LinkedIn and GitHub profiles are up to date.
              </p>
            </div>
          </div>

          {/* =====================================================
              COMPLETION
          ===================================================== */}

          <div
            className="
              mt-7
              rounded-2xl
              border
              border-[#E2E8F0]
              bg-white
              p-5
              shadow-[0_3px_16px_rgba(15,23,42,0.035)]
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[#111827]">
                  Personal information progress
                </p>

                <p className="mt-1 text-[10px] text-[#718096]">
                  Complete your profile to make your resume stronger.
                </p>
              </div>

              <span
                className="
                  rounded-full
                  bg-[#EEF2FF]
                  px-3
                  py-1.5
                  text-xs
                  font-black
                  text-[#4F46E5]
                "
              >
                {completionPercentage}%
              </span>
            </div>

            <div
              className="
                mt-4
                h-2
                overflow-hidden
                rounded-full
                bg-[#E2E8F0]
              "
            >
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

          <div className="h-4" />
        </div>
      </div>
    </section>
  )
}

export default PersonalInfo